import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';
import { Sphere } from '@react-three/drei';

function NodeGraph() {
  const groupRef = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => [
      ((i * 3.7) % 9) - 4.5,
      ((i * 5.3) % 9) - 4.5,
      ((i * 7.1) % 9) - 4.5
    ] as [number, number, number]);
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <Sphere key={i} position={pos} args={[0.06, 16, 16]}>
          <meshBasicMaterial color={i === 0 ? "#ff3333" : i % 3 === 0 ? "#00e5ff" : "#ffffff"} transparent opacity={0.7} />
        </Sphere>
      ))}
    </group>
  );
}

const ashcrestProjects = [
  { name: "Aegis", tag: "SECURITY PLATFORM", desc: "Automated Discord ops & server verification platform with real-time audit logs.", url: "https://github.com/AshcrestHQ/aegis" },
  { name: "Blindside", tag: "PHYSICAL PRIVACY", desc: "Local computer vision daemon that locks workstations when unauthenticated faces enter camera FOV.", url: "https://github.com/AshcrestHQ/blindside" },
  { name: "Spectre", tag: "LOCAL AI ASSISTANT", desc: "Privacy-focused desktop assistant running fully offline language & vision models.", url: "https://github.com/AshcrestHQ/spectre" },
  { name: "Terra", tag: "SPATIAL 3D HABITS", desc: "Interactive 3D productivity workspace with procedural audio and habit visualization.", url: "https://github.com/AshcrestHQ/terra" },
  { name: "90s Nostalgia", tag: "RETRO WEB ARCHIVE", desc: "Authentic preservation of 1990s web design aesthetics, graphics, and retro UI patterns.", url: "https://github.com/AshcrestHQ/90s" },
  { name: "Holocron", tag: "SECURITY LABS", desc: "Interactive learn-by-doing platform for open-source systems, OS kernels, and practical security.", url: "https://github.com/AshcrestHQ/holocron" }
];

export default function Ashcrest() {
  return (
    <section id="ashcrest" className="py-32 px-6 md:px-12 relative bg-[#040405]">
      {/* 3D Background canvas */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <Suspense fallback={null}>
            <NodeGraph />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:justify-between md:items-end gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">SECTION 04</span>
              <span className="w-12 h-[1px] bg-accent/40"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">ASHCRESTHQ</h2>
            <p className="text-lg md:text-xl text-muted max-w-2xl font-light">
              An open-source collective engineering developer tools, privacy daemons, microkernels, and creative technology.
            </p>
          </div>
          
          <div className="flex flex-col gap-1.5 font-mono text-xs tracking-widest text-muted/60">
            <span>01 // OPEN BY DEFAULT</span>
            <span>02 // NO THIRD-PARTY TELEMETRY</span>
            <span>03 // LOCAL-FIRST EXECUTION</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ashcrestProjects.map((project, idx) => (
            <motion.a 
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-panel glass-panel-hover p-8 border border-white/10 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] tracking-widest text-accent uppercase">{project.tag}</span>
                  <span className="font-mono text-xs text-muted/60 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300">→</span>
                </div>
                <h3 className="font-mono text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">{project.name}</h3>
                <p className="text-xs text-muted leading-relaxed">{project.desc}</p>
              </div>
              <div className="font-mono text-[10px] tracking-widest text-white/40 pt-4 mt-4 border-t border-white/5 group-hover:text-white transition-colors duration-300">
                VIEW REPOSITORY ON GITHUB
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex flex-wrap gap-8 font-mono text-xs tracking-widest pt-6 border-t border-white/10">
          <a href="https://github.com/AshcrestHQ" target="_blank" rel="noreferrer" className="text-white hover:text-accent transition-colors">GITHUB ARCHIVE</a>
          <a href="https://ashcresthq.dpdns.org" target="_blank" rel="noreferrer" className="text-white hover:text-accent transition-colors">OFFICIAL WEBSITE</a>
          <a href="https://www.linkedin.com/company/ashcresthq" target="_blank" rel="noreferrer" className="text-white hover:text-accent transition-colors">LINKEDIN</a>
          <a href="https://discord.gg/hjYnzP4Dth" target="_blank" rel="noreferrer" className="text-white hover:text-accent transition-colors">DISCORD COMMUNITY</a>
        </div>
      </div>
    </section>
  );
}

