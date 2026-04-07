import { useEffect, useRef, useState, useCallback } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import ConnectionDetails from "../../imports/ConnectionDetails";
import RightVpnFeatures from "../../imports/RightVpnFeatures";
import type { MapLayerOption, VpnFeatureType } from "../../imports/RightVpnFeatures";
import VpnFeatureFlyout from "./VpnFeatureFlyout";
import ConnectionCardLeft1 from "../../imports/ConnectionCardLeft";
import MapLayers from "../../imports/MapLayers";
import { getCountryTier, getTierColor, layerMeta } from "./layerData";
import { getFlagUrl } from "./flagComponents";
import StatusGradient from "../../imports/StatusGradient";
import type { VpnStatus } from "../App";

// ─── Layer accent colors for the transition flash ─────────────────────────────

const layerAccentColor: Record<MapLayerOption, string> = {
  none: "rgba(255,255,255,0.06)",
  "privacy-score": "rgba(110,90,220,0.18)",
  surveillance: "rgba(220,170,50,0.18)",
  "isp-regulations": "rgba(90,180,220,0.18)",
  identity: "rgba(220,80,80,0.18)",
  p2p: "rgba(80,200,160,0.18)",
};

const layerDisplayName: Record<Exclude<MapLayerOption, "none">, string> = {
  "privacy-score": "Privacy score",
  surveillance: "Surveillance alliances",
  "isp-regulations": "ISP regulations",
  identity: "Identity verification",
  p2p: "P2P & torrenting",
};

// ─── Country coordinates ───────────────────────────────────────────────────────

interface CountryMarker {
  name: string;
  lat: number;
  lng: number;
}

const countryMarkers: CountryMarker[] = [
  { name: "Albania", lat: 41.2, lng: 20.2 },
  { name: "Algeria", lat: 28.0, lng: 3.0 },
  { name: "Angola", lat: -11.2, lng: 17.9 },
  { name: "Argentina", lat: -38.4, lng: -63.6 },
  { name: "Armenia", lat: 40.1, lng: 45.0 },
  { name: "Australia", lat: -25.3, lng: 133.8 },
  { name: "Austria", lat: 47.5, lng: 14.6 },
  { name: "Azerbaijan", lat: 40.1, lng: 47.6 },
  { name: "Bangladesh", lat: 23.7, lng: 90.4 },
  { name: "Belarus", lat: 53.7, lng: 27.9 },
  { name: "Belgium", lat: 50.5, lng: 4.5 },
  { name: "Bolivia", lat: -16.3, lng: -63.6 },
  { name: "Bosnia and Herzegovina", lat: 44.2, lng: 17.9 },
  { name: "Brazil", lat: -14.2, lng: -51.9 },
  { name: "Bulgaria", lat: 42.7, lng: 25.5 },
  { name: "Cambodia", lat: 12.6, lng: 105.0 },
  { name: "Cameroon", lat: 7.4, lng: 12.4 },
  { name: "Canada", lat: 56.1, lng: -106.3 },
  { name: "Chile", lat: -35.7, lng: -71.5 },
  { name: "China", lat: 35.9, lng: 104.2 },
  { name: "Colombia", lat: 4.1, lng: -72.9 },
  { name: "Costa Rica", lat: 9.7, lng: -83.8 },
  { name: "Croatia", lat: 45.1, lng: 15.2 },
  { name: "Cyprus", lat: 35.1, lng: 33.4 },
  { name: "Czech Republic", lat: 49.8, lng: 15.5 },
  { name: "Denmark", lat: 56.3, lng: 9.5 },
  { name: "Ecuador", lat: -1.8, lng: -78.2 },
  { name: "Egypt", lat: 26.8, lng: 30.8 },
  { name: "El Salvador", lat: 13.8, lng: -88.9 },
  { name: "Estonia", lat: 58.6, lng: 25.0 },
  { name: "Finland", lat: 61.9, lng: 25.7 },
  { name: "France", lat: 46.6, lng: 2.2 },
  { name: "Georgia", lat: 42.3, lng: 43.4 },
  { name: "Germany", lat: 51.1, lng: 10.4 },
  { name: "Ghana", lat: 7.9, lng: -1.0 },
  { name: "Greece", lat: 39.1, lng: 21.8 },
  { name: "Honduras", lat: 15.2, lng: -86.2 },
  { name: "Hong Kong", lat: 22.4, lng: 114.1 },
  { name: "Hungary", lat: 47.2, lng: 19.5 },
  { name: "Iceland", lat: 64.9, lng: -19.0 },
  { name: "India", lat: 20.6, lng: 79.0 },
  { name: "Indonesia", lat: -0.8, lng: 113.9 },
  { name: "Iran", lat: 32.4, lng: 53.7 },
  { name: "Ireland", lat: 53.4, lng: -8.2 },
  { name: "Isle of Man", lat: 54.2, lng: -4.5 },
  { name: "Israel", lat: 31.0, lng: 35.0 },
  { name: "Italy", lat: 42.8, lng: 12.6 },
  { name: "Japan", lat: 36.2, lng: 138.3 },
  { name: "Kazakhstan", lat: 48.0, lng: 68.0 },
  { name: "Kenya", lat: 0.0, lng: 38.0 },
  { name: "Latvia", lat: 56.9, lng: 24.1 },
  { name: "Lithuania", lat: 55.2, lng: 23.9 },
  { name: "Luxembourg", lat: 49.8, lng: 6.1 },
  { name: "Malaysia", lat: 4.2, lng: 108.0 },
  { name: "Mexico", lat: 23.6, lng: -102.5 },
  { name: "Moldova", lat: 47.0, lng: 28.5 },
  { name: "Mongolia", lat: 46.9, lng: 103.8 },
  { name: "Morocco", lat: 32.0, lng: -5.0 },
  { name: "Netherlands", lat: 52.1, lng: 5.3 },
  { name: "New Zealand", lat: -41.3, lng: 174.8 },
  { name: "Nigeria", lat: 9.1, lng: 8.7 },
  { name: "North Macedonia", lat: 41.6, lng: 21.7 },
  { name: "Norway", lat: 60.5, lng: 8.5 },
  { name: "Pakistan", lat: 30.4, lng: 69.3 },
  { name: "Panama", lat: 8.5, lng: -80.8 },
  { name: "Peru", lat: -9.2, lng: -75.0 },
  { name: "Philippines", lat: 12.9, lng: 121.8 },
  { name: "Poland", lat: 51.9, lng: 19.1 },
  { name: "Portugal", lat: 39.4, lng: -8.2 },
  { name: "Romania", lat: 45.9, lng: 24.9 },
  { name: "Russia", lat: 61.5, lng: 105.3 },
  { name: "Saudi Arabia", lat: 23.9, lng: 45.1 },
  { name: "Senegal", lat: 14.5, lng: -14.5 },
  { name: "Serbia", lat: 44.0, lng: 21.0 },
  { name: "Singapore", lat: 1.4, lng: 103.8 },
  { name: "Slovakia", lat: 48.7, lng: 19.7 },
  { name: "Slovenia", lat: 46.1, lng: 14.9 },
  { name: "South Africa", lat: -30.6, lng: 22.9 },
  { name: "South Korea", lat: 35.9, lng: 127.8 },
  { name: "Spain", lat: 40.5, lng: -3.7 },
  { name: "Sri Lanka", lat: 7.9, lng: 80.8 },
  { name: "Sweden", lat: 62.0, lng: 15.0 },
  { name: "Switzerland", lat: 46.8, lng: 8.2 },
  { name: "Taiwan", lat: 23.7, lng: 120.9 },
  { name: "Thailand", lat: 15.9, lng: 100.9 },
  { name: "Turkey", lat: 39.0, lng: 35.2 },
  { name: "Ukraine", lat: 49.0, lng: 31.2 },
  { name: "United Arab Emirates", lat: 24.0, lng: 54.0 },
  { name: "United Kingdom", lat: 54.0, lng: -2.5 },
  { name: "United States", lat: 39.5, lng: -98.3 },
  { name: "Uruguay", lat: -32.5, lng: -55.8 },
  { name: "Venezuela", lat: 6.4, lng: -66.6 },
  { name: "Vietnam", lat: 14.1, lng: 108.3 },
];

// ─── User location pin (unprotected / red pulsating) ────────────────────────

const DEFAULT_LOCATION = { lat: 53.7, lng: 27.9 }; // Belarus – Minsk fallback

function getPhysicalLocation(country: string): { lat: number; lng: number } {
  const marker = countryMarkers.find((c) => c.name === country);
  return marker ? { lat: marker.lat, lng: marker.lng } : DEFAULT_LOCATION;
}

const USER_LOCATION_PIN_CSS = `
  @keyframes ulp-pulse {
    0%, 100% { transform: scale(0.96); }
    50%      { transform: scale(1.04); }
  }
`;

/** Single soft outer ring (Figma-style radial mask) — only scales gently, no fade / no duplicate ring. */
function makeOuterRingSVG(uid: string, ringColor: string, ringOpacity: string): string {
  return `<svg width="96" height="96" viewBox="0 0 96 96" fill="none"
    style="position:absolute;top:0;left:0;transform-origin:48px 48px;animation:ulp-pulse 2.8s ease-in-out infinite;"
    xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="rg${uid}" cx="0" cy="0" r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(48 48) rotate(90) scale(48)">
        <stop offset="0.442708" stop-opacity="0"/>
        <stop offset="1"/>
      </radialGradient>
    </defs>
    <mask id="m${uid}" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="96" height="96">
      <circle cx="48" cy="48" r="48" fill="url(#rg${uid})"/>
    </mask>
    <g mask="url(#m${uid})">
      <circle cx="48" cy="48" r="48" fill="${ringColor}" fill-opacity="${ringOpacity}"/>
    </g>
  </svg>`;
}

function createUserLocationPinHTML(status: "unprotected" | "connecting" | "protected"): string {
  const dotColor = status === "protected" ? "#2CFFCC" : "#F7607B";
  const ringColor = status === "protected" ? "#2CFFCC" : "#F7607B";
  const ringOpacity = "0.5";
  const showPulse = status !== "connecting";

  return `
    <div style="position:relative;width:96px;height:96px;pointer-events:none;transition:opacity 0.5s ease;">
      ${showPulse ? makeOuterRingSVG("ring", ringColor, ringOpacity) : ""}
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none"
        style="position:absolute;top:0;left:0;"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="ulpf" x="32" y="33" width="32" height="32"
            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
        </defs>
        <g filter="url(#ulpf)">
          <circle cx="48" cy="48" r="12" fill="white"/>
        </g>
        <circle cx="48" cy="48.1875" r="6" fill="${dotColor}"/>
      </svg>
    </div>
  `;
}

// ─── Circle dot SVG icon factory ──────────────────────────────────────────────

function getMarkerColor(
  name: string,
  layer: MapLayerOption,
): string {
  if (layer === "none") return "#8882a0"; // neutral gray when no layer
  const tier = getCountryTier(layer, name);
  return getTierColor(layer, tier);
}

function createDiamondIcon(fill: string, isActive: boolean): L.DivIcon {
  const BOX = isActive ? 22 : 16;
  const scale = isActive ? 1.375 : 1;
  const shadow = isActive
    ? `filter: drop-shadow(0 0 8px ${fill}80);`
    : `filter: drop-shadow(0 0 3px ${fill}60);`;

  // Matches Figma pin design: outer glow rect + solid inner diamond
  const html = `<svg width="${BOX}" height="${BOX}" viewBox="0 0 15.9976 15.9976" style="${shadow} transform: scale(${scale}); transition: transform 0.3s ease;">
    <rect fill="${fill}" height="12.7289" opacity="0.16" rx="4"
      transform="rotate(45 7.99878 -1.00187)" width="12.7289" x="7.99878" y="-1.00187" />
    <rect fill="${fill}" height="6" rx="1"
      transform="rotate(45 7.99636 3.75781)" width="6" x="7.99636" y="3.75781" />
  </svg>`;

  return L.divIcon({
    html,
    className: "diamond-marker",
    iconSize: [BOX, BOX],
    iconAnchor: [BOX / 2, BOX / 2],
  });
}

function createCircleDotIcon(isActive: boolean): L.DivIcon {
  // 32×32 so the icon anchor never shifts when the hover halo appears.
  // All visual states live in the same SVG; CSS classes toggle opacity.
  const BOX = 32;
  const activeClass = isActive ? " cdm-active" : "";

  const html = `<svg width="32" height="32" viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg" style="overflow:visible;display:block;">
    <!-- outer white halo — invisible by default, fades in on hover (Figma: 32×32 white layer) -->
    <circle class="cdm-halo" cx="16" cy="16" r="15" fill="white"/>
    <!-- always-visible white glow ring (Figma: 16×16 white layer, r=8) -->
    <circle class="cdm-glow" cx="16" cy="16" r="8" fill="white"/>
    <!-- purple center dot — invisible by default, pops in on hover (Figma: 8×8 #8A6EFF layer, r=4) -->
    <circle class="cdm-pdot" cx="16" cy="16" r="4" fill="#8A6EFF"/>
    <!-- default white center dot — fades out on hover -->
    <circle class="cdm-dot" cx="16" cy="16" r="3" fill="white"/>
  </svg>`;

  return L.divIcon({
    html,
    className: `circle-dot-marker${activeClass}`,
    iconSize: [BOX, BOX],
    iconAnchor: [BOX / 2, BOX / 2],
  });
}

// ─── Tooltip factory ──────────────────────────────────────────────────────────

function createTooltipContent(name: string, layer: MapLayerOption): string {
  const action = layer === "none" ? "Connect" : "Explore";
  const flag = getFlagUrl(name);

  return `<div style="
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    background: #16141c;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 6px 10px 6px 6px;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 0 100px rgba(24,22,32,0.2);
    white-space: nowrap;
    font-family: 'Segoe UI Variable', 'Segoe UI', 'Inter', sans-serif;
  ">
    <img src="${flag}" alt="${name} flag" style="width:20px;height:13.333px;border-radius:3px;flex-shrink:0;" />
    <span style="
      color: white;
      font-size: 12px;
      line-height: 16px;
      font-variation-settings: 'opsz' 8;
    ">${action} - ${name}</span>
  </div>`;
}

// ─── Dark map style ──────────────────────────────────────────────────────────

const TILE_URL =
  "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png";
const TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>';

// ─── Visible-area centering ───────────────────────────────────────────────────
//
// The map container is 1170×830 px.  Panels and overlays take up:
//   Left panel  : 8 + 340 = 348 px from left
//   Right panel : 8 + 123 = 131 px from right  → left edge at 1039 px
//   Top card    : ~164 px from top
//   Bottom bar  : ~110 px from bottom          → top edge at  720 px
//
// Visible-area centre  : X = (348+1039)/2 = 693.5,  Y = (164+720)/2 = 442
// Map container centre : X =  1170/2      = 585,    Y =  830/2      = 415
// Pixel offset needed  : dX = +108.5,                dY = +27
//
// To make a lat/lng appear at the visible centre we pan the map to the point
// that is (dX, dY) pixels *before* the target in projected pixel space.

const VISIBLE_OFFSET_X = 108.5; // px right  of map container centre
const VISIBLE_OFFSET_Y = 27;    // px below  of map container centre

function visibleCenterLatLng(map: L.Map, lat: number, lng: number): L.LatLng {
  const zoom = map.getZoom();
  const targetPx = map.project([lat, lng], zoom);
  const adjustedPx = targetPx.subtract(L.point(VISIBLE_OFFSET_X, VISIBLE_OFFSET_Y));
  return map.unproject(adjustedPx, zoom);
}

// ─── Component ────────────────────────────────────────────────────────────────

interface WorldMapProps {
  selectedCountry: string | null;
  onSelectCountry: (name: string) => void;
  selectedMapLayer: MapLayerOption;
  onSelectMapLayer: (layer: MapLayerOption) => void;
  vpnStatus: VpnStatus;
  connectedCountry: string | null;
  onConnect: (country: string) => void;
  onDisconnect: () => void;
  physicalCountry: string;
  onPhysicalCountryChange: (country: string) => void;
  panelWidth: number;
}

export function WorldMap({
  selectedCountry,
  onSelectCountry,
  selectedMapLayer,
  onSelectMapLayer,
  vpnStatus,
  connectedCountry,
  onConnect,
  onDisconnect,
  physicalCountry,
  onPhysicalCountryChange,
  panelWidth,
}: WorldMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const userPinRef = useRef<L.Marker | null>(null);
  const [showMapLayers, setShowMapLayers] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<VpnFeatureType | null>(null);
  const [flyoutPos, setFlyoutPos] = useState<{ top: number; left: number } | null>(null);
  const featureHideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const featureShowTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mapLayersShowTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mapLayersHideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevLayerRef = useRef<MapLayerOption>(selectedMapLayer);
  const [layerFlash, setLayerFlash] = useState<{ color: string; key: number } | null>(null);
  const [transitionActive, setTransitionActive] = useState(false);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const blurTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [transitionLabel, setTransitionLabel] = useState<string | null>(null);

  const handleMapLayerMouseEnter = useCallback(() => {
    if (mapLayersHideTimerRef.current) clearTimeout(mapLayersHideTimerRef.current);
    if (mapLayersShowTimerRef.current) clearTimeout(mapLayersShowTimerRef.current);
    mapLayersShowTimerRef.current = setTimeout(() => {
      setShowMapLayers(true);
    }, 500);
  }, []);

  /** Only cancel pending open — closing is handled when pointer leaves the whole right panel + map layers region */
  const handleMapLayerMouseLeave = useCallback(() => {
    if (mapLayersShowTimerRef.current) clearTimeout(mapLayersShowTimerRef.current);
  }, []);

  const handleMapLayersRegionEnter = useCallback(() => {
    if (mapLayersHideTimerRef.current) clearTimeout(mapLayersHideTimerRef.current);
  }, []);

  const handleMapLayersRegionLeave = useCallback(() => {
    if (mapLayersShowTimerRef.current) clearTimeout(mapLayersShowTimerRef.current);
    mapLayersHideTimerRef.current = setTimeout(() => {
      setShowMapLayers(false);
    }, 150);
  }, []);

  const handleFeatureHover = useCallback((feature: VpnFeatureType, top: number, left: number) => {
    if (featureHideTimerRef.current) clearTimeout(featureHideTimerRef.current);
    if (featureShowTimerRef.current) clearTimeout(featureShowTimerRef.current);
    featureShowTimerRef.current = setTimeout(() => {
      setHoveredFeature(feature);
      setFlyoutPos({ top, left: left - 250 - 16 });
    }, 500);
  }, []);

  const handleFeatureLeave = useCallback(() => {
    if (featureShowTimerRef.current) clearTimeout(featureShowTimerRef.current);
    featureHideTimerRef.current = setTimeout(() => {
      setHoveredFeature(null);
    }, 150);
  }, []);

  const handleFlyoutEnter = useCallback(() => {
    if (featureHideTimerRef.current) clearTimeout(featureHideTimerRef.current);
  }, []);

  const handleFlyoutLeave = useCallback(() => {
    featureHideTimerRef.current = setTimeout(() => {
      setHoveredFeature(null);
    }, 150);
  }, []);

  const handleSelectLayer = useCallback(
    (layer: MapLayerOption) => {
      onSelectMapLayer(layer);
      if (mapLayersShowTimerRef.current) clearTimeout(mapLayersShowTimerRef.current);
      if (mapLayersHideTimerRef.current) clearTimeout(mapLayersHideTimerRef.current);
      setShowMapLayers(false);
    },
    [onSelectMapLayer]
  );

  // Initialize map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [30, 20],
      zoom: 3,
      minZoom: 2,
      maxZoom: 7,
      zoomControl: false,
      attributionControl: false,
      maxBoundsViscosity: 0.8,
      maxBounds: [
        [-85, -200],
        [85, 200],
      ],
    });

    L.tileLayer(TILE_URL, {
      attribution: TILE_ATTRIBUTION,
      subdomains: "abcd",
    }).addTo(map);

    L.control.attribution({ position: "bottomright", prefix: false }).addTo(map);

    mapRef.current = map;

    requestAnimationFrame(() => {
      map.invalidateSize();
    });
    const resizeTimer = setTimeout(() => {
      map.invalidateSize();
    }, 200);

    // Add markers (initial color will be updated by the layer effect)
    countryMarkers.forEach((cm) => {
      const icon = createCircleDotIcon(false);
      const marker = L.marker([cm.lat, cm.lng], { icon })
        .addTo(map)
        .on("click", () => {
          onSelectCountry(cm.name);
        });

      marker.bindTooltip("", {
        direction: "top",
        offset: [0, -10],
        className: "diamond-tooltip",
        opacity: 1,
      });

      markersRef.current.set(cm.name, marker);
    });

    // User location pin – stored in ref so it can be updated reactively
    const initLoc = getPhysicalLocation(physicalCountry);
    const userPin = L.marker([initLoc.lat, initLoc.lng], {
      icon: L.divIcon({
        html: createUserLocationPinHTML("unprotected"),
        className: "user-location-pin",
        iconSize: [96, 96],
        iconAnchor: [48, 48],
      }),
      zIndexOffset: 500,
      interactive: false,
    }).addTo(map);
    userPinRef.current = userPin;

    return () => {
      clearTimeout(resizeTimer);
      map.remove();
      mapRef.current = null;
      markersRef.current.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep click callbacks fresh on markers
  useEffect(() => {
    markersRef.current.forEach((marker, name) => {
      marker.off("click");
      marker.on("click", () => {
        if (selectedMapLayer === "none") {
          onConnect(name);
        } else {
          onSelectCountry(name);
        }
      });
    });
  }, [onSelectCountry, onConnect, selectedMapLayer]);

  // React to selectedCountry or selectedMapLayer changes – update icons & tooltips
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    countryMarkers.forEach((cm) => {
      const marker = markersRef.current.get(cm.name);
      if (!marker) return;

      const color = getMarkerColor(cm.name, selectedMapLayer);
      const isActive = cm.name === selectedCountry;
      if (selectedMapLayer === "none") {
        marker.setIcon(createCircleDotIcon(isActive));
      } else {
        marker.setIcon(createDiamondIcon(color, isActive));
      }

      // Update tooltip content
      marker.setTooltipContent(createTooltipContent(cm.name, selectedMapLayer));
    });

    if (selectedCountry) {
      const cm = countryMarkers.find((c) => c.name === selectedCountry);
      if (cm) {
        map.flyTo([cm.lat, cm.lng], 5, {
          duration: 1.2,
          easeLinearity: 0.35,
        });
      }
    }

    // Handle layer flash effect
    if (selectedMapLayer !== prevLayerRef.current) {
      const flashColor = "rgba(44, 255, 204, 0.15)";
      setLayerFlash({ color: flashColor, key: Date.now() });

      // Activate temporary blur + label
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
      if (blurTimerRef.current) clearTimeout(blurTimerRef.current);
      setTransitionActive(true);
      if (selectedMapLayer !== "none") {
        setTransitionLabel(layerDisplayName[selectedMapLayer as Exclude<MapLayerOption, "none">]);
      }
      // Blur lasts 1 second
      blurTimerRef.current = setTimeout(() => {
        setTransitionActive(false);
      }, 1000);
      // Label lasts 3 seconds
      transitionTimerRef.current = setTimeout(() => {
        setTransitionLabel(null);
      }, 3000);

      prevLayerRef.current = selectedMapLayer;
    }
  }, [selectedCountry, selectedMapLayer]);

  // Update user location pin when VPN status or connected country changes
  useEffect(() => {
    const pin = userPinRef.current;
    const map = mapRef.current;
    if (!pin || !map) return;

    pin.setIcon(
      L.divIcon({
        html: createUserLocationPinHTML(vpnStatus),
        className: "user-location-pin",
        iconSize: [96, 96],
        iconAnchor: [48, 48],
      })
    );

    if (connectedCountry && (vpnStatus === "connecting" || vpnStatus === "protected")) {
      const target = countryMarkers.find((c) => c.name === connectedCountry);
      if (target) {
        if (vpnStatus === "protected") {
          pin.setLatLng([target.lat, target.lng]);
        }
        map.panTo(visibleCenterLatLng(map, target.lat, target.lng), {
          animate: true,
          duration: 1.2,
        });
      }
    } else if (vpnStatus === "unprotected") {
      const loc = getPhysicalLocation(physicalCountry);
      pin.setLatLng([loc.lat, loc.lng]);
      map.panTo(visibleCenterLatLng(map, loc.lat, loc.lng), {
        animate: true,
        duration: 1.0,
      });
    }
  }, [vpnStatus, connectedCountry, physicalCountry]);

  // Reposition user pin when physical country changes (while unprotected)
  useEffect(() => {
    const pin = userPinRef.current;
    const map = mapRef.current;
    if (!pin || !map) return;
    if (vpnStatus !== "unprotected") return;

    const loc = getPhysicalLocation(physicalCountry);
    pin.setLatLng([loc.lat, loc.lng]);
    map.panTo(visibleCenterLatLng(map, loc.lat, loc.lng), {
      animate: true,
      duration: 1.0,
    });
  }, [physicalCountry]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
      if (blurTimerRef.current) clearTimeout(blurTimerRef.current);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        ref={containerRef}
        className="w-full h-full transition-[filter] duration-700 ease-in-out"
        style={{ filter: transitionActive ? "blur(1.5px) brightness(0.85)" : "none" }}
      />

      {/* Layer transition flash overlay */}
      {layerFlash && (
        <div
          key={layerFlash.key}
          className="absolute inset-0 pointer-events-none z-[500]"
          style={{ background: layerFlash.color }}
          onAnimationEnd={() => setLayerFlash(null)}
        >
          <style>{`
            @keyframes layerFlashIn {
              0%   { opacity: 0; }
              20%  { opacity: 1; }
              100% { opacity: 0; }
            }
          `}</style>
          <div
            className="absolute inset-0"
            style={{
              animation: "layerFlashIn 600ms ease-out forwards",
              background: `radial-gradient(ellipse at center, ${layerFlash.color}, transparent 70%)`,
            }}
          />
        </div>
      )}

      {/* Top fading gradient — full width, above map, behind all panels */}
      <div
        className="absolute top-0 left-0 right-0 h-[300px] pointer-events-none z-[600]"
        style={{ transform: "scaleY(-1)" }}
      >
        <StatusGradient vpnStatus={vpnStatus} />
      </div>

      {/* Connection details overlay at bottom */}
      <div
        className="absolute bottom-0 right-0 z-[1000] pointer-events-none"
        style={{ left: panelWidth + 16 }}
      >
        <div
          className="bg-gradient-to-t from-[#0f0d14] via-[rgba(15,13,20,0.85)] to-transparent pt-[40px]"
          style={{ marginLeft: -(panelWidth + 16), paddingLeft: panelWidth + 16 }}
        >
          <div className="pointer-events-auto">
            <ConnectionDetails vpnStatus={vpnStatus} connectedCountry={connectedCountry} physicalCountry={physicalCountry} onPhysicalCountryChange={onPhysicalCountryChange} />
          </div>
        </div>
      </div>

      {/* VPN Features floating panel top-right + Map Layers — wrapper keeps hover while moving across the gap */}
      <div
        className="absolute top-[8px] right-[8px] z-[1000] pointer-events-auto"
        onMouseEnter={handleMapLayersRegionEnter}
        onMouseLeave={handleMapLayersRegionLeave}
      >
        <div className="flex items-end gap-[8px]">
          {showMapLayers && (
            <div className="w-[280px] pointer-events-auto">
              <MapLayers
                selectedLayer={selectedMapLayer}
                onSelectLayer={handleSelectLayer}
              />
            </div>
          )}
          <div className="w-[123px] shrink-0">
            <RightVpnFeatures
              onMapLayerMouseEnter={handleMapLayerMouseEnter}
              onMapLayerMouseLeave={handleMapLayerMouseLeave}
              selectedMapLayer={selectedMapLayer}
              mapLayerOpen={showMapLayers}
              onFeatureHover={handleFeatureHover}
              onFeatureLeave={handleFeatureLeave}
            />
          </div>
        </div>
      </div>

      {/* Feature flyout — fixed overlay so it's above everything and aligned to the hovered row */}
      {hoveredFeature && flyoutPos && (
        <div
          className="pointer-events-auto"
          style={{ position: "fixed", top: flyoutPos.top, left: flyoutPos.left, zIndex: 9999 }}
          onMouseEnter={() => {
            handleFlyoutEnter();
            handleMapLayersRegionEnter();
          }}
        >
          <VpnFeatureFlyout
            feature={hoveredFeature}
            onMouseEnter={handleFlyoutEnter}
            onMouseLeave={handleFlyoutLeave}
          />
        </div>
      )}

      {/* Connection card centered between left panel and right panel */}
      <div
        className="absolute top-[24px] z-[1000] pointer-events-auto"
        style={{ left: panelWidth + 32, right: "155px" }}
      >
        <div className="flex flex-col items-center gap-[10px]">
          <ConnectionCardLeft1
            vpnStatus={vpnStatus}
            connectedCountry={connectedCountry}
            selectedCountry={selectedCountry}
            onConnect={onConnect}
            onDisconnect={onDisconnect}
            physicalCountry={physicalCountry}
          />
          {transitionLabel && (
            <div
              className="px-[12px] py-[5px] rounded-[6px] bg-[rgba(255,255,255,0.06)] backdrop-blur-[8px]"
              style={{
                animation: "layerLabelFadeIn 400ms ease-out",
              }}
            >
              <span className="text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">
                {transitionLabel} layer is activated
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Custom CSS for leaflet overrides */}
      <style>{`
        ${USER_LOCATION_PIN_CSS}
        .user-location-pin {
          background: transparent !important;
          border: none !important;
          overflow: visible !important;
        }
        .user-location-pin > div {
          overflow: visible !important;
        }
        @keyframes layerLabelFadeIn {
          0%   { opacity: 0; transform: translateY(-4px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .diamond-marker {
          background: transparent !important;
          border: none !important;
          cursor: pointer !important;
          transition: transform 0.3s ease;
        }
        .diamond-marker:hover {
          transform: scale(1.3);
          z-index: 1000 !important;
        }
        .circle-dot-marker {
          background: transparent !important;
          border: none !important;
          cursor: pointer !important;
        }
        .circle-dot-marker:hover {
          z-index: 1000 !important;
        }

        /* ── Default state ──────────────────────────────────── */
        .circle-dot-marker .cdm-halo {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .circle-dot-marker .cdm-glow {
          opacity: 0.16;
          transition: opacity 0.3s ease;
        }
        .circle-dot-marker .cdm-pdot {
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .circle-dot-marker .cdm-dot {
          opacity: 0.85;
          transition: opacity 0.2s ease;
        }

        /* ── Selected / active state ────────────────────────── */
        .circle-dot-marker.cdm-active .cdm-glow { opacity: 0.32; }
        .circle-dot-marker.cdm-active .cdm-dot  { opacity: 1; }

        /* ── Hover state (smooth cross-fade into Figma hover pin) ── */
        .circle-dot-marker:hover .cdm-halo  { opacity: 0.10; }
        .circle-dot-marker:hover .cdm-glow  { opacity: 1; }
        .circle-dot-marker:hover .cdm-pdot  { opacity: 1;    }
        .circle-dot-marker:hover .cdm-dot   { opacity: 0;    }
        .diamond-tooltip {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        .diamond-tooltip::before {
          display: none !important;
        }
        .leaflet-container {
          background: #0f0d14 !important;
          font-family: inherit !important;
        }
        .leaflet-control-attribution {
          background: rgba(15,13,20,0.7) !important;
          color: rgba(255,255,255,0.25) !important;
          font-size: 10px !important;
          padding: 2px 6px !important;
          border-radius: 4px 0 0 0 !important;
        }
        .leaflet-control-attribution a {
          color: rgba(255,255,255,0.35) !important;
        }
        .leaflet-grab {
          cursor: grab !important;
        }
        .leaflet-dragging .leaflet-grab {
          cursor: grabbing !important;
        }
      `}</style>
    </div>
  );
}