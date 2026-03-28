"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface SpecimenObjectProps {
  position: [number, number, number];
  title: string;
  color: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export default function SpecimenObject({
  position,
  title,
  color,
  index,
  isActive,
  onClick,
}: SpecimenObjectProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const baseY = position[1];
  const phase = index * 1.3;

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Gentle float
    groupRef.current.position.y =
      baseY + Math.sin(t * 0.5 + phase) * 0.15;

    // Subtle rotation
    groupRef.current.rotation.y =
      Math.sin(t * 0.3 + phase) * 0.08;
    groupRef.current.rotation.x =
      Math.sin(t * 0.2 + phase * 0.7) * 0.04;

    // Scale on hover
    const targetScale = hovered ? 1.08 : 1;
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      {/* Card body */}
      <RoundedBox args={[2.2, 1.4, 0.06]} radius={0.08} smoothness={4}>
        <meshStandardMaterial
          color={isActive ? color : "#ffffff"}
          roughness={0.6}
          metalness={0}
          emissive={isActive ? color : "#ffffff"}
          emissiveIntensity={isActive ? 0.1 : 0.3}
        />
      </RoundedBox>

      {/* Accent stripe */}
      <mesh position={[-0.95, 0, 0.04]}>
        <boxGeometry args={[0.14, 1.15, 0.02]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} />
      </mesh>

      {/* Title */}
      <Text
        position={[-0.15, 0.15, 0.06]}
        fontSize={0.14}
        maxWidth={1.6}
        lineHeight={1.2}
        color={isActive ? "#fff" : "#1a1a1a"}
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>

      {/* Subtitle hint */}
      <Text
        position={[-0.15, -0.18, 0.06]}
        fontSize={0.08}
        color={isActive ? "rgba(255,255,255,0.7)" : "#888"}
        anchorX="center"
        anchorY="middle"
      >
        {hovered ? "Click to inspect" : ""}
      </Text>

      {/* Glow on hover */}
      {hovered && (
        <pointLight
          position={[0, 0, 0.5]}
          color={color}
          intensity={0.5}
          distance={3}
        />
      )}
    </group>
  );
}
