import { motion } from 'framer-motion';

export default function Janus() {
  return (
    <section className="py-32 px-6 md:px-12 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Subtle architecture diagram background */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-5 pointer-events-none flex flex-col justify-center items-end pr-12 lg:pr-24 gap-4 font-mono text-[8rem] lg:text-[12rem] leading-none text-white selection:bg-transparent">
        <div className="translate-x-12">KERNEL</div>
        <div className="translate-x-4">MEMORY</div>
        <div className="-translate-x-8">CAPABILITIES</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono tracking-widest text-muted mb-8">SECTION 05 — FLAGSHIP</h2>
            <h3 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-white">JANUS</h3>
            <p className="text-2xl font-light text-accent mb-8">
              Security-first microkernel written in Rust.
            </p>
            
            <div className="flex flex-col gap-6 mb-12 border-l border-white/10 pl-6">
              <div>
                <h4 className="font-mono text-sm tracking-widest mb-2 text-white/80">VERIFIED BOOT</h4>
                <p className="text-muted text-sm max-w-sm">Cryptographic verification before execution.</p>
              </div>
              <div>
                <h4 className="font-mono text-sm tracking-widest mb-2 text-white/80">CAPABILITY-ENFORCED</h4>
                <p className="text-muted text-sm max-w-sm">Memory allocation strictly tied to process privileges.</p>
              </div>
              <div>
                <h4 className="font-mono text-sm tracking-widest mb-2 text-white/80">PREEMPTIVE SCHEDULING</h4>
                <p className="text-muted text-sm max-w-sm">Deterministic execution time for critical tasks.</p>
              </div>
            </div>

            <a 
              href="https://github.com/AshcrestHQ/janus" 
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-4 bg-white text-black font-medium text-sm tracking-widest hover:bg-accent hover:text-white transition-colors duration-300"
            >
              VIEW ON GITHUB
            </a>
          </motion.div>
        </div>

        {/* Abstract diagram instead of fake 3D hacker graphics */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full max-w-md aspect-square border border-white/10 flex flex-col relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
            <img src="./janus.jpg" alt="Janus Microkernel Architecture" className="w-full h-full object-cover mix-blend-screen opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
