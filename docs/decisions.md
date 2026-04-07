# Architecture Decisions Log

This is a living document. Every non-trivial architectural decision MUST be logged here. Read this file at the start of every task to avoid contradicting past decisions.

---

## How to Read This Log

- Decisions are ordered **newest-first**.
- Each entry is self-contained — read only the ones relevant to your current task.
- If your planned approach contradicts an existing decision, **STOP** and ask for human review.

---

**Date:** 2026-04-07
**Feature:** Shared
**Decision:** Feature Documentation Protocol and per-feature Cursor rules established as governance system.
**Reasoning:** The project needed living documentation and agent-safe guardrails. `/docs/features/` provides scope-per-feature docs; `.cursor/rules/` enforces constraints when agents touch specific files.
**Alternatives rejected:** Wiki-based docs (not co-located with code); no docs (unsustainable for AI-assisted development).
**Affects:** `/docs/features/*.md`, `.cursor/rules/*.mdc`, all future features.

---

**Date:** 2026-04-07
**Feature:** Shared
**Decision:** Types are co-located with their owning component, not in a shared `types/` directory.
**Reasoning:** Verified from code — `VpnStatus` in `App.tsx`, `MapLayerOption`/`VpnFeatureType` in `RightVpnFeatures.tsx`, `LayerTier`/`LayerMeta` in `layerData.ts`, `CountryData` in `countryData.ts`, `CountryRowProps` in `CountryBrowser.tsx`, `WorldMapProps` in `WorldMap.tsx`. No `src/types/` directory exists. Types are consumed via `import type` from the defining file.
**Alternatives rejected:** Centralized `src/types/` directory (adds indirection; in a small codebase the owning file is clear enough).
**Affects:** Every component that imports types — consumers import from the source file directly.

---

**Date:** 2026-04-07
**Feature:** Shared
**Decision:** `MapLayerOption` is defined in `src/imports/RightVpnFeatures.tsx` (Figma-generated) and consumed by `App.tsx`, `WorldMap.tsx`, `layerData.ts`, and panel components.
**Reasoning:** Verified — `RightVpnFeatures.tsx` exports `MapLayerOption = "none" | "privacy-score" | "surveillance" | "isp-regulations" | "identity" | "p2p"`. All other files import this type. [REASONING UNVERIFIED — needs human input: was the Figma file intentionally chosen as canonical source for this union, or was it an artifact of export order?]
**Alternatives rejected:** Defining in `layerData.ts` (would create circular dependency since `layerData` consumes it); defining in `App.tsx` (would require `imports/` to depend on `app/`).
**Affects:** `src/imports/RightVpnFeatures.tsx`, `src/app/App.tsx`, `src/app/components/WorldMap.tsx`, `src/app/components/layerData.ts`, `src/app/components/ISPRegulationsPanel.tsx`, `src/app/components/CountryDetailView.tsx`.

---

**Date:** 2026-04-07
**Feature:** Application shell
**Decision:** All global state lives in `App.tsx` with pure prop drilling — no Context, no external store.
**Reasoning:** Verified — `App.tsx` owns 5 `useState` hooks (`selectedCountry`, `selectedMapLayer`, `vpnStatus`, `connectedCountry`, `physicalCountry`) plus panel width. Children receive props and return changes via callbacks. No `useContext` in app code (only inside shadcn/ui internals). [REASONING UNVERIFIED — needs human input: was this a deliberate "keep it simple" choice for a prototype, or should it be reconsidered as the app grows?]
**Alternatives rejected:** React Context (adds boilerplate for this component count); Zustand/Redux (overkill for 5 states and 2 direct children).
**Affects:** `src/app/App.tsx`, `src/app/components/WorldMap.tsx`, `src/app/components/ISPRegulationsPanel.tsx`.

---

**Date:** 2026-04-07
**Feature:** Application shell
**Decision:** VPN connect uses a 3-second `setTimeout` to simulate handshake; timer is ref-tracked and cleared on disconnect or re-connect.
**Reasoning:** Verified — `handleConnect` sets `vpnStatus = "connecting"`, starts 3s timer → `"protected"`. `handleDisconnect` clears timer → `"unprotected"`. Re-connect clears the old timer. This is a prototype — no real VPN tunnel.
**Alternatives rejected:** Instant state change (loses realism); server-side simulation (out of scope for static SPA).
**Affects:** `src/app/App.tsx` (`handleConnect`, `handleDisconnect`, `connectTimerRef`).

---

**Date:** 2026-04-07
**Feature:** Shared
**Decision:** No client-side routing. `react-router` 7.13.0 is installed but unused; all view switching is via React state.
**Reasoning:** Verified — zero imports of `react-router` in any `src/app/` file. View switching (country browser ↔ detail, layer mode ↔ browse mode) is driven by `selectedCountry`, `selectedMapLayer`, and local panel state. [REASONING UNVERIFIED — needs human input: is react-router kept for future use, or should it be removed?]
**Alternatives rejected:** URL-based routing (would require defining routes, handling back/forward, and deep linking for a prototype that fits in one viewport).
**Affects:** All feature components; `package.json` (dependency present but unused).

---

**Date:** 2026-04-07
**Feature:** Shared
**Decision:** Styling uses Tailwind CSS v4 utility classes as primary + inline React `style` objects for Figma-precise values.
**Reasoning:** Verified — Tailwind configured via `@tailwindcss/vite` plugin (no `tailwind.config.js`); `theme.css` defines CSS custom properties mapped to Tailwind via `@theme inline`. Inline `style` objects used extensively in Figma-generated `src/imports/` and in hand-written components for sub-pixel colors, font feature settings, and dynamic values.
**Alternatives rejected:** CSS Modules (poor Figma export compatibility); styled-components/Emotion for app code (adds runtime cost; Emotion is installed only as MUI transitive dependency); pure Tailwind only (cannot express all Figma sub-pixel values).
**Affects:** All `.tsx` files, `src/styles/theme.css`, `src/styles/tailwind.css`.

---

**Date:** 2026-04-07
**Feature:** Shared
**Decision:** Figma-exported components in `src/imports/` use default exports; hand-written components in `src/app/components/` use named exports.
**Reasoning:** Verified — every file in `src/imports/` uses `export default function`; every file in `src/app/components/` (except `VpnFeatureFlyout.tsx`) uses `export function`. shadcn/ui components use named exports. The split preserves Figma Make re-export compatibility (it regenerates with default exports).
**Alternatives rejected:** Uniform named exports everywhere (breaks Figma Make regeneration); uniform default exports everywhere (loses named export benefits for tree-shaking and refactoring in app code).
**Affects:** `src/imports/*.tsx`, `src/app/components/*.tsx`, import statements across the codebase.

---

**Date:** 2026-04-07
**Feature:** Shared
**Decision:** Font stack: `Segoe UI Variable` → `Segoe UI` → `Inter` (Google Fonts) → `sans-serif`, with `@font-face` aliases for Figma optical-size variants.
**Reasoning:** Verified in `src/styles/fonts.css` — Figma exports reference specific Segoe UI Variable names (e.g. `Segoe UI Variable:Regular Small`). `@font-face` aliases resolve to local Segoe (Windows) or Inter (macOS/Linux). This ensures cross-platform visual consistency.
**Alternatives rejected:** Shipping Segoe UI as a web font (licensing issues); using only Inter (loses Figma fidelity on Windows); no aliases (broken rendering on non-Windows).
**Affects:** `src/styles/fonts.css`, `src/styles/theme.css`, all text rendering.

---

**Date:** 2026-04-07
**Feature:** Regulatory data
**Decision:** Country data keyed by English display name strings (`"United States"`, `"South Korea"`) — not by ISO codes.
**Reasoning:** Verified — `countryData.ts` array uses `name: "France"` etc., and `getCountryData(name)` performs lookup by name. `flagComponents.tsx` maintains a separate `countryToIso` mapping for flag URLs. `layerData.ts` tier tables also use display-name keys. [REASONING UNVERIFIED — needs human input: was display-name keying chosen for readability, or should ISO codes be canonical with display names as a derived field?]
**Alternatives rejected:** ISO-code keying (requires translation layer for UI display; Figma exports use display names).
**Affects:** `src/app/components/countryData.ts`, `layerData.ts`, `flagComponents.tsx`, `WorldMap.tsx` marker names.

---

**Date:** 2026-04-07
**Feature:** Regulatory data
**Decision:** Three-tier system (`"high" | "medium" | "low"`) for all five map layers, with per-layer labels and colors.
**Reasoning:** Verified — `LayerTier` type and `layerMeta` record in `layerData.ts` define `{ high, medium, low }` with label + color + bgClass per layer per tier. All 93 countries are assigned one of three tiers per layer.
**Alternatives rejected:** Numeric scores (loses categorical UI simplicity); four+ tiers (more visual complexity than the prototype needs); per-layer custom tier names (harder to maintain cross-layer).
**Affects:** `src/app/components/layerData.ts`, `ISPRegulationsPanel.tsx` (risk meter, spotlight), `WorldMap.tsx` (choropleth).

---

**Date:** 2026-04-07
**Feature:** Country browser
**Decision:** `CountryRow` uses a discriminated union (`CountryRowVpnProps | CountryRowNavigateProps`) for its two interaction modes.
**Reasoning:** Verified — `variant: "vpn"` (default) gets `onConnect`/`onDisconnect`; `variant: "navigate"` gets `onNavigate`. This enforces at the type level that VPN-mode rows cannot lack connect handlers and navigate-mode rows cannot lack a navigate handler.
**Alternatives rejected:** Single bag-of-optional-props (loses type safety, easy to forget a required handler); two separate components (code duplication for shared rendering logic).
**Affects:** `src/app/components/CountryBrowser.tsx`, `src/app/components/ISPRegulationsPanel.tsx` (uses both variants).

---

**Date:** 2026-04-07
**Feature:** World map
**Decision:** Leaflet used directly via `useRef` and imperative API rather than through `react-leaflet` declarative wrappers.
**Reasoning:** Verified — `WorldMap.tsx` imports `L from "leaflet"` and manages the map instance, tile layer, and markers via `useRef` + `useEffect`. `react-leaflet` is in `package.json` but `MapContainer`, `TileLayer`, etc. are not imported. [REASONING UNVERIFIED — needs human input: was this an intentional decision for finer control over marker DOM and animations, or an artifact of Figma Make export?]
**Alternatives rejected:** `react-leaflet` declarative components (less control over marker lifecycle and custom overlays; peer dependency requires React 19).
**Affects:** `src/app/components/WorldMap.tsx`, `package.json` (`react-leaflet` dependency present but unused declaratively).

---

**Date:** 2026-04-07
**Feature:** Shared
**Decision:** `@` path alias configured in `vite.config.ts` but intentionally unused — all imports use relative paths.
**Reasoning:** Verified — `vite.config.ts` defines `'@': path.resolve(__dirname, './src')` but zero source files use `@/...` imports. All cross-directory imports use `../../imports/...` or `./...` relative paths.  [REASONING UNVERIFIED — needs human input: should this alias be adopted or removed?]
**Alternatives rejected:** Using the alias everywhere (migration effort, and Figma Make regeneration may not support it); removing the alias config (may break if Figma Make expects it).
**Affects:** `vite.config.ts`, all import statements.

---

**Date:** 2026-04-07
**Feature:** ISP regulations panel
**Decision:** View transitions inside the left panel use Framer Motion (`AnimatePresence` + `motion`), not CSS transitions or React Transition Group.
**Reasoning:** Verified — `ISPRegulationsPanel.tsx` imports `{ motion, AnimatePresence } from "motion/react"` for panel view switching animations. No other animation library is used in feature code.
**Alternatives rejected:** CSS transitions (cannot handle enter/exit orchestration for conditional renders); React Transition Group (less ergonomic API for the mount/unmount pattern used here).
**Affects:** `src/app/components/ISPRegulationsPanel.tsx`, `package.json` (`motion` dependency).

---

**Date:** 2026-04-07
**Feature:** Shared
**Decision:** Flags loaded as SVGs from external CDN (`flagcdn.com/{iso}.svg`) rather than bundled locally.
**Reasoning:** Verified — `flagComponents.tsx` builds URLs as `https://flagcdn.com/${iso}.svg`. No flag SVGs are bundled in `src/`. The `ImageWithFallback` component provides a gray placeholder on load failure.
**Alternatives rejected:** Bundling all 93 flag SVGs (increases bundle size significantly); using emoji flags (inconsistent cross-platform rendering); `country-flag-icons` package icons directly (installed but CDN approach was chosen for SVG quality at all sizes).
**Affects:** `src/app/components/flagComponents.tsx`, `src/app/components/figma/ImageWithFallback.tsx`, network requests at runtime.

---

**Date:** 2026-04-07
**Feature:** App Firewall
**Decision:** App Firewall redesigned as an overlay on the shared Leaflet WorldMap, reusing the exact Privacy Map design language (glassmorphism panels, color palette, layout positioning, StatusGradient component).
**Reasoning:** The previous implementation used a self-contained SVG map with completely different colors (#0F1923, #1A2332, etc.), a flex three-panel layout, and no design consistency with the Privacy Map. This violated the user's requirement to "reuse strictly everything design-wise from the privacy map view." The new architecture shares the actual Leaflet map via `firewallMode` + `onMapReady` props on WorldMap, uses the exact same glassmorphism panel style (`backdrop-blur-[16px] bg-[rgba(22,20,28,0.75)]`), the same color palette (`#2CFFCC`, `#F7607B`, `#FFAD33`), the same StatusGradient component, and the same bottom gradient bar pattern. Arc lines are native Leaflet polylines that auto-handle pan/zoom.
**Alternatives rejected:** Self-contained SVG map (completely different look & feel); separate Leaflet instance (wasteful, still different overlays); CSS-only color fixes (didn't address fundamental layout and component differences).
**Affects:** `src/app/components/AppFirewall.tsx` (complete rewrite), `src/app/components/WorldMap.tsx` (+firewallMode/onMapReady props), `src/app/App.tsx` (restructured render flow), `/docs/features/app-firewall.md`, `.cursor/rules/app-firewall.mdc`.
