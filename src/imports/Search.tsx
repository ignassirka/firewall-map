import svgPaths from "./svg-m0k6r02h9x";

export default function Search() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-between px-[8px] py-[10px] relative rounded-[4px] size-full" data-name="Search">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
        <div className="relative shrink-0 size-[16px]" data-name="ic-magnifier">
          <div className="absolute inset-[6.25%_12.5%_12.5%_6.25%]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path clipRule="evenodd" d={svgPaths.p1d2e30f0} fill="var(--fill-0, white)" fillOpacity="0.5" fillRule="evenodd" id="Icon" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex items-end relative shrink-0" data-name="Wrapper">
          <p className="font-['Segoe_UI_Variable:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'rclt' 0" }}>
            Browse from...
          </p>
        </div>
      </div>
      <p className="font-['Segoe_UI_Variable:Regular_Small',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 8" }}>
        ctrl + F
      </p>
    </div>
  );
}