import { useState } from 'react';
import { motion } from 'framer-motion';

const stackCategories = [
  {
    name: "LANGUAGES",
    items: ["Rust", "C++17 / C++20", "Python", "JavaScript", "TypeScript", "Java", "OCaml", "HTML"]
  },
  {
    name: "AI / VISION",
    items: ["PyTorch", "ONNX Runtime", "DirectML", "OpenCV", "YOLOv8", "TFLite"]
  },
  {
    name: "SIGNAL / KINEMATICS",
    items: ["Butterworth filters", "Biquad SOS", "Kalman filtering", "Optical Flow", "FFT"]
  },
  {
    name: "BACKEND / SPATIAL",
    items: ["FastAPI", "Flask", "PostgreSQL", "PostGIS", "SQLAlchemy", "DBSCAN"]
  },
  {
    name: "3D / WEB",
    items: ["Three.js", "React Three Fiber", "Web Audio API", "Next.js"]
  }
];

const connections: Record<string, string[]> = {
  "Rust": ["Janus (AshcrestHQ)"],
  "C++17 / C++20": ["BikeGuard", "PotholeNet", "Blindside (AshcrestHQ)"],
  "Python": ["ShadowMap", "FusionNet", "Spectre (AshcrestHQ)"],
  "JavaScript": ["Terra (AshcrestHQ)", "Portfolio"],
  "TypeScript": ["Aegis (AshcrestHQ)", "Portfolio", "Holocron (AshcrestHQ)"],
  "Java": ["Aegis Core (AshcrestHQ)"],
  "OCaml": ["Holocron Compiler (AshcrestHQ)"],
  "HTML": ["90s Nostalgia (AshcrestHQ)"],
  "PyTorch": ["FusionNet", "BikeGuard"],
  "ONNX Runtime": ["BikeGuard"],
  "DirectML": ["BikeGuard"],
  "OpenCV": ["FusionNet", "BikeGuard", "Blindside (AshcrestHQ)"],
  "YOLOv8": ["FusionNet", "BikeGuard"],
  "TFLite": ["PotholeNet"],
  "Butterworth filters": ["PotholeNet"],
  "Biquad SOS": ["PotholeNet"],
  "Kalman filtering": ["ShadowMap"],
  "Optical Flow": ["BikeGuard"],
  "FFT": ["ShadowMap"],
  "FastAPI": ["Spectre (AshcrestHQ)"],
  "Flask": ["ShadowMap"],
  "PostgreSQL": ["PotholeNet", "Holocron (AshcrestHQ)"],
  "PostGIS": ["PotholeNet"],
  "SQLAlchemy": ["PotholeNet"],
  "DBSCAN": ["PotholeNet"],
  "Three.js": ["Portfolio", "Terra (AshcrestHQ)"],
  "React Three Fiber": ["Portfolio"],
  "Web Audio API": ["ShadowMap"],
  "Next.js": ["Holocron (AshcrestHQ)"]
};

export default function Stack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <h2 className="text-sm font-mono tracking-widest text-muted">SECTION 03 — TECHNICAL STACK</h2>
          
          <div className="h-8 flex items-center">
            {hoveredTech && connections[hoveredTech] ? (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-mono text-xs tracking-widest text-accent flex items-center gap-4"
              >
                <span className="text-muted/50 hidden md:inline">IMPLEMENTED IN:</span>
                <span>{connections[hoveredTech].join(" / ")}</span>
              </motion.div>
            ) : (
              <div className="font-mono text-xs tracking-widest text-muted/30">HOVER TO REVEAL APPLICATIONS</div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12">
          {stackCategories.map((category, idx) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <h4 className="font-mono text-xs text-white/40 mb-6 pb-4 border-b border-white/10 tracking-widest">
                {category.name}
              </h4>
              <ul className="flex flex-col gap-4">
                {category.items.map(tech => (
                  <li 
                    key={tech}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className={`font-mono text-sm cursor-default transition-colors duration-300 ${
                      hoveredTech === tech 
                        ? 'text-accent' 
                        : hoveredTech && connections[hoveredTech] 
                          ? 'text-muted/30' 
                          : 'text-muted hover:text-white'
                    }`}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
