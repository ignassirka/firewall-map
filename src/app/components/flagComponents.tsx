import React from "react";

// ─── Country name → ISO 2-letter code mapping ────────────────────────────────

const countryToIso: Record<string, string> = {
  Albania: "al", Algeria: "dz", Angola: "ao", Argentina: "ar", Armenia: "am",
  Australia: "au", Austria: "at", Azerbaijan: "az", Bangladesh: "bd", Belarus: "by",
  Belgium: "be", Bolivia: "bo", "Bosnia and Herzegovina": "ba", Brazil: "br", Bulgaria: "bg",
  Cambodia: "kh", Cameroon: "cm", Canada: "ca", Chile: "cl", China: "cn",
  Colombia: "co", "Costa Rica": "cr", Croatia: "hr", Cyprus: "cy", "Czech Republic": "cz",
  Denmark: "dk", Ecuador: "ec", Egypt: "eg", "El Salvador": "sv", Estonia: "ee",
  Finland: "fi", France: "fr", Georgia: "ge", Germany: "de", Ghana: "gh",
  Greece: "gr", Honduras: "hn", "Hong Kong": "hk", Hungary: "hu", Iceland: "is",
  India: "in", Indonesia: "id", Iran: "ir", Ireland: "ie", "Isle of Man": "im",
  Israel: "il", Italy: "it", Japan: "jp", Kazakhstan: "kz", Kenya: "ke",
  Latvia: "lv", Lithuania: "lt", Luxembourg: "lu", Malaysia: "my", Mexico: "mx",
  Moldova: "md", Mongolia: "mn", Morocco: "ma", Netherlands: "nl", "New Zealand": "nz",
  Nigeria: "ng", "North Macedonia": "mk", Norway: "no", Pakistan: "pk", Panama: "pa",
  Peru: "pe", Philippines: "ph", Poland: "pl", Portugal: "pt", Romania: "ro",
  Russia: "ru", "Saudi Arabia": "sa", Senegal: "sn", Serbia: "rs", Singapore: "sg",
  Slovakia: "sk", Slovenia: "si", "South Africa": "za", "South Korea": "kr", Spain: "es",
  "Sri Lanka": "lk", Sweden: "se", Switzerland: "ch", Taiwan: "tw", Thailand: "th",
  Turkey: "tr", Ukraine: "ua", "United Arab Emirates": "ae", "United Kingdom": "gb",
  "United States": "us", Uruguay: "uy", Venezuela: "ve", Vietnam: "vn",
};

export function getIsoCode(countryName: string): string | null {
  return countryToIso[countryName] ?? null;
}

/**
 * Returns the flagcdn.com SVG URL for a country.
 * SVGs scale perfectly at any size, preserving detail like
 * the Belarus ornamental pattern, Swiss cross, UK union jack, etc.
 */
export function getFlagUrl(countryName: string): string | null {
  const iso = countryToIso[countryName];
  if (!iso) return null;
  return `https://flagcdn.com/${iso}.svg`;
}

// ─── React flag component ────────────────────────────────────────────────────

interface FlagProps {
  name: string;
  size?: "sm" | "lg";
}

/**
 * Renders a CDN-hosted flag image with rounded corners.
 * sm = 30x20, lg = 40x26 (matches previous FlagWrapper sizes).
 */
export function Flag({ name, size = "sm" }: FlagProps) {
  const url = getFlagUrl(name);
  const w = size === "lg" ? 40 : 30;
  const h = size === "lg" ? 26 : 20;

  if (!url) {
    return (
      <div
        className="shrink-0 rounded-[4px] bg-[rgba(255,255,255,0.12)]"
        style={{ width: w, height: h }}
      />
    );
  }

  return (
    <img
      src={url}
      alt={`${name} flag`}
      width={w}
      height={h}
      loading="lazy"
      className="shrink-0 rounded-[4px] object-cover"
      style={{ width: w, height: h }}
    />
  );
}

// ─── Backward-compatible lookup ──────────────────────────────────────────────

export function getFlagForCountry(name: string, size?: "sm" | "lg") {
  return <Flag name={name} size={size} />;
}