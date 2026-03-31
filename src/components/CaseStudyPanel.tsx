"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import MediaBlock from "@/components/MediaBlock";
import ExamplesGallery from "@/components/ExamplesGallery";

interface CaseStudyPanelProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyPanel({
  project,
  onClose,
}: CaseStudyPanelProps) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-white/80 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-2xl bg-white z-50 overflow-y-auto border-l border-black"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Top bar */}
            <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-8 py-5 border-b border-black">
              <p className="section-label">[ Case Study ]</p>
              <button onClick={onClose} className="label-box">
                Close ✕
              </button>
            </div>

            {/* Hero area — three cases */}

            {/* 1. Gallery items (e.g. Freelance) */}
            {project.galleryItems && project.galleryItems.length > 0 && (
              <div className="px-8 pt-6 border-b border-gray-200">
                <ExamplesGallery items={project.galleryItems} defaultFocalIndex={0} asHero />
              </div>
            )}

            {/* 2. Iframe with examples — show examples as hero + visit button, skip blank iframe */}
            {!project.galleryItems && project.media?.type === "iframe" && project.examples && project.examples.length > 0 && (
              <div className="px-8 pt-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <p className="section-label">[ Live Project ]</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label-box text-[10px]"
                    >
                      Visit Live Site →
                    </a>
                  )}
                </div>
                <ExamplesGallery images={project.examples} asHero defaultFocalIndex={0} />
              </div>
            )}

            {/* 3. All other media */}
            {!project.galleryItems && project.media?.type !== "iframe" && (
              <MediaBlock media={project.media} />
            )}

            <div className="p-8">
              {/* Header */}
              <div className="mb-10">
                <p className="font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-2">
                  {project.year}
                </p>
                <h2 className="text-3xl font-black tracking-tight uppercase leading-[1.1] mb-2">
                  {project.title}
                </h2>
                <p className="font-mono text-[11px] text-gray-500">
                  {project.role}
                </p>
              </div>

              {/* Header image (optional) */}
              {project.headerImage && (
                <div className="mb-10">
                  <img
                    src={project.headerImage}
                    alt={project.title}
                    className="w-full object-cover"
                  />
                  {project.headerImageCaption && (
                    <p className="font-mono text-[11px] text-gray-500 leading-[1.8] mt-4 whitespace-pre-line">
                      {project.headerImageCaption}
                    </p>
                  )}
                </div>
              )}

              {/* System */}
              <Section title="System">
                <p className="text-[14px] text-gray-700 leading-[1.8]">
                  {project.system}
                </p>
              </Section>

              {/* Mechanic */}
              <Section title="Mechanic">
                <div className="border-l-2 border-black pl-4 py-1">
                  <p className="text-[14px] text-black leading-[1.8] font-medium">
                    {project.mechanic}
                  </p>
                </div>
              </Section>

              {/* Interaction */}
              <Section title="Interaction">
                <ul className="space-y-2">
                  {project.interaction.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px] text-gray-700">
                      <span className="font-mono text-[9px] text-gray-400 mt-1">
                        [{String(i + 1).padStart(2, "0")}]
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Outcome */}
              <Section title="What Changed">
                <ul className="space-y-2">
                  {project.outcome.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px] text-gray-700">
                      <span className="font-mono text-[9px] text-gray-400 mt-1">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Build */}
              <Section title="Build">
                <ul className="space-y-2">
                  {project.build.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[12px] text-gray-500">
                      <span className="font-mono text-[9px] text-gray-300 mt-1">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Examples gallery — for non-iframe, non-galleryItems projects */}
              {!project.galleryItems && project.media?.type !== "iframe" && project.examples && project.examples.length > 0 && (
                <ExamplesGallery
                  images={project.examples}
                  hoverScale={["allens", "newkind"].includes(project.id) ? 1.15 : undefined}
                  focalScale={["allens", "newkind"].includes(project.id) ? 2.0 : undefined}
                />
              )}

              {/* Link — hidden for iframe projects (button shown in hero area) */}
              {project.link && project.media?.type !== "iframe" && (
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label-box"
                  >
                    View Live Project →
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <p className="section-label mb-3">[ {title} ]</p>
      {children}
    </div>
  );
}
