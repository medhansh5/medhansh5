import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Engineering() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-black relative overflow-hidden flex items-center min-h-[80vh]">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[150%] h-[1px] bg-accent/30 rotate-12"></div>
        <div className="w-[150%] h-[1px] bg-accent/30 -rotate-12 absolute"></div>
        
        {/* Abstract sensor grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-sm font-mono tracking-widest text-accent mb-12">SECTION 02 — THE ENGINEERING PROBLEM</h2>
        
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-16"
        >
          “I build things for conditions most systems weren't designed for.”
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-muted font-light leading-relaxed">
              Dense traffic.<br/>
              Bad roads.<br/>
              A phone instead of a sensor rig.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg leading-relaxed border-l-2 border-accent pl-6">
              The goal isn't simply to detect something. <br/>
              <span className="font-bold text-white mt-2 block">The goal is to distinguish signal from noise.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
