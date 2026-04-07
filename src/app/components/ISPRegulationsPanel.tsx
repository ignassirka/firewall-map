import React, { useState, useEffect, useRef, useMemo } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "motion/react";
import { getFlagForCountry } from "./flagComponents";
import { CountryDetailView } from "./CountryDetailView";
import type { MapLayerOption } from "../../imports/RightVpnFeatures";
import {
  layerMeta,
  getCountryTier,
  getCountriesByTier,
  getRecommendationReason,
  getPhysicalCountryAwareRecommendations,
  type LayerTier,
} from "./layerData";
import {
  Shield, ShieldAlert, EyeOff, Globe, ChevronRight,
  ChevronDown, Lock, Wifi, Server, AlertTriangle, Check,
  Info, Share2, X
} from "lucide-react";

// Colored icon imports
import ProtonPrivacyScore from "../../imports/ProtonPrivacyScore";
import SurveillanceAlliances from "../../imports/SurveillanceAlliances";
import IspRegulations from "../../imports/IspRegulations";
import Identity from "../../imports/Identity";
import P2P from "../../imports/P2P";
import { CountryBrowser, CountryRow } from "./CountryBrowser";
import searchSvgPaths from "../../imports/svg-m0k6r02h9x";

// ─── Layer Icon (colored Figma components) ────────────────────────────────────

function LayerIcon({ layer }: { layer: Exclude<MapLayerOption, "none"> }) {
  const map: Record<string, React.ReactNode> = {
    "privacy-score": <ProtonPrivacyScore />,
    "surveillance": <SurveillanceAlliances />,
    "isp-regulations": <IspRegulations />,
    "identity": <Identity />,
    "p2p": <P2P />,
  };
  return <div className="shrink-0 size-[28px] relative">{map[layer]}</div>;
}

// ─── Shared Styles ────────────────────────────────────────────────────────────

const fontSemibold: React.CSSProperties = {
  fontVariationSettings: "'opsz' 10.5",
  fontFeatureSettings: "'fina', 'init'",
};

const fontRegular: React.CSSProperties = {
  fontVariationSettings: "'opsz' 10.5",
  fontFeatureSettings: "'rclt' 0",
};

// ─── Risk Meter — 3 bars, one per tier level ──────────────────────────────────

function RiskMeter({ tier, layer }: { tier: LayerTier; layer: Exclude<MapLayerOption, "none"> }) {
  // 3 segments total; filled count represents position: low=1, medium=2, high=3
  const filled = tier === "high" ? 3 : tier === "medium" ? 2 : 1;
  const color = layerMeta[layer].tiers[tier].color;

  return (
    <div className="flex gap-[4px] items-center">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="h-[5px] flex-1 rounded-full transition-all duration-300"
          style={{
            backgroundColor: i < filled ? color : "rgba(255,255,255,0.1)",
          }}
        />
      ))}
    </div>
  );
}

// ─── Generic spotlight descriptions per layer × tier ──────────────────────────

const spotlightDescription: Record<Exclude<MapLayerOption, "none">, Record<LayerTier, string>> = {
  "isp-regulations": {
    high: "Your ISP operates under strict legal obligations to protect browsing data. Meaningful enforcement and oversight mechanisms are in place.",
    medium: "Some rules apply to ISPs, but enforcement is inconsistent. Browsing data may be logged or shared under certain conditions.",
    low: "Local ISPs may have broad ability to log and share browsing data. Oversight can be limited, with few meaningful legal constraints in place.",
  },
  "privacy-score": {
    high: "Strong privacy laws with active enforcement protect your personal data. Government access is subject to judicial oversight and transparency requirements.",
    medium: "Some privacy protections exist, but gaps in enforcement or legislation leave room for data collection without full accountability.",
    low: "Privacy protections are weak or inconsistently enforced. Personal data may be collected, retained, or shared with limited legal recourse.",
  },
  surveillance: {
    high: "This country is not a member of any major intelligence-sharing alliance. Cross-border data sharing through formal surveillance agreements is not a primary concern.",
    medium: "This country participates in the 14 Eyes intelligence-sharing arrangement. Data may be accessible to agencies in member states under certain conditions.",
    low: "This country is a core member of the 5 or 9 Eyes alliance. Deep cross-border intelligence sharing means data gathered here may reach partner agencies abroad.",
  },
  identity: {
    high: "Minimal identity verification is required to access online services. You can generally browse and register for platforms without disclosing personal identity.",
    medium: "Some online services or platforms require identity verification. Requirements vary by service type and may include phone or ID checks.",
    low: "Strict identity verification is enforced for online activity. Real-name registration may be required for SIM cards, social platforms, or internet access.",
  },
  p2p: {
    high: "P2P file sharing is generally legal and tolerated. Copyright enforcement tends to be limited, and ISPs are not required to monitor or restrict peer-to-peer traffic.",
    medium: "P2P activity falls in a legal grey area. Some copyright enforcement exists, and ISPs may throttle or monitor torrent traffic under certain conditions.",
    low: "P2P and torrenting are actively restricted or illegal. ISPs may be required to block torrent sites, and significant penalties can apply for copyright infringement.",
  },
};

// ─── VPN benefit text per layer (static paragraph shown when VPN is active) ───

const vpnBenefitText: Record<Exclude<MapLayerOption, "none">, string> = {
  "isp-regulations":
    "With Proton VPN on, your ISP can only see an encrypted connection — not which sites you visit, what you download, or what you search for. This applies regardless of local ISP regulations.",
  "privacy-score":
    "Your internet traffic is encrypted and routed through a privacy-friendly jurisdiction. This adds a strong protection layer on top of your physical location's privacy framework.",
  surveillance:
    "VPN encrypts your traffic and routes it through a server outside your physical region. This limits the data available to local intelligence-sharing agreements and reduces your surveillance footprint.",
  identity:
    "With VPN on, services are less likely to apply location-specific verification requirements. Your apparent location changes, which can reduce exposure to regional ID or age-check mandates.",
  p2p:
    "VPN encrypts all traffic, including P2P. Your ISP can no longer identify, throttle, or report torrent activity, and your real IP is hidden from peers and copyright enforcement.",
};

// ─── Country Spotlight Card ───────────────────────────────────────────────────

export function CountrySpotlight({
  onExplore,
  layer,
  country = "Belarus",
  vpnCountry,
  vpnStatus = "unprotected",
  showExploreButton = true,
}: {
  onExplore?: () => void;
  layer: Exclude<MapLayerOption, "none">;
  country?: string;
  vpnCountry?: string | null;
  vpnStatus?: "unprotected" | "connecting" | "protected";
  showExploreButton?: boolean;
}) {
  const isVpn = vpnStatus === "protected" && !!vpnCountry;
  const displayCountry = isVpn ? vpnCountry : country;

  const meta = layerMeta[layer];
  const tier = getCountryTier(layer, displayCountry);
  const tierInfo = meta.tiers[tier];

  const vpnColor = "#2CFFCC";
  const accentColor = isVpn ? vpnColor : tierInfo.color;

  return (
    <div className="rounded-[12px] relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${accentColor}1f, ${accentColor}08)`,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute border border-solid inset-0 pointer-events-none rounded-[12px]"
        style={{ borderColor: `${accentColor}40` }}
      />

      <div className="relative p-[14px] flex flex-col gap-[14px]">
        {/* Header: flag + name, plus "VPN active" badge only when connected */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            {getFlagForCountry(displayCountry, "lg")}
            <p style={fontSemibold} className="text-white text-[16px] leading-[22px]">
              {displayCountry}
            </p>
          </div>
          {isVpn && (
            <div
              className="flex items-center gap-[6px] px-[8px] py-[4px] rounded-[6px]"
              style={{ backgroundColor: `${vpnColor}26` }}
            >
              <Shield size={13} color={vpnColor} />
              <span style={{ ...fontSemibold, color: vpnColor }} className="text-[13px] leading-[18px]">
                VPN active
              </span>
            </div>
          )}
        </div>

        {/* Evaluation block — tier label + meter + description paragraph */}
        {isVpn ? (
          <p style={fontRegular} className="text-[rgba(255,255,255,0.75)] text-[13px] leading-[19px]">
            {vpnBenefitText[layer]}
          </p>
        ) : (
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-col gap-[6px]">
              <span style={{ ...fontSemibold, color: accentColor, fontWeight: 600 }} className="text-[14px] leading-[20px]">
                {tierInfo.label}
              </span>
              <RiskMeter tier={tier} layer={layer} />
            </div>
            <p style={fontRegular} className="text-[rgba(255,255,255,0.65)] text-[13px] leading-[19px]">
              {spotlightDescription[layer][tier]}
            </p>
          </div>
        )}

        {/* Action — hidden when used inside the detail page itself */}
        {showExploreButton && (
          <button
            onClick={onExplore}
            className="flex items-center justify-center gap-[6px] w-full py-[8px] rounded-[8px] bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)] transition-colors cursor-pointer"
          >
            <span style={fontSemibold} className="text-white text-[13px] leading-[18px]">
              See full details
            </span>
            <ChevronRight size={14} className="text-[rgba(255,255,255,0.7)]" />
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Recommended Actions ──────────────────────────────────────────────────────

interface ActionItem {
  id: string;
  icon: typeof Shield;
  title: string;
  description: string;
  enabled: boolean;
  critical: boolean;
}

function getLayerActions(layer: Exclude<MapLayerOption, "none">): ActionItem[] {
  switch (layer) {
    case "isp-regulations":
      return [
        { id: "kill-switch", icon: ShieldAlert, title: "Enable kill switch", description: "Block internet if VPN disconnects", enabled: false, critical: true },
        { id: "dns-leak", icon: Lock, title: "DNS leak protection", description: "Prevent DNS queries from leaking", enabled: true, critical: true },
        { id: "auto-connect", icon: Wifi, title: "Auto-connect on startup", description: "Connect VPN automatically when you go online", enabled: false, critical: true },
        { id: "protocol", icon: Server, title: "Use obfuscated protocol", description: "Hide VPN traffic from DPI detection", enabled: false, critical: true },
      ];
    case "privacy-score":
      return [
        { id: "no-logs", icon: EyeOff, title: "No-logs VPN policy", description: "Ensure your VPN keeps zero activity logs", enabled: true, critical: true },
        { id: "dns-leak", icon: Lock, title: "DNS leak protection", description: "Prevent DNS queries from leaking", enabled: true, critical: true },
        { id: "tracker-block", icon: Shield, title: "Tracker & ad blocker", description: "Block third-party tracking scripts", enabled: false, critical: true },
        { id: "webrtc", icon: Globe, title: "WebRTC leak protection", description: "Prevent real IP exposure via WebRTC", enabled: false, critical: true },
      ];
    case "surveillance":
      return [
        { id: "protocol", icon: Server, title: "Use obfuscated protocol", description: "Hide VPN traffic from DPI detection", enabled: false, critical: true },
        { id: "multi-hop", icon: Share2, title: "Multi-hop routing", description: "Route through 2+ servers for extra anonymity", enabled: false, critical: true },
        { id: "kill-switch", icon: ShieldAlert, title: "Enable kill switch", description: "Block internet if VPN disconnects", enabled: false, critical: true },
        { id: "no-logs", icon: EyeOff, title: "No-logs VPN policy", description: "Ensure your VPN keeps zero activity logs", enabled: true, critical: true },
      ];
    case "identity":
      return [
        { id: "anon-email", icon: EyeOff, title: "Use anonymous email", description: "Sign up with a privacy-focused email alias", enabled: false, critical: true },
        { id: "no-phone", icon: Wifi, title: "Avoid phone verification", description: "Use services that don't require phone number", enabled: false, critical: true },
        { id: "tor-browser", icon: Globe, title: "Use Tor for registration", description: "Register accounts through Tor browser", enabled: false, critical: false },
        { id: "dns-leak", icon: Lock, title: "DNS leak protection", description: "Prevent DNS queries from leaking", enabled: true, critical: true },
      ];
    case "p2p":
      return [
        { id: "kill-switch", icon: ShieldAlert, title: "Enable kill switch", description: "Block internet if VPN disconnects", enabled: false, critical: true },
        { id: "port-forward", icon: Server, title: "Enable port forwarding", description: "Improve P2P speeds with open ports", enabled: false, critical: false },
        { id: "split-tunnel", icon: Share2, title: "Split tunneling for P2P", description: "Route only torrent traffic through VPN", enabled: false, critical: true },
        { id: "no-logs", icon: EyeOff, title: "No-logs VPN policy", description: "Ensure your VPN keeps zero activity logs", enabled: true, critical: true },
      ];
  }
}

function RecommendedActions({ layer }: { layer: Exclude<MapLayerOption, "none"> }) {
  const [actions, setActions] = useState<ActionItem[]>(() => getLayerActions(layer));

  useEffect(() => {
    setActions(getLayerActions(layer));
  }, [layer]);

  function toggleAction(id: string) {
    setActions(prev =>
      prev.map(a => a.id === id ? { ...a, enabled: !a.enabled } : a)
    );
  }

  const enabledCount = actions.filter(a => a.enabled).length;

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex items-center justify-between px-[2px]">
        <div className="flex items-center gap-[6px]">
          <p style={fontSemibold} className="text-white text-[14px] leading-[20px]">
            Recommended actions
          </p>
        </div>
        <span style={fontRegular} className="text-[rgba(255,255,255,0.4)] text-[12px]">
          {enabledCount}/{actions.length} active
        </span>
      </div>

      <div className="flex flex-col gap-[4px]">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={() => toggleAction(action.id)}
            className={clsx(
              "flex items-center gap-[10px] py-[10px] px-[10px] rounded-[8px] transition-all duration-200 w-full text-left cursor-pointer",
              action.enabled
                ? "bg-[rgba(44,255,204,0.08)]"
                : action.critical
                ? "bg-[rgba(255,173,51,0.06)]"
                : "bg-[rgba(255,255,255,0.04)]"
            )}
          >
            <div
              className={clsx(
                "w-[32px] h-[18px] rounded-full shrink-0 relative transition-colors duration-200",
                action.enabled ? "bg-[#2CFFCC]" : "bg-[rgba(255,255,255,0.15)]"
              )}
            >
              <div
                className={clsx(
                  "absolute top-[2px] w-[14px] h-[14px] rounded-full transition-all duration-200",
                  action.enabled ? "left-[16px] bg-[#16141c]" : "left-[2px] bg-[rgba(255,255,255,0.5)]"
                )}
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-[6px]">
                <p style={fontSemibold} className="text-white text-[13px] leading-[18px]">
                  {action.title}
                </p>
                {!action.enabled && action.critical && (
                  <AlertTriangle size={11} className="text-[#ffad33] shrink-0" />
                )}
              </div>
              <p style={fontRegular} className="text-[rgba(255,255,255,0.45)] text-[11px] leading-[15px]">
                {action.description}
              </p>
            </div>

            {action.enabled && (
              <Check size={14} className="text-[#2CFFCC] shrink-0" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Explore Worldwide Section ────────────────────────────────────────────────

type SectionKey = "high" | "medium" | "low";

function SectionDot({ color }: { color: string }) {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[16px]" style={{ backgroundColor: color }}>
      <div
        aria-hidden="true"
        className="absolute border-[1.5px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function ExploreWorldwide({
  onSelectCountry,
  layer,
}: {
  onSelectCountry: (name: string) => void;
  layer: Exclude<MapLayerOption, "none">;
}) {
  const [openSection, setOpenSection] = useState<SectionKey | null>("high");
  const [searchQuery, setSearchQuery] = useState("");
  const meta = layerMeta[layer];
  const grouped = getCountriesByTier(layer);

  const isSearching = searchQuery.trim().length > 0;
  const q = searchQuery.toLowerCase();

  const sections: { key: SectionKey; label: string; color: string; countries: string[] }[] = useMemo(() => {
    const raw = [
      { key: "high" as SectionKey, label: meta.tiers.high.label, color: meta.tiers.high.color, countries: grouped.high },
      { key: "medium" as SectionKey, label: meta.tiers.medium.label, color: meta.tiers.medium.color, countries: grouped.medium },
      { key: "low" as SectionKey, label: meta.tiers.low.label, color: meta.tiers.low.color, countries: grouped.low },
    ];
    if (!isSearching) return raw;
    return raw.map(s => ({
      ...s,
      countries: s.countries.filter(c => c.toLowerCase().includes(q)),
    })).filter(s => s.countries.length > 0);
  }, [meta, grouped, isSearching, q]);

  // When searching, expand all sections with results
  const effectiveOpenSection = isSearching ? null : openSection;

  return (
    <div className="flex flex-col flex-1 min-h-0">
      {/* Search input — matches CountryBrowser style */}
      <div className="shrink-0 pb-[10px]">
        <div className="bg-[rgba(255,255,255,0.05)] flex items-center gap-[8px] px-[8px] py-[8px] rounded-[4px] w-full">
          <div className="relative shrink-0 size-[16px]">
            <div className="absolute inset-[6.25%_12.5%_12.5%_6.25%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                <path clipRule="evenodd" d={searchSvgPaths.p1d2e30f0} fill="white" fillOpacity="0.5" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search countries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none flex-1 min-w-0 text-[13px] text-white leading-[18px] placeholder:text-[rgba(255,255,255,0.4)]"
            style={fontRegular}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="shrink-0 p-[2px] rounded-[3px] hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-pointer"
            >
              <X size={12} className="text-[rgba(255,255,255,0.5)]" />
            </button>
          )}
        </div>
      </div>

      {/* No results */}
      {isSearching && sections.length === 0 && (
        <div className="flex flex-col items-center justify-center py-[24px] gap-[6px]">
          <p style={fontRegular} className="text-[rgba(255,255,255,0.4)] text-[13px]">
            No countries found for "{searchQuery}"
          </p>
        </div>
      )}

      {sections.map((section) => {
        const isOpen = isSearching || effectiveOpenSection === section.key;
        return (
          <div
            key={section.key}
            className={clsx(
              "flex flex-col transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
              isOpen ? "flex-1 min-h-0" : "shrink-0"
            )}
          >
            <button
              className="flex items-center justify-between py-[8px] px-[2px] w-full cursor-pointer shrink-0"
              onClick={() => {
                if (!isSearching) setOpenSection(prev => prev === section.key ? null : section.key);
              }}
            >
              <div className="flex gap-[6px] items-center">
                <SectionDot color={section.color} />
                <span style={fontSemibold} className="text-white text-[13px] leading-[18px]">
                  {section.label}
                </span>
                <span style={fontRegular} className="text-[rgba(255,255,255,0.35)] text-[12px]">
                  {section.countries.length}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <ChevronDown
                  size={14}
                  className="text-[rgba(255,255,255,0.5)]"
                />
              </motion.div>
            </button>
            <div
              className={clsx(
                "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                isOpen ? "flex-1 min-h-0 opacity-100" : "h-0 opacity-0 overflow-hidden"
              )}
            >
              <div className="overflow-y-auto h-full px-[8px] pb-[8px]">
                {section.countries.map(name => (
                  <CountryRow
                    key={name}
                    variant="navigate"
                    name={name}
                    onNavigate={() => onSelectCountry(name)}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── VPN Recommended Countries (layer + physical-country-aware) ───────────────

function getVpnRecommendations(
  layer: Exclude<MapLayerOption, "none">,
  physicalCountry: string,
) {
  return getPhysicalCountryAwareRecommendations(layer, physicalCountry);
}

// ─── Main Panel ───────────────────────────────────────────────────────────────

export function ISPRegulationsPanel({
  externalSelectedCountry,
  onCountryChange,
  activeLayer = "isp-regulations",
  onClearLayer,
  onVpnConnect,
  onVpnDisconnect,
  vpnConnectedCountry,
  vpnStatus = "unprotected",
  physicalCountry = "Belarus",
}: {
  externalSelectedCountry?: string | null;
  onCountryChange?: (name: string | null) => void;
  activeLayer?: MapLayerOption;
  onClearLayer?: () => void;
  onVpnConnect?: (country: string) => void;
  onVpnDisconnect?: () => void;
  vpnConnectedCountry?: string | null;
  vpnStatus?: "unprotected" | "connecting" | "protected";
  physicalCountry?: string;
} = {}) {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  // Sync from external (map click)
  useEffect(() => {
    if (externalSelectedCountry && externalSelectedCountry !== selectedCountry) {
      setSelectedCountry(externalSelectedCountry);
    }
  }, [externalSelectedCountry]);

  // When layer changes, clear selected country
  const prevLayerRef = React.useRef(activeLayer);
  useEffect(() => {
    if (prevLayerRef.current !== activeLayer) {
      prevLayerRef.current = activeLayer;
      setSelectedCountry(null);
      onCountryChange?.(null);
    }
  }, [activeLayer]);

  function handleExploreCountry(name: string) {
    setSelectedCountry(name);
    onCountryChange?.(name);
  }

  function handleConnect(name: string) {
    onVpnConnect?.(name);
  }

  function handleBack() {
    setSelectedCountry(null);
    onCountryChange?.(null);
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[8px] backdrop-blur-[16px] bg-[rgba(22,20,28,0.75)] border border-[rgba(255,255,255,0.1)]">
      {activeLayer === "none" ? (
        <CountryBrowser
          vpnStatus={vpnStatus}
          vpnConnectedCountry={vpnConnectedCountry}
          onVpnConnect={onVpnConnect}
          onVpnDisconnect={onVpnDisconnect}
          physicalCountry={physicalCountry}
        />
      ) : (
        <HomeView
          onExploreCountry={handleExploreCountry}
          onConnect={handleConnect}
          connectedCountry={vpnConnectedCountry ?? null}
          vpnStatus={vpnStatus}
          onVpnDisconnect={onVpnDisconnect}
          activeLayer={activeLayer}
          onClearLayer={onClearLayer}
          physicalCountry={physicalCountry}
          selectedCountry={selectedCountry}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

// ─── Home View ────────────────────────────────────────────────────────────────

function HomeView({
  onExploreCountry,
  onConnect,
  connectedCountry,
  vpnStatus,
  onVpnDisconnect,
  activeLayer,
  onClearLayer,
  physicalCountry = "Belarus",
  selectedCountry,
  onBack,
}: {
  onExploreCountry: (name: string) => void;
  onConnect: (name: string) => void;
  connectedCountry: string | null;
  vpnStatus: "unprotected" | "connecting" | "protected";
  onVpnDisconnect?: () => void;
  activeLayer: Exclude<MapLayerOption, "none">;
  onClearLayer?: () => void;
  physicalCountry?: string;
  selectedCountry?: string | null;
  onBack: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"context" | "worldwide">("context");
  const [showMoreVPN, setShowMoreVPN] = useState(false);

  function handleTabSwitch(tab: "context" | "worldwide") {
    if (selectedCountry) onBack();
    setActiveTab(tab);
  }

  const resolvedPhysical = physicalCountry ?? "Belarus";

  const whereToConnectSubtitle: Record<Exclude<MapLayerOption, "none">, string> = {
    "isp-regulations": `Escape ISP monitoring and browsing logs from ${resolvedPhysical}`,
    "privacy-score":   `Strongest data privacy protections beyond ${resolvedPhysical}'s reach`,
    "surveillance":    `Stay outside intelligence-sharing alliances from ${resolvedPhysical}`,
    "identity":        `Browse without revealing your identity — minimal ID requirements`,
    "p2p":             `Share files freely — P2P-friendly jurisdictions from ${resolvedPhysical}`,
  };

  const meta = layerMeta[activeLayer];
  const vpnRecommendations = getVpnRecommendations(activeLayer, resolvedPhysical);
  const visibleRecommendations = showMoreVPN ? vpnRecommendations : vpnRecommendations.slice(0, 5);

  // Reset "show more" whenever the layer or physical country changes so the
  // list always starts collapsed at the top-ranked options.
  const prevLayerRef = React.useRef(activeLayer);
  const prevPhysicalRef = React.useRef(resolvedPhysical);
  if (prevLayerRef.current !== activeLayer || prevPhysicalRef.current !== resolvedPhysical) {
    prevLayerRef.current = activeLayer;
    prevPhysicalRef.current = resolvedPhysical;
    if (showMoreVPN) setShowMoreVPN(false);
  }

  return (
    <div className="flex flex-col relative w-full h-full" style={{ minHeight: 0 }}>
      <div className="flex flex-col h-full min-h-0">
        {/* ── Header ── */}
        <div className="shrink-0 px-[12px] pt-[14px] pb-[0px]">
          <div className="flex items-center justify-between mb-[12px]">
            <div className="flex gap-[10px] items-center">
              <LayerIcon layer={activeLayer} />
              <span style={fontSemibold} className="text-white text-[18px] leading-[24px] whitespace-nowrap font-[Segoe_UI_Variable]">
                {meta.title}
              </span>
            </div>
            <button
              onClick={onClearLayer}
              className="p-[4px] rounded-[4px] hover:bg-[rgba(255,255,255,0.08)] transition-colors cursor-pointer"
            >
              <X size={16} className="text-[rgba(255,255,255,0.7)]" />
            </button>
          </div>

          <p style={fontRegular} className="text-[rgba(255,255,255,0.5)] text-[13px] leading-[19px] mb-[12px]">
            {meta.description}
          </p>

          {/* ── Tab Switcher ── */}
          <div className="flex gap-[2px] p-[3px] rounded-[8px] bg-[rgba(255,255,255,0.06)]">
            <button
              onClick={() => handleTabSwitch("context")}
              className={clsx(
                "flex-1 flex items-center justify-center gap-[6px] py-[7px] rounded-[6px] transition-all duration-200 cursor-pointer",
                activeTab === "context" && !selectedCountry
                  ? "bg-[rgba(255,255,255,0.1)] shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                  : "hover:bg-[rgba(255,255,255,0.04)]"
              )}
            >
              <span
                style={fontSemibold}
                className={clsx(
                  "text-[13px] leading-[18px] transition-colors duration-200",
                  activeTab === "context" && !selectedCountry ? "text-white" : "text-[rgba(255,255,255,0.5)]"
                )}
              >
                Your situation
              </span>
            </button>
            <button
              onClick={() => handleTabSwitch("worldwide")}
              className={clsx(
                "flex-1 flex items-center justify-center gap-[6px] py-[7px] rounded-[6px] transition-all duration-200 cursor-pointer",
                activeTab === "worldwide" && !selectedCountry
                  ? "bg-[rgba(255,255,255,0.1)] shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                  : "hover:bg-[rgba(255,255,255,0.04)]"
              )}
            >
              <span
                style={fontSemibold}
                className={clsx(
                  "text-[13px] leading-[18px] transition-colors duration-200",
                  activeTab === "worldwide" && !selectedCountry ? "text-white" : "text-[rgba(255,255,255,0.5)]"
                )}
              >
                Worldwide
              </span>
            </button>
          </div>
        </div>

        {/* ── Content Area — tabs OR country detail ── */}
        <div className="flex-1 min-h-0 relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            {selectedCountry ? (
              <motion.div
                key={`detail-${selectedCountry}`}
                className="absolute inset-0"
                initial={{ x: "60%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "60%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 380, damping: 34, mass: 0.85 }}
              >
                <CountryDetailView
                  countryName={selectedCountry}
                  onBack={onBack}
                  activeLayer={activeLayer}
                />
              </motion.div>
            ) : (
              <motion.div
                key={`tabs-${activeLayer}`}
                className="absolute inset-0 flex flex-col px-[12px] pb-[12px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {activeTab === "context" ? (
                    <motion.div
                      key={`context-tab-${activeLayer}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="flex-1 min-h-0 overflow-y-auto"
                    >
                      <div className="flex flex-col gap-[20px] pt-[12px]">
                        {/* ── Section 1: Country Spotlight ── */}
                        <CountrySpotlight
                          onExplore={() => onExploreCountry(
                            vpnStatus === "protected" && connectedCountry ? connectedCountry : physicalCountry
                          )}
                          layer={activeLayer}
                          country={physicalCountry}
                          vpnCountry={connectedCountry}
                          vpnStatus={vpnStatus}
                        />

                        {/* ── Section 2: VPN Recommendations ── */}
                        <div className="flex flex-col gap-[8px]">
                          <div className="flex items-center justify-between px-[2px]">
                            <p style={fontSemibold} className="text-white text-[14px] leading-[20px]">
                              Where to connect
                            </p>
                          </div>
                          <p style={fontRegular} className="text-[rgba(255,255,255,0.45)] text-[12px] leading-[17px] px-[2px]">
                            {whereToConnectSubtitle[activeLayer]}
                          </p>

                          <div className="flex flex-col px-[8px]">
                            {visibleRecommendations.map((rec, i) => (
                              <CountryRow
                                key={rec.name}
                                name={rec.name}
                                rank={i + 1}
                                vpnStatus={vpnStatus}
                                isConnected={vpnStatus === "protected" && connectedCountry === rec.name}
                                isConnecting={vpnStatus === "connecting" && connectedCountry === rec.name}
                                onConnect={() => onConnect(rec.name)}
                                onDisconnect={onVpnDisconnect}
                              />
                            ))}
                            {!showMoreVPN && vpnRecommendations.length > 5 && (
                              <button
                                onClick={() => setShowMoreVPN(true)}
                                className="flex items-center justify-center py-[4px] px-[8px] rounded-[4px] bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)] transition-colors cursor-pointer"
                              >
                                <span style={fontRegular} className="text-[rgba(255,255,255,0.6)] text-[12px]">
                                  Show more
                                </span>
                              </button>
                            )}
                          </div>
                        </div>

                        {/* ── Section 3: Recommended Actions ── */}
                        <RecommendedActions layer={activeLayer} />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`worldwide-tab-${activeLayer}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="flex-1 min-h-0 flex flex-col"
                    >
                      <div className="flex flex-col flex-1 min-h-0 pt-[12px]">
                        <p style={fontRegular} className="text-[rgba(255,255,255,0.55)] text-[13px] leading-[19px] shrink-0 pb-[14px]">
                          Explore how different countries compare on {meta.title.toLowerCase()}.
                        </p>
                        <ExploreWorldwide onSelectCountry={onExploreCountry} layer={activeLayer} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}