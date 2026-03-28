"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ContactPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPanel({ isOpen, onClose }: ContactPanelProps) {
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
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white z-50 border border-black overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-black">
              <p className="section-label">[ Contact ]</p>
              <button onClick={onClose} className="label-box text-[9px]">
                Close ✕
              </button>
            </div>

            <div className="p-6">
              <p className="font-mono text-[11px] text-gray-500 mb-6">
                Available for creative direction, experience design, and
                interactive systems projects.
              </p>

              <div className="space-y-3">
                <a
                  href="mailto:atlastalisman@gmail.com"
                  className="flex items-center gap-4 p-4 border border-gray-200 hover:border-black transition-colors group"
                >
                  <span className="font-mono text-[10px] text-gray-400 group-hover:text-black">@</span>
                  <div>
                    <p className="font-mono text-[11px] font-bold">
                      atlastalisman@gmail.com
                    </p>
                    <p className="font-mono text-[9px] text-gray-400">Email</p>
                  </div>
                </a>

                <a
                  href="tel:+61493091039"
                  className="flex items-center gap-4 p-4 border border-gray-200 hover:border-black transition-colors group"
                >
                  <span className="font-mono text-[10px] text-gray-400 group-hover:text-black">T</span>
                  <div>
                    <p className="font-mono text-[11px] font-bold">
                      +61 493 091 039
                    </p>
                    <p className="font-mono text-[9px] text-gray-400">Phone</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 border border-gray-200">
                  <span className="font-mono text-[10px] text-gray-400">M</span>
                  <div>
                    <p className="font-mono text-[11px] font-bold">
                      Melbourne, Australia
                    </p>
                    <p className="font-mono text-[9px] text-gray-400">Location</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
