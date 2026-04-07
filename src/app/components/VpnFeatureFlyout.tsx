import React from "react";

export type VpnFeatureType = "netshield" | "killswitch" | "portforwarding" | "splittunneling";

interface Props {
  feature: VpnFeatureType;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

// ─── Exact Figma SVG assets ───────────────────────────────────────────────────

function NetShieldAdsIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.8">
        <path d="M18 25.0714C21.9054 25.0714 25.0714 21.9054 25.0714 18C25.0714 16.5323 24.6243 15.169 23.8588 14.039L13.7112 23.6229C14.9008 24.5316 16.3874 25.0714 18 25.0714Z" fill="url(#ads_g0)"/>
        <path d="M22.57 12.6035L12.3512 22.2546C11.4581 21.0707 10.9286 19.5972 10.9286 18C10.9286 14.0946 14.0946 10.9286 18 10.9286C19.7423 10.9286 21.3375 11.5587 22.57 12.6035Z" fill="url(#ads_g1)"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M35.7815 18.8126C36.0728 18.3098 36.0728 17.6902 35.7815 17.1874L27.597 3.06263C27.3057 2.55978 26.7672 2.25 26.1844 2.25H9.81557C9.23282 2.25 8.69433 2.55977 8.40296 3.06263L0.218532 17.1874C-0.0728442 17.6902 -0.0728441 18.3098 0.218532 18.8126L8.40296 32.9374C8.69433 33.4402 9.23282 33.75 9.81557 33.75H26.1844C26.7672 33.75 27.3057 33.4402 27.597 32.9374L35.7815 18.8126ZM18 27C22.9706 27 27 22.9706 27 18C27 13.0294 22.9706 9 18 9C13.0294 9 9 13.0294 9 18C9 22.9706 13.0294 27 18 27Z" fill="url(#ads_g2)"/>
      </g>
      <defs>
        <linearGradient id="ads_g0" x1="19.5" y1="0.75" x2="22.7471" y2="34.6916" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DDDFEC"/><stop offset="1" stopColor="#414351"/>
        </linearGradient>
        <linearGradient id="ads_g1" x1="19.5" y1="0.75" x2="22.7471" y2="34.6916" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DDDFEC"/><stop offset="1" stopColor="#414351"/>
        </linearGradient>
        <linearGradient id="ads_g2" x1="19.5" y1="0.75" x2="22.7471" y2="34.6916" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DDDFEC"/><stop offset="1" stopColor="#414351"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function NetShieldTrackersIcon() {
  return (
    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.8">
        <path fillRule="evenodd" clipRule="evenodd" d="M18.4728 0.337757C18.3183 -0.112585 17.6814 -0.112586 17.5269 0.337756L14.9972 7.71193C14.8892 8.02678 14.5095 8.15017 14.237 7.95893L7.85603 3.48003C7.46634 3.2065 6.95107 3.58086 7.09079 4.03601L9.37865 11.4888C9.47633 11.807 9.24164 12.13 8.90882 12.1354L1.11384 12.2626C0.637801 12.2703 0.440984 12.8761 0.821545 13.1622L7.05308 17.8468C7.31914 18.0468 7.31915 18.4461 7.05308 18.6461L0.821546 23.3308C0.440985 23.6169 0.637801 24.2226 1.11384 24.2304L8.90882 24.3575C9.24164 24.3629 9.47633 24.686 9.37865 25.0042L7.09079 32.4569C6.95107 32.9121 7.46634 33.2864 7.85603 33.0129L14.237 28.534C14.5095 28.3428 14.8892 28.4661 14.9972 28.781L17.5269 36.1552C17.6814 36.6055 18.3183 36.6055 18.4728 36.1552L21.0025 28.781C21.1105 28.4661 21.4903 28.3428 21.7627 28.534L28.1437 33.0129C28.5334 33.2864 29.0487 32.9121 28.909 32.4569L26.6211 25.0042C26.5234 24.686 26.7581 24.3629 27.091 24.3575L34.8859 24.2304C35.362 24.2226 35.5588 23.6169 35.1782 23.3308L28.9467 18.6461C28.6806 18.4461 28.6806 18.0468 28.9467 17.8468L35.1782 13.1622C35.5588 12.8761 35.362 12.2703 34.8859 12.2626L27.091 12.1354C26.7581 12.13 26.5234 11.807 26.6211 11.4888L28.909 4.03601C29.0487 3.58086 28.5334 3.2065 28.1437 3.48002L21.7627 7.95893C21.4903 8.15017 21.1105 8.02678 21.0025 7.71193L18.4728 0.337757ZM19.1737 16.1177C19.142 16.0039 19.2193 15.8928 19.3343 15.8661C20.7627 15.5344 21.9005 15.2095 22.893 14.8357C22.9958 14.7969 23.1134 14.8358 23.1599 14.9353C23.2644 15.1588 23.3221 15.4041 23.3221 15.6615C23.3221 16.7018 22.3795 17.5451 21.2168 17.5451C20.2299 17.5451 19.4016 16.9376 19.1737 16.1177ZM16.6598 15.8661C16.7748 15.8928 16.8521 16.0039 16.8205 16.1177C16.5925 16.9376 15.7642 17.5451 14.7773 17.5451C13.6146 17.5451 12.672 16.7018 12.672 15.6615C12.672 15.4041 12.7297 15.1588 12.8342 14.9353C12.8807 14.8358 12.9983 14.7969 13.1011 14.8357C14.0937 15.2095 15.2314 15.5344 16.6598 15.8661ZM13.2552 19.0975C13.2552 18.9518 13.3965 18.8502 13.5359 18.8927C14.7683 19.2687 16.4475 19.7295 17.9415 19.7295C19.6606 19.7295 20.9818 19.2172 22.2299 18.7333C22.2597 18.7217 22.2895 18.7102 22.3192 18.6986C22.4615 18.6435 22.6151 18.743 22.6179 18.8955C22.619 18.9598 22.6196 19.0271 22.6196 19.0975C22.6196 20.5242 20.5274 22.7516 17.9415 22.7516C15.3556 22.7516 13.2552 20.5242 13.2552 19.0975Z" fill="url(#trk_g0)"/>
        <circle cx="13.4758" cy="4.31587" r="0.832548" transform="rotate(-18 13.4758 4.31587)" fill="#A8AABE"/>
        <circle cx="22.5239" cy="32.1655" r="0.832548" transform="rotate(-18 22.5239 32.1655)" fill="#555766"/>
        <circle cx="6.15631" cy="9.63819" r="0.832548" transform="rotate(-54 6.15631 9.63819)" fill="#9294A7"/>
        <circle cx="29.8443" cy="26.8472" r="0.832548" transform="rotate(-54 29.8443 26.8472)" fill="#696B7B"/>
        <circle cx="3.36038" cy="18.2418" r="0.832548" transform="rotate(-90 3.36038 18.2418)" fill="#777989"/>
        <circle cx="32.6404" cy="18.2418" r="0.832548" transform="rotate(-90 32.6404 18.2418)" fill="#87899A"/>
        <circle cx="6.15635" cy="26.847" r="0.832548" transform="rotate(-126 6.15635 26.847)" fill="#5F6171"/>
        <circle cx="29.8446" cy="9.63798" r="0.832548" transform="rotate(-126 29.8446 9.63798)" fill="#A4A6B9"/>
        <circle cx="13.4767" cy="32.1698" r="0.832548" transform="rotate(-162 13.4767 32.1698)" fill="#515261"/>
        <circle cx="22.5248" cy="4.32018" r="0.832548" transform="rotate(-162 22.5248 4.32018)" fill="#ADAFC3"/>
      </g>
      <defs>
        <linearGradient id="trk_g0" x1="19.4481" y1="-1.73776" x2="23.944" y2="37.4276" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DDDFEC"/><stop offset="1" stopColor="#414351"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function NetShieldDataIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.8">
        <path d="M3 5.72727C3 4.22104 4.22104 3 5.72727 3H13.9091C15.4153 3 16.6364 4.22104 16.6364 5.72727V13.9091C16.6364 15.4153 15.4153 16.6364 13.9091 16.6364H5.72727C4.22104 16.6364 3 15.4153 3 13.9091V5.72727Z" fill="url(#data_g0)"/>
        <path d="M19.3636 22.0909C19.3636 20.5847 20.5847 19.3636 22.0909 19.3636H30.2727C31.779 19.3636 33 20.5847 33 22.0909V30.2727C33 31.779 31.779 33 30.2727 33H22.0909C20.5847 33 19.3636 31.779 19.3636 30.2727V22.0909Z" fill="url(#data_g1)"/>
        <path d="M19.3636 9.81818C19.3636 9.06507 19.9742 8.45455 20.7273 8.45455H26.1818C26.9349 8.45455 27.5455 9.06507 27.5455 9.81818V15.2727C27.5455 16.0258 26.9349 16.6364 26.1818 16.6364H20.7273C19.9742 16.6364 19.3636 16.0258 19.3636 15.2727V9.81818Z" fill="url(#data_g2)"/>
        <path d="M8.45455 20.7273C8.45455 19.9742 9.06507 19.3636 9.81818 19.3636H15.2727C16.0258 19.3636 16.6364 19.9742 16.6364 20.7273V26.1818C16.6364 26.9349 16.0258 27.5455 15.2727 27.5455H9.81818C9.06507 27.5455 8.45455 26.9349 8.45455 26.1818V20.7273Z" fill="url(#data_g3)"/>
      </g>
      <defs>
        <linearGradient id="data_g0" x1="19.25" y1="1.57143" x2="22.7745" y2="33.8073" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DDDFEC"/><stop offset="1" stopColor="#414351"/>
        </linearGradient>
        <linearGradient id="data_g1" x1="19.25" y1="1.57143" x2="22.7745" y2="33.8073" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DDDFEC"/><stop offset="1" stopColor="#414351"/>
        </linearGradient>
        <linearGradient id="data_g2" x1="19.25" y1="1.57143" x2="22.7745" y2="33.8073" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DDDFEC"/><stop offset="1" stopColor="#414351"/>
        </linearGradient>
        <linearGradient id="data_g3" x1="19.25" y1="1.57143" x2="22.7745" y2="33.8073" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DDDFEC"/><stop offset="1" stopColor="#414351"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// ic-shield-filled 16px — exact Figma asset (#2CFFCC fill)
function ShieldFilledIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.00032 2.02889L3.07028 3.72337C2.90935 5.50687 2.99321 7.38287 3.657 9.12626C4.32749 10.8872 5.61511 12.5818 8.0003 13.9276C10.3852 12.5819 11.6726 10.8873 12.343 9.1263C13.0067 7.38289 13.0906 5.50688 12.9297 3.72333L8.00032 2.02889ZM7.83875 1.027L2.43988 2.88262C2.25841 2.945 2.12788 3.10594 2.1074 3.29786C1.68939 7.21514 2.27767 11.9902 7.771 14.9428C7.91285 15.0191 8.08782 15.0191 8.22966 14.9428C13.7224 11.9902 14.3104 7.21515 13.8926 3.29787C13.8722 3.10595 13.7416 2.94499 13.5602 2.88261L8.16191 1.02701C8.05716 0.991 7.9435 0.990998 7.83875 1.027ZM4.22168 4.20315L7.89253 2.87768C7.96236 2.85197 8.03813 2.85197 8.10797 2.87769L11.7784 4.20312C11.8994 4.24768 11.9864 4.36265 12 4.49974C12.2785 7.29779 11.8149 10.7085 8.15313 12.8175C8.05857 12.872 7.94192 12.872 7.84736 12.8176C4.18512 10.7085 3.72135 7.29781 4.00003 4.49974C4.01368 4.36266 4.1007 4.2477 4.22168 4.20315Z" fill="#2CFFCC"/>
    </svg>
  );
}

// ic-chevron-down-filled 16px — exact Figma asset
function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M7.58831 9.84556L4.13736 6.72013C3.84393 6.45438 4.05175 6 4.46671 6H11.5333C11.9483 6 12.1561 6.45438 11.8626 6.72013L8.41169 9.84556C8.18432 10.0515 7.81568 10.0515 7.58831 9.84556Z" fill="white" fillOpacity="0.7"/>
    </svg>
  );
}

// ─── Hand-crafted icons for other flyouts ─────────────────────────────────────

function InfoCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <circle cx="8" cy="8" r="6.5" fill="rgba(255,255,255,0.7)"/>
      <rect x="7.25" y="7" width="1.5" height="4.5" rx="0.75" fill="#16141c"/>
      <circle cx="8" cy="5" r="0.875" fill="#16141c"/>
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 cursor-pointer">
      <rect x="5.5" y="5.5" width="8" height="9" rx="1.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>
      <path d="M10 5.5V4C10 3.17 9.33 2.5 8.5 2.5H3.5C2.67 2.5 2 3.17 2 4V10C2 10.83 2.67 11.5 3.5 11.5H5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function ActiveDotIcon() {
  return (
    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <g opacity="0.8">
        <rect opacity="0.3" y="4" width="16" height="16" rx="4" fill="#2CFFCC"/>
        <rect x="4" y="8" width="8" height="8" rx="2" fill="#2CFFCC"/>
      </g>
    </svg>
  );
}

// ─── Shared primitives ────────────────────────────────────────────────────────

const font = '"Segoe UI Variable", "Segoe UI", Inter, system-ui, sans-serif';

function Divider() {
  return <div className="w-full" style={{ height: "1px", background: "rgba(255,255,255,0.1)" }} />;
}

function Header({ title, status }: { title: string; status: "On" | "Off" }) {
  return (
    // layout_Z9EYPU: row, justify-between, align-center, gap 16px, fill width
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "16px", width: "100%" }}>
      {/* Body/Body Strong: 14px 600 white */}
      <span style={{ fontFamily: font, fontWeight: 600, fontSize: "14px", lineHeight: "20px", color: "#FFFFFF" }}>
        {title}
      </span>
      {/* Button: layout_KBVZNH — row, center, gap 4px, padding 4px, border-radius 4px */}
      <button style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "4px", padding: "4px", borderRadius: "4px", background: "transparent", border: "none", cursor: "pointer" }}
        className="hover:bg-[rgba(255,255,255,0.1)] transition-colors">
        {/* "On"/"Off": Body/Body Strong, rgba(255,255,255,0.7) */}
        <span style={{ fontFamily: font, fontWeight: 600, fontSize: "14px", lineHeight: "20px", color: "rgba(255,255,255,0.7)" }}>
          {status}
        </span>
        <ChevronDownIcon />
      </button>
    </div>
  );
}

// ─── NetShield flyout ─────────────────────────────────────────────────────────

function StatColumn({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  // layout_3YNU9F: row, align-center, gap 8px, hug
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
      {/* Icon 36×36 */}
      <div style={{ width: "36px", height: "36px", flexShrink: 0 }}>{icon}</div>
      {/* layout_ATWH27: column, fixed width 99.33px, hug height */}
      <div style={{ display: "flex", flexDirection: "column", width: "99.33px" }}>
        {/* Body/Body Large Strong: 18px 600 white CENTER */}
        <span style={{ fontFamily: font, fontWeight: 600, fontSize: "18px", lineHeight: "24px", color: "#FFFFFF", textAlign: "left" }}>
          {value}
        </span>
        {/* Caption/Caption Strong: 12px 600 rgba(255,255,255,0.7) LEFT, fill width */}
        <span style={{ fontFamily: font, fontWeight: 600, fontSize: "12px", lineHeight: "16px", color: "rgba(255,255,255,0.7)", textAlign: "left", width: "100%" }}>
          {label}
        </span>
      </div>
    </div>
  );
}

function NetShieldFlyout() {
  return (
    <>
      <Header title="NetShield" status="On" />
      <Divider />
      {/* layout_90RXAK: column, gap 16px, fill width */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
        <StatColumn icon={<NetShieldAdsIcon />} value="21" label="Ads blocked" />
        <StatColumn icon={<NetShieldTrackersIcon />} value="14" label="Trackers stopped" />
        <StatColumn icon={<NetShieldDataIcon />} value="1.5 MB" label="Data saved" />
      </div>
      <Divider />
      {/* layout_HF4L05: row, gap 8px, width 227px */}
      <div style={{ display: "flex", flexDirection: "row", gap: "8px", width: "227px" }}>
        <ShieldFilledIcon />
        {/* Body/Body: 14px 400 white, fixed 203px */}
        <span style={{ fontFamily: font, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#FFFFFF", width: "203px" }}>
          You're protected from ads, trackers, and malware
        </span>
      </div>
    </>
  );
}

// ─── Kill switch flyout ───────────────────────────────────────────────────────

function KillSwitchFlyout() {
  return (
    <>
      <Header title="Kill switch" status="Off" />
      <Divider />
      <div style={{ display: "flex", flexDirection: "row", gap: "8px", width: "227px" }}>
        <InfoCircleIcon />
        <span style={{ fontFamily: font, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#FFFFFF", width: "203px" }}>
          Your IP address could be exposed if your VPN connection drops
        </span>
      </div>
    </>
  );
}

// ─── Port forwarding flyout ───────────────────────────────────────────────────

function PortForwardingFlyout() {
  return (
    <>
      <Header title="Port forwarding" status="On" />
      <Divider />
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
        <span style={{ fontFamily: font, fontWeight: 600, fontSize: "12px", lineHeight: "16px", color: "rgba(255,255,255,0.7)" }}>
          Active port number
        </span>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "8px" }}>
          <ActiveDotIcon />
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <span style={{ fontFamily: font, fontWeight: 600, fontSize: "18px", lineHeight: "24px", color: "#FFFFFF" }}>36528</span>
              <CopyIcon />
            </div>
            <span style={{ fontFamily: font, fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "rgba(255,255,255,0.7)" }}>
              Updated 35 minutes ago
            </span>
          </div>
        </div>
      </div>
      <Divider />
      <div style={{ display: "flex", flexDirection: "row", gap: "8px", width: "227px" }}>
        <InfoCircleIcon />
        <span style={{ fontFamily: font, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#FFFFFF", width: "203px" }}>
          Enter the active port number into your torrent client or P2P app for enhanced performance.
        </span>
      </div>
    </>
  );
}

// ─── Split tunneling flyout ───────────────────────────────────────────────────

function SplitTunnelingFlyout() {
  return (
    <>
      <Header title="Split tunneling" status="Off" />
      <Divider />
      <div style={{ display: "flex", flexDirection: "row", gap: "8px", width: "227px" }}>
        <InfoCircleIcon />
        <span style={{ fontFamily: font, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#FFFFFF", width: "203px" }}>
          Allows trusted apps and IP addresses to connect without VPN protection
        </span>
      </div>
    </>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function VpnFeatureFlyout({ feature, onMouseEnter, onMouseLeave }: Props) {
  const content = {
    netshield: <NetShieldFlyout />,
    killswitch: <KillSwitchFlyout />,
    portforwarding: <PortForwardingFlyout />,
    splittunneling: <SplitTunnelingFlyout />,
  }[feature];

  return (
    // layout_E83O8H: column, gap 16px, padding 12px, width 250px fixed, hug height
    // fill_PD2VAD: rgba(22,20,28,0.4), effect_1PFO69: backdrop-blur(60px)
    // stroke_1X0SU7: 1px rgba(255,255,255,0.2), border-radius 8px
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="font-segoe-ui"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "12px",
        width: "250px",
        borderRadius: "8px",
        background: "rgba(22, 20, 28, 0.4)",
        backdropFilter: "blur(60px)",
        WebkitBackdropFilter: "blur(60px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxSizing: "border-box",
        pointerEvents: "auto",
      }}
    >
      {content}
    </div>
  );
}
