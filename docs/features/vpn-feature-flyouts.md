# Feature: VPN feature flyouts

**Status:** Active

## Purpose

Fixed-position popovers describing VPN features (NetShield, Secure Core, etc.) when interacting with the right-hand VPN feature list on the map.

## Key user flows

- Hover/focus interactions on right panel feature rows trigger flyout visibility (`Logic.md` — right panel & flyout hover logic).

## Data model

- Feature definitions and icons: see `VpnFeatureFlyout.tsx` and `src/app/components/flyout-icons/*`.

## State management

Visibility and anchor driven by parent (`WorldMap.tsx`); local state only for flyout internals if present in source.

## Components

| Role | Path |
|------|------|
| Main | `src/app/components/VpnFeatureFlyout.tsx` |

## Routes

None.

## Dependencies on Shared Code

| Path | Description |
|------|-------------|
| `src/imports/RightVpnFeatures.tsx` | `VpnFeatureType` alignment |
| `src/app/components/flyout-icons/*` | SVG assets |

## Event log

N/A — prototype; hover/focus handled in React. See `Logic.md` (right panel & flyout hover logic).

## Feature-specific constraints

- Flyout placement is coupled to map layout; coordinate changes may need `Design.md` cross-check.

## Patterns

- Default export component consumed by `WorldMap.tsx`.
