# Firewall map — Features Overview

Living index for feature-scoped documentation and Cursor rules. Authoritative product specs remain at project root: `Design.md`, `Logic.md`.

---

## Feature Documentation Protocol

Documentation in `/docs/features/` is the **living source of truth** for feature scope, structure, and dependencies. Root `Design.md` / `Logic.md` remain authoritative for visual and behavioral product specification; feature docs map those specs to files and ownership.

### On every task you complete

1. Check if the changes affect any feature documented in `/docs/features/`.
2. If yes — update the relevant `[feature-name].md` to reflect the change. Update components tables, routes, data models, state management, and event logs as needed. Keep the same template structure as **Standard feature document template** below.
3. If you modified shared architecture (common components, hooks, API patterns, state conventions) — update the **Shared Architecture** section in this file (`_overview.md`).
4. Update the **Feature Index** table in this file if any feature status changed.

### When building a new feature

1. **Before** writing implementation code, create `/docs/features/[feature-name].md` using the standard template below.
2. Fill in: Purpose, Key User Flows, Data Model (planned), Components (planned), Routes (planned), Dependencies on Shared Code, and Event log (planned).
3. Mark planned sections with `[PLANNED]` tags.
4. As you implement, replace `[PLANNED]` tags with actual values and real file paths.
5. When implementation is complete, remove all `[PLANNED]` tags and verify every entry.

### Rules

- **Never** leave docs stale. If you changed code, you changed docs.
- **Never** fabricate. Only document what exists. Use `[UNVERIFIED]` for anything uncertain.
- **Never** delete documentation for existing features unless the feature was removed from the codebase.
- Keep the template structure **consistent** across all feature files — do not invent new top-level sections without updating this protocol.
- After updating any doc, agents should output: `📝 Updated /docs/features/[filename].md — [what changed]`

---

## Standard feature document template

Copy this skeleton to `/docs/features/[feature-name].md` for new features. Existing feature files follow the same section order; optional sections may be omitted only when explicitly marked N/A.

```markdown
# Feature: [Name]

**Status:** Active | In Progress | Deprecated

## Purpose

[One paragraph]

## Key user flows

- [Bullet list]

## Data model

[Tables or prose: types, state, static data keys. Use [PLANNED] until implemented.]

## State management

[How this feature receives/updates state: props from App, local useState, etc. N/A if data-only module.]

## Components

| Role | Path |
|------|------|
| ... | `...` |

## Routes

[None, or list routes — this SPA currently has none.]

## Dependencies on Shared Code

| Path | Description |
|------|-------------|
| ... | ... |

## Event log

[Documented user-visible events, analytics hooks, or `N/A` / see `Logic.md` for prototype.]

## Feature-specific constraints

- [Bullets]

## Patterns

- [Bullets]
```

---

## Shared Architecture

| Area | Path | Notes |
|------|------|--------|
| App shell & global state | `src/app/App.tsx` | Single owner of `selectedCountry`, `selectedMapLayer`, `vpnStatus`, `connectedCountry`, `physicalCountry`, panel width |
| Hand-written UI & data | `src/app/components/` | Feature TSX + `countryData.ts`, `layerData.ts`, `flagComponents.tsx` |
| Figma-generated UI | `src/imports/` | Default-export components; treat as semi-external |
| shadcn/ui primitives | `src/app/components/ui/` | Shared `cn()`, Radix-based components |
| Global styles | `src/styles/` | Tailwind v4 entry, `theme.css`, `fonts.css` |

**Routing:** None. Single-page app; `react-router` is installed but unused.

**API:** None. Static data only.

**State:** Prop drilling from `App.tsx` only — no app-level Context/Zustand/Redux.

## Feature Index

| Feature | Doc | Status | Primary paths |
|---------|-----|--------|----------------|
| Application shell | [application-shell.md](./application-shell.md) | Active | `src/app/App.tsx` |
| World map | [world-map.md](./world-map.md) | Active | `src/app/components/WorldMap.tsx` |
| ISP regulations panel (layer mode) | [isp-regulations-panel.md](./isp-regulations-panel.md) | Active | `src/app/components/ISPRegulationsPanel.tsx` |
| Country browser | [country-browser.md](./country-browser.md) | Active | `src/app/components/CountryBrowser.tsx` |
| Country detail view | [country-detail-view.md](./country-detail-view.md) | Active | `src/app/components/CountryDetailView.tsx` |
| VPN feature flyouts | [vpn-feature-flyouts.md](./vpn-feature-flyouts.md) | Active | `src/app/components/VpnFeatureFlyout.tsx` |
| Map chrome (Figma) | [map-chrome.md](./map-chrome.md) | Active | `src/imports/ConnectionCardLeft.tsx`, `ConnectionDetails.tsx`, `RightVpnFeatures.tsx`, `MapLayers.tsx`, `StatusGradient.tsx` |
| Regulatory & country data | [regulatory-data.md](./regulatory-data.md) | Active | `src/app/components/layerData.ts`, `countryData.ts` |
| App Firewall (prototype) | [app-firewall.md](./app-firewall.md) | Active | `src/app/components/AppFirewall.tsx` |

## Cursor rules map

| Feature doc | Rule file |
|-------------|-----------|
| application-shell | `.cursor/rules/application-shell.mdc` |
| world-map | `.cursor/rules/world-map.mdc` |
| isp-regulations-panel | `.cursor/rules/isp-regulations-panel.mdc` |
| country-browser | `.cursor/rules/country-browser.mdc` |
| country-detail-view | `.cursor/rules/country-detail-view.mdc` |
| vpn-feature-flyouts | `.cursor/rules/vpn-feature-flyouts.mdc` |
| map-chrome | `.cursor/rules/map-chrome.mdc` |
| regulatory-data | `.cursor/rules/regulatory-data.mdc` + `.cursor/rules/shared-policies.mdc` (approval gate for the same paths) |
| app-firewall | `.cursor/rules/app-firewall.mdc` |

## Adding a new feature (checklist)

1. Create `/docs/features/[feature-name].md` from **Standard feature document template** above (use `[PLANNED]` until done).
2. Add a row to **Feature Index** with status **In Progress** or **Active**.
3. If shared architecture changes, update **Shared Architecture** here.
4. Add `.cursor/rules/[feature-name].mdc` if the feature has a clear path scope (see **Cursor rules map** for examples).
