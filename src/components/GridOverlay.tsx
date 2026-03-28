"use client";

export default function GridOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      fill="none"
      stroke="#e0e0e0"
      strokeWidth="0.5"
    >
      {/* Vertical grid lines */}
      <line x1="360" y1="0" x2="360" y2="900" />
      <line x1="720" y1="0" x2="720" y2="900" />
      <line x1="1080" y1="0" x2="1080" y2="900" />

      {/* Horizontal grid lines */}
      <line x1="0" y1="300" x2="1440" y2="300" />
      <line x1="0" y1="600" x2="1440" y2="600" />

      {/* Crosshair markers at intersections */}
      {[360, 720, 1080].map((x) =>
        [300, 600].map((y) => (
          <g key={`${x}-${y}`}>
            <line x1={x - 8} y1={y} x2={x + 8} y2={y} strokeWidth="1" />
            <line x1={x} y1={y - 8} x2={x} y2={y + 8} strokeWidth="1" />
            <rect
              x={x - 4}
              y={y - 4}
              width="8"
              height="8"
              fill="none"
              strokeWidth="0.5"
            />
          </g>
        ))
      )}
    </svg>
  );
}
