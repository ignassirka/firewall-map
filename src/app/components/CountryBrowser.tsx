import React, { useState, useMemo } from "react";
import chipSvgPaths from "../../imports/svg-6mqrghog0w";
import tabSvgPaths from "../../imports/svg-gr3yl27tf4";
import searchSvgPaths from "../../imports/svg-m0k6r02h9x";
import Fastest from "../../imports/Fastest";
import { getFlagUrl } from "./flagComponents";
import profileIconStreaming from "../../imports/profile-icons/profile-icon-streaming.svg";
import profileIconGaming from "../../imports/profile-icons/profile-icon-gaming.svg";
import profileIconP2p from "../../imports/profile-icons/profile-icon-p2p.svg";
import profileIconAnticensorship from "../../imports/profile-icons/profile-icon-anticensorship.svg";
import profileIconSecurity from "../../imports/profile-icons/profile-icon-security.svg";
import profileIconBusiness from "../../imports/profile-icons/profile-icon-business.svg";
import icPlus20 from "../../imports/profile-icons/ic-plus-20.svg";
import icInfoCircle from "../../imports/profile-icons/ic-info-circle-filled.svg";
import icArrowRightLeft from "../../imports/profile-icons/ic-arrow-right-arrow-left.svg";
import recentsEmptyIcon from "../../imports/recents-empty-icon.svg";

// ─── Styles ───────────────────────────────────────────────────────────────────

const fontSemibold: React.CSSProperties = {
  fontVariationSettings: "'opsz' 10.5",
  fontFeatureSettings: "'fina', 'init'",
};

const fontRegular: React.CSSProperties = {
  fontVariationSettings: "'opsz' 10.5",
  fontFeatureSettings: "'rclt' 0",
};

// ─── Chip Section Nav Icons (from Figma) ──────────────────────────────────────

function ClockIcon({ active }: { active: boolean }) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[9.38%_9.39%_9.38%_0.01%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4956 13">
          <path clipRule="evenodd" d={chipSvgPaths.p25f71c80} fill="white" fillOpacity={active ? 1 : 0.7} fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function EarthIcon({ active }: { active: boolean }) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[6.25%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path clipRule="evenodd" d={chipSvgPaths.p634fa00} fill="white" fillOpacity={active ? 1 : 0.7} fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function TerminalIcon({ active }: { active: boolean }) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[12.5%_6.25%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
          <path clipRule="evenodd" d={chipSvgPaths.p21917200} fill="white" fillOpacity={active ? 1 : 0.7} fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function ChipIndicator({ visible }: { visible: boolean }) {
  return (
    <div className="absolute h-[17px] left-0 top-[6px] w-[3px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 17">
        <path d={chipSvgPaths.p147ee00} fill="white" opacity={visible ? 1 : 0} />
      </svg>
    </div>
  );
}

// ─── Country name → ISO 2-letter code mapping ────────────────────────────────

const countryToIso: Record<string, string> = {
  Albania: "AL", Algeria: "DZ", Angola: "AO", Argentina: "AR", Armenia: "AM",
  Australia: "AU", Austria: "AT", Azerbaijan: "AZ", Bangladesh: "BD", Belarus: "BY",
  Belgium: "BE", Bolivia: "BO", "Bosnia and Herzegovina": "BA", Brazil: "BR", Bulgaria: "BG",
  Cambodia: "KH", Cameroon: "CM", Canada: "CA", Chile: "CL", China: "CN",
  Colombia: "CO", "Costa Rica": "CR", Croatia: "HR", Cyprus: "CY", "Czech Republic": "CZ",
  Denmark: "DK", Ecuador: "EC", Egypt: "EG", "El Salvador": "SV", Estonia: "EE",
  Finland: "FI", France: "FR", Georgia: "GE", Germany: "DE", Ghana: "GH",
  Greece: "GR", Honduras: "HN", "Hong Kong": "HK", Hungary: "HU", Iceland: "IS",
  India: "IN", Indonesia: "ID", Iran: "IR", Ireland: "IE", "Isle of Man": "IM",
  Israel: "IL", Italy: "IT", Japan: "JP", Kazakhstan: "KZ", Kenya: "KE",
  Latvia: "LV", Lithuania: "LT", Luxembourg: "LU", Malaysia: "MY", Mexico: "MX",
  Moldova: "MD", Mongolia: "MN", Morocco: "MA", Netherlands: "NL", "New Zealand": "NZ",
  Nigeria: "NG", "North Macedonia": "MK", Norway: "NO", Pakistan: "PK", Panama: "PA",
  Peru: "PE", Philippines: "PH", Poland: "PL", Portugal: "PT", Romania: "RO",
  Russia: "RU", "Saudi Arabia": "SA", Senegal: "SN", Serbia: "RS", Singapore: "SG",
  Slovakia: "SK", Slovenia: "SI", "South Africa": "ZA", "South Korea": "KR", Spain: "ES",
  "Sri Lanka": "LK", Sweden: "SE", Switzerland: "CH", Taiwan: "TW", Thailand: "TH",
  Turkey: "TR", Ukraine: "UA", "United Arab Emirates": "AE", "United Kingdom": "GB",
  "United States": "US", Uruguay: "UY", Venezuela: "VE", Vietnam: "VN",
};

// Full country list
const allCountries = [
  "Albania", "Algeria", "Angola", "Argentina", "Armenia",
  "Australia", "Austria", "Azerbaijan", "Bangladesh", "Belarus",
  "Belgium", "Bolivia", "Bosnia and Herzegovina", "Brazil", "Bulgaria",
  "Cambodia", "Cameroon", "Canada", "Chile", "China",
  "Colombia", "Costa Rica", "Croatia", "Cyprus", "Czech Republic",
  "Denmark", "Ecuador", "Egypt", "El Salvador", "Estonia",
  "Finland", "France", "Georgia", "Germany", "Ghana",
  "Greece", "Honduras", "Hong Kong", "Hungary", "Iceland",
  "India", "Indonesia", "Iran", "Ireland", "Isle of Man",
  "Israel", "Italy", "Japan", "Kazakhstan", "Kenya",
  "Latvia", "Lithuania", "Luxembourg", "Malaysia", "Mexico",
  "Moldova", "Mongolia", "Morocco", "Netherlands", "New Zealand",
  "Nigeria", "North Macedonia", "Norway", "Pakistan", "Panama",
  "Peru", "Philippines", "Poland", "Portugal", "Romania",
  "Russia", "Saudi Arabia", "Senegal", "Serbia", "Singapore",
  "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain",
  "Sri Lanka", "Sweden", "Switzerland", "Taiwan", "Thailand",
  "Turkey", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States", "Uruguay", "Venezuela", "Vietnam",
];

// Secure Core countries (privacy-focused)
const secureCoreCountries = [
  "Iceland", "Sweden", "Switzerland",
];

// P2P-friendly countries
const p2pCountries = [
  "Argentina", "Austria", "Brazil", "Canada", "Denmark",
  "Finland", "France", "Germany", "Iceland", "Ireland",
  "Luxembourg", "Netherlands", "New Zealand", "Norway",
  "Poland", "Portugal", "Romania", "Singapore", "Spain",
  "Sweden", "Switzerland", "United Kingdom", "United States",
];

// Tor-friendly countries
const torCountries = [
  "France", "Germany", "Hong Kong", "Iceland",
  "Sweden", "Switzerland", "United States",
];

// ─── Flag renderer (SVG component or emoji fallback) ──────────────────────────

function CountryFlag({ name }: { name: string }) {
  const url = getFlagUrl(name);
  if (url) {
    return (
      <img
        src={url}
        alt={`${name} flag`}
        width={30}
        height={20}
        loading="lazy"
        className="w-[30px] h-[20px] shrink-0 rounded-[4px] object-cover"
      />
    );
  }

  // Fallback: placeholder
  return (
    <div className="w-[30px] h-[20px] rounded-[4px] bg-[rgba(255,255,255,0.12)] shrink-0" />
  );
}

// ─── Active dot (Figma component) ─────────────────────────────────────────────

function ActiveDot() {
  return (
    <div className="relative shrink-0" style={{ width: 16, height: 16 }}>
      {/* Outer pulsing ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "rgba(44,255,204,0.2)",
          animation: "activeDotPulse 2.4s ease-in-out infinite",
        }}
      />
      {/* Inner solid dot */}
      <div
        className="absolute rounded-full"
        style={{
          width: 8,
          height: 8,
          top: 4,
          left: 4,
          background: "#2CFFCC",
          boxShadow: "0 0 6px rgba(44,255,204,0.7)",
        }}
      />
      <style>{`
        @keyframes activeDotPulse {
          0%, 100% { transform: scale(0.85); opacity: 0.6; }
          50%       { transform: scale(1.15); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// ─── Country row (Figma-accurate) ─────────────────────────────────────────────

export type CountryRowVpnProps = {
  variant?: "vpn";
  name: string;
  isFastest?: boolean;
  /** When set (e.g. sorted VPN picks), shown as muted index before the flag. */
  rank?: number;
  vpnStatus: VpnStatus;
  isConnected: boolean;
  isConnecting: boolean;
  onConnect: () => void;
  onDisconnect?: () => void;
  /** Right-side hint on hover; defaults to "Connect". */
  actionLabel?: string;
};

export type CountryRowNavigateProps = {
  variant: "navigate";
  name: string;
  isFastest?: boolean;
  rank?: number;
  onNavigate: () => void;
  /** Right-side hint on hover; defaults to "Explore". */
  actionLabel?: string;
};

export type CountryRowProps = CountryRowVpnProps | CountryRowNavigateProps;

export function CountryRow(props: CountryRowProps) {
  const [hovered, setHovered] = useState(false);
  const isNavigate = props.variant === "navigate";

  const handleClick = () => {
    if (isNavigate) {
      props.onNavigate();
      return;
    }
    if (props.isConnected || props.isConnecting) {
      props.onDisconnect?.();
    } else {
      props.onConnect();
    }
  };

  const actionLabel = isNavigate
    ? (props.actionLabel ?? "Explore")
    : (props.actionLabel ?? "Connect");

  const isConnected = !isNavigate && props.isConnected;
  const isConnecting = !isNavigate && props.isConnecting;
  const showActionHint = isNavigate || (!isConnected && !isConnecting);

  const rowBg =
    hovered && (isNavigate || (!isConnected && !isConnecting))
      ? "rgba(255,255,255,0.1)"
      : "transparent";

  const { name, isFastest = false, rank } = props;

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center w-full rounded-[8px] transition-colors duration-150 cursor-pointer"
      style={{
        padding: "12px",
        gap: "12px",
        height: 44,
        justifyContent: "space-between",
        background: rowBg,
      }}
    >
      {/* Left: optional rank + flag + name + active dot (VPN only) */}
      <div className="flex items-center shrink-0 min-w-0 flex-1" style={{ gap: 12 }}>
        {rank != null && (
          <span
            style={{ ...fontRegular, fontSize: 12, lineHeight: "16px" }}
            className="text-[rgba(255,255,255,0.35)] w-[20px] shrink-0 text-center tabular-nums"
          >
            {rank}
          </span>
        )}
        <div className="shrink-0" style={{ width: 30, height: 20 }}>
          {isFastest ? <Fastest /> : <CountryFlag name={name} />}
        </div>
        <span
          style={{ ...fontRegular, fontSize: 16, lineHeight: "20px", color: "white" }}
          className="whitespace-nowrap truncate min-w-0"
        >
          {name}
        </span>
        {isConnected && <ActiveDot />}
      </div>

      {/* Right: Connect / Explore on hover */}
      <div className="shrink-0 flex items-center" style={{ height: 20 }}>
        {showActionHint && (
          <span
            style={{
              ...fontSemibold,
              fontSize: 16,
              lineHeight: "20px",
              color: "white",
              opacity: hovered ? 1 : 0,
              transition: "opacity 120ms ease",
            }}
          >
            {actionLabel}
          </span>
        )}
      </div>
    </button>
  );
}

// ─── Profiles data ────────────────────────────────────────────────────────────

type ProfileEntry = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  p2p?: boolean;
};

const profilesList: ProfileEntry[] = [
  { id: "streaming-us", title: "Streaming US",          subtitle: "United States",                  icon: profileIconStreaming },
  { id: "gaming",       title: "Gaming",                subtitle: "Fastest country",                icon: profileIconGaming },
  { id: "p2p",          title: "P2P",                   subtitle: "Fastest country",                icon: profileIconP2p,    p2p: true },
  { id: "anticensors",  title: "Anti-censorship",       subtitle: "Fastest (excluding my country)", icon: profileIconAnticensorship },
  { id: "max-security", title: "Maximum security",      subtitle: "Fastest - Secure Core",          icon: profileIconSecurity },
  { id: "work-school",  title: "Work and school",       subtitle: "Fastest country",                icon: profileIconBusiness },
];

// ─── Three-dots icon ──────────────────────────────────────────────────────────

function ThreeDotsIcon() {
  return (
    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2" cy="2"  r="1.5" fill="white" fillOpacity="0.7" />
      <circle cx="2" cy="8"  r="1.5" fill="white" fillOpacity="0.7" />
      <circle cx="2" cy="14" r="1.5" fill="white" fillOpacity="0.7" />
    </svg>
  );
}

// ─── Profile row ──────────────────────────────────────────────────────────────

function ProfileRow({ profile }: { profile: ProfileEntry }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center w-full rounded-[8px] cursor-pointer transition-colors duration-150"
      style={{ background: hovered ? "rgba(255,255,255,0.07)" : "transparent" }}
    >
      {/* Primary: icon + titles */}
      <div
        className="flex flex-1 min-w-0 items-center"
        style={{ gap: 8, padding: 12 }}
      >
        {/* Profile icon 30x30 */}
        <img
          src={profile.icon}
          alt={profile.title}
          width={30}
          height={30}
          className="shrink-0"
          style={{ width: 30, height: 30 }}
        />

        {/* Title stack */}
        <div className="flex flex-col flex-1 min-w-0" style={{ gap: 2 }}>
          {/* Top title */}
          <div className="flex items-center w-full" style={{ gap: 8 }}>
            <span
              className="text-white whitespace-nowrap overflow-hidden text-ellipsis"
              style={{ ...fontRegular, fontSize: 16, lineHeight: "20px" }}
            >
              {profile.title}
            </span>
          </div>

          {/* 2nd line: subtitle + optional P2P tag */}
          <div className="flex items-center" style={{ gap: 4 }}>
            <span
              className="whitespace-nowrap overflow-hidden text-ellipsis"
              style={{ ...fontRegular, fontSize: 14, lineHeight: "20px", color: "rgba(255,255,255,0.7)" }}
            >
              {profile.subtitle}
            </span>

            {profile.p2p && (
              <div
                className="flex items-center shrink-0 rounded-[4px]"
                style={{ background: "rgba(255,255,255,0.05)", gap: 2, padding: "2px 6px" }}
              >
                <img src={icArrowRightLeft} alt="P2P" width={14} height={14} />
                <span
                  className="text-white shrink-0"
                  style={{ ...fontSemibold, fontSize: 12, lineHeight: "16px" }}
                >
                  P2P
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Secondary: three-dots (hover only) */}
      <div
        className="shrink-0 flex items-center justify-center rounded-[8px] transition-opacity duration-150"
        style={{
          width: 44,
          height: "100%",
          minHeight: 44,
          padding: 12,
          opacity: hovered ? 1 : 0,
        }}
      >
        <ThreeDotsIcon />
      </div>
    </div>
  );
}

// ─── Tab types ────────────────────────────────────────────────────────────────

type NavItem = "recents" | "countries" | "profiles";
type FilterTab = "all" | "secure-core" | "p2p" | "tor";

// ─── VPN props ────────────────────────────────────────────────────────────────

export type VpnStatus = "unprotected" | "connecting" | "protected";

type CountryBrowserProps = {
  vpnStatus?: VpnStatus;
  vpnConnectedCountry?: string | null;
  onVpnConnect?: (country: string) => void;
  onVpnDisconnect?: () => void;
  physicalCountry?: string;
};

// ─── Component ────────────────────────────────────────────────────────────────

export function CountryBrowser({
  vpnStatus = "unprotected",
  vpnConnectedCountry,
  onVpnConnect,
  onVpnDisconnect,
  physicalCountry = "Belarus",
}: CountryBrowserProps = {}) {
  const [activeNav, setActiveNav] = useState<NavItem>("countries");
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries = useMemo(() => {
    let list: string[];
    switch (activeFilter) {
      case "secure-core":
        list = secureCoreCountries;
        break;
      case "p2p":
        list = p2pCountries;
        break;
      case "tor":
        list = torCountries;
        break;
      default:
        list = allCountries;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(c => c.toLowerCase().includes(q));
    }
    return list;
  }, [activeFilter, searchQuery]);

  const navItems: { key: NavItem; label: string; icon: React.ReactNode; shortcut: string }[] = [
    {
      key: "recents",
      label: "Recents",
      icon: <ClockIcon active={activeNav === "recents"} />,
      shortcut: "ctrl + 1",
    },
    {
      key: "countries",
      label: "Countries",
      icon: <EarthIcon active={activeNav === "countries"} />,
      shortcut: "ctrl + 2",
    },
    {
      key: "profiles",
      label: "Profiles",
      icon: <TerminalIcon active={activeNav === "profiles"} />,
      shortcut: "ctrl + 3",
    },
  ];

  const filterTabs: { key: FilterTab; label: string }[] = [
    { key: "all", label: "All" },
    { key: "secure-core", label: "Secure Core" },
    { key: "p2p", label: "P2P" },
    { key: "tor", label: "Tor" },
  ];

  return (
    <div className="flex flex-col w-full h-full">
      {/* Search bar — Figma-exact */}
      <div className="shrink-0 px-[12px] pt-[14px] pb-[8px]">
        <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-between px-[8px] py-[10px] relative rounded-[4px] w-full">
          <div className="content-stretch flex gap-[8px] items-center relative flex-1 min-w-0">
            <div className="relative shrink-0 size-[16px]">
              <div className="absolute inset-[6.25%_12.5%_12.5%_6.25%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                  <path clipRule="evenodd" d={searchSvgPaths.p1d2e30f0} fill="white" fillOpacity="0.5" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex items-end relative flex-1 min-w-0">
              <input
                type="text"
                placeholder="Browse from..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none w-full text-[14px] text-white leading-[20px] placeholder:text-[rgba(255,255,255,0.5)] whitespace-nowrap"
                style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'rclt' 0" }}
              />
            </div>
          </div>
          <p
            className="relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] leading-[16px] whitespace-nowrap"
            style={{ fontVariationSettings: "'opsz' 8" }}
          >
            ctrl + F
          </p>
        </div>
      </div>

      {/* Navigation — Chip Section (Figma-exact) */}
      <div className="shrink-0 flex flex-col gap-[4px] px-[12px] py-[8px]">
        {navItems.map((item) => {
          const isActive = activeNav === item.key;
          return (
            <div
              key={item.key}
              onClick={() => setActiveNav(item.key)}
              className="flex items-center justify-between relative shrink-0 w-full cursor-pointer"
            >
              <div
                className={`relative shrink-0 rounded-[4px] transition-colors duration-150 ease-out ${
                  isActive
                    ? "bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.28)]"
                    : "hover:bg-[rgba(255,255,255,0.1)]"
                }`}
              >
                <div className="flex flex-row items-center size-full">
                  <div className="flex gap-[4px] items-center pb-[5px] pt-[4px] px-[8px] relative">
                    {item.icon}
                    <div
                      style={{
                        fontVariationSettings: "'opsz' 10.5",
                        fontFeatureSettings: "'rclt' 0",
                      }}
                      className={`flex flex-col justify-end leading-[0] relative shrink-0 text-[16px] text-center whitespace-nowrap ${
                        isActive ? "text-white" : "text-[rgba(255,255,255,0.7)]"
                      }`}
                    >
                      <p className="leading-[20px]">{item.label}</p>
                    </div>
                    <ChipIndicator visible={isActive} />
                  </div>
                </div>
              </div>
              <div
                style={{ fontVariationSettings: "'opsz' 8" }}
                className="flex flex-col justify-end leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap"
              >
                <p className="leading-[16px]">{item.shortcut}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filter tabs — Figma ServerFeatures exact */}
      {activeNav === "countries" && (
        <div className="content-stretch flex items-start relative shrink-0 w-full px-[8px] py-[0px]">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className="content-stretch flex flex-col gap-[8px] items-center pt-[8px] px-[12px] relative rounded-[8px] shrink-0 cursor-pointer"
              >
                <div
                  style={{
                    fontVariationSettings: "'opsz' 10.5",
                    fontFeatureSettings: "'rclt' 0",
                  }}
                  className={`flex flex-col justify-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap ${
                    isActive ? "text-white" : "text-[rgba(255,255,255,0.7)]"
                  }`}
                >
                  <p className="leading-[20px]">{tab.label}</p>
                </div>
                <div className="h-[3px] relative shrink-0 w-[16px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 3">
                    <path
                      d={tabSvgPaths.p39dfd5a0}
                      fill="white"
                      opacity={isActive ? 1 : 0}
                    />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Country list */}
      {activeNav === "countries" && (
        <div className="flex-1 min-h-0 flex flex-col">
          {/* Section header */}
          <div className="shrink-0 px-[16px] pt-[12px] pb-[6px]">
            <span style={fontSemibold} className="text-[rgba(255,255,255,0.5)] text-[14px] leading-[16px] font-semibold">
              {activeFilter === "all"
                ? `All countries (${filteredCountries.length})`
                : activeFilter === "secure-core"
                ? `Secure Core (${filteredCountries.length})`
                : activeFilter === "p2p"
                ? `P2P (${filteredCountries.length})`
                : `Tor (${filteredCountries.length})`}
            </span>
          </div>

          {/* Scrollable list */}
          <div className="flex-1 min-h-0 overflow-y-auto px-[8px] pb-[8px]">
            {/* Fastest country row */}
            {activeFilter === "all" && !searchQuery && (
              <CountryRow
                name="Fastest country"
                isFastest
                vpnStatus={vpnStatus}
                isConnected={vpnStatus === "protected" && vpnConnectedCountry === physicalCountry}
                isConnecting={vpnStatus === "connecting" && vpnConnectedCountry === physicalCountry}
                onConnect={() => onVpnConnect?.(physicalCountry)}
                onDisconnect={onVpnDisconnect}
              />
            )}

            {/* Country rows */}
            {filteredCountries.map((name) => (
              <CountryRow
                key={name}
                name={name}
                vpnStatus={vpnStatus}
                isConnected={vpnStatus === "protected" && vpnConnectedCountry === name}
                isConnecting={vpnStatus === "connecting" && vpnConnectedCountry === name}
                onConnect={() => onVpnConnect?.(name)}
                onDisconnect={onVpnDisconnect}
              />
            ))}

            {filteredCountries.length === 0 && (
              <div className="flex items-center justify-center py-[32px]">
                <span style={fontRegular} className="text-[rgba(255,255,255,0.35)] text-[13px]">
                  No countries found
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Recents — Figma "0 recents" empty state */}
      {activeNav === "recents" && (
        <div className="flex-1 min-h-0 overflow-y-auto py-[24px] px-[8px]">
          {/* Centered column matching Figma: px-64 inner padding, 8px gap between icon and text */}
          <div className="flex flex-col items-center gap-[8px] px-[64px]">
            {/* small/recents icon — taken as-is from Figma (64×64) */}
            <img
              src={recentsEmptyIcon}
              alt=""
              width={64}
              height={64}
              className="shrink-0 select-none"
              draggable={false}
            />
            {/* Text stack — 172px wide, centered, 4px gap (Figma exact) */}
            <div className="flex flex-col gap-[4px] text-center" style={{ width: 172 }}>
              <p
                className="text-[14px] leading-[20px] text-white"
                style={{ fontFamily: "'Segoe UI Variable', sans-serif", fontWeight: 600, fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'fina', 'init'" }}
              >
                No recents yet
              </p>
              <p
                className="text-[14px] leading-[20px] text-[rgba(255,255,255,0.7)]"
                style={{ fontFamily: "'Segoe UI Variable', sans-serif", fontWeight: 400, fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'rclt' 0" }}
              >
                View your connection history here.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Profiles section */}
      {activeNav === "profiles" && (
        <div className="flex-1 min-h-0 flex flex-col overflow-y-auto px-[8px]">
          {/* Section header */}
          <div
            className="shrink-0 flex items-center"
            style={{ gap: 8, padding: "16px 8px 8px" }}
          >
            <span
              style={{ ...fontSemibold, fontSize: 14, lineHeight: "20px", color: "rgba(255,255,255,0.7)" }}
            >
              Profiles ({profilesList.length})
            </span>
            <img src={icInfoCircle} alt="info" width={16} height={16} className="shrink-0" />
          </div>

          {/* Profile rows */}
          {profilesList.map((profile) => (
            <ProfileRow key={profile.id} profile={profile} />
          ))}

          {/* New profile button — sits directly after the last row */}
          <div className="shrink-0" style={{ padding: "4px 0px 8px" }}>
            <button
              className="flex items-center justify-center rounded-[4px] transition-colors duration-150 cursor-pointer"
              style={{ gap: 8, padding: 8, background: "transparent" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              <img src={icPlus20} alt="plus" width={20} height={20} className="shrink-0" />
              <span
                style={{ ...fontSemibold, fontSize: 16, lineHeight: "20px", color: "#9880FF" }}
              >
                New profile
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}