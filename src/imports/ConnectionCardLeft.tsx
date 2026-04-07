import clsx from "clsx";
import svgPaths from "./svg-tjzja5cjmi";
import { getIsoCode } from "../app/components/flagComponents";

function ConnectionCardLeftHelper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <p style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'fina', 'init'" }} className="font-['Segoe_UI_Variable:Semibold_Text',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] whitespace-nowrap font-[Segoe_UI_Variable]">
      {children}
    </p>
  );
}

function ConnectionCardLeftHelper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 36" }} className="flex flex-col font-['Segoe_UI_Variable:Semibold_Display',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[28px] text-center text-white whitespace-nowrap">
      <p className="leading-[36px] font-[Segoe_UI_Variable]">{children}</p>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 5.4">
        {children}
      </svg>
    </div>
  );
}
type ConnectionCardLeftHelperProps = {
  additionalClassNames?: string;
};

function ConnectionCardLeftHelper({ children, additionalClassNames = "" }: React.PropsWithChildren<ConnectionCardLeftHelperProps>) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center pb-[12px] pt-[10px] px-[24px] relative w-full", additionalClassNames)}>
      <div className="flex flex-col font-['Segoe_UI_Variable:Semibold_Text',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'fina', 'init'" }}>
        <p className="leading-[20px] font-[Segoe_UI_Variable]">{children}</p>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[4px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative">{children}</div>
      </div>
    </div>
  );
}
type ConnectionCardLeftTorTextProps = {
  text: string;
};

function ConnectionCardLeftTorText({ text, children }: React.PropsWithChildren<ConnectionCardLeftTorTextProps>) {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="ic-brand-tor">
        <div className="absolute inset-[6.25%_12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
            {children}
          </svg>
        </div>
      </div>
      <p className="font-['Segoe_UI_Variable:Semibold_Small',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 8" }}>
        {text}
      </p>
    </div>
  );
}
type ConnectionCardLeftP2PTextProps = {
  text: string;
};

function ConnectionCardLeftP2PText({ text, children }: React.PropsWithChildren<ConnectionCardLeftP2PTextProps>) {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="ic-arrow-right-arrow-left">
        <div className="absolute flex inset-[6.25%] items-center justify-center">
          <div className="-scale-y-100 flex-none rotate-90 size-[14px]">
            <div className="relative size-full" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                {children}
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Segoe_UI_Variable:Semibold_Small',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 8" }}>
        {text}
      </p>
    </div>
  );
}

function ConnectionCardLeftGateway24X() {
  return (
    <div className="absolute bottom-1/4 left-0 overflow-clip right-1/4 top-0">
      <Wrapper1 additionalClassNames="inset-[55%_0_0_0]">
        <g id="Group 14018">
          <rect fill="var(--fill-0, #5C586A)" height="5.4" id="Rectangle 1903" rx="1.2" width="18" />
          <path d={svgPaths.p1760eb00} fill="var(--fill-0, #A3A0AE)" id="Rectangle 1904" />
        </g>
      </Wrapper1>
      <Wrapper1 additionalClassNames="inset-[0_0_55%_0]">
        <g id="Group 14017">
          <rect fill="var(--fill-0, #5C586A)" height="5.4" id="Rectangle 1903" rx="1.2" width="18" />
          <path d={svgPaths.p29743170} fill="var(--fill-0, #A3A0AE)" id="Rectangle 1904" />
          <rect fill="var(--fill-0, #A3A0AE)" height="1.8" id="Rectangle 1906" rx="0.9" width="1.8" x="14.4" y="1.8" />
        </g>
      </Wrapper1>
      <div className="absolute bg-[#43404e] h-[2.7px] left-[4.05px] top-[12.15px] w-[32.4px]" />
    </div>
  );
}

function ConnectionCardLeftButton() {
  return (
    <Wrapper>
      <div className="relative shrink-0 size-[20px]" data-name="ic-placeholder">
        <div className="absolute inset-[6.46%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4142 17.4142">
            <path clipRule="evenodd" d={svgPaths.p15ab34f0} fill="var(--fill-0, #DB1DDB)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </Wrapper>
  );
}

function Vector() {
  return (
    <div className="absolute inset-[-0.02%_0]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 21.34">
        <path d="M12.29 0H0V21.34H32V0H12.29Z" fill="var(--fill-0, #6D697D)" id="Vector" />
      </svg>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("absolute overflow-clip right-0 rounded-[4px]", additionalClassNames)}>
      <Vector />
    </div>
  );
}
type ConnectionCardLeftProps = {
  className?: string;
  p2P?: boolean;
  status?: boolean;
  tor?: boolean;
  type?: "Fastest" | "Standard" | "Secure Core" | "Profile" | "B2B";
};

function ConnectionCardLeft({ className, p2P = false, status = false, tor = false, type = "Fastest" }: ConnectionCardLeftProps) {
  const isB2BAndIsFalseOrTrue = type === "B2B" && [false, true].includes(status);
  const isNotStatusAndFastest = !status && type === "Fastest";
  const isNotStatusAndProfile = !status && type === "Profile";
  const isNotStatusAndSecureCore = !status && type === "Secure Core";
  const isNotStatusAndStandard = !status && type === "Standard";
  const isProfileAndIsFalseOrTrue = type === "Profile" && [false, true].includes(status);
  const isSecureCoreAndIsFalseOrTrue = type === "Secure Core" && [false, true].includes(status);
  const isStandardAndIsFalseOrTrue = type === "Standard" && [false, true].includes(status);
  const isStatusAndFastest = status && type === "Fastest";
  const isStatusAndIsStandardOrSecureCoreOrFastestOrProfileOrB2B = status && ["Standard", "Secure Core", "Fastest", "Profile", "B2B"].includes(type);
  const isStatusAndProfile = status && type === "Profile";
  const isStatusAndSecureCore = status && type === "Secure Core";
  const isStatusAndStandard = status && type === "Standard";
  return (
    <div className={className || "relative"}>
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center relative">
          <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Text wrapper">
            <div className={`content-stretch flex gap-[16px] items-center relative shrink-0 ${status && ["Standard", "Secure Core"].includes(type) ? "justify-center" : ""}`} data-name="Country">
              {(isNotStatusAndSecureCore || isStatusAndSecureCore || isStatusAndFastest) && (
                <>
                  <div className="h-[36px] overflow-clip relative shrink-0 w-[54px]" data-name="sc-double-flags-3:2">
                    {isSecureCoreAndIsFalseOrTrue && (
                      <>
                        <div className="absolute inset-[37.5%_37.5%_0_0] overflow-clip rounded-[4px]" data-name="Middle country">
                          <Vector />
                        </div>
                        <div className="absolute inset-[37.5%_37.5%_0.01%_0]" data-name="shadow">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 9.99844">
                            <g id="shadow" opacity="0.4">
                              <mask height="10" id="mask0_2005_4775" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="15" x="0" y="0">
                                <path d={svgPaths.p24a3bdf0} fill="var(--fill-0, black)" id="Vector" />
                              </mask>
                              <g mask="url(#mask0_2005_4775)">
                                <path d={svgPaths.p216993f0} fill="var(--fill-0, black)" id="Vector_2" />
                              </g>
                            </g>
                          </svg>
                        </div>
                        <Helper additionalClassNames="bottom-1/4 left-1/4 top-0" />
                      </>
                    )}
                    {isStatusAndFastest && (
                      <>
                        <div className="absolute h-[26.88px] left-0 top-0 w-[40.32px]" data-name="Fastest">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.32 26.88">
                            <g data-figma-bg-blur-radius="2.98667" id="Fastest">
                              <rect fill="var(--fill-0, #2CFFCC)" height="26.88" rx="4.32" width="40.32" />
                              <path d={svgPaths.p387d2380} fill="var(--fill-0, #16141C)" id="Union" />
                            </g>
                            <defs>
                              <clipPath id="bgblur_0_2005_4788_clip_path" transform="translate(2.98667 2.98667)">
                                <rect height="26.88" rx="4.32" width="40.32" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="absolute inset-[0_25.37%_25.28%_0]" data-name="shadow">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.3 26.9">
                            <g id="shadow">
                              <mask height="27" id="mask0_2005_4791" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="41" x="0" y="0">
                                <path d={svgPaths.p3f8ec940} fill="var(--fill-0, black)" id="Vector" />
                              </mask>
                              <g mask="url(#mask0_2005_4791)">
                                <path d={svgPaths.p19c44580} fill="var(--fill-0, black)" id="Vector_2" opacity="0.4" />
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className="absolute bottom-0 overflow-clip right-[0.09px] rounded-[4px] top-[37.5%] w-[33.75px]" data-name="Middle country">
                          <Vector />
                        </div>
                      </>
                    )}
                  </div>
                  <ConnectionCardLeftHelper1>{isStatusAndFastest ? "Fastest country" : isSecureCoreAndIsFalseOrTrue ? "[Country]" : ""}</ConnectionCardLeftHelper1>
                </>
              )}
              {isStandardAndIsFalseOrTrue && (
                <>
                  <div className="h-[36px] overflow-clip relative rounded-[6px] shrink-0 w-[54px]" data-name="Flag - rounded">
                    <Vector />
                  </div>
                  <ConnectionCardLeftHelper1>[Country]</ConnectionCardLeftHelper1>
                </>
              )}
              {!status && ["Standard", "Secure Core"].includes(type) && <ConnectionCardLeftButton />}
              {isProfileAndIsFalseOrTrue && (
                <>
                  <div className="h-[36px] overflow-clip relative shrink-0 w-[54px]">
                    <div className="absolute inset-[0_22.22%_22.22%_0] overflow-clip" data-name="Profile icon">
                      <div className="absolute contents inset-[4.17%_0_5.14%_0]">
                        <div className="absolute inset-[4.17%_0_5.14%_0]" data-name="Union">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.0012 21.7675">
                            <path d={svgPaths.p16c0c100} fill="url(#paint0_linear_2005_4810)" id="Union" />
                            <defs>
                              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2005_4810" x1="26.3086" x2="38.3208" y1="-11.4878" y2="21.0557">
                                <stop stopColor="#EEBEFF" />
                                <stop offset="1" stopColor="#6D4AFF" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="absolute contents inset-[20.73%_13.39%_42.15%_15.58%]">
                          <div className="absolute contents inset-[20.73%_13.39%_42.15%_61.86%]" data-name="Buttons">
                            <div className="absolute flex inset-[33.1%_13.39%_54.52%_61.86%] items-center justify-center">
                              <div className="-rotate-90 flex-none h-[10.394px] w-[3.465px]">
                                <div className="relative size-full">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.96982 8.90946">
                                    <g id="Group 14006">
                                      <g id="Ellipse 1043">
                                        <circle cx="1.48491" cy="1.48491" fill="url(#paint0_linear_2005_4806)" r="1.48491" />
                                        <circle cx="1.48491" cy="1.48491" fill="var(--fill-1, white)" fillOpacity="0.7" r="1.48491" />
                                      </g>
                                      <g id="Ellipse 1044">
                                        <circle cx="1.48491" cy="7.4245" fill="url(#paint1_linear_2005_4806)" r="1.48491" />
                                        <circle cx="1.48491" cy="7.4245" fill="var(--fill-1, white)" fillOpacity="0.7" r="1.48491" />
                                      </g>
                                    </g>
                                    <defs>
                                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2005_4806" x1="2.17025" x2="4.41391" y1="-1.56732" y2="2.10794">
                                        <stop stopColor="#EEBEFF" />
                                        <stop offset="1" stopColor="#6D4AFF" />
                                      </linearGradient>
                                      <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2005_4806" x1="2.17025" x2="4.41391" y1="4.37227" y2="8.04753">
                                        <stop stopColor="#EEBEFF" />
                                        <stop offset="1" stopColor="#6D4AFF" />
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="absolute inset-[20.73%_21.64%_42.15%_70.11%]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.96982 8.90927">
                                <g id="Group 14007">
                                  <g id="Ellipse 1043">
                                    <circle cx="1.48491" cy="1.48491" fill="url(#paint0_linear_2005_4779)" r="1.48491" />
                                    <circle cx="1.48491" cy="1.48491" fill="var(--fill-1, white)" fillOpacity="0.7" r="1.48491" />
                                  </g>
                                  <g id="Ellipse 1044">
                                    <circle cx="1.48491" cy="7.42436" fill="url(#paint1_linear_2005_4779)" r="1.48491" />
                                    <circle cx="1.48491" cy="7.42436" fill="var(--fill-1, white)" fillOpacity="0.7" r="1.48491" />
                                  </g>
                                </g>
                                <defs>
                                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2005_4779" x1="2.17025" x2="4.41391" y1="-1.56732" y2="2.10794">
                                    <stop stopColor="#EEBEFF" />
                                    <stop offset="1" stopColor="#6D4AFF" />
                                  </linearGradient>
                                  <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2005_4779" x1="2.17025" x2="4.41391" y1="4.37213" y2="8.04739">
                                    <stop stopColor="#EEBEFF" />
                                    <stop offset="1" stopColor="#6D4AFF" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="absolute contents inset-[23.82%_63.8%_45.24%_15.58%]" data-name="Arrows">
                            <div className="absolute inset-[23.82%_71.01%_45.24%_22.8%]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.22737 7.4244">
                                <g id="Group 14008">
                                  <g id="Rectangle 3402">
                                    <path d={svgPaths.p8bd1600} fill="url(#paint0_linear_2005_4762)" />
                                    <path d={svgPaths.p8bd1600} fill="var(--fill-1, white)" fillOpacity="0.7" />
                                  </g>
                                  <g id="Rectangle 3403">
                                    <path d={svgPaths.p18417700} fill="url(#paint1_linear_2005_4762)" />
                                    <path d={svgPaths.p18417700} fill="var(--fill-1, white)" fillOpacity="0.7" />
                                  </g>
                                </g>
                                <defs>
                                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2005_4762" x1="1.33979" x2="3.27164" y1="-0.180214" y2="2.17049">
                                    <stop stopColor="#EEBEFF" />
                                    <stop offset="1" stopColor="#6D4AFF" />
                                  </linearGradient>
                                  <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2005_4762" x1="1.33979" x2="3.27164" y1="3.7581" y2="6.10881">
                                    <stop stopColor="#6D4AFF" />
                                    <stop offset="1" stopColor="#EEBEFF" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <div className="absolute flex inset-[34.65%_63.8%_56.07%_15.58%] items-center justify-center">
                              <div className="-rotate-90 flex-none h-[8.662px] w-[2.599px]">
                                <div className="relative size-full">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.2275 7.42418">
                                    <g id="Group 14009">
                                      <g id="Rectangle 3402">
                                        <path d={svgPaths.pcd6b700} fill="url(#paint0_linear_2005_4754)" />
                                        <path d={svgPaths.pcd6b700} fill="var(--fill-1, white)" fillOpacity="0.7" />
                                      </g>
                                      <g id="Rectangle 3403">
                                        <path d={svgPaths.p16ce5600} fill="url(#paint1_linear_2005_4754)" />
                                        <path d={svgPaths.p16ce5600} fill="var(--fill-1, white)" fillOpacity="0.7" />
                                      </g>
                                    </g>
                                    <defs>
                                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2005_4754" x1="1.06813" x2="-0.52925" y1="3.93833" y2="0.779107">
                                        <stop stopColor="#6D4AFF" />
                                        <stop offset="1" stopColor="#EEBEFF" />
                                      </linearGradient>
                                      <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2005_4754" x1="1.06806" x2="-0.291261" y1="7.31382" y2="4.62542">
                                        <stop stopColor="#EEBEFF" />
                                        <stop offset="1" stopColor="#6D4AFF" />
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {!false && <Helper additionalClassNames="bottom-0 top-[44.44%] w-[30px]" />}
                    {false && (
                      <div className="absolute h-[20px] left-[24px] top-[16px] w-[30px]" data-name="Fastest">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 20">
                          <g id="Fastest">
                            <rect fill="var(--fill-0, #2CFFCC)" height="20" rx="4" width="30" />
                            <path d={svgPaths.pa74e300} fill="var(--fill-0, #1C1B24)" id="Union" />
                          </g>
                        </svg>
                      </div>
                    )}
                  </div>
                  <ConnectionCardLeftHelper1>[Profile name]</ConnectionCardLeftHelper1>
                </>
              )}
              {isB2BAndIsFalseOrTrue && (
                <>
                  <div className="h-[36px] overflow-clip relative shrink-0 w-[54px]" data-name="Gateway-flag">
                    <div className="absolute bottom-1/4 contents left-0 right-1/4 top-0">
                      <ConnectionCardLeftGateway24X />
                      <ConnectionCardLeftGateway24X />
                      <div className="absolute bottom-1/4 flex items-center justify-center left-0 right-1/4 top-0">
                        <div className="-scale-y-100 flex-none h-[27px] w-[40.5px]">
                          <div className="relative size-full" data-name="shadow">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
                              <g id="shadow" opacity="0.4">
                                <mask height="12" id="mask0_2005_4802" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                                  <path d={svgPaths.p3d6e6e00} fill="var(--fill-0, black)" id="Vector" />
                                </mask>
                                <g mask="url(#mask0_2005_4802)">
                                  <path d={svgPaths.p1827d680} fill="var(--fill-0, black)" id="Vector_2" />
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute h-[22.5px] left-[20.25px] overflow-clip rounded-[1.5px] top-[13.5px] w-[33.75px]" data-name="Flag">
                      <div className="absolute inset-0 rounded-[1.5px]" data-name="Flag - rounded">
                        <Vector />
                      </div>
                    </div>
                  </div>
                  <ConnectionCardLeftHelper1>[Gateway name]</ConnectionCardLeftHelper1>
                </>
              )}
              {!status && ["Profile", "B2B"].includes(type) && <ConnectionCardLeftButton />}
              {isNotStatusAndFastest && (
                <>
                  <div className="h-[36px] relative shrink-0 w-[54px]" data-name="Fastest">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 36">
                      <g data-figma-bg-blur-radius="4" id="Fastest">
                        <rect fill="var(--fill-0, #2CFFCC)" height="36" rx="6" width="54" />
                        <path d={svgPaths.p13821900} fill="var(--fill-0, #16141C)" id="Union" />
                      </g>
                      <defs>
                        <clipPath id="bgblur_0_2005_4751_clip_path" transform="translate(4 4)">
                          <rect height="36" rx="6" width="54" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <ConnectionCardLeftHelper1>Fastest country</ConnectionCardLeftHelper1>
                  <Wrapper>
                    <div className="relative shrink-0 size-[20px]" data-name="ic-chevron-down-filled">
                      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                          <path d={svgPaths.p23d0cb00} fill="var(--fill-0, white)" fillOpacity="0.7" id="Icon" />
                        </svg>
                      </div>
                    </div>
                  </Wrapper>
                </>
              )}
            </div>
            {(isNotStatusAndStandard || isNotStatusAndFastest || isNotStatusAndProfile || (!status && type === "B2B") || isStatusAndStandard || isStatusAndFastest || isStatusAndProfile || (status && type === "B2B")) && (
              <div className={`content-stretch flex items-center relative shrink-0 ${isB2BAndIsFalseOrTrue ? "" : "gap-[8px]"}`} data-name="Subtitle">
                <ConnectionCardLeftHelper2>{isB2BAndIsFalseOrTrue ? "[Country] - [#2]" : isNotStatusAndProfile || isStatusAndFastest || isStatusAndProfile ? "[Country] - [City] - [#2]" : isStandardAndIsFalseOrTrue ? "[City] - [#2]" : "The best server based on your location "}</ConnectionCardLeftHelper2>
                {(isNotStatusAndStandard || isNotStatusAndProfile || isStatusAndStandard || isStatusAndFastest || isStatusAndProfile) && p2P && (
                  <ConnectionCardLeftP2PText text="P2P">
                    <path clipRule="evenodd" d={svgPaths.p190a7500} fill="var(--fill-0, #0C0C14)" fillRule="evenodd" id="Icon" />
                  </ConnectionCardLeftP2PText>
                )}
                {(isNotStatusAndStandard || isNotStatusAndProfile || isStatusAndStandard || isStatusAndFastest || isStatusAndProfile) && tor && (
                  <ConnectionCardLeftTorText text="Tor">
                    <path clipRule="evenodd" d={svgPaths.p30b11b00} fill="var(--fill-0, #0C0C14)" fillRule="evenodd" id="Icon" />
                  </ConnectionCardLeftTorText>
                )}
                {isNotStatusAndFastest && p2P && (
                  <ConnectionCardLeftP2PText text="P2P">
                    <path clipRule="evenodd" d={svgPaths.p190a7500} fill="var(--fill-0, white)" fillOpacity="0.7" fillRule="evenodd" id="Icon" />
                  </ConnectionCardLeftP2PText>
                )}
                {isNotStatusAndFastest && tor && (
                  <ConnectionCardLeftTorText text="Tor">
                    <path clipRule="evenodd" d={svgPaths.p30b11b00} fill="var(--fill-0, white)" fillOpacity="0.7" fillRule="evenodd" id="Icon" />
                  </ConnectionCardLeftTorText>
                )}
              </div>
            )}
            {isSecureCoreAndIsFalseOrTrue && <ConnectionCardLeftHelper2>via [Middle country]</ConnectionCardLeftHelper2>}
          </div>
          <div className={`relative rounded-[4px] shrink-0 w-[250px] ${isStatusAndIsStandardOrSecureCoreOrFastestOrProfileOrB2B ? "bg-[#4a4658]" : "bg-[#6d4aff]"}`} data-name="Button">
            <div aria-hidden={isStatusAndIsStandardOrSecureCoreOrFastestOrProfileOrB2B ? "true" : undefined} className={isStatusAndIsStandardOrSecureCoreOrFastestOrProfileOrB2B ? "absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" : "flex flex-row items-center justify-center size-full"}>
              {!status && ["Standard", "Secure Core", "Fastest", "Profile", "B2B"].includes(type) && <ConnectionCardLeftHelper additionalClassNames="gap-[10px]">{!status && ["Standard", "Secure Core", "Profile", "B2B"].includes(type) ? "Button" : "Connect"}</ConnectionCardLeftHelper>}
            </div>
            {isStatusAndIsStandardOrSecureCoreOrFastestOrProfileOrB2B && (
              <div className="flex flex-row items-center justify-center size-full">
                <ConnectionCardLeftHelper additionalClassNames="gap-[8px]">Button</ConnectionCardLeftHelper>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const countryToCity: Record<string, string> = {
  France: "Paris", Germany: "Frankfurt", Switzerland: "Zurich",
  "United Kingdom": "London", Sweden: "Stockholm", "United States": "New York",
  Australia: "Sydney", Netherlands: "Amsterdam", Austria: "Vienna",
  Belgium: "Brussels", Ireland: "Dublin", Iceland: "Reykjavik",
  "New Zealand": "Auckland", Portugal: "Lisbon", Spain: "Madrid",
  Latvia: "Riga", Lithuania: "Vilnius", Estonia: "Tallinn",
  Finland: "Helsinki", Canada: "Toronto", Japan: "Tokyo",
  "South Korea": "Seoul", Brazil: "São Paulo", Mexico: "Mexico City",
  Argentina: "Buenos Aires", Turkey: "Istanbul", Thailand: "Bangkok",
  Belarus: "Minsk", Russia: "Moscow", China: "Shanghai",
  India: "Mumbai", Vietnam: "Ho Chi Minh City", Iran: "Tehran",
  Egypt: "Cairo", "Saudi Arabia": "Riyadh",
};

function getCityForCountry(country: string): string {
  return countryToCity[country] ?? country;
}

type ConnectionCardLeft1Props = {
  vpnStatus?: "unprotected" | "connecting" | "protected";
  connectedCountry?: string | null;
  selectedCountry?: string | null;
  onConnect?: (country: string) => void;
  onDisconnect?: () => void;
  physicalCountry?: string;
};

export default function ConnectionCardLeft1({
  vpnStatus = "unprotected",
  connectedCountry,
  selectedCountry,
  onConnect,
  onDisconnect,
  physicalCountry = "Belarus",
}: ConnectionCardLeft1Props) {
  const displayCountry = vpnStatus === "unprotected"
    ? (selectedCountry || null)
    : connectedCountry;

  const isConnected = vpnStatus === "protected";
  const isConnecting = vpnStatus === "connecting";

  const title = displayCountry || "Fastest country";
  const subtitle = displayCountry
    ? `${getCityForCountry(displayCountry)} - #1`
    : "The best server based on your location ";

  const handleButtonClick = () => {
    if (isConnected || isConnecting) {
      onDisconnect?.();
    } else {
      onConnect?.(displayCountry || physicalCountry);
    }
  };

  const buttonLabel = isConnected ? "Disconnect" : isConnecting ? "Cancel" : "Connect";
  const buttonBg = isConnected || isConnecting
    ? "bg-[#4a4658] border border-[rgba(255,255,255,0.1)]"
    : "bg-[#6d4aff]";

  const flagUrl = displayCountry ? `https://flagcdn.com/${getIsoCode(displayCountry)}.svg` : null;
  const showFlag = !!flagUrl && (isConnecting || isConnected || displayCountry);

  return (
    <div className="relative">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-[16px] items-center">
          <div className="flex flex-col gap-[8px] items-center">
            <div className="flex gap-[16px] items-center">
              {showFlag ? (
                <img
                  src={flagUrl}
                  alt={`${displayCountry} flag`}
                  className="shrink-0 rounded-[6px] object-cover"
                  style={{ width: 54, height: 36 }}
                />
              ) : (
                <div className="h-[36px] relative shrink-0 w-[54px]" data-name="Fastest">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 36">
                    <g id="Fastest">
                      <rect fill="#2CFFCC" height="36" rx="6" width="54" />
                      <path d={svgPaths.p13821900} fill="#16141C" id="Union" />
                    </g>
                  </svg>
                </div>
              )}
              <div style={{ fontVariationSettings: "'opsz' 36" }} className="flex flex-col font-['Segoe_UI_Variable',sans-serif] font-semibold justify-end leading-[0] shrink-0 text-[28px] text-center text-white whitespace-nowrap">
                <p className="leading-[36px]">{title}</p>
              </div>
              {!isConnected && !isConnecting && (
                <div className="relative rounded-[4px] shrink-0">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="flex gap-[8px] items-center justify-center p-[8px]">
                      <div className="relative shrink-0 size-[20px]" data-name="ic-chevron-down-filled">
                        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                            <path d={svgPaths.p23d0cb00} fill="white" fillOpacity="0.7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <p style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'fina', 'init'" }}
              className="font-['Segoe_UI_Variable',sans-serif] font-semibold leading-[20px] text-[16px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">
              {subtitle}
            </p>
          </div>
          <button
            onClick={handleButtonClick}
            className={`relative rounded-[4px] w-[250px] cursor-pointer ${buttonBg} transition-all duration-300`}
          >
            <div className="flex items-center justify-center px-[24px] pt-[10px] pb-[12px]">
              <span style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'fina', 'init'" }}
                className="font-['Segoe_UI_Variable',sans-serif] font-semibold text-[16px] text-white leading-[20px]">
                {buttonLabel}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}