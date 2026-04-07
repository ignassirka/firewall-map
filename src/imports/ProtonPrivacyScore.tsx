import clsx from "clsx";
import svgPaths from "./svg-v1gfx09kpb";
type ProtonPrivacyScoreUnionProps = {
  additionalClassNames?: string;
};

function ProtonPrivacyScoreUnion({ children, additionalClassNames = "" }: React.PropsWithChildren<ProtonPrivacyScoreUnionProps>) {
  return (
    <div className={clsx("absolute inset-[3.57%_10.71%]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7143 18.5714">
        {children}
      </svg>
    </div>
  );
}

export default function ProtonPrivacyScore() {
  return (
    <div className="relative size-full" data-name="proton-privacy score">
      <ProtonPrivacyScoreUnion>
        <path d={svgPaths.p27772600} fill="url(#paint0_linear_2008_356)" id="Union" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2008_356" x1="16.8652" x2="10.5962" y1="18.3653" y2="-2.19191">
            <stop stopColor="#43414B" />
            <stop offset="1" stopColor="#A39FB5" />
          </linearGradient>
        </defs>
      </ProtonPrivacyScoreUnion>
      <div className="absolute bottom-1/2 left-[10.71%] right-1/2 top-[3.57%]" data-name="Intersect">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.85714 9.28571">
          <g id="Intersect">
            <path d={svgPaths.p2abfdf0} fill="url(#paint0_linear_2008_354)" />
            <path d={svgPaths.p2abfdf0} fill="var(--fill-1, white)" fillOpacity="0.5" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2008_354" x1="-4.2857" x2="1.24833" y1="-1.78572" y2="12.1863">
              <stop stopColor="#43414B" />
              <stop offset="1" stopColor="#A39FB5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-[3.57%] left-1/2 right-[10.71%] top-1/2" data-name="Intersect">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.85714 9.28571">
          <g id="Intersect">
            <path d={svgPaths.p1a14e40} fill="url(#paint0_linear_2008_350)" />
            <path d={svgPaths.p1a14e40} fill="var(--fill-1, white)" fillOpacity="0.5" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2008_350" x1="8.43258" x2="5.29811" y1="9.18266" y2="-1.09596">
              <stop stopColor="#43414B" />
              <stop offset="1" stopColor="#A39FB5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <ProtonPrivacyScoreUnion>
        <path d={svgPaths.p27772600} fill="url(#paint0_radial_2008_352)" fillOpacity="0.7" id="Union" />
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(6.02381 -8.35714 7.07143 7.11905 6.80952 10.8333)" gradientUnits="userSpaceOnUse" id="paint0_radial_2008_352" r="1">
            <stop offset="0.723958" stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" stopOpacity="0.8" />
          </radialGradient>
        </defs>
      </ProtonPrivacyScoreUnion>
      <ProtonPrivacyScoreUnion>
        <path d={svgPaths.p27772600} fill="url(#paint0_linear_2008_346)" fillOpacity="0.4" id="Union" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2008_346" x1="7.85714" x2="7.85714" y1="6.78579" y2="18.5714">
            <stop stopOpacity="0" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </ProtonPrivacyScoreUnion>
      <ProtonPrivacyScoreUnion additionalClassNames="mix-blend-color">
        <g id="Union" style={{ mixBlendMode: "color" }}>
          <path d={svgPaths.p27772600} fill="var(--fill-0, #2CFFCC)" />
        </g>
      </ProtonPrivacyScoreUnion>
    </div>
  );
}