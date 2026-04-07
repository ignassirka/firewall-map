import clsx from "clsx";
import svgPaths from "./svg-p3f76ehjwl";
import ProtonPrivacyScore from "./ProtonPrivacyScore";
import SurveillanceAlliances from "./SurveillanceAlliances";
import IspRegulations from "./IspRegulations";
import Identity from "./Identity";
import P2P from "./P2P";
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 8" }} className={clsx("font-segoe-ui flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-white", additionalClassNames)}>
      <p className="leading-[16px]">{children}</p>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-center size-full">
      <div className="font-segoe-ui content-stretch flex flex-col gap-[4px] items-center p-[8px] relative w-full rounded-[4px] transition-colors duration-150">{children}</div>
    </div>
  );
}

function FeatureButtonBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <BackgroundImage>{children}</BackgroundImage>
    </div>
  );
}
type FeatureButtonProps = {
  className?: string;
  enabled?: "Off" | "On" | "No";
  hover?: boolean;
  showNotificationDot?: boolean;
  type?: "NetShield" | "Kill Switch" | "Port forwarding" | "Split Tunneling" | "Settings";
};

function FeatureButton({ className, enabled = "On", hover = false, showNotificationDot = true, type = "NetShield" }: FeatureButtonProps) {
  const isHoverAndKillSwitchAndOff = hover && type === "Kill Switch" && enabled === "Off";
  const isHoverAndKillSwitchAndOn = hover && type === "Kill Switch" && enabled === "On";
  const isHoverAndNetShieldAndOn = hover && type === "NetShield" && enabled === "On";
  const isHoverAndPortForwardingAndOff = hover && type === "Port forwarding" && enabled === "Off";
  const isHoverAndPortForwardingAndOn = hover && type === "Port forwarding" && enabled === "On";
  const isHoverAndSplitTunnelingAndOff = hover && type === "Split Tunneling" && enabled === "Off";
  const isHoverAndSplitTunnelingAndOn = hover && type === "Split Tunneling" && enabled === "On";
  const isKillSwitchAndIsNotHoverAndOnOrHoverAndOnOrNotHoverAndOffOr = type === "Kill Switch" && ((!hover && enabled === "On") || (hover && enabled === "On") || (!hover && enabled === "Off") || (hover && enabled === "Off"));
  const isKillSwitchAndOffAndIsFalseOrTrue = type === "Kill Switch" && enabled === "Off" && [false, true].includes(hover);
  const isKillSwitchAndOnAndIsFalseOrTrue = type === "Kill Switch" && enabled === "On" && [false, true].includes(hover);
  const isNetShieldAndIsNotHoverAndOnOrHoverAndOnOrNotHoverAndOffOrHover = type === "NetShield" && ((!hover && enabled === "On") || (hover && enabled === "On") || (!hover && enabled === "Off") || (hover && enabled === "Off"));
  const isNetShieldAndOffAndIsFalseOrTrue = type === "NetShield" && enabled === "Off" && [false, true].includes(hover);
  const isNetShieldAndOnAndIsFalseOrTrue = type === "NetShield" && enabled === "On" && [false, true].includes(hover);
  const isNotHoverAndKillSwitchAndOff = !hover && type === "Kill Switch" && enabled === "Off";
  const isNotHoverAndKillSwitchAndOn = !hover && type === "Kill Switch" && enabled === "On";
  const isNotHoverAndPortForwardingAndOff = !hover && type === "Port forwarding" && enabled === "Off";
  const isNotHoverAndPortForwardingAndOn = !hover && type === "Port forwarding" && enabled === "On";
  const isNotHoverAndSplitTunnelingAndOff = !hover && type === "Split Tunneling" && enabled === "Off";
  const isNotHoverAndSplitTunnelingAndOn = !hover && type === "Split Tunneling" && enabled === "On";
  const isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff = type === "Port forwarding" && ((hover && enabled === "On") || (!hover && enabled === "Off") || (hover && enabled === "Off"));
  const isPortForwardingAndIsNotHoverAndOnOrHoverAndOnOrNotHoverAndOffOr = type === "Port forwarding" && ((!hover && enabled === "On") || (hover && enabled === "On") || (!hover && enabled === "Off") || (hover && enabled === "Off"));
  const isPortForwardingAndOffAndIsFalseOrTrue = type === "Port forwarding" && enabled === "Off" && [false, true].includes(hover);
  const isPortForwardingAndOnAndIsFalseOrTrue = type === "Port forwarding" && enabled === "On" && [false, true].includes(hover);
  const isSettingsAndNoAndIsFalseOrTrue = type === "Settings" && enabled === "No" && [false, true].includes(hover);
  const isSplitTunnelingAndIsNotHoverAndOnOrHoverAndOnOrHoverAndOff = type === "Split Tunneling" && ((!hover && enabled === "On") || (hover && enabled === "On") || (hover && enabled === "Off"));
  const isSplitTunnelingAndIsNotHoverAndOnOrHoverAndOnOrNotHoverAndOffOr = type === "Split Tunneling" && ((!hover && enabled === "On") || (hover && enabled === "On") || (!hover && enabled === "Off") || (hover && enabled === "Off"));
  const isSplitTunnelingAndOffAndIsFalseOrTrue = type === "Split Tunneling" && enabled === "Off" && [false, true].includes(hover);
  const isSplitTunnelingAndOnAndIsFalseOrTrue = type === "Split Tunneling" && enabled === "On" && [false, true].includes(hover);
  return (
    <div className={className || `relative rounded-[4px] w-[77px]`}>
      <BackgroundImage>
        {(isNotHoverAndKillSwitchAndOn || isNotHoverAndPortForwardingAndOn || isNotHoverAndSplitTunnelingAndOn || isHoverAndKillSwitchAndOn || isHoverAndPortForwardingAndOn || isHoverAndSplitTunnelingAndOn || isNotHoverAndKillSwitchAndOff || isNotHoverAndPortForwardingAndOff || isNotHoverAndSplitTunnelingAndOff || isHoverAndKillSwitchAndOff || isHoverAndPortForwardingAndOff || isHoverAndSplitTunnelingAndOff) && (
          <>
            <div className={`relative shrink-0 size-[28px] ${isNotHoverAndPortForwardingAndOn || isNotHoverAndSplitTunnelingAndOn || isHoverAndPortForwardingAndOn || isHoverAndSplitTunnelingAndOn || isNotHoverAndPortForwardingAndOff || isNotHoverAndSplitTunnelingAndOff || isHoverAndPortForwardingAndOff || isHoverAndSplitTunnelingAndOff ? "" : "overflow-clip"}`} data-name="VPN feature">
              <div className={`absolute ${isSplitTunnelingAndOffAndIsFalseOrTrue ? "inset-[0_16.67%_-1.04%_16.67%]" : isPortForwardingAndOffAndIsFalseOrTrue ? "inset-[20.3%_-10.59%_4.17%_-10.59%]" : isSplitTunnelingAndOnAndIsFalseOrTrue ? "inset-[0_0_-1.04%_1.5%]" : isPortForwardingAndOnAndIsFalseOrTrue ? "inset-[0_-10.59%_4.17%_-10.59%]" : "contents inset-0"}`} data-name="Inner group">
                {(isNotHoverAndPortForwardingAndOn || isNotHoverAndSplitTunnelingAndOn || isHoverAndPortForwardingAndOn || isHoverAndSplitTunnelingAndOn || isNotHoverAndPortForwardingAndOff || isNotHoverAndSplitTunnelingAndOff || isHoverAndPortForwardingAndOff || isHoverAndSplitTunnelingAndOff) && (
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isHoverAndSplitTunnelingAndOff ? "0 0 21.3334 32.3334" : isNotHoverAndSplitTunnelingAndOff ? "0 0 18.6667 28.2917" : isPortForwardingAndOffAndIsFalseOrTrue ? "0 0 38.7781 24.1721" : isHoverAndPortForwardingAndOn ? "0 0 38.7781 30.6667" : isSplitTunnelingAndOnAndIsFalseOrTrue ? "0 0 31.519 32.3336" : "0 0 33.9308 26.8333"}>
                    <g id="Inner group">
                      {(isNotHoverAndPortForwardingAndOn || isHoverAndPortForwardingAndOn || isNotHoverAndSplitTunnelingAndOff || isHoverAndSplitTunnelingAndOff) && (
                        <>
                          <g filter={isHoverAndSplitTunnelingAndOff ? "url(#filter0_i_2005_1716)" : isNotHoverAndSplitTunnelingAndOff ? "url(#filter0_i_2005_1833)" : undefined} id={isSplitTunnelingAndOffAndIsFalseOrTrue ? "Subtract" : "Vector 15 (Stroke)"} opacity={isSplitTunnelingAndOffAndIsFalseOrTrue ? "0.34" : undefined}>
                            <path clipRule={isPortForwardingAndOnAndIsFalseOrTrue ? "evenodd" : undefined} d={isHoverAndSplitTunnelingAndOff ? svgPaths.p37efaf00 : isNotHoverAndSplitTunnelingAndOff ? svgPaths.p35304600 : isHoverAndPortForwardingAndOn ? svgPaths.p267de880 : svgPaths.p2c307000} fill={isHoverAndSplitTunnelingAndOff ? "url(#paint0_radial_2005_1716)" : isNotHoverAndSplitTunnelingAndOff ? "url(#paint0_radial_2005_1833)" : isHoverAndPortForwardingAndOn ? "url(#paint0_linear_2005_1699)" : "url(#paint0_linear_2005_1842)"} fillRule={isPortForwardingAndOnAndIsFalseOrTrue ? "evenodd" : undefined} />
                            {isPortForwardingAndOnAndIsFalseOrTrue && <path clipRule="evenodd" d={isHoverAndPortForwardingAndOn ? svgPaths.p267de880 : svgPaths.p2c307000} fill={isHoverAndPortForwardingAndOn ? "url(#paint1_linear_2005_1699)" : "url(#paint1_linear_2005_1842)"} fillRule="evenodd" />}
                          </g>
                          <g filter={isHoverAndSplitTunnelingAndOff ? "url(#filter1_i_2005_1716)" : isNotHoverAndSplitTunnelingAndOff ? "url(#filter1_i_2005_1833)" : undefined} id={isSplitTunnelingAndOffAndIsFalseOrTrue ? "Vector (Stroke)" : "Vector 16 (Stroke)"}>
                            <path clipRule={isPortForwardingAndOnAndIsFalseOrTrue ? "evenodd" : undefined} d={isHoverAndSplitTunnelingAndOff ? svgPaths.p3f4aff80 : isNotHoverAndSplitTunnelingAndOff ? svgPaths.p5959880 : isHoverAndPortForwardingAndOn ? svgPaths.p27686000 : svgPaths.p146c3b00} fill={isSplitTunnelingAndOffAndIsFalseOrTrue ? "var(--fill-0, #585366)" : isHoverAndPortForwardingAndOn ? "url(#paint2_linear_2005_1699)" : "url(#paint2_linear_2005_1842)"} fillRule={isPortForwardingAndOnAndIsFalseOrTrue ? "evenodd" : undefined} />
                            <path clipRule={isPortForwardingAndOnAndIsFalseOrTrue ? "evenodd" : undefined} d={isHoverAndSplitTunnelingAndOff ? svgPaths.p3f4aff80 : isNotHoverAndSplitTunnelingAndOff ? svgPaths.p5959880 : isHoverAndPortForwardingAndOn ? svgPaths.p27686000 : svgPaths.p146c3b00} fill={isHoverAndSplitTunnelingAndOff ? "url(#paint1_linear_2005_1716)" : isNotHoverAndSplitTunnelingAndOff ? "url(#paint1_linear_2005_1833)" : isHoverAndPortForwardingAndOn ? "url(#paint3_linear_2005_1699)" : "url(#paint3_linear_2005_1842)"} fillOpacity={isSplitTunnelingAndOffAndIsFalseOrTrue ? "0.5" : undefined} fillRule={isPortForwardingAndOnAndIsFalseOrTrue ? "evenodd" : undefined} />
                          </g>
                        </>
                      )}
                      {(isNotHoverAndSplitTunnelingAndOn || isHoverAndSplitTunnelingAndOn || isNotHoverAndPortForwardingAndOff || isNotHoverAndSplitTunnelingAndOff || isHoverAndPortForwardingAndOff || isHoverAndSplitTunnelingAndOff) && <path clipRule={isPortForwardingAndOffAndIsFalseOrTrue ? "evenodd" : undefined} d={isHoverAndSplitTunnelingAndOff ? svgPaths.p25883000 : isNotHoverAndSplitTunnelingAndOff ? svgPaths.p195bbb40 : isPortForwardingAndOffAndIsFalseOrTrue ? svgPaths.p9f26600 : svgPaths.p2262c100} fill={isHoverAndSplitTunnelingAndOff ? "url(#paint2_linear_2005_1716)" : isNotHoverAndSplitTunnelingAndOff ? "url(#paint2_linear_2005_1833)" : isPortForwardingAndOffAndIsFalseOrTrue ? "url(#paint0_linear_2005_1792)" : "url(#paint0_linear_2005_1802)"} fillRule={isPortForwardingAndOffAndIsFalseOrTrue ? "evenodd" : undefined} id={isPortForwardingAndOffAndIsFalseOrTrue ? "Vector 15 (Stroke)" : "Union"} />}
                      {isPortForwardingAndOnAndIsFalseOrTrue && (
                        <>
                          <g filter={isHoverAndPortForwardingAndOn ? "url(#filter0_i_2005_1699)" : "url(#filter0_i_2005_1842)"} id="Rectangle 2911">
                            <path d={isHoverAndPortForwardingAndOn ? svgPaths.pb5e7900 : svgPaths.p198416f0} fill="var(--fill-0, #46979A)" />
                          </g>
                          <g filter={isHoverAndPortForwardingAndOn ? "url(#filter1_i_2005_1699)" : "url(#filter1_i_2005_1842)"} id="Rectangle 2912">
                            <path d={isHoverAndPortForwardingAndOn ? svgPaths.p2c965580 : svgPaths.p2bac1e80} fill="var(--fill-0, #46979A)" />
                          </g>
                          <g filter={isHoverAndPortForwardingAndOn ? "url(#filter2_i_2005_1699)" : "url(#filter2_i_2005_1842)"} id="Rectangle 2906">
                            <path d={isHoverAndPortForwardingAndOn ? svgPaths.p25350400 : svgPaths.p1383dc80} fill="var(--fill-0, #585366)" />
                            <path d={isHoverAndPortForwardingAndOn ? svgPaths.p25350400 : svgPaths.p1383dc80} fill="var(--fill-1, #33DCCE)" fillOpacity="0.5" />
                          </g>
                          <g filter={isHoverAndPortForwardingAndOn ? "url(#filter3_i_2005_1699)" : "url(#filter3_i_2005_1842)"} id="Union">
                            <path d={isHoverAndPortForwardingAndOn ? svgPaths.pad68580 : svgPaths.p32415b00} fill={isHoverAndPortForwardingAndOn ? "url(#paint4_linear_2005_1699)" : "url(#paint4_linear_2005_1842)"} />
                          </g>
                          <g filter={isHoverAndPortForwardingAndOn ? "url(#filter4_i_2005_1699)" : "url(#filter4_i_2005_1842)"} id="Union_2">
                            <path d={isHoverAndPortForwardingAndOn ? svgPaths.p252e6b00 : svgPaths.p2250a900} fill={isHoverAndPortForwardingAndOn ? "url(#paint5_linear_2005_1699)" : "url(#paint5_linear_2005_1842)"} />
                          </g>
                          <g filter={isHoverAndPortForwardingAndOn ? "url(#filter5_i_2005_1699)" : "url(#filter5_i_2005_1842)"} id="Union_3">
                            <path d={isHoverAndPortForwardingAndOn ? svgPaths.p1e28f300 : svgPaths.p1e88500} fill={isHoverAndPortForwardingAndOn ? "url(#paint6_linear_2005_1699)" : "url(#paint6_linear_2005_1842)"} />
                          </g>
                          <g id="Union_4">
                            <path d={isHoverAndPortForwardingAndOn ? svgPaths.pe22e880 : svgPaths.p20b09a80} fill={isHoverAndPortForwardingAndOn ? "url(#paint7_linear_2005_1699)" : "url(#paint7_linear_2005_1842)"} />
                            <path d={isHoverAndPortForwardingAndOn ? svgPaths.pe22e880 : svgPaths.p20b09a80} fill={isHoverAndPortForwardingAndOn ? "url(#paint8_linear_2005_1699)" : "url(#paint8_linear_2005_1842)"} />
                          </g>
                          <g id="Union_5">
                            <path d={isHoverAndPortForwardingAndOn ? svgPaths.p3340cd80 : svgPaths.p35c02b00} fill={isHoverAndPortForwardingAndOn ? "url(#paint9_linear_2005_1699)" : "url(#paint9_linear_2005_1842)"} />
                            <path d={isHoverAndPortForwardingAndOn ? svgPaths.p3340cd80 : svgPaths.p35c02b00} fill={isHoverAndPortForwardingAndOn ? "url(#paint10_linear_2005_1699)" : "url(#paint10_linear_2005_1842)"} />
                          </g>
                        </>
                      )}
                      {isSplitTunnelingAndOnAndIsFalseOrTrue && (
                        <>
                          <g filter="url(#filter0_i_2005_1802)" id="Subtract" opacity="0.34">
                            <path d={svgPaths.p6f81e00} fill="url(#paint1_radial_2005_1802)" />
                          </g>
                          <g filter="url(#filter1_i_2005_1802)" id="Vector (Stroke)">
                            <path d={svgPaths.p15276500} fill="var(--fill-0, #585366)" />
                            <path d={svgPaths.p15276500} fill="url(#paint2_linear_2005_1802)" fillOpacity="0.5" />
                          </g>
                        </>
                      )}
                      {(isNotHoverAndSplitTunnelingAndOn || isHoverAndSplitTunnelingAndOn || isNotHoverAndPortForwardingAndOff || isHoverAndPortForwardingAndOff) && <path clipRule={isPortForwardingAndOffAndIsFalseOrTrue ? "evenodd" : undefined} d={isPortForwardingAndOffAndIsFalseOrTrue ? svgPaths.p3e797000 : svgPaths.p14f76f00} fill={isPortForwardingAndOffAndIsFalseOrTrue ? "url(#paint1_linear_2005_1792)" : "url(#paint3_linear_2005_1802)"} fillRule={isPortForwardingAndOffAndIsFalseOrTrue ? "evenodd" : undefined} id={isPortForwardingAndOffAndIsFalseOrTrue ? "Vector 16 (Stroke)" : "Union_2"} />}
                      {isPortForwardingAndOffAndIsFalseOrTrue && (
                        <>
                          <g filter="url(#filter0_i_2005_1792)" id="Rectangle 2911">
                            <path d={svgPaths.p1417ae00} fill="var(--fill-0, #5B576B)" />
                          </g>
                          <g filter="url(#filter1_i_2005_1792)" id="Rectangle 2912">
                            <path d={svgPaths.p2b699300} fill="var(--fill-0, #5B576B)" />
                          </g>
                          <g filter="url(#filter2_i_2005_1792)" id="Rectangle 2906">
                            <path d={svgPaths.p2a95eb00} fill="var(--fill-0, #7D7A89)" />
                            <path d={svgPaths.p2a95eb00} fill="url(#paint2_linear_2005_1792)" fillOpacity="0.6" />
                          </g>
                          <g filter="url(#filter3_i_2005_1792)" id="Union">
                            <path d={svgPaths.p2e703a00} fill="var(--fill-0, #252328)" />
                            <path d={svgPaths.p2e703a00} fill="url(#paint3_linear_2005_1792)" fillOpacity="0.4" />
                          </g>
                          <g filter="url(#filter4_i_2005_1792)" id="Union_2">
                            <path d={svgPaths.p33243000} fill="var(--fill-0, #252328)" />
                            <path d={svgPaths.p33243000} fill="url(#paint4_linear_2005_1792)" fillOpacity="0.4" />
                          </g>
                          <g filter="url(#filter5_i_2005_1792)" id="Union_3">
                            <path d={svgPaths.p102b1300} fill="var(--fill-0, #252328)" />
                            <path d={svgPaths.p102b1300} fill="url(#paint5_linear_2005_1792)" fillOpacity="0.4" />
                          </g>
                        </>
                      )}
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height={isNotHoverAndSplitTunnelingAndOff ? "16.7481" : isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "2.93333" : isSplitTunnelingAndIsNotHoverAndOnOrHoverAndOnOrHoverAndOff ? "19.0667" : "2.59259"} id={isHoverAndSplitTunnelingAndOff ? "filter0_i_2005_1716" : isNotHoverAndSplitTunnelingAndOff ? "filter0_i_2005_1833" : isPortForwardingAndOffAndIsFalseOrTrue ? "filter0_i_2005_1792" : isHoverAndPortForwardingAndOn ? "filter0_i_2005_1699" : isSplitTunnelingAndOnAndIsFalseOrTrue ? "filter0_i_2005_1802" : "filter0_i_2005_1842"} width={isNotHoverAndSplitTunnelingAndOff ? "11.2001" : isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "4" : isSplitTunnelingAndIsNotHoverAndOnOrHoverAndOnOrHoverAndOff ? "12.8001" : "3.5"} x={isHoverAndSplitTunnelingAndOff ? "4.26673" : isNotHoverAndSplitTunnelingAndOff ? "3.73335" : isPortForwardingAndOffAndIsFalseOrTrue ? "6.05554" : isHoverAndPortForwardingAndOn ? "6.0556" : isSplitTunnelingAndOnAndIsFalseOrTrue ? "14.4523" : "5.29865"} y={isNotHoverAndSplitTunnelingAndOff ? "3.5" : isPortForwardingAndOffAndIsFalseOrTrue ? "21.5054" : isHoverAndPortForwardingAndOn ? "28" : isSplitTunnelingAndIsNotHoverAndOnOrHoverAndOnOrHoverAndOff ? "4" : "24.5"}>
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy={isNotHoverAndSplitTunnelingAndOff ? "1.2963" : isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "0.266667" : isSplitTunnelingAndIsNotHoverAndOnOrHoverAndOnOrHoverAndOff ? "1.33333" : "0.259259"} />
                        <feGaussianBlur stdDeviation={isNotHoverAndSplitTunnelingAndOn || isHoverAndPortForwardingAndOn || isHoverAndSplitTunnelingAndOn || isNotHoverAndPortForwardingAndOff || isHoverAndPortForwardingAndOff || isHoverAndSplitTunnelingAndOff ? "0.333333" : "0.324074"} />
                        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                        <feColorMatrix type="matrix" values={isSplitTunnelingAndIsNotHoverAndOnOrHoverAndOnOrNotHoverAndOffOr ? "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" : "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"} />
                        <feBlend in2="shape" mode="normal" result={isHoverAndSplitTunnelingAndOff ? "effect1_innerShadow_2005_1716" : isNotHoverAndSplitTunnelingAndOff ? "effect1_innerShadow_2005_1833" : isPortForwardingAndOffAndIsFalseOrTrue ? "effect1_innerShadow_2005_1792" : isHoverAndPortForwardingAndOn ? "effect1_innerShadow_2005_1699" : isSplitTunnelingAndOnAndIsFalseOrTrue ? "effect1_innerShadow_2005_1802" : "effect1_innerShadow_2005_1842"} />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height={isNotHoverAndSplitTunnelingAndOff ? "21.4861" : isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "2.93333" : isSplitTunnelingAndIsNotHoverAndOnOrHoverAndOnOrHoverAndOff ? "24.5" : "2.59259"} id={isHoverAndSplitTunnelingAndOff ? "filter1_i_2005_1716" : isNotHoverAndSplitTunnelingAndOff ? "filter1_i_2005_1833" : isPortForwardingAndOffAndIsFalseOrTrue ? "filter1_i_2005_1792" : isHoverAndPortForwardingAndOn ? "filter1_i_2005_1699" : isSplitTunnelingAndOnAndIsFalseOrTrue ? "filter1_i_2005_1802" : "filter1_i_2005_1842"} width={isNotHoverAndSplitTunnelingAndOff ? "18.6667" : isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "4" : isSplitTunnelingAndIsNotHoverAndOnOrHoverAndOnOrHoverAndOff ? "21.3333" : "3.5"} x={isHoverAndSplitTunnelingAndOff ? "4.86374e-05" : isNotHoverAndSplitTunnelingAndOff ? "0" : isPortForwardingAndOffAndIsFalseOrTrue ? "28.7223" : isHoverAndPortForwardingAndOn ? "28.7224" : isSplitTunnelingAndOnAndIsFalseOrTrue ? "10.1855" : "25.1321"} y={isPortForwardingAndOffAndIsFalseOrTrue ? "21.5054" : isHoverAndPortForwardingAndOn ? "28" : isSplitTunnelingAndIsNotHoverAndOnOrHoverAndOnOrNotHoverAndOffOr ? "0" : "24.5"}>
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy={isNotHoverAndSplitTunnelingAndOff ? "0.486111" : isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "0.266667" : isSplitTunnelingAndIsNotHoverAndOnOrHoverAndOnOrHoverAndOff ? "0.5" : "0.259259"} />
                        <feGaussianBlur stdDeviation={isNotHoverAndSplitTunnelingAndOff ? "0.243056" : isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "0.333333" : isSplitTunnelingAndIsNotHoverAndOnOrHoverAndOnOrHoverAndOff ? "0.25" : "0.324074"} />
                        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                        <feColorMatrix type="matrix" values={isSplitTunnelingAndIsNotHoverAndOnOrHoverAndOnOrNotHoverAndOffOr ? "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" : "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"} />
                        <feBlend in2="shape" mode="normal" result={isHoverAndSplitTunnelingAndOff ? "effect1_innerShadow_2005_1716" : isNotHoverAndSplitTunnelingAndOff ? "effect1_innerShadow_2005_1833" : isPortForwardingAndOffAndIsFalseOrTrue ? "effect1_innerShadow_2005_1792" : isHoverAndPortForwardingAndOn ? "effect1_innerShadow_2005_1699" : isSplitTunnelingAndOnAndIsFalseOrTrue ? "effect1_innerShadow_2005_1802" : "effect1_innerShadow_2005_1842"} />
                      </filter>
                      {isPortForwardingAndIsNotHoverAndOnOrHoverAndOnOrNotHoverAndOffOr && (
                        <>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "13.3" : "11.6861"} id={isPortForwardingAndOffAndIsFalseOrTrue ? "filter2_i_2005_1792" : isHoverAndPortForwardingAndOn ? "filter2_i_2005_1699" : "filter2_i_2005_1842"} width={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "32" : "28"} x={isPortForwardingAndOffAndIsFalseOrTrue ? "3.38894" : isHoverAndPortForwardingAndOn ? "3.389" : "2.96537"} y={isPortForwardingAndOffAndIsFalseOrTrue ? "8.86477" : isHoverAndPortForwardingAndOn ? "15.36" : "13.44"}>
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "0.5" : "0.486111"} />
                            <feGaussianBlur stdDeviation={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "0.25" : "0.243056"} />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" />
                            <feBlend in2="shape" mode="normal" result={isPortForwardingAndOffAndIsFalseOrTrue ? "effect1_innerShadow_2005_1792" : isHoverAndPortForwardingAndOn ? "effect1_innerShadow_2005_1699" : "effect1_innerShadow_2005_1842"} />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "8.34676" : "7.36823"} id={isPortForwardingAndOffAndIsFalseOrTrue ? "filter3_i_2005_1792" : isHoverAndPortForwardingAndOn ? "filter3_i_2005_1699" : "filter3_i_2005_1842"} width={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "8.34667" : "7.36815"} x={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "14.8824" : "12.9573"} y={isPortForwardingAndOffAndIsFalseOrTrue ? "11.4247" : isHoverAndPortForwardingAndOn ? "17.9203" : "15.6803"}>
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "-0.666667" : "-0.648148"} dy={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "0.666667" : "0.648148"} />
                            <feGaussianBlur stdDeviation={isPortForwardingAndOffAndIsFalseOrTrue ? "0.666667" : isHoverAndPortForwardingAndOn ? "0.333333" : "0.324074"} />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values={isPortForwardingAndOffAndIsFalseOrTrue ? "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" : "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"} />
                            <feBlend in2="shape" mode="normal" result={isPortForwardingAndOffAndIsFalseOrTrue ? "effect1_innerShadow_2005_1792" : isHoverAndPortForwardingAndOn ? "effect1_innerShadow_2005_1699" : "effect1_innerShadow_2005_1842"} />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "8.34676" : "7.36823"} id={isPortForwardingAndOffAndIsFalseOrTrue ? "filter4_i_2005_1792" : isHoverAndPortForwardingAndOn ? "filter4_i_2005_1699" : "filter4_i_2005_1842"} width={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "8.34667" : "7.36815"} x={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "24.482" : "21.357"} y={isPortForwardingAndOffAndIsFalseOrTrue ? "11.4247" : isHoverAndPortForwardingAndOn ? "17.9203" : "15.6803"}>
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "-0.666667" : "-0.648148"} dy={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "0.666667" : "0.648148"} />
                            <feGaussianBlur stdDeviation={isPortForwardingAndOffAndIsFalseOrTrue ? "0.666667" : isHoverAndPortForwardingAndOn ? "0.333333" : "0.324074"} />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values={isPortForwardingAndOffAndIsFalseOrTrue ? "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" : "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"} />
                            <feBlend in2="shape" mode="normal" result={isPortForwardingAndOffAndIsFalseOrTrue ? "effect1_innerShadow_2005_1792" : isHoverAndPortForwardingAndOn ? "effect1_innerShadow_2005_1699" : "effect1_innerShadow_2005_1842"} />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "8.34676" : "7.36823"} id={isPortForwardingAndOffAndIsFalseOrTrue ? "filter5_i_2005_1792" : isHoverAndPortForwardingAndOn ? "filter5_i_2005_1699" : "filter5_i_2005_1842"} width={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "8.34667" : "7.36815"} x={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "5.28223" : "4.55713"} y={isPortForwardingAndOffAndIsFalseOrTrue ? "11.4247" : isHoverAndPortForwardingAndOn ? "17.9203" : "15.6803"}>
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "-0.666667" : "-0.648148"} dy={isPortForwardingAndIsHoverAndOnOrNotHoverAndOffOrHoverAndOff ? "0.666667" : "0.648148"} />
                            <feGaussianBlur stdDeviation={isPortForwardingAndOffAndIsFalseOrTrue ? "0.666667" : isHoverAndPortForwardingAndOn ? "0.333333" : "0.324074"} />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values={isPortForwardingAndOffAndIsFalseOrTrue ? "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" : "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"} />
                            <feBlend in2="shape" mode="normal" result={isPortForwardingAndOffAndIsFalseOrTrue ? "effect1_innerShadow_2005_1792" : isHoverAndPortForwardingAndOn ? "effect1_innerShadow_2005_1699" : "effect1_innerShadow_2005_1842"} />
                          </filter>
                        </>
                      )}
                      {(isNotHoverAndPortForwardingAndOn || isNotHoverAndSplitTunnelingAndOn || isHoverAndPortForwardingAndOn || isHoverAndSplitTunnelingAndOn || isNotHoverAndPortForwardingAndOff || isHoverAndPortForwardingAndOff) && (
                        <linearGradient gradientUnits="userSpaceOnUse" id={isPortForwardingAndOffAndIsFalseOrTrue ? "paint0_linear_2005_1792" : isHoverAndPortForwardingAndOn ? "paint0_linear_2005_1699" : isSplitTunnelingAndOnAndIsFalseOrTrue ? "paint0_linear_2005_1802" : "paint0_linear_2005_1842"} x1={isPortForwardingAndOffAndIsFalseOrTrue ? "17.7891" : isHoverAndPortForwardingAndOn ? "5.51072" : isSplitTunnelingAndOnAndIsFalseOrTrue ? "8.00045" : "4.82188"} x2={isPortForwardingAndOffAndIsFalseOrTrue ? "17.7578" : isHoverAndPortForwardingAndOn ? "18.2945" : isSplitTunnelingAndOnAndIsFalseOrTrue ? "17.6509" : "16.0077"} y1={isPortForwardingAndOffAndIsFalseOrTrue ? "15.9062" : isHoverAndPortForwardingAndOn ? "8.79903" : isSplitTunnelingAndOnAndIsFalseOrTrue ? "30.0002" : "7.69915"} y2={isPortForwardingAndOffAndIsFalseOrTrue ? "0.6783" : isHoverAndPortForwardingAndOn ? "13.4373" : isSplitTunnelingAndOnAndIsFalseOrTrue ? "14.9627" : "11.7576"}>
                          <stop stopColor={isSplitTunnelingAndOnAndIsFalseOrTrue ? "#817D8F" : "#43414B"} stopOpacity={isSplitTunnelingAndOnAndIsFalseOrTrue ? "0.3" : undefined} />
                          <stop offset="1" stopColor={isSplitTunnelingAndOnAndIsFalseOrTrue ? "#C9C6D8" : "#A39FB5"} />
                        </linearGradient>
                      )}
                      {isPortForwardingAndIsNotHoverAndOnOrHoverAndOnOrNotHoverAndOffOr && (
                        <>
                          <linearGradient gradientUnits="userSpaceOnUse" id={isPortForwardingAndOffAndIsFalseOrTrue ? "paint1_linear_2005_1792" : isHoverAndPortForwardingAndOn ? "paint1_linear_2005_1699" : "paint1_linear_2005_1842"} x1={isPortForwardingAndOffAndIsFalseOrTrue ? "20.9889" : isHoverAndPortForwardingAndOn ? "16.2457" : "14.215"} x2={isPortForwardingAndOffAndIsFalseOrTrue ? "21.0202" : isHoverAndPortForwardingAndOn ? "6.21823" : "5.44094"} y1={isPortForwardingAndOffAndIsFalseOrTrue ? "15.9054" : isHoverAndPortForwardingAndOn ? "21.5108" : "18.822"} y2={isPortForwardingAndOffAndIsFalseOrTrue ? "0.677519" : isHoverAndPortForwardingAndOn ? "22.3663" : "19.5705"}>
                            <stop stopColor={isPortForwardingAndOffAndIsFalseOrTrue ? "#43414B" : "#8A6EFF"} />
                            <stop offset="1" stopColor={isPortForwardingAndOffAndIsFalseOrTrue ? "#A39FB5" : "#25ECC6"} />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id={isPortForwardingAndOffAndIsFalseOrTrue ? "paint2_linear_2005_1792" : isHoverAndPortForwardingAndOn ? "paint2_linear_2005_1699" : "paint2_linear_2005_1842"} x1={isPortForwardingAndOffAndIsFalseOrTrue ? "21.4227" : isHoverAndPortForwardingAndOn ? "33.2673" : "29.1089"} x2={isPortForwardingAndOffAndIsFalseOrTrue ? "22.6712" : isHoverAndPortForwardingAndOn ? "20.4836" : "17.9231"} y1={isPortForwardingAndOffAndIsFalseOrTrue ? "8.34805" : isHoverAndPortForwardingAndOn ? "8.79835" : "7.69856"} y2={isPortForwardingAndOffAndIsFalseOrTrue ? "17.6439" : isHoverAndPortForwardingAndOn ? "13.4366" : "11.757"}>
                            <stop stopColor={isPortForwardingAndOffAndIsFalseOrTrue ? "white" : "#43414B"} />
                            <stop offset="1" stopColor={isPortForwardingAndOffAndIsFalseOrTrue ? "white" : "#A39FB5"} stopOpacity={isPortForwardingAndOffAndIsFalseOrTrue ? "0" : undefined} />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id={isPortForwardingAndOffAndIsFalseOrTrue ? "paint3_linear_2005_1792" : isHoverAndPortForwardingAndOn ? "paint3_linear_2005_1699" : "paint3_linear_2005_1842"} x1={isPortForwardingAndOffAndIsFalseOrTrue ? "15.4891" : isHoverAndPortForwardingAndOn ? "22.5323" : "19.7158"} x2={isPortForwardingAndOffAndIsFalseOrTrue ? "18.598" : isHoverAndPortForwardingAndOn ? "32.5598" : "28.4899"} y1={isPortForwardingAndOffAndIsFalseOrTrue ? "18.5052" : isHoverAndPortForwardingAndOn ? "21.5101" : "18.8214"} y2={isPortForwardingAndOffAndIsFalseOrTrue ? "8.64736" : isHoverAndPortForwardingAndOn ? "22.3656" : "19.5699"}>
                            <stop stopColor={isPortForwardingAndOffAndIsFalseOrTrue ? "white" : "#8A6EFF"} />
                            <stop offset="1" stopColor={isPortForwardingAndOffAndIsFalseOrTrue ? "white" : "#25ECC6"} stopOpacity={isPortForwardingAndOffAndIsFalseOrTrue ? "0" : undefined} />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id={isPortForwardingAndOffAndIsFalseOrTrue ? "paint4_linear_2005_1792" : isHoverAndPortForwardingAndOn ? "paint4_linear_2005_1699" : "paint4_linear_2005_1842"} x1={isPortForwardingAndOffAndIsFalseOrTrue ? "25.0887" : isHoverAndPortForwardingAndOn ? "22.9892" : "20.1155"} x2={isPortForwardingAndOffAndIsFalseOrTrue ? "28.1976" : isHoverAndPortForwardingAndOn ? "17.3232" : "15.1578"} y1={isPortForwardingAndOffAndIsFalseOrTrue ? "18.5052" : isHoverAndPortForwardingAndOn ? "18.001" : "15.7509"} y2={isPortForwardingAndOffAndIsFalseOrTrue ? "8.64736" : isHoverAndPortForwardingAndOn ? "26.0397" : "22.7847"}>
                            <stop offset={isPortForwardingAndOnAndIsFalseOrTrue ? "0.00514267" : undefined} stopColor={isPortForwardingAndOffAndIsFalseOrTrue ? "white" : "#6898EC"} />
                            <stop offset={isPortForwardingAndOffAndIsFalseOrTrue ? "1" : "0.567708"} stopColor={isPortForwardingAndOffAndIsFalseOrTrue ? "white" : "#25ECC6"} stopOpacity={isPortForwardingAndOffAndIsFalseOrTrue ? "0" : undefined} />
                            {isPortForwardingAndOnAndIsFalseOrTrue && <stop offset="1" stopColor="white" />}
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id={isPortForwardingAndOffAndIsFalseOrTrue ? "paint5_linear_2005_1792" : isHoverAndPortForwardingAndOn ? "paint5_linear_2005_1699" : "paint5_linear_2005_1842"} x1={isPortForwardingAndOffAndIsFalseOrTrue ? "5.88893" : isHoverAndPortForwardingAndOn ? "32.5888" : "28.5152"} x2={isPortForwardingAndOffAndIsFalseOrTrue ? "8.99783" : isHoverAndPortForwardingAndOn ? "26.9228" : "23.5575"} y1={isPortForwardingAndOffAndIsFalseOrTrue ? "18.5052" : isHoverAndPortForwardingAndOn ? "18.001" : "15.7509"} y2={isPortForwardingAndOffAndIsFalseOrTrue ? "8.64736" : isHoverAndPortForwardingAndOn ? "26.0397" : "22.7847"}>
                            <stop offset={isPortForwardingAndOnAndIsFalseOrTrue ? "0.00514267" : undefined} stopColor={isPortForwardingAndOffAndIsFalseOrTrue ? "white" : "#6898EC"} />
                            <stop offset={isPortForwardingAndOffAndIsFalseOrTrue ? "1" : "0.567708"} stopColor={isPortForwardingAndOffAndIsFalseOrTrue ? "white" : "#25ECC6"} stopOpacity={isPortForwardingAndOffAndIsFalseOrTrue ? "0" : undefined} />
                            {isPortForwardingAndOnAndIsFalseOrTrue && <stop offset="1" stopColor="white" />}
                          </linearGradient>
                        </>
                      )}
                      {isSplitTunnelingAndIsNotHoverAndOnOrHoverAndOnOrNotHoverAndOffOr && (
                        <radialGradient cx="0" cy="0" gradientTransform={isHoverAndSplitTunnelingAndOff ? "matrix(3.44094e-07 10 -10.7421 -1.11987 10.6668 14)" : isNotHoverAndSplitTunnelingAndOff ? "matrix(3.01082e-07 8.75 -9.39931 -0.979889 9.33337 12.25)" : "matrix(3.44094e-07 10 -10.7421 -1.11987 20.8523 14)"} gradientUnits="userSpaceOnUse" id={isHoverAndSplitTunnelingAndOff ? "paint0_radial_2005_1716" : isNotHoverAndSplitTunnelingAndOff ? "paint0_radial_2005_1833" : "paint1_radial_2005_1802"} r="1">
                          <stop offset="0.421875" stopColor="#9C98AD" />
                          <stop offset="1" stopColor="#3B3747" />
                        </radialGradient>
                      )}
                      {isPortForwardingAndOnAndIsFalseOrTrue && (
                        <>
                          <linearGradient gradientUnits="userSpaceOnUse" id={isHoverAndPortForwardingAndOn ? "paint6_linear_2005_1699" : "paint6_linear_2005_1842"} x1={isHoverAndPortForwardingAndOn ? "13.389" : "11.7154"} x2={isHoverAndPortForwardingAndOn ? "7.72301" : "6.75763"} y1={isHoverAndPortForwardingAndOn ? "18.001" : "15.7509"} y2={isHoverAndPortForwardingAndOn ? "26.0397" : "22.7847"}>
                            <stop offset="0.00514267" stopColor="#6898EC" />
                            <stop offset="0.567708" stopColor="#25ECC6" />
                            <stop offset="1" stopColor="white" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id={isHoverAndPortForwardingAndOn ? "paint7_linear_2005_1699" : "paint7_linear_2005_1842"} x1={isHoverAndPortForwardingAndOn ? "16.0529" : "14.0463"} x2={isHoverAndPortForwardingAndOn ? "22.9545" : "20.0852"} y1={isHoverAndPortForwardingAndOn ? "2.54187" : "2.22414"} y2={isHoverAndPortForwardingAndOn ? "7.29108" : "6.37969"}>
                            <stop stopColor="#817D8F" />
                            <stop offset="1" stopColor="#C9C6D8" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id={isHoverAndPortForwardingAndOn ? "paint8_linear_2005_1699" : "paint8_linear_2005_1842"} x1={isHoverAndPortForwardingAndOn ? "14.0994" : "12.3369"} x2={isHoverAndPortForwardingAndOn ? "28.188" : "24.6645"} y1={isHoverAndPortForwardingAndOn ? "3.5" : "3.0625"} y2={isHoverAndPortForwardingAndOn ? "3.42069" : "2.99311"}>
                            <stop offset="0.00514267" stopColor="#6898EC" />
                            <stop offset="0.140625" stopColor="#41CAD6" />
                            <stop offset="0.651042" stopColor="#25ECC6" />
                            <stop offset="1" stopColor="white" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id={isHoverAndPortForwardingAndOn ? "paint9_linear_2005_1699" : "paint9_linear_2005_1842"} x1={isHoverAndPortForwardingAndOn ? "20.8356" : "18.2312"} x2={isHoverAndPortForwardingAndOn ? "14.4581" : "12.6508"} y1={isHoverAndPortForwardingAndOn ? "7.05813" : "6.17586"} y2={isHoverAndPortForwardingAndOn ? "3.40096" : "2.97584"}>
                            <stop stopColor="#817D8F" />
                            <stop offset="1" stopColor="#C9C6D8" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id={isHoverAndPortForwardingAndOn ? "paint10_linear_2005_1699" : "paint10_linear_2005_1842"} x1={isHoverAndPortForwardingAndOn ? "22.4636" : "19.6556"} x2={isHoverAndPortForwardingAndOn ? "10.7229" : "9.38258"} y1={isHoverAndPortForwardingAndOn ? "6.1" : "5.3375"} y2={isHoverAndPortForwardingAndOn ? "6.15508" : "5.38569"}>
                            <stop offset="0.00514267" stopColor="#6898EC" />
                            <stop offset="0.140625" stopColor="#41CAD6" />
                            <stop offset="0.651042" stopColor="#25ECC6" />
                            <stop offset="1" stopColor="white" />
                          </linearGradient>
                        </>
                      )}
                      {isSplitTunnelingAndOnAndIsFalseOrTrue && (
                        <>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2005_1802" x1="39.0396" x2="42.7768" y1="-1.1398" y2="19.0436">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_2005_1802" x1="3.79314" x2="5.74758" y1="44.8114" y2="1.5791">
                            <stop offset="0.00514267" stopColor="#6898EC" />
                            <stop offset="0.140625" stopColor="#41CAD6" />
                            <stop offset="0.651042" stopColor="#25ECC6" />
                            <stop offset="1" stopColor="white" />
                          </linearGradient>
                        </>
                      )}
                      {isSplitTunnelingAndOffAndIsFalseOrTrue && (
                        <>
                          <linearGradient gradientUnits="userSpaceOnUse" id={isHoverAndSplitTunnelingAndOff ? "paint1_linear_2005_1716" : "paint1_linear_2005_1833"} x1={isHoverAndSplitTunnelingAndOff ? "28.8541" : "25.2473"} x2={isHoverAndSplitTunnelingAndOff ? "32.5914" : "28.5174"} y1={isHoverAndSplitTunnelingAndOff ? "-1.1398" : "-0.997328"} y2={isHoverAndSplitTunnelingAndOff ? "19.0436" : "16.6631"}>
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id={isHoverAndSplitTunnelingAndOff ? "paint2_linear_2005_1716" : "paint2_linear_2005_1833"} x1={isHoverAndSplitTunnelingAndOff ? "9.8059" : "8.58012"} x2={isHoverAndSplitTunnelingAndOff ? "17.0046" : "14.879"} y1={isHoverAndSplitTunnelingAndOff ? "33.2752" : "29.1158"} y2={isHoverAndSplitTunnelingAndOff ? "23.9302" : "20.9389"}>
                            <stop stopColor="#817D8F" />
                            <stop offset="1" stopColor="#C9C6D8" />
                          </linearGradient>
                        </>
                      )}
                    </defs>
                  </svg>
                )}
                {isKillSwitchAndIsNotHoverAndOnOrHoverAndOnOrNotHoverAndOffOr && (
                  <>
                    <div className="absolute inset-[0_7.81%] rounded-[7.5px]" style={isKillSwitchAndOffAndIsFalseOrTrue ? { backgroundImage: "linear-gradient(147.412deg, rgba(255, 255, 255, 0.2) 20.074%, rgba(255, 255, 255, 0) 58.977%), linear-gradient(90deg, rgb(59, 55, 71) 0%, rgb(59, 55, 71) 100%)" } : { backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), linear-gradient(4.76737deg, rgb(138, 110, 255) 44.741%, rgb(37, 236, 198) 130.89%)" }}>
                      {isKillSwitchAndOffAndIsFalseOrTrue && <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0.598px_0.598px_0px_rgba(255,255,255,0.5)]" />}
                    </div>
                    <div className="absolute flex inset-0 items-center justify-center">
                      <div className="-rotate-90 flex-none size-[31.111px]">
                        <div className="relative size-full">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isNotHoverAndKillSwitchAndOff ? "0 0 28 28" : "0 0 32 32"}>
                            <g clipPath={isHoverAndKillSwitchAndOff ? "url(#clip0_2005_1721)" : isNotHoverAndKillSwitchAndOff ? "url(#clip0_2005_1767)" : "url(#clip0_2005_1824)"} id="Frame 13942" opacity="0.7">
                              <mask height={isNotHoverAndKillSwitchAndOff ? "24" : "28"} id={isHoverAndKillSwitchAndOff ? "mask0_2005_1721" : isNotHoverAndKillSwitchAndOff ? "mask0_2005_1767" : "mask0_2005_1824"} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width={isNotHoverAndKillSwitchAndOff ? "28" : "32"} x="0" y="2">
                                <rect fill="var(--fill-0, #D9D9D9)" height={isNotHoverAndKillSwitchAndOff ? "28" : "32"} id="Rectangle 5177" rx={isNotHoverAndKillSwitchAndOff ? "7.29167" : "7.5"} transform={isNotHoverAndKillSwitchAndOff ? "rotate(90 28 2.1875)" : "rotate(90 32 2.5)"} width={isNotHoverAndKillSwitchAndOff ? "23.625" : "27"} x={isNotHoverAndKillSwitchAndOff ? "28" : "32"} y={isNotHoverAndKillSwitchAndOff ? "2.1875" : "2.5"} />
                              </mask>
                              <g mask={isHoverAndKillSwitchAndOff ? "url(#mask0_2005_1721)" : isNotHoverAndKillSwitchAndOff ? "url(#mask0_2005_1767)" : "url(#mask0_2005_1824)"}>
                                {isKillSwitchAndOnAndIsFalseOrTrue && (
                                  <g filter="url(#filter0_di_2005_1824)" id="Union" opacity="0.6">
                                    <path d={svgPaths.p2deae400} fill="url(#paint0_linear_2005_1824)" />
                                  </g>
                                )}
                                {isKillSwitchAndOffAndIsFalseOrTrue && (
                                  <>
                                    <path d={isHoverAndKillSwitchAndOff ? svgPaths.p292fc900 : svgPaths.p2498bf80} fill={isHoverAndKillSwitchAndOff ? "url(#paint0_linear_2005_1721)" : "url(#paint0_linear_2005_1767)"} id="Rectangle 2877" opacity="0.6" />
                                    <path d={isHoverAndKillSwitchAndOff ? svgPaths.p977c2a0 : svgPaths.p30319b00} fill={isHoverAndKillSwitchAndOff ? "url(#paint1_linear_2005_1721)" : "url(#paint1_linear_2005_1767)"} id="Rectangle 2879" opacity="0.6" />
                                    <path d={isHoverAndKillSwitchAndOff ? svgPaths.p3f925a80 : svgPaths.p371f0900} fill={isHoverAndKillSwitchAndOff ? "url(#paint2_linear_2005_1721)" : "url(#paint2_linear_2005_1767)"} id="Rectangle 2881" opacity="0.6" />
                                    <path d={isHoverAndKillSwitchAndOff ? svgPaths.p331a08f0 : svgPaths.p200c04f0} fill={isHoverAndKillSwitchAndOff ? "url(#paint3_linear_2005_1721)" : "url(#paint3_linear_2005_1767)"} id="Rectangle 2883" opacity="0.6" />
                                    <path d={isHoverAndKillSwitchAndOff ? svgPaths.p613e200 : svgPaths.p1b944f00} fill={isHoverAndKillSwitchAndOff ? "url(#paint4_linear_2005_1721)" : "url(#paint4_linear_2005_1767)"} id="Rectangle 2885" opacity="0.6" />
                                  </>
                                )}
                              </g>
                            </g>
                            <defs>
                              {isKillSwitchAndOnAndIsFalseOrTrue && (
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="89.9396" id="filter0_di_2005_1824" width="89.9396" x="-27.918" y="-27.1754">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="1" />
                                  <feGaussianBlur stdDeviation="1" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2005_1824" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_2005_1824" mode="normal" result="shape" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="1.33333" />
                                  <feGaussianBlur stdDeviation="1.33333" />
                                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
                                  <feBlend in2="shape" mode="normal" result="effect2_innerShadow_2005_1824" />
                                </filter>
                              )}
                              <linearGradient gradientUnits="userSpaceOnUse" id={isHoverAndKillSwitchAndOff ? "paint0_linear_2005_1721" : isNotHoverAndKillSwitchAndOff ? "paint0_linear_2005_1767" : "paint0_linear_2005_1824"} x1={isHoverAndKillSwitchAndOff ? "35.5062" : isNotHoverAndKillSwitchAndOff ? "31.0679" : "-30.3999"} x2={isHoverAndKillSwitchAndOff ? "16.7369" : isNotHoverAndKillSwitchAndOff ? "14.6448" : "56.8002"} y1={isHoverAndKillSwitchAndOff ? "10.3391" : isNotHoverAndKillSwitchAndOff ? "9.04671" : "62.4"} y2={isHoverAndKillSwitchAndOff ? "-10.584" : isNotHoverAndKillSwitchAndOff ? "-9.26099" : "-45.5996"}>
                                <stop offset={isKillSwitchAndOnAndIsFalseOrTrue ? "0.00514267" : undefined} stopColor={isKillSwitchAndOffAndIsFalseOrTrue ? "white" : "#6898EC"} />
                                <stop offset={isKillSwitchAndOffAndIsFalseOrTrue ? "1" : "0.717378"} stopColor={isKillSwitchAndOffAndIsFalseOrTrue ? "white" : "#41CAD6"} stopOpacity={isKillSwitchAndOffAndIsFalseOrTrue ? "0" : undefined} />
                                {isKillSwitchAndOnAndIsFalseOrTrue && (
                                  <>
                                    <stop offset="0.946659" stopColor="#25ECC6" />
                                    <stop offset="1" stopColor="white" />
                                  </>
                                )}
                              </linearGradient>
                              {isKillSwitchAndOnAndIsFalseOrTrue && (
                                <clipPath id="clip0_2005_1824">
                                  <rect fill="white" height="32" width="32" />
                                </clipPath>
                              )}
                              {isKillSwitchAndOffAndIsFalseOrTrue && (
                                <>
                                  <linearGradient gradientUnits="userSpaceOnUse" id={isHoverAndKillSwitchAndOff ? "paint1_linear_2005_1721" : "paint1_linear_2005_1767"} x1={isHoverAndKillSwitchAndOff ? "41.6598" : "36.4524"} x2={isHoverAndKillSwitchAndOff ? "-15.2632" : "-13.3553"} y1={isHoverAndKillSwitchAndOff ? "26.9544" : "23.5851"} y2={isHoverAndKillSwitchAndOff ? "-26.5839" : "-23.261"}>
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                  </linearGradient>
                                  <linearGradient gradientUnits="userSpaceOnUse" id={isHoverAndKillSwitchAndOff ? "paint2_linear_2005_1721" : "paint2_linear_2005_1767"} x1={isHoverAndKillSwitchAndOff ? "35.5056" : "31.0674"} x2={isHoverAndKillSwitchAndOff ? "-20.1867" : "-17.6634"} y1={isHoverAndKillSwitchAndOff ? "33.1085" : "28.9699"} y2={isHoverAndKillSwitchAndOff ? "-19.5068" : "-17.0685"}>
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                  </linearGradient>
                                  <linearGradient gradientUnits="userSpaceOnUse" id={isHoverAndKillSwitchAndOff ? "paint3_linear_2005_1721" : "paint3_linear_2005_1767"} x1={isHoverAndKillSwitchAndOff ? "8.12243" : "7.10713"} x2={isHoverAndKillSwitchAndOff ? "-38.3391" : "-33.5467"} y1={isHoverAndKillSwitchAndOff ? "21.7236" : "19.0081"} y2={isHoverAndKillSwitchAndOff ? "-22.5841" : "-19.7611"}>
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                  </linearGradient>
                                  <linearGradient gradientUnits="userSpaceOnUse" id={isHoverAndKillSwitchAndOff ? "paint4_linear_2005_1721" : "paint4_linear_2005_1767"} x1={isHoverAndKillSwitchAndOff ? "5.04509" : "4.41446"} x2={isHoverAndKillSwitchAndOff ? "-44.4934" : "-38.9317"} y1={isHoverAndKillSwitchAndOff ? "27.8778" : "24.3931"} y2={isHoverAndKillSwitchAndOff ? "-16.4298" : "-14.3761"}>
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                  </linearGradient>
                                  <clipPath id={isHoverAndKillSwitchAndOff ? "clip0_2005_1721" : "clip0_2005_1767"}>
                                    <rect fill="white" height={isHoverAndKillSwitchAndOff ? "32" : "28"} width={isHoverAndKillSwitchAndOff ? "32" : "28"} />
                                  </clipPath>
                                </>
                              )}
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {isKillSwitchAndOnAndIsFalseOrTrue && (
                  <div className="absolute bottom-[7.81%] contents left-1/4 right-1/4 top-[7.81%]" data-name="Switch">
                    <div className="absolute bottom-[7.81%] left-1/4 right-1/4 rounded-[4.5px] top-[7.81%]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), linear-gradient(-4.52535deg, rgb(138, 110, 255) 37.624%, rgb(37, 236, 198) 137.7%)" }} />
                    <div className="absolute inset-[11.82%_28.18%_11.81%_28.18%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9636 24.4364">
                        <g filter="url(#filter0_i_2005_1854)" id="Rectangle 2890">
                          <path d={svgPaths.p3eaccb00} fill="url(#paint0_linear_2005_1854)" />
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="25.2364" id="filter0_i_2005_1854" width="13.9636" x="0" y="0">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="0.8" />
                            <feGaussianBlur stdDeviation="0.4" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0" />
                            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2005_1854" />
                          </filter>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2005_1854" x1="7.63604" x2="7.4462" y1="-5.93471" y2="26.2622">
                            <stop offset="0.00514267" stopColor="#6898EC" />
                            <stop offset="0.140625" stopColor="#41CAD6" />
                            <stop offset="0.651042" stopColor="#25ECC6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="absolute inset-[14.54%_30.91%_14.55%_30.91%]">
                      <div className="absolute inset-[-7.69%_-14.29%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7091 26.1818">
                          <g filter="url(#filter0_f_2005_1868)" id="Rectangle 2889">
                            <path d={svgPaths.p7aeff80} fill="url(#paint0_linear_2005_1868)" fillOpacity="0.3" />
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26.1818" id="filter0_f_2005_1868" width="15.7091" x="0" y="0">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                              <feGaussianBlur result="effect1_foregroundBlur_2005_1868" stdDeviation="0.872727" />
                            </filter>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2005_1868" x1="15.4909" x2="15.4909" y1="1.7453" y2="20.6544">
                              <stop stopColor="white" />
                              <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute flex inset-[11.82%_28.18%_11.81%_28.18%] items-center justify-center">
                      <div className="-scale-y-100 flex-none h-[23.759px] w-[13.576px]">
                        <div className="relative size-full" data-name="Top">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9641 24.4381">
                            <g id="Top">
                              <g id="Group 13954">
                                <g filter="url(#filter0_i_2005_1808)" id="Subtract">
                                  <path d={svgPaths.p3bfdda40} fill="url(#paint0_linear_2005_1808)" />
                                  <path d={svgPaths.p3bfdda40} fill="var(--fill-1, black)" fillOpacity="0.6" />
                                </g>
                                <mask height="7" id="mask0_2005_1808" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="0" y="0">
                                  <path d={svgPaths.p95c1300} fill="url(#paint1_linear_2005_1808)" id="Subtract_2" />
                                </mask>
                                <g mask="url(#mask0_2005_1808)">
                                  <g filter="url(#filter1_f_2005_1808)" id="Ellipse 1014" opacity="0.3">
                                    <circle cx="6.98203" cy="1.74758" fill="var(--fill-0, white)" r="3.49091" />
                                  </g>
                                </g>
                              </g>
                              <path clipRule="evenodd" d={svgPaths.p29785200} fill="var(--fill-0, #1E2128)" fillRule="evenodd" id="Ellipse 1011 (Stroke)" />
                              <path clipRule="evenodd" d={svgPaths.p2e479900} fill="var(--fill-0, #1E2128)" fillRule="evenodd" id="Line 5417 (Stroke)" />
                              <rect fill="url(#paint2_linear_2005_1808)" height="21.8182" id="Rectangle 2889" opacity="0.2" rx="3.49091" width="13.9636" x="0.000491801" y="2.61995" />
                              <g id="Group 13975">
                                <mask height="23" id="mask1_2005_1808" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="0" y="2">
                                  <path d={svgPaths.p1f583ef0} fill="url(#paint3_linear_2005_1808)" id="Rectangle 2890" />
                                </mask>
                                <g mask="url(#mask1_2005_1808)">
                                  <g filter="url(#filter2_f_2005_1808)" id="Subtract_3" opacity="0.5">
                                    <path d={svgPaths.p2357eac0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.6" />
                                  </g>
                                </g>
                              </g>
                            </g>
                            <defs>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="6.98308" id="filter0_i_2005_1808" width="13.9639" x="2.92691e-05" y="0.000789365">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset dy="0.872727" />
                                <feGaussianBlur stdDeviation="0.872727" />
                                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2005_1808" />
                              </filter>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="13.9636" id="filter1_f_2005_1808" width="13.9636" x="0.000205994" y="-5.23424">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_2005_1808" stdDeviation="1.74545" />
                              </filter>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="6.10912" id="filter2_f_2005_1808" width="17.2324" x="-1.63378" y="0.509011">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_2005_1808" stdDeviation="0.8" />
                              </filter>
                              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2005_1808" x1="7.63652" x2="7.62465" y1="7.59508" y2="-0.456064">
                                <stop offset="0.00514267" stopColor="#6898EC" />
                                <stop offset="0.140625" stopColor="#41CAD6" />
                                <stop offset="0.651042" stopColor="#25ECC6" />
                              </linearGradient>
                              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2005_1808" x1="0.46546" x2="0.46546" y1="-0.0217795" y2="3.35372">
                                <stop stopColor="#FA5284" />
                                <stop offset="1" stopColor="#DC3251" />
                              </linearGradient>
                              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2005_1808" x1="6.98231" x2="6.98231" y1="2.61995" y2="12.6199">
                                <stop />
                                <stop offset="1" stopOpacity="0" />
                              </linearGradient>
                              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_2005_1808" x1="6.98231" x2="6.98231" y1="2.618" y2="12.618">
                                <stop />
                                <stop offset="1" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {isKillSwitchAndOffAndIsFalseOrTrue && (
                  <>
                    <div className="absolute bg-[#3b3747] bottom-[7.81%] left-1/4 right-1/4 rounded-[4.5px] top-[7.81%]" />
                    <div className="absolute flex inset-[11.82%_28.18%_11.81%_28.18%] items-center justify-center">
                      <div className="-scale-y-100 flex-none h-[23.759px] w-[13.576px]">
                        <div className="relative size-full" data-name="Switch">
                          <div className={`absolute ${isHoverAndKillSwitchAndOff ? "inset-[-3.57%_-6.25%_-3.56%_-6.25%]" : "inset-[-4.37%_-7.64%_-4.36%_-7.64%]"}`}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={isHoverAndKillSwitchAndOff ? "0 0 15.7091 26.1818" : "0 0 14.0848 23.2485"}>
                              <g id="Switch">
                                <path d={isHoverAndKillSwitchAndOff ? svgPaths.p261190c0 : svgPaths.p942d100} fill={isHoverAndKillSwitchAndOff ? "url(#paint0_linear_2005_1687)" : "url(#paint0_linear_2005_1856)"} id="Rectangle 2888" />
                                <g filter={isHoverAndKillSwitchAndOff ? "url(#filter0_f_2005_1687)" : "url(#filter0_f_2005_1856)"} id="Rectangle 2889">
                                  <path d={isHoverAndKillSwitchAndOff ? svgPaths.pf983200 : svgPaths.pe958980} fill={isHoverAndKillSwitchAndOff ? "url(#paint1_linear_2005_1687)" : "url(#paint1_linear_2005_1856)"} fillOpacity="0.4" />
                                </g>
                                <path clipRule="evenodd" d={isHoverAndKillSwitchAndOff ? svgPaths.p2c411f00 : svgPaths.pf821d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Ellipse 1011 (Stroke)" />
                                <path clipRule="evenodd" d={isHoverAndKillSwitchAndOff ? svgPaths.p3e07f9f0 : svgPaths.p3a79d240} fill="var(--fill-0, white)" fillRule="evenodd" id="Line 5417 (Stroke)" />
                                <g id="Bottom">
                                  <g filter={isHoverAndKillSwitchAndOff ? "url(#filter1_i_2005_1687)" : "url(#filter1_i_2005_1856)"} id="Subtract">
                                    <path d={isHoverAndKillSwitchAndOff ? svgPaths.p4d94ef2 : svgPaths.p291d2800} fill={isHoverAndKillSwitchAndOff ? "url(#paint2_linear_2005_1687)" : "url(#paint2_linear_2005_1856)"} />
                                  </g>
                                  <path d={isHoverAndKillSwitchAndOff ? svgPaths.p22e43a00 : svgPaths.p2d3b1200} fill={isHoverAndKillSwitchAndOff ? "url(#paint3_linear_2005_1687)" : "url(#paint3_linear_2005_1856)"} id="Rectangle 2889_2" opacity="0.2" />
                                  <g id="Group 13962">
                                    <mask height={isHoverAndKillSwitchAndOff ? "23" : "21"} id={isHoverAndKillSwitchAndOff ? "mask0_2005_1687" : "mask0_2005_1856"} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width={isHoverAndKillSwitchAndOff ? "15" : "14"} x="0" y="0">
                                      <path d={isHoverAndKillSwitchAndOff ? svgPaths.pab63080 : svgPaths.p35925580} fill={isHoverAndKillSwitchAndOff ? "url(#paint4_linear_2005_1687)" : "url(#paint4_linear_2005_1856)"} id="Rectangle 2890" opacity="0.6" />
                                    </mask>
                                    <g mask={isHoverAndKillSwitchAndOff ? "url(#mask0_2005_1687)" : "url(#mask0_2005_1856)"}>
                                      <g filter={isHoverAndKillSwitchAndOff ? "url(#filter2_f_2005_1687)" : "url(#filter2_f_2005_1856)"} id="Ellipse 1015" opacity="0.6">
                                        <ellipse cx={isHoverAndKillSwitchAndOff ? "7.85505" : "7.04286"} cy={isHoverAndKillSwitchAndOff ? "21.9653" : "19.3894"} fill="var(--fill-0, black)" fillOpacity="0.8" rx={isHoverAndKillSwitchAndOff ? "6.10909" : "5.34545"} ry={isHoverAndKillSwitchAndOff ? "0.872727" : "0.763636"} />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <defs>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height={isHoverAndKillSwitchAndOff ? "26.1818" : "23.2485"} id={isHoverAndKillSwitchAndOff ? "filter0_f_2005_1687" : "filter0_f_2005_1856"} width={isHoverAndKillSwitchAndOff ? "15.7091" : "14.0848"} x="0" y="0">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                  <feGaussianBlur result={isHoverAndKillSwitchAndOff ? "effect1_foregroundBlur_2005_1687" : "effect1_foregroundBlur_2005_1856"} stdDeviation={isHoverAndKillSwitchAndOff ? "0.872727" : "0.848485"} />
                                </filter>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height={isHoverAndKillSwitchAndOff ? "21.3676" : "18.7355"} id={isHoverAndKillSwitchAndOff ? "filter1_i_2005_1687" : "filter1_i_2005_1856"} width={isHoverAndKillSwitchAndOff ? "13.9636" : "12.2182"} x={isHoverAndKillSwitchAndOff ? "0.873049" : "0.933615"} y={isHoverAndKillSwitchAndOff ? "4.34378" : "3.9705"}>
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy={isHoverAndKillSwitchAndOff ? "0.4" : "0.388889"} />
                                  <feGaussianBlur stdDeviation={isHoverAndKillSwitchAndOff ? "0.2" : "0.194444"} />
                                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" />
                                  <feBlend in2="shape" mode="normal" result={isHoverAndKillSwitchAndOff ? "effect1_innerShadow_2005_1687" : "effect1_innerShadow_2005_1856"} />
                                </filter>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height={isHoverAndKillSwitchAndOff ? "5.23636" : "4.92121"} id={isHoverAndKillSwitchAndOff ? "filter2_f_2005_1687" : "filter2_f_2005_1856"} width={isHoverAndKillSwitchAndOff ? "15.7091" : "14.0848"} x={isHoverAndKillSwitchAndOff ? "0.000502825" : "0.00044024"} y={isHoverAndKillSwitchAndOff ? "19.3472" : "16.9288"}>
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                  <feGaussianBlur result={isHoverAndKillSwitchAndOff ? "effect1_foregroundBlur_2005_1687" : "effect1_foregroundBlur_2005_1856"} stdDeviation={isHoverAndKillSwitchAndOff ? "0.872727" : "0.848485"} />
                                </filter>
                                <linearGradient gradientUnits="userSpaceOnUse" id={isHoverAndKillSwitchAndOff ? "paint0_linear_2005_1687" : "paint0_linear_2005_1856"} x1={isHoverAndKillSwitchAndOff ? "19.2" : "16.9697"} x2={isHoverAndKillSwitchAndOff ? "14.4" : "12.7697"} y1={isHoverAndKillSwitchAndOff ? "0.000156355" : "0.169834"} y2={isHoverAndKillSwitchAndOff ? "25.7456" : "22.6971"}>
                                  <stop stopColor="#898690" />
                                  <stop offset="1" stopColor="#403C4C" />
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" id={isHoverAndKillSwitchAndOff ? "paint1_linear_2005_1687" : "paint1_linear_2005_1856"} x1={isHoverAndKillSwitchAndOff ? "7.85454" : "7.04242"} x2={isHoverAndKillSwitchAndOff ? "8.72727" : "7.80605"} y1={isHoverAndKillSwitchAndOff ? "0.436188" : "0.551362"} y2={isHoverAndKillSwitchAndOff ? "23.5635" : "20.7877"}>
                                  <stop stopColor="white" />
                                  <stop offset="1" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" id={isHoverAndKillSwitchAndOff ? "paint2_linear_2005_1687" : "paint2_linear_2005_1856"} x1={isHoverAndKillSwitchAndOff ? "-0.945311" : "-0.65745"} x2={isHoverAndKillSwitchAndOff ? "16.6547" : "14.7426"} y1={isHoverAndKillSwitchAndOff ? "20.2925" : "17.9256"} y2={isHoverAndKillSwitchAndOff ? "20.2925" : "17.9256"}>
                                  <stop stopColor="#3B3747" />
                                  <stop offset="0.0001" stopColor="#3B3747" />
                                  <stop offset="0.502563" stopColor="#95929B" />
                                  <stop offset="1" stopColor="#3B3747" />
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" id={isHoverAndKillSwitchAndOff ? "paint3_linear_2005_1687" : "paint3_linear_2005_1856"} x1={isHoverAndKillSwitchAndOff ? "7.85481" : "7.04266"} x2={isHoverAndKillSwitchAndOff ? "7.85481" : "7.04266"} y1={isHoverAndKillSwitchAndOff ? "22.6922" : "20.0254"} y2={isHoverAndKillSwitchAndOff ? "16.1468" : "14.2981"}>
                                  <stop />
                                  <stop offset="1" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" id={isHoverAndKillSwitchAndOff ? "paint4_linear_2005_1687" : "paint4_linear_2005_1856"} x1={isHoverAndKillSwitchAndOff ? "7.85471" : "7.04257"} x2={isHoverAndKillSwitchAndOff ? "7.85471" : "7.04257"} y1={isHoverAndKillSwitchAndOff ? "22.6922" : "20.0254"} y2={isHoverAndKillSwitchAndOff ? "16.1468" : "14.2981"}>
                                  <stop />
                                  <stop offset="1" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {isKillSwitchAndOnAndIsFalseOrTrue && <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0.778px_0.778px_0px_rgba(255,255,255,0.4)]" />}
            </div>
            <BackgroundImage1 additionalClassNames="min-w-full text-center w-[min-content]">{isSplitTunnelingAndIsNotHoverAndOnOrHoverAndOnOrNotHoverAndOffOr ? "Split tunneling" : isPortForwardingAndIsNotHoverAndOnOrHoverAndOnOrNotHoverAndOffOr ? "Port forwarding" : isKillSwitchAndIsNotHoverAndOnOrHoverAndOnOrNotHoverAndOffOr ? "Kill switch" : ""}</BackgroundImage1>
          </>
        )}
        {isNetShieldAndIsNotHoverAndOnOrHoverAndOnOrNotHoverAndOffOrHover && (
          <>
            <div className="relative shrink-0 size-[28px]" data-name="Wrapper">
              <div className="absolute left-0 size-[28px] top-0" data-name="VPN feature">
                <div className={`absolute ${isNetShieldAndOffAndIsFalseOrTrue ? "inset-[0_4.17%]" : "inset-[0_6.25%]"}`} data-name="Inner group">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isNetShieldAndOffAndIsFalseOrTrue ? "0 0 29.3333 32" : isHoverAndNetShieldAndOn ? "0 0 28 32" : "0 0 24.5 28"}>
                    <g id="Inner group">
                      <g filter={isNetShieldAndOffAndIsFalseOrTrue ? "url(#filter0_i_2005_1779)" : undefined} id={isNetShieldAndOffAndIsFalseOrTrue ? "Subtract" : "Vector"}>
                        <path clipRule={isNetShieldAndOffAndIsFalseOrTrue ? "evenodd" : undefined} d={isNetShieldAndOffAndIsFalseOrTrue ? svgPaths.p3e561500 : isHoverAndNetShieldAndOn ? svgPaths.p3d0037c0 : svgPaths.p20338600} fill={isNetShieldAndOffAndIsFalseOrTrue ? "var(--fill-0, #6B6778)" : isHoverAndNetShieldAndOn ? "url(#paint0_linear_2005_1729)" : "url(#paint0_linear_2005_1838)"} fillRule={isNetShieldAndOffAndIsFalseOrTrue ? "evenodd" : undefined} />
                        <path clipRule={isNetShieldAndOffAndIsFalseOrTrue ? "evenodd" : undefined} d={isNetShieldAndOffAndIsFalseOrTrue ? svgPaths.p3e561500 : isHoverAndNetShieldAndOn ? svgPaths.p3d0037c0 : svgPaths.p20338600} fill={isNetShieldAndOffAndIsFalseOrTrue ? "url(#paint0_linear_2005_1779)" : "var(--fill-1, black)"} fillOpacity={isNetShieldAndOffAndIsFalseOrTrue ? "0.6" : "0.4"} fillRule={isNetShieldAndOffAndIsFalseOrTrue ? "evenodd" : undefined} />
                      </g>
                      {isNetShieldAndOnAndIsFalseOrTrue && (
                        <g filter={isHoverAndNetShieldAndOn ? "url(#filter0_di_2005_1729)" : "url(#filter0_di_2005_1838)"} id="Vector_2">
                          <path d={isHoverAndNetShieldAndOn ? svgPaths.p336d4a00 : svgPaths.p280cb300} fill={isHoverAndNetShieldAndOn ? "url(#paint1_linear_2005_1729)" : "url(#paint1_linear_2005_1838)"} />
                        </g>
                      )}
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height={isNetShieldAndOffAndIsFalseOrTrue ? "32.5556" : isHoverAndNetShieldAndOn ? "26" : "22.6111"} id={isNetShieldAndOffAndIsFalseOrTrue ? "filter0_i_2005_1779" : isHoverAndNetShieldAndOn ? "filter0_di_2005_1729" : "filter0_di_2005_1838"} width={isNetShieldAndOffAndIsFalseOrTrue ? "29.3333" : isHoverAndNetShieldAndOn ? "23.3333" : "20.2778"} x={isNetShieldAndOffAndIsFalseOrTrue ? "1.40378e-09" : isHoverAndNetShieldAndOn ? "2.33333" : "2.11111"} y={isNetShieldAndOffAndIsFalseOrTrue ? "7.45058e-09" : isHoverAndNetShieldAndOn ? "3.16667" : "2.80556"}>
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        {isNetShieldAndOnAndIsFalseOrTrue && (
                          <>
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy={isHoverAndNetShieldAndOn ? "0.833333" : "0.694444"} />
                            <feGaussianBlur stdDeviation={isHoverAndNetShieldAndOn ? "0.833333" : "0.694444"} />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                          </>
                        )}
                        <feBlend in={isNetShieldAndOffAndIsFalseOrTrue ? "SourceGraphic" : undefined} in2="BackgroundImageFix" mode="normal" result={isNetShieldAndOffAndIsFalseOrTrue ? "shape" : isHoverAndNetShieldAndOn ? "effect1_dropShadow_2005_1729" : "effect1_dropShadow_2005_1838"} />
                        {isNetShieldAndOnAndIsFalseOrTrue && (
                          <>
                            <feBlend in="SourceGraphic" in2={isHoverAndNetShieldAndOn ? "effect1_dropShadow_2005_1729" : "effect1_dropShadow_2005_1838"} mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy={isHoverAndNetShieldAndOn ? "1.11111" : "0.925926"} />
                            <feGaussianBlur stdDeviation={isHoverAndNetShieldAndOn ? "1.11111" : "0.925926"} />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
                            <feBlend in2="shape" mode="normal" result={isHoverAndNetShieldAndOn ? "effect2_innerShadow_2005_1729" : "effect2_innerShadow_2005_1838"} />
                          </>
                        )}
                        {isNetShieldAndOffAndIsFalseOrTrue && (
                          <>
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="1.11111" />
                            <feGaussianBlur stdDeviation="0.277778" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
                            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2005_1779" />
                          </>
                        )}
                      </filter>
                      <linearGradient gradientUnits="userSpaceOnUse" id={isNetShieldAndOffAndIsFalseOrTrue ? "paint0_linear_2005_1779" : isHoverAndNetShieldAndOn ? "paint0_linear_2005_1729" : "paint0_linear_2005_1838"} x1={isNetShieldAndOffAndIsFalseOrTrue ? "15.1348" : isHoverAndNetShieldAndOn ? "8.54316" : "7.47527"} x2={isNetShieldAndOffAndIsFalseOrTrue ? "30.0718" : isHoverAndNetShieldAndOn ? "16.0164" : "14.0144"} y1={isNetShieldAndOffAndIsFalseOrTrue ? "-1.66109" : isHoverAndNetShieldAndOn ? "36.9635" : "32.3431"} y2={isNetShieldAndOffAndIsFalseOrTrue ? "24.4099" : isHoverAndNetShieldAndOn ? "-1.3509" : "-1.18204"}>
                        <stop stopColor={isNetShieldAndOffAndIsFalseOrTrue ? "white" : "#8A6EFF"} />
                        <stop offset="1" stopColor={isNetShieldAndOffAndIsFalseOrTrue ? "white" : "#25ECC6"} stopOpacity={isNetShieldAndOffAndIsFalseOrTrue ? "0" : undefined} />
                      </linearGradient>
                      {isNetShieldAndOnAndIsFalseOrTrue && (
                        <linearGradient gradientUnits="userSpaceOnUse" id={isHoverAndNetShieldAndOn ? "paint1_linear_2005_1729" : "paint1_linear_2005_1838"} x1={isHoverAndNetShieldAndOn ? "14.9375" : "13.0703"} x2={isHoverAndNetShieldAndOn ? "14.8235" : "12.9705"} y1={isHoverAndNetShieldAndOn ? "32.1714" : "28.15"} y2={isHoverAndNetShieldAndOn ? "2.30565" : "2.01744"}>
                          <stop offset="0.00514267" stopColor="#6898EC" />
                          <stop offset="0.140625" stopColor="#41CAD6" />
                          <stop offset="0.651042" stopColor="#25ECC6" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                      )}
                    </defs>
                  </svg>
                </div>
              </div>
              {showNotificationDot && (
                <div className="font-segoe-ui -translate-y-full absolute flex flex-col font-semibold justify-end leading-[0] right-[-3px] text-[#2cffcc] text-[12px] top-[10px] translate-x-full whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 8" }}>
                  <p className="leading-[16px]">25</p>
                </div>
              )}
            </div>
            <BackgroundImage1 additionalClassNames="min-w-full text-center w-[min-content]">NetShield</BackgroundImage1>
          </>
        )}
        {isSettingsAndNoAndIsFalseOrTrue && (
          <>
            <BackgroundImage2 additionalClassNames="shrink-0 size-[28px]">
              <g id="ic-cog-wheel">
                <g filter="url(#filter0_i_2005_1738)" id="Vector">
                  <path d={svgPaths.p39d0f700} fill="var(--fill-0, #585366)" />
                  <path d={svgPaths.p39d0f700} fill="url(#paint0_linear_2005_1738)" fillOpacity="0.5" />
                </g>
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26.25" id="filter0_i_2005_1738" width="24.9471" x="1.52822" y="1.16699">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="0.583333" />
                  <feGaussianBlur stdDeviation="0.291667" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
                  <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2005_1738" />
                </filter>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2005_1738" x1="-2.33335" x2="-9.75421" y1="-0.583007" y2="18.8451">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </BackgroundImage2>
            <BackgroundImage1 additionalClassNames="whitespace-nowrap">Settings</BackgroundImage1>
          </>
        )}
      </BackgroundImage>
    </div>
  );
}

export type MapLayerOption = "none" | "privacy-score" | "surveillance" | "isp-regulations" | "identity" | "p2p";

const mapLayerLabels: Record<MapLayerOption, string> = {
  "none": "None",
  "privacy-score": "Privacy score",
  "surveillance": "Surveillance",
  "isp-regulations": "ISP regulations",
  "identity": "Identity",
  "p2p": "P2P",
};

function MapLayerIcon({ layer }: { layer: MapLayerOption }) {
  const iconMap: Record<string, React.ReactNode> = {
    "privacy-score": <ProtonPrivacyScore />,
    "surveillance": <SurveillanceAlliances />,
    "isp-regulations": <IspRegulations />,
    "identity": <Identity />,
    "p2p": <P2P />,
  };
  return iconMap[layer] ?? null;
}

export type VpnFeatureType = "netshield" | "killswitch" | "portforwarding" | "splittunneling";

type RightVpnFeaturesProps = {
  onMapLayerMouseEnter?: () => void;
  onMapLayerMouseLeave?: () => void;
  selectedMapLayer?: MapLayerOption;
  mapLayerOpen?: boolean;
  onFeatureHover?: (feature: VpnFeatureType, top: number, left: number) => void;
  onFeatureLeave?: () => void;
};

export default function RightVpnFeatures({ onMapLayerMouseEnter, onMapLayerMouseLeave, selectedMapLayer = "none", mapLayerOpen = false, onFeatureHover, onFeatureLeave }: RightVpnFeaturesProps) {
  return (
      <div className="font-segoe-ui backdrop-blur-[16px] content-stretch flex flex-col items-start min-h-px min-w-px relative rounded-[8px] size-full" data-name="Features">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="relative shrink-0 w-full" data-name="Features bar">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[8px] items-center p-[8px] relative w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Features">
                <div className="w-full rounded-[4px] transition-colors duration-150 hover:bg-[rgba(255,255,255,0.1)]" onMouseEnter={(e) => { const r = e.currentTarget.getBoundingClientRect(); onFeatureHover?.("netshield", r.top, r.left); }} onMouseLeave={() => onFeatureLeave?.()}>
                <FeatureButtonBackgroundImage>
                  <div className="relative shrink-0 size-[28px]" data-name="Wrapper">
                    <div className="absolute left-0 size-[28px] top-0" data-name="VPN feature">
                      <div className="absolute inset-[0_6.25%]" data-name="Inner group">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 28">
                          <g id="Inner group">
                            <g id="Vector">
                              <path d={svgPaths.p20338600} fill="url(#paint0_linear_2005_1775)" />
                              <path d={svgPaths.p20338600} fill="var(--fill-1, black)" fillOpacity="0.4" />
                            </g>
                            <g filter="url(#filter0_di_2005_1775)" id="Vector_2">
                              <path d={svgPaths.p280cb300} fill="url(#paint1_linear_2005_1775)" />
                            </g>
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22.6111" id="filter0_di_2005_1775" width="20.2778" x="2.11111" y="2.80556">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="0.694444" />
                              <feGaussianBlur stdDeviation="0.694444" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2005_1775" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2005_1775" mode="normal" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="0.925926" />
                              <feGaussianBlur stdDeviation="0.925926" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
                              <feBlend in2="shape" mode="normal" result="effect2_innerShadow_2005_1775" />
                            </filter>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2005_1775" x1="7.47527" x2="14.0144" y1="32.3431" y2="-1.18204">
                              <stop stopColor="#8A6EFF" />
                              <stop offset="1" stopColor="#25ECC6" />
                            </linearGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2005_1775" x1="13.0703" x2="12.9705" y1="28.15" y2="2.01744">
                              <stop offset="0.00514267" stopColor="#6898EC" />
                              <stop offset="0.140625" stopColor="#41CAD6" />
                              <stop offset="0.651042" stopColor="#25ECC6" />
                              <stop offset="1" stopColor="white" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <BackgroundImage1 additionalClassNames="min-w-full text-center w-[min-content]">NetShield</BackgroundImage1>
                </FeatureButtonBackgroundImage>
                </div>
                <div className="w-full rounded-[4px] transition-colors duration-150 hover:bg-[rgba(255,255,255,0.1)]" onMouseEnter={(e) => { const r = e.currentTarget.getBoundingClientRect(); onFeatureHover?.("killswitch", r.top, r.left); }} onMouseLeave={() => onFeatureLeave?.()}>
                <FeatureButtonBackgroundImage>
                  <div className="overflow-clip relative shrink-0 size-[28px]" data-name="VPN feature">
                    <div className="absolute contents inset-0" data-name="Inner group">
                      <div className="absolute inset-[0_7.81%] rounded-[7.5px]" style={{ backgroundImage: "linear-gradient(147.412deg, rgba(255, 255, 255, 0.2) 20.074%, rgba(255, 255, 255, 0) 58.977%), linear-gradient(90deg, rgb(59, 55, 71) 0%, rgb(59, 55, 71) 100%)" }}>
                        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0.598px_0.598px_0px_rgba(255,255,255,0.5)]" />
                      </div>
                      <div className="absolute flex inset-0 items-center justify-center">
                        <div className="-rotate-90 flex-none size-[31.111px]">
                          <BackgroundImage2 additionalClassNames="size-full">
                            <g clipPath="url(#clip0_2005_1767)" id="Frame 13942" opacity="0.7">
                              <mask height="24" id="mask0_2005_1767" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="2">
                                <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Rectangle 5177" rx="7.29167" transform="rotate(90 28 2.1875)" width="23.625" x="28" y="2.1875" />
                              </mask>
                              <g mask="url(#mask0_2005_1767)">
                                <path d={svgPaths.p2498bf80} fill="url(#paint0_linear_2005_1767)" id="Rectangle 2877" opacity="0.6" />
                                <path d={svgPaths.p30319b00} fill="url(#paint1_linear_2005_1767)" id="Rectangle 2879" opacity="0.6" />
                                <path d={svgPaths.p371f0900} fill="url(#paint2_linear_2005_1767)" id="Rectangle 2881" opacity="0.6" />
                                <path d={svgPaths.p200c04f0} fill="url(#paint3_linear_2005_1767)" id="Rectangle 2883" opacity="0.6" />
                                <path d={svgPaths.p1b944f00} fill="url(#paint4_linear_2005_1767)" id="Rectangle 2885" opacity="0.6" />
                              </g>
                            </g>
                            <defs>
                              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2005_1767" x1="31.0679" x2="14.6448" y1="9.04671" y2="-9.26099">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                              </linearGradient>
                              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2005_1767" x1="36.4524" x2="-13.3553" y1="23.5851" y2="-23.261">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                              </linearGradient>
                              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2005_1767" x1="31.0674" x2="-17.6634" y1="28.9699" y2="-17.0685">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                              </linearGradient>
                              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_2005_1767" x1="7.10713" x2="-33.5467" y1="19.0081" y2="-19.7611">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                              </linearGradient>
                              <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_2005_1767" x1="4.41446" x2="-38.9317" y1="24.3931" y2="-14.3761">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                              </linearGradient>
                              <clipPath id="clip0_2005_1767">
                                <rect fill="white" height="28" width="28" />
                              </clipPath>
                            </defs>
                          </BackgroundImage2>
                        </div>
                      </div>
                      <div className="absolute bg-[#3b3747] bottom-[7.81%] left-1/4 right-1/4 rounded-[4.5px] top-[7.81%]" />
                      <div className="absolute flex inset-[11.82%_28.18%_11.81%_28.18%] items-center justify-center">
                        <div className="-scale-y-100 flex-none h-[23.759px] w-[13.576px]">
                          <div className="relative size-full" data-name="Switch">
                            <div className="absolute inset-[-4.35%_-7.64%_-4.37%_-7.64%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0848 23.2485">
                                <g id="Switch">
                                  <path d={svgPaths.p942d100} fill="url(#paint0_linear_2005_1755)" id="Rectangle 2888" />
                                  <g filter="url(#filter0_f_2005_1755)" id="Rectangle 2889">
                                    <path d={svgPaths.pe958980} fill="url(#paint1_linear_2005_1755)" fillOpacity="0.4" />
                                  </g>
                                  <path clipRule="evenodd" d={svgPaths.p28d30e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Ellipse 1011 (Stroke)" />
                                  <path clipRule="evenodd" d={svgPaths.p3a79d240} fill="var(--fill-0, white)" fillRule="evenodd" id="Line 5417 (Stroke)" />
                                  <g id="Bottom">
                                    <g filter="url(#filter1_i_2005_1755)" id="Subtract">
                                      <path d={svgPaths.p291d2800} fill="url(#paint2_linear_2005_1755)" />
                                    </g>
                                    <path d={svgPaths.p2d3b1200} fill="url(#paint3_linear_2005_1755)" id="Rectangle 2889_2" opacity="0.2" />
                                    <g id="Group 13962">
                                      <mask height="21" id="mask0_2005_1755" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="0" y="0">
                                        <path d={svgPaths.p35925580} fill="url(#paint4_linear_2005_1755)" id="Rectangle 2890" opacity="0.6" />
                                      </mask>
                                      <g mask="url(#mask0_2005_1755)">
                                        <g filter="url(#filter2_f_2005_1755)" id="Ellipse 1015" opacity="0.6">
                                          <ellipse cx="7.04286" cy="19.3894" fill="var(--fill-0, black)" fillOpacity="0.8" rx="5.34545" ry="0.763636" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <defs>
                                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.2485" id="filter0_f_2005_1755" width="14.0848" x="0" y="0">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                    <feGaussianBlur result="effect1_foregroundBlur_2005_1755" stdDeviation="0.848485" />
                                  </filter>
                                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="18.7355" id="filter1_i_2005_1755" width="12.2182" x="0.933615" y="3.9705">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                    <feOffset dy="0.388889" />
                                    <feGaussianBlur stdDeviation="0.194444" />
                                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" />
                                    <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2005_1755" />
                                  </filter>
                                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.92121" id="filter2_f_2005_1755" width="14.0848" x="0.00044024" y="16.9288">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                    <feGaussianBlur result="effect1_foregroundBlur_2005_1755" stdDeviation="0.848485" />
                                  </filter>
                                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2005_1755" x1="16.9697" x2="12.7697" y1="0.169834" y2="22.6971">
                                    <stop stopColor="#898690" />
                                    <stop offset="1" stopColor="#403C4C" />
                                  </linearGradient>
                                  <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2005_1755" x1="7.04242" x2="7.80605" y1="0.551362" y2="20.7877">
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                  </linearGradient>
                                  <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2005_1755" x1="-0.65745" x2="14.7426" y1="17.9256" y2="17.9256">
                                    <stop stopColor="#3B3747" />
                                    <stop offset="0.0001" stopColor="#3B3747" />
                                    <stop offset="0.502563" stopColor="#95929B" />
                                    <stop offset="1" stopColor="#3B3747" />
                                  </linearGradient>
                                  <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_2005_1755" x1="7.04266" x2="7.04266" y1="20.0254" y2="14.2981">
                                    <stop />
                                    <stop offset="1" stopOpacity="0" />
                                  </linearGradient>
                                  <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_2005_1755" x1="7.04257" x2="7.04257" y1="20.0254" y2="14.2981">
                                    <stop />
                                    <stop offset="1" stopOpacity="0" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <BackgroundImage1 additionalClassNames="min-w-full text-center w-[min-content]">Kill switch</BackgroundImage1>
                </FeatureButtonBackgroundImage>
                </div>
                <div className="w-full rounded-[4px] transition-colors duration-150 hover:bg-[rgba(255,255,255,0.1)]" onMouseEnter={(e) => { const r = e.currentTarget.getBoundingClientRect(); onFeatureHover?.("portforwarding", r.top, r.left); }} onMouseLeave={() => onFeatureLeave?.()}>
                <FeatureButtonBackgroundImage>
                  <div className="relative shrink-0 size-[28px]" data-name="VPN feature">
                    <div className="absolute inset-[0_-10.59%_4.17%_-10.59%]" data-name="Inner group">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.9308 26.8333">
                        <g id="Inner group">
                          <g id="Vector 15 (Stroke)">
                            <path clipRule="evenodd" d={svgPaths.p14197d00} fill="url(#paint0_linear_2005_1743)" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p14197d00} fill="url(#paint1_linear_2005_1743)" fillRule="evenodd" />
                          </g>
                          <g id="Vector 16 (Stroke)">
                            <path clipRule="evenodd" d={svgPaths.pee32f00} fill="url(#paint2_linear_2005_1743)" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.pee32f00} fill="url(#paint3_linear_2005_1743)" fillRule="evenodd" />
                          </g>
                          <g filter="url(#filter0_i_2005_1743)" id="Rectangle 2911">
                            <path d={svgPaths.p1b1a3ac0} fill="var(--fill-0, #46979A)" />
                          </g>
                          <g filter="url(#filter1_i_2005_1743)" id="Rectangle 2912">
                            <path d={svgPaths.p2dd9600} fill="var(--fill-0, #46979A)" />
                          </g>
                          <g filter="url(#filter2_i_2005_1743)" id="Rectangle 2906">
                            <path d={svgPaths.p15914440} fill="var(--fill-0, #585366)" />
                            <path d={svgPaths.p15914440} fill="var(--fill-1, #33DCCE)" fillOpacity="0.5" />
                          </g>
                          <g filter="url(#filter3_i_2005_1743)" id="Union">
                            <path d={svgPaths.p2e707b00} fill="url(#paint4_linear_2005_1743)" />
                          </g>
                          <g filter="url(#filter4_i_2005_1743)" id="Union_2">
                            <path d={svgPaths.p26a278c0} fill="url(#paint5_linear_2005_1743)" />
                          </g>
                          <g filter="url(#filter5_i_2005_1743)" id="Union_3">
                            <path d={svgPaths.p136daf00} fill="url(#paint6_linear_2005_1743)" />
                          </g>
                          <g id="Union_4">
                            <path d={svgPaths.p20b09a80} fill="url(#paint7_linear_2005_1743)" />
                            <path d={svgPaths.p20b09a80} fill="url(#paint8_linear_2005_1743)" />
                          </g>
                          <g id="Union_5">
                            <path d={svgPaths.p3f91200} fill="url(#paint9_linear_2005_1743)" />
                            <path d={svgPaths.p3f91200} fill="url(#paint10_linear_2005_1743)" />
                          </g>
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2.59259" id="filter0_i_2005_1743" width="3.5" x="5.29867" y="24.5">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="0.259259" />
                            <feGaussianBlur stdDeviation="0.324074" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0" />
                            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2005_1743" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2.59259" id="filter1_i_2005_1743" width="3.5" x="25.1321" y="24.5">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="0.259259" />
                            <feGaussianBlur stdDeviation="0.324074" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0" />
                            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2005_1743" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="11.6861" id="filter2_i_2005_1743" width="28" x="2.96539" y="13.44">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="0.486111" />
                            <feGaussianBlur stdDeviation="0.243056" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" />
                            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2005_1743" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.36823" id="filter3_i_2005_1743" width="7.36815" x="12.9573" y="15.6803">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="-0.648148" dy="0.648148" />
                            <feGaussianBlur stdDeviation="0.324074" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2005_1743" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.36823" id="filter4_i_2005_1743" width="7.36815" x="21.357" y="15.6803">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="-0.648148" dy="0.648148" />
                            <feGaussianBlur stdDeviation="0.324074" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2005_1743" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.36823" id="filter5_i_2005_1743" width="7.36815" x="4.55716" y="15.6803">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="-0.648148" dy="0.648148" />
                            <feGaussianBlur stdDeviation="0.324074" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2005_1743" />
                          </filter>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2005_1743" x1="4.8219" x2="16.0077" y1="7.69915" y2="11.7576">
                            <stop stopColor="#43414B" />
                            <stop offset="1" stopColor="#A39FB5" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2005_1743" x1="14.215" x2="5.44097" y1="18.822" y2="19.5705">
                            <stop stopColor="#8A6EFF" />
                            <stop offset="1" stopColor="#25ECC6" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2005_1743" x1="29.1089" x2="17.9231" y1="7.69856" y2="11.757">
                            <stop stopColor="#43414B" />
                            <stop offset="1" stopColor="#A39FB5" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_2005_1743" x1="19.7158" x2="28.4899" y1="18.8214" y2="19.5699">
                            <stop stopColor="#8A6EFF" />
                            <stop offset="1" stopColor="#25ECC6" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_2005_1743" x1="20.1156" x2="15.1578" y1="15.7509" y2="22.7847">
                            <stop offset="0.00514267" stopColor="#6898EC" />
                            <stop offset="0.567708" stopColor="#25ECC6" />
                            <stop offset="1" stopColor="white" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_2005_1743" x1="28.5152" x2="23.5575" y1="15.7509" y2="22.7847">
                            <stop offset="0.00514267" stopColor="#6898EC" />
                            <stop offset="0.567708" stopColor="#25ECC6" />
                            <stop offset="1" stopColor="white" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_2005_1743" x1="11.7154" x2="6.75765" y1="15.7509" y2="22.7847">
                            <stop offset="0.00514267" stopColor="#6898EC" />
                            <stop offset="0.567708" stopColor="#25ECC6" />
                            <stop offset="1" stopColor="white" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_2005_1743" x1="14.0463" x2="20.0852" y1="2.22414" y2="6.37969">
                            <stop stopColor="#817D8F" />
                            <stop offset="1" stopColor="#C9C6D8" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_2005_1743" x1="12.337" x2="24.6645" y1="3.0625" y2="2.99311">
                            <stop offset="0.00514267" stopColor="#6898EC" />
                            <stop offset="0.140625" stopColor="#41CAD6" />
                            <stop offset="0.651042" stopColor="#25ECC6" />
                            <stop offset="1" stopColor="white" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_2005_1743" x1="18.2312" x2="12.6509" y1="6.17586" y2="2.97584">
                            <stop stopColor="#817D8F" />
                            <stop offset="1" stopColor="#C9C6D8" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_2005_1743" x1="19.6556" x2="9.3826" y1="5.3375" y2="5.38569">
                            <stop offset="0.00514267" stopColor="#6898EC" />
                            <stop offset="0.140625" stopColor="#41CAD6" />
                            <stop offset="0.651042" stopColor="#25ECC6" />
                            <stop offset="1" stopColor="white" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <BackgroundImage1 additionalClassNames="min-w-full text-center w-[min-content]">Port forwarding</BackgroundImage1>
                </FeatureButtonBackgroundImage>
                </div>
                <div className="w-full rounded-[4px] transition-colors duration-150 hover:bg-[rgba(255,255,255,0.1)]" onMouseEnter={(e) => { const r = e.currentTarget.getBoundingClientRect(); onFeatureHover?.("splittunneling", r.top, r.left); }} onMouseLeave={() => onFeatureLeave?.()}>
                <FeatureButtonBackgroundImage>
                  <div className="relative shrink-0 size-[28px]" data-name="VPN feature">
                    <div className="absolute inset-[0_16.67%_-1.04%_16.67%]" data-name="Inner group">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 28.2917">
                        <g id="Inner group">
                          <g filter="url(#filter0_i_2005_1711)" id="Subtract" opacity="0.34">
                            <path d={svgPaths.p35304600} fill="url(#paint0_radial_2005_1711)" />
                          </g>
                          <g filter="url(#filter1_i_2005_1711)" id="Vector (Stroke)">
                            <path d={svgPaths.p5959880} fill="var(--fill-0, #585366)" />
                            <path d={svgPaths.p5959880} fill="url(#paint1_linear_2005_1711)" fillOpacity="0.5" />
                          </g>
                          <path d={svgPaths.p195bbb40} fill="url(#paint2_linear_2005_1711)" id="Union" />
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16.7481" id="filter0_i_2005_1711" width="11.2001" x="3.73335" y="3.5">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="1.2963" />
                            <feGaussianBlur stdDeviation="0.324074" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
                            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2005_1711" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="21.4861" id="filter1_i_2005_1711" width="18.6667" x="0" y="0">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="0.486111" />
                            <feGaussianBlur stdDeviation="0.243056" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" />
                            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2005_1711" />
                          </filter>
                          <radialGradient cx="0" cy="0" gradientTransform="matrix(3.01082e-07 8.75 -9.39931 -0.979889 9.33337 12.25)" gradientUnits="userSpaceOnUse" id="paint0_radial_2005_1711" r="1">
                            <stop offset="0.421875" stopColor="#9C98AD" />
                            <stop offset="1" stopColor="#3B3747" />
                          </radialGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2005_1711" x1="25.2473" x2="28.5174" y1="-0.997328" y2="16.6631">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2005_1711" x1="8.58012" x2="14.879" y1="29.1158" y2="20.9389">
                            <stop stopColor="#817D8F" />
                            <stop offset="1" stopColor="#C9C6D8" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <BackgroundImage1 additionalClassNames="min-w-full text-center w-[min-content]">Split tunneling</BackgroundImage1>
                </FeatureButtonBackgroundImage>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98 1">
                    <line id="Line 5426" stroke="var(--stroke-0, white)" strokeOpacity="0.1" x2="98" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <FeatureButton className="backdrop-blur-[12px] relative rounded-[4px] shrink-0 w-full" enabled="No" type="Settings" />
                <div
                  onMouseEnter={onMapLayerMouseEnter}
                  onMouseLeave={onMapLayerMouseLeave}
                  className={clsx(
                    "w-full rounded-[4px] transition-colors duration-150 group",
                    mapLayerOpen ? "bg-[rgba(255,255,255,0.15)]" : "hover:bg-[rgba(255,255,255,0.1)]"
                  )}
                >
                <FeatureButtonBackgroundImage>
                  {selectedMapLayer !== "none" ? (
                    <div className="relative shrink-0 size-[28px]">
                      <MapLayerIcon layer={selectedMapLayer} />
                    </div>
                  ) : (
                  <BackgroundImage2 additionalClassNames="shrink-0 size-[28px]">
                    <g id="isp-regulations">
                      <g filter="url(#filter0_i_2005_1733)" id="Union">
                        <path d={svgPaths.p1b54d880} fill="var(--fill-0, #585366)" />
                        <path d={svgPaths.p1b54d880} fill="url(#paint0_linear_2005_1733)" fillOpacity="0.5" />
                      </g>
                      <g filter="url(#filter1_i_2005_1733)" id="Union_2">
                        <path d={svgPaths.p1ee219c0} fill="var(--fill-0, #585366)" />
                        <path d={svgPaths.p1ee219c0} fill="url(#paint1_linear_2005_1733)" fillOpacity="0.5" />
                      </g>
                      <g filter="url(#filter2_i_2005_1733)" id="Union_3">
                        <path d={svgPaths.p15bc5900} fill="var(--fill-0, #585366)" />
                        <path d={svgPaths.p15bc5900} fill="url(#paint2_linear_2005_1733)" fillOpacity="0.5" />
                      </g>
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16.58" id="filter0_i_2005_1733" width="26" x="1" y="10.42">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="-0.58" />
                        <feGaussianBlur stdDeviation="0.291667" />
                        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                        <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2005_1733" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16.58" id="filter1_i_2005_1733" width="26" x="1" y="5.42">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="-0.58" />
                        <feGaussianBlur stdDeviation="0.291667" />
                        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                        <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2005_1733" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16.58" id="filter2_i_2005_1733" width="26" x="1" y="0.42">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="-0.58" />
                        <feGaussianBlur stdDeviation="0.291667" />
                        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                        <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2005_1733" />
                      </filter>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2005_1733" x1="30.5455" x2="33.6368" y1="9.90909" y2="23.0604">
                        <stop />
                        <stop offset="1" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2005_1733" x1="30.5455" x2="33.6368" y1="4.90909" y2="18.0604">
                        <stop />
                        <stop offset="1" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2005_1733" x1="30.5455" x2="33.6368" y1="-0.0909089" y2="13.0604">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </BackgroundImage2>
                  )}
                  <div className="font-segoe-ui content-stretch flex flex-col font-normal gap-[2px] items-center relative shrink-0 text-[12px] whitespace-nowrap">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-white" style={{ fontVariationSettings: "'opsz' 8" }}>
                      <p className="leading-[16px]">Map layer</p>
                    </div>
                    <p className="leading-[16px] relative shrink-0 text-[rgba(255,255,255,0.7)] text-center" style={{ fontVariationSettings: "'opsz' 8" }}>
                      {mapLayerLabels[selectedMapLayer]}
                    </p>
                  </div>
                </FeatureButtonBackgroundImage>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}