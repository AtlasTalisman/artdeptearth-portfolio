"use client";

import { useState, useEffect } from "react";

interface ExamplesGalleryProps {
  images: string[];
}

const PAGE_SIZE = 3;

// Transform origin per column position so scaled images expand inward
const ORIGINS = ["left center", "center", "right center"];

export default function ExamplesGallery({ images }: ExamplesGalleryProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [focalIndex, setFocalIndex] = useState<number | null>(null);

  const totalPages = Math.ceil(images.length / PAGE_SIZE);
  const currentPage = Math.floor(startIndex / PAGE_SIZE);
  const canPrev = startIndex > 0;
  const canNext = startIndex + PAGE_SIZE < images.length;
  const visible = images.slice(startIndex, startIndex + PAGE_SIZE);

  // Arrow-key scanning when an image is locked
  useEffect(() => {
    if (focalIndex === null) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setFocalIndex((prev) => {
          const next = Math.max(0, (prev ?? 0) - 1);
          setStartIndex((si) => (next < si ? Math.max(0, next) : si));
          return next;
        });
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setFocalIndex((prev) => {
          const next = Math.min(images.length - 1, (prev ?? 0) + 1);
          setStartIndex((si) =>
            next >= si + PAGE_SIZE
              ? Math.min(images.length - PAGE_SIZE, next - PAGE_SIZE + 1)
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
  }, [focalIndex, images.length]);

  const handlePrev = () => {
    setStartIndex((si) => Math.max(0, si - PAGE_SIZE));
    setFocalIndex(null);
  };

  const handleNext = () => {
    setStartIndex((si) => Math.min(images.length - PAGE_SIZE, si + PAGE_SIZE));
    setFocalIndex(null);
  };

  return (
    <div className="mt-10 pt-6 border-t border-gray-200">
      <div className="flex items-baseline justify-between mb-4">
        <p className="section-label">[ Gallery ]</p>
        {focalIndex !== null && (
          <p className="font-mono text-[9px] text-gray-400 uppercase tracking-wider">
            ← → to scan &nbsp;·&nbsp; esc to close
          </p>
        )}
      </div>

      {/* Extra padding so scaled images aren't clipped */}
      <div className="py-6 overflow-visible">
        <div className="grid grid-cols-3 gap-3 overflow-visible">
          {visible.map((src, i) => {
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
                    transform: isFocal
                      ? "scale(1.22)"
                      : isHovered
                      ? "scale(1.07)"
                      : "scale(1)",
                    transformOrigin: ORIGINS[i] ?? "center",
                    boxShadow: isFocal
                      ? "0 12px 40px rgba(0,0,0,0.28)"
                      : isHovered
                      ? "0 4px 16px rgba(0,0,0,0.14)"
                      : "none",
                  }}
                >
                  <img
                    src={src}
                    alt={`Gallery image ${globalIndex + 1}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>

                {/* Image counter badge when focal */}
                {isFocal && (
                  <div
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white font-mono text-[8px] px-2 py-0.5 tracking-wider whitespace-nowrap pointer-events-none"
                    style={{ zIndex: 20 }}
                  >
                    {globalIndex + 1} / {images.length}
                  </div>
                )}
              </div>
            );
          })}

          {/* Fill empty slots on last page */}
          {Array.from({ length: PAGE_SIZE - visible.length }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-[4/3] bg-gray-50" />
          ))}
        </div>
      </div>

      {/* Page navigation */}
      {totalPages > 1 && (
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
