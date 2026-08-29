import { motion } from 'framer-motion';
import HeroCanvas from '../components/HeroCanvas';

export default function Hero() {
  const highlights = [
    "C++20 / C++17 Zero-Allocation",
    "DirectML ONNX Edge Vision",
    "4th-Order Butterworth Biquad SOS",
    "Rust Capability Microkernel"
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 pb-16 overflow-hidden">
      <HeroCanvas />
      
      <div className="z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[11px] font-mono text-accent mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            GHAZIABAD, INDIA · PHYSICAL AI & EDGE SYSTEMS
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 text-white">
            MEDHANSH<br />KABADWAL
          </h1>
          
          <p className="text-muted font-mono tracking-widest text-xs md:text-sm mb-8">
            PHYSICAL AI ENGINEER · COMPUTER VISION · SYSTEMS ARCHITECTURE
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl"
        >
          <p className="text-2xl md:text-3xl font-light leading-tight text-white/90 mb-6">
            Engineering low-latency computer vision, noise-isolated sensor fusion, and systems software for chaotic physical environments.
          </p>

          <p className="text-muted text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
            Author of <strong className="text-white">FusionNet</strong> (0.91 F1 multimodal road safety paper), <strong className="text-white">BikeGuard</strong> (C++20 DirectML engine), <strong className="text-white">PotholeNet</strong> (zero-allocation Biquad SOS filtering), and founder of <strong className="text-white">AshcrestHQ</strong>. Dedicated to expanding open-source engineering reach.
          </p>

          {/* Key Engineering Badges */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {highlights.map((badge) => (
              <span key={badge} className="px-3 py-1.5 glass-panel text-xs font-mono text-white/80 border border-white/10">
                {badge}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a 
              href="#work" 
              className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white font-mono font-semibold tracking-widest text-xs hover:bg-red-600 transition-colors duration-300 shadow-lg shadow-accent/20"
            >
              EXPLORE SYSTEMS & WORK
            </a>
            <a 
              href="https://github.com/medhansh5" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 text-white font-mono tracking-widest text-xs hover:border-white hover:bg-white/5 transition-colors duration-300"
            >
              GITHUB REPOSITORIES
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-8 left-6 md:left-12 hidden md:flex items-center gap-6 text-xs text-muted/60 font-mono tracking-wider"
      >
        <span>LATENCY: &lt;21ms</span>
        <span>·</span>
        <span>PRECISION: 0.91 F1</span>
        <span>·</span>
        <span>TARGET: EXPANDING REACH</span>
      </motion.div>

      {/* Technical HUD overlay */}
      <div className="absolute top-1/3 right-12 hidden xl:flex flex-col gap-3 text-xs font-mono tracking-widest text-muted/30 text-right">
        <span>01 // FUSIONNET CAMERA+IMU</span>
        <span>02 // BIKEGUARD ALPR+OPTICAL FLOW</span>
        <span>03 // POTHOLENET BIQUAD SOS</span>
        <span>04 // JANUS RUST MICROKERNEL</span>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}

