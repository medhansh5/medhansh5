import { useState } from 'react';
import { motion } from 'framer-motion';

const stackCategories = [
  {
    name: "LANGUAGES & RUNTIMES",
    items: ["C++20 / C++17", "Rust", "Python 3.12", "TypeScript", "JavaScript", "C# / DirectML", "SQL / PostGIS"]
  },
  {
    name: "AI & COMPUTER VISION",
    items: ["PyTorch", "ONNX Runtime", "DirectML", "OpenCV 4.x", "YOLOv8", "TFLite Edge"]
  },
  {
    name: "SIGNAL & KINEMATICS",
    items: ["4th-Order Butterworth", "Biquad SOS Filter", "Kalman Filtering", "Optical Flow Vectors", "FFT Spectrum Analysis"]
  },
  {
    name: "BACKEND & SPATIAL DB",
    items: ["FastAPI", "Flask", "PostgreSQL", "PostGIS Spatial", "SQLAlchemy 2.0", "BallTree DBSCAN"]
  },
  {
    name: "3D & WEB ARCHITECTURE",
    items: ["Three.js", "React Three Fiber", "Web Audio API", "Next.js App Router", "Vite Engine"]
  }
];

const connections: Record<string, string[]> = {
  "C++20 / C++17": ["BikeGuard Engine", "PotholeNet Core", "Blindside Security"],
  "Rust": ["Janus Microkernel"],
  "Python 3.12": ["FusionNet Training", "ShadowMap Telemetry", "Spectre Desktop Assistant"],
  "TypeScript": ["AshcrestHQ Web", "Aegis Discord Engine", "Holocron Labs"],
  "JavaScript": ["Terra 3D Workspace", "Portfolio"],
  "C# / DirectML": ["BikeGuard DirectML Acceleration"],
  "SQL / PostGIS": ["PotholeNet Anomaly Spatial Database"],
  "PyTorch": ["FusionNet Multimodal Network", "BikeGuard Training"],
  "ONNX Runtime": ["BikeGuard Edge Inference"],
  "DirectML": ["BikeGuard DirectML Acceleration"],
  "OpenCV 4.x": ["FusionNet Optical Tracking", "BikeGuard ALPR", "Blindside Computer Vision"],
  "YOLOv8": ["FusionNet Object Detection", "BikeGuard Safety Compliance"],
  "TFLite Edge": ["PotholeNet Mobile Ingestion"],
  "4th-Order Butterworth": ["PotholeNet Vibration Isolation"],
  "Biquad SOS Filter": ["PotholeNet Signal Processor"],
  "Kalman Filtering": ["ShadowMap Suspension & Trajectory Tracking"],
  "Optical Flow Vectors": ["BikeGuard Vehicle Velocity Estimation"],
  "FFT Spectrum Analysis": ["ShadowMap Engine Harmonic Isolation"],
  "FastAPI": ["Spectre Local API"],
  "Flask": ["ShadowMap Rider Server"],
  "PostgreSQL": ["PotholeNet Production Storage"],
  "PostGIS Spatial": ["PotholeNet GIS Clustering"],
  "SQLAlchemy 2.0": ["PotholeNet ORM Layer"],
  "BallTree DBSCAN": ["PotholeNet Spatial Anomaly Clustering"],
  "Three.js": ["Portfolio", "Terra 3D Canvas"],
  "React Three Fiber": ["Portfolio Hero Canvas"],
  "Web Audio API": ["ShadowMap Acoustic Alarms"],
  "Next.js App Router": ["Holocron Platform"],
  "Vite Engine": ["Portfolio Engine"]
};

export default function Stack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section id="stack" className="py-32 px-6 md:px-12 bg-[#070708]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">SECTION 03</span>
              <span className="w-12 h-[1px] bg-accent/40"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">TECHNICAL STACK</h2>
          </div>
          
          <div className="h-10 flex items-center glass-panel px-4 py-2 border border-white/10">
            {hoveredTech && connections[hoveredTech] ? (
              <motion.div 
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-mono text-xs tracking-widest text-accent flex items-center gap-3"
              >
                <span className="text-muted/60 hidden md:inline">SYSTEM APPLICATION:</span>
                <span className="font-semibold text-white">{connections[hoveredTech].join(" · ")}</span>
              </motion.div>
            ) : (
              <div className="font-mono text-xs tracking-widest text-muted/40 uppercase">
                HOVER ANY TECHNOLOGICAL NODE TO SEE REPOSITORY APPLICATION
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {stackCategories.map((category, idx) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-panel p-6 border border-white/10 flex flex-col"
            >
              <h3 className="font-mono text-[11px] text-accent mb-6 pb-3 border-b border-white/10 tracking-widest uppercase">
                {category.name}
              </h3>
              <ul className="flex flex-col gap-3.5">
                {category.items.map(tech => (
                  <li 
                    key={tech}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className={`font-mono text-xs cursor-pointer transition-colors duration-200 flex items-center justify-between ${
                      hoveredTech === tech 
                        ? 'text-accent font-semibold translate-x-1' 
                        : hoveredTech && connections[hoveredTech] 
                          ? 'text-muted/30' 
                          : 'text-muted hover:text-white'
                    }`}
                  >
                    <span>{tech}</span>
                    {hoveredTech === tech && <span className="text-accent">→</span>}
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

