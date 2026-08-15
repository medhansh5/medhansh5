import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';
import { Line, Sphere } from '@react-three/drei';

function NodeGraph() {
  const groupRef = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => {
    return Array.from({ length: 15 }).map(() => [
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8
    ] as [number, number, number]);
  }, []);

  const lines = useMemo(() => {
    const l = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.8) {
          l.push([nodes[i], nodes[j]]);
        }
      }
    }
    return l;
  }, [nodes]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <Sphere key={i} position={pos} args={[0.05, 16, 16]}>
          <meshBasicMaterial color={i === 0 ? "#ff3030" : "#ffffff"} transparent opacity={0.8} />
        </Sphere>
      ))}
      {lines.map((pair, i) => (
        <Line key={i} points={pair as any} color="#ffffff" transparent opacity={0.15} lineWidth={1} />
      ))}
    </group>
  );
}

const projects = [
  { name: "Aegis", desc: "A Discord security and operations platform." },
  { name: "Blindside", desc: "A privacy-focused workstation defense system using local computer vision." },
  { name: "Spectre", desc: "A privacy-conscious desktop AI assistant." },
  { name: "Terra", desc: "A 3D habit and productivity experiment." },
  { name: "90s Nostalgia", desc: "A trip back to the web of the 90s." },
  { name: "Holocron", desc: "A learn-by-doing platform for security and open-source." }
];

export default function Ashcrest() {
  return (
    <section id="ashcrest" className="py-32 px-6 md:px-12 relative bg-[#030303]">
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <Suspense fallback={null}>
            <NodeGraph />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:justify-between md:items-end gap-8">
          <div>
            <h2 className="text-sm font-mono tracking-widest text-muted mb-4">SECTION 04</h2>
            <h3 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">ASHCRESTHQ</h3>
            <p className="text-xl text-muted max-w-2xl font-light">
              An open-source collective exploring security, systems, AI, developer tools, and creative technology.
            </p>
          </div>
          
          <div className="flex flex-col gap-2 font-mono text-xs tracking-widest text-muted/60">
            <span>OPEN BY DEFAULT.</span>
            <span>CURIOUS OVER CONVENTIONAL.</span>
            <span>SECURITY MATTERS.</span>
            <span>LEARN BY BUILDING.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 border border-white/10 bg-black/50 backdrop-blur-sm hover:border-accent/50 transition-colors duration-300 group"
            >
              <h4 className="font-mono text-lg font-bold mb-4 group-hover:text-accent transition-colors">{project.name}</h4>
              <p className="text-sm text-muted">{project.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 font-mono text-xs tracking-widest">
          <a href="https://github.com/AshcrestHQ" target="_blank" rel="noreferrer" className="hover:text-accent">GITHUB</a>
          <a href="https://ashcresthq.dpdns.org" target="_blank" rel="noreferrer" className="hover:text-accent">WEBSITE</a>
          <a href="https://www.linkedin.com/company/ashcresthq" target="_blank" rel="noreferrer" className="hover:text-accent">LINKEDIN</a>
          <a href="https://discord.gg/hjYnzP4Dth" target="_blank" rel="noreferrer" className="hover:text-accent">DISCORD</a>
        </div>
      </div>
    </section>
  );
}
