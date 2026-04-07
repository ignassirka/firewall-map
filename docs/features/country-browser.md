# Feature: Country browser

**Status:** Active

## Purpose

Left panel **Recents / Countries / Profiles** tabs: searchable country lists, fastest country row, profile rows, and VPN connect affordances when no layer is active.

## Key user flows

- Tab between Recents, Countries (with sub-filters), Profiles.
- Search countries; click row to select country or connect (variant-dependent).
- “Fastest country” row interaction per `Logic.md`.

## Data model

- Uses `getFlagUrl` / flags from `flagComponents.tsx`.
- Profile and recents content are static/demo data inside the component and `imports` assets.

## State management

Local state for tabs, search, and country sub-tabs; emits country selection and VPN actions via callbacks to `ISPRegulationsPanel` / `App` wiring.

## Components

| Role | Path |
|------|------|
| Main | `src/app/components/CountryBrowser.tsx` |
| Row API | `CountryRow` (discriminated union props — see file) |

## Routes

None.

## Dependencies on Shared Code

| Path | Description |
|------|-------------|
| `src/app/components/flagComponents.tsx` | `getFlagUrl`, flag URLs |
| `src/imports/Fastest.tsx` | Fastest row icon |
| `src/imports/svg-*.ts` | Chip/tab/search SVG paths |
| `src/imports/profile-icons/*` | Profile row SVGs |

## Event log

N/A — prototype; see `Logic.md` (country browser sections).

## Feature-specific constraints

- `CountryRow` variants (`vpn` vs `navigate`) must remain type-safe; do not collapse into untyped props.
- Styling uses shared `fontSemibold` / `fontRegular` patterns consistent with other panels.

## Patterns

- Local state: `activeTab`, search query, sub-tab for countries.
- No direct import of `countryData.ts` for list rows (country names are embedded in browser logic); detail view uses `countryData` separately.
