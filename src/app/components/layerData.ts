import type { MapLayerOption } from "../../imports/RightVpnFeatures";

// ─── Layer tier type ──────────────────────────────────────────────────────────

export type LayerTier = "high" | "medium" | "low";

// ─── Per-layer metadata ───────────────────────────────────────────────────────

export interface LayerMeta {
  title: string;
  description: string;
  situationDescription: string;
  spotlightSubtitle: string;
  tiers: {
    high: { label: string; color: string; bgClass: string };
    medium: { label: string; color: string; bgClass: string };
    low: { label: string; color: string; bgClass: string };
  };
}

export const layerMeta: Record<Exclude<MapLayerOption, "none">, LayerMeta> = {
  "isp-regulations": {
    title: "ISP regulations",
    description:
      "Your ISP can monitor, log, and share your browsing activity. Regulations vary widely by country.",
    situationDescription:
      "Your ISP can monitor, log, and share your browsing activity. Regulations vary widely by country.",
    spotlightSubtitle: "ISP regulation level",
    tiers: {
      high: { label: "Strong regulations", color: "#4bb99d", bgClass: "bg-[#4bb99d]" },
      medium: { label: "Moderate protection", color: "#ffad33", bgClass: "bg-[#ffad33]" },
      low: { label: "Poor protection", color: "#f7607b", bgClass: "bg-[#f7607b]" },
    },
  },
  "privacy-score": {
    title: "Privacy score",
    description:
      "Overall privacy score based on legislation, enforcement, data handling practices, and government transparency.",
    situationDescription:
      "This score considers data protection laws, enforcement strength, surveillance scope, and judicial oversight.",
    spotlightSubtitle: "Privacy score",
    tiers: {
      high: { label: "High privacy", color: "#4bb99d", bgClass: "bg-[#4bb99d]" },
      medium: { label: "Mixed privacy", color: "#ffad33", bgClass: "bg-[#ffad33]" },
      low: { label: "Low privacy", color: "#f7607b", bgClass: "bg-[#f7607b]" },
    },
  },
  surveillance: {
    title: "Surveillance alliances",
    description:
      "Countries in intelligence-sharing alliances may share your data across borders. Alliance membership affects your privacy posture.",
    situationDescription:
      "Intelligence alliances enable mass data sharing between member states. Belarus is not a member but has its own domestic surveillance apparatus.",
    spotlightSubtitle: "Alliance membership",
    tiers: {
      high: { label: "No alliance", color: "#4bb99d", bgClass: "bg-[#4bb99d]" },
      medium: { label: "14 Eyes", color: "#ffad33", bgClass: "bg-[#ffad33]" },
      low: { label: "5/9 Eyes", color: "#f7607b", bgClass: "bg-[#f7607b]" },
    },
  },
  identity: {
    title: "Identity verification",
    description:
      "Some countries require online identity verification, real-name registration, or age checks that reduce anonymity.",
    situationDescription:
      "Identity verification laws require you to reveal who you are online, reducing anonymity and increasing your digital footprint.",
    spotlightSubtitle: "ID requirements",
    tiers: {
      high: { label: "Minimal ID required", color: "#4bb99d", bgClass: "bg-[#4bb99d]" },
      medium: { label: "Moderate ID required", color: "#ffad33", bgClass: "bg-[#ffad33]" },
      low: { label: "Strict ID required", color: "#f7607b", bgClass: "bg-[#f7607b]" },
    },
  },
  p2p: {
    title: "P2P & torrenting",
    description:
      "Peer-to-peer file sharing legality varies by country. Some criminalize it, others allow it, and many are somewhere in between.",
    situationDescription:
      "P2P and torrenting legality depends on local copyright enforcement, ISP monitoring practices, and penalty severity.",
    spotlightSubtitle: "P2P legal status",
    tiers: {
      high: { label: "Generally legal", color: "#4bb99d", bgClass: "bg-[#4bb99d]" },
      medium: { label: "Restricted", color: "#ffad33", bgClass: "bg-[#ffad33]" },
      low: { label: "Illegal or blocked", color: "#f7607b", bgClass: "bg-[#f7607b]" },
    },
  },
};

// ─── Country-to-tier mappings per layer ───────────────────────────────────────

type CountryTierMap = Record<string, LayerTier>;

const ispRegulationsTiers: CountryTierMap = {
  // Strong data-protection laws (GDPR, EEA equivalents, or comparable frameworks)
  France: "high", Germany: "high", Switzerland: "high", "United Kingdom": "high",
  Sweden: "high", "United States": "high", Australia: "high", Netherlands: "high",
  Austria: "high", Belgium: "high", Ireland: "high", Iceland: "high",
  "New Zealand": "high", Portugal: "high", Spain: "high",
  Latvia: "high", Lithuania: "high", Estonia: "high", Finland: "high",
  Bulgaria: "high", Croatia: "high", Cyprus: "high", "Czech Republic": "high",
  Denmark: "high", Greece: "high", Hungary: "high", "Isle of Man": "high",
  Israel: "high", Italy: "high", Luxembourg: "high", Norway: "high",
  Poland: "high", Romania: "high", Singapore: "high", Slovakia: "high",
  Slovenia: "high", Taiwan: "high", Uruguay: "high",
  // Some legal framework, uneven or limited enforcement
  Canada: "medium", Japan: "medium", "South Korea": "medium", Brazil: "medium",
  Mexico: "medium", Argentina: "medium", Turkey: "medium", Thailand: "medium",
  Albania: "medium", Armenia: "medium", Bolivia: "medium",
  "Bosnia and Herzegovina": "medium", Chile: "medium", Colombia: "medium",
  "Costa Rica": "medium", Ecuador: "medium", "El Salvador": "medium",
  Georgia: "medium", Ghana: "medium", Honduras: "medium", "Hong Kong": "medium",
  Indonesia: "medium", Kenya: "medium", Malaysia: "medium",
  Moldova: "medium", Mongolia: "medium", Morocco: "medium", Nigeria: "medium",
  "North Macedonia": "medium", Pakistan: "medium", Panama: "medium",
  Peru: "medium", Philippines: "medium", Senegal: "medium", Serbia: "medium",
  "South Africa": "medium", "Sri Lanka": "medium", Ukraine: "medium",
  "United Arab Emirates": "medium",
  // Weak or absent legal protections, active censorship
  Belarus: "low", Russia: "low", China: "low", India: "low",
  Vietnam: "low", Iran: "low", Egypt: "low", "Saudi Arabia": "low",
  Algeria: "low", Angola: "low", Azerbaijan: "low", Bangladesh: "low",
  Cambodia: "low", Cameroon: "low", Kazakhstan: "low", Venezuela: "low",
};

const privacyScoreTiers: CountryTierMap = {
  // Privacy leaders — strong laws, independent enforcement, limited surveillance
  Switzerland: "high", Iceland: "high", Germany: "high", Finland: "high",
  Estonia: "high", Sweden: "high", Netherlands: "high", Austria: "high",
  "Czech Republic": "high", Denmark: "high", "Isle of Man": "high",
  Israel: "high", Luxembourg: "high", Norway: "high", Slovakia: "high",
  Taiwan: "high", Uruguay: "high",
  // Moderate privacy — laws exist, enforcement gaps or surveillance concerns
  France: "medium", "United Kingdom": "medium", "United States": "medium",
  Canada: "medium", Japan: "medium", Belgium: "medium", Ireland: "medium",
  Portugal: "medium", Spain: "medium", Australia: "medium", "New Zealand": "medium",
  Latvia: "medium", Lithuania: "medium", "South Korea": "medium",
  Brazil: "medium", Argentina: "medium",
  Albania: "medium", Armenia: "medium", Bolivia: "medium",
  "Bosnia and Herzegovina": "medium", Bulgaria: "medium", Chile: "medium",
  Colombia: "medium", "Costa Rica": "medium", Croatia: "medium", Cyprus: "medium",
  Ecuador: "medium", "El Salvador": "medium", Georgia: "medium", Ghana: "medium",
  Greece: "medium", Honduras: "medium", "Hong Kong": "medium", Hungary: "medium",
  Indonesia: "medium", Italy: "medium", Kenya: "medium", Malaysia: "medium",
  Moldova: "medium", Mongolia: "medium", Morocco: "medium", Nigeria: "medium",
  "North Macedonia": "medium", Panama: "medium", Peru: "medium",
  Philippines: "medium", Poland: "medium", Romania: "medium", Senegal: "medium",
  Serbia: "medium", Singapore: "medium", Slovenia: "medium",
  "South Africa": "medium", "Sri Lanka": "medium", Ukraine: "medium",
  "United Arab Emirates": "medium",
  // Weak or absent protections — surveillance states or no meaningful framework
  Russia: "low", China: "low", Iran: "low", "Saudi Arabia": "low",
  Egypt: "low", Belarus: "low", Vietnam: "low", India: "low",
  Turkey: "low", Thailand: "low", Mexico: "low",
  Algeria: "low", Angola: "low", Azerbaijan: "low", Bangladesh: "low",
  Cambodia: "low", Cameroon: "low", Kazakhstan: "low", Pakistan: "low",
  Venezuela: "low",
};

const surveillanceTiers: CountryTierMap = {
  // 5 Eyes — deep SIGINT integration
  "United States": "low", "United Kingdom": "low", Canada: "low",
  Australia: "low", "New Zealand": "low",
  // 9 Eyes additions
  France: "low", Netherlands: "low", Denmark: "low", Norway: "low",
  // 14 Eyes additions
  Germany: "medium", Belgium: "medium", Sweden: "medium", Spain: "medium",
  Italy: "medium",
  // Outside major alliances (own surveillance varies but not part of formal UKUSA network)
  Switzerland: "high", Iceland: "high", Austria: "high", Ireland: "high",
  Portugal: "high", Latvia: "high", Lithuania: "high", Estonia: "high",
  Finland: "high", Japan: "high", "South Korea": "high", Brazil: "high",
  Mexico: "high", Argentina: "high", Turkey: "high", Thailand: "high",
  Belarus: "high", Russia: "high", China: "high", India: "high",
  Vietnam: "high", Iran: "high", Egypt: "high", "Saudi Arabia": "high",
  Albania: "high", Algeria: "high", Angola: "high", Armenia: "high",
  Azerbaijan: "high", Bangladesh: "high", Bolivia: "high",
  "Bosnia and Herzegovina": "high", Bulgaria: "high", Cambodia: "high",
  Cameroon: "high", Chile: "high", Colombia: "high", "Costa Rica": "high",
  Croatia: "high", Cyprus: "high", "Czech Republic": "high", Ecuador: "high",
  "El Salvador": "high", Georgia: "high", Ghana: "high", Greece: "high",
  Honduras: "high", "Hong Kong": "high", Hungary: "high", Indonesia: "high",
  "Isle of Man": "high", Israel: "high", Kazakhstan: "high", Kenya: "high",
  Luxembourg: "high", Malaysia: "high", Moldova: "high", Mongolia: "high",
  Morocco: "high", Nigeria: "high", "North Macedonia": "high", Pakistan: "high",
  Panama: "high", Peru: "high", Philippines: "high", Poland: "high",
  Romania: "high", Senegal: "high", Serbia: "high", Singapore: "high",
  Slovakia: "high", Slovenia: "high", "South Africa": "high", "Sri Lanka": "high",
  Taiwan: "high", Ukraine: "high", "United Arab Emirates": "high", Uruguay: "high",
  Venezuela: "high",
};

const identityTiers: CountryTierMap = {
  // Mandatory real-name or biometric registration; anonymous access restricted
  China: "low", Russia: "low", Iran: "low", "Saudi Arabia": "low",
  "South Korea": "low", Vietnam: "low", India: "low", Egypt: "low", Belarus: "low",
  Algeria: "low", Angola: "low", Azerbaijan: "low", Bangladesh: "low",
  Cambodia: "low", Cameroon: "low", Kazakhstan: "low", Pakistan: "low",
  Venezuela: "low",
  // Some registration requirements or ID-linked services
  "United Kingdom": "medium", Australia: "medium", Turkey: "medium",
  Thailand: "medium", Brazil: "medium", France: "medium", Germany: "medium",
  Albania: "medium", Armenia: "medium", Bolivia: "medium",
  "Bosnia and Herzegovina": "medium", Bulgaria: "medium", Chile: "medium",
  Colombia: "medium", "Costa Rica": "medium", Ecuador: "medium",
  "El Salvador": "medium", Georgia: "medium", Ghana: "medium",
  Honduras: "medium", "Hong Kong": "medium", Hungary: "medium",
  Indonesia: "medium", Israel: "medium", Kenya: "medium", Malaysia: "medium",
  Moldova: "medium", Mongolia: "medium", Morocco: "medium", Nigeria: "medium",
  "North Macedonia": "medium", Panama: "medium", Peru: "medium",
  Philippines: "medium", Romania: "medium", Senegal: "medium", Serbia: "medium",
  Singapore: "medium", "South Africa": "medium", "Sri Lanka": "medium",
  Ukraine: "medium", "United Arab Emirates": "medium",
  // Minimal ID requirements — open internet access without verified identity
  "United States": "high", Canada: "high", Switzerland: "high", Sweden: "high",
  Netherlands: "high", Austria: "high", Belgium: "high", Ireland: "high",
  Iceland: "high", "New Zealand": "high", Portugal: "high", Spain: "high",
  Latvia: "high", Lithuania: "high", Estonia: "high", Finland: "high",
  Japan: "high", Mexico: "high", Argentina: "high",
  Croatia: "high", Cyprus: "high", "Czech Republic": "high", Denmark: "high",
  Greece: "high", "Isle of Man": "high", Italy: "high", Luxembourg: "high",
  Norway: "high", Poland: "high", Slovakia: "high", Slovenia: "high",
  Taiwan: "high", Uruguay: "high",
};

const p2pTiers: CountryTierMap = {
  // Generally legal or not actively prosecuted
  Switzerland: "high", Netherlands: "high", Spain: "high", Mexico: "high",
  Argentina: "high", Brazil: "high", Canada: "high", Portugal: "high",
  Bolivia: "high", Colombia: "high", "Costa Rica": "high", Ecuador: "high",
  "El Salvador": "high", Georgia: "high", Honduras: "high",
  Moldova: "high", Panama: "high", Peru: "high", Uruguay: "high",
  // Restricted — ISP monitoring, copyright notices, or throttling
  "United States": "medium", "United Kingdom": "medium", France: "medium",
  Germany: "medium", Australia: "medium", Japan: "medium", "South Korea": "medium",
  Sweden: "medium", Belgium: "medium", Austria: "medium", Ireland: "medium",
  Iceland: "medium", "New Zealand": "medium", Finland: "medium",
  Estonia: "medium", Latvia: "medium", Lithuania: "medium",
  India: "medium", Turkey: "medium", Thailand: "medium",
  Albania: "medium", Algeria: "medium", Armenia: "medium",
  "Bosnia and Herzegovina": "medium", Bulgaria: "medium", Chile: "medium",
  Croatia: "medium", Cyprus: "medium", "Czech Republic": "medium",
  Denmark: "medium", Ghana: "medium", Greece: "medium", "Hong Kong": "medium",
  Hungary: "medium", Indonesia: "medium", Israel: "medium", Italy: "medium",
  Kazakhstan: "medium", Kenya: "medium", Luxembourg: "medium",
  Malaysia: "medium", Mongolia: "medium", Morocco: "medium", Nigeria: "medium",
  "North Macedonia": "medium", Norway: "medium", Pakistan: "medium",
  Philippines: "medium", Poland: "medium", Romania: "medium", Senegal: "medium",
  Serbia: "medium", Singapore: "medium", Slovakia: "medium", Slovenia: "medium",
  "South Africa": "medium", "Sri Lanka": "medium", Taiwan: "medium",
  Ukraine: "medium", "United Arab Emirates": "medium",
  // Actively blocked or illegal — ISP-level blocking, government mandates
  China: "low", Russia: "low", Iran: "low", "Saudi Arabia": "low",
  Egypt: "low", Belarus: "low", Vietnam: "low",
  Angola: "low", Azerbaijan: "low", Bangladesh: "low",
  Cambodia: "low", Cameroon: "low", Venezuela: "low",
};

const allLayerTiers: Record<Exclude<MapLayerOption, "none">, CountryTierMap> = {
  "isp-regulations": ispRegulationsTiers,
  "privacy-score": privacyScoreTiers,
  surveillance: surveillanceTiers,
  identity: identityTiers,
  p2p: p2pTiers,
};

export function getCountryTier(
  layer: Exclude<MapLayerOption, "none">,
  country: string
): LayerTier {
  return allLayerTiers[layer]?.[country] ?? "medium";
}

export function getTierColor(layer: Exclude<MapLayerOption, "none">, tier: LayerTier): string {
  return layerMeta[layer].tiers[tier].color;
}

// ─── Country lists grouped by tier for a given layer ──────────────────────────

export function getCountriesByTier(layer: Exclude<MapLayerOption, "none">): {
  high: string[];
  medium: string[];
  low: string[];
} {
  const tierMap = allLayerTiers[layer];
  const result: { high: string[]; medium: string[]; low: string[] } = {
    high: [], medium: [], low: [],
  };
  for (const [country, tier] of Object.entries(tierMap)) {
    result[tier].push(country);
  }
  // Sort alphabetically
  result.high.sort();
  result.medium.sort();
  result.low.sort();
  return result;
}

// ─── Belarus spotlight risks per layer ────────────────────────────────────────

export interface SpotlightRisk {
  label: string;
  severity: "high" | "medium" | "low";
}

export function getSpotlightRisks(layer: Exclude<MapLayerOption, "none">): SpotlightRisk[] {
  switch (layer) {
    case "isp-regulations":
      return [
        { label: "ISP logs all browsing activity", severity: "high" },
        { label: "Gov surveillance hardware on ISPs", severity: "high" },
        { label: "Websites actively blocked", severity: "high" },
      ];
    case "privacy-score":
      return [
        { label: "No independent data protection authority", severity: "high" },
        { label: "No user consent required for data collection", severity: "high" },
        { label: "Government can access data without warrant", severity: "high" },
      ];
    case "surveillance":
      return [
        { label: "SORM system enables real-time wiretapping", severity: "high" },
        { label: "No alliance but extensive domestic surveillance", severity: "medium" },
        { label: "Data shared with Russia through CSTO", severity: "high" },
      ];
    case "identity":
      return [
        { label: "Mandatory SIM card registration", severity: "high" },
        { label: "Real-name internet registration enforced", severity: "high" },
        { label: "Anonymous online activity is illegal", severity: "high" },
      ];
    case "p2p":
      return [
        { label: "P2P traffic actively blocked by ISPs", severity: "high" },
        { label: "Torrenting sites are censored", severity: "high" },
        { label: "Penalties for circumventing blocks", severity: "medium" },
      ];
  }
}

// ─── Countries to always exclude from VPN recommendations ────────────────────
// These are surveillance/authoritarian states that rank "high" on the
// surveillance tier (not in western alliances) but are poor VPN exits.
const vpnExcluded = new Set([
  "Belarus", "Russia", "China", "Iran", "Vietnam",
  "Saudi Arabia", "Egypt", "Turkey", "Thailand",
  "North Korea",
]);

// ─── Proximity / affinity order per physical country ─────────────────────────
// Countries listed earlier are surfaced first for users in that physical location.
const proximityOrder: Record<string, string[]> = {
  "Belarus": [
    "Latvia", "Lithuania", "Estonia", "Finland", "Sweden", "Germany",
    "Austria", "Switzerland", "Iceland", "Netherlands", "Ireland",
    "Portugal", "Belgium", "France", "Spain",
  ],
  "United States": [
    "Iceland", "Canada", "Switzerland", "Germany", "Netherlands",
    "Austria", "Finland", "Sweden", "Ireland", "Estonia",
    "Latvia", "Lithuania", "Portugal", "Belgium", "France",
  ],
  "United Kingdom": [
    "Ireland", "Iceland", "Switzerland", "Netherlands", "Germany",
    "Austria", "Sweden", "Finland", "Estonia", "Latvia",
    "Lithuania", "Portugal", "Belgium", "France", "Spain",
  ],
  "Switzerland": [
    "Austria", "Germany", "Netherlands", "Ireland", "Iceland",
    "Estonia", "Latvia", "Lithuania", "Finland", "Sweden",
    "France", "Portugal", "Belgium", "Spain",
  ],
  "India": [
    "Japan", "Switzerland", "Germany", "Finland", "Netherlands",
    "Sweden", "Austria", "Estonia", "Iceland", "Latvia",
    "Lithuania", "Ireland", "Portugal", "France",
  ],
  "Australia": [
    "Japan", "New Zealand", "Switzerland", "Iceland", "Germany",
    "Netherlands", "Austria", "Finland", "Sweden", "Estonia",
    "Latvia", "Lithuania", "Ireland", "Portugal",
  ],
  "Japan": [
    "Switzerland", "Iceland", "Finland", "Netherlands", "Germany",
    "Sweden", "Austria", "Estonia", "Latvia", "Lithuania",
    "Ireland", "Portugal", "New Zealand", "France",
  ],
};

export function getPhysicalCountryAwareRecommendations(
  layer: Exclude<MapLayerOption, "none">,
  physicalCountry: string,
): Array<{ name: string; reason: string }> {
  const grouped = getCountriesByTier(layer);

  // Keep only countries that are good VPN destinations and aren't the user's
  // own physical location (no point connecting to where you already are).
  const candidates = grouped.high.filter(
    c => c !== physicalCountry && !vpnExcluded.has(c),
  );

  const order = proximityOrder[physicalCountry] ?? [];
  const orderMap = new Map(order.map((c, i) => [c, i]));

  candidates.sort((a, b) => {
    const aIdx = orderMap.has(a) ? orderMap.get(a)! : 999;
    const bIdx = orderMap.has(b) ? orderMap.get(b)! : 999;
    if (aIdx !== bIdx) return aIdx - bIdx;
    return a.localeCompare(b);
  });

  return candidates.slice(0, 10).map(name => ({
    name,
    reason: getRecommendationReason(layer, name),
  }));
}

// ─── VPN recommendation reasons per layer ─────────────────────────────────────

export function getRecommendationReason(
  layer: Exclude<MapLayerOption, "none">,
  country: string,
): string {
  // Layer-specific generic reasons
  const reasons: Record<Exclude<MapLayerOption, "none">, Record<string, string>> = {
    "isp-regulations": {
      Latvia: "Nearest EU, outside 14 Eyes",
      Lithuania: "Low latency, strong GDPR",
      Estonia: "Digital-first, privacy by design",
      Finland: "Internet as a right, Nordic privacy",
      Sweden: "Home of Mullvad VPN",
      Germany: "Strong BfDI oversight",
      Switzerland: "Non-EU, gold-standard privacy",
      Iceland: "Outside all intelligence alliances",
      Netherlands: "Strong Dutch DPA enforcement",
      Austria: "Strict EU privacy compliance",
    },
    "privacy-score": {
      Switzerland: "Top-rated privacy jurisdiction",
      Iceland: "Best press freedom, no surveillance",
      Germany: "Strong BfDI, constitutional privacy",
      Finland: "Nordic privacy model, strong enforcement",
      Estonia: "Digital society with privacy safeguards",
      Sweden: "Privacy-first legislation, good infra",
      Netherlands: "AMS-IX hub, strict data rules",
      Austria: "Constitutional privacy protections",
      Latvia: "EU GDPR, minimal data retention",
      Lithuania: "GDPR jurisdiction, low latency",
    },
    surveillance: {
      Switzerland: "Outside all alliances, neutral state",
      Iceland: "No alliance, strong speech protections",
      Latvia: "EU member, outside 14 Eyes",
      Lithuania: "EU member, outside 14 Eyes",
      Estonia: "EU member, outside 14 Eyes",
      Finland: "Outside 14 Eyes, Nordic privacy",
      Austria: "EU member, outside 14 Eyes",
      Ireland: "EU member, outside 14 Eyes",
      Portugal: "EU member, outside 14 Eyes",
      Japan: "No western alliance, strong APPI",
    },
    identity: {
      Switzerland: "No mandatory online ID",
      Iceland: "Minimal verification requirements",
      Netherlands: "No real-name policies",
      Sweden: "Anonymous access allowed",
      Finland: "No identity mandates for internet",
      Estonia: "Digital ID optional for most services",
      Austria: "No mandatory internet ID",
      Latvia: "Minimal ID requirements",
      Lithuania: "Minimal ID requirements",
      Germany: "No real-name registration",
    },
    p2p: {
      Switzerland: "P2P downloading is legal",
      Netherlands: "Tolerant P2P policies",
      Spain: "Personal downloading permitted",
      Canada: "Notice-and-notice system only",
      Portugal: "Lenient P2P enforcement",
      Brazil: "Minimal P2P enforcement",
      Mexico: "No P2P crackdown",
      Argentina: "Permissive file sharing laws",
      Latvia: "Minimal P2P enforcement in EU",
      Lithuania: "Minimal P2P enforcement in EU",
    },
  };
  return reasons[layer]?.[country] ?? "Strong privacy protections";
}
