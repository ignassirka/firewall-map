# Feature: Country detail view

**Status:** Active

## Purpose

Full-screen (within left panel) country analysis: regulation level, bullet points, map layer context, back navigation.

## Key user flows

- Back control returns to previous left-panel view.
- Content reflects `activeLayer` when relevant (`Design.md` — country detail).

## Data model

- Loads structured country facts via `getCountryData()` and types from `countryData.ts`.
- `RegulationLevel`, `BulletPoint`, `CountryData` shapes must stay stable for rendering.

## State management

Presentation-only; no app-level state. Props: `countryName`, `onBack`, `activeLayer` from parent.

## Components

| Role | Path |
|------|------|
| Main | `src/app/components/CountryDetailView.tsx` |

## Routes

None.

## Dependencies on Shared Code

| Path | Description |
|------|-------------|
| `src/app/components/countryData.ts` | `getCountryData`, `CountryData`, regulation enums |
| `src/app/components/flagComponents.tsx` | Large flag / country visuals |
| `src/imports/RightVpnFeatures.tsx` | `MapLayerOption` for layer-aware copy |

## Event log

N/A — prototype; back navigation via callback. See `Logic.md` (country detail navigation).

## Feature-specific constraints

- Only countries present in `countryData.ts` have full detail; unknown countries should follow existing fallback behavior in code.

## Patterns

- Presentation-only; receives `countryName`, `onBack`, `activeLayer` from parent.
