"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GridOverlay from "@/components/GridOverlay";
import AboutPanel from "@/components/AboutPanel";
import ContactPanel from "@/components/ContactPanel";
import { apps, type App } from "@/data/apps";

function AppCard({
  app,
  index,
  onLaunch,
}: {
  app: App;
  index: number;
  onLaunch: (app: App) => void;
}) {
  return (
    <div className="bg-white p-8 group border-b border-r border-gray-200 flex flex-col">
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <p className="font-mono text-[9px] text-gray-400 uppercase tracking-wider mb-1">
            {app.year} — Browser App
          </p>
          <h3 className="text-xl font-black tracking-tight uppercase">
            {app.title}
          </h3>
          <p className="font-mono text-[10px] text-gray-500 mt-1">
            {app.tagline}
          </p>
        </div>
        <span className="font-mono text-[10px] text-gray-300 mt-1 shrink-0">
          [{String(index + 1).padStart(2, "0")}]
        </span>
      </div>

      {/* Colour bar */}
      <div
        className="w-full h-[3px] mb-6"
        style={{ background: app.color }}
      />

      {/* Description */}
      <p className="text-[13px] text-gray-600 leading-relaxed mb-6 flex-1">
        {app.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {app.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[9px] uppercase tracking-wider border border-gray-200 px-2 py-1 text-gray-500"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Tech */}
      <p className="font-mono text-[9px] text-gray-300 uppercase tracking-wider mb-6">
        {app.tech.join(" · ")}
      </p>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {app.liveUrl ? (
          <button
            onClick={() => onLaunch(app)}
            className="label-box"
            style={{ borderColor: app.color, color: app.color }}
          >
            Launch App →
          </button>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-wider text-gray-300 border border-gray-100 px-3 py-[5px]">
            Deploying…
          </span>
        )}
        <a
          href={app.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="label-box text-[10px]"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

function AppModal({
  app,
  onClose,
}: {
  app: App;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Modal top bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-4">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: app.color }}
          />
          <span className="font-mono text-[10px] text-white/60 uppercase tracking-wider">
            Arcadium
          </span>
          <span className="font-mono text-[10px] text-white/30">·</span>
          <span className="font-mono text-[11px] text-white font-bold uppercase tracking-wide">
            {app.title}
          </span>
        </div>
        <button
          onClick={onClose}
          className="font-mono text-[10px] text-white/40 hover:text-white uppercase tracking-wider transition-colors border border-white/20 hover:border-white/60 px-3 py-1"
        >
          ✕ Close
        </button>
      </div>

      {/* iframe */}
      {app.liveUrl && (
        <iframe
          src={app.liveUrl}
          className="flex-1 w-full border-0"
          allow="microphone; camera"
          title={app.title}
        />
      )}
    </motion.div>
  );
}

export default function Arcadium() {
  const [activeApp, setActiveApp] = useState<App | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-white text-black">

      {/* ─── HERO SECTION ─── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "40vh" }}>
        <GridOverlay />

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5">
          <a
            href="/"
            className="font-mono text-[10px] font-bold tracking-[0.15em] uppercase hover:underline"
          >
            ← Atlas Talisman
          </a>
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

        {/* Headline */}
        <div className="relative z-10 px-6 pt-[14vh] pb-16">
          <p className="section-label mb-4">[ Arcadium ]</p>
          <h1 className="text-[clamp(48px,8vw,112px)] font-black leading-[0.9] tracking-[-0.04em] uppercase">
            Apps &amp;
            <br />
            Experiments.
          </h1>
          <div className="mt-8 max-w-[420px] border border-black p-4">
            <p className="font-mono text-[10px] leading-[1.7] text-gray-600">
              Browser-based tools and playable experiments — things I built to
              explore an idea, scratch an itch, or just because I could. Each
              one runs live in your browser.
            </p>
            <p className="font-mono text-[10px] text-gray-400 mt-3">
              {apps.filter((a) => a.liveUrl).length} live ·{" "}
              {apps.filter((a) => !a.liveUrl).length} deploying ·{" "}
              {apps.length} total
            </p>
          </div>
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
      </section>

      {/* ─── APPS GRID ─── */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-gray-200">
          {apps.map((app, i) => (
            <AppCard
              key={app.id}
              app={app}
              index={i}
              onLaunch={setActiveApp}
            />
          ))}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="px-6 py-12 border-t border-gray-200">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.15em]">
              Atlas Talisman — Arcadium
            </p>
            <p className="font-mono text-[10px] text-gray-400 mt-1">
              Melbourne, Australia — 2026
            </p>
          </div>
          <div className="flex gap-3">
            <a href="/" className="label-box text-[9px]">
              ← Portfolio
            </a>
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
          </div>
        </div>
      </footer>

      {/* ─── App launch modal ─── */}
      <AnimatePresence>
        {activeApp && (
          <AppModal app={activeApp} onClose={() => setActiveApp(null)} />
        )}
      </AnimatePresence>

      {/* ─── Side panels ─── */}
      <AboutPanel isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
      <ContactPanel isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
