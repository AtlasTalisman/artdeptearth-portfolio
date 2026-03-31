"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { ProjectMedia } from "@/data/projects";

export default function MediaBlock({ media }: { media?: ProjectMedia }) {
  if (!media) {
    return (
      <div className="w-full aspect-[16/9] bg-gray-50 flex items-center justify-center border-b border-gray-200">
        <div className="w-8 h-8 border border-gray-300 rotate-45" />
      </div>
    );
  }

  switch (media.type) {
    case "youtube":
      return <YouTubeEmbed videoId={media.videoId} />;
    case "video-grid":
      return <VideoGrid clips={media.clips} />;
    case "video-grid-gallery":
      return <VideoGridGallery pages={media.pages} />;
    case "slideshow":
      return <Slideshow images={media.images} />;
    case "iframe":
      return <IframeEmbed url={media.url} />;
  }
}

function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="w-full aspect-[16/9] bg-black border-b border-gray-200">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
        title="Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}

function VideoGrid({ clips }: { clips: string[] }) {
  return (
    <div className="w-full grid grid-cols-2 gap-px bg-black border-b border-gray-200">
      {clips.map((src) => (
        <div key={src} className="aspect-square bg-black overflow-hidden">
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

function VideoGridGallery({ pages }: { pages: Array<{ label: string; clips: string[] }> }) {
  const [page, setPage] = useState(0);
  const totalPages = pages.length;
  const { label, clips } = pages[page];
  const canPrev = page > 0;
  const canNext = page < totalPages - 1;
  const pageKey = `page-${page}`;

  return (
    <div className="w-full border-b border-gray-200 relative group">
      {/* 2×2 grid */}
      <div className="grid grid-cols-2 gap-px bg-black">
        {clips.map((src, i) => (
          <div key={`${pageKey}-${i}`} className="aspect-square bg-black overflow-hidden">
            {isVideo(src) ? (
              <video src={src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
            ) : (
              <img src={src} alt="" className="w-full h-full object-cover" />
            )}
          </div>
        ))}
      </div>

      {/* Grid label — black bar anchored to bottom-right */}
      <div className="absolute bottom-0 right-0 bg-black px-3 py-1.5 z-10 pointer-events-none">
        <span className="font-mono text-[10px] text-white uppercase tracking-[0.12em]">
          {label}
        </span>
      </div>

      {/* Left arrow */}
      {canPrev && (
        <button
          onClick={() => setPage((p) => p - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/60 text-white text-sm hover:bg-black transition-colors z-20 opacity-0 group-hover:opacity-100"
          aria-label="Previous page"
        >
          ←
        </button>
      )}

      {/* Right arrow — bounces on page 0; hover-only after */}
      {canNext && (
        <button
          onClick={() => setPage((p) => p + 1)}
          className={`absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/60 text-white text-sm hover:bg-black transition-colors z-20 ${
            page === 0 ? "opacity-100 animate-bounce" : "opacity-0 group-hover:opacity-100"
          }`}
          aria-label="Next page"
        >
          →
        </button>
      )}

      {/* Page dots */}
      {totalPages > 1 && (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors pointer-events-auto ${
                i === page ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Page counter top-right */}
      <div className="absolute top-2 left-3 font-mono text-[9px] text-white/60 tracking-wider pointer-events-none">
        {page + 1} / {totalPages}
      </div>
    </div>
  );
}

function IframeEmbed({ url }: { url: string }) {
  const display = url.replace(/^https?:\/\/(www\.)?/, "");
  return (
    <div className="w-full aspect-[16/9] bg-gray-50 border-b border-gray-200 flex flex-col items-center justify-center gap-5">
      <div className="text-center">
        <p className="font-mono text-[9px] text-gray-400 uppercase tracking-wider mb-1">Live Site</p>
        <p className="font-mono text-[13px] text-black font-medium">{display}</p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="label-box"
      >
        Visit Live Site →
      </a>
    </div>
  );
}

function Slideshow({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 3500);
    return () => clearInterval(t);
  }, [images.length]);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length]
  );

  return (
    <div className="w-full aspect-[16/9] bg-white relative overflow-hidden border-b border-gray-200 group">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 border border-black/10 opacity-0 group-hover:opacity-100 transition-opacity text-xs hover:bg-white"
        aria-label="Previous"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 border border-black/10 opacity-0 group-hover:opacity-100 transition-opacity text-xs hover:bg-white"
        aria-label="Next"
      >
        →
      </button>

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
