import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const FloatingBlob = ({ position, scale, speed, color }: { position: [number, number, number]; scale: number; speed: number; color: string }) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    ref.current.position.y = position[1] + Math.sin(t) * 0.3;
    ref.current.rotation.x = t * 0.4;
    ref.current.rotation.z = t * 0.2;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 4]} />
      <MeshDistortMaterial
        color={color}
        roughness={0.2}
        metalness={0.8}
        distort={0.4}
        speed={2}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

const FloatingTorus = ({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    ref.current.rotation.x = t;
    ref.current.rotation.y = t * 0.5;
    ref.current.position.y = position[1] + Math.cos(t) * 0.2;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial
        color="#d94888"
        roughness={0.3}
        metalness={0.7}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
};

const Particles = ({ count = 200 }: { count?: number }) => {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.02;
    ref.current.rotation.x = clock.getElapsedTime() * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#d94888" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <pointLight position={[-3, 2, 4]} intensity={0.8} color="#d94888" />
        <pointLight position={[3, -2, -4]} intensity={0.4} color="#e65c99" />

        <FloatingBlob position={[-2.5, 1, -2]} scale={0.8} speed={0.5} color="#d94888" />
        <FloatingBlob position={[2.5, -0.5, -3]} scale={0.6} speed={0.7} color="#e65c99" />
        <FloatingBlob position={[0, 2, -4]} scale={1} speed={0.3} color="#c43d7a" />
        <FloatingTorus position={[3, 1.5, -5]} scale={0.4} speed={0.4} />

        <Particles count={300} />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

export default HeroScene;
