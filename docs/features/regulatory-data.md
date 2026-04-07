# Feature: Regulatory & country data (shared datasets)

**Status:** Active

## Purpose

Static **source of truth** for map layer tiers (93 countries × 5 layers), layer metadata, recommendations, and detailed country regulatory copy (35 countries).

## Key user flows

- Consumed by map coloring, left panel spotlight, recommendations, and country detail — not a standalone UI.

## Data model

- **`layerData.ts`:** `LayerTier`, `layerMeta`, `getCountryTier`, `getTierColor`, `getCountriesByTier`, `getPhysicalCountryAwareRecommendations`, etc.
- **`countryData.ts`:** `CountryData`, `getCountryData`, regulation levels, bullet lists.

## State management

N/A — static modules; no React state.

## Components

N/A (data modules only).

| File | Path |
|------|------|
| Layer tiers & metadata | `src/app/components/layerData.ts` |
| Country regulatory copy | `src/app/components/countryData.ts` |

## Routes

None.

## Dependencies on Shared Code

| Path | Description |
|------|-------------|
| `src/imports/RightVpnFeatures.tsx` | `MapLayerOption` string union must align with layer keys in `layerData` |

## Event log

N/A — data-only modules.

## Feature-specific constraints

- Changing tier keys, country keys, or `MapLayerOption` alignment affects **World map**, **ISP regulations panel**, **Country detail**, and tests/docs.
- All content is **demo/static** — not live regulatory advice.

## Patterns

- Pure functions and exported constants; no I/O.

## Dependent features

Application shell (indirect via state types), world map, ISP regulations panel, country detail view, map chrome (layer types). See `.cursor/rules/shared-policies.mdc`.
