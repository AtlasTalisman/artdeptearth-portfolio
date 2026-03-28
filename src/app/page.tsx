"use client";

import { useState, useMemo } from "react";
import GridOverlay from "@/components/GridOverlay";
import CaseStudyPanel from "@/components/CaseStudyPanel";
import AboutPanel from "@/components/AboutPanel";
import ContactPanel from "@/components/ContactPanel";
import { projects } from "@/data/projects";
import { annotationPool } from "@/data/annotations";

function pickTwo(pool: string[]): [string, string] {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return [shuffled[0], shuffled[1]];
}

export default function Home() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [annotations] = useState(() => pickTwo(annotationPool));

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
        <div className="absolute top-[10vh] left-6 z-10 max-w-[55%]">
          <h1 className="text-[clamp(36px,6vw,88px)] font-black leading-[0.95] tracking-[-0.03em] uppercase">
            Systems
            <br />
            of Play.
          </h1>
        </div>

        {/* ─── Annotation: top-right definition box ─── */}
        <div className="absolute top-[12vh] right-6 z-10 border border-black p-4 max-w-[220px]">
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

        {/* ─── Central hero area — placeholder for visual ─── */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
            {/* Rotating border ring */}
            <div
              className="absolute inset-0 border border-gray-200 rounded-full"
              style={{
                animation: "spin 30s linear infinite",
              }}
            />
            <div
              className="absolute inset-4 border border-gray-300 rounded-full"
              style={{
                animation: "spin 20s linear infinite reverse",
              }}
            />
            {/* Center mark */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 border border-black rotate-45" />
            </div>

            {/* Annotation connectors from center to labels */}
            {/* Top-right connector */}
            <div className="absolute top-[20%] right-[-60px] hidden md:block">
              <div className="flex items-center gap-0">
                <div className="w-[60px] h-[1px] bg-black" />
                <div className="w-2 h-2 border border-black bg-white" />
              </div>
            </div>
            {/* Bottom-left connector */}
            <div className="absolute bottom-[25%] left-[-80px] hidden md:block">
              <div className="flex items-center gap-0">
                <div className="w-2 h-2 border border-black bg-white" />
                <div className="w-[80px] h-[1px] bg-black" />
              </div>
            </div>
          </div>
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
        <div className="absolute bottom-8 left-6 z-10">
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
        <div className="absolute bottom-8 right-6 z-10 max-w-[280px] border border-black p-4">
          <p className="section-label mb-2">I Make Playgrounds</p>
          <p className="font-mono text-[10px] leading-[1.7] text-gray-600">
            I&apos;m Atlas Talisman. I design interactive systems that drive
            audience participation — from national brand activations to
            RFID-powered festival games to spatial web platforms. 20+ years
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

        {/* Spin keyframe */}
        <style jsx>{`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </section>

      {/* ─── PROJECTS SECTION ─── */}
      <section className="relative px-6 py-24 border-t border-gray-200">
        <div className="mb-16">
          <p className="section-label mb-4">[ Selected Systems ]</p>
          <h2 className="text-[clamp(28px,4vw,56px)] font-black leading-[1] tracking-[-0.03em] uppercase max-w-3xl">
            I design systems that
            <br />
            change how people behave.
          </h2>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
          {projects.map((project, i) => (
            <button
              key={project.id}
              onClick={() => setActiveProjectId(project.id)}
              className="bg-white p-8 text-left group hover:bg-gray-50 transition-colors"
            >
              {/* Project image placeholder */}
              {project.image ? (
                <div className="w-full aspect-[16/10] bg-gray-100 mb-6 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-full aspect-[16/10] bg-gray-50 mb-6 flex items-center justify-center border border-gray-100">
                  <div className="w-6 h-6 border border-gray-300 rotate-45" />
                </div>
              )}

              <div className="flex items-start justify-between gap-4">
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
                <span className="font-mono text-[10px] text-gray-300 group-hover:text-black transition-colors mt-1">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
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
