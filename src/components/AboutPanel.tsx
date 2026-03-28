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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed left-0 top-0 h-full w-full max-w-xl bg-white z-50 overflow-y-auto shadow-2xl"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 text-xl"
            >
              &times;
            </button>

            <div className="p-8 md:p-12 pt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Atlas Talisman
              </h2>
              <p className="text-base text-gray-500 mb-8">
                Creative Director / Interactive Systems Designer
              </p>

              <div className="space-y-6 text-gray-700 leading-relaxed">
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
                  Currently I&apos;m building at the intersection of spatial
                  computing, AI-assisted development, and participatory design —
                  creating tools and experiences that make interaction more
                  human, more playful, and more connected to the real world.
                </p>
                <p>Based in Melbourne, Australia.</p>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
                  Capabilities
                </h3>
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
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-xs text-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
                  Selected Clients
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nestlé (Allen&apos;s Lollies, Smarties) &middot; Microsoft &middot;
                  Commonwealth Bank &middot; KPMG &middot; Arup Engineering &middot;
                  Tourism Australia &middot; Metaplanet &middot; Sydney
                  Children&apos;s Hospital
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
                  Tools & Systems
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Adobe Creative Suite &middot; Unity &middot; Unreal Engine
                  &middot; Maya &middot; React / Next.js (working knowledge)
                  &middot; Three.js / R3F (learning + applied) &middot;
                  AI-assisted development workflows
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
