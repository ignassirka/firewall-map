# Feature: App Firewall

**Status:** Active

## Purpose

Per-app network firewall prototype inspired by Little Snitch, designed for a guided VPN context. Shows app connection arcs on the shared Leaflet world map, surfaces suspicious activity with plain-language risk explanations, and provides binary app-level controls (block permanently / block when in background / dismiss). Renders as an overlay on the existing Privacy Map — reuses the exact same map, design language, glassmorphism panels, colors, and layout positioning.

## Key user flows

1. User sees the app list in the left panel with real app logos and status indicators (colored dots).
2. User clicks an app → the panel **navigates in-place** to a detail view (slides in from the right, matching ISPRegulationsPanel's CountryDetailView pattern).
3. Detail view shows: Back button, app icon/name/status, stats, description, jurisdiction warning, and action buttons — all scrollable within the panel.
4. User clicks **Back** (or blocks/dismisses) → slides back to the app list.
5. All Privacy Map overlays remain visible: VPN Features panel (right), ConnectionDetails + VPN status (bottom), StatusGradient (top).

## Data model

Static mock data defined as constants inside the component:

- `APPS: AppData[]` — 12 app objects (Temu, Weather, Flashlight, Instagram, Signal, ProtonMail, Firefox, Spotify, WhatsApp, Google Maps, YouTube, TikTok) with `id`, `name`, `iconUrl`, `iconFallbackColor`, `status`, `connections`, `destination`, `country`, `dataSent`, `arcTarget`, `description`, `jurisdictionWarning?`.
- `APPS_BY_ID: Record<string, AppData>` — lookup map keyed by app ID.
- `ARC_DESTINATIONS: Record<string, {lat, lng, label}>` — 7 destination points (Beijing, New York, San Francisco, Singapore, Stockholm, Zurich, Dublin) with geographic coordinates.
- `DEVICE_COORDS: Record<string, {lat, lng}>` — device location coordinates per physical country.
- Colors: `GREEN` (#2CFFCC), `RED` (#F7607B), `AMBER` (#FFAD33) — exact Privacy Map palette.
- App icons loaded from `logo.clearbit.com` with colored initial fallback via `AppIcon` component.
- No shared data files; all data is self-contained within AppFirewall.tsx.

## State management

Local state only (no App-level state except `showFirewall` toggle in App.tsx):

| State | Type | Purpose |
|-------|------|---------|
| `blockedApps` | `Record<string, BlockType>` | Tracks blocked apps and their block type ("background" or "permanent") |
| `dismissedApps` | `string[]` | IDs of apps dismissed by user during review |
| `selectedApp` | `string \| null` | Currently selected app for detail overlay |

## Components

All inside `src/app/components/AppFirewall.tsx`:

| Role | Internal component |
|------|-------------------|
| Root / overlay layer | `AppFirewall` (default export) |
| App icon with fallback | `AppIcon` |
| Left panel app row | `AppRow` |
| In-panel detail view | `AppDetailView` (slides in, mirrors CountryDetailView) |
| Detail stat card | `MiniStat` |
| Helpers | `needsReview()`, `getStatusColor()`, `createCurvedPath()`, `createArcTooltipHTML()`, `getDevicePos()` |

All Privacy Map overlays from WorldMap remain visible (StatusGradient, ConnectionDetails, RightVpnFeatures).

## Layout

Overlay architecture on the shared Leaflet WorldMap:

| Element | Position | Size/Style | Notes |
|---------|----------|------------|-------|
| WorldMap (Leaflet) | `absolute inset-0` | Full container | Shared with Privacy Map; all WorldMap overlays remain visible |
| StatusGradient | Rendered by WorldMap | Full width, h-[300px] | WorldMap handles this — shows actual VPN status |
| RightVpnFeatures | Rendered by WorldMap | `top-[8px] right-[8px]`, w-[123px] | Same VPN features panel as Privacy Map |
| ConnectionDetails | Rendered by WorldMap | `absolute bottom-0` | Same bottom status bar as Privacy Map |
| Left Panel | `absolute top-[8px] left-[8px] bottom-[8px]`, z-[1000] | w-[panelWidth] | Glassmorphism: `backdrop-blur-[16px] bg-[rgba(22,20,28,0.75)] border border-[rgba(255,255,255,0.1)] rounded-[8px]` |
| Detail Overlay | `absolute inset-0`, z-[3000] | Centered modal | App info + action buttons, glassmorphism backdrop |
| Leaflet Arcs | Native Leaflet L.polyline layers | Auto-handles pan/zoom | Quadratic Bézier curves via interpolated L.LatLng points |

## Integration with WorldMap

The AppFirewall shares the Leaflet map instance with the Privacy Map:

1. `WorldMap` accepts `firewallMode?: boolean` and `onMapReady?: (map: L.Map) => void`
2. When `firewallMode` is true, WorldMap hides only the ConnectionCard (center-top); all other overlays remain visible (StatusGradient, ConnectionDetails, RightVpnFeatures, MapLayers, feature flyout, user location pin)
3. `App.tsx` passes the Leaflet map ref and `panelWidth` to AppFirewall via `onMapReady` callback
4. AppFirewall adds its own Leaflet layers (arcs, destination markers) via `L.layerGroup`
5. On unmount, AppFirewall removes all its layers from the map

## Routes

None (single-page app; view switching via `showFirewall` state in App.tsx).

## Dependencies on Shared Code

| Path | Description |
|------|-------------|
| `leaflet` | L.layerGroup, L.polyline, L.circleMarker, L.latLng for map arc layers |
| `lucide-react` | Icons: AlertTriangle, Check, ChevronLeft, Ban |
| `motion/react` | AnimatePresence + motion for in-panel slide transitions |
| `clsx` | Conditional class merging |
| `react` | useState, useEffect, useCallback |

## Event log

N/A — prototype; state changes handled via local React state.

## Feature-specific constraints

- AppFirewall is an overlay component — it does NOT render its own container or map. The map is shared with the Privacy Map.
- All Privacy Map overlays remain visible: StatusGradient, ConnectionDetails + VPN status, RightVpnFeatures + MapLayers. Only the ConnectionCard is hidden.
- Left panel uses the same `panelWidth` as the Privacy Map panel for consistent layout.
- App icons loaded from `logo.clearbit.com/{domain}`, rendered at 24x24 with `rounded-[4px]`. Fallback: colored circle with first letter initial.
- Each app gets its own arc (one polyline per app, not grouped by destination). Apps sharing a destination have slightly offset curves for visual separation.
- Arcs are neutral white with animated dashes flowing from device to destination (`@keyframes arcFlow` on `stroke-dashoffset`). Each arc has a slightly different animation speed for organic feel.
- Curves use cubic Bézier interpolation (80 sample points) for smooth rendering. Each arc has a soft glow layer underneath.
- Hover: wide invisible hit area (18px) shows a dark glassmorphic tooltip with app name, destination, and stats.
- Click: selects the app and navigates to its detail view in the left panel.
- When a specific app is selected, its arc brightens while others dim. Blocked apps have no arc.
- The user location pin from WorldMap remains visible in firewall mode.
- No new npm dependencies required.

## Patterns

- **Overlay architecture**: AppFirewall renders as floating elements over the shared Leaflet map, exactly like the Privacy Map's panels.
- **Glassmorphism panels**: `backdrop-blur-[16px] bg-[rgba(22,20,28,0.75)] border border-[rgba(255,255,255,0.1)] rounded-[8px]` — same as ISPRegulationsPanel.
- **`fontSemibold` / `fontRegular`** style objects matching existing codebase convention.
- **`clsx`** for conditional classes (same as ISPRegulationsPanel).
- **Leaflet layer management**: `L.layerGroup()` added on mount, removed on unmount. Layers rebuilt when state changes.
- **Review mode auto-advances** to next unresolved flagged app via `useEffect`.
- **Bottom gradient bar** uses the same `bg-gradient-to-t from-[#0f0d14] via-[rgba(15,13,20,0.85)] to-transparent` pattern as WorldMap's ConnectionDetails area.
