# Firewall Map

An interactive VPN and internet privacy prototype built on a real-time world map. Designed to demonstrate two complementary views: a **Privacy Map** for understanding global data protection landscapes, and an **App Firewall** for visualising outbound network traffic from apps on your device.

**Live demo:** [firewall-map.vercel.app](https://firewall-map.vercel.app)

---

## What it does

### Privacy Map
Explore internet privacy and surveillance data across 93 countries on an interactive Leaflet map. Switch between five data layers to understand the privacy landscape from different angles:

- **Privacy Score** — data protection laws and enforcement quality per country
- **Surveillance Alliances** — 5 Eyes, 9 Eyes, 14 Eyes membership
- **ISP Regulations** — how ISPs can monitor, log, and share your traffic
- **Identity Requirements** — real-name registration and SIM laws
- **P2P** — torrenting legality and enforcement

The left panel contextualises your situation based on physical location, recommends VPN exit countries per layer, and lets you drill into any country for a full breakdown. Connect to a VPN server from the map or the panel — the UI updates to reflect your protected state.

### App Firewall
Overlay view on the same map showing live outbound network traffic from 12 apps on your device. Each app draws an animated arc from your current location (or VPN server when connected) to its destination server.

- **Live data counters** — each app's data sent ticks upward in real time, proportional to connection frequency
- **Arc visualisation** — smooth cubic Bézier curves with animated dashes showing continuous data flow; hover for app details, click to open the app's detail view
- **App detail panel** — slides in-place within the left panel (same navigation pattern as the Privacy Map country detail), showing destination, description, jurisdiction warnings, and block actions
- **Sorting** — switch between alphabetical and most-data-sent order; the list reorders live with spring animations
- **Status badges** — Suspicious and Review labels on apps worth closer inspection
- **Block controls** — Block Permanently or Block When in Background; blocked apps have their arcs removed from the map
- **VPN-aware origins** — arc origins move from your physical location to the VPN server the moment you connect

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS v4 + inline styles for Figma precision |
| Map | Leaflet 1.9 + react-leaflet 5 |
| Animation | Framer Motion (motion/react) |
| UI primitives | shadcn/ui + Radix UI |
| Icons | lucide-react |
| Flags | country-flag-icons + flagcdn.com |

---

## Running locally

```bash
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

> `--legacy-peer-deps` is required due to a peer dependency conflict between react-leaflet 5 (which expects React 19) and React 18.

## Building for production

```bash
npm run build
```

Output goes to `dist/`.

---

## Project structure

```
src/
├── app/
│   ├── App.tsx                  # Root — all global state, view toggle
│   └── components/
│       ├── WorldMap.tsx          # Leaflet map, markers, overlays
│       ├── AppFirewall.tsx       # App Firewall overlay + arc system
│       ├── ISPRegulationsPanel.tsx  # Left panel for Privacy Map view
│       ├── CountryDetailView.tsx # In-panel country detail page
│       ├── CountryBrowser.tsx    # Country list + tabs
│       ├── countryData.ts        # Static privacy data (35 countries)
│       ├── layerData.ts          # Layer tiers + metadata (93 countries)
│       └── ui/                   # ~40 shadcn/ui primitives
├── imports/                      # Figma-exported components + SVG modules
└── styles/                       # Tailwind config, theme tokens, fonts
```

---

## Notes

- All data is static and hardcoded — this is a prototype, not a live monitoring tool
- Map tiles from [CARTO](https://carto.com), flag images from [flagcdn.com](https://flagcdn.com)
- Originally exported from Figma Make; hand-extended with the App Firewall feature
