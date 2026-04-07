import clsx from "clsx";
import svgPaths from "./svg-6mqrghog0w";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 8" }} className="flex flex-col font-['Segoe_UI_Variable:Regular_Small',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">
      <p className="leading-[16px]">{children}</p>
    </div>
  );
}
type ChipProps = {
  additionalClassNames?: string;
};

function Chip({ children, additionalClassNames = "" }: React.PropsWithChildren<ChipProps>) {
  return (
    <div className={clsx("relative rounded-[4px] shrink-0 transition-colors duration-150 ease-out hover:bg-[rgba(255,255,255,0.1)]", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[5px] pt-[4px] px-[8px] relative">{children}</div>
      </div>
    </div>
  );
}
type ChipRowTextProps = {
  text: string;
};

function ChipRowText({ text, children }: React.PropsWithChildren<ChipRowTextProps>) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Chip>{children}</Chip>
      <Wrapper>{text}</Wrapper>
    </div>
  );
}

function Indicator() {
  return (
    <div className="absolute h-[17px] left-0 top-[6px] w-[3px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.p147ee00} fill="var(--fill-0, white)" id="Indicator" opacity="0" />
      </svg>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'rclt' 0" }} className={clsx("flex flex-col font-['Segoe_UI_Variable:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[16px] text-center whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[20px]">{text}</p>
    </div>
  );
}

export default function ChipSection() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start px-[12px] py-[8px] relative size-full" data-name="Chip section">
      <ChipRowText text="ctrl + 1">
        <div className="relative shrink-0 size-[16px]" data-name="ic-clock-rotate-left">
          <div className="absolute inset-[9.38%_9.39%_9.38%_0.01%]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4956 13">
              <path clipRule="evenodd" d={svgPaths.p25f71c80} fill="var(--fill-0, white)" fillOpacity="0.7" fillRule="evenodd" id="Icon" />
            </svg>
          </div>
        </div>
        <Text text="Recents" additionalClassNames="text-[rgba(255,255,255,0.7)]" />
        <Indicator />
      </ChipRowText>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Chip row">
        <Chip additionalClassNames="bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.28)]">
          <div className="relative shrink-0 size-[16px]" data-name="ic-earth">
            <div className="absolute inset-[6.25%]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path clipRule="evenodd" d={svgPaths.p634fa00} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
          <Text text="Countries" additionalClassNames="text-white" />
          <div className="absolute h-[17px] left-0 top-[6px] w-[3px]" data-name="Indicator">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 17">
              <path d={svgPaths.p147ee00} fill="var(--fill-0, white)" id="Indicator" />
            </svg>
          </div>
        </Chip>
        <Wrapper>ctrl + 2</Wrapper>
      </div>
      <ChipRowText text="ctrl + 3">
        <div className="relative shrink-0 size-[16px]" data-name="ic-window-terminal">
          <div className="absolute inset-[12.5%_6.25%]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
              <path clipRule="evenodd" d={svgPaths.p21917200} fill="var(--fill-0, white)" fillOpacity="0.7" fillRule="evenodd" id="Icon" />
            </svg>
          </div>
        </div>
        <Text text="Profiles" additionalClassNames="text-[rgba(255,255,255,0.7)]" />
        <Indicator />
      </ChipRowText>
    </div>
  );
}
