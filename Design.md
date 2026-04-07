# Design Specification — Mona Lisa Privacy Map

> Single source of truth for all UI components, interactions, layout, data, and design tokens.
> Keep this document updated with every change.

---

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Application Shell](#application-shell)
4. [Design Tokens](#design-tokens)
5. [Typography](#typography)
6. [World Map](#world-map)
7. [Left Panel — Country Browser](#left-panel--country-browser)
8. [Left Panel — ISP Regulations (Layer Active)](#left-panel--isp-regulations-layer-active)
9. [Country Detail View](#country-detail-view)
10. [Connection Card (Center Top)](#connection-card-center-top)
11. [Connection Details Bar (Bottom)](#connection-details-bar-bottom)
12. [Right Panel — VPN Features & Map Layers](#right-panel--vpn-features--map-layers)
13. [Map Layers Dropdown](#map-layers-dropdown)
14. [VPN Feature Flyouts](#vpn-feature-flyouts)
15. [Status Gradient](#status-gradient)
16. [Country & Layer Data](#country--layer-data)
17. [Flag System](#flag-system)
18. [File Map](#file-map)

---

## Overview

A Proton VPN–inspired interactive privacy map prototype. Users can browse 93 countries, connect to VPN servers, explore five privacy-related data layers, and manage connection profiles — all inside a single-page dark-themed interface built with React + Vite + Tailwind CSS.

The design is pixel-matched to a Figma source file (`qzGcfXk7hvUWOkjbrWnzxS`).

---

## Tech Stack

| Concern | Library / Tool |
|---------|---------------|
| Framework | React 18.3.1 |
| Build | Vite 6.3.5 + `@vitejs/plugin-react` |
| CSS | Tailwind CSS 4.1.12 (`@tailwindcss/vite`) |
| Map | Leaflet + react-leaflet |
| Animation | Framer Motion (`motion`) |
| Icons | Lucide React, MUI icons, Figma-exported SVGs |
| Flags | flagcdn.com CDN SVGs + `country-flag-icons` |
| Utilities | clsx |

---

## Application Shell

**File:** `src/app/App.tsx`

### Layout

| Property | Value |
|----------|-------|
| Viewport | `h-screen w-screen` |
| Background | `#0f0d14` |
| Container | `1170 × 830 px`, `rounded-[8px]`, centered with `p-6` |
| Border | `rgba(255,255,255,0.1)` 1px solid |
| Overflow | hidden |

### Global State (lifted to App)

| State | Type | Default | Purpose |
|-------|------|---------|---------|
| `selectedCountry` | `string \| null` | `null` | Country highlighted on map / in panel |
| `selectedMapLayer` | `MapLayerOption` | `"none"` | Active data layer overlay |
| `vpnStatus` | `VpnStatus` | `"unprotected"` | `"unprotected" \| "connecting" \| "protected"` |
| `connectedCountry` | `string \| null` | `null` | Country the VPN is "connected" to |
| `physicalCountry` | `string` | `"Belarus"` | Simulated user physical location |

### VPN Connection Flow

1. User clicks **Connect** → `vpnStatus` becomes `"connecting"`, `connectedCountry` set.
2. After **3 000 ms** timeout → `vpnStatus` becomes `"protected"`.
3. User clicks **Disconnect** → `vpnStatus` resets to `"unprotected"`, `connectedCountry` cleared.

---

## Design Tokens

### Colors

| Token | Hex / RGBA | Usage |
|-------|-----------|-------|
| App background | `#0f0d14` | Page fill, map container |
| Panel background | `#16141c` | Panel surfaces, tooltips |
| Glass light | `rgba(22,20,28,0.4)` | Right panel, flyouts |
| Glass medium | `rgba(22,20,28,0.75)` | Left panel |
| Border default | `rgba(255,255,255,0.1)` | Panel borders, dividers |
| Border emphasis | `rgba(255,255,255,0.2)` | Right panel, flyout borders |
| Text primary | `#FFFFFF` | Headings, active labels |
| Text secondary | `rgba(255,255,255,0.7)` | Body, subtitles, inactive nav |
| Text tertiary | `rgba(255,255,255,0.5)` | Section headers, shortcuts, placeholders |
| Text muted | `rgba(255,255,255,0.35)` | Empty state descriptions |
| Accent green | `#2CFFCC` | Protected state, connect buttons, fastest badge |
| Accent red | `#F7607B` | Unprotected state, high risk |
| Accent amber | `#ffad33` | Moderate risk |
| Accent teal | `#4bb99d` | Strong/low risk |
| Accent purple (brand) | `#6d4aff` | Connect button fill |
| Accent purple hover | `#8A6EFF` | Marker hover |
| Profile purple | `#9880FF` | "New profile" text, plus icon |
| Hover surface | `rgba(255,255,255,0.07–0.1)` | Row hovers |
| Active surface | `rgba(255,255,255,0.15–0.2)` | Active nav chip, selected layer |
| Subtle surface | `rgba(255,255,255,0.05–0.06)` | Search bar, tags, inactive surfaces |

### Backdrop Blur

| Context | Value |
|---------|-------|
| Left panel | `16px` |
| Right panel | `30px` |
| Flyouts | `60px` |
| Tooltips | `16px` |

### Border Radius

| Context | Value |
|---------|-------|
| App container | `8px` |
| Panel cards | `8–12px` |
| Nav chips / filter tabs | `4–8px` |
| Buttons | `4px` |
| Flags | `4px` |
| Country rows | `8px` |
| Risk badge | `full` (pill) |

---

## Typography

**File:** `src/styles/fonts.css`

### Font Stack

```
"Segoe UI Variable", "Segoe UI", Inter, system-ui, sans-serif
```

Inter is loaded from Google Fonts as a web fallback. `@font-face` aliases are declared for optical-size variants used by Figma exports.

### Text Styles

| Style | Size | Weight | Line Height | Optical Size | Feature Settings |
|-------|------|--------|-------------|--------------|------------------|
| Display Semibold | 28px | 600 | 1.25em (35px) | 36 | `'fina', 'init'` |
| Body Medium | 16px | 400 | 1.25em (20px) | 10.5 | `'rclt' 0` |
| Body Medium Strong | 16px | 600 | 1.25em (20px) | 10.5 | `'fina', 'init'` |
| Body | 14px | 400 | ~1.43em (20px) | 10.5 | `'rclt' 0` |
| Body Strong | 14px | 600 | ~1.43em (20px) | 10.5 | `'fina', 'init'` |
| Caption | 12px | 400 | 1.33em (16px) | 8 | `'rclt' 0` |
| Caption Strong | 12px | 600 | 1.33em (16px) | 8 | `'fina', 'init'` |
| Small | 11px | 400 | — | 8 | — |

### CSS Utility Constants (used in components)

```ts
const fontSemibold = { fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'fina', 'init'" };
const fontRegular  = { fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'rclt' 0" };
```

---

## World Map

**File:** `src/app/components/WorldMap.tsx`

### Tile Layer

| Property | Value |
|----------|-------|
| Provider | CartoDB Dark (no labels) |
| URL | `https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png` |
| Center | `[30, 20]` |
| Default zoom | 3 |
| Min / Max zoom | 2 / 7 |
| Max bounds | `[-85, -200]` to `[85, 200]` |
| Zoom controls | hidden |
| Attribution | custom, `rgba(255,255,255,0.25)` 10px |

### Visible Area Offset

The map's effective center is adjusted by `dX = 108.5px`, `dY = 27px` to account for the left panel and bottom bar overlapping the map.

### Country Markers (93 total)

**Default mode (no layer):** `createCircleDotIcon`
- 32×32px SVG with 4 concentric elements: halo (r=14, 0% opacity), glow (r=10, 12% white), purple dot (r=5, `#6D4AFF` at 0%), white dot (r=3, white at 80%).
- **Hover:** halo 10%, glow 100%, purple dot appears, white dot fades.
- **Active (selected):** glow 32%.

**Layer mode:** `createDiamondIcon`
- Rotated 45° square with glow. Color from `getTierColor()`.
- **Active:** 1.375× scale. **Hover:** 1.3× via CSS.

### Tooltip

Dark card: `bg: #16141c`, `backdrop-blur: 16px`, `rounded-[8px]`. Contains flag (20×13.333px) + country name (12px white).

### User Location Pin

96×96px. Radial gradient mask with pulsating outer ring (2.8s). Dot color: `#2CFFCC` (protected) / `#F7607B` (unprotected). White circle r=12, drop shadow, colored center r=6.

### Layer Transition

Flash overlay (radial gradient), 600ms. Map blurs 1.5px + dims to 0.85 brightness for 1s. Label pill appears for 3s.

---

## Left Panel — Country Browser

**File:** `src/app/components/CountryBrowser.tsx`

**Shown when:** `selectedMapLayer === "none"`

### Panel Positioning

| Property | Value |
|----------|-------|
| Position | absolute, z-1000 |
| Top / Left / Bottom | 8px |
| Width | 340px |
| Background | `rgba(22,20,28,0.75)`, `backdrop-blur: 16px` |
| Border | `rgba(255,255,255,0.1)` |
| Radius | `8px` |

### Search Bar

- Container: `bg-[rgba(255,255,255,0.05)]`, `rounded-[4px]`, `px-8 py-10`
- Icon: 16×16 search magnifier, `fillOpacity: 0.5`
- Input: 14px, placeholder `rgba(255,255,255,0.5)`, shortcut label "ctrl + F" (12px, tertiary)
- Outer padding: `px-12 pt-14 pb-8`

### Navigation Tabs

Three nav items in a vertical chip list (`px-12 py-8`, `gap-4`):

| Tab | Icon | Shortcut |
|-----|------|----------|
| Recents | Clock (16px SVG) | ctrl + 1 |
| Countries | Earth (16px SVG) | ctrl + 2 |
| Profiles | Terminal (16px SVG) | ctrl + 3 |

- **Active state:** `bg-[rgba(255,255,255,0.2)]`, text white, white vertical indicator bar (3×17px).
- **Inactive:** text `rgba(255,255,255,0.7)`.
- Chip inner padding: `pt-4 pb-5 px-8`, gap 4px between icon & label.

### Countries Tab

#### Filter Tabs

Horizontal row (`px-8`): **All** | **Secure Core** | **P2P** | **Tor**

- 14px text, active: white + 16×3px white underline indicator. Inactive: `rgba(255,255,255,0.7)`.
- Each tab: `pt-8 px-12`, gap 8px to indicator.

#### Section Header

- Text: Body Strong 14px, `rgba(255,255,255,0.5)`, e.g. "All countries (93)"
- Padding: `px-16 pt-12 pb-6`

#### Country Rows

Scrollable list (`px-8 pb-8`).

| Element | Spec |
|---------|------|
| Row height | 44px |
| Padding | 12px all sides |
| Gap | 12px (flag ↔ name) |
| Flag | 30×20px, `rounded-[4px]`, from flagcdn.com |
| Name | 16px regular, white |
| Hover | `rgba(255,255,255,0.1)` background, "Connect" label appears (16px semibold white) |
| Connected | Green `ActiveDot` (16×16, pulsing 2.4s) next to name |
| Border radius | 8px |

**"Fastest country" row** appears at top of "All" filter with a custom fastest icon (30×20).

#### Country Data

- **All countries:** 93 entries (A–Z from Albania to Vietnam)
- **Secure Core:** Iceland, Sweden, Switzerland
- **P2P:** 23 countries
- **Tor:** 7 countries

### Recents Tab (Empty State)

Centered vertically: 64×64 illustration SVG, "No recents yet" (14px semibold white), "View your connection history here." (14px regular, `rgba(255,255,255,0.7)`). Text block width: 172px.

### Profiles Tab

**Section padding:** `px-8` on the container.

#### Section Header

- "Profiles (6)" — 14px semibold, `rgba(255,255,255,0.7)`
- Info circle icon (16×16, `#A7A4B5`) immediately next to the title (not pushed to far right)
- Header padding: `16px 8px 8px` (top 16, horizontal 8 matching container, bottom 8)

#### Profile Rows (6 entries)

Each row is a horizontal container with `rounded-[8px]`, hover: `rgba(255,255,255,0.07)`.

| Element | Spec |
|---------|------|
| Icon | 30×30px SVG (Figma-exported, gradient purple + per-profile illustration) |
| Title | 16px regular, white (e.g. "Streaming US") |
| Subtitle | 14px regular, `rgba(255,255,255,0.7)` (e.g. "United States") |
| Gap (icon ↔ text) | 8px (from Figma layout_NDI5RO) |
| Title ↔ subtitle gap | 2px vertical |
| Padding (primary area) | 12px |
| Three-dots menu | 44px wide right zone, shown on hover (`opacity: 0 → 1`) |

**Profile data:**

| # | Title | Subtitle | Icon | Tags |
|---|-------|----------|------|------|
| 1 | Streaming US | United States | `profile-icon-streaming.svg` | — |
| 2 | Gaming | Fastest country | `profile-icon-gaming.svg` | — |
| 3 | P2P | Fastest country | `profile-icon-p2p.svg` | P2P badge |
| 4 | Anti-censorship | Fastest (excluding my country) | `profile-icon-anticensorship.svg` | — |
| 5 | Maximum security | Fastest - Secure Core | `profile-icon-security.svg` | — |
| 6 | Work and school | Fastest country | `profile-icon-business.svg` | — |

**P2P badge tag:** `bg-[rgba(255,255,255,0.05)]`, `rounded-[4px]`, `padding: 2px 6px`, gap 2px. Contains: arrows icon (14×14) + "P2P" text (12px semibold white).

#### "New Profile" Button

Placed directly after the last profile row.

- Ghost button: `rounded-[4px]`, `padding: 8px`, `gap: 8px`
- Plus icon: 20×20, fill `#9880FF`
- Label: "New profile", 16px semibold, `#9880FF`
- Hover: `rgba(255,255,255,0.06)` background
- Container padding: `4px 0px 8px`

---

## Left Panel — ISP Regulations (Layer Active)

**File:** `src/app/components/ISPRegulationsPanel.tsx`

**Shown when:** `selectedMapLayer !== "none"`

Same panel dimensions and glass styling as Country Browser.

### Views

Navigates between three views with `AnimatePresence` slide transitions (spring: stiffness 340, damping 32, mass 0.9):

1. **Home** — layer overview with tabs
2. **Detail** — `CountryDetailView` for a specific country
3. **Explore** — `ExploreWorldwide` expanded view

### Tab Switcher ("Your situation" / "Worldwide")

- Container: `bg-[rgba(255,255,255,0.06)]`, `rounded-full`, `p-1`
- Active tab: `bg-[rgba(255,255,255,0.1)]`, shadow, white text
- Inactive tab: `rgba(255,255,255,0.5)` text
- Text: 13px semibold

### "Your Situation" Tab

#### Layer Info Card

- Layer icon (28×28, colored per layer) + layer name (18px semibold)
- Description text (14px, secondary color)

#### Country Spotlight

- Gradient card: `rounded-[12px]`, colored border from risk level
- Flag + country name (16px semibold) + risk badge (pill, 12px semibold)
- `RiskMeter`: 5 segments, 6px tall, `gap-3px`, `rounded-full`. Filled segments: low=5, medium=3, high=1
- Risk item rows with severity labels
- "See full details" button at bottom

#### VPN Recommendations

- Section header "Top recommended VPN servers" (14px semibold, secondary)
- 3 rows, each with: rank number (16px semibold, secondary) + flag (30×20) + country name (14px)
- Hover: background tint, "Details" link + green "Connect" button (`#2CFFCC` bg, `#16141c` text)

#### Recommended Actions

- Toggle switches: 32×18px track, 14px knob
- Enabled: track `#2CFFCC`, knob `#16141c`
- Critical+disabled: track `rgba(255,173,51,0.06)`, amber warning triangle
- Text: action name (14px), description below

#### Connected Toast

- Bottom-aligned, spring animated
- Green border `#2CFFCC`, dark background, rounded-[12px]

### "Worldwide" Tab — ExploreWorldwide

- Collapsible tier sections with search
- Tier dots: 16×16, `rounded-[5px]`, colored by tier
- Country rows within each tier

---

## Country Detail View

**File:** `src/app/components/CountryDetailView.tsx`

Full-width view within the left panel, reached by clicking "See full details" from the spotlight card.

### Layout

- Back button (chevron left + "Back") at top
- Flag (30×20) + Country name (18px semibold)
- Risk card with colored top border (3px)
- Two sections: "Being physically in [Country]" and "Connecting via VPN to [Country]"
- Collapsible "More regulatory details" section (animated chevron)
- Footer: "Last updated [date]" + "[N] sources"

### Risk Levels

| Level | Color | Background | Border | Icon |
|-------|-------|------------|--------|------|
| Strong | `#4bb99d` | `rgba(75,185,157,0.12)` | `rgba(75,185,157,0.25)` | ShieldCheck |
| Moderate | `#ffad33` | `rgba(255,173,51,0.12)` | `rgba(255,173,51,0.25)` | ShieldAlert |
| Poor | `#f7607b` | `rgba(247,96,123,0.12)` | `rgba(247,96,123,0.25)` | ShieldOff |

### Threat Items

Icon + label + severity dot (7×7). Colors: high = `#f7607b`, medium = `#ffad33`, low = `#4bb99d`.

---

## Connection Card (Center Top)

**File:** `src/imports/ConnectionCardLeft.tsx`

Centered between left and right panels at the top of the map.

### States

| State | Display |
|-------|---------|
| Unprotected, no selection | "Fastest country" with green fastest icon (54×36, `rounded-[6px]`) |
| Country selected | Country flag (54×36) + country name (28px semibold) |
| Connecting | Flag + country + "Cancel" button |
| Connected | Flag + country + "Disconnect" button |

### Buttons

| Button | Background | Width | Padding |
|--------|-----------|-------|---------|
| Connect | `#6d4aff` | 250px | `pt-10 pb-12 px-24` |
| Disconnect / Cancel | `#4a4658`, border `rgba(255,255,255,0.1)` | 250px | same |

Text: 16px semibold white.

### Country → City Mapping

34 entries (e.g., France → Paris, Germany → Frankfurt, Japan → Tokyo). Used for subtitle display.

---

## Connection Details Bar (Bottom)

**File:** `src/imports/ConnectionDetails.tsx`

Horizontal bar at the bottom of the map, starting at `left: 356px`.

### Unprotected State

| Field | Value |
|-------|-------|
| IP | Shown in plain text |
| Country | Dropdown with flag |
| Provider | ISP name |
| Lock icon | Open lock, `#F7607B` |
| Message | "Encrypt your online activity..." |

### Connecting State

IP and provider text progressively mask with asterisks (110ms per character, random order). Spinning loader icon.

### Protected State

| Field | Value |
|-------|-------|
| VPN IP | Shown |
| Server load | Percentage |
| Protocol | WireGuard |
| Total traffic | Cumulative MB |
| Lock icon | Filled lock, `#2CFFCC` |
| Traffic graph | Live SVG sparkline |

### Traffic Graph

- 30 data points, 100 KB/s max scale
- Download line: `#4BB99D` + gradient fill
- Upload line: `#F7607B` + gradient fill
- Grid lines at 0, 50, 100
- Hover tooltip with per-point values

### Physical Country Data (7 simulated locations)

| Country | IP | ISP |
|---------|----|-----|
| Belarus | 158.6.140.191 | Белтелеком |
| United States | 104.28.16.45 | Comcast |
| United Kingdom | 86.11.24.132 | BT |
| Switzerland | 194.42.16.33 | Swisscom |
| India | 117.215.11.69 | BSNL |
| Australia | 101.98.45.12 | Telstra |
| Japan | 118.6.12.88 | NTT |

### Country Dropdown

- Background: `#1e1c26`, `backdrop-blur: 16px`
- Shadow: `0 8px 32px rgba(0,0,0,0.5)`
- Selected country highlighted in `#2CFFCC`

---

## Right Panel — VPN Features & Map Layers

**File:** `src/imports/RightVpnFeatures.tsx`

### Panel

| Property | Value |
|----------|-------|
| Width | 123px |
| Background | `rgba(22,20,28,0.4)`, `backdrop-blur: 30px` |
| Border | `rgba(255,255,255,0.2)` |
| Radius | `8px` |
| Padding | 12px |
| Gap | 8px |

### Feature Buttons

4 VPN features, each a vertical button with:

- 28×28 SVG icon (Figma-exported)
- 12px label below
- Hover: `bg-[rgba(255,255,255,0.1)]`
- Click: triggers flyout with 500ms delay

| Feature | Label |
|---------|-------|
| NetShield | NetShield |
| Kill Switch | Kill Switch |
| Port Forwarding | Port Fwd |
| Split Tunneling | Split Tunnel |

### Map Layer Button

- Default icon: stacked horizontal lines
- Active: colored layer-specific icon, `bg-[rgba(255,255,255,0.15)]`
- Sub-label: current selection name (e.g., "None", "Privacy score")

---

## Map Layers Dropdown

**File:** `src/imports/MapLayers.tsx`

Dropdown from the Map Layer button, 280px wide.

### Styling

| Property | Value |
|----------|-------|
| Background | `rgba(22,20,28,0.4)`, `backdrop-blur: 30px` |
| Border | `rgba(255,255,255,0.1)` |
| Radius | `8px` |
| Padding | 12px |
| Gap (header ↔ items) | 12px |

### Layer Options (6)

| Option | Icon |
|--------|------|
| None | — |
| Privacy score | Colored gradient icon |
| Surveillance alliances | Eye icon |
| ISP regulations | Document icon |
| Identity | ID card icon |
| P2P | Arrows icon |

- Default: `bg-[rgba(255,255,255,0.05)]`
- Hover: `bg-[rgba(255,255,255,0.08)]`
- Selected: `bg-[rgba(255,255,255,0.2)]` + 2px white inset border, colored icon variant
- Icons: 20×20. Text: 14px, semibold when selected, normal + secondary color when not.

---

## VPN Feature Flyouts

**File:** `src/app/components/VpnFeatureFlyout.tsx`

Popup panels that appear when hovering a VPN feature button.

### Styling

| Property | Value |
|----------|-------|
| Width | 250px |
| Padding | 12px |
| Gap | 16px |
| Background | `rgba(22,20,28,0.4)`, `backdrop-blur: 60px` |
| Border | `rgba(255,255,255,0.2)` |
| Radius | 8px |

### Flyout Content

| Feature | Content |
|---------|---------|
| **NetShield** | 3 stat columns with 36×36 SVG icons: Ads blocked (21), Trackers stopped (14), Data saved (1.5 MB). Stats: 18px semibold. Labels: 12px semibold, `rgba(255,255,255,0.7)`. Shield badge in `#2CFFCC`. |
| **Kill Switch** | Warning about IP exposure if VPN drops. |
| **Port Forwarding** | Active port 36528, copy icon, "Updated 35 minutes ago". |
| **Split Tunneling** | Info about trusted apps bypassing VPN. |

---

## Status Gradient

**File:** `src/imports/StatusGradient.tsx`

A 300px-tall color-tinted gradient overlaid at the top edge of the map (flipped vertically), z-index 600.

### Colors by VPN State

| State | Color |
|-------|-------|
| Unprotected | `rgba(247, 96, 123, 0.5)` (red) |
| Connecting | `rgba(255, 255, 255, 0.3)` (white) |
| Protected | `rgba(44, 255, 204, 0.5)` (green) |

Implementation: base64 PNG mask with two layers (dark base `#16141c` + colored overlay). Color transitions: `duration-700 ease-in-out`.

---

## Country & Layer Data

### Country Privacy Data

**File:** `src/app/components/countryData.ts`

35 countries with detailed regulatory information.

**Data shape:**
```ts
interface CountryData {
  name: string;
  regulationLevel: "strong" | "moderate" | "poor";
  description: string;
  physicalPresence: BulletPoint[];
  vpnConnection: BulletPoint[];
  moreDetails: BulletPoint[];
  lastUpdated: string;
  sourcesCount: number;
}
```

**Distribution:** Strong (23), Moderate (8), Poor (8).

### Layer Data

**File:** `src/app/components/layerData.ts`

5 data layers, each mapping countries to tiers (high / medium / low).

**Tier colors (universal):**

| Tier | Color | Meaning |
|------|-------|---------|
| High (good) | `#4bb99d` | Strong protections |
| Medium | `#ffad33` | Mixed / moderate |
| Low (bad) | `#f7607b` | Poor protections |

**Layer labels:**

| Layer | High | Medium | Low |
|-------|------|--------|-----|
| ISP regulations | Strong regulations | Moderate protection | Poor protection |
| Privacy score | High privacy | Mixed privacy | Low privacy |
| Surveillance | No alliance | 14 Eyes | 5/9 Eyes |
| Identity | Minimal ID required | Moderate ID required | Strict ID required |
| P2P | Generally legal | Restricted | Illegal or blocked |

**VPN-excluded countries:** Belarus, Russia, China, Iran, Vietnam, Saudi Arabia, Egypt, Turkey, Thailand, North Korea.

**Proximity ordering:** 7 physical-country profiles (Belarus, US, UK, Switzerland, India, Australia, Japan) each have ranked VPN destination lists.

---

## Flag System

**File:** `src/app/components/flagComponents.tsx`

### Approach

Flags loaded as SVGs from `flagcdn.com/{iso}.svg`. 93 country-name → ISO-code mappings.

### Sizes

| Size | Dimensions | Usage |
|------|-----------|-------|
| `sm` | 30 × 20 px | Country rows, profile rows, recommendations |
| `lg` | 40 × 26 px | Detail views |

All flags: `rounded-[4px]`, `object-cover`. Fallback: gray placeholder `bg-[rgba(255,255,255,0.12)]`.

---

## File Map

```
src/
├── app/
│   ├── App.tsx                    — Root shell, global state, layout
│   └── components/
│       ├── CountryBrowser.tsx      — Left panel: Recents / Countries / Profiles tabs
│       ├── CountryDetailView.tsx   — Full country risk detail page
│       ├── ISPRegulationsPanel.tsx  — Left panel when a data layer is active
│       ├── VpnFeatureFlyout.tsx    — Feature detail popups
│       ├── WorldMap.tsx            — Leaflet map with markers, pins, overlays
│       ├── countryData.ts          — Static privacy data for 35 countries
│       ├── flagComponents.tsx      — Flag utilities (CDN URLs, React components)
│       └── layerData.ts            — Layer metadata, tier mappings, recommendations
├── imports/
│   ├── ConnectionCardLeft.tsx      — Center-top connection widget
│   ├── ConnectionDetails.tsx       — Bottom connection status bar
│   ├── MapLayers.tsx               — Layer picker dropdown
│   ├── RightVpnFeatures.tsx        — Right panel: VPN features + layer button
│   ├── StatusGradient.tsx          — Top-edge status color gradient
│   ├── ChipSection.tsx             — Figma-generated chip/nav primitives
│   ├── Fastest.tsx                 — "Fastest" icon component
│   ├── profile-icons/              — SVG assets for profile rows
│   │   ├── profile-icon-streaming.svg
│   │   ├── profile-icon-gaming.svg
│   │   ├── profile-icon-p2p.svg
│   │   ├── profile-icon-anticensorship.svg
│   │   ├── profile-icon-security.svg
│   │   ├── profile-icon-business.svg
│   │   ├── ic-plus-20.svg
│   │   ├── ic-info-circle-filled.svg
│   │   └── ic-arrow-right-arrow-left.svg
│   ├── svg-*.ts                    — Figma-exported SVG path modules (~25 files)
│   └── *.svg                       — Static icon assets
└── styles/
    └── fonts.css                   — Font imports and @font-face declarations
```
