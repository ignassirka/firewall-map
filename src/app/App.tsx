import { useState, useCallback, useRef } from "react";
import { ISPRegulationsPanel } from "./components/ISPRegulationsPanel";
import { WorldMap } from "./components/WorldMap";
import type { MapLayerOption } from "../imports/RightVpnFeatures";

export type VpnStatus = "unprotected" | "connecting" | "protected";

const PANEL_DEFAULT = 340;
const PANEL_MIN     = 200;
const PANEL_MAX     = 400;

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedMapLayer, setSelectedMapLayer] = useState<MapLayerOption>("none");
  const [vpnStatus, setVpnStatus] = useState<VpnStatus>("unprotected");
  const [connectedCountry, setConnectedCountry] = useState<string | null>(null);
  const [physicalCountry, setPhysicalCountry] = useState("Belarus");
  const connectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Resizable left panel ──────────────────────────────────────────────────
  const [panelWidth, setPanelWidth] = useState(PANEL_DEFAULT);
  const [handleHovered, setHandleHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleResizeStart = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();

    const onMove = (ev: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Panel left edge sits 8px inside the container
      const newWidth = Math.max(PANEL_MIN, Math.min(PANEL_MAX, ev.clientX - rect.left - 8));
      setPanelWidth(newWidth);
    };

    const onUp = () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
  }, []);

  const handleMapSelect = useCallback((name: string) => {
    setSelectedCountry(name);
  }, []);

  const handlePanelChange = useCallback((name: string | null) => {
    setSelectedCountry(name);
  }, []);

  const handleSelectMapLayer = useCallback((layer: MapLayerOption) => {
    setSelectedMapLayer(layer);
  }, []);

  const handleClearMapLayer = useCallback(() => {
    setSelectedMapLayer("none");
  }, []);

  const handleConnect = useCallback((country: string) => {
    if (connectTimerRef.current) clearTimeout(connectTimerRef.current);
    setConnectedCountry(country);
    setVpnStatus("connecting");
    connectTimerRef.current = setTimeout(() => {
      setVpnStatus("protected");
    }, 3000);
  }, []);

  const handleDisconnect = useCallback(() => {
    if (connectTimerRef.current) clearTimeout(connectTimerRef.current);
    setVpnStatus("unprotected");
    setConnectedCountry(null);
  }, []);

  return (
    <div className="h-screen w-screen bg-[#0f0d14] flex items-center justify-center p-6">
      <div ref={containerRef} className="relative h-[830px] w-[1170px] rounded-[8px] overflow-hidden border border-[rgba(255,255,255,0.1)]">
        {/* Full-width map behind everything */}
        <div className="absolute inset-0">
          <WorldMap
            selectedCountry={selectedCountry}
            onSelectCountry={handleMapSelect}
            selectedMapLayer={selectedMapLayer}
            onSelectMapLayer={handleSelectMapLayer}
            vpnStatus={vpnStatus}
            connectedCountry={connectedCountry}
            onConnect={handleConnect}
            onDisconnect={handleDisconnect}
            physicalCountry={physicalCountry}
            onPhysicalCountryChange={setPhysicalCountry}
            panelWidth={panelWidth}
          />
        </div>

        {/* Left: Floating Panel (resizable) */}
        <div
          className="absolute top-[8px] left-[8px] bottom-[8px] z-[1000]"
          style={{ width: panelWidth }}
        >
          <ISPRegulationsPanel
            externalSelectedCountry={selectedCountry}
            onCountryChange={handlePanelChange}
            activeLayer={selectedMapLayer}
            onClearLayer={handleClearMapLayer}
            onVpnConnect={handleConnect}
            onVpnDisconnect={handleDisconnect}
            vpnConnectedCountry={connectedCountry}
            vpnStatus={vpnStatus}
            physicalCountry={physicalCountry}
          />

          {/* Drag handle – sits on the right edge of the panel */}
          <div
            className="absolute top-0 bottom-0 right-0 w-[8px] z-[10] cursor-col-resize flex items-stretch justify-center"
            onPointerDown={handleResizeStart}
            onMouseEnter={() => setHandleHovered(true)}
            onMouseLeave={() => setHandleHovered(false)}
          >
            <div
              className="w-[2px] rounded-full transition-opacity duration-150"
              style={{
                background: "rgba(255,255,255,0.25)",
                opacity: handleHovered ? 1 : 0,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
