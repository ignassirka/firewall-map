import { useState, useEffect, useRef } from "react";
import svgPaths from "./svg-nqdx7ibpa6";
import lockFilledIcon from "./ic-lock-filled.svg";

const PHYSICAL_COUNTRIES = [
  "Belarus", "United States", "United Kingdom", "Switzerland", "India", "Australia", "Japan",
];

const physicalCountryData: Record<string, { ip: string; provider: string }> = {
  "Belarus":        { ip: "158.6.140.191", provider: "Белтелеком" },
  "United States":  { ip: "104.28.16.45",  provider: "Comcast" },
  "United Kingdom": { ip: "86.11.24.132",  provider: "BT" },
  "Switzerland":    { ip: "194.42.16.33",  provider: "Swisscom" },
  "India":          { ip: "117.215.11.69", provider: "BSNL" },
  "Australia":      { ip: "101.98.45.12",  provider: "Telstra" },
  "Japan":          { ip: "118.6.12.88",   provider: "NTT" },
};

function shuffleIndices(indices: number[]): number[] {
  const arr = [...indices];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]!];
  }
  return arr;
}

/** Each non-space character becomes `*` one at a time in random order; runs once (stays fully masked). */
function useProgressiveAsteriskMask(text: string, active: boolean, stepMs = 110): string {
  const [step, setStep] = useState(0);
  const [maskOrder, setMaskOrder] = useState<number[]>([]);

  useEffect(() => {
    if (!active) {
      setStep(0);
      setMaskOrder([]);
      return;
    }

    const raw = [...text]
      .map((ch, i) => (!/\s/.test(ch) ? i : -1))
      .filter((i): i is number => i >= 0);
    const order = shuffleIndices(raw);
    const max = order.length;

    setMaskOrder(order);
    setStep(0);

    if (max === 0) return;

    const id = window.setInterval(() => {
      setStep((s) => {
        if (s >= max) return max;
        const next = s + 1;
        if (next >= max) window.clearInterval(id);
        return next;
      });
    }, stepMs);

    return () => window.clearInterval(id);
  }, [active, text, stepMs]);

  if (!active) return text;

  const maskedIndices = new Set(maskOrder.slice(0, step));
  return [...text]
    .map((ch, i) => {
      if (/\s/.test(ch)) return ch;
      return maskedIndices.has(i) ? "*" : ch;
    })
    .join("");
}

function ProgressiveAsteriskText({ text, active }: { text: string; active: boolean }) {
  const display = useProgressiveAsteriskMask(text, active);
  return <span>{display}</span>;
}

type DetailRowProps = {
  text: string;
  text1: string;
  progressiveMask?: boolean;
};

function DetailRow({ text, text1, progressiveMask = false }: DetailRowProps) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] relative shrink-0 text-ellipsis w-full whitespace-nowrap">
            <div className="flex flex-col font-['Segoe_UI_Variable',sans-serif] font-normal justify-end min-w-full overflow-hidden relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] w-[min-content]" style={{ fontVariationSettings: "'opsz' 8" }}>
              <p className="leading-[16px] overflow-hidden">{text}</p>
            </div>
            <div className="flex flex-col font-['Segoe_UI_Variable',sans-serif] font-semibold justify-end min-w-full overflow-hidden relative shrink-0 text-[14px] text-white w-[min-content]" style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'fina', 'init'" }}>
              <p className="leading-[20px] overflow-hidden tabular-nums">
                {progressiveMask ? <ProgressiveAsteriskText text={text1} active /> : text1}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dot() {
  return (
    <div className="relative shrink-0 size-[3px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
        <circle cx="1.5" cy="1.5" fill="white" fillOpacity="0.7" r="1.5" />
      </svg>
    </div>
  );
}

function LockOpenIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[6.25%_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17.5">
          <path clipRule="evenodd" d={svgPaths.p38bdd580} fill="#F7607B" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function LockFilledIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" aria-hidden>
      <img
        src={lockFilledIcon}
        alt=""
        width={20}
        height={20}
        className="block size-full select-none"
        draggable={false}
      />
    </div>
  );
}

function LoaderIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="animate-spin absolute block size-full" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <path d="M18 10a8 8 0 00-8-8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function useSessionTimer(active: boolean): string {
  const startRef = useRef<number>(Date.now());
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!active) {
      setElapsed(0);
      return;
    }
    startRef.current = Date.now();
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startRef.current) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [active]);

  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  if (mins < 1) return `${secs} sec`;
  return `${mins} min ${secs.toString().padStart(2, "0")} sec`;
}

// ─── Traffic graph ────────────────────────────────────────────────────────────

const TRAFFIC_HISTORY = 30;

type TrafficPoint = { download: number; upload: number };

function useTrafficHistory(active: boolean) {
  const [history, setHistory] = useState<TrafficPoint[]>([]);
  const [totalKB, setTotalKB] = useState(0);
  const lastPointRef = useRef<TrafficPoint>({ download: 0, upload: 0 });

  useEffect(() => {
    if (!active) {
      setHistory([]);
      setTotalKB(0);
      lastPointRef.current = { download: 0, upload: 0 };
      return;
    }

    const id = setInterval(() => {
      const prev = lastPointRef.current;
      const newDownload = Math.max(0, Math.min(100, prev.download + (Math.random() - 0.45) * 12));
      const newUpload   = Math.max(0, Math.min(80,  prev.upload   + (Math.random() - 0.45) * 8));
      const point: TrafficPoint = { download: newDownload, upload: newUpload };
      lastPointRef.current = point;
      setTotalKB(t => t + newDownload + newUpload); // KB/s × 1 s = KB
      setHistory(h => h.length >= TRAFFIC_HISTORY ? [...h.slice(1), point] : [...h, point]);
    }, 1000);

    return () => clearInterval(id);
  }, [active]);

  return { history, totalKB };
}

function formatTotalTraffic(totalKB: number): string {
  if (totalKB < 1024)           return `${totalKB.toFixed(1)} KB`;
  if (totalKB < 1024 * 1024)   return `${(totalKB / 1024).toFixed(2)} MB`;
  return `${(totalKB / (1024 * 1024)).toFixed(2)} GB`;
}

function TrafficArrowDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
      <path d="M6 1.5v9M3.5 7.5L6 10.5l2.5-3" stroke="#4BB99D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrafficArrowUp() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
      <path d="M6 10.5v-9M3.5 4.5L6 1.5l2.5 3" stroke="#F7607B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrafficGraph({ history }: { history: TrafficPoint[] }) {
  const W = 100;
  const H = 56;
  const Y_AXIS_W = 26; // 22px labels + 4px gap
  const yMax     = 100; // fixed 0–100 KB/s scale

  const [hoverState, setHoverState] = useState<{ idx: number; x: number } | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const n = history.length;
  const displayPoint = (() => {
    if (hoverState !== null && n > 0) return history[hoverState.idx] ?? history[n - 1]!;
    return history[n - 1] ?? null;
  })();

  // X maps the i-th point (oldest=0) so the newest point is always at x=W.
  // When history is partial, older slots are empty (graph grows right→left fill).
  const toX = (i: number) =>
    n <= 1 ? W : ((TRAFFIC_HISTORY - n + i) / (TRAFFIC_HISTORY - 1)) * W;
  const toY = (v: number) => H - (Math.min(v, yMax) / yMax) * H;

  const buildArea = (vals: number[]) => {
    if (vals.length < 2) return "";
    const pts  = vals.map((v, i) => `${toX(i).toFixed(2)},${toY(v).toFixed(2)}`).join(" L ");
    const xEnd = toX(vals.length - 1).toFixed(2); // = W
    const xBeg = toX(0).toFixed(2);
    return `M ${pts} L ${xEnd},${H} L ${xBeg},${H} Z`;
  };

  const buildLine = (vals: number[]) => {
    if (vals.length < 2) return "";
    return "M " + vals.map((v, i) => `${toX(i).toFixed(2)},${toY(v).toFixed(2)}`).join(" L ");
  };

  const downloads = history.map(p => p.download);
  const uploads   = history.map(p => p.upload);
  const midY      = toY(yMax / 2);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect || n === 0) { setHoverState(null); return; }
    const svgX     = e.clientX - rect.left - Y_AXIS_W;
    const svgWidth = rect.width - Y_AXIS_W;
    // The data region starts at the pixel position of the first point
    const dataStartPx = n >= TRAFFIC_HISTORY ? 0 : ((TRAFFIC_HISTORY - n) / (TRAFFIC_HISTORY - 1)) * svgWidth;
    if (svgX < dataStartPx - 8 || svgX > svgWidth + 8) { setHoverState(null); return; }
    const clamped   = Math.max(dataStartPx, Math.min(svgWidth, svgX));
    const dataWidth = svgWidth - dataStartPx;
    const idx = dataWidth <= 0 ? 0 : Math.round(((clamped - dataStartPx) / dataWidth) * (n - 1));
    setHoverState({ idx, x: e.clientX - rect.left });
  };

  const hoverLineX = hoverState !== null ? toX(hoverState.idx) : null;
  const fmtKBs = (v: number) => v.toFixed(1);

  return (
    <div className="flex-1 min-w-0 rounded-[8px] p-[8px] flex flex-col gap-[6px]">
      {/* Header — values reflect hover point or live latest */}
      <div className="flex items-center gap-[6px]">
        <span
          className="flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-[rgba(255,255,255,0.7)] text-[11px] leading-[14px]"
          style={{ fontFamily: "'Segoe UI Variable', sans-serif", fontVariationSettings: "'opsz' 8" }}
        >
          Current traffic (KB/s)
        </span>
        <div className="flex items-center gap-[3px] shrink-0">
          <TrafficArrowDown />
          <span
            className="text-white text-[11px] font-semibold leading-[14px] tabular-nums"
            style={{ fontFamily: "'Segoe UI Variable', sans-serif", fontVariationSettings: "'opsz' 8" }}
          >
            {displayPoint ? fmtKBs(displayPoint.download) : "—"}
          </span>
        </div>
        <div className="flex items-center gap-[3px] shrink-0">
          <TrafficArrowUp />
          <span
            className="text-white text-[11px] font-semibold leading-[14px] tabular-nums"
            style={{ fontFamily: "'Segoe UI Variable', sans-serif", fontVariationSettings: "'opsz' 8" }}
          >
            {displayPoint ? fmtKBs(displayPoint.upload) : "—"}
          </span>
        </div>
      </div>

      {/* Chart area */}
      <div
        ref={wrapperRef}
        className="flex gap-[4px] flex-1 relative"
        style={{ minHeight: 56 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoverState(null)}
      >
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between items-end shrink-0" style={{ width: 22 }}>
          {[yMax, yMax / 2, 0].map(v => (
            <span
              key={v}
              style={{
                fontSize: 9,
                fontFamily: "'Segoe UI Variable', sans-serif",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1,
              }}
            >
              {v}
            </span>
          ))}
        </div>

        {/* SVG chart — vectorEffect="non-scaling-stroke" fixes stroke skew from preserveAspectRatio="none" */}
        <svg
          className="flex-1 min-w-0 block"
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="tg-down-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="11%"  stopColor="#4BB99D" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#4BB99D" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="tg-up-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#EA677E" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#EA677E" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line vectorEffect="non-scaling-stroke" x1="0" y1="0.5"     x2={W} y2="0.5"     stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <line vectorEffect="non-scaling-stroke" x1="0" y1={midY}    x2={W} y2={midY}     stroke="rgba(255,255,255,0.1)"  strokeWidth="0.5" strokeDasharray="2 2" />
          <line vectorEffect="non-scaling-stroke" x1="0" y1={H - 0.5} x2={W} y2={H - 0.5} stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />

          {/* Upload area + line */}
          <path vectorEffect="non-scaling-stroke" d={buildArea(uploads)}   fill="url(#tg-up-grad)" />
          <path vectorEffect="non-scaling-stroke" d={buildLine(uploads)}   stroke="#F7607B" strokeWidth="1" fill="none" strokeLinejoin="round" strokeLinecap="round" />

          {/* Download area + line */}
          <path vectorEffect="non-scaling-stroke" d={buildArea(downloads)} fill="url(#tg-down-grad)" />
          <path vectorEffect="non-scaling-stroke" d={buildLine(downloads)} stroke="#4BB99D" strokeWidth="1" fill="none" strokeLinejoin="round" strokeLinecap="round" />

          {/* Hover vertical line */}
          {hoverLineX !== null && (
            <line
              vectorEffect="non-scaling-stroke"
              x1={hoverLineX} y1="0"
              x2={hoverLineX} y2={H}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="0.6"
              strokeDasharray="1.5 1.5"
            />
          )}
        </svg>

        {/* Hover tooltip */}
        {hoverState !== null && displayPoint && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: `clamp(48px, ${hoverState.x}px, calc(100% - 48px))`,
              transform: "translateX(-50%)",
              pointerEvents: "none",
              zIndex: 10,
            }}
            className="bg-[rgba(16,14,24,0.9)] backdrop-blur-[8px] border border-[rgba(255,255,255,0.12)] rounded-[6px] px-[8px] py-[5px] flex flex-col gap-[2px]"
          >
            <div className="flex items-center gap-[4px]">
              <TrafficArrowDown />
              <span
                className="text-[#4BB99D] text-[11px] font-semibold tabular-nums leading-[14px] whitespace-nowrap"
                style={{ fontFamily: "'Segoe UI Variable', sans-serif", fontVariationSettings: "'opsz' 8" }}
              >
                {fmtKBs(displayPoint.download)} KB/s
              </span>
            </div>
            <div className="flex items-center gap-[4px]">
              <TrafficArrowUp />
              <span
                className="text-[#F7607B] text-[11px] font-semibold tabular-nums leading-[14px] whitespace-nowrap"
                style={{ fontFamily: "'Segoe UI Variable', sans-serif", fontVariationSettings: "'opsz' 8" }}
              >
                {fmtKBs(displayPoint.upload)} KB/s
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

type ConnectionDetailsProps = {
  vpnStatus?: "unprotected" | "connecting" | "protected";
  connectedCountry?: string | null;
  physicalCountry?: string;
  onPhysicalCountryChange?: (country: string) => void;
};

export default function ConnectionDetails({
  vpnStatus = "unprotected",
  connectedCountry,
  physicalCountry = "Belarus",
  onPhysicalCountryChange,
}: ConnectionDetailsProps) {
  const sessionTime = useSessionTimer(vpnStatus === "protected");
  const { history, totalKB } = useTrafficHistory(vpnStatus === "protected");
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pcd = physicalCountryData[physicalCountry] ?? physicalCountryData["Belarus"]!;

  useEffect(() => {
    if (!countryDropdownOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCountryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [countryDropdownOpen]);

  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start px-[8px] py-[16px] relative size-full" data-name="Connection details">
      <div className="relative shrink-0 w-full" data-name="Details title">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] relative w-full">
            {vpnStatus === "unprotected" && <LockOpenIcon />}
            {vpnStatus === "connecting" && <LoaderIcon />}
            {vpnStatus === "protected" && <LockFilledIcon />}

            <div
              className="flex flex-col font-['Segoe_UI_Variable',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[14px] text-center whitespace-nowrap"
              style={{
                fontVariationSettings: "'opsz' 10.5",
                fontFeatureSettings: "'fina', 'init'",
                color: vpnStatus === "unprotected" ? "#F7607B" : vpnStatus === "protected" ? "#2CFFCC" : "#FFFFFF",
              }}
            >
              <p className="leading-[20px]">
                {vpnStatus === "unprotected" ? "Unprotected" : vpnStatus === "connecting" ? "Connecting" : "Protected"}
              </p>
            </div>

            <Dot />

            <div className="flex flex-col font-['Segoe_UI_Variable',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'rclt' 0" }}>
              <p className="leading-[20px]">
                {vpnStatus === "unprotected"
                  ? "Encrypt your online activity by connecting to VPN."
                  : vpnStatus === "connecting"
                  ? "Protecting your digital identity..."
                  : sessionTime}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Details row">
        {vpnStatus === "unprotected" && (
          <>
            <DetailRow text="IP address" text1={pcd.ip} />
            <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" ref={dropdownRef}>
              <div className="flex flex-col justify-center size-full">
                <button
                  onClick={() => setCountryDropdownOpen((o) => !o)}
                  className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full cursor-pointer text-left"
                >
                  <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] relative shrink-0 text-ellipsis w-full whitespace-nowrap">
                    <div className="flex flex-col font-['Segoe_UI_Variable',sans-serif] font-normal justify-end min-w-full overflow-hidden relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] w-[min-content]" style={{ fontVariationSettings: "'opsz' 8" }}>
                      <p className="leading-[16px] overflow-hidden">Country</p>
                    </div>
                    <div className="flex flex-col font-['Segoe_UI_Variable',sans-serif] font-semibold justify-end min-w-full overflow-hidden relative shrink-0 text-[14px] text-white w-[min-content]" style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'fina', 'init'" }}>
                      <p className="leading-[20px] overflow-hidden flex items-center gap-[4px]">
                        <span>{physicalCountry}</span>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="shrink-0" style={{ transform: countryDropdownOpen ? "rotate(180deg)" : "none", transition: "transform 150ms ease" }}>
                          <path d="M1 1L5 5L9 1" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </button>
              </div>
              {countryDropdownOpen && (
                <div
                  className="absolute bottom-full left-0 mb-[4px] rounded-[8px] border border-[rgba(255,255,255,0.1)] bg-[#1e1c26] backdrop-blur-[16px] py-[4px] z-[2000] min-w-[180px]"
                  style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
                >
                  {PHYSICAL_COUNTRIES.map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        onPhysicalCountryChange?.(c);
                        setCountryDropdownOpen(false);
                      }}
                      className={`flex items-center w-full px-[12px] py-[8px] text-left text-[14px] leading-[20px] transition-colors cursor-pointer ${
                        c === physicalCountry ? "text-[#2CFFCC]" : "text-white hover:bg-[rgba(255,255,255,0.08)]"
                      }`}
                      style={{ fontVariationSettings: "'opsz' 10.5", fontFeatureSettings: "'fina', 'init'" }}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <DetailRow text="Provider" text1={pcd.provider} />
          </>
        )}
        {vpnStatus === "connecting" && (
          <>
            <DetailRow text="IP address" text1={pcd.ip} progressiveMask />
            <DetailRow text="Country" text1={physicalCountry} progressiveMask />
            <DetailRow text="Provider" text1={pcd.provider} progressiveMask />
          </>
        )}
        {vpnStatus === "protected" && (
          <div className="flex gap-[8px] items-stretch w-full" style={{ height: 116 }}>
            <div className="grid grid-cols-2 gap-[8px] shrink-0" style={{ width: 250 }}>
              <DetailRow text="VPN IP" text1="103.107.197.6" />
              <DetailRow text="Server load" text1="10%" />
              <DetailRow text="Protocol" text1="WireGuard" />
              <DetailRow text="Total traffic" text1={formatTotalTraffic(totalKB)} />
            </div>
            <TrafficGraph history={history} />
          </div>
        )}
      </div>
    </div>
  );
}