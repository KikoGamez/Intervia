import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

/* ── Animated form card (HTML overlay in 3D space) ── */
function FormCard({ position, rotation, delay }: { position: [number, number, number]; rotation: [number, number, number]; delay: number }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * 0.8 + delay) * 0.15;
  });

  return (
    <group ref={ref} position={position} rotation={rotation}>
      <Html
        transform
        distanceFactor={6}
        style={{ pointerEvents: 'none' }}
      >
        <div
          style={{
            width: 180,
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(8px)',
            borderRadius: 12,
            padding: '14px 16px',
            boxShadow: '0 8px 32px rgba(115,80,255,0.18)',
            border: '1px solid rgba(115,80,255,0.15)',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {/* form header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#7350ff' }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: '#7350ff', letterSpacing: 0.5 }}>AI FORM</span>
          </div>

          {/* animated field rows */}
          {[0.7, 1.0, 0.55, 0.85].map((w, i) => (
            <div key={i} style={{ marginBottom: 8 }}>
              <div style={{ width: 40, height: 4, borderRadius: 2, background: '#d4d0e8', marginBottom: 4 }} />
              <div style={{ position: 'relative', width: '100%', height: 6, borderRadius: 3, background: '#f0eef8', overflow: 'hidden' }}>
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    borderRadius: 3,
                    background: 'linear-gradient(90deg, #7350ff, #a78bfa)',
                    animation: `fillField 2.5s ease-in-out ${delay + i * 0.4}s infinite`,
                    width: `${w * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}

          {/* check mark row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 6 }}>
            <div style={{
              width: 14, height: 14, borderRadius: 4, background: '#7350ff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#fff', fontSize: 9, lineHeight: 1 }}>&#10003;</span>
            </div>
            <div style={{ width: 50, height: 4, borderRadius: 2, background: '#d4d0e8' }} />
          </div>
        </div>
      </Html>
    </group>
  );
}

/* ── Data stream particles flowing from brain to forms ── */
function DataStreams() {
  const ref = useRef<THREE.Points>(null);
  const count = 60;

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities: number[] = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 0.3;
      positions[i * 3] = Math.cos(angle) * r;
      positions[i * 3 + 1] = Math.sin(angle) * r;
      positions[i * 3 + 2] = 0;
      velocities.push(0.01 + Math.random() * 0.03);
    }
    return { positions, velocities };
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const angle = Math.atan2(y, x);
      const r = Math.sqrt(x * x + y * y);
      const newR = r + velocities[i];
      if (newR > 3.5) {
        pos.setX(i, Math.cos(angle) * 0.3);
        pos.setY(i, Math.sin(angle) * 0.3);
      } else {
        pos.setX(i, Math.cos(angle) * newR);
        pos.setY(i, Math.sin(angle) * newR);
      }
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#7350ff" size={0.04} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

/* ── Neural network brain ── */
function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { nodes, connections, particlePositions } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    const count = 120;

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 1.8 + (Math.random() - 0.5) * 0.6;
      nodes.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        )
      );
    }

    const connectionPositions: number[] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < 1.2) {
          connectionPositions.push(
            nodes[i].x, nodes[i].y, nodes[i].z,
            nodes[j].x, nodes[j].y, nodes[j].z
          );
        }
      }
    }

    const particlePositions: number[] = [];
    for (let i = 0; i < 200; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 2.2 + Math.random() * 1.2;
      particlePositions.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }

    return {
      nodes,
      connections: new Float32Array(connectionPositions),
      particlePositions: new Float32Array(particlePositions),
    };
  }, []);

  const nodePositions = useMemo(() => {
    const pos = new Float32Array(nodes.length * 3);
    nodes.forEach((n, i) => {
      pos[i * 3] = n.x;
      pos[i * 3 + 1] = n.y;
      pos[i * 3 + 2] = n.z;
    });
    return pos;
  }, [nodes]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.12;
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.08;
    }
    if (linesRef.current) {
      const mat = linesRef.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.15 + Math.sin(t * 2) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Neural connections */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[connections, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#7350ff" transparent opacity={0.2} />
      </lineSegments>

      {/* Neural nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#7350ff" size={0.07} transparent opacity={0.9} sizeAttenuation />
      </points>

      {/* Floating particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#a78bfa" size={0.03} transparent opacity={0.5} sizeAttenuation />
      </points>

      {/* Core glow */}
      <Float speed={2} floatIntensity={0.3}>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#7350ff" emissive="#7350ff" emissiveIntensity={0.8} transparent opacity={0.15} />
        </mesh>
      </Float>

      {/* Orbital rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.01, 16, 100]} />
        <meshStandardMaterial color="#7350ff" emissive="#7350ff" emissiveIntensity={0.5} transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.3, 0.01, 16, 100]} />
        <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.5} transparent opacity={0.2} />
      </mesh>

      {/* Data streams radiating outward */}
      <DataStreams />
    </group>
  );
}

/* ── Main component ── */
export default function AIBrain3D() {
  return (
    <div className="w-full h-[500px] relative">
      {/* CSS animation for the form field fill effect */}
      <style>{`
        @keyframes fillField {
          0% { transform: scaleX(0); transform-origin: left; }
          40% { transform: scaleX(1); transform-origin: left; }
          100% { transform: scaleX(1); transform-origin: left; }
        }
      `}</style>

      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#7350ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a78bfa" />

        <NeuralNetwork />

        {/* Floating form cards around the brain */}
        <FormCard position={[3.8, 1.2, 0]} rotation={[0, -0.3, 0.05]} delay={0} />
        <FormCard position={[-3.8, -0.5, 0.5]} rotation={[0, 0.3, -0.05]} delay={1.2} />
        <FormCard position={[3.2, -1.8, -0.5]} rotation={[0, -0.2, -0.03]} delay={2.4} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
