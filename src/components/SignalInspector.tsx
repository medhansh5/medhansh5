import { useRef, useEffect, useState } from 'react';

interface FilterPoint {
  raw: number;
  filtered: number;
  time: number;
}

export default function SignalInspector() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [cutoffFreq, setCutoffFreq] = useState<number>(12); // Hz
  const [engineRpm, setEngineRpm] = useState<number>(3200); // RE Classic 350 engine RPM
  const [isBumpTriggered, setIsBumpTriggered] = useState<boolean>(false);

  const pointsRef = useRef<FilterPoint[]>([]);
  const animFrameRef = useRef<number | null>(null);

  // Butterworth Biquad SOS state coefficients calculation
  const filterStateRef = useRef<{
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  }>({ x1: 0, x2: 0, y1: 0, y2: 0 });

  const triggerPotholeEvent = () => {
    setIsBumpTriggered(true);
    setTimeout(() => setIsBumpTriggered(false), 800);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let sampleCount = 0;

    const render = () => {
      sampleCount++;
      const time = sampleCount * 0.016; // ~60fps simulation step

      // Primary engine vibration harmonic (Royal Enfield Classic 350 4-stroke thumper)
      const engineFreq = engineRpm / 60; // Convert RPM to Hz (~53.3 Hz at 3200 RPM)
      const engineVibration =
        Math.sin(time * engineFreq * 2 * Math.PI) * 1.8 +
        Math.sin(time * engineFreq * 4 * Math.PI) * 0.6 +
        (Math.random() - 0.5) * 0.4;

      // Simulated road anomaly signal (pothole impact profile)
      const bumpSignal = isBumpTriggered
        ? Math.exp(-((sampleCount % 50) / 8)) * 12.0 * Math.sin((sampleCount % 50) * 0.4)
        : 0;

      const rawInput = engineVibration + bumpSignal;

      // 4th-order High-Pass Butterworth Biquad Filtering logic
      // Frequency cutoff ratio relative to sample rate (fs = 200 Hz)
      const fs = 200;
      const w0 = (2 * Math.PI * cutoffFreq) / fs;
      const alpha = Math.sin(w0) / (2 * 0.7071);

      const b0 = (1 + Math.cos(w0)) / 2;
      const b1 = -(1 + Math.cos(w0));
      const b2 = (1 + Math.cos(w0)) / 2;
      const a0 = 1 + alpha;
      const a1 = -2 * Math.cos(w0);
      const a2 = 1 - alpha;

      // Normalize coefficients
      const nb0 = b0 / a0;
      const nb1 = b1 / a0;
      const nb2 = b2 / a0;
      const na1 = a1 / a0;
      const na2 = a2 / a0;

      // Biquad difference equation Direct Form I
      const st = filterStateRef.current;
      const filteredOutput =
        nb0 * rawInput +
        nb1 * st.x1 +
        nb2 * st.x2 -
        na1 * st.y1 -
        na2 * st.y2;

      // Update state ring
      st.x2 = st.x1;
      st.x1 = rawInput;
      st.y2 = st.y1;
      st.y1 = filteredOutput;

      // Append to buffer
      pointsRef.current.push({
        raw: rawInput,
        filtered: filteredOutput,
        time,
      });

      if (pointsRef.current.length > 250) {
        pointsRef.current.shift();
      }

      // Draw canvas
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      ctx.clearRect(0, 0, width, height);

      // Draw background grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < width; x += 40) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += 30) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Zero baseline
      const centerY = height / 2;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      const points = pointsRef.current;
      if (points.length < 2) {
        animFrameRef.current = requestAnimationFrame(render);
        return;
      }

      const stepX = width / 250;

      // Draw Raw Signal (Engine Noise + Road Anomaly)
      ctx.strokeStyle = 'rgba(255, 51, 51, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        const x = i * stepX;
        const y = centerY - points[i].raw * 6;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw Filtered Signal (High-Pass Biquad Output)
      ctx.strokeStyle = '#00e5ff';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#00e5ff';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        const x = i * stepX;
        const y = centerY - points[i].filtered * 6;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [cutoffFreq, engineRpm, isBumpTriggered]);

  return (
    <div className="glass-panel p-6 md:p-8 rounded-none relative overflow-hidden border border-white/10 my-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-pulse"></span>
            <h4 className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">
              POTHOLENET / SHADOWMAP TELEMETRY INSPECTOR
            </h4>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white mt-1">
            4th-Order Butterworth Biquad SOS Filter
          </h3>
          <p className="text-xs text-muted font-mono mt-1">
            Isolating low-frequency road impact vectors from high-frequency Royal Enfield Classic 350 engine harmonics (~53Hz).
          </p>
        </div>

        <button
          onClick={triggerPotholeEvent}
          className="px-5 py-2.5 bg-accent text-white font-mono text-xs tracking-widest uppercase hover:bg-red-600 transition-colors cursor-pointer border border-accent"
        >
          Inject Road Impact Event (Bump)
        </button>
      </div>

      {/* Canvas Signal Display */}
      <div className="relative w-full h-56 bg-[#040405] border border-white/10 rounded-none overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full block" />

        <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-3 sm:gap-6 text-[10px] sm:text-[11px] font-mono">
          <div className="flex items-center gap-2 bg-black/60 px-2 py-0.5 border border-white/10">
            <span className="w-3 h-0.5 bg-accent inline-block"></span>
            <span className="text-white/70">Raw Acceleration (Z)</span>
          </div>
          <div className="flex items-center gap-2 bg-black/60 px-2 py-0.5 border border-white/10">
            <span className="w-3 h-0.5 bg-[#00e5ff] inline-block shadow-[0_0_8px_#00e5ff]"></span>
            <span className="text-[#00e5ff] font-semibold">Filtered Anomaly Vector</span>
          </div>
        </div>

        <div className="absolute bottom-2 right-3 text-[9px] sm:text-[10px] font-mono text-muted bg-black/70 px-2 py-0.5 border border-white/10">
          fs: 200Hz | ~0.15ms latency
        </div>
      </div>

      {/* Interactive Telemetry Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 font-mono text-xs text-muted">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span>High-Pass Cutoff Frequency:</span>
            <span className="text-white font-semibold">{cutoffFreq} Hz</span>
          </div>
          <input
            type="range"
            min="5"
            max="35"
            step="1"
            value={cutoffFreq}
            onChange={(e) => setCutoffFreq(Number(e.target.value))}
            className="accent-accent cursor-pointer w-full"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span>Simulated RE Classic 350 Engine RPM:</span>
            <span className="text-white font-semibold">{engineRpm} RPM ({Math.round(engineRpm / 60)} Hz)</span>
          </div>
          <input
            type="range"
            min="1500"
            max="5000"
            step="100"
            value={engineRpm}
            onChange={(e) => setEngineRpm(Number(e.target.value))}
            className="accent-accent cursor-pointer w-full"
          />
        </div>
      </div>
    </div>
  );
}
