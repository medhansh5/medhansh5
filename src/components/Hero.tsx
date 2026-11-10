import { SOCIAL_LINKS } from '../data/portfolio';

export default function Hero() {
  return (
    <div className="hero-atmosphere pt-24 pb-16 md:pt-32 md:pb-24 w-full min-w-0 overflow-hidden relative">
      <div className="hero-glow-bloom" />

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center relative z-10 min-w-0">
        
        {/* Centered Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-elevated/85 border border-white/10 backdrop-blur-md mb-6 text-xs text-silver">
          <span className="bg-pink text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-[0_0_12px_rgba(255,46,147,0.4)]">
            SYSTEMS · SOFTWARE · RESEARCH
          </span>
          <span className="hidden sm:inline text-silver/50">·</span>
          <span className="hidden sm:inline text-silver/90">Student Engineer · India</span>
        </div>

        {/* Expressive Centered Headline with Tasteful Serif Italic Accent */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-extrabold tracking-tight text-white mb-6 leading-[1.14] max-w-[1140px] mx-auto break-words">
          I build software to{' '}
          <span className="font-serif italic font-normal text-white px-1">understand</span>{' '}
          <br className="hidden md:inline" />
          how systems work{' '}
          <span className="font-serif italic font-normal text-white px-1">beneath the surface.</span>
        </h1>

        {/* Narrative Subhead: Concise and Humanized */}
        <p className="text-sm sm:text-base lg:text-lg text-silver font-normal leading-relaxed max-w-2xl mx-auto mb-9 break-words">
          Building software from registers to interfaces: capability microkernels, deterministic computer vision in C++20, and native desktop tools.
        </p>

        {/* Centered CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14 min-w-0">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-pink text-white text-xs font-semibold tracking-wider uppercase hover:bg-pink/90 hover:-translate-y-0.5 transition-all shadow-[0_6px_28px_rgba(255,46,147,0.45)] hover:shadow-[0_10px_36px_rgba(255,46,147,0.6)] cursor-pointer shrink-0"
          >
            <span>Explore Systems</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-elevated/70 border border-border text-white text-xs font-mono hover:border-pink hover:bg-pink/10 hover:-translate-y-0.5 transition-all backdrop-blur-md shrink-0"
          >
            <span>github.com/medhansh5 ↗</span>
          </a>
        </div>

        {/* ===================================================================== */}
        {/* HERO COMPOSED SCENE: Rove Centerpiece flanked by Blindside and Janus  */}
        {/* ===================================================================== */}
        <div className="relative max-w-[1200px] mx-auto pt-6 pb-6">
          <div className="stage-glow" />

          <div className="relative z-10 flex items-center justify-center w-full min-w-0">
            
            {/* FLANKING LEFT: Blindside CV Viewfinder (-6° tilt) */}
            <div className="hidden lg:block absolute -left-4 xl:left-2 top-8 w-[310px] bg-navy-card/90 border border-pink/35 rounded-xl p-4 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.75)] backdrop-blur-md -rotate-6 translate-y-3 z-5 text-left transition-all duration-300 hover:rotate-0 hover:z-30 hover:scale-105 hover:border-pink">
              
              {/* Floating Pill Callout overlapping Blindside */}
              <div className="absolute -top-3 left-4 z-30 bg-[#0D1930]/95 border border-pink/60 px-3 py-1 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(255,46,147,0.3)] text-[10px] font-mono text-white flex items-center gap-1.5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-pink animate-pulse shrink-0" />
                <span>solvePnP Gaze: +34° Yaw</span>
              </div>

              <div className="flex items-center justify-between mb-2 text-xs font-mono">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Blindside Daemon
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-pink/15 text-pink border border-pink/30">
                  CV Pipeline
                </span>
              </div>
              
              {/* Simulated Camera Viewfinder */}
              <div className="w-full h-[140px] bg-[#030712] border border-dashed border-pink/40 rounded-lg relative flex items-center justify-center overflow-hidden mb-2.5">
                {/* Crosshairs & HUD overlays */}
                <div className="absolute top-2 left-2 font-mono text-[8px] text-silver-muted flex items-center gap-1">
                  <span>REC</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                  <span>1080p @ 30FPS</span>
                </div>
                <div className="absolute top-2 right-2 font-mono text-[8px] text-silver-muted">
                  YuNet CNN
                </div>

                {/* Face Tracking Bounding Box */}
                <div className="w-[72px] h-[86px] border-[1.5px] border-pink rounded relative flex items-center justify-center">
                  {/* Facial landmark points */}
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 absolute top-4 left-3.5 shadow-[0_0_6px_#22d3ee]" title="Left Eye" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 absolute top-4 right-3.5 shadow-[0_0_6px_#22d3ee]" title="Right Eye" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 absolute top-9 left-[32px] shadow-[0_0_6px_#22d3ee]" title="Nose Tip" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 absolute bottom-4 left-4 shadow-[0_0_6px_#22d3ee]" title="Mouth Left" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 absolute bottom-4 right-4 shadow-[0_0_6px_#22d3ee]" title="Mouth Right" />
                  
                  {/* 3D Gaze Vector Ray */}
                  <span className="absolute w-12 h-[2px] bg-gradient-to-r from-pink to-transparent top-1/2 left-1/2 -rotate-[28deg] origin-left shadow-[0_0_8px_#FF2E93]" />
                </div>

                <div className="absolute bottom-1.5 left-2 font-mono text-[8.5px] text-pink font-semibold">
                  [OBSERVER DETECTED: +34.2° YAW]
                </div>
              </div>

              <div className="font-mono text-[10px] text-silver flex justify-between">
                <span>Feed: Local V4L2</span>
                <span className="text-pink font-semibold">Mask: Active</span>
              </div>
              <div className="font-mono text-[10px] text-silver flex justify-between mt-1">
                <span>Dwell: 1.0s hysteresis</span>
                <span className="text-emerald-400 font-semibold">0 Sockets Open</span>
              </div>
            </div>

            {/* VISUAL CENTERPIECE: Rove File Manager Window */}
            <div className="relative z-20 w-[740px] max-w-full bg-navy-card/95 border border-white/15 rounded-xl shadow-[0_30px_90px_-15px_rgba(0,0,0,0.9),0_0_1px_1px_rgba(255,255,255,0.08)] overflow-hidden backdrop-blur-xl text-left">
              
              {/* Tab-Style Signature Pink Circular Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 sm:-top-5 sm:-right-5 w-20 h-20 rounded-full bg-pink text-white flex-col items-center justify-center shadow-[0_8px_28px_rgba(255,46,147,0.65)] z-40 rotate-12 transition-transform hover:scale-105 select-none pointer-events-none">
                <span className="text-[9px] uppercase font-mono tracking-wider opacity-85">Rove</span>
                <span className="text-sm font-black tracking-tight leading-none">v0.1.0</span>
                <span className="text-[8.5px] font-mono opacity-90 mt-0.5">Alpha</span>
              </div>

              {/* Window Titlebar */}
              <div className="h-9 bg-[#070D1A]/95 border-b border-white/10 flex items-center px-3.5 gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="font-mono text-[11px] text-silver-muted truncate">
                  Rove File Manager — <strong className="text-white">~/src/kernel/janus/crates/cspace/cap_table.rs</strong>
                </div>
              </div>

              {/* Window Body: Miller Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-12 min-h-[270px] font-mono text-xs">
                
                {/* Column 1: Root Directories */}
                <div className="sm:col-span-3 border-r border-white/5 p-2 bg-[#091122]/70 overflow-y-auto">
                  <div className="px-2.5 py-1.5 text-silver text-[11px] hover:bg-white/5 rounded flex justify-between cursor-default">
                    <span>📁 bin/</span><span className="text-silver-muted">›</span>
                  </div>
                  <div className="px-2.5 py-1.5 bg-pink/15 text-white font-medium border-l-2 border-pink rounded-r text-[11px] flex justify-between cursor-default">
                    <span>📁 crates/</span><span className="text-silver-muted">›</span>
                  </div>
                  <div className="px-2.5 py-1.5 text-silver text-[11px] hover:bg-white/5 rounded flex justify-between cursor-default">
                    <span>📁 drivers/</span><span className="text-silver-muted">›</span>
                  </div>
                  <div className="px-2.5 py-1.5 text-silver text-[11px] hover:bg-white/5 rounded flex justify-between cursor-default">
                    <span>📁 kernel/</span><span className="text-silver-muted">›</span>
                  </div>
                  <div className="px-2.5 py-1.5 text-silver text-[11px] hover:bg-white/5 rounded flex justify-between cursor-default">
                    <span>📁 mm/</span><span className="text-silver-muted">›</span>
                  </div>
                  <div className="px-2.5 py-1.5 text-silver text-[11px] hover:bg-white/5 rounded flex justify-between cursor-default">
                    <span>📄 Cargo.toml</span>
                  </div>
                </div>

                {/* Column 2: Sub-packages */}
                <div className="hidden sm:block sm:col-span-4 border-r border-white/5 p-2 bg-[#091122]/50 overflow-y-auto">
                  <div className="px-2.5 py-1.5 bg-pink/15 text-white font-medium border-l-2 border-pink rounded-r text-[11px] flex justify-between cursor-default">
                    <span>📁 cspace/</span><span className="text-silver-muted">›</span>
                  </div>
                  <div className="px-2.5 py-1.5 text-silver text-[11px] hover:bg-white/5 rounded flex justify-between cursor-default">
                    <span>📁 ipc/</span><span className="text-silver-muted">›</span>
                  </div>
                  <div className="px-2.5 py-1.5 text-silver text-[11px] hover:bg-white/5 rounded flex justify-between cursor-default">
                    <span>📁 paging/</span><span className="text-silver-muted">›</span>
                  </div>
                  <div className="px-2.5 py-1.5 text-silver text-[11px] hover:bg-white/5 rounded flex justify-between cursor-default">
                    <span>📁 scheduler/</span><span className="text-silver-muted">›</span>
                  </div>
                  <div className="px-2.5 py-1.5 text-silver text-[11px] hover:bg-white/5 rounded flex justify-between cursor-default">
                    <span>📁 virtio_blk/</span><span className="text-silver-muted">›</span>
                  </div>
                  <div className="px-2.5 py-1.5 text-silver text-[11px] hover:bg-white/5 rounded flex justify-between cursor-default">
                    <span>📄 lib.rs</span>
                  </div>
                </div>

                {/* Column 3: Quick Look Code Inspector */}
                <div className="sm:col-span-5 p-3.5 bg-[#060B17]/90 flex flex-col justify-between overflow-x-auto">
                  <div>
                    <div className="text-[10px] text-pink font-bold uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span>QUICK LOOK // cap_table.rs</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-pink/10 border border-pink/30 text-pink">Rust 2021</span>
                    </div>
                    <pre className="text-[10.5px] leading-relaxed text-silver font-mono">
{`pub struct CapabilityTable {
    slots: [Slot; 4096],
}

impl CapabilityTable {
    // Zero ambient authority check
    pub fn vend_cptr(&mut self, 
        p: Perm) -> Result<CPtr> {
        let idx = self.alloc()?;
        self.slots[idx] = Slot::vended(p);
        Ok(CPtr::new(idx))
    }
}`}
                    </pre>
                  </div>
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-silver-muted font-mono">
                    <span>Target: x86_64 no_std</span>
                    <span className="text-emerald-400 font-semibold">SPACEBAR PREVIEW</span>
                  </div>
                </div>

              </div>

              {/* Rove Status Footer */}
              <div className="h-7 bg-[#070D1A]/90 border-t border-white/5 flex items-center justify-between px-3.5 text-[10px] font-mono text-silver-muted">
                <span>7 items · 4.2 MB available</span>
                <span className="text-silver">Miller Columns View</span>
              </div>
            </div>

            {/* FLANKING RIGHT: Janus Microkernel CAD Card (+6° tilt) */}
            <div className="hidden lg:block absolute -right-4 xl:right-2 top-8 w-[310px] bg-navy-card/90 border border-blue-500/35 rounded-xl p-4 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.75)] backdrop-blur-md rotate-6 translate-y-3 z-5 text-left transition-all duration-300 hover:rotate-0 hover:z-30 hover:scale-105 hover:border-blue-400">
              
              {/* Floating Pill Callout overlapping Janus on top right */}
              <div className="absolute -top-3 right-4 z-30 bg-[#0D1930]/95 border border-blue-400/60 px-3 py-1 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(37,99,235,0.3)] text-[10px] font-mono text-white flex items-center gap-1.5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                <span>Capability Barrier Verified</span>
              </div>

              <div className="flex items-center justify-between mb-2 text-xs font-mono">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  Janus Microkernel
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30">
                  OS Kernel
                </span>
              </div>

              <div className="w-full bg-[#040812] border border-blue-500/30 rounded-lg p-2.5 font-mono text-[9px] text-blue-300 leading-snug mb-2.5">
                <div className="text-blue-400 font-bold mb-1">RING 3: USERSPACE ISOLATION</div>
                <div className="text-silver/90">[Virtio Driver]  [App Task]</div>
                <div className="text-pink my-1 font-semibold">── Capability Barrier (Syscall) ──</div>
                <div className="text-emerald-400 font-bold">RING 0: JANUS NANO-CORE</div>
                <div className="text-silver/90">[CSpace Mgr]  [IRQ0 Sched]</div>
              </div>

              <div className="font-mono text-[10px] text-silver flex justify-between">
                <span>Target: x86_64-unknown</span>
                <span className="text-blue-400 font-semibold">Rust no_std</span>
              </div>
              <div className="font-mono text-[10px] text-silver flex justify-between mt-1">
                <span>Driver: Ring 3</span>
                <span className="text-emerald-400 font-semibold">Virtio Verified</span>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}
