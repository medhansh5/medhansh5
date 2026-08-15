import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono tracking-widest text-muted mb-8">SECTION 06</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">BEYOND THE CODE</h3>
            
            <div className="prose prose-invert prose-lg text-muted font-light mb-12">
              <p className="mb-6">
                Medhansh explores dark, moody urban photography and retro-digital visual styles.
              </p>
              <p>
                Every empire needs its art—a creative counterbalance to engineering absolute control. 
                The visual language is an extension of the technical philosophy: finding clarity in the noise, 
                and extracting signal from the dark.
              </p>
            </div>

            <a 
              href="https://instagram.com/medhansh.hq"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-sm font-mono tracking-widest text-white hover:text-accent transition-colors group"
            >
              INSTAGRAM: @MEDHANSH.HQ
              <span className="w-6 h-[1px] bg-white group-hover:bg-accent group-hover:w-10 transition-all duration-300"></span>
            </a>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] bg-[#050505] relative overflow-hidden flex items-center justify-center group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>
            
            <img src="./about.jpg" alt="Urban Photography" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
