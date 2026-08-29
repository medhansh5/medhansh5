import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-[#070708]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">SECTION 06</span>
              <span className="w-12 h-[1px] bg-accent/40"></span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              CINEMATIC PHOTOGRAPHY & VISUAL ARTS
            </h2>
            
            <div className="text-muted text-base font-light leading-relaxed space-y-4 mb-8">
              <p>
                Beyond physical AI and low-level C++ systems, I document urban architecture, high-contrast night streetscapes, and moody concrete infrastructure through cinematic digital photography.
              </p>
              <p>
                Visual observation shares the same core discipline as computer vision: capturing raw light, finding geometric structure within environmental noise, and highlighting fine detail across dark contrast ratios.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="https://instagram.com/medhansh.hq"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/15 text-xs font-mono tracking-widest text-white hover:text-accent hover:border-accent transition-all duration-300"
              >
                <span>INSTAGRAM ARCHIVE // @MEDHANSH.HQ</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/3] glass-panel border border-white/10 p-3 relative overflow-hidden group"
          >
            <div className="w-full h-full relative overflow-hidden bg-[#040405]">
              <img 
                src="./about.jpg" 
                alt="Medhansh Urban Photography Archive" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
              />
              <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-widest px-2.5 py-1 bg-black/80 border border-white/10 text-muted">
                URBAN ARCHITECTURE ARCHIVE // GHAZIABAD
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

