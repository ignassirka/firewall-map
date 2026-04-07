import clsx from "clsx";
import svgPaths from "./svg-gr3yl27tf4";

function Indicator() {
  return (
    <div className="h-[3px] relative shrink-0 w-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.p1481c300} fill="var(--fill-0, white)" id="Indicator" opacity="0" />
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
    <div style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'rclt' 0" }} className={clsx("flex flex-col font-['Segoe_UI_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[20px]">{text}</p>
    </div>
  );
}

export default function ServerFeatures() {
  return (
    <div className="content-stretch flex items-start relative rounded-bl-[8px] size-full" data-name="Server features">
      <div className="content-stretch flex flex-col gap-[8px] items-center pt-[8px] px-[12px] relative rounded-[8px] shrink-0" data-name="Tabs - Underline">
        <Text text="All" additionalClassNames="text-white" />
        <div className="h-[3px] relative shrink-0 w-[16px]" data-name="Indicator">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 3">
            <path d={svgPaths.p39dfd5a0} fill="var(--fill-0, white)" id="Indicator" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-center pt-[8px] px-[12px] relative rounded-[8px] shrink-0" data-name="Tabs - Underline">
        <Text text="Secure Core" additionalClassNames="text-[rgba(255,255,255,0.7)]" />
        <Indicator />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-center pt-[8px] px-[12px] relative rounded-[8px] shrink-0" data-name="Tabs - Underline">
        <Text text="P2P" additionalClassNames="text-[rgba(255,255,255,0.7)]" />
        <Indicator />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-center pt-[8px] px-[12px] relative rounded-[8px] shrink-0" data-name="Tabs - Underline">
        <Text text="Tor" additionalClassNames="text-[rgba(255,255,255,0.7)]" />
        <Indicator />
      </div>
    </div>
  );
}