# Feature: Application shell

**Status:** Active

## Purpose

Root layout (`1170×830` framed viewport), resizable left panel (200–400px), and **sole ownership** of all global React state for the Firewall map SPA.

## Key user flows

- Resize left panel via drag handle on the right edge of the panel.
- All VPN connect/disconnect and country/layer selection ultimately flow through callbacks defined here.

## Data model / state (App-level)

| State | Type | Default |
|-------|------|---------|
| `selectedCountry` | `string \| null` | `null` |
| `selectedMapLayer` | `MapLayerOption` | `"none"` |
| `vpnStatus` | `VpnStatus` | `"unprotected"` |
| `connectedCountry` | `string \| null` | `null` |
| `physicalCountry` | `string` | `"Belarus"` |
| `panelWidth` | number | `340` (clamped 200–400) |

Exported type: `VpnStatus` from `App.tsx`.

## State management

Owns all global application state (`useState` / `useRef` / `useCallback`). Children receive state via props and return changes via callbacks — no Context or external store.

## Components

| Role | Path |
|------|------|
| Root | `src/app/App.tsx` |
| Map child | `src/app/components/WorldMap.tsx` |
| Left stack | `src/app/components/ISPRegulationsPanel.tsx` |

## Routes

None (single page).

## Dependencies on Shared Code

| Path | Description |
|------|-------------|
| `src/imports/RightVpnFeatures.tsx` | `MapLayerOption` type for `selectedMapLayer` state |

## Event log

N/A — no analytics or custom DOM event bus; interactions are handled in React. See `Logic.md` for behavioral flows.

## Feature-specific constraints

- Do not duplicate global state in child components; use props/callbacks only (`Logic.md` — no duplicated state).
- Connect timer: 3s simulated handshake; clear on disconnect or re-connect to another country.

## Patterns

- `useCallback` for handlers passed to children; `useRef` for connect timer.
- Panel resize uses pointer capture on `document` (`pointermove` / `pointerup`).
