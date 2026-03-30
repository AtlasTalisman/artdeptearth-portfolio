export interface App {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  tech: string[];
  year: string;
  liveUrl: string | null; // null = not yet deployed; set to deployed URL to enable launch
  githubUrl: string;
  color: string;
}

export const apps: App[] = [
  {
    id: "pixel-forge",
    title: "Pixel Forge",
    tagline: "8-Bit Pixel Art Studio",
    description:
      "A browser-based pixel art editor with procedurally generated chiptune music, retro arcade UI, and one-click export to PNG, JPEG, or SVG. Draw in 8-bit, hear your creation come to life.",
    tags: ["Pixel Art", "Browser Tool", "Chiptune", "Export"],
    tech: ["JavaScript", "Node.js", "Express", "Web Audio API"],
    year: "2025",
    liveUrl: null, // replace with deployed URL e.g. "https://pixel-forge.onrender.com"
    githubUrl: "https://github.com/CircusEarth/pixel-forge",
    color: "#FF6B6B",
  },
  {
    id: "soundcrypt",
    title: "SoundCrypt",
    tagline: "Audio → Chiptune Encoder",
    description:
      "Upload audio, transcribe it to text, encode that text as chiptune music, then decode it back. A steganographic toy with an arcade game aesthetic — hide messages in music.",
    tags: ["Audio", "Chiptune", "Steganography", "Transcription"],
    tech: ["TypeScript", "React", "Express", "Vite", "Python"],
    year: "2025",
    liveUrl: null, // replace with deployed URL e.g. "https://soundcrypt.onrender.com"
    githubUrl: "https://github.com/CircusEarth/soundcrypt",
    color: "#845EC2",
  },
];
