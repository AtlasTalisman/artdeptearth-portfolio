"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import GridOverlay from "@/components/GridOverlay";
import CaseStudyPanel from "@/components/CaseStudyPanel";
import AboutPanel from "@/components/AboutPanel";
import ContactPanel from "@/components/ContactPanel";
import { projects } from "@/data/projects";

// Varied spin durations so coins feel desynchronised
const COIN_DURATIONS = [3.2, 4.1, 3.7, 4.5, 3.4, 4.8, 3.9, 4.3, 3.6, 5.0, 4.0, 3.5];
// Negative delays so each coin starts at a different point in its cycle
const COIN_DELAYS = [-1.1, -0.3, -2.4, -1.8, -0.7, -3.1, -2.0, -0.5, -1.5, -2.8, -0.9, -1.7];
// Coin depth/rim
const COIN_THICKNESS = 8;   // px
const RIM_SEGMENTS   = 32;
import { annotationPool } from "@/data/annotations";

const NetworkSculpture = dynamic(
  () => import("@/components/NetworkSculpture"),
  { ssr: false }
);


function pickTwo(pool: string[]): [string, string] {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return [shuffled[0], shuffled[1]];
}

export default function Home() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [coinRadius, setCoinRadius] = useState(0);
  const coinSizeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = coinSizeRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setCoinRadius(entry.contentRect.width / 2));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const [supports3d, setSupports3d] = useState(true);
  useEffect(() => {
    try {
      setSupports3d(CSS.supports("transform-style", "preserve-3d"));
    } catch {
      setSupports3d(false);
    }
  }, []);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [annotations, setAnnotations] = useState<[string, string]>(["", ""]);
  useEffect(() => { setAnnotations(pickTwo(annotationPool)); }, []);

  const handleKnock = useCallback(() => {
    // Cone has fallen off its ground plane — scroll down to selected works
    const el = document.getElementById("selected-works");
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 350); // slight delay so the fall animation is visible first
    }
  }, []);

  const activeProject =
    projects.find((p) => p.id === activeProjectId) ?? null;

  return (
    <div className="relative w-full min-h-screen bg-white text-black">
      {/* ─── HERO SECTION ─── */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Grid overlay */}
        <GridOverlay />

        {/* ─── Top bar ─── */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5">
          <span className="font-mono text-[10px] font-bold tracking-[0.15em] uppercase">
            Atlas Talisman
          </span>
          <div className="flex items-center gap-3">
            <button onClick={() => setAboutOpen(true)} className="label-box">
              About
            </button>
            <button onClick={() => setContactOpen(true)} className="label-box">
              Contact
            </button>
            <a href="/atlas-talisman-cv.pdf" download className="label-box">
              CV ↓
            </a>
          </div>
        </div>

        {/* ─── Main headline ─── */}
        <div className="absolute top-[10vh] left-6 z-10 max-w-[55%] pointer-events-none">
          <h1 className="text-[clamp(36px,6vw,88px)] font-black leading-[0.95] tracking-[-0.03em] uppercase">
            Systems
            <br />
            of Play.
          </h1>
        </div>

        {/* ─── Annotation: top-right definition box ─── */}
        <div className="absolute top-[12vh] right-6 z-10 border border-black p-4 max-w-[220px] pointer-events-none">
          <p className="font-mono text-[11px] font-bold tracking-wider uppercase mb-2">
            Art Dept Earth
            <span className="text-gray-400 ml-2 font-normal">/26</span>
          </p>
          <div className="font-mono text-[10px] leading-[1.6] text-gray-600">
            <p>Creative Direction</p>
            <p>+ Interactive Systems</p>
            <p>+ Experiential Design</p>
            <p className="mt-2 text-black">→ Melbourne, AU</p>
          </div>
        </div>

        {/* ─── Central hero — traffic cone ─── */}
        <div className="absolute inset-0 z-5">
          <NetworkSculpture onKnock={handleKnock} />
        </div>

        {/* ─── Floating annotation labels — drawn at random on each load ─── */}

        {/* Right side annotation */}
        <div className="absolute top-[38%] right-[8%] z-10 hidden md:block max-w-[200px]">
          <p className="font-mono text-[10px] leading-[1.8] text-gray-500 uppercase tracking-wider">
            {annotations[0].split("\n").map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </p>
        </div>

        {/* Left side annotation */}
        <div className="absolute top-[60%] left-6 z-10 hidden md:block max-w-[240px]">
          <p className="font-mono text-[10px] text-gray-500 uppercase tracking-wider leading-[1.8]">
            {annotations[1].split("\n").map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </p>
        </div>

        {/* ─── Bottom-left: Core threads ─── */}
        <div className="absolute bottom-8 left-6 right-6 md:right-auto z-10 pointer-events-none">
          <p className="section-label mb-3">[ Core Threads of My Work ]</p>
          <div className="space-y-1">
            {[
              { num: "01", label: "Gamification & Quest Design" },
              { num: "02", label: "Experiential Activations" },
              { num: "03", label: "Spatial & Interactive Systems" },
              { num: "04", label: "Community & Participation" },
            ].map((thread) => (
              <div key={thread.num} className="flex items-baseline gap-2">
                <span className="font-mono text-[9px] text-gray-400">
                  {thread.num}.{"///////////////"}
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wide">
                  {thread.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Bottom-right: Bio card ─── */}
        <div className="absolute bottom-8 right-6 z-10 max-w-[280px] border border-black p-4 hidden md:block">
          <p className="section-label mb-2">I Make Playgrounds</p>
          <p className="font-mono text-[10px] leading-[1.7] text-gray-600">
            I&apos;m Atlas Talisman. I design interactive systems that drive
            audience participation — from national brand activations to
            NFC-powered festival games to spatial web platforms. 20+ years
            across digital, physical, and immersive.
          </p>
          <div className="flex gap-2 mt-3">
            <a
              href="https://www.linkedin.com/in/atlastalisman"
              target="_blank"
              rel="noopener noreferrer"
              className="label-box text-[9px]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:atlastalisman@gmail.com"
              className="label-box text-[9px]"
            >
              Email
            </a>
          </div>
        </div>

      </section>

      {/* ─── PROJECTS SECTION ─── */}
      <section id="selected-works" className="relative px-6 py-24 border-t border-gray-200">
        <div className="mb-16">
          <p className="section-label mb-4">[ Selected Works ]</p>
          <h2 className="text-[clamp(28px,4vw,56px)] font-black leading-[1] tracking-[-0.03em] uppercase max-w-3xl">
            My designs are a roadmap to adventure.
          </h2>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
          {projects.map((project, i) => (
            <button
              key={project.id}
              onClick={() => setActiveProjectId(project.id)}
              className="bg-white p-8 text-left group hover:bg-gray-50 transition-colors cursor-pointer"
            >
              {/* Coin display — 3D spinning coin with static fallback */}
              <div
                className="w-full aspect-[16/10] mb-6 flex items-center justify-center"
                style={supports3d ? { perspective: "800px" } : undefined}
              >
                {supports3d ? (
                  <div
                    ref={i === 0 ? coinSizeRef : undefined}
                    className="h-[55%] aspect-square relative group-hover:scale-110 transition-transform duration-300"
                    style={{
                      transformStyle: "preserve-3d",
                      animation: `coin-spin ${COIN_DURATIONS[i % COIN_DURATIONS.length]}s linear infinite`,
                      animationDelay: `${COIN_DELAYS[i % COIN_DELAYS.length]}s`,
                    }}
                  >
                    {/* Front face */}
                    <div
                      className="absolute inset-0 rounded-full overflow-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: `translateZ(${COIN_THICKNESS / 2}px)`,
                        background: "#a89260",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.12)",
                      }}
                    >
                      <img
                        src={project.coinImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Back face */}
                    <div
                      className="absolute inset-0 rounded-full overflow-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: `rotateY(180deg) translateZ(${COIN_THICKNESS / 2}px)`,
                        background: "#a89260",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.12)",
                      }}
                    >
                      <img
                        src="/images/coins/coin-click.png"
                        alt="Click to view"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Rim — 32 strips forming a cylinder */}
                    {coinRadius > 0 && Array.from({ length: RIM_SEGMENTS }).map((_, s) => {
                      const θ    = (s / RIM_SEGMENTS) * 2 * Math.PI;
                      const cosA = Math.cos(θ);
                      const sinA = Math.sin(θ);
                      const segW = 2 * coinRadius * Math.sin(Math.PI / RIM_SEGMENTS);
                      return (
                        <div
                          key={s}
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: `${segW}px`,
                            height: `${COIN_THICKNESS}px`,
                            marginTop: `${-COIN_THICKNESS / 2}px`,
                            marginLeft: `${-segW / 2}px`,
                            background:
                              "linear-gradient(to bottom, #c4ac72 0%, #a89260 40%, #8a7448 70%, #b09a68 100%)",
                            transform: `matrix3d(${cosA},${sinA},0,0, 0,0,1,0, ${sinA},${-cosA},0,0, ${coinRadius * sinA},${-coinRadius * cosA},0,1)`,
                            backfaceVisibility: "hidden",
                          }}
                        />
                      );
                    })}
                  </div>
                ) : (
                  /* Fallback — simple circular image for browsers without 3D transform support */
                  <div className="h-[55%] aspect-square group-hover:scale-110 transition-transform duration-300">
                    <div
                      className="w-full h-full rounded-full overflow-hidden"
                      style={{
                        background: "#a89260",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.12)",
                      }}
                    >
                      <img
                        src={project.coinImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-start gap-4">
                <div>
                  <p className="font-mono text-[9px] text-gray-400 uppercase tracking-wider mb-1">
                    {project.year} — {project.tier === "hero" ? "Hero System" : "Supporting"}
                  </p>
                  <h3 className="text-lg font-bold tracking-tight group-hover:underline">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[10px] text-gray-500 mt-1">
                    {project.role}
                  </p>
                </div>
              </div>

              <p className="text-[13px] text-gray-600 leading-relaxed mt-4 line-clamp-2">
                {project.mechanic}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="px-6 py-12 border-t border-gray-200">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.15em]">
              Atlas Talisman
            </p>
            <p className="font-mono text-[10px] text-gray-400 mt-1">
              Melbourne, Australia — 2026
            </p>
          </div>
          <div className="flex gap-3">
            <a href="mailto:atlastalisman@gmail.com" className="label-box text-[9px]">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/atlastalisman"
              target="_blank"
              rel="noopener noreferrer"
              className="label-box text-[9px]"
            >
              LinkedIn
            </a>
            <button onClick={() => setAboutOpen(true)} className="label-box text-[9px]">
              About
            </button>
            <button onClick={() => setContactOpen(true)} className="label-box text-[9px]">
              Contact
            </button>
          </div>
        </div>
      </footer>

      {/* ─── Panels ─── */}
      <CaseStudyPanel
        project={activeProject}
        onClose={() => setActiveProjectId(null)}
      />
      <AboutPanel isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
      <ContactPanel isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
