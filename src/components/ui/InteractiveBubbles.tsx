/// <reference types="@react-three/fiber" />
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, Float, Preload } from '@react-three/drei';
import * as THREE from 'three';

const BubblesGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Smooth organic rotation
      meshRef.current.rotation.x = Math.cos(t / 4) * 0.3;
      meshRef.current.rotation.y = Math.sin(t / 2) * 0.3;
      meshRef.current.rotation.z += 0.005;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
      <TorusKnot 
        ref={meshRef} 
        args={[1, 0.4, 128, 16]} 
        // Mobile par size auto-adjust hoga taake cut na ho
        scale={window.innerWidth < 768 ? 1.5 : 2.8}
      >
        <meshStandardMaterial 
          color="#7215eb" 
          wireframe 
          transparent 
          opacity={0.4}
          emissive="#7215eb"
          emissiveIntensity={0.2}
        />
      </TorusKnot>
    </Float>
  );
};

const InteractiveBubbles = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        gl={{ 
          powerPreference: "high-performance",
          antialias: true,
          alpha: true,
          stencil: false,
          depth: true,
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#7215eb" intensity={1} />
        
        <BubblesGeometry />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default InteractiveBubbles;