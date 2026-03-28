"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import CaseStudyPanel from "@/components/CaseStudyPanel";
import AboutPanel from "@/components/AboutPanel";
import ContactPanel from "@/components/ContactPanel";
import { projects } from "@/data/projects";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-gray-200 border-t-gray-600 rounded-full animate-spin" />
    </div>
  ),
});

export default function Home() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const activeProject =
    projects.find((p) => p.id === activeProjectId) ?? null;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#f8f8f6]">
      <Header
        onAboutClick={() => setAboutOpen(true)}
        onContactClick={() => setContactOpen(true)}
      />

      {/* Positioning tagline */}
      <motion.div
        className="absolute bottom-8 left-8 z-20 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-sm text-gray-500 leading-relaxed">
          I design systems that get people to participate — across digital
          platforms, physical activations, and immersive environments.
        </p>
      </motion.div>

      {/* Project list fallback nav */}
      <motion.div
        className="absolute bottom-8 right-8 z-20 flex flex-wrap gap-2 max-w-xs justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveProjectId(p.id)}
            className="px-3 py-1.5 text-xs rounded-full border transition-all"
            style={{
              borderColor:
                activeProjectId === p.id ? p.color : "rgba(0,0,0,0.08)",
              backgroundColor:
                activeProjectId === p.id ? p.color : "rgba(255,255,255,0.8)",
              color: activeProjectId === p.id ? "#fff" : "#666",
            }}
          >
            {p.title}
          </button>
        ))}
      </motion.div>

      {/* 3D Scene */}
      <div className="absolute inset-0 z-10">
        <Suspense fallback={null}>
          <Scene
            activeProject={activeProjectId}
            onSelectProject={(id) => setActiveProjectId(id)}
          />
        </Suspense>
      </div>

      {/* Panels */}
      <CaseStudyPanel
        project={activeProject}
        onClose={() => setActiveProjectId(null)}
      />
      <AboutPanel isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
      <ContactPanel
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
