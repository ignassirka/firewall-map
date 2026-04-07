import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import clsx from "clsx";
import L from "leaflet";
import { motion, AnimatePresence } from "motion/react";
import { AlertTriangle, ChevronLeft, Ban } from "lucide-react";
import { getCountryCoords } from "./WorldMap";

// ─── Colors — exact Privacy Map palette ────────────────────────────────────────

const RED = "#F7607B";
const AMBER = "#FFAD33";

// ─── Font Styles — matching ISPRegulationsPanel / CountryBrowser ───────────────

const fontSemibold: React.CSSProperties = {
  fontVariationSettings: "'opsz' 10.5",
  fontFeatureSettings: "'fina', 'init'",
};
const fontRegular: React.CSSProperties = {
  fontVariationSettings: "'opsz' 10.5",
  fontFeatureSettings: "'rclt' 0",
};

// ─── Types ─────────────────────────────────────────────────────────────────────

type AppStatus = "flagged" | "suspicious" | "review" | "routine" | "safe";
type BlockType = "background" | "permanent";

interface AppData {
  id: string;
  name: string;
  iconUrl: string;
  iconFallbackColor: string;
  status: AppStatus;
  connections: number;
  destination: string;
  country: string;
  dataSent: string;
  arcTarget: string;
  description: string;
  jurisdictionWarning?: string;
}

// ─── Mock Data ─────────────────────────────────────────────────────────────────

const APPS: AppData[] = [
  {
    id: "temu", name: "Temu",
    iconUrl: "https://www.google.com/s2/favicons?domain=temu.com&sz=128",
    iconFallbackColor: "#F97316",
    status: "flagged",
    connections: 16, destination: "Beijing, China", country: "China",
    dataSent: "290 KB", arcTarget: "beijing",
    description: "Sending device identifiers and browsing patterns to servers in China with no data protection agreement.",
    jurisdictionWarning: "China has no data protection agreement with the EU. Data sent here falls outside GDPR jurisdiction.",
  },
  {
    id: "weather", name: "Weather",
    iconUrl: "https://www.google.com/s2/favicons?domain=weather.com&sz=128",
    iconFallbackColor: "#60A5FA",
    status: "review",
    connections: 42, destination: "New York, US", country: "US",
    dataSent: "180 KB", arcTarget: "new-york",
    description: "Unusually high data volume to US advertising networks. Location and device info may be shared with ad brokers.",
    jurisdictionWarning: "Data shared with US ad networks under less stringent privacy protections than GDPR.",
  },
  {
    id: "flashlight", name: "Flashlight",
    iconUrl: "https://www.google.com/s2/favicons?domain=flashlight-app.com&sz=128",
    iconFallbackColor: "#FBBF24",
    status: "suspicious",
    connections: 8, destination: "Singapore", country: "Singapore",
    dataSent: "120 KB", arcTarget: "singapore",
    description: "A flashlight app has no legitimate reason to transmit data overseas. Sending identifiers to a known data broker.",
    jurisdictionWarning: "Data broker in Singapore — no legitimate reason for a utility app to transmit overseas.",
  },
  {
    id: "instagram", name: "Instagram",
    iconUrl: "https://www.google.com/s2/favicons?domain=instagram.com&sz=128",
    iconFallbackColor: "#E4405F",
    status: "routine",
    connections: 6, destination: "San Francisco, US", country: "US",
    dataSent: "45 KB", arcTarget: "san-francisco",
    description: "Standard connections to Meta servers for normal app functionality.",
  },
  {
    id: "signal", name: "Signal",
    iconUrl: "https://www.google.com/s2/favicons?domain=signal.org&sz=128",
    iconFallbackColor: "#3A76F0",
    status: "safe",
    connections: 3, destination: "Dublin, EU", country: "EU",
    dataSent: "12 KB", arcTarget: "dublin",
    description: "Encrypted messaging with minimal data transmission to EU-based servers under GDPR.",
  },
  {
    id: "protonmail", name: "ProtonMail",
    iconUrl: "https://www.google.com/s2/favicons?domain=proton.me&sz=128",
    iconFallbackColor: "#6D4AFF",
    status: "safe",
    connections: 4, destination: "Zurich, CH", country: "Switzerland",
    dataSent: "18 KB", arcTarget: "zurich",
    description: "End-to-end encrypted email routed through Swiss jurisdiction with strong privacy protections.",
  },
  {
    id: "firefox", name: "Firefox",
    iconUrl: "https://www.google.com/s2/favicons?domain=firefox.com&sz=128",
    iconFallbackColor: "#FF7139",
    status: "routine",
    connections: 12, destination: "Dublin, EU", country: "US/EU",
    dataSent: "65 KB", arcTarget: "dublin",
    description: "Standard browser telemetry and update checks through EU-based servers.",
  },
  {
    id: "spotify", name: "Spotify",
    iconUrl: "https://www.google.com/s2/favicons?domain=spotify.com&sz=128",
    iconFallbackColor: "#1DB954",
    status: "routine",
    connections: 8, destination: "Stockholm, SE", country: "Sweden",
    dataSent: "95 KB", arcTarget: "stockholm",
    description: "Music streaming data and listening analytics to Swedish-based servers.",
  },
  {
    id: "whatsapp", name: "WhatsApp",
    iconUrl: "https://www.google.com/s2/favicons?domain=whatsapp.com&sz=128",
    iconFallbackColor: "#25D366",
    status: "routine",
    connections: 5, destination: "San Francisco, US", country: "US",
    dataSent: "30 KB", arcTarget: "san-francisco",
    description: "Standard messaging connectivity to Meta infrastructure in the US.",
  },
  {
    id: "googlemaps", name: "Google Maps",
    iconUrl: "https://www.google.com/s2/favicons?domain=maps.google.com&sz=128",
    iconFallbackColor: "#4285F4",
    status: "routine",
    connections: 7, destination: "San Francisco, US", country: "US",
    dataSent: "55 KB", arcTarget: "san-francisco",
    description: "Location services and map tile requests to Google infrastructure.",
  },
  {
    id: "youtube", name: "YouTube",
    iconUrl: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
    iconFallbackColor: "#FF0000",
    status: "routine",
    connections: 9, destination: "San Francisco, US", country: "US",
    dataSent: "210 KB", arcTarget: "san-francisco",
    description: "Video streaming and recommendation data to Google servers.",
  },
  {
    id: "tiktok", name: "TikTok",
    iconUrl: "https://www.google.com/s2/favicons?domain=tiktok.com&sz=128",
    iconFallbackColor: "#010101",
    status: "review",
    connections: 14, destination: "Singapore / US", country: "SG/US",
    dataSent: "175 KB", arcTarget: "singapore",
    description: "Data routed through multiple jurisdictions. Device fingerprinting and usage patterns shared.",
    jurisdictionWarning: "Data routed via Singapore and US — subject to multiple jurisdictions with varying privacy standards.",
  },
];

const APPS_BY_ID = Object.fromEntries(APPS.map(a => [a.id, a])) as Record<string, AppData>;

// ─── Arc Destination Coordinates (lat/lng) ─────────────────────────────────────

const ARC_DESTINATIONS: Record<string, { lat: number; lng: number; label: string }> = {
  "beijing":       { lat: 39.9,  lng: 116.4,  label: "Beijing" },
  "new-york":      { lat: 40.7,  lng: -74.0,  label: "New York" },
  "san-francisco": { lat: 37.8,  lng: -122.4, label: "San Francisco" },
  "singapore":     { lat: 1.35,  lng: 103.8,  label: "Singapore" },
  "stockholm":     { lat: 59.3,  lng: 18.1,   label: "Stockholm" },
  "zurich":        { lat: 47.4,  lng: 8.5,    label: "Zurich" },
  "dublin":        { lat: 53.3,  lng: -6.3,   label: "Dublin" },
};


// ─── Live data counter helpers ─────────────────────────────────────────────────

function parseKB(s: string): number {
  const n = parseFloat(s);
  if (s.includes("MB")) return n * 1024;
  return n;
}

function formatKB(kb: number): string {
  if (kb >= 1024) return `${(kb / 1024).toFixed(2)} MB`;
  return `${kb.toFixed(1)} KB`;
}

// KB increment per tick (~800 ms) per app — proportional to connections, with jitter
function tickIncrement(connections: number): number {
  const base = connections * 0.18;
  const jitter = (Math.random() - 0.3) * base * 0.5;
  return Math.max(0.05, base + jitter);
}

const INITIAL_KB: Record<string, number> = Object.fromEntries(
  APPS.map(a => [a.id, parseKB(a.dataSent)])
);

// ─── Helpers ───────────────────────────────────────────────────────────────────

function createCurvedPath(
  from: { lat: number; lng: number },
  to: { lat: number; lng: number },
  n = 80,
  spread = 0,
): L.LatLng[] {
  const dist = Math.sqrt((from.lat - to.lat) ** 2 + (from.lng - to.lng) ** 2);
  const height = Math.min(28, Math.max(8, dist * 0.28)) + spread;
  const lateralShift = spread * 0.4;

  const cp1Lat = from.lat + (to.lat - from.lat) * 0.3 + height;
  const cp1Lng = from.lng + (to.lng - from.lng) * 0.3 + lateralShift * 0.6;
  const cp2Lat = from.lat + (to.lat - from.lat) * 0.7 + height;
  const cp2Lng = from.lng + (to.lng - from.lng) * 0.7 + lateralShift * 0.6;

  const pts: L.LatLng[] = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const u = 1 - t;
    const lat = u * u * u * from.lat + 3 * u * u * t * cp1Lat + 3 * u * t * t * cp2Lat + t * t * t * to.lat;
    const lng = u * u * u * from.lng + 3 * u * u * t * cp1Lng + 3 * u * t * t * cp2Lng + t * t * t * to.lng;
    pts.push(L.latLng(lat, lng));
  }
  return pts;
}

function createArcTooltipHTML(app: AppData): string {
  const iconHtml = app.iconUrl
    ? `<img src="${app.iconUrl}" alt="" width="24" height="24"
         style="border-radius:4px;object-fit:cover;flex-shrink:0"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
       /><div style="display:none;width:24px;height:24px;border-radius:4px;background:${app.iconFallbackColor};flex-shrink:0;align-items:center;justify-content:center;font-size:11px;font-weight:600;color:white">${app.name[0]}</div>`
    : `<div style="display:flex;width:24px;height:24px;border-radius:4px;background:${app.iconFallbackColor};flex-shrink:0;align-items:center;justify-content:center;font-size:11px;font-weight:600;color:white">${app.name[0]}</div>`;

  return (
    `<div style="font-family:'Segoe UI Variable','Segoe UI',Inter,sans-serif;min-width:160px">` +
    `<div style="display:flex;align-items:center;gap:8px;margin-bottom:7px">${iconHtml}` +
    `<span style="font-weight:600;font-size:13px;color:white">${app.name}</span></div>` +
    `<div style="font-size:11px;color:rgba(255,255,255,0.55);margin-bottom:2px">→ ${app.destination}</div>` +
    `<div style="font-size:11px;color:rgba(255,255,255,0.4)">${app.connections} connections · ${app.dataSent}</div>` +
    `</div>`
  );
}

const ARC_STYLES_ID = "fw-arc-styles";
const ARC_CSS = `
@keyframes arcFlow { to { stroke-dashoffset: -16; } }
.arc-flow { animation: arcFlow var(--arc-speed, 1s) linear infinite; }
.leaflet-tooltip.arc-tooltip {
  background: rgba(22,20,28,0.92) !important;
  border: 1px solid rgba(255,255,255,0.1) !important;
  border-radius: 8px !important;
  padding: 8px 10px !important;
  box-shadow: 0 8px 24px rgba(0,0,0,0.5) !important;
  backdrop-filter: blur(16px);
  color: white !important;
}
.leaflet-tooltip.arc-tooltip::before { display: none !important; }
`;

// ─── App Icon ──────────────────────────────────────────────────────────────────

function AppIcon({ src, name, fallbackColor, size = 24 }: {
  src: string;
  name: string;
  fallbackColor: string;
  size?: number;
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className="shrink-0 rounded-[4px] flex items-center justify-center"
        style={{ width: size, height: size, backgroundColor: fallbackColor }}
      >
        <span className="text-white text-[11px] leading-none" style={fontSemibold}>
          {name[0]}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      className="shrink-0 rounded-[4px] object-cover"
      style={{ width: size, height: size }}
      onError={() => setFailed(true)}
    />
  );
}

// ─── App List Row ──────────────────────────────────────────────────────────────

function AppRow({
  app,
  isBlocked,
  isSelected,
  liveKB,
  onClick,
}: {
  app: AppData;
  isBlocked: boolean;
  isSelected: boolean;
  liveKB: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-full flex items-center gap-[10px] px-[12px] py-[10px] transition-colors text-left cursor-pointer",
        isSelected ? "bg-[rgba(255,255,255,0.08)]" : "hover:bg-[rgba(255,255,255,0.04)]",
      )}
    >
      <AppIcon src={app.iconUrl} name={app.name} fallbackColor={app.iconFallbackColor} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-[6px]">
          <span className="text-[13px] text-white truncate leading-[18px]" style={fontSemibold}>
            {app.name}
          </span>
          {isBlocked ? (
            <span
              className="text-[10px] px-[6px] py-[1px] rounded-[3px] shrink-0 leading-[14px]"
              style={{ backgroundColor: `${RED}20`, color: RED, ...fontSemibold }}
            >
              Blocked
            </span>
          ) : (app.status === "flagged" || app.status === "suspicious") ? (
            <span
              className="text-[10px] px-[6px] py-[1px] rounded-[3px] shrink-0 leading-[14px]"
              style={{ backgroundColor: `${RED}18`, color: RED, ...fontSemibold }}
            >
              Suspicious
            </span>
          ) : app.status === "review" ? (
            <span
              className="text-[10px] px-[6px] py-[1px] rounded-[3px] shrink-0 leading-[14px]"
              style={{ backgroundColor: `${AMBER}18`, color: AMBER, ...fontSemibold }}
            >
              Review
            </span>
          ) : null}
        </div>
        <span className="text-[11px] truncate leading-[15px] block" style={{ color: "rgba(255,255,255,0.45)", ...fontRegular }}>
          {app.connections} connections · {app.country}
        </span>
      </div>
      <span
        className="text-[11px] shrink-0 tabular-nums"
        style={{ color: isBlocked ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.55)", ...fontSemibold }}
      >
        {formatKB(liveKB)}
      </span>
    </button>
  );
}

// ─── Detail Overlay Stat Card ──────────────────────────────────────────────────

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[8px] p-[8px] flex-1" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
      <p className="text-white text-[13px] leading-[18px]" style={fontSemibold}>{value}</p>
      <p className="text-[10px] mt-[2px] leading-[14px]" style={{ color: "rgba(255,255,255,0.5)", ...fontRegular }}>{label}</p>
    </div>
  );
}

// ─── App Detail View (in-panel, mirrors CountryDetailView pattern) ─────────────

function AppDetailView({
  app,
  isBlocked,
  onBlock,
  onBack,
}: {
  app: AppData;
  isBlocked: boolean;
  onBlock: (t: BlockType) => void;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-col w-full h-full min-h-0">
      {/* ── Header with Back button ── */}
      <div className="shrink-0 px-[14px] pt-[14px] pb-[12px]">
        <button
          onClick={onBack}
          className="flex items-center gap-[4px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors mb-[14px] cursor-pointer"
        >
          <ChevronLeft size={16} className="shrink-0" />
          <span style={fontSemibold} className="text-[13px] leading-[18px]">Back</span>
        </button>

        <div className="flex items-center gap-[10px]">
          <AppIcon src={app.iconUrl} name={app.name} fallbackColor={app.iconFallbackColor} size={32} />
          <p className="text-white text-[15px] leading-[20px]" style={fontSemibold}>{app.name}</p>
        </div>
      </div>

      {/* ── Scrollable content ── */}
      <div className="flex-1 min-h-0 overflow-y-auto px-[14px] pb-[14px]">
        <div className="flex flex-col gap-[16px] pt-[2px]">
          <div className="flex gap-[8px]">
            <MiniStat label="Connections" value={String(app.connections)} />
            <MiniStat label="Data Sent" value={app.dataSent} />
            <MiniStat label="Destination" value={app.country} />
          </div>

          <div className="flex flex-col gap-[6px]">
            <div className="flex gap-[8px] items-start py-[6px] px-[10px] rounded-[8px] bg-[rgba(255,255,255,0.04)]">
              <div className="w-[4px] h-[4px] rounded-full bg-[rgba(255,255,255,0.3)] shrink-0 mt-[7px]" />
              <p style={fontRegular} className="text-[rgba(255,255,255,0.8)] text-[13px] leading-[18px]">
                <span style={fontSemibold} className="text-white">Destination: </span>{app.destination}
              </p>
            </div>
            <div className="flex gap-[8px] items-start py-[6px] px-[10px] rounded-[8px] bg-[rgba(255,255,255,0.04)]">
              <div className="w-[4px] h-[4px] rounded-full bg-[rgba(255,255,255,0.3)] shrink-0 mt-[7px]" />
              <p style={fontRegular} className="text-[rgba(255,255,255,0.8)] text-[13px] leading-[18px]">
                {app.description}
              </p>
            </div>
          </div>

          {app.jurisdictionWarning && (
            <div className="flex items-start gap-[8px] p-[10px] rounded-[8px]" style={{ backgroundColor: `${AMBER}0D` }}>
              <AlertTriangle size={14} color={AMBER} className="shrink-0 mt-[2px]" />
              <span className="text-[11px] leading-[16px]" style={{ color: "rgba(255,255,255,0.6)", ...fontRegular }}>
                {app.jurisdictionWarning}
              </span>
            </div>
          )}

          <div className="h-px bg-[rgba(255,255,255,0.06)]" />

          {isBlocked ? (
            <div className="flex items-center gap-[6px] justify-center py-[8px]" style={{ color: RED }}>
              <Ban size={14} />
              <span className="text-[13px]" style={fontSemibold}>This app is blocked</span>
            </div>
          ) : (
            <div className="flex flex-col gap-[8px]">
              <button
                onClick={() => onBlock("permanent")}
                className="w-full py-[10px] rounded-[8px] text-[13px] text-white transition-colors cursor-pointer hover:brightness-110"
                style={{ backgroundColor: RED, ...fontSemibold }}
              >
                Block Permanently
              </button>
              <button
                onClick={() => onBlock("background")}
                className="w-full py-[10px] rounded-[8px] text-[13px] transition-colors cursor-pointer hover:bg-[rgba(255,255,255,0.1)]"
                style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)", ...fontSemibold }}
              >
                Block When in Background
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function AppFirewall({
  map,
  physicalCountry = "France",
  panelWidth = 340,
  vpnStatus = "unprotected",
  connectedCountry = null,
}: {
  map: any;
  physicalCountry?: string;
  panelWidth?: number;
  vpnStatus?: string;
  connectedCountry?: string | null;
}) {
  const [blockedApps, setBlockedApps] = useState<Record<string, BlockType>>({});
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [liveKB, setLiveKB] = useState<Record<string, number>>(INITIAL_KB);
  const [sortMode, setSortMode] = useState<"alpha" | "data">("alpha");

  const sortedApps = useMemo(() => {
    const list = [...APPS];
    if (sortMode === "alpha") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      list.sort((a, b) => (liveKB[b.id] ?? 0) - (liveKB[a.id] ?? 0));
    }
    return list;
  }, [sortMode, liveKB]);

  // ── Live data counters ───────────────────────────────────────────────────────
  useEffect(() => {
    const id = setInterval(() => {
      setLiveKB(prev => {
        const next = { ...prev };
        APPS.forEach(app => {
          if (!blockedApps[app.id]) {
            next[app.id] = (next[app.id] ?? INITIAL_KB[app.id]) + tickIncrement(app.connections);
          }
        });
        return next;
      });
    }, 800);
    return () => clearInterval(id);
  }, [blockedApps]);  // eslint-disable-line react-hooks/exhaustive-deps

  const selectedAppData = selectedApp ? APPS_BY_ID[selectedApp] ?? null : null;
  const arcGroupRef = useRef<L.LayerGroup | null>(null);

  // Inject arc CSS once, clean up on unmount
  useEffect(() => {
    let el = document.getElementById(ARC_STYLES_ID) as HTMLStyleElement | null;
    if (!el) {
      el = document.createElement("style");
      el.id = ARC_STYLES_ID;
      document.head.appendChild(el);
    }
    el.textContent = ARC_CSS;
    return () => { document.getElementById(ARC_STYLES_ID)?.remove(); };
  }, []);

  // ── Leaflet arc layers — one per app ────────────────────────────────────────
  useEffect(() => {
    if (!map) return;

    if (arcGroupRef.current) arcGroupRef.current.remove();
    const layerGroup = L.layerGroup().addTo(map);
    arcGroupRef.current = layerGroup;

    const isVpnActive = (vpnStatus === "protected" || vpnStatus === "connecting") && !!connectedCountry;
    const originCountry = isVpnActive ? connectedCountry! : physicalCountry;
    const device = getCountryCoords(originCountry);

    const activeApps = APPS.filter(a => !blockedApps[a.id]);
    const destGroups: Record<string, AppData[]> = {};
    activeApps.forEach(a => { (destGroups[a.arcTarget] ??= []).push(a); });

    const renderedDests = new Set<string>();

    activeApps.forEach(app => {
      const dest = ARC_DESTINATIONS[app.arcTarget];
      if (!dest) return;

      const siblings = destGroups[app.arcTarget];
      const idx = siblings.indexOf(app);
      const total = siblings.length;
      const spread = total > 1 ? -3 + (idx / (total - 1)) * 6 : 0;

      const pts = createCurvedPath(device, dest, 80, spread);
      const isHL = selectedApp === app.id;
      const baseOpacity = selectedApp ? (isHL ? 0.55 : 0.15) : 0.3;
      const baseWeight = isHL ? 2.5 : 1.8;

      // Soft glow layer
      L.polyline(pts, {
        color: "#ffffff", weight: isHL ? 7 : 5,
        opacity: isHL ? 0.08 : 0.03,
        lineCap: "round", interactive: false,
      }).addTo(layerGroup);

      // Animated dash arc
      const arc = L.polyline(pts, {
        color: "#ffffff",
        weight: baseWeight,
        opacity: baseOpacity,
        dashArray: "4 12",
        lineCap: "round",
        interactive: false,
      }).addTo(layerGroup);

      requestAnimationFrame(() => {
        const pathEl = (arc as any)._path as SVGPathElement | undefined;
        if (pathEl) {
          pathEl.classList.add("arc-flow");
          pathEl.style.setProperty("--arc-speed", `${0.7 + idx * 0.12}s`);
        }
      });

      // Wide invisible hit area for hover / click
      const hitArea = L.polyline(pts, {
        color: "transparent", weight: 18, opacity: 0, interactive: true,
      }).addTo(layerGroup);

      hitArea.bindTooltip(createArcTooltipHTML(app), {
        sticky: true, className: "arc-tooltip", opacity: 1,
        direction: "top", offset: [0, -12],
      });

      hitArea.on("click", () => { setSelectedApp(app.id); });
      hitArea.on("mouseover", () => { arc.setStyle({ opacity: 0.65, weight: 2.8 }); });
      hitArea.on("mouseout", () => { arc.setStyle({ opacity: baseOpacity, weight: baseWeight }); });

      // Destination endpoint dot (one per unique destination)
      if (!renderedDests.has(app.arcTarget)) {
        renderedDests.add(app.arcTarget);
        const anyHL = selectedApp && siblings.some(s => s.id === selectedApp);
        L.circleMarker([dest.lat, dest.lng], {
          radius: anyHL ? 4 : 3,
          fillColor: "#ffffff", fillOpacity: anyHL ? 0.7 : 0.45,
          color: "#ffffff", weight: 1, opacity: 0.25,
          interactive: false,
        }).addTo(layerGroup);
      }
    });

    return () => { layerGroup.remove(); arcGroupRef.current = null; };
  }, [map, physicalCountry, connectedCountry, vpnStatus, blockedApps, selectedApp]);

  // ── Handlers ────────────────────────────────────────────────────────────────

  const handleBlock = useCallback((appId: string, type: BlockType) => {
    setBlockedApps(prev => ({ ...prev, [appId]: type }));
    setSelectedApp(null);
  }, []);

  return (
    <div
      className="absolute top-[8px] left-[8px] bottom-[8px] z-[1000]"
      style={{ width: panelWidth }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-[8px] backdrop-blur-[16px] bg-[rgba(22,20,28,0.75)] border border-[rgba(255,255,255,0.1)] flex flex-col">
        {/* ── Header — always visible ────────────────────────────────────── */}
        <div className="shrink-0 px-[12px] pt-[14px] pb-[10px]">
          <span className="text-white text-[18px] leading-[24px]" style={fontSemibold}>
            App Firewall
          </span>
          <p className="text-[13px] leading-[18px] mt-[4px] mb-[10px]" style={{ color: "rgba(255,255,255,0.5)", ...fontRegular }}>
            {APPS.length} apps · Real-time network monitoring
          </p>

          <div className="flex gap-[2px] p-[3px] rounded-[8px] bg-[rgba(255,255,255,0.06)]">
            <button
              onClick={() => setSortMode("alpha")}
              className={clsx(
                "flex-1 flex items-center justify-center py-[6px] rounded-[6px] transition-all duration-200 cursor-pointer",
                sortMode === "alpha"
                  ? "bg-[rgba(255,255,255,0.1)] shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                  : "hover:bg-[rgba(255,255,255,0.04)]",
              )}
            >
              <span
                style={fontSemibold}
                className={clsx(
                  "text-[12px] leading-[16px] transition-colors duration-200",
                  sortMode === "alpha" ? "text-white" : "text-[rgba(255,255,255,0.5)]",
                )}
              >
                A – Z
              </span>
            </button>
            <button
              onClick={() => setSortMode("data")}
              className={clsx(
                "flex-1 flex items-center justify-center py-[6px] rounded-[6px] transition-all duration-200 cursor-pointer",
                sortMode === "data"
                  ? "bg-[rgba(255,255,255,0.1)] shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                  : "hover:bg-[rgba(255,255,255,0.04)]",
              )}
            >
              <span
                style={fontSemibold}
                className={clsx(
                  "text-[12px] leading-[16px] transition-colors duration-200",
                  sortMode === "data" ? "text-white" : "text-[rgba(255,255,255,0.5)]",
                )}
              >
                Most data
              </span>
            </button>
          </div>
        </div>

        {/* ── Content — app list OR app detail (animated transition) ────── */}
        <div className="flex-1 min-h-0 relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            {selectedAppData ? (
              <motion.div
                key={`detail-${selectedAppData.id}`}
                className="absolute inset-0"
                initial={{ x: "60%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "60%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 380, damping: 34, mass: 0.85 }}
              >
                <AppDetailView
                  app={selectedAppData}
                  isBlocked={!!blockedApps[selectedAppData.id]}
                  onBlock={(t) => handleBlock(selectedAppData.id, t)}
                  onBack={() => setSelectedApp(null)}
                />
              </motion.div>
            ) : (
              <motion.div
                key="app-list"
                className="absolute inset-0 overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                {sortedApps.map(app => (
                  <motion.div
                    key={app.id}
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.8 }}
                  >
                    <AppRow
                      app={app}
                      isBlocked={!!blockedApps[app.id]}
                      isSelected={false}
                      liveKB={liveKB[app.id] ?? INITIAL_KB[app.id]}
                      onClick={() => setSelectedApp(app.id)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
