import clsx from "clsx";
import svgPaths from "./svg-2mcojz5w1e";
type SurveillanceAlliancesUnionProps = {
  additionalClassNames?: string;
};

function SurveillanceAlliancesUnion({ children, additionalClassNames = "" }: React.PropsWithChildren<SurveillanceAlliancesUnionProps>) {
  return (
    <div className={clsx("absolute inset-[14.28%_0_14.29%_0]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14.2857">
        {children}
      </svg>
    </div>
  );
}

export default function SurveillanceAlliances() {
  return (
    <div className="relative size-full" data-name="surveillance-alliances">
      <SurveillanceAlliancesUnion>
        <g id="Union">
          <path d={svgPaths.p1b4e1370} fill="url(#paint0_linear_2008_368)" />
          <path d={svgPaths.p17b0d00} fill="url(#paint1_linear_2008_368)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2008_368" x1="21.4647" x2="18.3838" y1="14.1272" y2="-2.58879">
            <stop stopColor="#43414B" />
            <stop offset="1" stopColor="#A39FB5" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2008_368" x1="21.4647" x2="18.3838" y1="14.1272" y2="-2.58879">
            <stop stopColor="#43414B" />
            <stop offset="1" stopColor="#A39FB5" />
          </linearGradient>
        </defs>
      </SurveillanceAlliancesUnion>
      <SurveillanceAlliancesUnion>
        <g id="Union">
          <path d={svgPaths.p1b4e1370} fill="url(#paint0_linear_2008_362)" fillOpacity="0.4" />
          <path d={svgPaths.p17b0d00} fill="url(#paint1_linear_2008_362)" fillOpacity="0.4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2008_362" x1="10" x2="10" y1="5.21984" y2="14.2857">
            <stop stopOpacity="0" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2008_362" x1="10" x2="10" y1="5.21984" y2="14.2857">
            <stop stopOpacity="0" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </SurveillanceAlliancesUnion>
      <SurveillanceAlliancesUnion>
        <g id="Union">
          <path d={svgPaths.p1b4e1370} fill="url(#paint0_radial_2008_360)" fillOpacity="0.7" />
          <path d={svgPaths.p17b0d00} fill="url(#paint1_radial_2008_360)" fillOpacity="0.7" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(7.66667 -6.42857 9 5.47619 8.66667 8.33333)" gradientUnits="userSpaceOnUse" id="paint0_radial_2008_360" r="1">
            <stop offset="0.723958" stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(7.66667 -6.42857 9 5.47619 8.66667 8.33333)" gradientUnits="userSpaceOnUse" id="paint1_radial_2008_360" r="1">
            <stop offset="0.723958" stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" stopOpacity="0.8" />
          </radialGradient>
        </defs>
      </SurveillanceAlliancesUnion>
      <div className="absolute inset-1/4">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="url(#paint0_linear_2008_366)" id="Ellipse 1074" opacity="0.5" r="5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2008_366" x1="4.26471" x2="4.26471" y1="-1.32353" y2="16.3158">
              <stop stopColor="#26252C" />
              <stop offset="1" stopColor="#9995AA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[34.38%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.25 6.25">
          <circle cx="3.125" cy="3.125" fill="var(--fill-0, white)" fillOpacity="0.7" id="Ellipse 1075" r="3.125" />
        </svg>
      </div>
      <SurveillanceAlliancesUnion additionalClassNames="mix-blend-color">
        <g id="Union" style={{ mixBlendMode: "color" }}>
          <path d={svgPaths.p1b4e1370} fill="var(--fill-0, #2CFFCC)" />
          <path d={svgPaths.p17b0d00} fill="var(--fill-0, #2CFFCC)" />
        </g>
      </SurveillanceAlliancesUnion>
    </div>
  );
}