"use client";

import { useState, useEffect } from "react";
import { GalleryItem } from "@/data/projects";

interface ExamplesGalleryProps {
  images?: string[];
  items?: GalleryItem[];
  defaultFocalIndex?: number;
  asHero?: boolean;
  hoverScale?: number;
  focalScale?: number;
}

const PAGE_SIZE_DEFAULT = 3;
const PAGE_SIZE_HERO = 5;
const ORIGINS = ["left center", "center", "right center"];

export default function ExamplesGallery({ images, items, defaultFocalIndex, asHero, hoverScale = 1.07, focalScale = 1.22 }: ExamplesGalleryProps) {
  const allItems: GalleryItem[] = items
    ? items
    : (images ?? []).map((src) => ({ src, title: "", tools: "", output: "" }));

  const hasMetadata = !!items;
  const pageSize = asHero ? PAGE_SIZE_HERO : PAGE_SIZE_DEFAULT;

  const [startIndex, setStartIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [focalIndex, setFocalIndex] = useState<number | null>(defaultFocalIndex ?? null);

  const totalPages = Math.ceil(allItems.length / pageSize);
  const currentPage = Math.floor(startIndex / pageSize);
  const canPrev = startIndex > 0;
  const canNext = startIndex + pageSize < allItems.length;
  const visible = allItems.slice(startIndex, startIndex + pageSize);

  const focalItem = focalIndex !== null ? allItems[focalIndex] : null;

  useEffect(() => {
    if (focalIndex === null) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setFocalIndex((prev) => {
          const next = Math.max(0, (prev ?? 0) - 1);
          setStartIndex((si) => (next < si ? Math.max(0, next - (next % pageSize)) : si));
          return next;
        });
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setFocalIndex((prev) => {
          const next = Math.min(allItems.length - 1, (prev ?? 0) + 1);
          setStartIndex((si) =>
            next >= si + pageSize
              ? Math.min(allItems.length - pageSize, next - pageSize + 1)
              : si
          );
          return next;
        });
      } else if (e.key === "Escape") {
        setFocalIndex(null);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [focalIndex, allItems.length, pageSize]);

  const handlePrev = () => {
    setStartIndex((si) => Math.max(0, si - pageSize));
    setFocalIndex(null);
  };

  const handleNext = () => {
    setStartIndex((si) => Math.min(allItems.length - pageSize, si + pageSize));
    setFocalIndex(null);
  };

  const goDetailPrev = () => {
    if (focalIndex === null) return;
    const next = Math.max(0, focalIndex - 1);
    setStartIndex((si) => (next < si ? Math.max(0, next - (next % pageSize)) : si));
    setFocalIndex(next);
  };

  const goDetailNext = () => {
    if (focalIndex === null) return;
    const next = Math.min(allItems.length - 1, focalIndex + 1);
    setStartIndex((si) =>
      next >= si + pageSize ? Math.min(allItems.length - pageSize, next - pageSize + 1) : si
    );
    setFocalIndex(next);
  };

  return (
    <div className={asHero ? "" : "mt-10 pt-6 border-t border-gray-200"}>
      <div className="flex items-baseline justify-between mb-4">
        <p className="section-label">[ Gallery ]</p>
        {focalIndex !== null && (
          <p className="font-mono text-[9px] text-gray-400 uppercase tracking-wider">
            {hasMetadata ? "← → navigate · esc close" : "← → to scan · esc to close"}
          </p>
        )}
      </div>

      {/* Detail view — shown when hero + focal, with or without metadata */}
      {asHero && focalItem && focalIndex !== null && (
        <div className="mb-3">
          <div className="flex border border-black" style={{ minHeight: "220px", maxHeight: "420px" }}>
            {/* Image */}
            <div className="flex-1 min-w-0 bg-gray-50 flex items-center justify-center overflow-hidden">
              <img
                src={focalItem.src}
                alt={focalItem.title || `Image ${focalIndex + 1}`}
                className="max-w-full max-h-full object-contain"
                style={{ maxHeight: "420px" }}
                draggable={false}
              />
            </div>

            {/* Info panel — only when metadata exists */}
            {hasMetadata && (
              <div className="w-[40%] shrink-0 bg-white border-l border-black p-5 flex flex-col justify-between">
                <div>
                  <p className="font-mono text-[8px] text-gray-400 uppercase tracking-wider mb-3">
                    {focalIndex + 1} / {allItems.length}
                  </p>
                  <h3 className="font-black text-[15px] uppercase tracking-tight leading-tight mb-5">
                    {focalItem.title}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-mono text-[8px] text-gray-400 uppercase tracking-widest mb-1">Tools</p>
                      <p className="text-[12px] text-gray-800 leading-snug">{focalItem.tools}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[8px] text-gray-400 uppercase tracking-widest mb-1">Output</p>
                      <p className="text-[12px] text-gray-800 leading-snug">{focalItem.output}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <button onClick={goDetailPrev} disabled={focalIndex === 0} className="label-box text-[10px] disabled:opacity-30 disabled:cursor-not-allowed flex-1 text-center">← Prev</button>
                  <button onClick={goDetailNext} disabled={focalIndex === allItems.length - 1} className="label-box text-[10px] disabled:opacity-30 disabled:cursor-not-allowed flex-1 text-center">Next →</button>
                </div>
                <button onClick={() => setFocalIndex(null)} className="mt-2 font-mono text-[9px] text-gray-400 uppercase tracking-wider hover:text-black transition-colors text-center">✕ close</button>
              </div>
            )}
          </div>

          {/* Nav buttons for no-metadata hero */}
          {!hasMetadata && (
            <div className="flex items-center justify-between mt-2">
              <button onClick={goDetailPrev} disabled={focalIndex === 0} className="label-box text-[10px] disabled:opacity-30 disabled:cursor-not-allowed">← Prev</button>
              <span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider">{focalIndex + 1} / {allItems.length}</span>
              <button onClick={goDetailNext} disabled={focalIndex === allItems.length - 1} className="label-box text-[10px] disabled:opacity-30 disabled:cursor-not-allowed">Next →</button>
            </div>
          )}
        </div>
      )}

      {/* Thumbnail strip */}
      <div className="py-2 overflow-visible">
        <div
          className="overflow-visible"
          style={{ display: "grid", gridTemplateColumns: `repeat(${pageSize}, 1fr)`, gap: "6px" }}
        >
          {visible.map((item, i) => {
            const globalIndex = startIndex + i;
            const isFocal = focalIndex === globalIndex;
            const isHovered = hoveredIndex === globalIndex && focalIndex === null;

            return (
              <div
                key={globalIndex}
                className="relative overflow-visible cursor-pointer"
                style={{ zIndex: isFocal ? 10 : isHovered ? 5 : 1 }}
                onMouseEnter={() => setHoveredIndex(globalIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setFocalIndex(isFocal ? null : globalIndex)}
              >
                <div
                  className="aspect-[4/3] overflow-hidden bg-gray-100 transition-transform duration-300"
                  style={{
                    transform:
                      !hasMetadata && isFocal
                        ? `scale(${focalScale})`
                        : !hasMetadata && isHovered
                        ? `scale(${hoverScale})`
                        : "scale(1)",
                    transformOrigin: ORIGINS[i] ?? "center",
                    boxShadow: isFocal
                      ? "0 8px 24px rgba(0,0,0,0.22)"
                      : isHovered
                      ? "0 4px 16px rgba(0,0,0,0.14)"
                      : "none",
                    outline: hasMetadata && isFocal ? "2px solid black" : "none",
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.title || `Gallery image ${globalIndex + 1}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>

                {/* Counter badge — non-metadata mode */}
                {!hasMetadata && isFocal && (
                  <div
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white font-mono text-[8px] px-2 py-0.5 tracking-wider whitespace-nowrap pointer-events-none"
                    style={{ zIndex: 20 }}
                  >
                    {globalIndex + 1} / {allItems.length}
                  </div>
                )}

                {/* Number badge — metadata mode */}
                {hasMetadata && (
                  <div className="absolute bottom-1 right-1 bg-black/60 text-white font-mono text-[8px] px-1.5 py-0.5 pointer-events-none">
                    {globalIndex + 1}
                  </div>
                )}
              </div>
            );
          })}

          {/* Fill empty slots */}
          {Array.from({ length: pageSize - visible.length }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-[4/3] bg-gray-50" />
          ))}
        </div>
      </div>

      {/* Page navigation — only for non-hero mode */}
      {!asHero && totalPages > 1 && (
        <div className="flex items-center justify-between mt-1">
          <button
            onClick={handlePrev}
            disabled={!canPrev}
            className="label-box text-[10px] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Prev
          </button>
          <span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider">
            {currentPage + 1} / {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={!canNext}
            className="label-box text-[10px] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
