# Feature: World map

**Status:** Active

## Purpose

Leaflet-based world map: 93 country markers, user location pin, map layer coloring, flyouts, and embedded “chrome” (status gradient, connection card, connection details, right VPN panel, layer dropdown, VPN feature flyouts).

## Key user flows

- Click country marker → select country (syncs with left panel).
- Change map layer from right panel → choropleth / tier visualization per `layerData.ts`.
- Connect/disconnect from map-adjacent UI; hover VPN features → flyouts.

## Data model

- Marker list and coordinates live **in** `WorldMap.tsx` (`CountryMarker` entries).
- Tier colors from `layerData.ts` via `getCountryTier`, `getTierColor`, etc.

## State management

Fully controlled from `App.tsx`: map selection, layer, VPN status, connection, physical country, and panel width offset for layout. Local state in `WorldMap.tsx` only for map-internal UI (e.g. hover, flyout visibility) per `Logic.md`.

## Components

| Role | Path |
|------|------|
| Main | `src/app/components/WorldMap.tsx` |
| Flyouts | `src/app/components/VpnFeatureFlyout.tsx` |
| Figma chrome | `src/imports/ConnectionCardLeft.tsx`, `ConnectionDetails.tsx`, `RightVpnFeatures.tsx`, `MapLayers.tsx`, `StatusGradient.tsx` |

## Routes

None.

## Dependencies on Shared Code

| Path | Description |
|------|-------------|
| `src/app/components/layerData.ts` | Tier per country per layer, colors, metadata |
| `src/app/components/flagComponents.tsx` | Flags where used for markers/UI |
| `src/imports/RightVpnFeatures.tsx` | `MapLayerOption`, `VpnFeatureType` |
| `src/app/components/ui/*` | As needed (e.g. primitives if added) |

## Event log

N/A — prototype; marker clicks and layer changes update React state only. See `Logic.md` (map marker behavior, map layer system).

## Feature-specific constraints

- Leaflet CSS and marker DOM must stay compatible with React lifecycle (see `Logic.md` — map marker behavior).
- External tiles: Carto dark basemap; do not break tile URL or attribution without design approval.

## Patterns

- Receives all global state from `App` via props; no local copy of `selectedCountry` for “source of truth.”
