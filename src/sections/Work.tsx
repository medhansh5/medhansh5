import { motion } from 'framer-motion';

const projects = [
  {
    id: "01",
    title: "FUSIONNET",
    category: "MULTIMODAL EDGE AI / RESEARCH",
    description: "Multi-modal edge framework combining smartphone camera computer vision and 3-axis IMU sensor telemetry to detect hazardous road anomalies on single-track vehicles. Solves the core problem of separating genuine pothole strikes from motorcycle lean angles, high-frequency engine harmonics, and aggressive cornering.",
    metrics: [
      "0.91 F1 Score",
      "~21ms End-to-End Latency",
      "4,200 Annotated Frames",
      "Delhi–Meerut Expressway Dataset",
      "YOLOv8 + 6-DOF IMU",
      "C++ Quaternion Motion Tracking"
    ],
    link: "https://doi.org/10.5281/zenodo.20971224",
    cta: "READ RESEARCH PAPER (DOI)"
  },
  {
    id: "02",
    title: "BIKEGUARD",
    category: "PHYSICAL AI / ROAD SAFETY (C++20)",
    description: "Production-grade C++20 Physical AI road safety system designed for high-density traffic enforcement and rider compliance. Incorporates 9 discrete processing stages running on DirectML ONNX inference.",
    metrics: [
      "DirectML ONNX Execution",
      "Indian ALPR Localization",
      "Optical-Flow Velocity (km/h)",
      "Pediatric Pillion Classifier (<4Y)",
      "Sikh Turban Exempt Recognition",
      "256-Bit SHA-256 Event Audit Logs"
    ],
    tech: ["C++20", "DirectML", "YOLOv8", "Optical Flow", "SHA-256", "Winsock2 HTTP Server"],
    link: "https://github.com/medhansh5/bikeguard",
    cta: "EXPLORE C++20 ENGINE"
  },
  {
    id: "03",
    title: "POTHOLENET",
    category: "EDGE SYSTEMS / SPATIAL CLUSTERING",
    description: "C++17 zero-allocation road anomaly processing pipeline. Eliminates duplicate spatial reports through high-pass Butterworth signal filtering and O(N log N) spatial density clustering.",
    metrics: [
      "4th-Order Butterworth SOS Filter",
      "12Hz Cutoff Frequency",
      "Zero-Allocation Ring Buffers",
      "~0.15ms / Sample Processing",
      "BallTree DBSCAN Clustering",
      "PostGIS Spatial Ingestion"
    ],
    tech: ["C++17", "Biquad SOS", "Random Forest", "DBSCAN", "PostgreSQL", "PostGIS"],
    link: "https://github.com/medhansh5/potholenet",
    cta: "VIEW C++ ARCHITECTURE"
  },
  {
    id: "04",
    title: "SHADOWMAP",
    category: "MOTORCYCLE TELEMETRY / RIDER HUD",
    description: "Real-time rider telemetry and suspension displacement system tuned specifically to reject Royal Enfield Classic 350 J-series engine vibration frequencies (~53Hz). Features Web Audio acoustic alerts and GeoJSON spatial export.",
    metrics: [
      "3-Axis IMU Engine Rejection",
      "Kalman Trajectory Smoothing",
      "Suspension Depth Modeling (mm)",
      "Web Audio Acoustic Synthesis",
      "Haptic Pulse Telemetry",
      "GeoJSON Map Generation"
    ],
    tech: ["Python", "Flask", "Kalman Filter", "Web Audio API", "GeoJSON", "Three.js"],
    link: "https://github.com/medhansh5/shadowmap",
    cta: "VIEW TELEMETRY PLATFORM"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 relative bg-[#070708]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono tracking-widest text-accent uppercase">SECTION 01</span>
            <span className="w-12 h-[1px] bg-accent/40"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">SELECTED SYSTEMS & RESEARCH</h2>
          <p className="text-lg md:text-xl font-light text-muted max-w-2xl">
            Embedded edge algorithms, low-latency computer vision, and physical AI built for noisy real-world environments.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="glass-panel glass-panel-hover p-8 md:p-12 border border-white/10 flex flex-col lg:flex-row gap-10 lg:gap-16"
            >
              {/* Left Column: Visual / Graphic Frame */}
              <div className="w-full lg:w-1/2 aspect-[16/10] bg-[#040405] border border-white/10 relative overflow-hidden flex items-center justify-center group">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Visual Image */}
                {project.id === "01" ? (
                  <img src="./fusionnet.jpg" alt="FusionNet Neural Interface" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                ) : project.id === "02" ? (
                  <img src="./bikeguard.jpg" alt="BikeGuard Vision System" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                ) : project.id === "03" ? (
                  <img src="./potholenet.jpg" alt="PotholeNet Clustering Architecture" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                ) : project.id === "04" ? (
                  <img src="./shadowmap.jpg" alt="ShadowMap Telemetry HUD" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                ) : null}

                <div className="absolute top-4 left-4 font-mono text-3xl font-bold text-white/20 group-hover:text-accent transition-colors duration-300">
                  {project.id}
                </div>

                <div className="absolute bottom-4 right-4 font-mono text-[10px] tracking-widest px-2.5 py-1 bg-black/80 border border-white/10 text-muted">
                  SYSTEM ARCHITECTURE // {project.title}
                </div>
              </div>

              {/* Right Column: Technical Details */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
                    {project.category}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Detailed Specs Grid */}
                  <div className="grid grid-cols-2 gap-2.5 mb-6">
                    {project.metrics.map(metric => (
                      <div key={metric} className="font-mono text-xs bg-white/5 border border-white/5 px-3 py-2 text-white/90">
                        {metric}
                      </div>
                    ))}
                  </div>

                  {project.tech && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map(t => (
                        <span key={t} className="px-2.5 py-1 bg-accent/10 border border-accent/20 text-[11px] font-mono text-accent">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-xs font-mono font-semibold tracking-widest text-white hover:text-accent transition-colors group/link"
                  >
                    <span>{project.cta}</span>
                    <span className="w-6 h-[1.5px] bg-white group-hover/link:bg-accent group-hover/link:w-10 transition-all duration-300"></span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

