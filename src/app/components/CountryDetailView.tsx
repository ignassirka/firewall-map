import React from "react";
import { getFlagForCountry } from "./flagComponents";
import { getCountryData } from "./countryData";
import { getCountryTier, type LayerTier } from "./layerData";
import type { MapLayerOption } from "../../imports/RightVpnFeatures";
import { ChevronLeft, ExternalLink } from "lucide-react";
import { CountrySpotlight } from "./ISPRegulationsPanel";
import lockOpenSvgPaths from "../../imports/svg-nqdx7ibpa6";
import lockFilledIcon from "../../imports/ic-lock-filled.svg";

// ─── Shared Styles ────────────────────────────────────────────────────────────

const fontSemibold: React.CSSProperties = {
  fontVariationSettings: "'opsz' 10.5",
  fontFeatureSettings: "'fina', 'init'",
};

const fontRegular: React.CSSProperties = {
  fontVariationSettings: "'opsz' 10.5",
  fontFeatureSettings: "'rclt' 0",
};

// ─── Generic content per layer × tier ────────────────────────────────────────

type BulletItem = { bold: string; text: string };
type SectionContent = { intro: string; bullets: BulletItem[] };
type TierContent = { physical: SectionContent; vpn: SectionContent };

const layerTierContent: Record<
  Exclude<MapLayerOption, "none">,
  Record<LayerTier, TierContent>
> = {
  "isp-regulations": {
    high: {
      physical: {
        intro: "How your ISP can monitor, log, and share your activity while you're here.",
        bullets: [
          { bold: "ISP data retention", text: " is strictly limited by law, reducing the risk of your browsing history being stored or sold." },
          { bold: "Legal right to opt out", text: " of data sharing exists in most contexts, with meaningful enforcement mechanisms." },
          { bold: "DNS and traffic logs", text: " are subject to oversight requirements, limiting surveillance without legal process." },
        ],
      },
      vpn: {
        intro: "What to expect when routing your VPN traffic through a server here.",
        bullets: [
          { bold: "Favourable data laws", text: " apply to VPN servers here, reducing the likelihood of logs being compelled by authorities." },
          { bold: "Legal framework", text: " generally supports privacy, making this a relatively safe VPN exit jurisdiction." },
          { bold: "Transparency obligations", text: " on providers mean any data requests are more likely to be disclosed." },
        ],
      },
    },
    medium: {
      physical: {
        intro: "How your ISP can monitor, log, and share your activity while you're here.",
        bullets: [
          { bold: "Data retention laws", text: " exist but enforcement is inconsistent, leaving some gaps in practice." },
          { bold: "ISPs may log traffic", text: " for business or compliance purposes with limited transparency obligations." },
          { bold: "Legal protections vary", text: " by provider and service type, making your exposure hard to predict." },
        ],
      },
      vpn: {
        intro: "What to expect when routing your VPN traffic through a server here.",
        bullets: [
          { bold: "Partial protections", text: " apply, but authorities may be able to request data under certain circumstances." },
          { bold: "ISP visibility", text: " of your VPN traffic is limited, but jurisdiction-level risks remain." },
          { bold: "Legal safeguards exist", text: " but may not cover all scenarios, especially in national security contexts." },
        ],
      },
    },
    low: {
      physical: {
        intro: "How your ISP can monitor, log, and share your activity while you're here.",
        bullets: [
          { bold: "ISPs can log and share", text: " your browsing activity with few or no legal restrictions." },
          { bold: "Traffic monitoring", text: " may be conducted at the network level, including deep packet inspection." },
          { bold: "No meaningful oversight", text: " of ISP data practices exists, making abuse difficult to challenge." },
        ],
      },
      vpn: {
        intro: "What to expect when routing your VPN traffic through a server here.",
        bullets: [
          { bold: "Weak legal protections", text: " mean VPN providers in this jurisdiction may be required to log or hand over data." },
          { bold: "Authorities can compel", text: " access to VPN server logs with limited judicial oversight." },
          { bold: "Not recommended", text: " as a VPN exit point if privacy is your primary concern." },
        ],
      },
    },
  },

  "privacy-score": {
    high: {
      physical: {
        intro: "The data privacy rights you have as a resident or visitor.",
        bullets: [
          { bold: "Data protection laws", text: " give you meaningful rights over how your personal data is collected and used." },
          { bold: "Independent authority", text: " enforces privacy rules, creating accountability for businesses handling your data." },
          { bold: "Consent requirements", text: " mean services must ask before collecting personal information in most contexts." },
        ],
      },
      vpn: {
        intro: "The legal protections that apply to data stored on servers here.",
        bullets: [
          { bold: "Privacy-friendly laws", text: " apply to servers here, offering strong legal protection for data in transit and at rest." },
          { bold: "Regulatory environment", text: " is favourable, reducing the risk of mandatory data retention for VPN providers." },
          { bold: "Data requests", text: " require formal legal process, making bulk or warrantless access less likely." },
        ],
      },
    },
    medium: {
      physical: {
        intro: "The data privacy rights you have as a resident or visitor.",
        bullets: [
          { bold: "Privacy rights exist", text: " but enforcement is inconsistent and may depend on the type of service or data." },
          { bold: "Some oversight exists", text: " but regulatory resources and enforcement actions are limited in practice." },
          { bold: "Personal data may flow", text: " to third parties without explicit consent under certain legal bases." },
        ],
      },
      vpn: {
        intro: "The legal protections that apply to data stored on servers here.",
        bullets: [
          { bold: "Moderate protections", text: " apply, but some data retention or disclosure requirements may exist for providers." },
          { bold: "Legal data requests", text: " are possible under national law, though typically require judicial authorisation." },
          { bold: "Jurisdiction adds some risk", text: " depending on the sensitivity of your activity and local legal interpretation." },
        ],
      },
    },
    low: {
      physical: {
        intro: "The data privacy rights you have as a resident or visitor.",
        bullets: [
          { bold: "Minimal data rights", text: " mean services can collect and use personal information with little restriction." },
          { bold: "No independent authority", text: " actively enforces data protection, leaving individuals with few practical remedies." },
          { bold: "Government access", text: " to personal data may occur without judicial oversight or individual notification." },
        ],
      },
      vpn: {
        intro: "The legal protections that apply to data stored on servers here.",
        bullets: [
          { bold: "Weak privacy laws", text: " may require VPN providers to retain logs or comply with data requests without safeguards." },
          { bold: "Government disclosure", text: " requests may be issued without meaningful judicial oversight." },
          { bold: "Avoid for sensitive use", text: " — this jurisdiction offers limited protection for data on its servers." },
        ],
      },
    },
  },

  surveillance: {
    high: {
      physical: {
        intro: "The surveillance infrastructure and intelligence exposure in this country.",
        bullets: [
          { bold: "Not a member", text: " of any major intelligence-sharing alliance, reducing cross-border data sharing." },
          { bold: "Surveillance is domestic", text: " in scope and governed by local law rather than multinational agreements." },
          { bold: "Lower risk", text: " of exposure to foreign intelligence collection through formal data-sharing arrangements." },
        ],
      },
      vpn: {
        intro: "Whether connecting here exposes you to intelligence-sharing arrangements.",
        bullets: [
          { bold: "Outside major alliances", text: " — traffic exiting here is less likely subject to intelligence-sharing agreements." },
          { bold: "Surveillance exposure", text: " is limited to domestic law rather than multinational collection frameworks." },
          { bold: "Relatively safe exit", text: " from an intelligence-sharing risk perspective for most use cases." },
        ],
      },
    },
    medium: {
      physical: {
        intro: "The surveillance infrastructure and intelligence exposure in this country.",
        bullets: [
          { bold: "14 Eyes member", text: " — data may be shared between member state agencies under certain conditions." },
          { bold: "Intelligence sharing", text: " occurs through formal agreements, meaning foreign agencies may access data." },
          { bold: "Targeted surveillance", text: " with partner agencies is possible, especially for communications metadata." },
        ],
      },
      vpn: {
        intro: "Whether connecting here exposes you to intelligence-sharing arrangements.",
        bullets: [
          { bold: "14 Eyes jurisdiction", text: " — your exit traffic may fall within the scope of member-state intelligence access." },
          { bold: "Formal data-sharing", text: " agreements exist, meaning partner agencies may request access to your data." },
          { bold: "Use with awareness", text: " that intelligence-sharing agreements could expose metadata to partner states." },
        ],
      },
    },
    low: {
      physical: {
        intro: "The surveillance infrastructure and intelligence exposure in this country.",
        bullets: [
          { bold: "Core alliance member", text: " with deep data-sharing agreements across 5 or 9 partner intelligence agencies." },
          { bold: "Mass surveillance programmes", text: " may operate domestically with partner agency access built in." },
          { bold: "Communications metadata", text: " may be shared with foreign intelligence partners without specific targeting." },
        ],
      },
      vpn: {
        intro: "Whether connecting here exposes you to intelligence-sharing arrangements.",
        bullets: [
          { bold: "Core 5/9 Eyes member", text: " — the highest level of cross-border intelligence sharing applies here." },
          { bold: "Not recommended", text: " as a VPN exit for users concerned about intelligence surveillance." },
          { bold: "Partner agencies", text: " in other countries may access traffic or metadata gathered through servers here." },
        ],
      },
    },
  },

  identity: {
    high: {
      physical: {
        intro: "What identity verification is required to go online.",
        bullets: [
          { bold: "Minimal ID requirements", text: " mean you can access most online services without verifying your identity." },
          { bold: "Anonymous browsing", text: " is generally permitted, with no legal obligation to tie activity to a real identity." },
          { bold: "SIM registration", text: " is not mandatory in most cases, allowing use of prepaid services with reduced traceability." },
        ],
      },
      vpn: {
        intro: "How much anonymity you can maintain when using a server in this country.",
        bullets: [
          { bold: "Permissive environment", text: " means servers here carry low risk of being compelled to identify users." },
          { bold: "No real-name mandates", text: " apply to VPN providers in this jurisdiction, supporting anonymous use." },
          { bold: "Low traceability risk", text: " from a regulatory standpoint when routing traffic through this country." },
        ],
      },
    },
    medium: {
      physical: {
        intro: "What identity verification is required to go online.",
        bullets: [
          { bold: "Some services require", text: " ID verification, particularly for financial, government, or age-restricted platforms." },
          { bold: "SIM registration laws", text: " may apply, linking phone numbers to verified identities in operator databases." },
          { bold: "Partial anonymity is possible", text: ", but certain platforms or activities require identity disclosure." },
        ],
      },
      vpn: {
        intro: "How much anonymity you can maintain when using a server in this country.",
        bullets: [
          { bold: "Some ID obligations", text: " may apply to service providers, though VPN-specific rules vary." },
          { bold: "Partial anonymity maintained", text: ", but certain disclosure requirements could apply in legal proceedings." },
          { bold: "Moderate risk", text: " — suitable for general privacy use but not for high-sensitivity anonymity needs." },
        ],
      },
    },
    low: {
      physical: {
        intro: "What identity verification is required to go online.",
        bullets: [
          { bold: "Real-name registration", text: " may be required for internet access, social media, or SIM card activation." },
          { bold: "Anonymous online activity", text: " is legally restricted or actively discouraged in this jurisdiction." },
          { bold: "ID verification mandates", text: " expose your identity to both platform operators and potentially authorities." },
        ],
      },
      vpn: {
        intro: "How much anonymity you can maintain when using a server in this country.",
        bullets: [
          { bold: "Identity mandates", text: " may extend to VPN operators, requiring user identification under local law." },
          { bold: "Authorities can compel", text: " identification of users connecting through servers in this jurisdiction." },
          { bold: "Avoid for anonymity", text: " — this jurisdiction provides weak protection against identity disclosure." },
        ],
      },
    },
  },

  p2p: {
    high: {
      physical: {
        intro: "How file sharing and torrenting are treated under local law.",
        bullets: [
          { bold: "P2P is generally tolerated", text: " with no active enforcement against file sharing in most contexts." },
          { bold: "Torrent sites", text: " are accessible and ISPs are not required to block or monitor P2P traffic." },
          { bold: "Copyright enforcement", text: " is limited in practice, with few documented cases against individual sharers." },
        ],
      },
      vpn: {
        intro: "How P2P traffic is treated when your VPN exit node is in this country.",
        bullets: [
          { bold: "P2P-friendly jurisdiction", text: " — servers here are unlikely to be targeted by copyright enforcement actions." },
          { bold: "No mandatory logging", text: " of P2P traffic by ISPs, reducing the risk of activity being reported." },
          { bold: "Low enforcement risk", text: " makes this a suitable exit country for P2P use cases." },
        ],
      },
    },
    medium: {
      physical: {
        intro: "How file sharing and torrenting are treated under local law.",
        bullets: [
          { bold: "Copyright notices", text: " or warnings may be issued to users identified sharing protected content." },
          { bold: "Some ISPs throttle", text: " P2P traffic during peak hours or as a matter of network policy." },
          { bold: "Torrent site access", text: " may be partially blocked, though circumvention is generally possible." },
        ],
      },
      vpn: {
        intro: "How P2P traffic is treated when your VPN exit node is in this country.",
        bullets: [
          { bold: "Some enforcement exists", text: ", but connecting via VPN significantly reduces your exposure." },
          { bold: "ISP monitoring bypassed", text: " — your provider can only see encrypted traffic, not P2P activity." },
          { bold: "Copyright notices", text: " targeting your real IP are prevented by VPN use." },
        ],
      },
    },
    low: {
      physical: {
        intro: "How file sharing and torrenting are treated under local law.",
        bullets: [
          { bold: "P2P and torrenting", text: " are actively restricted or illegal, with enforcement at the ISP level." },
          { bold: "Torrent sites are blocked", text: " by court order or government mandate across major ISPs." },
          { bold: "Penalties can apply", text: " to users caught downloading or sharing copyrighted material." },
        ],
      },
      vpn: {
        intro: "How P2P traffic is treated when your VPN exit node is in this country.",
        bullets: [
          { bold: "Not recommended", text: " as a VPN exit for P2P — local laws create risk for server operators." },
          { bold: "Enforcement pressure", text: " on VPN providers may result in logging requirements or service restrictions." },
          { bold: "Prefer a different exit", text: " in a jurisdiction where P2P is legal and ISP monitoring is limited." },
        ],
      },
    },
  },
};

// ─── Main component ───────────────────────────────────────────────────────────

export function CountryDetailView({
  countryName,
  onBack,
  activeLayer,
}: {
  countryName: string;
  onBack: () => void;
  activeLayer?: MapLayerOption;
}) {
  const data = getCountryData(countryName);
  const effectiveLayer = activeLayer && activeLayer !== "none" ? activeLayer : undefined;
  const layerTier = effectiveLayer ? getCountryTier(effectiveLayer, countryName) : "medium";
  const content = effectiveLayer ? layerTierContent[effectiveLayer][layerTier] : null;

  return (
    <div className="flex flex-col relative w-full h-full min-h-0">
      <div className="flex flex-col h-full min-h-0">
        {/* ── Header ── */}
        <div className="shrink-0 px-[14px] pt-[14px] pb-[12px]">
          <button
            onClick={onBack}
            className="flex items-center gap-[4px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors mb-[14px] cursor-pointer"
          >
            <ChevronLeft size={16} className="shrink-0" />
            <span style={fontSemibold} className="text-[13px] leading-[18px]">Back</span>
          </button>

          {effectiveLayer && (
            <CountrySpotlight
              layer={effectiveLayer}
              country={countryName}
              showExploreButton={false}
            />
          )}
        </div>

        {/* ── Scrollable content ── */}
        <div className="flex-1 min-h-0 overflow-y-auto px-[14px] pb-[12px]">
          <div className="flex flex-col gap-[24px] pt-[2px]">

            {content && (
              <>
                {/* ── Part 1: Being physically in {Country} ── */}
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-[3px]">
                    <div className="flex items-center gap-[8px] px-[2px] min-w-0">
                      <div className="relative shrink-0" style={{ width: 14, height: 12.25 }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17.5">
                          <path clipRule="evenodd" d={lockOpenSvgPaths.p38bdd580} fill="#F7607B" fillRule="evenodd" />
                        </svg>
                      </div>
                      <span style={fontSemibold} className="text-white text-[14px] leading-[20px] min-w-0">
                        Being physically in {countryName}
                      </span>
                    </div>
                    <p style={fontRegular} className="text-[rgba(255,255,255,0.45)] text-[12px] leading-[17px] px-[2px]">
                      {content.physical.intro}
                    </p>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    {content.physical.bullets.map((item, i) => (
                      <div key={i} className="flex gap-[8px] items-start py-[6px] px-[10px] rounded-[8px] bg-[rgba(255,255,255,0.04)]">
                        <div className="w-[4px] h-[4px] rounded-full bg-[rgba(255,255,255,0.3)] shrink-0 mt-[7px]" />
                        <p style={fontRegular} className="text-[rgba(255,255,255,0.8)] text-[13px] leading-[18px]">
                          <span style={fontSemibold} className="text-white">{item.bold}</span>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Divider ── */}
                <div className="h-px bg-[rgba(255,255,255,0.06)]" />

                {/* ── Part 2: Connecting via VPN ── */}
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-[3px]">
                    <div className="flex items-center gap-[8px] px-[2px] min-w-0">
                      <img
                        src={lockFilledIcon}
                        alt=""
                        width={14}
                        height={14}
                        className="shrink-0 select-none"
                        draggable={false}
                      />
                      <span style={fontSemibold} className="text-white text-[14px] leading-[20px] min-w-0">
                        Connecting to {countryName} via VPN
                      </span>
                    </div>
                    <p style={fontRegular} className="text-[rgba(255,255,255,0.45)] text-[12px] leading-[17px] px-[2px]">
                      {content.vpn.intro}
                    </p>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    {content.vpn.bullets.map((item, i) => (
                      <div key={i} className="flex gap-[8px] items-start py-[6px] px-[10px] rounded-[8px] bg-[rgba(255,255,255,0.04)]">
                        <div className="w-[4px] h-[4px] rounded-full bg-[rgba(255,255,255,0.3)] shrink-0 mt-[7px]" />
                        <p style={fontRegular} className="text-[rgba(255,255,255,0.8)] text-[13px] leading-[18px]">
                          <span style={fontSemibold} className="text-white">{item.bold}</span>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="shrink-0 px-[14px] py-[10px] border-t border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center justify-between">
            <span style={fontRegular} className="text-[rgba(255,255,255,0.3)] text-[11px]">
              {data?.lastUpdated ? `Updated ${data.lastUpdated}` : ""}
            </span>
            {data?.sourcesCount && (
              <button className="flex items-center gap-[5px] text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.7)] transition-colors cursor-pointer">
                <ExternalLink size={11} />
                <span style={fontRegular} className="text-[11px]">
                  Sources ({data.sourcesCount})
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}