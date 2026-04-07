import clsx from "clsx";
import svgPaths from "./svg-q7xf9nhd2w";
type FlagTitle7Vector1Props = {
  additionalClassNames?: string;
};

function FlagTitle7Vector1({ children, additionalClassNames = "" }: React.PropsWithChildren<FlagTitle7Vector1Props>) {
  return (
    <div className={clsx("absolute left-0 right-1/2", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 3.2625">
        {children}
      </svg>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[-0.02%_80.44%_83.7%_0]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.86875 3.2625">
        {children}
      </svg>
    </div>
  );
}

function FlagTitle7Vector({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute bottom-1/2 left-[30.44%] right-1/2 top-[33.69%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.86875 3.2625">
        {children}
      </svg>
    </div>
  );
}
type FlagTitle4VectorProps = {
  additionalClassNames?: string;
};

function FlagTitle4Vector({ children, additionalClassNames = "" }: React.PropsWithChildren<FlagTitle4VectorProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7375 6.525">
        {children}
      </svg>
    </div>
  );
}

function Vector3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[-0.02%_0]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 20.0063">
        {children}
      </svg>
    </div>
  );
}
type FlagTitle1VectorProps = {
  additionalClassNames?: string;
};

function FlagTitle1Vector({ children, additionalClassNames = "" }: React.PropsWithChildren<FlagTitle1VectorProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0031 19.9969">
        {children}
      </svg>
    </div>
  );
}
type Wrapper2Props = {
  text: string;
  additionalClassNames?: string;
};

function Wrapper2({ children, text, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center pb-[7px] pt-[5px] px-[12px] relative w-full">
        <p style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'fina', 'init'" }} className={clsx("flex-[1_0_0] font-['Segoe_UI_Variable:Semibold_Text',sans-serif] font-semibold leading-[20px] min-h-px min-w-px relative text-[14px] text-center", additionalClassNames)}>
          {text}
        </p>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[-0.02%_0_0.03%_0]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 19.9969">
        {children}
      </svg>
    </div>
  );
}

function CountryRow({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[44px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center relative size-full">{children}</div>
      </div>
    </div>
  );
}
type PrimaryProps = {
  additionalClassNames?: string;
};

function Primary({ children, additionalClassNames = "" }: React.PropsWithChildren<PrimaryProps>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={additionalClassNames}>
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Vector2() {
  return (
    <Wrapper1>
      <path d="M30 0H0V19.9969H30V0Z" fill="var(--fill-0, #0052B4)" id="Vector" />
    </Wrapper1>
  );
}

function Vector1() {
  return (
    <Wrapper1>
      <path d="M30 0H0V19.9969H30V0Z" fill="var(--fill-0, #D80027)" id="Vector" />
    </Wrapper1>
  );
}

function Secondary() {
  return (
    <div className="h-full opacity-0 relative rounded-[8px] shrink-0 w-[44px]">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between p-[12px] relative size-full">
          <Wrapper additionalClassNames="relative shrink-0 size-[20px]">
            <path d={svgPaths.p23d0cb00} fill="var(--fill-0, white)" id="Icon" />
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'rclt' 0" }} className="flex flex-col font-['Segoe_UI_Variable:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white whitespace-nowrap">
      <p className="leading-[20px] overflow-hidden">{text}</p>
    </div>
  );
}

function Vector() {
  return (
    <Wrapper1>
      <path d="M30 0H0V19.9969H30V0Z" fill="var(--fill-0, #F0F0F0)" id="Vector" />
    </Wrapper1>
  );
}
type IcChevronDownFilledProps = {
  additionalClassNames?: string;
};

function IcChevronDownFilled({ additionalClassNames = "" }: IcChevronDownFilledProps) {
  return (
    <Wrapper additionalClassNames={clsx("relative size-[20px]", additionalClassNames)}>
      <path d={svgPaths.p23d0cb00} fill="var(--fill-0, white)" fillOpacity="0.7" id="Icon" />
    </Wrapper>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'fina', 'init'" }} className={clsx("flex flex-col font-['Segoe_UI_Variable:Semibold_Text',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-white whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[20px]">{text}</p>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("relative rounded-[6.667px] shrink-0 size-[20px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[1.667px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6.667px]" />
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'rclt' 0" }} className={clsx("flex flex-col font-['Segoe_UI_Variable:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[14px] w-full", additionalClassNames)}>
      <p className="leading-[20px]">{text}</p>
    </div>
  );
}

export default function Countries() {
  return (
    <div className="bg-[#16141c] content-stretch flex flex-col items-start relative rounded-[8px] size-full" data-name="Countries">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
                            <path d={svgPaths.p14da1e00} fill="url(#paint0_linear_1_3987)" />
                            <path d={svgPaths.pc077e80} fill="url(#paint1_linear_1_3987)" />
                            <path d={svgPaths.p36fb0500} fill="url(#paint2_linear_1_3987)" />
                            <path d={svgPaths.p26f38600} fill="url(#paint3_linear_1_3987)" />
                          </g>
                          <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3987" x1="30.0506" x2="24.8673" y1="21.7558" y2="-3.81034">
                              <stop stopColor="#43414B" />
                              <stop offset="1" stopColor="#A39FB5" />
                            </linearGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_3987" x1="30.0506" x2="24.8673" y1="21.7558" y2="-3.81034">
                              <stop stopColor="#43414B" />
                              <stop offset="1" stopColor="#A39FB5" />
                            </linearGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_3987" x1="30.0506" x2="24.8673" y1="21.7558" y2="-3.81034">
                              <stop stopColor="#43414B" />
                              <stop offset="1" stopColor="#A39FB5" />
                            </linearGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_3987" x1="30.0506" x2="24.8673" y1="21.7558" y2="-3.81034">
                              <stop stopColor="#43414B" />
                              <stop offset="1" stopColor="#A39FB5" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="absolute inset-[36.22%_35.58%_34.94%_35.58%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.07694 8.07694">
                          <circle cx="4.03847" cy="4.03847" fill="url(#paint0_linear_1_4003)" id="Ellipse 1085" r="4.03847" />
                          <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_4003" x1="8.66847" x2="6.30436" y1="7.9873" y2="-1.17469">
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
              <Text text="Depending on the region, Internet Service Providers (ISPs) may log your browsing activity, use it for advertising, sell it to third parties, or share it with governments." additionalClassNames="text-white" />
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Countries wrapper">
            <div className="overflow-x-clip overflow-y-auto size-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] relative size-full">
                <div className="content-stretch flex gap-[8px] items-start relative rounded-[12px] shrink-0 w-full" data-name="Tabs wrapper">
                  <div className="bg-[rgba(255,255,255,0.2)] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Tabs - Pill">
                    <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
                    <Wrapper2 text="Explore" additionalClassNames="text-white" />
                  </div>
                  <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Tabs - Pill">
                    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <Wrapper2 text="Connect" additionalClassNames="text-[rgba(255,255,255,0.7)]" />
                  </div>
                </div>
                <Text text="Explore the ISP regulations in physical countries around the world." additionalClassNames="text-[rgba(255,255,255,0.7)]" />
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-full" data-name="All countries">
                  <div className="content-stretch flex items-center justify-between py-[8px] relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <Helper additionalClassNames="bg-[#4bb99d]" />
                      <Text1 text="Strong regulations" additionalClassNames="text-[14px]" />
                    </div>
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="-scale-y-100 flex-none">
                        <IcChevronDownFilled />
                      </div>
                    </div>
                  </div>
                  <CountryRow>
                    <Primary>
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Flag + title">
                        <div className="h-[20px] overflow-clip relative rounded-[4px] shrink-0 w-[30px]" data-name="#Flag">
                          <Vector />
                          <FlagTitle1Vector additionalClassNames="inset-[-0.02%_66.66%_0.03%_0]">
                            <path d={svgPaths.p27e8ddc0} fill="var(--fill-0, #0052B4)" id="Vector" />
                          </FlagTitle1Vector>
                          <FlagTitle1Vector additionalClassNames="inset-[-0.02%_0_0.03%_66.66%]">
                            <path d={svgPaths.p27e8ddc0} fill="var(--fill-0, #D80027)" id="Vector" />
                          </FlagTitle1Vector>
                        </div>
                        <Text2 text="France" />
                      </div>
                      <Text1 text="Connect" additionalClassNames="opacity-0 text-[16px] text-center" />
                    </Primary>
                    <Secondary />
                  </CountryRow>
                  <CountryRow>
                    <Primary additionalClassNames="bg-[rgba(255,255,255,0.1)]">
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Flag + title">
                        <div className="h-[20px] overflow-clip relative rounded-[4px] shrink-0 w-[30px]" data-name="#Flag">
                          <Vector1 />
                          <div className="absolute inset-[-0.02%_0_66.69%_0]" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 6.66562">
                              <path d="M30 0H0V6.66562H30V0Z" fill="var(--fill-0, black)" id="Vector" />
                            </svg>
                          </div>
                          <div className="absolute inset-[66.69%_0_-0.02%_0]" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 6.66563">
                              <path d="M30 0H0V6.66563H30V0Z" fill="var(--fill-0, #FFDA44)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                        <Text2 text="Germany" />
                      </div>
                      <Text1 text="Explore" additionalClassNames="text-[16px] text-center" />
                    </Primary>
                  </CountryRow>
                  <CountryRow>
                    <Primary>
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Flag + title">
                        <div className="h-[20px] overflow-clip relative rounded-[4px] shrink-0 w-[30px]" data-name="#Flag">
                          <Vector1 />
                          <div className="absolute inset-[20.66%_30.44%]" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7375 11.7375">
                              <path d={svgPaths.p394c1200} fill="var(--fill-0, #F0F0F0)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                        <Text2 text="Switzerland" />
                      </div>
                      <Text1 text="Connect" additionalClassNames="opacity-0 text-[16px] text-center" />
                    </Primary>
                    <Secondary />
                  </CountryRow>
                  <CountryRow>
                    <Primary>
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Flag + title">
                        <div className="h-[20px] overflow-clip relative rounded-[4px] shrink-0 w-[30px]" data-name="#Flag">
                          <Vector />
                          <Vector3>
                            <path d={svgPaths.p16bb5c00} fill="var(--fill-0, #D80027)" id="Vector" />
                          </Vector3>
                          <FlagTitle4Vector additionalClassNames="inset-[67.39%_0_-0.02%_60.87%]">
                            <path d={svgPaths.p29dc2300} fill="var(--fill-0, #0052B4)" id="Vector" />
                          </FlagTitle4Vector>
                          <FlagTitle4Vector additionalClassNames="inset-[67.39%_0_-0.02%_60.87%]">
                            <path d={svgPaths.p37580140} fill="var(--fill-0, #F0F0F0)" id="Vector" />
                          </FlagTitle4Vector>
                          <FlagTitle4Vector additionalClassNames="inset-[67.39%_0_-0.02%_60.87%]">
                            <path d={svgPaths.p37580140} fill="var(--fill-0, #D80027)" id="Vector" />
                          </FlagTitle4Vector>
                          <FlagTitle4Vector additionalClassNames="inset-[67.39%_60.87%_-0.02%_0]">
                            <path d={svgPaths.p219ea9f0} fill="var(--fill-0, #0052B4)" id="Vector" />
                          </FlagTitle4Vector>
                          <FlagTitle4Vector additionalClassNames="inset-[67.39%_60.87%_-0.02%_0]">
                            <path d={svgPaths.p34653200} fill="var(--fill-0, #D80027)" id="Vector" />
                          </FlagTitle4Vector>
                          <FlagTitle4Vector additionalClassNames="inset-[-0.02%_60.87%_67.39%_0]">
                            <path d={svgPaths.p14177e80} fill="var(--fill-0, #0052B4)" id="Vector" />
                          </FlagTitle4Vector>
                          <FlagTitle4Vector additionalClassNames="inset-[-0.02%_60.87%_67.39%_0]">
                            <path d={svgPaths.p3607eb80} fill="var(--fill-0, #F0F0F0)" id="Vector" />
                          </FlagTitle4Vector>
                          <FlagTitle4Vector additionalClassNames="inset-[-0.02%_60.87%_67.39%_0]">
                            <path d={svgPaths.p3607eb80} fill="var(--fill-0, #D80027)" id="Vector" />
                          </FlagTitle4Vector>
                          <FlagTitle4Vector additionalClassNames="inset-[-0.02%_0_67.39%_60.87%]">
                            <path d={svgPaths.p15c5d000} fill="var(--fill-0, #0052B4)" id="Vector" />
                          </FlagTitle4Vector>
                          <FlagTitle4Vector additionalClassNames="inset-[-0.02%_0_67.39%_60.87%]">
                            <path d={svgPaths.p27e58900} fill="var(--fill-0, #D80027)" id="Vector" />
                          </FlagTitle4Vector>
                        </div>
                        <Text2 text="United Kingdom" />
                      </div>
                      <Text1 text="Connect" additionalClassNames="opacity-0 text-[16px] text-center" />
                    </Primary>
                    <Secondary />
                  </CountryRow>
                  <CountryRow>
                    <Primary>
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Flag + title">
                        <div className="h-[20px] overflow-clip relative rounded-[4px] shrink-0 w-[30px]" data-name="#Flag">
                          <Vector2 />
                          <Vector3>
                            <path d={svgPaths.pace8340} fill="var(--fill-0, #FFDA44)" id="Vector" />
                          </Vector3>
                        </div>
                        <Text2 text="Sweden" />
                      </div>
                      <Text1 text="Connect" additionalClassNames="opacity-0 text-[16px] text-center" />
                    </Primary>
                    <Secondary />
                  </CountryRow>
                  <CountryRow>
                    <Primary>
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Flag + title">
                        <div className="h-[20px] overflow-clip relative rounded-[4px] shrink-0 w-[30px]" data-name="#Flag">
                          <Vector />
                          <div className="absolute inset-[12.5%_0_-0.02%_0]" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 17.5031">
                              <path d={svgPaths.p49ec880} fill="var(--fill-0, #D80027)" id="Vector" />
                            </svg>
                          </div>
                          <div className="absolute bottom-[46.16%] left-0 right-1/2 top-[-0.02%]" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.7719">
                              <path d="M15 0H0V10.7719H15V0Z" fill="var(--fill-0, #2E52B2)" id="Vector" />
                            </svg>
                          </div>
                          <div className="absolute inset-[8.66%_55.09%_54.83%_5.06%]" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9531 7.30313">
                              <path d={svgPaths.p3dba9a40} fill="var(--fill-0, #F0F0F0)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                        <Text2 text="United States" />
                      </div>
                      <Text1 text="Connect" additionalClassNames="opacity-0 text-[16px] text-center" />
                    </Primary>
                    <Secondary />
                  </CountryRow>
                  <CountryRow>
                    <Primary>
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Flag + title">
                        <div className="h-[20px] overflow-clip relative rounded-[4px] shrink-0 w-[30px]" data-name="#Flag">
                          <Vector2 />
                          <div className="absolute inset-[-0.02%_11.97%_12.27%_0]" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.4094 17.55">
                              <path d={svgPaths.p2e7d9600} fill="var(--fill-0, #F0F0F0)" id="Vector" />
                            </svg>
                          </div>
                          <div className="absolute bottom-1/2 left-0 right-1/2 top-[-0.02%]" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.0031">
                              <path d={svgPaths.p2d66fb00} fill="var(--fill-0, #D80027)" id="Vector" />
                            </svg>
                          </div>
                          <FlagTitle7Vector>
                            <path d={svgPaths.p7d28400} fill="var(--fill-0, #0052B4)" id="Vector" />
                          </FlagTitle7Vector>
                          <FlagTitle7Vector>
                            <path d={svgPaths.p7d28400} fill="var(--fill-0, #F0F0F0)" id="Vector" />
                          </FlagTitle7Vector>
                          <FlagTitle7Vector1 additionalClassNames="bottom-1/2 top-[33.69%]">
                            <path d={svgPaths.p1ee20800} fill="var(--fill-0, #D80027)" id="Vector" />
                          </FlagTitle7Vector1>
                          <Wrapper3>
                            <path d={svgPaths.p7a3d000} fill="var(--fill-0, #0052B4)" id="Vector" />
                          </Wrapper3>
                          <Wrapper3>
                            <path d={svgPaths.p7a3d000} fill="var(--fill-0, #F0F0F0)" id="Vector" />
                          </Wrapper3>
                          <FlagTitle7Vector1 additionalClassNames="bottom-[83.7%] top-[-0.02%]">
                            <path d={svgPaths.p1f2bdc0} fill="var(--fill-0, #D80027)" id="Vector" />
                          </FlagTitle7Vector1>
                        </div>
                        <Text2 text="Australia" />
                      </div>
                      <Text1 text="Connect" additionalClassNames="opacity-0 text-[16px] text-center" />
                    </Primary>
                    <Secondary />
                  </CountryRow>
                  <div className="content-stretch flex items-center justify-between py-[8px] relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <Helper additionalClassNames="bg-[#ffad33]" />
                      <Text1 text="Moderate protection" additionalClassNames="text-[14px]" />
                    </div>
                    <IcChevronDownFilled additionalClassNames="shrink-0" />
                  </div>
                  <div className="content-stretch flex items-center justify-between py-[8px] relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <Helper additionalClassNames="bg-[#f7607b]" />
                      <Text1 text="Poor protection" additionalClassNames="text-[14px]" />
                    </div>
                    <IcChevronDownFilled additionalClassNames="shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}