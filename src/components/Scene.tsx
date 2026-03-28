"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import SpecimenObject from "./SpecimenObject";
import { projects } from "@/data/projects";

interface SceneProps {
  activeProject: string | null;
  onSelectProject: (id: string) => void;
}

// Layout positions for specimen cards in a loose cluster
const positions: [number, number, number][] = [
  [-3.0, 0.9, 0],
  [0, 1.3, -0.4],
  [3.2, 1.0, 0],
  [-1.6, -0.9, 0.2],
  [1.2, -0.8, -0.3],
  [4.0, -0.4, 0.3],
];

export default function Scene({ activeProject, onSelectProject }: SceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <directionalLight position={[-3, 3, 2]} intensity={0.2} color="#c9b1ff" />

      <Environment preset="city" environmentIntensity={0.3} />

      {projects.map((project, i) => (
        <Float
          key={project.id}
          speed={1.5}
          rotationIntensity={0.1}
          floatIntensity={0.3}
          floatingRange={[-0.05, 0.05]}
        >
          <SpecimenObject
            position={positions[i] || [0, 0, 0]}
            title={project.title}
            color={project.color}
            index={i}
            isActive={activeProject === project.id}
            onClick={() => onSelectProject(project.id)}
          />
        </Float>
      ))}
    </Canvas>
  );
}
