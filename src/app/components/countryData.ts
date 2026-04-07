export type RegulationLevel = "strong" | "moderate" | "poor";

export interface BulletPoint {
  bold: string;
  text: string;
}

export interface CountryData {
  name: string;
  regulationLevel: RegulationLevel;
  description: string;
  physicalPresence: BulletPoint[];
  vpnConnection: BulletPoint[];
  moreDetails: BulletPoint[];
  lastUpdated: string;
  sourcesCount: number;
}

const countries: CountryData[] = [
  // ── Strong regulations ────────────────────────────────────────────
  {
    name: "France",
    regulationLevel: "strong",
    description:
      "France has strong data protection laws under GDPR and the national CNIL framework. ISPs are required to be transparent about data collection and face significant penalties for misuse.",
    physicalPresence: [
      { bold: "Strong privacy rules for companies:", text: " most apps and services must handle your data carefully and with explicit consent." },
      { bold: "CNIL oversight:", text: " France's data protection authority actively enforces privacy regulations and investigates violations." },
      { bold: "Targeted government access:", text: " authorities can request data through legal procedures with judicial oversight." },
    ],
    vpnConnection: [
      { bold: "EU streaming catalog:", text: " French Netflix, Canal+, and regional catch-up TV (France Télévisions) all become accessible." },
      { bold: "Open browsing:", text: " Google, YouTube, and all major social platforms work without blocks or throttling." },
      { bold: "Localized experience:", text: " sites default to French language and pricing; EU cookie consent flows appear across most pages." },
    ],
    moreDetails: [
      { bold: "Data retention law:", text: " ISPs must retain metadata for up to one year for law enforcement purposes." },
      { bold: "Net neutrality:", text: " France enforces strong net neutrality rules preventing ISP throttling of VPN traffic." },
      { bold: "GDPR enforcement:", text: " France was one of the first countries to issue major GDPR fines against tech companies." },
    ],
    lastUpdated: "2026-01-07",
    sourcesCount: 5,
  },
  {
    name: "Germany",
    regulationLevel: "strong",
    description:
      "Germany is generally a privacy-friendly place to use the internet. It has strong rules that limit how companies can use your data, and there's real oversight.",
    physicalPresence: [
      { bold: "Strong privacy rules for companies:", text: " most apps and services are expected to handle your data carefully and transparently." },
      { bold: "Targeted government access:", text: " in serious cases, authorities can request data through legal procedures." },
    ],
    vpnConnection: [
      { bold: "German streaming catalog:", text: " German Netflix, Amazon Prime DE, and ARD/ZDF Mediathek all become accessible." },
      { bold: "YouTube music gaps:", text: " some music videos are geo-blocked in Germany due to GEMA licensing — expect occasional missing tracks." },
      { bold: "Open internet otherwise:", text: " all major services and social media work normally with no government filtering." },
    ],
    moreDetails: [
      { bold: "BfDI oversight:", text: " Germany's Federal Commissioner for Data Protection enforces compliance rigorously." },
      { bold: "Historical awareness:", text: " Germany's history makes it particularly sensitive to surveillance and privacy issues." },
      { bold: "Data minimization:", text: " companies operating in Germany must collect only the minimum data necessary." },
    ],
    lastUpdated: "2026-01-07",
    sourcesCount: 5,
  },
  {
    name: "Switzerland",
    regulationLevel: "strong",
    description:
      "Switzerland is renowned for its strict privacy laws and banking secrecy traditions. It maintains strong data protection frameworks that go beyond EU GDPR standards.",
    physicalPresence: [
      { bold: "Federal Data Protection Act:", text: " Switzerland's nFADP law provides comprehensive protections for personal data." },
      { bold: "Non-EU but aligned:", text: " Switzerland maintains EU-equivalent data protection standards while operating independently." },
      { bold: "Strong secrecy tradition:", text: " privacy is culturally and legally embedded in Swiss institutions." },
    ],
    vpnConnection: [
      { bold: "Swiss streaming access:", text: " SRF Play, Swiss Netflix, and regional catch-up TV become available." },
      { bold: "Trusted financial IP:", text: " banking and payment sites respond favorably to Swiss-origin traffic — minimal fraud flags." },
      { bold: "Unrestricted browsing:", text: " no content blocks anywhere; all major services, social media, and platforms work fully." },
    ],
    moreDetails: [
      { bold: "Outside EU but cooperative:", text: " Switzerland cooperates with international law enforcement through formal legal channels only." },
      { bold: "Political neutrality:", text: " Switzerland's neutrality extends to its approach to internet governance." },
      { bold: "ProtonMail home:", text: " Switzerland hosts several major privacy-focused technology companies." },
    ],
    lastUpdated: "2026-01-15",
    sourcesCount: 6,
  },
  {
    name: "United Kingdom",
    regulationLevel: "strong",
    description:
      "The UK has strong data protection law via UK GDPR and the ICO, though it also maintains one of the broader surveillance frameworks in Europe through the Investigatory Powers Act.",
    physicalPresence: [
      { bold: "UK GDPR protection:", text: " post-Brexit, the UK retained GDPR-equivalent protections for personal data." },
      { bold: "ICO enforcement:", text: " the Information Commissioner's Office actively investigates and fines data protection violations." },
      { bold: "Investigatory Powers Act:", text: " bulk surveillance powers exist for national security purposes under judicial oversight." },
    ],
    vpnConnection: [
      { bold: "British streaming unlocked:", text: " BBC iPlayer, ITVX, Channel 4, and Sky Go all become accessible with a UK IP." },
      { bold: "Open internet:", text: " Google, YouTube, and all social media work without restriction." },
      { bold: "Age-gating on some services:", text: " UK platforms may prompt for age verification on adult content under the Online Safety Act." },
    ],
    moreDetails: [
      { bold: "Online Safety Act:", text: " the UK's Online Safety Act introduces content moderation requirements for platforms." },
      { bold: "Age verification:", text: " certain online services must implement age verification for adult content." },
      { bold: "ICO fines:", text: " the ICO has issued significant fines to companies mishandling UK resident data." },
    ],
    lastUpdated: "2026-01-10",
    sourcesCount: 7,
  },
  {
    name: "Sweden",
    regulationLevel: "strong",
    description:
      "Sweden has strong data protection aligned with EU GDPR, a tradition of government transparency, and a well-regulated telecom sector. It is generally considered privacy-friendly.",
    physicalPresence: [
      { bold: "GDPR enforcement:", text: " Sweden's IMY (Integritetsskyddsmyndigheten) enforces EU data protection rules strictly." },
      { bold: "Transparent governance:", text: " Sweden's tradition of open government includes clear rules on data access." },
      { bold: "Strong consumer rights:", text: " consumers have robust rights to access and delete their personal data." },
    ],
    vpnConnection: [
      { bold: "Swedish streaming access:", text: " SVT Play, TV4 Play, and the Swedish Netflix catalog all become accessible." },
      { bold: "Fully open browsing:", text: " no content filtering — all global platforms, social media, and services work freely." },
      { bold: "Fast and reliable:", text: " Sweden's high-speed fiber infrastructure means consistently low latency and strong speeds." },
    ],
    moreDetails: [
      { bold: "FRA surveillance law:", text: " Sweden's FRA law allows signal intelligence collection of cross-border communications." },
      { bold: "14 Eyes member:", text: " Sweden participates in the broader intelligence sharing alliance." },
      { bold: "Data retention:", text: " ISPs must retain traffic data for 6 months under EU directives." },
    ],
    lastUpdated: "2026-01-05",
    sourcesCount: 5,
  },
  {
    name: "United States",
    regulationLevel: "strong",
    description:
      "The US has a patchwork of federal and state privacy laws. While GDPR does not apply, states like California lead with strong protections. Federal surveillance programs are broad.",
    physicalPresence: [
      { bold: "No federal privacy law:", text: " the US lacks a comprehensive federal privacy law, relying on sector-specific regulations." },
      { bold: "State-level protections:", text: " California's CCPA/CPRA gives residents significant data rights." },
      { bold: "ISP data practices:", text: " US ISPs can collect and sell browsing data unless prohibited by state law." },
    ],
    vpnConnection: [
      { bold: "Largest streaming catalog:", text: " unlocks US Netflix, Hulu, HBO Max, Peacock, and Paramount+ — the most extensive English-language content library." },
      { bold: "US-exclusive content:", text: " US-only YouTube content, Spotify podcasts, and Twitch streams all become available." },
      { bold: "Geo-security friction:", text: " banks and payment services may flag a US IP that doesn't match your billing address, requiring extra verification." },
    ],
    moreDetails: [
      { bold: "Section 702 surveillance:", text: " US intelligence agencies can collect foreign communications passing through US infrastructure." },
      { bold: "No mandatory logs:", text: " VPN providers are not required by law to keep user activity logs." },
      { bold: "National security letters:", text: " the FBI can demand data from companies without a court order using NSLs." },
    ],
    lastUpdated: "2026-01-12",
    sourcesCount: 8,
  },
  {
    name: "Australia",
    regulationLevel: "strong",
    description:
      "Australia has a Privacy Act with strong data protections but also significant government surveillance powers. The Assistance and Access Act allows compelled access to encrypted data.",
    physicalPresence: [
      { bold: "Privacy Act 1988:", text: " provides a framework for data protection enforced by the OAIC." },
      { bold: "Assistance and Access Act:", text: " authorities can compel tech companies to assist in accessing encrypted communications." },
      { bold: "Notifiable data breaches:", text: " companies must notify affected users of serious data breaches." },
    ],
    vpnConnection: [
      { bold: "Australian streaming:", text: " Stan, Binge, 9Now, 7Plus, and ABC iView all become accessible from an Australian IP." },
      { bold: "Open social media:", text: " all platforms work normally — no content filtering or government-imposed blocks." },
      { bold: "Higher latency from Europe:", text: " geographic distance from Europe and the Americas means noticeable latency if you're connecting from far away." },
    ],
    moreDetails: [
      { bold: "OAIC enforcement:", text: " the Office of the Australian Information Commissioner investigates privacy complaints." },
      { bold: "Proposed reforms:", text: " Australia is reviewing the Privacy Act to strengthen individual rights." },
      { bold: "Geoblocking:", text: " Australian ISPs were ordered to block certain piracy websites." },
    ],
    lastUpdated: "2026-01-08",
    sourcesCount: 6,
  },
  {
    name: "Netherlands",
    regulationLevel: "strong",
    description:
      "The Netherlands has strong GDPR enforcement, a proactive data protection authority (AP), and a tradition of internet freedom and open access.",
    physicalPresence: [
      { bold: "AP enforcement:", text: " the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) is one of Europe's most active regulators." },
      { bold: "Net neutrality:", text: " the Netherlands was among the first countries to enshrine net neutrality in law." },
      { bold: "GDPR compliance:", text: " Dutch companies take data protection obligations seriously." },
    ],
    vpnConnection: [
      { bold: "Dutch streaming access:", text: " NPO Start, Dutch Netflix, and regional TV platforms all become available." },
      { bold: "Excellent speeds:", text: " the Netherlands hosts the AMS-IX — one of the world's largest internet exchanges, delivering fast and reliable connections." },
      { bold: "Fully open browsing:", text: " no content blocks or filtering; all global services and social media work without restriction." },
    ],
    moreDetails: [
      { bold: "Cyber security agency:", text: " the NCSC-NL actively monitors and responds to cybersecurity threats." },
      { bold: "Digital rights advocacy:", text: " Dutch civil society is active in advocating for digital rights." },
      { bold: "Intelligence law:", text: " the 2017 Intelligence and Security Services Act allows bulk data collection under oversight." },
    ],
    lastUpdated: "2026-01-09",
    sourcesCount: 5,
  },
  {
    name: "Austria",
    regulationLevel: "strong",
    description:
      "Austria enforces GDPR strictly and has a dedicated data protection authority (DSB). The country has strong constitutional protections for privacy and communication secrecy.",
    physicalPresence: [
      { bold: "Constitutional protection:", text: " Austria's constitution explicitly protects the right to privacy and communication secrecy." },
      { bold: "DSB oversight:", text: " the Datenschutzbehörde actively handles complaints and enforcement." },
      { bold: "Strong user rights:", text: " Austrians have robust access and deletion rights over their personal data." },
    ],
    vpnConnection: [
      { bold: "ORF streaming access:", text: " ORF TVthek and Austrian streaming content become available with an Austrian IP." },
      { bold: "German-language defaults:", text: " search engines, YouTube recommendations, and ads switch to German-language content." },
      { bold: "Unrestricted internet:", text: " all major platforms and social media work without any filtering or content blocks." },
    ],
    moreDetails: [
      { bold: "Privacy culture:", text: " Austria has a strong cultural tradition of privacy and discretion." },
      { bold: "EU intelligence cooperation:", text: " Austria participates in EU-level intelligence coordination." },
      { bold: "Schrems II impact:", text: " Austria's courts were involved in landmark privacy cases affecting data transfers." },
    ],
    lastUpdated: "2026-01-06",
    sourcesCount: 4,
  },
  {
    name: "Belgium",
    regulationLevel: "strong",
    description:
      "Belgium enforces GDPR with its Data Protection Authority (GBA/APD) and has strong national data protection legislation. The country is home to many EU institutions.",
    physicalPresence: [
      { bold: "GBA/APD enforcement:", text: " Belgium's Data Protection Authority investigates violations and can impose significant fines." },
      { bold: "EU institution home:", text: " as host to EU institutions, Belgium applies the highest data protection standards." },
      { bold: "ePrivacy compliance:", text: " Belgian companies must comply with strict ePrivacy regulations." },
    ],
    vpnConnection: [
      { bold: "Belgian streaming unlocked:", text: " VRT Max, RTBF Auvio, and Belgian catch-up services all become accessible." },
      { bold: "Dual-language experience:", text: " Dutch and French content both surface depending on region and language settings." },
      { bold: "Open internet:", text: " no filtering or blocks — all global services, streaming, and social media work normally." },
    ],
    moreDetails: [
      { bold: "Intelligence service:", text: " the VSSE and SGRS operate under parliamentary oversight." },
      { bold: "Data retention:", text: " Belgian ISPs must retain data for investigative purposes under national law." },
      { bold: "Cookie enforcement:", text: " Belgium was one of the first EU countries to crack down on cookie consent violations." },
    ],
    lastUpdated: "2026-01-04",
    sourcesCount: 4,
  },
  {
    name: "Ireland",
    regulationLevel: "strong",
    description:
      "Ireland is home to the European headquarters of major tech companies and serves as the EU's primary GDPR enforcement hub for global platforms through the DPC.",
    physicalPresence: [
      { bold: "DPC enforcement:", text: " Ireland's Data Protection Commission oversees GDPR compliance for major tech firms." },
      { bold: "Tech hub:", text: " Google, Meta, Apple, and Microsoft have EU headquarters in Ireland." },
      { bold: "Strong user rights:", text: " Irish residents have full GDPR rights including data access and erasure." },
    ],
    vpnConnection: [
      { bold: "Irish streaming access:", text: " RTÉ Player and Virgin Media Player become available with an Irish IP." },
      { bold: "Transatlantic hub:", text: " Ireland's location delivers consistently low latency to both the US and mainland Europe." },
      { bold: "Unrestricted browsing:", text: " all global services, streaming platforms, and social media work without restriction." },
    ],
    moreDetails: [
      { bold: "G3 intelligence alliance:", text: " Ireland cooperates with UK intelligence agencies on certain security matters." },
      { bold: "DPC criticism:", text: " the DPC has faced criticism for slow enforcement of cases against major tech companies." },
      { bold: "Data transfer hub:", text: " much of Europe's trans-Atlantic data traffic passes through Irish infrastructure." },
    ],
    lastUpdated: "2026-01-11",
    sourcesCount: 5,
  },
  {
    name: "Iceland",
    regulationLevel: "strong",
    description:
      "Iceland consistently ranks among the world's most internet-free nations. It has strong privacy laws, no censorship, and a thriving civil liberties culture.",
    physicalPresence: [
      { bold: "IMIS oversight:", text: " Iceland's data protection authority enforces privacy rights effectively." },
      { bold: "Freedom of speech:", text: " Iceland has some of the strongest press freedom and free speech protections globally." },
      { bold: "Minimal surveillance:", text: " Iceland does not engage in mass surveillance of its citizens' internet activity." },
    ],
    vpnConnection: [
      { bold: "Icelandic content unlocked:", text: " RÚV and Icelandic streaming services become accessible." },
      { bold: "Fully open internet:", text: " no censorship, filtering, or blocks anywhere — complete access to all global platforms." },
      { bold: "Low-traffic IPs:", text: " Icelandic IP addresses are rarely flagged by anti-bot or geo-restriction systems." },
    ],
    moreDetails: [
      { bold: "IMMI initiative:", text: " Iceland proposed becoming a global haven for media freedom and whistleblowers." },
      { bold: "EEA member:", text: " Iceland participates in the European Economic Area and follows GDPR-equivalent rules." },
      { bold: "WikiLeaks connection:", text: " Iceland has historically been associated with transparency and whistleblower protection." },
    ],
    lastUpdated: "2026-01-03",
    sourcesCount: 4,
  },
  {
    name: "New Zealand",
    regulationLevel: "strong",
    description:
      "New Zealand has comprehensive data protection under the Privacy Act 2020. It is a Five Eyes member but maintains strong domestic privacy enforcement.",
    physicalPresence: [
      { bold: "Privacy Act 2020:", text: " New Zealand's updated privacy legislation strengthens data breach notification and individual rights." },
      { bold: "OPC enforcement:", text: " the Office of the Privacy Commissioner handles complaints and investigations." },
      { bold: "Mandatory breach reporting:", text: " organizations must report serious privacy breaches to the OPC and affected individuals." },
    ],
    vpnConnection: [
      { bold: "NZ streaming access:", text: " TVNZ+, Three Now, and Māori TV become available with a New Zealand IP." },
      { bold: "Open browsing:", text: " all major social media, streaming, and services work without government filtering." },
      { bold: "Latency from Europe:", text: " geographic distance creates higher latency for users not already in the Asia-Pacific region." },
    ],
    moreDetails: [
      { bold: "GCSB surveillance:", text: " the Government Communications Security Bureau conducts signals intelligence under oversight." },
      { bold: "Proposed reforms:", text: " New Zealand continues to update its privacy framework to address emerging technologies." },
      { bold: "Data sovereignty:", text: " there is increasing interest in keeping data within New Zealand's borders." },
    ],
    lastUpdated: "2026-01-06",
    sourcesCount: 5,
  },
  {
    name: "Portugal",
    regulationLevel: "strong",
    description:
      "Portugal enforces GDPR through its CNPD authority and has a constitutional right to privacy. The country has a generally open internet with minimal censorship.",
    physicalPresence: [
      { bold: "Constitutional right:", text: " Portugal's constitution enshrines the right to privacy and data protection." },
      { bold: "CNPD enforcement:", text: " the National Data Protection Commission enforces GDPR and national data laws." },
      { bold: "Open internet:", text: " Portugal maintains a largely uncensored and freely accessible internet." },
    ],
    vpnConnection: [
      { bold: "Portuguese streaming:", text: " RTP Play and Portuguese-language streaming content become accessible." },
      { bold: "Atlantic crossroads:", text: " Portugal's network position delivers solid speeds connecting to both Europe and the Americas." },
      { bold: "Open internet:", text: " no content filtering or blocks — all global services and social media work freely." },
    ],
    moreDetails: [
      { bold: "SIS intelligence:", text: " Portugal's intelligence services operate under parliamentary oversight." },
      { bold: "Data retention:", text: " Portuguese ISPs must retain traffic metadata under national legislation." },
      { bold: "Digital agenda:", text: " Portugal has active programs to promote digital literacy and online safety." },
    ],
    lastUpdated: "2026-01-05",
    sourcesCount: 4,
  },
  {
    name: "Spain",
    regulationLevel: "strong",
    description:
      "Spain enforces GDPR through the AEPD and has additional national data protection legislation. The right to privacy is constitutionally protected.",
    physicalPresence: [
      { bold: "AEPD enforcement:", text: " Spain's Agencia Española de Protección de Datos is one of Europe's most active data regulators." },
      { bold: "Constitutional protection:", text: " the Spanish constitution explicitly recognizes the right to personal data protection." },
      { bold: "Right to erasure:", text: " Spain has actively enforced the right to be forgotten against major search engines." },
    ],
    vpnConnection: [
      { bold: "Spanish streaming access:", text: " RTVE Play, ATRESplayer, and Movistar+ Spanish catalog all become available." },
      { bold: "P2P-friendly jurisdiction:", text: " personal file downloading is legally tolerated — torrenting for personal use is permitted in Spain." },
      { bold: "Open browsing:", text: " all social media and major global services work without restriction." },
    ],
    moreDetails: [
      { bold: "CNI oversight:", text: " Spain's national intelligence center operates under judicial and parliamentary oversight." },
      { bold: "Gag law concerns:", text: " Spain's Citizens' Security Law has raised concerns about freedom of expression online." },
      { bold: "Data retention:", text: " Spanish ISPs must retain traffic data for 12 months under national law." },
    ],
    lastUpdated: "2026-01-07",
    sourcesCount: 5,
  },

  // ── Moderate protection ───────────────────────────────────────────
  {
    name: "Canada",
    regulationLevel: "moderate",
    description:
      "Canada has federal and provincial privacy laws offering moderate protection. As a Five Eyes member, intelligence sharing with allies can affect user privacy.",
    physicalPresence: [
      { bold: "PIPEDA compliance:", text: " federal law requires organizations to handle personal data responsibly with consent." },
      { bold: "Provincial laws:", text: " Quebec's Law 25 provides some of the strongest provincial data protections in Canada." },
      { bold: "Limited ISP regulation:", text: " Canadian ISPs have more latitude in data collection than EU counterparts." },
    ],
    vpnConnection: [
      { bold: "Canadian streaming catalog:", text: " Crave, CBC Gem, and the Canadian Netflix and Prime Video catalogs become accessible." },
      { bold: "Open internet:", text: " all social media, YouTube, and major platforms work normally without filtering." },
      { bold: "Different from US:", text: " Canadian streaming libraries differ from the US — some content is Canada-exclusive, some US content is unavailable." },
    ],
    moreDetails: [
      { bold: "OPC oversight:", text: " the Office of the Privacy Commissioner of Canada investigates complaints." },
      { bold: "Bill C-27:", text: " Canada is updating its privacy law with the Consumer Privacy Protection Act." },
      { bold: "Lawful access:", text: " law enforcement can access certain subscriber data without a warrant." },
    ],
    lastUpdated: "2026-01-08",
    sourcesCount: 5,
  },
  {
    name: "Japan",
    regulationLevel: "moderate",
    description:
      "Japan has a comprehensive data protection law (APPI) updated in 2022. It maintains moderate privacy protections with a growing focus on data subjects' rights.",
    physicalPresence: [
      { bold: "APPI compliance:", text: " the Act on the Protection of Personal Information governs data handling by businesses." },
      { bold: "PPC oversight:", text: " the Personal Information Protection Commission enforces privacy law." },
      { bold: "Consent requirements:", text: " third-party data sharing requires explicit user consent under Japanese law." },
    ],
    vpnConnection: [
      { bold: "Japanese content unlocked:", text: " Niconico, AbemaTV, and region-locked anime and manga services all become accessible." },
      { bold: "Japanese streaming catalogs:", text: " Japanese Netflix and Amazon Prime Video carry regional exclusives not available elsewhere." },
      { bold: "Registration walls:", text: " some Japanese-only services require a local phone number or Japanese credit card to sign up." },
    ],
    moreDetails: [
      { bold: "Intelligence cooperation:", text: " Japan shares intelligence with the US through bilateral security agreements." },
      { bold: "Cybersecurity law:", text: " Japan enacted laws to protect critical infrastructure from cyber threats." },
      { bold: "Cross-border transfers:", text: " APPI has specific rules for transferring personal data outside Japan." },
    ],
    lastUpdated: "2026-01-09",
    sourcesCount: 5,
  },
  {
    name: "South Korea",
    regulationLevel: "moderate",
    description:
      "South Korea has one of the world's strictest data protection laws (PIPA) but also significant government surveillance capabilities in the name of national security.",
    physicalPresence: [
      { bold: "PIPA protection:", text: " the Personal Information Protection Act is among the world's most comprehensive data laws." },
      { bold: "PIPC enforcement:", text: " the Personal Information Protection Commission oversees compliance and handles violations." },
      { bold: "Strict penalties:", text: " South Korea imposes high fines and even criminal penalties for data breaches." },
    ],
    vpnConnection: [
      { bold: "Korean streaming access:", text: " Wavve, TVING, and Naver TV's Korean-exclusive content all become accessible." },
      { bold: "K-content experience:", text: " K-drama, K-pop, and Korean-language YouTube recommendations surface as defaults." },
      { bold: "Registration limits:", text: " some Korean services require a local phone number to create an account, even with a Korean IP." },
    ],
    moreDetails: [
      { bold: "Real-name system:", text: " certain platforms require real-name registration for users in South Korea." },
      { bold: "Content restrictions:", text: " North Korea-related content and gambling sites are blocked by Korean authorities." },
      { bold: "NIS oversight:", text: " the National Intelligence Service operates with limited independent oversight." },
    ],
    lastUpdated: "2026-01-06",
    sourcesCount: 5,
  },
  {
    name: "Brazil",
    regulationLevel: "moderate",
    description:
      "Brazil's LGPD (2020) introduced comprehensive data protection, but enforcement is still maturing. The country has a growing digital economy with moderate privacy standards.",
    physicalPresence: [
      { bold: "LGPD in effect:", text: " Brazil's General Data Protection Law mirrors many GDPR principles." },
      { bold: "ANPD oversight:", text: " the National Data Protection Authority is still building its enforcement capacity." },
      { bold: "Marco Civil da Internet:", text: " Brazil's internet civil rights framework protects net neutrality and user rights." },
    ],
    vpnConnection: [
      { bold: "Brazilian streaming:", text: " Globoplay, Telecine, and the Brazilian Netflix catalog all become accessible." },
      { bold: "Open social media:", text: " all major platforms work normally; no government filtering of mainstream services." },
      { bold: "Lower speeds:", text: " Brazil's infrastructure is less consistent than European counterparts — expect some latency variation." },
    ],
    moreDetails: [
      { bold: "ABIN surveillance:", text: " Brazil's intelligence agency has broad surveillance powers." },
      { bold: "Data localization:", text: " there are ongoing debates about requiring data to be stored within Brazil." },
      { bold: "Court orders:", text: " Brazilian courts have ordered platforms to remove content and hand over user data." },
    ],
    lastUpdated: "2026-01-10",
    sourcesCount: 5,
  },
  {
    name: "Mexico",
    regulationLevel: "moderate",
    description:
      "Mexico has federal data protection law (LFPDPPP) providing moderate protections, but enforcement can be inconsistent. ISP practices vary widely across providers.",
    physicalPresence: [
      { bold: "LFPDPPP coverage:", text: " Mexico's Federal Law on Protection of Personal Data governs private sector data handling." },
      { bold: "INAI oversight:", text: " the National Institute of Transparency investigates privacy complaints." },
      { bold: "Consent model:", text: " data collection requires informed consent under Mexican law." },
    ],
    vpnConnection: [
      { bold: "Mexican streaming content:", text: " ViX, Claro Video, and the Mexican Netflix and Prime Video catalogs all become accessible." },
      { bold: "Open browsing:", text: " all major social media, YouTube, and global services work without restriction." },
      { bold: "Variable speeds:", text: " internet infrastructure quality varies; urban servers perform better than rural routes." },
    ],
    moreDetails: [
      { bold: "CISEN surveillance:", text: " Mexico's intelligence agencies have broad but loosely regulated surveillance powers." },
      { bold: "Data breach response:", text: " Mexico is developing better incident response frameworks for data breaches." },
      { bold: "Telecom reform:", text: " ongoing telecom reforms aim to improve privacy protections and competition." },
    ],
    lastUpdated: "2026-01-04",
    sourcesCount: 4,
  },
  {
    name: "Argentina",
    regulationLevel: "moderate",
    description:
      "Argentina has a data protection law from 2000, currently being updated to align with modern standards. It was the first Latin American country to receive EU data adequacy status.",
    physicalPresence: [
      { bold: "Law 25.326:", text: " Argentina's personal data protection law provides foundational privacy rights." },
      { bold: "EU adequacy:", text: " Argentina holds EU data adequacy status allowing data transfers from Europe." },
      { bold: "AAIP enforcement:", text: " the Agency of Access to Public Information oversees data protection compliance." },
    ],
    vpnConnection: [
      { bold: "Argentine streaming:", text: " the Argentine Netflix, Disney+, and local streaming catalogs all become accessible." },
      { bold: "P2P-friendly:", text: " Argentina is generally permissive toward file sharing — minimal enforcement against P2P." },
      { bold: "Open internet:", text: " all social media and global services work without content filtering." },
    ],
    moreDetails: [
      { bold: "AFI intelligence:", text: " Argentina's federal intelligence agency operates under civilian oversight." },
      { bold: "Data transfer rules:", text: " cross-border data transfers require recipients to guarantee adequate protection." },
      { bold: "Privacy advocacy:", text: " strong civil society organizations advocate for digital rights in Argentina." },
    ],
    lastUpdated: "2026-01-05",
    sourcesCount: 4,
  },
  {
    name: "Turkey",
    regulationLevel: "moderate",
    description:
      "Turkey has a data protection law (KVKK) but also significant government control over internet access. Website blocks and surveillance powers create a mixed privacy environment.",
    physicalPresence: [
      { bold: "KVKK law:", text: " Turkey's Personal Data Protection Law provides a framework similar to GDPR." },
      { bold: "KVKK board:", text: " the Personal Data Protection Board oversees compliance and can impose fines." },
      { bold: "Social media regulation:", text: " major platforms must appoint Turkish representatives and store local data." },
    ],
    vpnConnection: [
      { bold: "Filtered browsing environment:", text: " many foreign news sites and social media are throttled or blocked even from Turkish exit nodes." },
      { bold: "Social media restrictions:", text: " Twitter/X and other platforms are intermittently throttled or restricted from Turkish IPs." },
      { bold: "Not a reliable exit:", text: " connecting through Turkey means you still encounter Turkish internet restrictions from this exit node." },
    ],
    moreDetails: [
      { bold: "Website blocking:", text: " Turkey blocks thousands of websites including social media during political events." },
      { bold: "MIT surveillance:", text: " Turkey's National Intelligence Organization has broad surveillance powers." },
      { bold: "Internet law 5651:", text: " Turkish internet law gives authorities broad content removal and blocking powers." },
    ],
    lastUpdated: "2026-01-08",
    sourcesCount: 6,
  },
  {
    name: "Thailand",
    regulationLevel: "moderate",
    description:
      "Thailand enacted the Personal Data Protection Act (PDPA) in 2022. While protections are growing, government surveillance and Computer Crime Act provisions limit internet freedom.",
    physicalPresence: [
      { bold: "PDPA protection:", text: " Thailand's Personal Data Protection Act came into force in 2022 with GDPR-inspired rules." },
      { bold: "PDPC oversight:", text: " the Personal Data Protection Committee enforces PDPA compliance." },
      { bold: "Computer Crime Act:", text: " broad provisions allow prosecution of online content deemed harmful to the state." },
    ],
    vpnConnection: [
      { bold: "Partial platform access:", text: " major platforms work but politically sensitive content is filtered at the national level." },
      { bold: "Thai streaming unlocked:", text: " Thai streaming services and local content become accessible with a Thai IP." },
      { bold: "Content filtering present:", text: " some content triggering lèse-majesté or political restrictions may be unavailable from Thai IPs." },
    ],
    moreDetails: [
      { bold: "Single Gateway proposal:", text: " Thailand has considered centralizing internet traffic for easier monitoring." },
      { bold: "Lèse-majesté laws:", text: " criticism of the monarchy online carries severe legal penalties." },
      { bold: "ISP cooperation:", text: " Thai ISPs cooperate with government content blocking requests." },
    ],
    lastUpdated: "2026-01-07",
    sourcesCount: 5,
  },

  // ── Poor protection ───────────────────────────────────────────────
  {
    name: "Belarus",
    regulationLevel: "poor",
    description:
      "Belarus has extensive government surveillance through its state-controlled ISP infrastructure. SORM-like systems monitor all internet traffic, and the government regularly blocks websites and restricts access during political events.",
    physicalPresence: [
      { bold: "State-controlled ISPs:", text: " Beltelecom is the sole fixed-line provider, giving the government direct control over internet infrastructure." },
      { bold: "SORM surveillance:", text: " all ISPs are required to install government surveillance equipment on their networks." },
      { bold: "Website blocking:", text: " hundreds of news, opposition, and human rights websites are blocked by authorities." },
    ],
    vpnConnection: [
      { bold: "Heavily filtered browsing:", text: " hundreds of news, opposition, and human rights sites remain blocked even from Belarusian exit nodes." },
      { bold: "No streaming value:", text: " Belarus has limited licensed streaming content — few international platforms serve Belarusian IPs." },
      { bold: "Not a recommended exit:", text: " connecting here delivers a restricted internet experience with little benefit over simply browsing from home." },
    ],
    moreDetails: [
      { bold: "Internet shutdowns:", text: " Belarus conducted a near-total internet shutdown during the 2020 protests." },
      { bold: "No independent DPA:", text: " Belarus has no independent data protection authority." },
      { bold: "Deep packet inspection:", text: " the government uses DPI technology to monitor and filter internet traffic." },
    ],
    lastUpdated: "2026-02-15",
    sourcesCount: 6,
  },
  {
    name: "Russia",
    regulationLevel: "poor",
    description:
      "Russia has significant government control over the internet through SORM surveillance, data localization laws, and widespread blocking of foreign services.",
    physicalPresence: [
      { bold: "SORM surveillance:", text: " Russian law requires ISPs to install FSB surveillance hardware on their networks." },
      { bold: "Data localization:", text: " personal data of Russian citizens must be stored on servers within Russia." },
      { bold: "Roskomnadzor control:", text: " the media regulator blocks access to thousands of foreign websites." },
    ],
    vpnConnection: [
      { bold: "Major platforms blocked:", text: " Facebook, Instagram, and Twitter/X are blocked; most Western news sites are inaccessible from Russian IPs." },
      { bold: "Russian-only streaming:", text: " Kinopoisk, IVI, and Russian-language platforms work, but most international services are unavailable." },
      { bold: "Not a practical exit:", text: " a Russian exit node severely limits your browsing — the majority of Western services won't load." },
    ],
    moreDetails: [
      { bold: "RuNet isolation:", text: " Russia has developed infrastructure to disconnect from the global internet if needed." },
      { bold: "Social media blocks:", text: " Facebook, Instagram, and Twitter/X are blocked or restricted in Russia." },
      { bold: "Telegram unblocked:", text: " after a failed blocking attempt, Telegram was unblocked and operates in Russia." },
    ],
    lastUpdated: "2026-01-12",
    sourcesCount: 7,
  },
  {
    name: "China",
    regulationLevel: "poor",
    description:
      "China operates the world's most extensive internet censorship and surveillance system, known as the Great Firewall. Most foreign platforms are blocked and VPN use is heavily restricted.",
    physicalPresence: [
      { bold: "Great Firewall:", text: " China's internet censorship system blocks thousands of foreign websites and services." },
      { bold: "Real-name registration:", text: " all internet users must register with their real identity with ISPs." },
      { bold: "Content monitoring:", text: " all online communications are monitored by government agencies." },
    ],
    vpnConnection: [
      { bold: "Deeply restricted browsing:", text: " Google, YouTube, Gmail, WhatsApp, Facebook, Twitter, and Instagram are all blocked from Chinese IPs." },
      { bold: "Chinese services only:", text: " Baidu, WeChat, Bilibili, and iQiyi work; almost no Western platforms are accessible." },
      { bold: "Not a usable exit:", text: " a Chinese exit node makes the majority of global internet services completely inaccessible." },
    ],
    moreDetails: [
      { bold: "Social credit system:", text: " online behavior can affect a citizen's social credit score in China." },
      { bold: "PIPL law:", text: " China enacted a Personal Information Protection Law in 2021 with some user rights." },
      { bold: "Government data access:", text: " Chinese law requires companies to provide all data to government upon request." },
    ],
    lastUpdated: "2026-01-14",
    sourcesCount: 8,
  },
  {
    name: "India",
    regulationLevel: "poor",
    description:
      "India passed the Digital Personal Data Protection Act in 2023 but enforcement is nascent. Government has broad surveillance powers and has ordered multiple platform shutdowns.",
    physicalPresence: [
      { bold: "DPDPA 2023:", text: " India's new data protection law is in early implementation stages." },
      { bold: "Limited enforcement:", text: " the Data Protection Board has not yet been fully constituted or operationalized." },
      { bold: "IT Act powers:", text: " the government can block websites and access user data under broad IT Act provisions." },
    ],
    vpnConnection: [
      { bold: "Indian streaming unlocked:", text: " Hotstar/Disney+ India, SonyLIV, Zee5, and the Indian Netflix catalog all become accessible." },
      { bold: "General open browsing:", text: " most global services, social media, and streaming platforms work normally from an Indian IP." },
      { bold: "Reduced server choice:", text: " major VPN providers have removed Indian servers to avoid CERT-In logging mandates — options are limited." },
    ],
    moreDetails: [
      { bold: "Internet shutdowns:", text: " India has the highest number of internet shutdowns of any country globally." },
      { bold: "Surveillance capacity:", text: " India operates the Central Monitoring System for interception of communications." },
      { bold: "Social media rules:", text: " platforms must appoint Indian grievance officers and comply with content removal orders." },
    ],
    lastUpdated: "2026-01-11",
    sourcesCount: 7,
  },
  {
    name: "Vietnam",
    regulationLevel: "poor",
    description:
      "Vietnam requires data localization, censors political content, and mandates that platforms remove content critical of the government. Online surveillance is extensive.",
    physicalPresence: [
      { bold: "Cybersecurity Law 2019:", text: " requires foreign platforms to store Vietnamese user data locally and remove content on demand." },
      { bold: "Content censorship:", text: " content critical of the government or Communist Party is routinely blocked." },
      { bold: "Political penalties:", text: " posting content critical of the government online can result in imprisonment." },
    ],
    vpnConnection: [
      { bold: "Partial platform access:", text: " Facebook and YouTube are accessible but politically sensitive content is filtered at the national level." },
      { bold: "Vietnamese content unlocked:", text: " Vietnamese streaming and local content services become available with a Vietnamese IP." },
      { bold: "Unreliable for open browsing:", text: " government filtering means certain content may be unavailable even from a Vietnamese exit node." },
    ],
    moreDetails: [
      { bold: "Social media regulation:", text: " Facebook and YouTube operate in Vietnam only after agreeing to content removal requests." },
      { bold: "PDPD decree:", text: " Vietnam's Personal Data Protection Decree provides some baseline data rights." },
      { bold: "Police monitoring:", text: " online activities are actively monitored by the Ministry of Public Security." },
    ],
    lastUpdated: "2026-01-09",
    sourcesCount: 6,
  },
  {
    name: "Iran",
    regulationLevel: "poor",
    description:
      "Iran operates one of the world's most restrictive internet environments with the National Information Network, heavy filtering, and severe penalties for circumvention.",
    physicalPresence: [
      { bold: "National filtering:", text: " Iran's national firewall blocks the majority of foreign websites and social platforms." },
      { bold: "NIN network:", text: " the National Information Network creates a domestic intranet that can operate independently." },
      { bold: "Severe penalties:", text: " using tools to bypass internet filtering can result in arrest and prosecution." },
    ],
    vpnConnection: [
      { bold: "Almost entirely blocked:", text: " Google, YouTube, WhatsApp, Instagram, and most Western services are all blocked from Iranian IPs." },
      { bold: "Iranian intranet only:", text: " only domestic Iranian services like Aparat and local platforms remain accessible." },
      { bold: "Worst-case exit node:", text: " connecting via Iran renders virtually all global internet services inaccessible — not a usable exit." },
    ],
    moreDetails: [
      { bold: "Platform blocks:", text: " WhatsApp, Instagram, Twitter, YouTube, and most Google services are blocked." },
      { bold: "Internet shutdowns:", text: " Iran has conducted complete internet shutdowns during political unrest." },
      { bold: "Telegram semi-blocked:", text: " Telegram is officially blocked but widely used through circumvention tools." },
    ],
    lastUpdated: "2026-01-10",
    sourcesCount: 6,
  },
  {
    name: "Egypt",
    regulationLevel: "poor",
    description:
      "Egypt blocks many news and human rights websites, monitors online communications extensively, and has prosecuted citizens for social media posts deemed threatening to national security.",
    physicalPresence: [
      { bold: "Website blocking:", text: " Egypt blocks thousands of news outlets, human rights, and VPN provider websites." },
      { bold: "Social media surveillance:", text: " online activity is monitored and citizens have been arrested for social media posts." },
      { bold: "NTRA control:", text: " the National Telecommunications Regulatory Authority has broad blocking authority." },
    ],
    vpnConnection: [
      { bold: "Partially blocked services:", text: " many news outlets remain blocked from Egyptian IPs; social media is generally accessible but monitored." },
      { bold: "VoIP restrictions:", text: " internet calling (WhatsApp calls, Skype) is throttled or blocked, limiting voice and video functionality." },
      { bold: "Unreliable as exit:", text: " Egyptian network filtering means some services may not work reliably from this exit node." },
    ],
    moreDetails: [
      { bold: "Cybercrime law:", text: " Egypt's cybercrime law gives authorities broad powers to block content and prosecute users." },
      { bold: "Press freedom concerns:", text: " Egypt ranks poorly on global press freedom indices due to online censorship." },
      { bold: "Data protection:", text: " Egypt lacks a comprehensive modern data protection law." },
    ],
    lastUpdated: "2026-01-08",
    sourcesCount: 5,
  },
  {
    name: "Saudi Arabia",
    regulationLevel: "poor",
    description:
      "Saudi Arabia operates significant internet censorship focusing on political dissent, LGBTQ+ content, and religious material deemed inappropriate. Online surveillance is extensive.",
    physicalPresence: [
      { bold: "CITC filtering:", text: " the Communications and IT Commission blocks politically sensitive and inappropriate content." },
      { bold: "Strict content laws:", text: " publishing or sharing content critical of the government or religion carries severe penalties." },
      { bold: "VoIP restrictions:", text: " internet calling services are restricted to protect the state telecom monopoly." },
    ],
    vpnConnection: [
      { bold: "VoIP calls blocked:", text: " WhatsApp, Skype, and FaceTime calls are restricted or blocked even from Saudi exit nodes." },
      { bold: "Filtered content:", text: " LGBTQ+, political, and religious content is blocked at the network level by Saudi IPs." },
      { bold: "Limited exit value:", text: " connecting through Saudi Arabia means encountering national filtering that restricts significant portions of the web." },
    ],
    moreDetails: [
      { bold: "PDPL enacted:", text: " Saudi Arabia's Personal Data Protection Law came into force in 2023." },
      { bold: "SDAIA oversight:", text: " the Saudi Data and Artificial Intelligence Authority oversees data protection." },
      { bold: "Surveillance technology:", text: " Saudi Arabia has invested heavily in surveillance and monitoring technology." },
    ],
    lastUpdated: "2026-01-09",
    sourcesCount: 6,
  },

  // ── Connect tab recommendations ──────────────────────────────────
  {
    name: "Latvia",
    regulationLevel: "strong",
    description:
      "Latvia has strong GDPR enforcement, is outside major surveillance alliances, and offers excellent internet infrastructure for privacy-conscious users.",
    physicalPresence: [
      { bold: "GDPR compliance:", text: " Latvia enforces EU data protection standards through its Data State Inspectorate." },
      { bold: "Baltic infrastructure:", text: " Latvia has modern, well-connected internet infrastructure." },
      { bold: "EU member state:", text: " Latvia benefits from EU-level digital rights and consumer protections." },
    ],
    vpnConnection: [
      { bold: "Full EU open internet:", text: " no content filtering — all global services, social media, and streaming platforms work without restriction." },
      { bold: "Baltic streaming access:", text: " Latvian and Baltic regional streaming content becomes accessible." },
      { bold: "Fast EU-adjacent speeds:", text: " Latvia's modern infrastructure provides good latency to both Eastern and Western Europe." },
    ],
    moreDetails: [
      { bold: "DSI enforcement:", text: " the Data State Inspectorate is the national supervisory authority." },
      { bold: "NATO member:", text: " Latvia participates in NATO cyber defense activities." },
      { bold: "Digital society:", text: " Latvia is one of the most digitally advanced countries in the EU." },
    ],
    lastUpdated: "2026-01-05",
    sourcesCount: 4,
  },
  {
    name: "Lithuania",
    regulationLevel: "strong",
    description:
      "Lithuania is a growing tech hub with strong GDPR enforcement, a proactive data protection authority, and favorable privacy jurisdiction.",
    physicalPresence: [
      { bold: "VDAI enforcement:", text: " Lithuania's State Data Protection Inspectorate actively enforces GDPR." },
      { bold: "Tech sector growth:", text: " Lithuania's growing fintech and startup ecosystem adheres to high data standards." },
      { bold: "Strong rights:", text: " Lithuanian residents have full GDPR data subject rights." },
    ],
    vpnConnection: [
      { bold: "EU open internet:", text: " all major platforms and global services work without filtering or censorship." },
      { bold: "Lithuanian content access:", text: " Lithuanian streaming services and Baltic regional content become available." },
      { bold: "Good European speeds:", text: " Lithuania's modern infrastructure offers solid connectivity across Europe." },
    ],
    moreDetails: [
      { bold: "NCSC-LT:", text: " Lithuania's national cybersecurity center maintains strong digital defenses." },
      { bold: "NATO member:", text: " Lithuania hosts NATO cyber defense exercises." },
      { bold: "Digital governance:", text: " Lithuania is a leader in e-government services in the Baltic region." },
    ],
    lastUpdated: "2026-01-04",
    sourcesCount: 4,
  },
  {
    name: "Estonia",
    regulationLevel: "strong",
    description:
      "Estonia is one of the world's most digitally advanced societies, with strong data protection and a highly transparent e-governance framework.",
    physicalPresence: [
      { bold: "AKI enforcement:", text: " Estonia's Data Protection Inspectorate is active and well-resourced." },
      { bold: "Digital identity:", text: " Estonia's e-ID system is built with privacy by design principles." },
      { bold: "Transparent government:", text: " Estonian citizens can see who has accessed their personal data." },
    ],
    vpnConnection: [
      { bold: "Fully open browsing:", text: " complete access to all global platforms and services — no filtering or content restrictions." },
      { bold: "Estonian digital services:", text: " Estonia's e-government and digital services are accessible with an Estonian IP." },
      { bold: "Reliable and fast:", text: " Estonia's advanced digital infrastructure delivers consistent speeds and low latency." },
    ],
    moreDetails: [
      { bold: "NATO Cyber Centre:", text: " Estonia hosts NATO's Cooperative Cyber Defence Centre of Excellence." },
      { bold: "X-Road infrastructure:", text: " Estonia's data exchange layer sets global standards for secure e-governance." },
      { bold: "Blockchain records:", text: " Estonia uses blockchain to secure government data records." },
    ],
    lastUpdated: "2026-01-06",
    sourcesCount: 5,
  },
  {
    name: "Finland",
    regulationLevel: "strong",
    description:
      "Finland has strong data protection, excellent digital infrastructure, and consistently ranks among the world's top countries for internet freedom and press freedom.",
    physicalPresence: [
      { bold: "Tietosuojavaltuutettu:", text: " Finland's Data Protection Ombudsman enforces GDPR rigorously." },
      { bold: "Internet as a right:", text: " Finland was the first country to declare broadband internet access a legal right." },
      { bold: "Press freedom leader:", text: " Finland consistently ranks first or second globally for press freedom." },
    ],
    vpnConnection: [
      { bold: "Finnish streaming access:", text: " Yle Areena and Finnish-language streaming content all become accessible." },
      { bold: "Completely open internet:", text: " no censorship or filtering anywhere — all social media, streaming, and global services work freely." },
      { bold: "High-speed Nordic infrastructure:", text: " Finland's world-class broadband means fast and reliable connections through Finnish servers." },
    ],
    moreDetails: [
      { bold: "SUPO intelligence:", text: " Finland's Security Intelligence Service operates under parliamentary oversight." },
      { bold: "Nordic cooperation:", text: " Finland participates in Nordic-Baltic intelligence sharing." },
      { bold: "Data retention:", text: " Finnish ISPs must retain traffic data for investigative purposes under national law." },
    ],
    lastUpdated: "2026-01-07",
    sourcesCount: 4,
  },
  {
    name: "Denmark",
    regulationLevel: "strong",
    description:
      "Denmark has strong GDPR enforcement through Datatilsynet, excellent digital infrastructure, and consistently high rankings for internet freedom.",
    physicalPresence: [
      { bold: "Datatilsynet enforcement:", text: " Denmark's data protection authority is proactive in enforcing GDPR." },
      { bold: "Digital Denmark:", text: " Denmark has one of Europe's most digitally connected populations." },
      { bold: "Strong user rights:", text: " Danish residents have full access to and control over their personal data." },
    ],
    vpnConnection: [
      { bold: "Danish streaming unlocked:", text: " DR TV and Danish streaming services become accessible with a Danish IP." },
      { bold: "Open internet:", text: " no content filtering — all global services, social media, and platforms work normally." },
      { bold: "Fast Nordic speeds:", text: " Denmark's fiber infrastructure provides high speeds and low latency across Europe." },
    ],
    moreDetails: [
      { bold: "PET intelligence:", text: " Denmark's Security and Intelligence Service operates under oversight." },
      { bold: "14 Eyes member:", text: " Denmark participates in the 14 Eyes intelligence sharing arrangement." },
      { bold: "Digital ID:", text: " Denmark's NemID/MitID system provides secure digital identity services." },
    ],
    lastUpdated: "2026-01-05",
    sourcesCount: 4,
  },
  {
    name: "Norway",
    regulationLevel: "strong",
    description:
      "Norway has robust data protection through Datatilsynet, a strong tradition of press freedom, and excellent internet infrastructure despite being outside the EU.",
    physicalPresence: [
      { bold: "Datatilsynet enforcement:", text: " Norway's Data Protection Authority enforces GDPR-equivalent rules." },
      { bold: "Outside EU, aligned:", text: " Norway follows EEA rules providing GDPR-equivalent data protection." },
      { bold: "Press freedom:", text: " Norway consistently ranks at the top of global press freedom indices." },
    ],
    vpnConnection: [
      { bold: "Norwegian streaming access:", text: " NRK TV and Norwegian catch-up services all become accessible." },
      { bold: "Fully open internet:", text: " no filtering or content restrictions — all global services work without limitation." },
      { bold: "Green infrastructure:", text: " Norway's servers run on hydroelectric power; reliable performance year-round." },
    ],
    moreDetails: [
      { bold: "PST intelligence:", text: " Norway's Police Security Service conducts domestic surveillance under oversight." },
      { bold: "14 Eyes member:", text: " Norway participates in the 14 Eyes intelligence arrangement." },
      { bold: "Data retention:", text: " Norwegian ISPs have specific data retention obligations under national security legislation." },
    ],
    lastUpdated: "2026-01-06",
    sourcesCount: 5,
  },
];

export function getCountryData(name: string): CountryData | undefined {
  return countries.find((c) => c.name === name);
}
