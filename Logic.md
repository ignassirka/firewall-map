# Logic Specification — Firewall map

> Documents all behavioral logic, state flows, component relationships, decision trees, and interaction rules.
> Keep this document updated with every change.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [State Management](#state-management)
3. [VPN Connection Lifecycle](#vpn-connection-lifecycle)
4. [Left Panel Routing](#left-panel-routing)
5. [Map Marker Behavior](#map-marker-behavior)
6. [Map Layer System](#map-layer-system)
7. [User Location Pin](#user-location-pin)
8. [Connection Card Logic](#connection-card-logic)
9. [Connection Details Bar Logic](#connection-details-bar-logic)
10. [Right Panel & Flyout Hover Logic](#right-panel--flyout-hover-logic)
11. [Country Spotlight & Recommendations](#country-spotlight--recommendations)
12. [Recommended Actions](#recommended-actions)
13. [Worldwide Explorer](#worldwide-explorer)
14. [Country Detail Navigation](#country-detail-navigation)
15. [Country Browser — Countries Tab](#country-browser--countries-tab)
16. [Country Browser — Profiles Tab](#country-browser--profiles-tab)
17. [Country Browser — Recents Tab](#country-browser--recents-tab)
18. [Physical Country Simulation](#physical-country-simulation)
19. [Transition & Animation System](#transition--animation-system)

---

## Architecture Overview

```
App (root state owner)
 ├── WorldMap
 │    ├── Leaflet map + 93 country markers + user location pin
 │    ├── StatusGradient (top edge)
 │    ├── ConnectionDetails (bottom bar)
 │    ├── ConnectionCardLeft1 (center top)
 │    ├── RightVpnFeatures (right panel)
 │    │    └── MapLayers (dropdown, conditional)
 │    └── VpnFeatureFlyout (conditional, fixed-positioned)
 └── ISPRegulationsPanel (left panel shell)
      ├── CountryBrowser (when no layer active)
      │    ├── Recents tab
      │    ├── Countries tab (with filter sub-tabs)
      │    └── Profiles tab
      └── HomeView / CountryDetailView (when layer active)
           ├── CountrySpotlight
           ├── VPN Recommendations
           ├── RecommendedActions
           └── ExploreWorldwide
```

**Data flows top-down.** All shared state lives in `App`. Child components receive state via props and communicate upward via callbacks. There is no global store or context — the prop tree is the single source of truth.

---

## State Management

### App-Level State

| State | Type | Default | Owner |
|-------|------|---------|-------|
| `selectedCountry` | `string \| null` | `null` | `App` |
| `selectedMapLayer` | `MapLayerOption` | `"none"` | `App` |
| `vpnStatus` | `VpnStatus` | `"unprotected"` | `App` |
| `connectedCountry` | `string \| null` | `null` | `App` |
| `physicalCountry` | `string` | `"Belarus"` | `App` |

### Prop Wiring (who gets what)

**WorldMap receives:** all 5 states + `onSelectCountry`, `onSelectMapLayer`, `onConnect`, `onDisconnect`, `onPhysicalCountryChange`

**ISPRegulationsPanel receives:** `selectedCountry` (as `externalSelectedCountry`), `selectedMapLayer` (as `activeLayer`), `vpnStatus`, `connectedCountry`, `physicalCountry` + `onCountryChange`, `onClearLayer`, `onVpnConnect`, `onVpnDisconnect`

### Key Rule: No Duplicated State

`selectedCountry` is shared between the map and panel. When the user clicks a marker on the map, `App.handleMapSelect` fires → `selectedCountry` updates → both WorldMap and ISPRegulationsPanel re-render with the new value. When the panel navigates to a country detail, `App.handlePanelChange` fires → same state updates → the map reacts (flies to that country, highlights its marker).

---

## VPN Connection Lifecycle

```
     ┌──────────────┐
     │  unprotected  │ ←──── handleDisconnect()
     └──────┬───────┘
            │ handleConnect(country)
            ▼
     ┌──────────────┐
     │  connecting   │ ←──── connectedCountry set, timer starts
     └──────┬───────┘
            │ 3000ms timeout
            ▼
     ┌──────────────┐
     │  protected    │
     └──────────────┘
```

### Rules

1. **Connect:** Calling `handleConnect(country)` immediately sets `connectedCountry` and `vpnStatus = "connecting"`. A 3-second `setTimeout` then transitions to `"protected"`.
2. **Disconnect:** Calling `handleDisconnect()` immediately clears the timer, sets `vpnStatus = "unprotected"`, and nulls `connectedCountry`.
3. **Re-connect while connecting:** If the user connects to a different country while already connecting, the previous timer is cleared (`clearTimeout`) and a fresh 3-second timer starts for the new country.
4. **No server-side simulation:** This is a prototype; there is no real VPN tunnel. The 3-second delay simulates network handshake time.

### Where Connect Can Be Triggered

| Location | Trigger |
|----------|---------|
| Country row in CountryBrowser | Click row (no layer mode) |
| "Fastest country" row | Click row (no layer mode) |
| Connection Card button | Click "Connect" / "Disconnect" |
| Map marker click | Click marker (no layer mode) |
| VPN Recommendation Row | Click green "Connect" button (layer mode) |

### Where Disconnect Can Be Triggered

| Location | Trigger |
|----------|---------|
| Country row (connected country) | Click row again |
| Connection Card | Click "Disconnect" or "Cancel" |

---

## Left Panel Routing

The left panel (`ISPRegulationsPanel`) is a conditional router:

```
activeLayer === "none"
  → render CountryBrowser (3 tabs: Recents / Countries / Profiles)

activeLayer !== "none"
  → render layer analysis UI with internal view state:
      view === "home"   → HomeView (spotlight + recommendations + actions)
      view === "detail" → CountryDetailView (full country analysis)
```

### View Transitions

- **Home → Detail:** Triggered by clicking "See full details" in CountrySpotlight, a country in ExploreWorldwide, "Details" in VPN Recommendation, or clicking a map marker while a layer is active.
- **Detail → Home:** Triggered by clicking "Back" button in CountryDetailView.
- **Layer change:** Switching to a different layer resets `view` to `"home"` and clears `selectedCountry`.
- **Clearing layer:** Clicking the X button in HomeView header calls `onClearLayer` → App sets `selectedMapLayer = "none"` → panel switches to CountryBrowser.

Transitions use `AnimatePresence` with spring physics: `stiffness: 340, damping: 32, mass: 0.9`. Detail slides in from the right (`x: "100%"`), home slides in from the left (`x: "-40%"`).

### External Selection Sync

When `externalSelectedCountry` prop changes (e.g., user clicks a map marker while a layer is active), the panel:
1. Sets internal `selectedCountry` to match
2. Switches `view` to `"detail"`
3. This shows the CountryDetailView for that country

---

## Map Marker Behavior

### 93 Country Markers

Each of the 93 countries has a Leaflet marker placed at its geographic coordinates.

### Click Behavior (depends on mode)

| Mode | Marker Click Action |
|------|-------------------|
| No layer (`selectedMapLayer === "none"`) | Calls `onConnect(countryName)` — initiates VPN connection |
| Layer active | Calls `onSelectCountry(countryName)` — selects country for detail view |

This behavior is re-bound via `useEffect` whenever `selectedMapLayer` changes.

### Icon Styles (depends on mode)

| Mode | Icon Factory | Appearance |
|------|-------------|------------|
| No layer | `createCircleDotIcon()` | 32×32 concentric circles: halo, glow, purple dot, white dot |
| Layer active | `createDiamondIcon()` | Rotated diamond, color from `getTierColor()` |

### Hover / Active States

**Circle dot (no layer):**
- Default: white dot visible (85%), glow at 16%
- Hover: halo fades in (10%), glow full (100%), purple dot appears, white dot fades out
- Active (selected): glow at 32%, white dot at 100%

**Diamond (layer active):**
- Default: tier-colored diamond with glow
- Hover: scale 1.3× via CSS
- Active (selected): scale 1.375×, stronger glow (8px drop-shadow)

### Tooltips

Every marker has a bound Leaflet tooltip that updates content based on the current mode:
- No layer: "Connect - {Country}"
- Layer active: "Explore - {Country}"

Tooltip appears on hover, positioned above the marker (offset `[0, -10]`).

### Camera Behavior

When `selectedCountry` changes, the map calls `flyTo()` to zoom to that country at zoom level 5 (duration 1.2s, easeLinearity 0.35).

---

## Map Layer System

### 6 Options

`"none" | "privacy-score" | "surveillance" | "isp-regulations" | "identity" | "p2p"`

### Layer Activation Flow

1. User hovers Map Layer button in RightVpnFeatures → after 500ms delay, MapLayers dropdown opens.
2. User clicks a layer option → `handleSelectLayer` fires → dropdown closes → `onSelectMapLayer` propagates to App.
3. App updates `selectedMapLayer` → both WorldMap and ISPRegulationsPanel re-render.

### What Changes When a Layer Activates

| Component | Effect |
|-----------|--------|
| Map markers | Switch from circle dots to colored diamonds; colors reflect each country's tier |
| Marker tooltips | Text changes from "Connect" to "Explore" |
| Marker click | Changes from triggering VPN connection to selecting country for detail |
| Left panel | Switches from CountryBrowser to layer analysis HomeView |
| Map flash | Radial gradient flash overlay (600ms) |
| Map blur | Blurs 1.5px + dims to 0.85 brightness for 1 second |
| Label pill | "{Layer name} layer is activated" shown for 3 seconds below ConnectionCard |

### Tier Classification

Each layer maps every country to one of 3 tiers: `"high"` (good), `"medium"`, `"low"` (bad). Countries not explicitly mapped default to `"medium"`.

Tier → color mapping is consistent:
- High: `#4bb99d` (green)
- Medium: `#ffad33` (amber)
- Low: `#f7607b` (red)

---

## User Location Pin

A special Leaflet marker representing the user's simulated physical location.

### Positioning Logic

| Condition | Pin Location |
|-----------|-------------|
| `vpnStatus === "unprotected"` | Physical country coordinates |
| `vpnStatus === "connecting"` | Stays at physical country (does not move yet) |
| `vpnStatus === "protected"` | Moves to `connectedCountry` coordinates |
| `physicalCountry` changes while unprotected | Moves to new physical country |

### Visual Logic

| VPN Status | Dot Color | Ring Color | Pulsing |
|------------|-----------|------------|---------|
| Unprotected | `#F7607B` (red) | `#F7607B` | Yes (2.8s) |
| Connecting | `#F7607B` (red) | — | No (ring hidden) |
| Protected | `#2CFFCC` (green) | `#2CFFCC` | Yes (2.8s) |

### Camera Follow

When the pin moves (connect, disconnect, or physical country change), the map pans to center the pin in the **visible area** (accounting for panel offsets: `dX = 108.5px`, `dY = 27px`).

---

## Connection Card Logic

**File:** `src/imports/ConnectionCardLeft.tsx` (exported as `ConnectionCardLeft1`)

### Display State Machine

```
vpnStatus === "unprotected" && !selectedCountry
  → Show "Fastest country" with green fastest icon (54×36)
  → Button: "Connect" (purple #6d4aff)
  → Click: onConnect(physicalCountry)

vpnStatus === "unprotected" && selectedCountry
  → Show country flag (54×36) + country name (28px)
  → City subtitle from country-to-city mapping
  → Button: "Connect" (purple)
  → Click: onConnect(selectedCountry)

vpnStatus === "connecting"
  → Show connectedCountry flag + name
  → Button: "Cancel" (gray #4a4658)
  → Click: onDisconnect()

vpnStatus === "protected"
  → Show connectedCountry flag + name
  → Button: "Disconnect" (gray #4a4658)
  → Click: onDisconnect()
```

### Country-to-City Mapping

34 countries have city assignments (e.g., France → Paris, Germany → Frankfurt). Used as the subtitle under the country name. Countries without a mapping show no city.

---

## Connection Details Bar Logic

**File:** `src/imports/ConnectionDetails.tsx`

Horizontal bar at the bottom of the map. Content changes based on VPN status.

### Unprotected State

Shows real network info for the simulated physical country:
- IP address (from `physicalCountryData`)
- Country (dropdown selector — allows changing physical country)
- ISP/Provider name
- Red open-lock icon + warning message

### Connecting State (Transition Animation)

When VPN status changes to `"connecting"`:
1. IP and provider text start the **progressive asterisk mask** animation.
2. Each non-space character is replaced by `*` one at a time in random order.
3. Interval: 110ms per character.
4. Order is shuffled randomly each time connecting starts.
5. Animation runs to completion (stays fully masked).
6. Spinning loader icon replaces the lock.

### Protected State

Shows VPN connection info:
- VPN IP address (simulated)
- Server load percentage
- Protocol: "WireGuard"
- Total traffic (cumulative MB)
- Live traffic graph (SVG sparkline, 30 data points)
- Green filled-lock icon

### Traffic Graph Logic

- 30 data points maintained in a circular buffer
- New point generated every 500ms while protected
- Download: random 20–80 KB/s, Upload: random 5–25 KB/s
- Lines: Download `#4BB99D`, Upload `#F7607B`
- Scale: 0–100 KB/s
- Hover shows tooltip with exact values
- Grid lines at 0, 50, 100

### Physical Country Dropdown

- 7 simulated countries: Belarus, US, UK, Switzerland, India, Australia, Japan
- Changing selection calls `onPhysicalCountryChange` → App updates `physicalCountry` state
- This triggers: user pin relocation, connection details data change, spotlight country change in layer panel

---

## Right Panel & Flyout Hover Logic

### VPN Feature Button Hover Flow

Uses **delayed show/hide** to prevent flickering:

1. **Mouse enters** feature button → start 500ms show timer
2. **Mouse leaves** button → cancel show timer; start 150ms hide timer
3. **Mouse enters** flyout → cancel hide timer (flyout stays open)
4. **Mouse leaves** flyout → start 150ms hide timer
5. Flyout is positioned at `fixed` coordinates, calculated from the button's position: `top` matches button, `left` = button.left − flyoutWidth − 16px gap

### Map Layers Hover Flow

Same pattern:

1. **Mouse enters** Map Layer button → 500ms show timer → open dropdown
2. **Mouse leaves** button → cancel show timer only (don't close)
3. **Mouse enters** dropdown or right panel region → cancel hide timer
4. **Mouse leaves** the entire region (right panel + dropdown) → 150ms hide timer → close dropdown
5. Selecting a layer immediately closes the dropdown (no delay)

### Why Delayed Show/Hide

The flyout/dropdown and their trigger buttons have a physical gap between them. Without delayed hide, moving the mouse across the gap would close the panel. The 150ms grace period keeps the panel open while the cursor traverses the gap.

---

## Country Spotlight & Recommendations

### Country Spotlight Card

Shown in the "Your situation" tab when a layer is active.

**Input:** `physicalCountry` + `activeLayer`

**Logic:**
1. Look up the physical country's tier for the active layer via `getCountryTier(layer, country)`
2. Get the tier's color, label, and icon (Shield / ShieldAlert / ShieldOff)
3. Render risk meter (5 bars, filled count: low=5 segments, medium=3, high=1)
4. Show layer-specific risk items from `getSpotlightRisks(layer)`
5. "See full details" button navigates to CountryDetailView for the physical country

### VPN Recommendations

**Input:** `activeLayer` + `physicalCountry`

**Logic:** `getPhysicalCountryAwareRecommendations(layer, physicalCountry)` returns a ranked list:
1. If the physical country has a custom proximity-based ranking (7 countries supported: Belarus, US, UK, Switzerland, India, Australia, Japan), use that ordered list.
2. Filter out countries in the VPN exclusion list (Belarus, Russia, China, Iran, Vietnam, Saudi Arabia, Egypt, Turkey, Thailand, North Korea).
3. Only include countries with a "high" tier for the active layer.
4. Return with a per-country recommendation reason from `getRecommendationReason(layer, country)`.

**Display:**
- First 5 shown by default
- "Show more" button expands to full list
- "Show more" resets when layer or physical country changes
- Each row on hover reveals: "Details" link (→ CountryDetailView) + green "Connect" button

### Connected Toast

When the user connects from the recommendation list:
1. `handleConnect(name)` is called
2. Toast appears at bottom of left panel: "Connected to {country}"
3. Toast auto-dismisses after 3 seconds
4. Uses spring animation (stiffness 400, damping 30)

---

## Recommended Actions

**Location:** Below VPN recommendations in "Your situation" tab.

### Logic

Each layer defines 4 actions via `getLayerActions(layer)`. Each action has:
- `enabled: boolean` — whether the toggle is on
- `critical: boolean` — whether disabling it is a warning

### Toggle Behavior

Clicking an action row toggles its `enabled` state. This is **local state only** (no persistence).

### Visual States

| State | Track Color | Knob | Badge |
|-------|------------|------|-------|
| Enabled | `#2CFFCC` | `#16141c` (left: 16px) | Green checkmark |
| Disabled + Critical | `rgba(255,255,255,0.15)` | `rgba(255,255,255,0.5)` (left: 2px) | Amber warning triangle |
| Disabled + Non-critical | Same as above | Same | None |

### Counter

Header shows "{enabledCount}/{total} active" which updates reactively.

### Layer Change Reset

When the active layer changes, all actions reset to their default `enabled` values for the new layer (via `useEffect` on `layer` prop).

---

## Worldwide Explorer

**Location:** "Worldwide" tab in layer HomeView.

### Structure

Countries are grouped into 3 collapsible tier sections (high / medium / low).

### Accordion Logic

- Only one section can be open at a time (exclusive accordion)
- Default: "high" section is open
- Clicking an already-open section collapses it
- When searching: all sections with matching results expand simultaneously

### Search Logic

1. User types in search input → `searchQuery` state updates
2. Each tier's country list is filtered by `country.toLowerCase().includes(query.toLowerCase())`
3. Sections with 0 matching countries are hidden entirely
4. Search overrides accordion: all non-empty sections expand
5. Clear button (X icon) resets search

### Country Row Click

Clicking a country row calls `onSelectCountry(name)` → navigates to CountryDetailView for that country.

---

## Country Detail Navigation

### Entry Points

| Source | How |
|--------|-----|
| CountrySpotlight "See full details" | `onExploreCountry(physicalCountry)` |
| ExploreWorldwide country row | `onSelectCountry(name)` |
| VPN Recommendation "Details" | `onExplore()` → `onExploreCountry(name)` |
| Map marker click (layer active) | `onSelectCountry` → external prop → auto-navigate |

### Data Source

`CountryDetailView` reads from `countryData.ts` via `getCountryData()`. 35 countries have detailed data. If a country has no data, a fallback/generic view is shown.

### Sections

1. **Risk card** — colored by regulation level (strong/moderate/poor), shows level badge + risk meter
2. **"Being physically in {Country}"** — bullet points about physical presence risks
3. **"Connecting via VPN to {Country}"** — bullet points about VPN connection considerations
4. **"More regulatory details"** — collapsible section (animated chevron rotation), expanded on click
5. **Footer** — "Last updated {date}" + "{N} sources"

### Back Navigation

Clicking "Back" calls `handleBack()`:
1. Sets `view` to `"home"`
2. Clears `selectedCountry` to `null`
3. Calls `onCountryChange(null)` → App clears `selectedCountry` → map deselects marker

---

## Country Browser — Countries Tab

### Filter Sub-Tabs

| Tab | Country Source | Count |
|-----|---------------|-------|
| All | `allCountries` (93) | 93 |
| Secure Core | `secureCoreCountries` | 3 (Iceland, Sweden, Switzerland) |
| P2P | `p2pCountries` | 23 |
| Tor | `torCountries` | 7 |

### Search

Filters the current tab's country list by `country.toLowerCase().includes(query)`. Applied on top of the active filter tab.

### "Fastest Country" Row

Shown only when filter is "All" and search is empty. Uses the `Fastest` icon component instead of a flag. Connects to the user's physical country (simulates "fastest" by routing to nearest).

### Country Row Click Logic

| Current State | Click Action |
|---------------|-------------|
| Not connected, not connecting | `onConnect(country)` — starts VPN connection |
| Connected to this country | `onDisconnect()` — disconnects |
| Connecting to this country | `onDisconnect()` — cancels connection |

---

## Country Browser — Profiles Tab

### Data

6 static profile entries, each with:
- `id`, `title`, `subtitle`, `icon` (SVG path), optional `p2p` flag

### Row Behavior

- Hover: subtle background tint (`rgba(255,255,255,0.07)`), three-dots icon fades in on the right
- Three-dots: 44px wide right zone, purely visual (no dropdown implemented yet)
- P2P profile has a tag badge: arrow-icon + "P2P" label in a `rgba(255,255,255,0.05)` chip

### Section Header

"Profiles (6)" label + info circle icon directly next to the title (not pushed to far right). Header padding: 16px from panel edges (8px container + 8px internal).

### "New Profile" Button

Ghost button placed directly after the last profile row (inside scrollable area, not pinned to bottom). Purple `#9880FF` text + plus icon. Hover: `rgba(255,255,255,0.06)` background. No action implemented yet.

---

## Country Browser — Recents Tab

### Current State

Empty state only (no persistence implemented). Shows:
- 64×64 illustration SVG
- "No recents yet" (14px semibold)
- "View your connection history here." (14px regular, secondary)

### Future Logic (not yet implemented)

Would track recently connected servers and display them as a chronological list.

---

## Physical Country Simulation

### Purpose

The app simulates the user being physically located in a specific country. This affects:

1. **User location pin** — positioned at that country's coordinates
2. **Connection details** — shows that country's IP, ISP, provider
3. **Country Spotlight** — analyzes that country's risk for the active layer
4. **VPN recommendations** — ranked by proximity/relevance to that country
5. **"Fastest country" connection** — connects to the physical country
6. **Recommendation subtitles** — dynamically include the country name

### How to Change

The physical country is changed via the **country dropdown** in the ConnectionDetails bar. Only 7 countries are available: Belarus, US, UK, Switzerland, India, Australia, Japan.

### Cascade of Effects

```
User selects new physical country in dropdown
  → App.setPhysicalCountry(newCountry)
    → WorldMap: user pin moves to new coordinates, map pans
    → ConnectionDetails: IP and ISP update to new country's data
    → ISPRegulationsPanel (if layer active):
        → CountrySpotlight re-renders for new country
        → VPN recommendations re-rank for new country
        → "Show more" resets to collapsed
    → ConnectionCardLeft1: "Fastest country" now routes to new country
```

---

## Transition & Animation System

### Layer Transition Sequence

When a layer is activated or changed:

```
T=0ms:    Flash overlay appears (radial gradient, green tint)
          Map blurs (1.5px) + dims (brightness 0.85)
          Marker icons update to new style/colors
          All tooltips update text
T=400ms:  Layer label pill fades in below connection card
T=600ms:  Flash overlay fades out (animation end)
T=1000ms: Map blur + dim removed
T=3000ms: Layer label pill disappears
```

### Panel View Transitions

| Transition | Animation |
|------------|-----------|
| Home → Detail | Detail slides in from right (`x: 100% → 0`) |
| Detail → Home | Home slides in from left (`x: -40% → 0`) |
| Context → Worldwide tab | Worldwide slides in from right (`x: 20 → 0`) |
| Worldwide → Context tab | Context slides in from left (`x: -20 → 0`) |

All use `AnimatePresence mode="wait"` — the exiting view fully leaves before the entering view starts.

### Map Camera Animations

| Trigger | Animation |
|---------|-----------|
| Country selected | `flyTo([lat, lng], zoom: 5, duration: 1.2s)` |
| VPN connecting/protected | `panTo(visibleCenter, duration: 1.2s)` |
| VPN disconnected | `panTo(physicalCountry visibleCenter, duration: 1.0s)` |
| Physical country change | `panTo(newCountry visibleCenter, duration: 1.0s)` |

### Micro-Animations

| Element | Animation |
|---------|-----------|
| ActiveDot (connected country row) | Pulsing ring scale 0.85↔1.15, opacity 0.6↔1.0, 2.4s |
| User location pin ring | Scale 0.96↔1.04, 2.8s |
| Toggle switches | `transition-all duration-200` |
| Hover backgrounds | `transition-colors duration-150` |
| Marker glow/halo | `transition: opacity 0.3s ease` |
| Connected toast | Spring: stiffness 400, damping 30 |
| Collapsible chevrons | `motion.div rotate 0↔180°, duration 0.25s` |
