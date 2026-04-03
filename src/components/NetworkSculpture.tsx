"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

// ══════════════════════════════════════════════════════════════════════════════
// CONE PROFILE — linear taper r = 0.50 − (y / 1.55) × 0.44
// ══════════════════════════════════════════════════════════════════════════════
const CONE_SEGS = [
  [0.00, 0.28, 0.500, 0.420, "orange"],
  [0.28, 0.52, 0.420, 0.352, "white"],
  [0.52, 0.90, 0.352, 0.244, "orange"],
  [0.90, 1.12, 0.244, 0.182, "white"],
  [1.12, 1.55, 0.182, 0.060, "orange"],
] as const;

// ══════════════════════════════════════════════════════════════════════════════
// PHYSICS
// ══════════════════════════════════════════════════════════════════════════════
const SCALE       = 0.495;
const GROUND_Y    = -0.35;
const DROP_Y      = 5.2;
const GRAVITY     = -0.008;
const RESTITUTION = 0.30;
const ANG_DAMP    = 0.965;
const IMPULSE     = 0.10;         // reduced — cone slides, doesn't rocket
const SLIDE_DAMP  = 0.988;        // ground friction (higher = less friction)
const GROUND_EDGE = 0.45;         // half-width of invisible ground plane
const TILT_SPRING = 0.10;
const TILT_DAMP   = 0.78;

type Phase = "falling" | "idle" | "knocked" | "destroyed";

// ══════════════════════════════════════════════════════════════════════════════
// COMPONENT — zero React state: all updates via refs + direct Three.js calls
// ══════════════════════════════════════════════════════════════════════════════
function TrafficCone({ onKnock, heroVisible }: { onKnock?: () => void; heroVisible: React.RefObject<boolean> }) {
  const groupRef = useRef<THREE.Group>(null);

  const m = useMemo(() => ({
    coneOrange: new THREE.MeshPhysicalMaterial({ color: "#e06000", roughness: 0.75, metalness: 0, clearcoat: 0.05, clearcoatRoughness: 0.6 }),
    coneWhite:  new THREE.MeshPhysicalMaterial({ color: "#f0f0f0", roughness: 0.55, metalness: 0, clearcoat: 0.15, clearcoatRoughness: 0.4 }),
    coneBase:   new THREE.MeshPhysicalMaterial({ color: "#e06000", roughness: 0.85, metalness: 0 }),
    coneTip:    new THREE.MeshPhysicalMaterial({ color: "#e06000", roughness: 0.45, clearcoat: 0.2, side: THREE.DoubleSide }),
  }), []);

  // State machine
  const phase      = useRef<Phase>("falling");
  const bounces    = useRef(0);
  const hasFired   = useRef(false);  // prevent multiple scroll triggers per knock

  // Physics
  const px   = useRef(0);
  const py   = useRef(DROP_Y);
  const vel  = useRef({ x: 0, y: 0 });
  const tilt = useRef({ x: 0, z: 0 });
  const vt   = useRef({ x: 0, z: 0 });
  const rotY = useRef(0);
  const angV = useRef(0);

  // Mouse
  const mouse  = useRef({ x: 0, y: 0, t: performance.now(), vx: 0, vy: 0 });
  const isOver = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isOver.current) return;
      const now = performance.now();
      const dt  = Math.max(8, now - mouse.current.t);
      mouse.current = {
        x: e.clientX, y: e.clientY, t: now,
        vx: (e.clientX - mouse.current.x) / dt,
        vy: (e.clientY - mouse.current.y) / dt,
      };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const setOrangeColor = (hex: string) => {
    m.coneOrange.color.set(hex);
    m.coneBase.color.set(hex);
    m.coneTip.color.set(hex);
  };

  const resetToCone = () => {
    px.current = 0; py.current = DROP_Y;
    vel.current  = { x: 0, y: 0 };
    tilt.current = { x: 0, z: 0 };
    vt.current   = { x: 0, z: 0 };
    angV.current = 0; bounces.current = 0;
    hasFired.current = false;
    phase.current = "falling";
    setOrangeColor("#e06000");
  };

  useFrame((_, rawDelta) => {
    const g = groupRef.current;
    if (!g) return;
    const p = phase.current;

    // ── DESTROYED — stay hidden for the rest of this visit ──
    if (p === "destroyed") return;

    // Normalise delta to 60fps equivalent — ensures consistent physics across frame rates
    const dt = Math.min(rawDelta, 0.05) * 60;

    // Shared: angular damping + tilt spring
    angV.current *= Math.pow(ANG_DAMP, dt);
    rotY.current += angV.current * dt;

    vt.current.x += -tilt.current.x * TILT_SPRING * dt;
    vt.current.z += -tilt.current.z * TILT_SPRING * dt;
    vt.current.x *= Math.pow(TILT_DAMP, dt);
    vt.current.z *= Math.pow(TILT_DAMP, dt);
    tilt.current.x += vt.current.x * dt;
    tilt.current.z += vt.current.z * dt;

    // ── FALLING — initial drop from top, bounces, settles ──
    if (p === "falling") {
      vel.current.y += GRAVITY * dt;
      py.current    += vel.current.y * dt;

      if (py.current <= GROUND_Y && vel.current.y < 0) {
        py.current = GROUND_Y;
        const impact = Math.abs(vel.current.y);
        vel.current.y *= -RESTITUTION;
        bounces.current++;
        vt.current.x  += (Math.random() - 0.5) * impact * 2.5;
        vt.current.z  += (Math.random() - 0.5) * impact * 2.5;
        angV.current  += (Math.random() - 0.5) * impact * 0.8;

        if (bounces.current >= 4 || Math.abs(vel.current.y) < 0.004) {
          py.current = GROUND_Y; vel.current = { x: 0, y: 0 };
          px.current = 0; bounces.current = 0;
          phase.current = "idle";
          if (isOver.current) {
            setOrangeColor("#e85d00");
            document.body.style.cursor = "pointer";
          }
        }
      }
    }

    // ── KNOCKED — sliding on ground, then falling off edge ──
    else if (p === "knocked") {
      // Horizontal slide with friction
      vel.current.x *= Math.pow(SLIDE_DAMP, dt);
      px.current    += vel.current.x * dt;

      // Tilt based on horizontal velocity (lean into direction of travel)
      const tz = THREE.MathUtils.clamp(-vel.current.x * 4.0, -1.3, 1.3);
      tilt.current.z += (tz - tilt.current.z) * 0.12 * dt;

      // Past ground edge → gravity pulls cone down, it tumbles off
      if (Math.abs(px.current) > GROUND_EDGE) {
        vel.current.y += GRAVITY * dt;
        py.current    += vel.current.y * dt;
        // Extra tumble as it falls
        angV.current += vel.current.x * 0.012 * dt;
        tilt.current.x += 0.02 * Math.sign(vel.current.x) * dt;

        // Fire scroll callback once when fall begins
        if (!hasFired.current) {
          hasFired.current = true;
          onKnock?.();
        }
      }

      // Off screen below → mark as destroyed, hide cone
      if (py.current < -5) {
        phase.current = "destroyed";
        g.visible = false;
      }

      // Velocity died before reaching edge → ease back to center, return to idle
      if (Math.abs(vel.current.x) < 0.002 && Math.abs(px.current) <= GROUND_EDGE) {
        px.current *= Math.pow(0.93, dt);
        if (Math.abs(px.current) < 0.01) {
          px.current = 0;
          vel.current = { x: 0, y: 0 };
          tilt.current = { x: 0, z: 0 };
          phase.current = "idle";
        }
      }
    }

    g.position.set(px.current, py.current, 0);
    g.rotation.set(tilt.current.x, rotY.current, tilt.current.z);
    g.scale.set(SCALE, SCALE, SCALE);
  });

  // ── Pointer handlers ──
  const handleEnter = () => {
    isOver.current   = true;
    mouse.current.t  = performance.now();
    mouse.current.vx = 0;
    mouse.current.vy = 0;
    if (phase.current === "idle") {
      setOrangeColor("#e85d00");
      document.body.style.cursor = "pointer";
    }
  };

  const handleLeave = () => {
    isOver.current = false;
    setOrangeColor("#e06000");
    document.body.style.cursor = "auto";
    if (phase.current !== "idle") return;
    const { vx: mvx, vy: mvy } = mouse.current;
    const force = Math.sqrt(mvx * mvx + mvy * mvy);
    if (force > 0.04) {
      phase.current  = "knocked";
      vel.current.x  = mvx * IMPULSE;
      angV.current   = mvx * 0.12;
    }
  };

  const handleClick = () => {
    if (phase.current !== "idle") return;
    phase.current = "knocked";
    const dir = Math.random() > 0.5 ? 1 : -1;
    vel.current.x = dir * (0.04 + Math.random() * 0.03);
    angV.current  = dir * (0.08 + Math.random() * 0.06);
  };

  return (
    <group ref={groupRef} onPointerEnter={handleEnter} onPointerLeave={handleLeave} onClick={handleClick}>
      {/* Base */}
      <RoundedBox args={[1.3, 0.13, 1.3]} radius={0.05} smoothness={4} position={[0, -0.10, 0]}>
        <primitive object={m.coneBase} attach="material" />
      </RoundedBox>
      {/* Lip */}
      <mesh position={[0, -0.02, 0]}>
        <cylinderGeometry args={[0.52, 0.58, 0.06, 64]} />
        <primitive object={m.coneBase} attach="material" />
      </mesh>
      {/* Striped body */}
      {CONE_SEGS.map(([yBot, yTop, rBot, rTop, type], i) => {
        const h = yTop - yBot;
        return (
          <mesh key={i} position={[0, yBot + h / 2, 0]}>
            <cylinderGeometry args={[rTop, rBot, h, 64]} />
            <primitive object={type === "white" ? m.coneWhite : m.coneOrange} attach="material" />
          </mesh>
        );
      })}
      {/* Tip cap */}
      <mesh position={[0, 1.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.06, 64]} />
        <primitive object={m.coneTip} attach="material" />
      </mesh>
    </group>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// EXPORTED
// ══════════════════════════════════════════════════════════════════════════════
export default function NetworkSculpture({ onKnock }: { onKnock?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroVisible  = useRef(true);

  // Track whether the hero section (this container) is in the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { heroVisible.current = entry.isIntersecting; },
      { threshold: 0.1 }            // 10% visible = "in view"
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0.5, 4.5], fov: 30 }}
          style={{ background: "transparent" }}
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[4, 6, 3]} intensity={1.2} />
          <directionalLight position={[-3, 2, -2]} intensity={0.3} />
          <spotLight position={[0, 5, 5]} angle={0.4} penumbra={0.8} intensity={0.6} />
          <TrafficCone onKnock={onKnock} heroVisible={heroVisible} />
        </Canvas>
      </div>
    </div>
  );
}
