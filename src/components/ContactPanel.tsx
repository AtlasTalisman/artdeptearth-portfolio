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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white z-50 rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 text-lg"
            >
              &times;
            </button>

            <div className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Get in touch
              </h2>
              <p className="text-sm text-gray-500 mb-8">
                Available for creative direction, experience design, and
                interactive systems projects.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:atlastalisman@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-lg">
                    @
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-700">
                      atlastalisman@gmail.com
                    </p>
                    <p className="text-xs text-gray-400">Email</p>
                  </div>
                </a>

                <a
                  href="tel:+61493091039"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-lg">
                    &phone;
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-700">
                      +61 493 091 039
                    </p>
                    <p className="text-xs text-gray-400">Phone</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                  <span className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-lg">
                    &marker;
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Melbourne, Australia
                    </p>
                    <p className="text-xs text-gray-400">Location</p>
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
