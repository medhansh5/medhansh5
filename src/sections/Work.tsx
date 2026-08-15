import { motion } from 'framer-motion';

const projects = [
  {
    id: "01",
    title: "FUSIONNET",
    category: "MULTIMODAL EDGE AI",
    description: "FusionNet combines computer vision and IMU sensor data to detect road hazards from a smartphone mounted to a motorcycle. The central engineering problem is separating actual potholes from hard turns, vibration, and normal motorcycle motion.",
    metrics: [
      "0.91 F1",
      "~21ms latency",
      "4,200 real frames",
      "Delhi–Meerut Expressway",
      "YOLOv8 + IMU",
      "C++ filtering + quaternion motion tracking"
    ],
    link: "#",
    cta: "READ THE RESEARCH"
  },
  {
    id: "02",
    title: "POTHOLENET",
    category: "EDGE SYSTEMS / SPATIAL AI",
    description: "A road-anomaly pipeline designed to reduce duplicate detections and turn noisy sensor data into spatially useful road information.",
    tech: ["C++17", "Butterworth Biquad SOS filtering", "Ring buffers", "Random Forest", "DBSCAN", "PostGIS"],
    link: "https://github.com/medhansh5/potholenet",
    cta: "VIEW REPOSITORY"
  },
  {
    id: "03",
    title: "SHADOWMAP",
    category: "MOTORCYCLE TELEMETRY",
    description: "A rider-facing road quality and telemetry platform designed around real-world motorcycle sensor noise.",
    tech: ["Web Audio alerts", "Haptic feedback", "Kalman filtering", "Trajectory tracking", "Suspension depth modelling", "GeoJSON export"],
    link: "https://github.com/medhansh5/shadowmap",
    cta: "VIEW REPOSITORY"
  },
  {
    id: "04",
    title: "BIKEGUARD",
    category: "PHYSICAL AI / ROAD SAFETY",
    description: "A computer-vision-based road safety system combining vehicle/helmet detection, license plate recognition, optical-flow speed estimation, and cryptographic event logging.",
    tech: ["C++20", "ONNX / DirectML", "YOLOv8", "Optical Flow", "SHA-256", "Winsock2"],
    link: "https://github.com/medhansh5/bikeguard",
    cta: "VIEW REPOSITORY"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-sm font-mono tracking-widest text-muted mb-4">SECTION 01</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">SELECTED WORK</h3>
          <p className="text-xl md:text-2xl font-light text-muted max-w-2xl">
            Software built for roads, sensors, infrastructure, and the edge.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group relative flex flex-col lg:flex-row gap-12 lg:gap-24"
            >
              {/* Project Visual Area */}
              <div className="w-full lg:w-1/2 aspect-[4/3] bg-[#0a0a0a] border border-white/5 relative overflow-hidden flex items-center justify-center">
                {/* Abstract Visuals - placeholder for 3D or specific visuals */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
                
                {/* Simulated Visual Content based on project */}
                {project.id === "01" ? (
                  <img src="./fusionnet.jpg" alt="FusionNet Interface" className="w-full h-full object-cover mix-blend-screen opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                ) : project.id === "02" ? (
                  <img src="./potholenet.jpg" alt="PotholeNet Clustering" className="w-full h-full object-cover mix-blend-screen opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                ) : project.id === "03" ? (
                  <img src="./shadowmap.jpg" alt="ShadowMap HUD" className="w-full h-full object-cover mix-blend-screen opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                ) : project.id === "04" ? (
                  <img src="./bikeguard.jpg" alt="BikeGuard Vision" className="w-full h-full object-cover mix-blend-screen opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                ) : null}
                
                {/* Project Number */}
                <div className="absolute top-6 left-6 font-mono text-4xl text-white/10 group-hover:text-white/30 transition-colors duration-500">
                  {project.id}
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="font-mono text-xs tracking-widest text-accent mb-4">
                  {project.category}
                </div>
                <h4 className="text-3xl md:text-4xl font-bold mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {project.title}
                </h4>
                <p className="text-muted text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {project.metrics.map(metric => (
                      <div key={metric} className="font-mono text-xs border-l border-white/10 pl-3">
                        {metric}
                      </div>
                    ))}
                  </div>
                )}

                {project.tech && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/5 text-xs font-mono text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-medium tracking-widest hover:text-accent transition-colors group/link"
                  >
                    {project.cta}
                    <span className="w-6 h-[1px] bg-white group-hover/link:bg-accent group-hover/link:w-10 transition-all duration-300"></span>
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
