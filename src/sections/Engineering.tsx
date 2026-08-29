import { motion } from 'framer-motion';
import SignalInspector from '../components/SignalInspector';

export default function Engineering() {
  return (
    <section id="engineering" className="py-32 px-6 md:px-12 bg-black relative overflow-hidden">
      {/* Sensor grid backdrop */}
      <div className="absolute inset-0 opacity-10 pointer-events-none tech-grid"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono tracking-widest text-accent uppercase">SECTION 02</span>
          <span className="w-12 h-[1px] bg-accent/40"></span>
        </div>
        
        <h2 className="text-sm font-mono tracking-widest text-accent uppercase mb-8">
          THE HARDWARE & SIGNAL PROBLEM
        </h2>
        
        <motion.h3 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-white mb-12"
        >
          High-vibration engines. Chaotic Indian roads. Low-latency edge execution.
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel p-8 border border-white/10"
          >
            <h4 className="font-mono text-xs text-accent tracking-widest uppercase mb-3">01 // NOISE REJECTION</h4>
            <h5 className="text-xl font-bold text-white mb-3">Separating Engine Harmonics from Road Impacts</h5>
            <p className="text-muted text-sm leading-relaxed">
              Mounting a smartphone to a Royal Enfield Classic 350 J-series chassis exposes the accelerometer to intense 50–60Hz engine vibrations. Standard low-pass filters smear actual shock events. We implement 4th-order Butterworth Biquad SOS filtering in C++ to isolate true road impact vectors in ~0.15ms per sample.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 border border-white/10"
          >
            <h4 className="font-mono text-xs text-accent tracking-widest uppercase mb-3">02 // EDGE DETERMINISM</h4>
            <h5 className="text-xl font-bold text-white mb-3">Zero-Allocation Invariants</h5>
            <p className="text-muted text-sm leading-relaxed">
              Real-world physical AI cannot afford garbage collection pauses or dynamic heap allocations while analyzing high-velocity telemetry. Ring buffers, static SIMD matrices, and local DirectML ONNX runtimes maintain a strict 21ms latency budget on battery-constrained hardware.
            </p>
          </motion.div>
        </div>

        {/* Interactive Signal Processing Inspector Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SignalInspector />
        </motion.div>
      </div>
    </section>
  );
}

