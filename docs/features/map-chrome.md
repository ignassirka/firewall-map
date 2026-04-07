# Feature: Map chrome (Figma imports)

**Status:** Active

## Purpose

Figma-exported components rendered **inside** the map stack: VPN connection card (center top), connection details bar (bottom), right VPN features + map layer button, layer dropdown, top status gradient.

## Key user flows

- Connect / disconnect from connection card; open map layers dropdown; read status from bars; pick layer affecting map coloring.

## Data model

- No owned global state; all data via props from `WorldMap.tsx` / parent wiring from `App.tsx`.
- `MapLayers` and `RightVpnFeatures` define layer option types used app-wide.

## State management

No internal global state; receives props from `WorldMap.tsx` (which receives App-level state). Dropdown and button local UI may use local state inside each import file.

## Components

| Role | Path |
|------|------|
| Connection card | `src/imports/ConnectionCardLeft.tsx` |
| Bottom bar | `src/imports/ConnectionDetails.tsx` |
| Right panel | `src/imports/RightVpnFeatures.tsx` |
| Layer dropdown | `src/imports/MapLayers.tsx` |
| Top gradient | `src/imports/StatusGradient.tsx` |

## Routes

None.

## Dependencies on Shared Code

| Path | Description |
|------|-------------|
| `src/app/App.tsx` | `VpnStatus` type (re-exported or compatible props) |
| `src/imports/profile-icons/*`, other `imports` assets | As referenced by each file |

## Event log

N/A — prototype; connect/disconnect and layer changes propagate via React callbacks. See `Logic.md` (connection card, connection details, map layer system).

## Feature-specific constraints

- Treat as **Figma-generated**: prefer targeted edits; avoid large restructures so re-export from Figma remains possible.
- `MapLayerOption` additions require updates across `App`, `WorldMap`, `layerData`, and docs.

## Patterns

- Default exports; heavy inline `style` objects for pixel fidelity.
