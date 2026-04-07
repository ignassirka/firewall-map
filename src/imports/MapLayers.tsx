import { useState } from "react";
import svgPaths from "./svg-p9prbcfvot";
import type { MapLayerOption } from "./RightVpnFeatures";
import ProtonPrivacyScore from "./ProtonPrivacyScore";
import SurveillanceAlliances from "./SurveillanceAlliances";
import IspRegulations from "./IspRegulations";
import Identity from "./Identity";
import P2P from "./P2P";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

type LayerItemProps = {
  id: MapLayerOption;
  label: string;
  selected: boolean;
  onSelect: (id: MapLayerOption) => void;
  children: React.ReactNode;
  coloredIcon?: React.ReactNode;
};

function LayerItem({ id, label, selected, onSelect, children, coloredIcon }: LayerItemProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`relative rounded-[4px] shrink-0 w-full cursor-pointer transition-colors duration-150 ${
        selected
          ? "bg-[rgba(255,255,255,0.2)]"
          : hovered
          ? "bg-[rgba(255,255,255,0.08)]"
          : "bg-[rgba(255,255,255,0.05)]"
      }`}
      onClick={() => onSelect(id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {selected && (
        <div
          aria-hidden="true"
          className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[6px]"
        />
      )}
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          {selected && coloredIcon ? (
            <div className="relative shrink-0 size-[20px]">{coloredIcon}</div>
          ) : children}
          <div
            style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: selected ? "'fina', 'init'" : "'rclt' 0" }}
            className={`flex flex-col justify-center leading-[0] relative shrink-0 text-[14px] text-left ${
              selected
                ? "font-['Segoe_UI_Variable',sans-serif] font-semibold text-white"
                : "font-['Segoe_UI_Variable',sans-serif] font-normal text-[rgba(255,255,255,0.7)]"
            }`}
          >
            <p className="leading-[20px]">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

type MapLayersProps = {
  selectedLayer?: MapLayerOption;
  onSelectLayer?: (layer: MapLayerOption) => void;
};

export default function MapLayers({ selectedLayer = "none", onSelectLayer }: MapLayersProps) {
  return (
    <div
      className="font-segoe-ui backdrop-blur-[30px] bg-[rgba(22,20,28,0.4)] content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[8px] w-full"
      data-name="Map layers"
    >
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
        <div className="flex flex-[1_0_0] flex-col font-semibold justify-end leading-[0] min-h-px min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'fina', 'init'" }}>
          <p className="leading-[20px]">Map layers</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        {/* None */}
        <LayerItem id="none" label="None" selected={selectedLayer === "none"} onSelect={onSelectLayer ?? (() => {})}>
          <div className="relative shrink-0 size-[20px]" data-name="ic-circle-slash">
            <div className="absolute inset-[6.25%]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
                <path clipRule="evenodd" d={svgPaths.p3bb4ce00} fill="var(--fill-0, white)" fillOpacity="0.7" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
        </LayerItem>

        {/* Privacy score */}
        <LayerItem id="privacy-score" label="Privacy score" selected={selectedLayer === "privacy-score"} onSelect={onSelectLayer ?? (() => {})} coloredIcon={<ProtonPrivacyScore />}>
          <Wrapper1>
            <g id="proton-privacy score">
              <path d={svgPaths.p138368f0} fill="url(#paint0_linear_2008_175)" id="Union" />
              <g id="Intersect">
                <path d={svgPaths.p320f0600} fill="url(#paint1_linear_2008_175)" />
                <path d={svgPaths.p320f0600} fill="var(--fill-1, white)" fillOpacity="0.5" />
              </g>
              <g id="Intersect_2">
                <path d={svgPaths.pb775f80} fill="url(#paint2_linear_2008_175)" />
                <path d={svgPaths.pb775f80} fill="var(--fill-1, white)" fillOpacity="0.5" />
              </g>
              <path d={svgPaths.p138368f0} fill="url(#paint3_radial_2008_175)" fillOpacity="0.7" id="Union_2" />
              <path d={svgPaths.p138368f0} fill="url(#paint4_linear_2008_175)" fillOpacity="0.4" id="Union_3" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2008_175" x1="19.008" x2="12.739" y1="19.0802" y2="-1.47707">
                <stop stopColor="#43414B" />
                <stop offset="1" stopColor="#A39FB5" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2008_175" x1="-2.14288" x2="3.39115" y1="-1.07088" y2="12.9011">
                <stop stopColor="#43414B" />
                <stop offset="1" stopColor="#A39FB5" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2008_175" x1="18.4326" x2="15.2981" y1="19.1827" y2="8.90404">
                <stop stopColor="#43414B" />
                <stop offset="1" stopColor="#A39FB5" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(6.02381 -8.35714 7.07143 7.11905 8.95235 11.5482)" gradientUnits="userSpaceOnUse" id="paint3_radial_2008_175" r="1">
                <stop offset="0.723958" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.8" />
              </radialGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_2008_175" x1="9.99996" x2="9.99996" y1="7.50064" y2="19.2863">
                <stop stopOpacity="0" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </Wrapper1>
        </LayerItem>

        {/* Surveillance alliances */}
        <LayerItem id="surveillance" label="Surveillance alliances" selected={selectedLayer === "surveillance"} onSelect={onSelectLayer ?? (() => {})} coloredIcon={<SurveillanceAlliances />}>
          <Wrapper1>
            <g id="surveillance-alliances">
              <g id="Union">
                <path d={svgPaths.p2b847cb0} fill="url(#paint0_linear_2008_168)" />
                <path d={svgPaths.p2ce966c0} fill="url(#paint1_linear_2008_168)" />
              </g>
              <g id="Union_2">
                <path d={svgPaths.p2b847cb0} fill="url(#paint2_linear_2008_168)" fillOpacity="0.4" />
                <path d={svgPaths.p2ce966c0} fill="url(#paint3_linear_2008_168)" fillOpacity="0.4" />
              </g>
              <g id="Union_3">
                <path d={svgPaths.p2b847cb0} fill="url(#paint4_radial_2008_168)" fillOpacity="0.7" />
                <path d={svgPaths.p2ce966c0} fill="url(#paint5_radial_2008_168)" fillOpacity="0.7" />
              </g>
              <circle cx="10" cy="10" fill="url(#paint6_linear_2008_168)" id="Ellipse 1074" opacity="0.5" r="5" />
              <circle cx="10" cy="10" fill="var(--fill-0, white)" fillOpacity="0.7" id="Ellipse 1075" r="3.125" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2008_168" x1="21.4647" x2="18.3838" y1="16.9826" y2="0.266682">
                <stop stopColor="#43414B" />
                <stop offset="1" stopColor="#A39FB5" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2008_168" x1="21.4647" x2="18.3838" y1="16.9826" y2="0.266682">
                <stop stopColor="#43414B" />
                <stop offset="1" stopColor="#A39FB5" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2008_168" x1="10" x2="10" y1="8.07531" y2="17.1412">
                <stop stopOpacity="0" />
                <stop offset="1" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_2008_168" x1="10" x2="10" y1="8.07531" y2="17.1412">
                <stop stopOpacity="0" />
                <stop offset="1" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(7.66667 -6.42857 9 5.47619 8.66667 11.1888)" gradientUnits="userSpaceOnUse" id="paint4_radial_2008_168" r="1">
                <stop offset="0.723958" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.8" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(7.66667 -6.42857 9 5.47619 8.66667 11.1888)" gradientUnits="userSpaceOnUse" id="paint5_radial_2008_168" r="1">
                <stop offset="0.723958" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.8" />
              </radialGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_2008_168" x1="9.26471" x2="9.26471" y1="3.67647" y2="21.3158">
                <stop stopColor="#26252C" />
                <stop offset="1" stopColor="#9995AA" />
              </linearGradient>
            </defs>
          </Wrapper1>
        </LayerItem>

        {/* ISP regulations */}
        <LayerItem id="isp-regulations" label="ISP regulations" selected={selectedLayer === "isp-regulations"} onSelect={onSelectLayer ?? (() => {})} coloredIcon={<IspRegulations />}>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="isp-regulations">
            <div className="absolute inset-[10.72%_0_10.71%_0]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15.7143">
                <g id="Group 3465489">
                  <g id="Union">
                    <path d={svgPaths.p3df1cb00} fill="url(#paint0_linear_2008_145)" />
                    <path d={svgPaths.p5558100} fill="url(#paint1_linear_2008_145)" />
                    <path d={svgPaths.p119aa780} fill="url(#paint2_linear_2008_145)" />
                    <path d={svgPaths.p2af48e80} fill="url(#paint3_linear_2008_145)" />
                  </g>
                  <circle cx="9.99986" cy="7.98228" fill="url(#paint4_linear_2008_145)" id="Ellipse 1085" r="2.88462" />
                </g>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2008_145" x1="21.4647" x2="17.7624" y1="15.5399" y2="-2.72167">
                    <stop stopColor="#43414B" />
                    <stop offset="1" stopColor="#A39FB5" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2008_145" x1="21.4647" x2="17.7624" y1="15.5399" y2="-2.72167">
                    <stop stopColor="#43414B" />
                    <stop offset="1" stopColor="#A39FB5" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2008_145" x1="21.4647" x2="17.7624" y1="15.5399" y2="-2.72167">
                    <stop stopColor="#43414B" />
                    <stop offset="1" stopColor="#A39FB5" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_2008_145" x1="21.4647" x2="17.7624" y1="15.5399" y2="-2.72167">
                    <stop stopColor="#43414B" />
                    <stop offset="1" stopColor="#A39FB5" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_2008_145" x1="13.307" x2="11.6183" y1="10.8029" y2="4.25859">
                    <stop stopColor="#43414B" />
                    <stop offset="1" stopColor="#A39FB5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </LayerItem>

        {/* Identity and age verification */}
        <LayerItem id="identity" label="Identity and age verification" selected={selectedLayer === "identity"} onSelect={onSelectLayer ?? (() => {})} coloredIcon={<Identity />}>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="identity">
            <div className="absolute inset-[10.72%_0_10.71%_0]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15.7141">
                <g id="Group 3465490">
                  <g filter="url(#filter0_i_2008_182)" id="Icon">
                    <path clipRule="evenodd" d={svgPaths.p138ffc00} fill="url(#paint0_linear_2008_182)" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p37e8be80} fill="url(#paint1_linear_2008_182)" fillRule="evenodd" />
                  </g>
                  <g filter="url(#filter1_i_2008_182)" id="Icon_2">
                    <path clipRule="evenodd" d={svgPaths.p1ed09c00} fill="url(#paint2_linear_2008_182)" fillRule="evenodd" />
                  </g>
                  <g id="Group 3465471">
                    <mask height="8" id="mask0_2008_182" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="1" y="0">
                      <path d={svgPaths.p1e64d780} fill="var(--fill-0, #D9D9D9)" id="Icon_3" />
                    </mask>
                    <g mask="url(#mask0_2008_182)">
                      <rect fill="url(#paint3_linear_2008_182)" height="2.66592" id="Rectangle 2872" opacity="0.5" width="17.3333" x="1.33374" y="5.54688" />
                    </g>
                  </g>
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16.0475" id="filter0_i_2008_182" width="20" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="0.333333" />
                    <feGaussianBlur stdDeviation="0.166667" />
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                    <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2008_182" />
                  </filter>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="6.58159" id="filter1_i_2008_182" width="15" x="2.5" y="9.46094">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="0.333333" />
                    <feGaussianBlur stdDeviation="0.166667" />
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                    <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2008_182" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2008_182" x1="21.4647" x2="17.7624" y1="15.5397" y2="-2.72166">
                    <stop stopColor="#43414B" />
                    <stop offset="1" stopColor="#A39FB5" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2008_182" x1="21.4647" x2="17.7624" y1="15.5397" y2="-2.72166">
                    <stop stopColor="#43414B" />
                    <stop offset="1" stopColor="#A39FB5" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2008_182" x1="18.5986" x2="17.7953" y1="15.6398" y2="8.16663">
                    <stop stopColor="#43414B" />
                    <stop offset="1" stopColor="#A39FB5" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_2008_182" x1="10.0004" x2="10.0004" y1="5.54688" y2="8.2128">
                    <stop stopColor="#1C1B24" stopOpacity="0" />
                    <stop offset="1" stopColor="#1C1B24" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </LayerItem>

        {/* P2P and torrenting regulations */}
        <LayerItem id="p2p" label="P2P and torrenting regulations" selected={selectedLayer === "p2p"} onSelect={onSelectLayer ?? (() => {})} coloredIcon={<P2P />}>
          <Wrapper1>
            <g id="p2p">
              <path d={svgPaths.p3c770d00} fill="url(#paint0_linear_2008_160)" id="Vector" />
              <path d={svgPaths.p3cc54ac0} fill="url(#paint1_linear_2008_160)" id="Vector_2" />
              <g id="Group 3465470">
                <mask height="13" id="mask0_2008_160" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="2" y="2">
                  <path d={svgPaths.pfef800} fill="url(#paint2_linear_2008_160)" id="Vector_3" />
                </mask>
                <g mask="url(#mask0_2008_160)">
                  <rect fill="url(#paint3_linear_2008_160)" height="1.42857" id="Rectangle 2872" opacity="0.5" width="16.1461" x="1.92651" y="5.71484" />
                </g>
              </g>
              <g id="Union">
                <path d={svgPaths.p2df44100} fill="var(--fill-0, white)" fillOpacity="0.7" />
                <path d={svgPaths.p3863100} fill="var(--fill-0, white)" fillOpacity="0.7" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2008_160" x1="19.008" x2="16.5014" y1="14.1572" y2="0.800542">
                <stop stopColor="#43414B" />
                <stop offset="1" stopColor="#A39FB5" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2008_160" x1="20.6459" x2="18.9967" y1="17.0335" y2="5.16403">
                <stop stopColor="#43414B" />
                <stop offset="1" stopColor="#A39FB5" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2008_160" x1="9.06462" x2="9.06462" y1="2.30925" y2="7.19108">
                <stop stopColor="#D7AAFF" />
                <stop offset="1" stopColor="#583DA2" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_2008_160" x1="9.99955" x2="9.99955" y1="5.71484" y2="7.14342">
                <stop stopColor="#1C1B24" stopOpacity="0" />
                <stop offset="1" stopColor="#1C1B24" />
              </linearGradient>
            </defs>
          </Wrapper1>
        </LayerItem>
      </div>
    </div>
  );
}