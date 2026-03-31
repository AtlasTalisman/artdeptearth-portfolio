"use client";

import { useState } from "react";

interface ExamplesGalleryProps {
  images: string[];
}

const PAGE_SIZE = 4;

export default function ExamplesGallery({ images }: ExamplesGalleryProps) {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(images.length / PAGE_SIZE);
  const visible = images.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  return (
    <div className="mt-10 pt-6 border-t border-gray-200">
      <p className="section-label mb-4">[ Examples ]</p>

      <div className="relative">
        {/* Image strip */}
        <div className="grid grid-cols-4 gap-2">
          {visible.map((src, i) => (
            <div
              key={page * PAGE_SIZE + i}
              className="aspect-square overflow-hidden bg-gray-100"
            >
              <img
                src={src}
                alt={`Example ${page * PAGE_SIZE + i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Fill empty slots so the grid stays stable */}
          {Array.from({ length: PAGE_SIZE - visible.length }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square bg-gray-50" />
          ))}
        </div>

        {/* Navigation */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-3">
            <button
              onClick={() => setPage((p) => p - 1)}
              disabled={!canPrev}
              className="label-box text-[10px] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Prev
            </button>

            <span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider">
              {page + 1} / {totalPages}
            </span>

            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={!canNext}
              className="label-box text-[10px] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
