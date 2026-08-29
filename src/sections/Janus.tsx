import { motion } from 'framer-motion';

export default function Janus() {
  return (
    <section id="janus" className="py-32 px-6 md:px-12 bg-black border-y border-white/10 relative overflow-hidden">
      {/* Background blueprint overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-5 pointer-events-none flex flex-col justify-center items-end pr-12 font-mono text-[7rem] lg:text-[10rem] font-bold leading-none text-white select-none">
        <div>KERNEL</div>
        <div>ISOLATION</div>
        <div>CAPABILITY</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">SECTION 05 // FLAGSHIP KERNEL</span>
              <span className="w-12 h-[1px] bg-accent/40"></span>
            </div>

            <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-4 text-white">JANUS OS</h2>
            <p className="text-xl font-mono text-[#00e5ff] mb-8">
              Capability-enforced microkernel written in Rust for safety-critical edge compute.
            </p>
            
            <div className="flex flex-col gap-6 mb-10">
              <div className="glass-panel p-5 border-l-2 border-l-accent border-white/10">
                <h3 className="font-mono text-xs tracking-widest uppercase mb-1.5 text-white">01 // CRYPTOGRAPHIC VERIFIED BOOT</h3>
                <p className="text-muted text-xs leading-relaxed">
                  Calculates SHA-256 signatures before initializing user space tasks, preventing unauthorized firmware execution on untrusted hardware.
                </p>
              </div>

              <div className="glass-panel p-5 border-l-2 border-l-[#00e5ff] border-white/10">
                <h3 className="font-mono text-xs tracking-widest uppercase mb-1.5 text-white">02 // CAPABILITY-BASED MEMORY ISOLATION</h3>
                <p className="text-muted text-xs leading-relaxed">
                  Memory allocation and hardware IPC endpoints are bound to unforgeable capability tokens granted by kernel space.
                </p>
              </div>

              <div className="glass-panel p-5 border-l-2 border-l-white border-white/10">
                <h3 className="font-mono text-xs tracking-widest uppercase mb-1.5 text-white">03 // DETERMINISTIC PREEMPTIVE SCHEDULER</h3>
                <p className="text-muted text-xs leading-relaxed">
                  Strict execution time slice guarantees for critical interrupt service routines (ISRs) and sensor fusion streams.
                </p>
              </div>
            </div>

            <a 
              href="https://github.com/AshcrestHQ/janus" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-black font-mono font-semibold text-xs tracking-widest hover:bg-accent hover:text-white transition-colors duration-300 shadow-lg"
            >
              <span>INSPECT JANUS KERNEL REPOSITORY</span>
              <span>→</span>
            </a>
          </motion.div>
        </div>

        {/* Visual Graphic Frame */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-lg aspect-square glass-panel border border-white/10 p-4 relative group overflow-hidden"
          >
            <div className="w-full h-full relative overflow-hidden bg-[#040405]">
              <img 
                src="./janus.jpg" 
                alt="Janus Microkernel Architecture Diagram" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute top-4 left-4 font-mono text-[11px] text-accent tracking-widest px-2.5 py-1 bg-black/80 border border-white/10">
                RUST MICROKERNEL ARCHITECTURE
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

