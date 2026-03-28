"use client";

import { motion } from "framer-motion";

interface HeaderProps {
  onAboutClick: () => void;
  onContactClick: () => void;
}

export default function Header({ onAboutClick, onContactClick }: HeaderProps) {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-8 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div>
        <h1 className="text-lg font-bold tracking-tight text-gray-900">
          Atlas Talisman
        </h1>
        <p className="text-xs tracking-widest uppercase text-gray-400 mt-0.5">
          Interactive Systems Designer
        </p>
      </div>
      <nav className="flex items-center gap-6">
        <button
          onClick={onAboutClick}
          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          About
        </button>
        <button
          onClick={onContactClick}
          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          Contact
        </button>
      </nav>
    </motion.header>
  );
}
