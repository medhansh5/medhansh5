import { motion } from 'framer-motion';
import HeroCanvas from '../components/HeroCanvas';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 overflow-hidden">
      <HeroCanvas />
      
      <div className="z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4">
            MEDHANSH<br />KABADWAL
          </h1>
          <p className="text-muted font-mono tracking-widest text-sm md:text-base mb-12">
            PHYSICAL AI ENGINEER<br />
            COMPUTER VISION · EDGE AI · SYSTEMS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-2xl md:text-3xl font-light leading-tight mb-6">
            “I build things for conditions most systems weren't designed for.”
          </p>
          <p className="text-muted mb-12 max-w-lg">
            Building open-source systems, physical AI, and software for the real world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <a 
              href="#work" 
              className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-black font-medium tracking-widest text-sm hover:bg-accent hover:text-white transition-colors duration-300"
            >
              VIEW WORK
            </a>
            <a 
              href="https://github.com/medhansh5" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white font-medium tracking-widest text-sm hover:border-white transition-colors duration-300"
            >
              GITHUB
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-6 md:left-12 flex flex-col gap-1 text-xs text-muted font-mono tracking-wider"
      >
        <span>Ghaziabad, India</span>
        <span>Physical AI Engineer</span>
        <span>Open Source Builder</span>
      </motion.div>

      {/* Technical overlays */}
      <div className="absolute top-1/4 right-12 hidden lg:flex flex-col gap-4 text-xs font-mono tracking-widest text-muted/40 text-right">
        <span>01 / PHYSICAL AI</span>
        <span>02 / COMPUTER VISION</span>
        <span>03 / EDGE SYSTEMS</span>
        <span>04 / OPEN SOURCE</span>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block"></div>
    </section>
  );
}
