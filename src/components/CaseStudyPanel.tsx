"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";

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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-2xl bg-white z-50 overflow-y-auto shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 text-xl z-10"
            >
              &times;
            </button>

            {/* Color accent bar */}
            <div
              className="h-2 w-full"
              style={{ backgroundColor: project.color }}
            />

            {/* Image placeholder */}
            {project.image ? (
              <div className="w-full h-64 bg-gray-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div
                className="w-full h-48 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)`,
                }}
              >
                <span className="text-gray-400 text-sm tracking-widest uppercase">
                  Visual assets incoming
                </span>
              </div>
            )}

            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="mb-8">
                <p
                  className="text-sm font-medium tracking-widest uppercase mb-2"
                  style={{ color: project.color }}
                >
                  {project.year}
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h2>
                <p className="text-base text-gray-500">{project.role}</p>
              </div>

              {/* System */}
              <Section title="System">
                <p className="text-gray-700 leading-relaxed">
                  {project.system}
                </p>
              </Section>

              {/* Mechanic */}
              <Section title="Mechanic">
                <p className="text-gray-800 leading-relaxed font-medium bg-gray-50 p-4 rounded-lg border-l-4"
                  style={{ borderColor: project.color }}
                >
                  {project.mechanic}
                </p>
              </Section>

              {/* Interaction */}
              <Section title="Interaction">
                <ul className="space-y-2">
                  {project.interaction.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: project.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Outcome */}
              <Section title="What Changed">
                <ul className="space-y-2">
                  {project.outcome.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: project.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Build */}
              <Section title="Build">
                <ul className="space-y-2">
                  {project.build.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                      <span className="mt-2 w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Link */}
              {project.link && (
                <div className="mt-10 pt-6 border-t border-gray-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-medium transition-opacity hover:opacity-90"
                    style={{ backgroundColor: project.color }}
                  >
                    View Live Project
                    <span className="text-lg">&rarr;</span>
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
      <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}
