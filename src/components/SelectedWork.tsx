import { useState } from 'react';
import { FLAGSHIP_PROJECTS } from '../data/portfolio';

export default function SelectedWork() {
  const [showBlindsideDiagram, setShowBlindsideDiagram] = useState(true);
  const [showJanusDiagram, setShowJanusDiagram] = useState(true);
  const [roveActiveTab, setRoveActiveTab] = useState<'preview' | 'architecture'>('preview');

  const blindside = FLAGSHIP_PROJECTS.find((p) => p.id === 'blindside')!;
  const janus = FLAGSHIP_PROJECTS.find((p) => p.id === 'janus')!;
  const rove = FLAGSHIP_PROJECTS.find((p) => p.id === 'rove')!;

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1440px] mx-auto w-full min-w-0 overflow-hidden">
      {/* Section Header: Direct, humanized, and concise */}
      <div className="mb-14 min-w-0">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3 break-words">
          Flagship Systems & <span className="font-serif italic font-normal text-white px-1">Architecture Breakdowns</span>
        </h2>
        <p className="text-sm sm:text-base text-silver max-w-2xl leading-relaxed break-words">
          Core engineering systems: local-first computer vision in C++20, a capability microkernel in Rust, and desktop file management in Electron.
        </p>
      </div>

      <div className="space-y-16 min-w-0">
        
        {/* ========================================================================= */}
        {/* CASE STUDY 01: BLINDSIDE (Asymmetric 2-Column Vision Pipeline Layout)     */}
        {/* ========================================================================= */}
        <article
          id="blindside"
          className="floating-surface rounded-xl overflow-hidden min-w-0 w-full"
        >
          {/* Top Classification Bar */}
          <div className="p-4 sm:p-6 bg-navy-card/90 backdrop-blur-sm border-b border-border flex flex-wrap items-center justify-between gap-3 min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono flex-wrap">
              <span className="text-pink font-bold text-sm">01</span>
              <span className="text-border">/</span>
              <span className="text-white font-semibold">Blindside</span>
              <span className="text-border">•</span>
              <span className="text-silver">C++20 · Physical Privacy Daemon</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-pink/10 border border-pink/30 text-pink font-semibold">
                Active Development
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border min-w-0">
            {/* Left Column (5 cols): Problem, Countermeasure & Invariants */}
            <div className="lg:col-span-5 p-5 sm:p-8 flex flex-col justify-between min-w-0">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 break-words">
                  Blindside
                </h3>
                <p className="text-sm text-silver font-normal leading-relaxed mb-6 break-words">
                  {blindside.tagline}
                </p>

                {/* Problem Statement */}
                <div className="p-4 bg-navy-deep border border-border rounded-lg mb-4 min-w-0">
                  <div className="text-[10px] font-mono font-bold text-pink uppercase tracking-wider mb-1">
                    The Problem
                  </div>
                  <p className="text-xs sm:text-sm text-silver leading-relaxed break-words">
                    {blindside.problem}
                  </p>
                </div>

                {/* Engineering Solution */}
                <div className="p-4 bg-navy-deep border border-border rounded-lg mb-6 min-w-0">
                  <div className="text-[10px] font-mono font-bold text-white uppercase tracking-wider mb-1">
                    The Solution
                  </div>
                  <p className="text-xs sm:text-sm text-silver leading-relaxed break-words">
                    {blindside.solution}
                  </p>
                </div>

                {/* Verified Technical Invariants */}
                <div className="mb-6 min-w-0">
                  <div className="text-xs font-mono text-silver/80 uppercase tracking-wider mb-2.5">
                    Architectural Invariants
                  </div>
                  <ul className="space-y-1.5 text-xs text-silver">
                    {blindside.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-pink font-mono select-none font-bold shrink-0">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags & Action */}
              <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3 min-w-0">
                <div className="flex flex-wrap gap-1.5">
                  {blindside.technologies.map((t) => (
                    <span key={t} className="spec-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={blindside.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-pink hover:text-white transition-colors flex items-center gap-1 font-semibold shrink-0"
                >
                  <span>Repository ↗</span>
                </a>
              </div>
            </div>

            {/* Right Column (7 cols): Flowchart Diagram & Platform Spec */}
            <div className="lg:col-span-7 p-5 sm:p-8 bg-navy-deep flex flex-col justify-between min-w-0 overflow-hidden">
              <div className="min-w-0">
                <div className="flex items-center justify-between mb-3 min-w-0">
                  <span className="text-xs font-mono font-bold text-pink tracking-wide truncate">
                    Vision Pipeline & Response Lifecycle
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowBlindsideDiagram(!showBlindsideDiagram)}
                    className="px-3 py-1 rounded-full bg-navy-card border border-border text-[11px] font-mono text-silver hover:text-white hover:border-pink transition-all cursor-pointer shrink-0 ml-2"
                  >
                    {showBlindsideDiagram ? 'Hide diagram' : 'Show diagram'}
                  </button>
                </div>

                {showBlindsideDiagram && (
                  <div className="w-full min-w-0 max-w-full overflow-x-auto mb-6">
                    <pre className="p-4 bg-navy-card border border-border rounded-lg font-mono text-[11px] sm:text-xs text-white leading-relaxed inline-block min-w-full">
{`Webcam Sensor (Local Feed)
   │
   ▼
[YuNet CNN Inference] ──> 5-Point Facial Landmarks (Eyes, Nose, Mouth)
   │
   ▼
[cv::solvePnP 3D Model] ──> Head Pose Vector (Pitch / Yaw / Roll)
   │
   ▼
[Spatial Gaze Filter] ──> Secondary Face in ±30° Yaw / ±25° Pitch?
   │
   ▼
[Dwell Timer Hysteresis (>1.0s)] ──> Confirm Genuine Observer
   │
   ▼
[Threat Evaluation & Platform Manager]
   ├── Windows: Alpha Redaction Overlay (WM_NCHITTEST Pass-Thru)
   ├── Linux X11: Override-Redirect Opaque Window Redaction
   └── Linux Wayland: Desktop Notification & loginctl Session Lock`}
                    </pre>
                  </div>
                )}

                {/* Platform Support Matrix Table */}
                <div className="mt-4 min-w-0">
                  <div className="text-xs font-mono text-silver/80 uppercase tracking-wider mb-2">
                    Platform Capability Support
                  </div>
                  <div className="w-full min-w-0 max-w-full overflow-x-auto">
                    <table className="w-full text-left font-mono text-[11px] sm:text-xs border border-border rounded-lg overflow-hidden min-w-[360px]">
                      <thead className="bg-navy-card text-silver">
                        <tr>
                          <th className="p-2.5 border-b border-border">Platform</th>
                          <th className="p-2.5 border-b border-border">Detection</th>
                          <th className="p-2.5 border-b border-border">Response</th>
                          <th className="p-2.5 border-b border-border">Style</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border text-silver/90">
                        <tr>
                          <td className="p-2.5 text-white font-semibold">Windows</td>
                          <td className="p-2.5">YuNet + solvePnP</td>
                          <td className="p-2.5">Alpha Overlay</td>
                          <td className="p-2.5 text-pink">Click-Through</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 text-white font-semibold">Linux X11</td>
                          <td className="p-2.5">YuNet + solvePnP</td>
                          <td className="p-2.5">Opaque Mask</td>
                          <td className="p-2.5">Override-Redirect</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 text-white font-semibold">Wayland</td>
                          <td className="p-2.5">YuNet + solvePnP</td>
                          <td className="p-2.5">Notification & Lock</td>
                          <td className="p-2.5 text-silver/60">Restricted</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* ========================================================================= */}
        {/* CASE STUDY 02: JANUS MICROKERNEL (3-Bay Swiss Architectural Grid)         */}
        {/* ========================================================================= */}
        <article
          id="janus"
          className="floating-surface rounded-xl overflow-hidden min-w-0 w-full"
        >
          {/* Top Classification Bar */}
          <div className="p-4 sm:p-6 bg-navy-card/90 backdrop-blur-sm border-b border-border flex flex-wrap items-center justify-between gap-3 min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono flex-wrap">
              <span className="text-pink font-bold text-sm">02</span>
              <span className="text-border">/</span>
              <span className="text-white font-semibold">Janus Microkernel</span>
              <span className="text-border">•</span>
              <span className="text-silver">Rust & x86_64 Assembly · Operating System</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-pink/10 border border-pink/30 text-pink font-semibold">
                Active Development
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border min-w-0">
            {/* Bay 1 (3 cols): Architecture Specifications */}
            <div className="lg:col-span-3 p-5 sm:p-8 flex flex-col justify-between font-mono text-xs min-w-0">
              <div className="space-y-5">
                <div>
                  <div className="text-[10px] text-pink font-bold uppercase tracking-wider mb-1">
                    System Architecture
                  </div>
                  <div className="text-sm font-bold text-white">Pure Microkernel</div>
                  <div className="text-silver-muted text-[11px]">Zero ambient authority</div>
                </div>

                <div>
                  <div className="text-[10px] text-silver font-bold uppercase tracking-wider mb-1">
                    Implementation Language
                  </div>
                  <div className="text-white font-semibold">Rust (no_std)</div>
                  <div className="text-silver-muted text-[11px]">x86_64 assembly entry</div>
                </div>

                <div>
                  <div className="text-[10px] text-silver font-bold uppercase tracking-wider mb-1">
                    Target Triples
                  </div>
                  <div className="text-white font-semibold">x86_64-unknown-none</div>
                  <div className="text-silver-muted text-[11px]">x86_64-unknown-uefi (boot)</div>
                </div>

                <div>
                  <div className="text-[10px] text-silver font-bold uppercase tracking-wider mb-1">
                    Hardware Emulation
                  </div>
                  <div className="text-white font-semibold">QEMU x86_64</div>
                  <div className="text-silver-muted text-[11px]">i440FX / Q35 + VirtIO-Blk</div>
                </div>

                <div>
                  <div className="text-[10px] text-silver font-bold uppercase tracking-wider mb-1">
                    Scheduler & IPC
                  </div>
                  <div className="text-white font-semibold">Preemptive IRQ0 Timer</div>
                  <div className="text-silver-muted text-[11px]">Synchronous handle passing</div>
                </div>
              </div>

              <div className="pt-6 border-t border-border mt-6">
                <a
                  href={janus.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink hover:text-white transition-colors flex items-center gap-1 font-semibold"
                >
                  <span>Repository on GitHub ↗</span>
                </a>
              </div>
            </div>

            {/* Bay 2 (4 cols): Architectural Thesis & Verified Invariants */}
            <div className="lg:col-span-4 p-5 sm:p-8 flex flex-col justify-between min-w-0">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 break-words">
                  Janus OS
                </h3>
                <p className="text-sm text-silver font-normal leading-relaxed mb-6 break-words">
                  {janus.tagline}
                </p>

                {/* Monolithic Vulnerability Context */}
                <div className="p-4 bg-navy-deep border border-border rounded-lg mb-4 min-w-0">
                  <div className="text-[10px] font-mono font-bold text-pink uppercase tracking-wider mb-1">
                    The Problem
                  </div>
                  <p className="text-xs sm:text-sm text-silver leading-relaxed break-words">
                    {janus.problem}
                  </p>
                </div>

                {/* Capability Countermeasure */}
                <div className="p-4 bg-navy-deep border border-border rounded-lg mb-6 min-w-0">
                  <div className="text-[10px] font-mono font-bold text-white uppercase tracking-wider mb-1">
                    The Solution
                  </div>
                  <p className="text-xs sm:text-sm text-silver leading-relaxed break-words">
                    {janus.solution}
                  </p>
                </div>

                {/* Invariants */}
                <div className="space-y-2 text-xs text-silver min-w-0">
                  <div className="text-xs font-mono text-silver/80 uppercase tracking-wider mb-2">
                    Security Invariants
                  </div>
                  <ul className="space-y-1.5 font-mono text-[11px]">
                    {janus.highlights.slice(0, 5).map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-pink font-bold">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-border flex flex-wrap gap-1.5 mt-6">
                {janus.technologies.map((t) => (
                  <span key={t} className="spec-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bay 3 (5 cols): Capability Boundary Schematic */}
            <div className="lg:col-span-5 p-5 sm:p-8 bg-navy-deep flex flex-col justify-between min-w-0 overflow-hidden">
              <div className="min-w-0">
                <div className="flex items-center justify-between mb-3 min-w-0">
                  <span className="text-xs font-mono font-bold text-pink tracking-wide truncate">
                    Capability Boundary & Isolation Model
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowJanusDiagram(!showJanusDiagram)}
                    className="px-3 py-1 rounded-full bg-navy-card border border-border text-[11px] font-mono text-silver hover:text-white hover:border-pink transition-all cursor-pointer shrink-0 ml-2"
                  >
                    {showJanusDiagram ? 'Hide schematic' : 'Show schematic'}
                  </button>
                </div>

                {showJanusDiagram && (
                  <div className="w-full min-w-0 max-w-full overflow-x-auto">
                    <pre className="p-4 bg-navy-card border border-border rounded-lg font-mono text-[11px] sm:text-xs text-white leading-relaxed inline-block min-w-full">
{`┌────────────────────────────────────────────────────────┐
│               USERSPACE (Ring 3 Tasks)                 │
│                                                        │
│  [Init Task]      [Virtio Driver]      [Sandboxed App] │
│  (Root CSpace)    (Ring 3 Userspace)   (Isolated Mem)  │
│        │                 │                    │        │
│        │ CPtr Manifest   │ IOPort / DMA Cap   │ IPC Cap│
└────────┼─────────────────┼────────────────────┼────────┘
═════════╪═════════════════╪════════════════════╪═════════
   syscall / sysret ABI & Capability Verification Barrier 
═════════╪═════════════════╪════════════════════╪═════════
┌────────▼─────────────────▼────────────────────▼────────┐
│               MICROKERNEL (Ring 0 Core)                │
│                                                        │
│  [CSpace Manager]      [Preemptive Sched] [Phys MMU]   │
│  (Handle Validation)   (IRQ0 Timer / Runq) (Frame Alloc)│
│                                                        │
│  [Hardware IRQ Router -> InterruptEndpoint Handles]    │
└────────────────────────────────────────────────────────┘`}
                    </pre>
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-border text-[11px] font-mono text-silver/70">
                <span>Kernel: x86_64-unknown-none · Boot: x86_64-unknown-uefi</span>
              </div>
            </div>
          </div>
        </article>

        {/* ========================================================================= */}
        {/* CASE STUDY 03: ROVE FILE MANAGER (Authentic Interface Preview + Arch)     */}
        {/* ========================================================================= */}
        <article
          id="rove"
          className="floating-surface rounded-xl overflow-hidden min-w-0 w-full"
        >
          {/* Top Banner */}
          <div className="p-5 sm:p-6 bg-navy-card/90 backdrop-blur-sm border-b border-border flex flex-wrap items-center justify-between gap-3 min-w-0">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-1 flex-wrap">
                <span className="text-pink font-bold text-sm font-mono">03</span>
                <span className="text-border">/</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">Rove File Manager</h3>
                <span className="text-[10px] sm:text-xs font-mono px-2.5 py-0.5 rounded-full bg-pink/10 border border-pink/30 text-pink font-semibold">
                  Public Alpha v0.1.0-alpha.1
                </span>
              </div>
              <p className="text-sm text-silver break-words">
                {rove.tagline}
              </p>
            </div>
            <div>
              <a
                href={rove.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-navy border border-border rounded-full text-xs font-mono text-white hover:border-pink hover:-translate-y-0.5 transition-all shrink-0"
              >
                <span>View on GitHub</span>
                <span className="text-pink">↗</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border min-w-0">
            {/* Left Pane (5 cols): Problem, Solution & Native Windows Integration */}
            <div className="lg:col-span-5 p-5 sm:p-8 flex flex-col justify-between min-w-0">
              <div>
                <div className="p-4 bg-navy-deep border border-border rounded-lg mb-4 min-w-0">
                  <div className="text-[10px] font-mono font-bold text-pink uppercase tracking-wider mb-1">
                    The Problem
                  </div>
                  <p className="text-xs sm:text-sm text-silver leading-relaxed break-words">
                    {rove.problem}
                  </p>
                </div>

                <div className="p-4 bg-navy-deep border border-border rounded-lg mb-6 min-w-0">
                  <div className="text-[10px] font-mono font-bold text-white uppercase tracking-wider mb-1">
                    The Solution
                  </div>
                  <p className="text-xs sm:text-sm text-silver leading-relaxed break-words">
                    {rove.solution}
                  </p>
                </div>

                <div className="space-y-2 mb-6 text-xs text-silver min-w-0">
                  <div className="text-xs font-mono text-silver/80 uppercase tracking-wider mb-2">
                    Subsystem Features
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px]">
                    <div className="p-2 bg-navy-deep border border-border rounded">
                      <span className="text-pink font-bold">›</span> Safe Recycle Bin via PowerShell
                    </div>
                    <div className="p-2 bg-navy-deep border border-border rounded">
                      <span className="text-pink font-bold">›</span> Hidden/System Files via attrib.exe
                    </div>
                    <div className="p-2 bg-navy-deep border border-border rounded">
                      <span className="text-pink font-bold">›</span> Spacebar Quick Look (Media/Code)
                    </div>
                    <div className="p-2 bg-navy-deep border border-border rounded">
                      <span className="text-pink font-bold">›</span> 7-Color File Tagging System
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-navy-deep/80 border border-border/80 rounded-lg text-xs text-silver/70 font-mono">
                  * Public alpha: For evaluation and testing, not yet a daily driver.
                </div>
              </div>

              <div className="pt-6 border-t border-border flex flex-wrap gap-1.5 mt-6">
                {rove.technologies.map((t) => (
                  <span key={t} className="spec-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Pane (7 cols): Authentic Interface Preview & Architecture Toggle */}
            <div className="lg:col-span-7 p-5 sm:p-8 bg-navy-deep flex flex-col justify-between min-w-0 overflow-hidden">
              <div className="min-w-0">
                {/* View Mode Tabs: Interface Preview vs Electron Architecture */}
                <div className="flex items-center justify-between mb-4 min-w-0">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setRoveActiveTab('preview')}
                      className={`px-3 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                        roveActiveTab === 'preview'
                          ? 'bg-pink text-white shadow-[0_2px_12px_rgba(255,46,147,0.4)]'
                          : 'bg-navy-card border border-border text-silver hover:text-white'
                      }`}
                    >
                      Interface Preview
                    </button>
                    <button
                      type="button"
                      onClick={() => setRoveActiveTab('architecture')}
                      className={`px-3 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                        roveActiveTab === 'architecture'
                          ? 'bg-pink text-white shadow-[0_2px_12px_rgba(255,46,147,0.4)]'
                          : 'bg-navy-card border border-border text-silver hover:text-white'
                      }`}
                    >
                      Electron Architecture
                    </button>
                  </div>
                  <span className="text-[11px] font-mono text-silver-muted hidden sm:inline">
                    {roveActiveTab === 'preview' ? 'Miller Columns View' : 'IPC Context Bridge'}
                  </span>
                </div>

                {/* Tab 1: Authentic Rove Interface Preview */}
                {roveActiveTab === 'preview' ? (
                  <div className="w-full bg-[#070D1A] border border-white/10 rounded-xl overflow-hidden shadow-2xl font-mono text-xs">
                    {/* Window Titlebar */}
                    <div className="h-8 bg-[#050914] border-b border-white/10 flex items-center justify-between px-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                      </div>
                      <div className="text-[11px] text-silver truncate max-w-xs sm:max-w-md">
                        ~/Projects/rove/src/renderer/
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-silver-muted">
                        <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">Ctrl+F</span>
                      </div>
                    </div>

                    {/* Rove Toolbar */}
                    <div className="h-8 bg-[#091122]/90 border-b border-white/5 flex items-center justify-between px-3 text-[11px]">
                      <div className="flex items-center gap-2">
                        <span className="text-silver hover:text-white cursor-pointer">‹</span>
                        <span className="text-silver-muted">›</span>
                        <span className="text-border">|</span>
                        <span className="px-2 py-0.5 rounded bg-pink/20 text-pink font-semibold border border-pink/30">Columns</span>
                        <span className="px-2 py-0.5 text-silver-muted hover:text-white cursor-pointer">Icons</span>
                        <span className="px-2 py-0.5 text-silver-muted hover:text-white cursor-pointer">List</span>
                      </div>
                      <div className="text-[10px] text-pink font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink animate-pulse" />
                        Quick Look Active
                      </div>
                    </div>

                    {/* Miller Columns Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 min-h-[220px]">
                      {/* Column 1: Parent Directory */}
                      <div className="sm:col-span-4 border-r border-white/5 p-2 bg-[#091122]/50 text-[11px]">
                        <div className="px-2 py-1 text-silver hover:bg-white/5 rounded flex justify-between">
                          <span>📁 components/</span><span className="text-silver-muted">›</span>
                        </div>
                        <div className="px-2 py-1 bg-pink/15 text-white font-medium border-l-2 border-pink rounded-r flex justify-between">
                          <span>📁 views/</span><span className="text-silver-muted">›</span>
                        </div>
                        <div className="px-2 py-1 text-silver hover:bg-white/5 rounded flex justify-between">
                          <span>📁 hooks/</span><span className="text-silver-muted">›</span>
                        </div>
                        <div className="px-2 py-1 text-silver hover:bg-white/5 rounded flex justify-between">
                          <span>📁 state/</span><span className="text-silver-muted">›</span>
                        </div>
                        <div className="px-2 py-1 text-silver hover:bg-white/5 rounded flex justify-between">
                          <span>📄 App.tsx</span>
                        </div>
                      </div>

                      {/* Column 2: Selected Folder Items */}
                      <div className="sm:col-span-4 border-r border-white/5 p-2 bg-[#060C18] text-[11px]">
                        <div className="px-2 py-1 bg-pink/15 text-white font-medium border-l-2 border-pink rounded-r flex justify-between">
                          <span>📄 MillerColumns.tsx</span><span className="text-pink">●</span>
                        </div>
                        <div className="px-2 py-1 text-silver hover:bg-white/5 rounded flex justify-between">
                          <span>📄 QuickLookModal.tsx</span>
                        </div>
                        <div className="px-2 py-1 text-silver hover:bg-white/5 rounded flex justify-between">
                          <span>📄 IconGrid.tsx</span>
                        </div>
                        <div className="px-2 py-1 text-silver hover:bg-white/5 rounded flex justify-between">
                          <span>📄 TagPicker.tsx</span>
                        </div>
                        <div className="px-2 py-1 text-silver hover:bg-white/5 rounded flex justify-between">
                          <span>📄 Breadcrumbs.tsx</span>
                        </div>
                      </div>

                      {/* Column 3: Live Quick Look Code Preview */}
                      <div className="sm:col-span-4 p-3 bg-[#040812] flex flex-col justify-between">
                        <div>
                          <div className="text-[10px] text-pink font-bold uppercase mb-1 flex items-center justify-between">
                            <span>SPACEBAR QUICK LOOK</span>
                            <span className="text-emerald-400">2.4 KB</span>
                          </div>
                          <div className="text-[10px] text-silver-muted mb-2">MillerColumns.tsx</div>
                          <pre className="text-[10px] leading-tight text-silver">
{`export const MillerColumns = ({
  path,
  onNavigate,
}) => {
  const { columns, active } = 
    useFileSystem(path);

  return (
    <div className="columns-view">
      {columns.map(col => (
        <ColumnPane key={col.id} />
      ))}
    </div>
  );
};`}
                          </pre>
                        </div>
                        <div className="pt-2 border-t border-white/5 text-[9.5px] text-silver-muted flex justify-between">
                          <span>TypeScript · UTF-8</span>
                          <span className="text-pink font-semibold">SPACE to dismiss</span>
                        </div>
                      </div>
                    </div>

                    {/* Status bar */}
                    <div className="h-6 bg-[#050914] border-t border-white/5 px-3 flex items-center justify-between text-[10px] text-silver-muted">
                      <span>5 items in /views/ · 1 selected</span>
                      <span>Press Spacebar to preview any file</span>
                    </div>
                  </div>
                ) : (
                  /* Tab 2: Electron Architecture Schematic */
                  <div className="w-full min-w-0 max-w-full overflow-x-auto">
                    <pre className="p-4 bg-navy-card border border-border rounded-lg font-mono text-[11px] sm:text-xs text-white leading-relaxed inline-block min-w-full">
{`┌────────────────────────────────────────────────────────┐
│                 REACT RENDERER PROCESS                 │
│                                                        │
│  [Miller Columns Pane]  [Quick Look Modal]  [Tag Bar]  │
│  (Cascading Navigation) (Spacebar Previews) (7 Colors) │
└───────────────────────────┬────────────────────────────┘
                            │ Context Bridge (IPC)
┌───────────────────────────▼────────────────────────────┐
│                  ELECTRON MAIN PROCESS                 │
│                                                        │
│  [Async Filesystem Scanner]  [PowerShell Shell Bridge] │
│  • Batch attrib.exe Checks   • Safe Recycle Bin Deletes│
│  • Logical Drive Storage     • Native File Reveals     │
└────────────────────────────────────────────────────────┘`}
                    </pre>
                  </div>
                )}
              </div>

              <div className="pt-4 mt-6 border-t border-border text-[11px] font-mono text-silver/70 flex justify-between flex-wrap gap-2">
                <span>UI: React 19 + Tailwind CSS</span>
                <span>DESKTOP: Electron 34 + Win32</span>
              </div>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}
