"use client";

import { motion, AnimatePresence } from "framer-motion";

interface AboutPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutPanel({ isOpen, onClose }: AboutPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-white/80 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed left-0 top-0 h-full w-full max-w-xl bg-white z-50 overflow-y-auto border-r border-black"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 label-box"
            >
              Close ✕
            </button>

            <div className="p-8 pt-20">
              <p className="section-label mb-4">[ About ]</p>

              <h2 className="text-4xl font-black tracking-tight uppercase leading-[1] mb-2">
                Atlas Talisman
              </h2>
              <p className="font-mono text-[11px] text-gray-500 uppercase tracking-wider mb-8">
                Creative Director / Interactive Systems Designer
              </p>

              <div className="space-y-5 text-[14px] text-gray-700 leading-[1.8]">
                <p>
                  I design systems that get people to participate. Over 20 years
                  I&apos;ve worked across digital platforms, physical activations, and
                  immersive environments — always focused on the same question:
                  how do you turn an audience into participants?
                </p>
                <p>
                  My work spans gamification and alternate reality games,
                  experiential marketing at national scale, immersive theatre,
                  geospatial interaction design, and community-driven digital
                  platforms. I&apos;ve designed RFID-based leveling systems for
                  festivals, participation mechanics that generated 900,000+
                  brand interactions, and spatial interfaces that connect digital
                  content to physical places.
                </p>
                <p>
                  Currently building at the intersection of spatial computing,
                  AI-assisted development, and participatory design.
                </p>
                <p>Based in Melbourne, Australia.</p>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="section-label mb-4">[ Capabilities ]</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Creative Direction",
                    "Experience Design",
                    "Gamification",
                    "UX / Interaction Design",
                    "Experiential Marketing",
                    "Immersive Theatre",
                    "Community Systems",
                    "Transmedia Storytelling",
                    "Art Direction",
                    "Motion Design",
                    "Spatial Interaction",
                    "AI-Assisted Prototyping",
                  ].map((skill) => (
                    <span key={skill} className="label-box text-[9px] cursor-default hover:bg-transparent hover:text-black">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="section-label mb-4">[ Selected Clients ]</p>
                <p className="font-mono text-[11px] text-gray-600 leading-[2]">
                  Nestlé (Allen&apos;s Lollies, Smarties) · Microsoft ·
                  Commonwealth Bank · KPMG · Arup Engineering ·
                  Tourism Australia · Metaplanet · Sydney Children&apos;s Hospital
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="section-label mb-4">[ Tools & Systems ]</p>
                <p className="font-mono text-[11px] text-gray-600 leading-[2]">
                  Adobe Creative Suite · Unity · Unreal Engine · Maya ·
                  React / Next.js · Three.js / R3F ·
                  AI-assisted prototyping workflows
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
