# Feature: ISP regulations panel (left panel shell)

**Status:** Active

## Purpose

Left floating panel: when **no** map layer is active, hosts `CountryBrowser`; when a **layer** is active, shows layer-specific home/detail views (spotlight, recommendations, worldwide explorer, etc.).

## Key user flows

- Switch between layer mode and country browser via layer clear / layer select from map or panel.
- Open country detail from layer mode; VPN connect from recommendation rows (`Logic.md`).

## Data model

- Uses `layerMeta`, `getCountryTier`, `getCountriesByTier`, `getPhysicalCountryAwareRecommendations`, etc. from `layerData.ts`.
- Imports Figma layer icons: `ProtonPrivacyScore`, `SurveillanceAlliances`, `IspRegulations`, `Identity`, `P2P` from `src/imports/`.

## State management

Receives selection, layer, and VPN props from `App` via `ISPRegulationsPanel` parent wiring. Holds local UI state (tabs, expanded sections, internal navigation stack) inside `ISPRegulationsPanel.tsx`.

## Components

| Role | Path |
|------|------|
| Shell | `src/app/components/ISPRegulationsPanel.tsx` |
| Embedded | `src/app/components/CountryBrowser.tsx`, `CountryDetailView.tsx` |

## Routes

None.

## Dependencies on Shared Code

| Path | Description |
|------|-------------|
| `src/app/components/layerData.ts` | Layer tiers, spotlight copy, recommendations |
| `src/app/components/flagComponents.tsx` | `getFlagForCountry` |
| `src/app/components/CountryBrowser.tsx` | `CountryRow` exports |
| `src/app/components/CountryDetailView.tsx` | Full country analysis view |
| `src/imports/RightVpnFeatures.tsx` | `MapLayerOption` |
| `src/imports/*.tsx` | Layer icons, SVG path modules as listed in file |

## Event log

N/A — prototype; see `Logic.md` (left panel routing, country spotlight).

## Feature-specific constraints

- Risk meter and spotlight copy are keyed by `MapLayerOption` × `LayerTier`; changing keys requires `layerData` + doc updates.
- VPN checklist items (e.g. no-logs) are presentation content; keep consistent with product tone in `Design.md`.

## Patterns

- `AnimatePresence` / `motion` for view transitions (`Logic.md` — transition system).
- Local UI state for tabs and expanders inside this file.
