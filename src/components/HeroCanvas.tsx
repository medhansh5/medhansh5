import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';
import { useState, useRef, Suspense } from 'react';
import * as THREE from 'three';

function ParticleSwarm(props: any) {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }) as Float32Array);
  
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#888888"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <ParticleSwarm />
        </Suspense>
      </Canvas>
    </div>
  );
}
