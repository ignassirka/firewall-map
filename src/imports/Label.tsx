import clsx from "clsx";
import svgPaths from "./svg-cl9wq9k390";
type FlagTitleVectorProps = {
  additionalClassNames?: string;
};

function FlagTitleVector({ children, additionalClassNames = "" }: React.PropsWithChildren<FlagTitleVectorProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 4.44375">
        {children}
      </svg>
    </div>
  );
}

export default function Label() {
  return (
    <div className="relative size-full" data-name="label">
      <div className="absolute h-[34.259px] left-0 top-0 w-[146px]" data-name="Union">
        <div className="absolute inset-[-291.9%_-68.49%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 346 234.259">
            <g data-figma-bg-blur-radius="32" filter="url(#filter0_d_2013_1842)" id="Union">
              <mask fill="white" id="path-1-inside-1_2013_1842">
                <path d={svgPaths.p33f4a740} />
              </mask>
              <path d={svgPaths.p33f4a740} fill="var(--fill-0, #16141C)" />
              <path d={svgPaths.p312d7f80} fill="var(--stroke-0, white)" fillOpacity="0.1" mask="url(#path-1-inside-1_2013_1842)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="234.259" id="filter0_d_2013_1842" width="346" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="50" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0953894 0 0 0 0 0.0848519 0 0 0 0 0.127002 0 0 0 0.2 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2013_1842" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_2013_1842" mode="normal" result="shape" />
              </filter>
              <clipPath id="bgblur_0_2013_1842_clip_path" transform="translate(0 0)">
                <path d={svgPaths.p33f4a740} />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute backdrop-blur-[16px] bg-[#16141c] content-stretch flex flex-col items-start left-0 pl-[6px] pr-[10px] py-[6px] rounded-[8px] shadow-[0px_0px_100px_0px_rgba(24,22,32,0.2)] top-0">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Flag + title">
          <div className="h-[13.333px] overflow-clip relative rounded-[4px] shrink-0 w-[20px]" data-name="Flag - rounded">
            <div className="absolute inset-[-0.02%_0_0.03%_0]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13.3313">
                <path d="M20 0H0V13.3312H20V0Z" fill="var(--fill-0, #D80027)" id="Vector" />
              </svg>
            </div>
            <FlagTitleVector additionalClassNames="inset-[-0.02%_0_66.69%_0]">
              <path d="M20 0H0V4.44375H20V0Z" fill="var(--fill-0, black)" id="Vector" />
            </FlagTitleVector>
            <FlagTitleVector additionalClassNames="inset-[66.69%_0_-0.02%_0]">
              <path d="M20 0H0V4.44375H20V0Z" fill="var(--fill-0, #FFDA44)" id="Vector" />
            </FlagTitleVector>
          </div>
          <div className="flex flex-col font-['Segoe_UI_Variable:Regular_Small',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[12px] text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 8" }}>
            <p className="leading-[16px] overflow-hidden">Connect - Germany</p>
          </div>
        </div>
      </div>
    </div>
  );
}