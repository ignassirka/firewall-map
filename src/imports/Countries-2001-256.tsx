import clsx from "clsx";
import svgPaths from "./svg-idfsp46egm";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className="h-[144px] relative rounded-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-center justify-center overflow-x-clip overflow-y-auto relative size-full">
        <div style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'fina', 'init'" }} className={clsx("flex flex-col font-['Segoe_UI_Variable:Semibold_Text',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[14px] text-center text-white", additionalClassNames)}>
          <p className="leading-[20px]">{children}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.7)] border-dashed inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}
type AllCountriesTextProps = {
  text: string;
};

function AllCountriesText({ text }: AllCountriesTextProps) {
  return <Wrapper additionalClassNames="w-[210px]">{text}</Wrapper>;
}

export default function Countries() {
  return (
    <div className="backdrop-blur-[16px] bg-[#16141c] content-stretch flex flex-col items-start relative rounded-[8px] size-full" data-name="Countries">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_100px_0px_rgba(24,22,32,0.2)]" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Sidebar">
        <div className="content-stretch flex flex-col gap-[24px] items-start pt-[16px] relative size-full">
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start px-[12px] relative w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Flag + title">
                  <div className="overflow-clip relative shrink-0 size-[28px]" data-name="isp-regulations">
                    <div className="absolute contents inset-[10.73%_0_10.7%_0]">
                      <div className="absolute inset-[10.73%_0_10.7%_0]" data-name="Union">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 22">
                          <g id="Union">
                            <path d={svgPaths.p14da1e00} fill="url(#paint0_linear_2001_283)" />
                            <path d={svgPaths.pc077e80} fill="url(#paint1_linear_2001_283)" />
                            <path d={svgPaths.p36fb0500} fill="url(#paint2_linear_2001_283)" />
                            <path d={svgPaths.p26f38600} fill="url(#paint3_linear_2001_283)" />
                          </g>
                          <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2001_283" x1="30.0506" x2="24.8673" y1="21.7558" y2="-3.81034">
                              <stop stopColor="#43414B" />
                              <stop offset="1" stopColor="#A39FB5" />
                            </linearGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2001_283" x1="30.0506" x2="24.8673" y1="21.7558" y2="-3.81034">
                              <stop stopColor="#43414B" />
                              <stop offset="1" stopColor="#A39FB5" />
                            </linearGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2001_283" x1="30.0506" x2="24.8673" y1="21.7558" y2="-3.81034">
                              <stop stopColor="#43414B" />
                              <stop offset="1" stopColor="#A39FB5" />
                            </linearGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_2001_283" x1="30.0506" x2="24.8673" y1="21.7558" y2="-3.81034">
                              <stop stopColor="#43414B" />
                              <stop offset="1" stopColor="#A39FB5" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="absolute inset-[36.22%_35.58%_34.94%_35.58%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.07694 8.07694">
                          <circle cx="4.03847" cy="4.03847" fill="url(#paint0_linear_2001_281)" id="Ellipse 1085" r="4.03847" />
                          <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2001_281" x1="8.66847" x2="6.30436" y1="7.9873" y2="-1.17469">
                              <stop stopColor="#43414B" />
                              <stop offset="1" stopColor="#A39FB5" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="absolute inset-[10.73%_0_10.7%_0] mix-blend-color" data-name="Union">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 22.0001">
                          <g id="Union" style={{ mixBlendMode: "color" }}>
                            <path d={svgPaths.p3eaffa30} fill="var(--fill-0, #2CFFCC)" />
                            <path d={svgPaths.p31280100} fill="var(--fill-0, #2CFFCC)" />
                            <path d={svgPaths.p2465e900} fill="var(--fill-0, #2CFFCC)" />
                            <path d={svgPaths.p9da79b0} fill="var(--fill-0, #2CFFCC)" />
                            <path d={svgPaths.p275a4e00} fill="var(--fill-0, #2CFFCC)" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Segoe_UI_Variable:Semibold_Text',sans-serif] font-semibold justify-end leading-[0] overflow-hidden relative shrink-0 text-[18px] text-center text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'fina', 'init'" }}>
                    <p className="leading-[24px] overflow-hidden">ISP regulations</p>
                  </div>
                </div>
                <div className="relative rounded-[4px] shrink-0" data-name="Button">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[4px] items-center justify-center p-[4px] relative">
                      <div className="relative shrink-0 size-[16px]" data-name="ic-info-circle">
                        <div className="absolute inset-[6.25%]" data-name="Icon">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                            <path clipRule="evenodd" d={svgPaths.p311cfa00} fill="var(--fill-0, white)" fillOpacity="0.7" fillRule="evenodd" id="Icon" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Segoe_UI_Variable:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[14px] text-white w-full" style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'rclt' 0" }}>
                <p className="leading-[20px]">Depending on the region, Internet Service Providers (ISPs) may log your browsing activity, use it for advertising, sell it to third parties, or share it with governments.</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Countries wrapper">
            <div className="overflow-x-clip overflow-y-auto size-full">
              <div className="content-stretch flex flex-col gap-[28px] items-start px-[12px] relative size-full">
                <Wrapper additionalClassNames="w-[228px]">
                  My country spotlight
                  <br aria-hidden="true" />
                  (I’m currently in Belarus, what’s the evaluation for my country)
                </Wrapper>
                <AllCountriesText text="Top VPN recommended countries to hide from ISP" />
                <AllCountriesText text="Top recommended actions" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}