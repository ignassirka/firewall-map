import { imgGradientOverlay } from "./svg-5085r";

type StatusGradientProps = {
  vpnStatus?: "unprotected" | "connecting" | "protected";
};

const statusColors: Record<string, string> = {
  unprotected: "rgba(247, 96, 123, 0.5)",
  connecting: "rgba(255, 255, 255, 0.3)",
  protected: "rgba(44, 255, 204, 0.5)",
};

const maskStyle = (img: string) => ({
  maskImage: `url('${img}')`,
  maskSize: "100% 100%",
  maskRepeat: "no-repeat",
  WebkitMaskImage: `url('${img}')`,
  WebkitMaskSize: "100% 100%",
  WebkitMaskRepeat: "no-repeat",
} as React.CSSProperties);

export default function StatusGradient({ vpnStatus = "unprotected" }: StatusGradientProps) {
  const color = statusColors[vpnStatus];

  return (
    <div className="relative size-full" data-name="Status gradient">
      <div
        className="absolute h-[300px] left-0 right-0 top-0 bg-[#16141c]"
        style={maskStyle(imgGradientOverlay)}
      />
      <div
        className="absolute h-[300px] left-0 right-0 top-0 transition-[background-color] duration-700 ease-in-out"
        style={{ backgroundColor: color, ...maskStyle(imgGradientOverlay) }}
      />
    </div>
  );
}