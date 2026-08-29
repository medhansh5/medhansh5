import { useState } from 'react';
import { motion } from 'framer-motion';

const principles = [
  {
    title: "SIGNAL OVER NOISE",
    rule: "Isolating True Physical Impact Vectors",
    desc: "In real-world physical environments, raw telemetry is dominated by engine vibration and road noise. Software architecture must establish strict mathematical filtering boundaries before drawing inference."
  },
  {
    title: "ZERO HEAP ALLOCATION AT THE EDGE",
    rule: "Deterministic Execution Time",
    desc: "Real-time physical AI cannot tolerate garbage collection pauses or dynamic heap churn during high-velocity telemetry ingestion. Ring buffers and static SIMD layouts preserve strict ~0.15ms latency guarantees."
  },
  {
    title: "LOCAL-FIRST AUTONOMY",
    rule: "Independent On-Device Decision Making",
    desc: "Critical road safety systems and workstation privacy daemons must remain fully operational without internet dependency, cloud network overhead, or external API reliance."
  },
  {
    title: "CRYPTOGRAPHIC AUDITABILITY",
    rule: "Unforgeable Event Provenance",
    desc: "Every physical violation log or system security assertion must carry 256-bit cryptographic SHA-256 signatures directly at the edge boundary."
  }
];

export default function Philosophy() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section id="philosophy" className="py-32 px-6 md:px-12 bg-black border-y border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono tracking-widest text-accent uppercase">SECTION 07</span>
          <span className="w-12 h-[1px] bg-accent/40"></span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12">
          ENGINEERING INVARIANTS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Navigation Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {principles.map((p, idx) => (
              <button
                key={p.title}
                onClick={() => setActiveIdx(idx)}
                className={`text-left p-5 glass-panel transition-all duration-300 border cursor-pointer ${
                  activeIdx === idx 
                    ? 'border-accent bg-accent/10 shadow-[0_0_20px_rgba(255,51,51,0.15)]' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="font-mono text-[10px] tracking-widest text-muted mb-1">0{idx + 1} // INVARIANT</div>
                <div className={`font-mono text-xs font-bold tracking-wider ${activeIdx === idx ? 'text-accent' : 'text-white'}`}>
                  {p.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Detail Display */}
          <div className="lg:col-span-8 glass-panel p-8 md:p-12 border border-white/10 flex flex-col justify-center">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-mono text-xs text-accent tracking-widest uppercase mb-2">
                PRINCIPLE 0{activeIdx + 1} // {principles[activeIdx].rule}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                “{principles[activeIdx].title}”
              </h3>

              <p className="text-muted text-base md:text-lg leading-relaxed font-light mb-8">
                {principles[activeIdx].desc}
              </p>

              <div className="font-mono text-xs text-white/40 pt-4 border-t border-white/10">
                APPLIED ACROSS: FUSIONNET · POTHOLENET · BIKEGUARD · JANUS OS
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

