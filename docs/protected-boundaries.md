# Protected Boundaries

Files and directories listed here MUST NOT be modified without explicit human approval. This document is referenced by `.cursor/rules/protected-boundaries.mdc`.

---

## Protection Levels

### 🔴 Critical — NEVER modify without human approval + diff review

These files affect multiple features or core infrastructure. A mistake here causes cascading regressions.

| Path | Used By | What It Does |
|------|---------|-------------|
| `src/app/App.tsx` | World map, ISP regulations panel (directly); every feature (indirectly via state) | Root component; sole owner of all global state (`selectedCountry`, `selectedMapLayer`, `vpnStatus`, `connectedCountry`, `physicalCountry`); exports `VpnStatus` type |
| `src/imports/RightVpnFeatures.tsx` | App, World map, ISP regulations panel, Country detail view, Map layers dropdown, Layer data | Exports `MapLayerOption` and `VpnFeatureType` type unions; right-panel VPN feature UI |
| `src/app/components/layerData.ts` | World map, ISP regulations panel, Country detail view | Layer tier system: `LayerTier`, `layerMeta`, `getCountryTier`, `getTierColor`, `getCountriesByTier`, recommendations |
| `src/app/components/flagComponents.tsx` | World map, ISP regulations panel, Country browser, Country detail view, Connection card (Figma) | Flag CDN URL helpers (`getFlagUrl`, `getIsoCode`, `Flag`, `getFlagForCountry`); country-to-ISO mapping |
| `src/app/components/ui/utils.ts` | ~43 shadcn/ui components (every file in `src/app/components/ui/`) | `cn()` class-merge utility (clsx + tailwind-merge) |
| `src/styles/theme.css` | Entire app (loaded via `index.css` → `main.tsx`) | CSS custom properties (light/dark tokens), `@theme inline` Tailwind mapping, base typography |
| `src/styles/tailwind.css` | Entire app (loaded via `index.css` → `main.tsx`) | Tailwind v4 entry: `@import 'tailwindcss'`, `@source` directive, `tw-animate-css` import |
| `src/styles/fonts.css` | Entire app (loaded via `index.css` → `main.tsx`) | Font stack: Segoe UI Variable → Inter `@font-face` aliases for Figma optical-size variants |
| `src/styles/index.css` | Entire app (sole CSS entry in `main.tsx`) | Master import chain: `fonts.css` → `tailwind.css` → `theme.css` |
| `vite.config.ts` | Entire build | Vite plugins (React + Tailwind), `@` path alias, asset includes |
| `index.html` | Entire app | SPA entry; `<div id="root">`, `<title>`, meta tags |
| `package.json` | Entire project | Dependencies, scripts, peer deps, overrides |

### 🟡 Cautious — Modification allowed, but output diff first and list all affected features

These files are shared but can be safely extended. New props, new config options, and new exports are OK. Changing existing interfaces is NOT OK without approval.

| Path | Used By | Safe Changes | Unsafe Changes |
|------|---------|-------------|----------------|
| `src/app/components/countryData.ts` | Country detail view | Adding new country entries following existing `CountryData` shape | Changing `CountryData` interface fields, removing countries, changing `RegulationLevel` union |
| `src/app/components/ISPRegulationsPanel.tsx` | App (direct child), Country detail view (imports `CountrySpotlight`) | Internal UI changes, new local state, new sub-views | Changing exported props interface, changing `CountrySpotlight` export signature |
| `src/app/components/CountryBrowser.tsx` | ISP regulations panel (imports `CountryBrowser` + `CountryRow`) | Internal UI changes, new tab logic, styling | Changing `CountryRowProps` discriminated union, renaming exports, changing `CountryBrowser` props |
| `src/app/components/CountryDetailView.tsx` | ISP regulations panel (imports `CountryDetailView`) | Internal layout changes, new display sections | Changing props interface (`countryName`, `onBack`, `activeLayer`) |
| `src/imports/MapLayers.tsx` | World map | Internal UI changes, styling | Changing `MapLayerOption` alignment or props API |
| `src/imports/ConnectionCardLeft.tsx` | World map; also imports from `flagComponents.tsx` | Internal UI changes, styling | Changing props interface |
| `src/imports/ConnectionDetails.tsx` | World map | Internal UI changes, styling | Changing props interface |
| `src/imports/StatusGradient.tsx` | World map | Internal UI changes, styling | Changing props interface |
| `src/app/components/ui/use-mobile.ts` | `sidebar.tsx` (currently); available to all features | Adding new responsive hooks alongside existing export | Changing `useIsMobile` return type or breakpoint |
| `postcss.config.mjs` | Build pipeline | Adding PostCSS plugins | Removing the file or adding conflicting Tailwind plugins |

### 🟢 Open — Standard development rules apply

Any file **not** listed under 🔴 or 🟡 above is considered open for standard feature-scoped development. This includes:

- `src/app/components/VpnFeatureFlyout.tsx` (consumed only by `WorldMap.tsx`)
- `src/app/components/WorldMap.tsx` (consumed only by `App.tsx`)
- `src/app/components/figma/ImageWithFallback.tsx` (no current importers traced)
- `src/app/components/flyout-icons/*` (consumed only by `VpnFeatureFlyout.tsx`)
- `src/imports/svg-*.ts`, `src/imports/svg-*.tsx` (Figma SVG path modules — consumed by specific imports)
- `src/imports/profile-icons/*` (consumed only by `CountryBrowser.tsx`)
- `src/imports/Fastest.tsx` (consumed only by `CountryBrowser.tsx`)
- `src/imports/ProtonPrivacyScore.tsx`, `SurveillanceAlliances.tsx`, `IspRegulations.tsx`, `Identity.tsx`, `P2P.tsx` (consumed by `RightVpnFeatures.tsx`, `MapLayers.tsx`, `ISPRegulationsPanel.tsx` — but these are leaf icon components with no exports beyond a default render)

Standard feature-scoped rules still apply: follow `global.mdc`, update feature docs after changes.

---

## Dependency Map — 🔴 Critical files

Import chains traced from actual `import` / `import type` statements in the codebase.

### `src/app/App.tsx`

```
src/app/App.tsx
  → imported by: src/main.tsx
  → exports VpnStatus type → imported by: src/app/components/WorldMap.tsx
```

### `src/imports/RightVpnFeatures.tsx`

```
src/imports/RightVpnFeatures.tsx
  → imported by (component): src/app/components/WorldMap.tsx
  → imported by (MapLayerOption type): src/app/App.tsx
  → imported by (MapLayerOption type): src/app/components/layerData.ts
  → imported by (MapLayerOption type): src/app/components/ISPRegulationsPanel.tsx
  → imported by (MapLayerOption type): src/app/components/CountryDetailView.tsx
  → imported by (MapLayerOption type): src/imports/MapLayers.tsx
  → imported by (MapLayerOption + VpnFeatureType types): src/app/components/WorldMap.tsx
```

### `src/app/components/layerData.ts`

```
src/app/components/layerData.ts
  → imported by: src/app/components/WorldMap.tsx (getCountryTier, getTierColor, layerMeta)
  → imported by: src/app/components/ISPRegulationsPanel.tsx (layerMeta, getCountryTier, getCountriesByTier, getRecommendationReason, getPhysicalCountryAwareRecommendations, LayerTier)
  → imported by: src/app/components/CountryDetailView.tsx (getCountryTier, LayerTier)
```

### `src/app/components/flagComponents.tsx`

```
src/app/components/flagComponents.tsx
  → imported by: src/app/components/WorldMap.tsx (getFlagUrl)
  → imported by: src/app/components/ISPRegulationsPanel.tsx (getFlagForCountry)
  → imported by: src/app/components/CountryBrowser.tsx (getFlagUrl)
  → imported by: src/app/components/CountryDetailView.tsx (getFlagForCountry)
  → imported by: src/imports/ConnectionCardLeft.tsx (getIsoCode)
```

### `src/app/components/ui/utils.ts`

```
src/app/components/ui/utils.ts
  → imported by: 43 files in src/app/components/ui/ (every shadcn/ui component)
```

### `src/styles/theme.css`

```
src/styles/theme.css
  → imported by: src/styles/index.css
    → imported by: src/main.tsx
```

### `src/styles/tailwind.css`

```
src/styles/tailwind.css
  → imported by: src/styles/index.css
    → imported by: src/main.tsx
```

### `src/styles/fonts.css`

```
src/styles/fonts.css
  → imported by: src/styles/index.css
    → imported by: src/main.tsx
```

### `src/styles/index.css`

```
src/styles/index.css
  → imported by: src/main.tsx
  → imports: fonts.css, tailwind.css, theme.css
```

### `vite.config.ts`

```
vite.config.ts
  → consumed by: Vite build system (not imported by source files)
  → affects: all source compilation, path resolution, plugin pipeline
```

### `index.html`

```
index.html
  → consumed by: Vite dev server and build (SPA shell)
  → loads: src/main.tsx via <script type="module">
```

### `package.json`

```
package.json
  → consumed by: npm, Vite, all tooling
  → defines: every runtime and dev dependency, build scripts
```
