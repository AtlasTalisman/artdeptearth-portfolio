"use client";

import { useState } from "react";
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

              {/* ══════════════════════════════════════════════════════
                  SYSTEM — enriched with concept data when available
                  ══════════════════════════════════════════════════════ */}
              <Section title="System">
                <p className="text-[14px] text-gray-700 leading-[1.8]">
                  {project.system}
                </p>

                {/* Concept sub-blocks — woven into System */}
                {project.processLayers?.concept && (
                  <div className="mt-6 grid grid-cols-1 gap-px bg-gray-200 border border-gray-200">
                    <ConceptBlock
                      label="Problem Statement"
                      content={project.processLayers.concept.problem}
                    />
                    <ConceptBlock
                      label="Users + Context"
                      content={project.processLayers.concept.users}
                    />
                    <ConceptBlock
                      label="Constraints"
                      content={project.processLayers.concept.constraints}
                    />
                    {/* Concept images */}
                    {project.processLayers.concept.images && project.processLayers.concept.images.length > 0 && (
                      <div className="bg-white p-5">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {project.processLayers.concept.images.map((src, i) => (
                            <img
                              key={i}
                              src={src}
                              alt={`Concept image ${i + 1}`}
                              className="w-full object-cover"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </Section>

              {/* Mechanic */}
              <Section title="Mechanic">
                <div className="border-l-2 border-black pl-4 py-1">
                  <p className="text-[14px] text-black leading-[1.8] font-medium">
                    {project.mechanic}
                  </p>
                </div>
              </Section>

              {/* ══════════════════════════════════════════════════════
                  INTERACTION — with journey flowchart when available
                  ══════════════════════════════════════════════════════ */}
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

                {/* Journey flowchart — placeholder for React Flow */}
                {project.processLayers?.journey && (
                  <div className="mt-6 border border-gray-200 p-6 flex flex-col items-center justify-center min-h-[180px] gap-3 bg-gray-50">
                    <span className="font-mono text-[9px] text-gray-300 uppercase tracking-widest">
                      //////////////////
                    </span>
                    <p className="font-mono text-[11px] text-gray-400 uppercase tracking-wider">
                      User journey flow — coming soon
                    </p>
                    <p className="font-mono text-[10px] text-gray-300 text-center max-w-xs leading-[1.8]">
                      Interactive node diagram powered by React Flow
                    </p>
                  </div>
                )}
              </Section>

              {/* ══════════════════════════════════════════════════════
                  UI — collapsible Figma embeds (only when data exists)
                  ══════════════════════════════════════════════════════ */}
              {project.processLayers?.ui && (
                <CollapsibleUI data={project.processLayers.ui} />
              )}

              {/* Results (renamed from "What Changed") */}
              <Section title="Results">
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
                  carousel={["allens", "newkind"].includes(project.id)}
                  defaultFocalIndex={["allens", "newkind"].includes(project.id) ? 1 : undefined}
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

// ── Reusable section wrapper ──
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

// ── Concept sub-block (used inside System) ──
function ConceptBlock({ label, content }: { label: string; content: string }) {
  return (
    <div className="bg-white p-5">
      <p className="font-mono text-[9px] text-gray-400 uppercase tracking-wider mb-2">
        {label}
      </p>
      <p className="text-[13px] text-gray-700 leading-[1.8]">{content}</p>
    </div>
  );
}

// ── Collapsible UI section (Figma embeds) ──
function CollapsibleUI({ data }: { data: NonNullable<Project["processLayers"]>["ui"] }) {
  const [open, setOpen] = useState(false);

  if (!data) return null;
  const hasWireframe = !!data.wireframeUrl;
  const hasPrototype = !!data.prototypeUrl;
  if (!hasWireframe && !hasPrototype) return null;

  return (
    <div className="mb-8">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between group cursor-pointer"
      >
        <p className="section-label">[ UI Design ]</p>
        <span className="font-mono text-[10px] text-gray-400 group-hover:text-black transition-colors">
          {open ? "Hide ↑" : "View ↓"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="mt-4 space-y-6">
              {hasWireframe && (
                <FigmaEmbed
                  url={data.wireframeUrl!}
                  label="Wireframes"
                  caption={data.wireframeCaption}
                />
              )}
              {hasPrototype && (
                <FigmaEmbed
                  url={data.prototypeUrl!}
                  label="High-Fidelity Prototype"
                  caption={data.prototypeCaption}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Figma embed ──
function FigmaEmbed({
  url,
  label,
  caption,
}: {
  url: string;
  label: string;
  caption?: string;
}) {
  const embedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;

  return (
    <div>
      <p className="font-mono text-[9px] text-gray-400 uppercase tracking-wider mb-3">
        {label}
      </p>
      <div className="w-full aspect-[4/3] border border-gray-200 overflow-hidden bg-gray-50">
        <iframe
          src={embedUrl}
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
          title={label}
        />
      </div>
      {caption && (
        <p className="font-mono text-[10px] text-gray-400 mt-3 leading-[1.8]">{caption}</p>
      )}
    </div>
  );
}
