"use client";

import { useState, useEffect, useCallback } from "react";
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
    <div className="w-full aspect-[16/9] bg-gray-50 relative overflow-hidden border-b border-gray-200 group">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
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
