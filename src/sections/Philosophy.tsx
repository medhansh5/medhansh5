import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  "“I write my own becoming — no one else gets the pen.”",
  "“They call it darkness. I call it clarity.”",
  "“Strength doesn't ask permission.”",
  "“I don't chase balance. I chase becoming.”",
  "“What looks like ruin from outside is just construction from mine.”",
  "“Real power doesn't perform. It just arrives.”",
  "“I didn't lose my way. I finally stopped following someone else's.”"
];

export default function Philosophy() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-40 px-6 md:px-12 bg-black border-y border-white/5 relative flex items-center justify-center min-h-[60vh] overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.02] flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] rounded-full border border-white"></div>
        <div className="w-[60vw] h-[60vw] rounded-full border border-white absolute"></div>
        <div className="w-[40vw] h-[40vw] rounded-full border border-white absolute"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 w-full h-[300px] flex flex-col justify-center items-center">
        <h2 className="text-xs font-mono tracking-[0.2em] text-accent mb-12 absolute top-0">SECTION 07 — PHILOSOPHY</h2>
        
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <blockquote className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white/90">
                {quotes[currentIndex]}
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <div className="absolute bottom-0 flex gap-4">
          {quotes.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-[1px] transition-all duration-1000 ${
                idx === currentIndex ? 'w-8 bg-accent' : 'w-4 bg-white/20'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
