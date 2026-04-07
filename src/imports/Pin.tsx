export default function Pin() {
  return (
    <div className="relative size-full" data-name="pin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2012_4865)" id="pin">
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="glow" opacity="0.16" r="8" />
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="white" r="3" />
        </g>
        <defs>
          <clipPath id="clip0_2012_4865">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}