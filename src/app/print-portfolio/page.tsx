"use client";

const PROJECTS = [
  {
    title: "dosomething.art",
    role: "Creator / System Designer",
    year: "2026",
    summary:
      "Designed and built a public participation platform that converts intention into visible action. Users submit real-world behaviours — social, creative, restorative — which publish to a live feed where others witness, remix, and build momentum through shared participation.",
    keyResults: [
      "Deployed a functional participation system with real user submissions",
      "Demonstrated a working feedback loop between individual action and public visibility",
    ],
    skills: "System Design, UX Architecture, Full-Stack Web Development, Real-Time Data",
    link: "https://www.dosomething.art",
    images: [
      "/images/print-portfolio/dsa-print/dsa001.png",
      "/images/print-portfolio/dsa-print/dsa002.png",
      "/images/print-portfolio/dsa-print/dsa003.png",
    ],
  },
  {
    title: "OnChain Monkey / Metaplanet",
    role: "Art Director / Creative Manager",
    year: "2022-2023",
    summary:
      "Art directed digital collectibles and gamified community engagement for a Tokyo-based NFT project. Bridged physical gallery experiences with blockchain-native digital ownership through gamified reveal sequences, with each collectible functioning as both art object and participation token.",
    keyResults: [
      "Delivered multiple collectible series with active community participation",
      "Transitioned the UltraSuperNew gallery in Tokyo from analogue art to immersive new media",
      "Designed a digital art marketplace and minting platform",
    ],
    skills: "Art Direction, Motion Design, Tokenomics Design, Community Management, Marketing",
    gridAspect: "aspect-[4/5]",
    images: [
      "/images/print-portfolio/ocm-print/monkeys-cans.png",
      "/images/print-portfolio/ocm-print/00_Midnight.png",
      "/images/print-portfolio/ocm-print/36_Crowns.png",
      "/images/print-portfolio/ocm-print/CelestialRobot.png",
      "/images/print-portfolio/ocm-print/Box_v05.jpg",
    ],
  },
  {
    title: "Freelance Graphic Design",
    role: "Designer / Creative Technologist",
    year: "2010-Present",
    summary:
      "A curated body of graphic design work spanning Photoshop, Illustrator, InDesign, and procedural image generation using the Processing framework — showcasing range across manual craft and computational design.",
    keyResults: [
      "Numerous products and services launched through branding and marketing assets",
    ],
    skills: "Photoshop, Illustrator, InDesign, Processing, Creative Coding, Art Direction",
    images: [
      "/images/print-portfolio/freelance-print/gallery001-seabutterfly-processing.jpg",
    ],
    imageGroups: [
      {
        aspect: "aspect-[2/1]",
        cols: 2,
        srcs: [
          "/images/print-portfolio/freelance-print/gallery003-GQMaskDesign_new.jpg",
          "/images/print-portfolio/freelance-print/gallery004-ZebraDesign_new.jpg",
        ],
      },
      {
        aspect: "aspect-[3/4]",
        cols: 3,
        srcs: [
          "/images/print-portfolio/freelance-print/gallery005-CultureHowCouldYou_CD-Design.png",
          "/images/print-portfolio/freelance-print/gallery007-TheBiographer-Poster.png",
          "/images/print-portfolio/freelance-print/gallery009-Danger-DaVinci-poster001.png",
        ],
      },
    ],
  },
  {
    title: "Hotel Royal Oak — Metaplanet",
    role: "Creative Manager",
    year: "2022-2023",
    summary:
      "Led creative direction for Metaplanet's digital gallery and member's club. Collaborated with Shigeru Ban Architects on a multimedia hub featuring an LED screen shell and interactive media atrium designed for new media art, digital exhibitions, and immersive brand experiences.",
    keyResults: [
      "Designed a multimedia hub in collaboration with Shigeru Ban Architects",
      "Established the framework for Hotel Royal Oak as a digital art destination",
      "Positioned Metaplanet at the intersection of art, architecture, and technology",
    ],
    skills: "Creative Direction, Spatial Design, LED Systems, Exhibition Programming, Stakeholder Management",
    images: [
      "/images/print-portfolio/hotel-print/Shigeru-Ban-001-Overall-Concept.png",
      "/images/print-portfolio/hotel-print/Shigeru-Ban-002-Exterior-Facade-Concept.png",
      "/images/print-portfolio/hotel-print/Shigeru-Ban-006-Atrium-Concept.png",
      "/images/print-portfolio/hotel-print/Shigeru-Ban-008-Projection-Wall.png",
    ],
  },
  {
    title: "Allen's Lollies National Tour",
    role: "Experience Designer",
    year: "2013",
    summary:
      "Co-designed a national brand activation converting passive audiences into active participants through playful street-level engagement. Members of the public were invited into interactive play spaces — dancing, sharing balloons, exchanging hi-fives, receiving flowers — each interaction captured and measured as a brand engagement.",
    keyResults: [
      "Generated 900,000+ brand interactions across the national tour",
      "Validated multiple engagement mechanics at scale",
      "Delivered measurable consumer response metrics for Nestle",
    ],
    skills: "Experience Design, Activation Design, Participation Mechanics, Measurement Frameworks",
    link: "https://youtu.be/A9Wpkzn7PMI",
    images: [
      "/images/print-portfolio/allens-print/smilemaker00.png",
      "/images/print-portfolio/allens-print/smilemaker01.png",
      "/images/print-portfolio/allens-print/smilemaker11.png",
      "/images/print-portfolio/allens-print/smilemaker12.png",
      "/images/print-portfolio/allens-print/smilemaker16.png",
      "/images/print-portfolio/allens-print/smilemaker18.png",
    ],
  },
  {
    title: "TerraLux Media",
    role: "Print and Digital Media Producer",
    year: "2024",
    summary:
      "Produced AI-generated promotional videos for TerraLux, combining AI video synthesis, AI-composed music, and voice-over narration into cohesive brand films. Demonstrated how AI-assisted production delivers polished brand content at speed.",
    keyResults: [
      "Launched a membership club",
      "Created a smart home wellness brand",
      "Built brand stories through published articles with Marco Derhy",
    ],
    skills: "AI Video Generation, Prompt Engineering, After Effects, Voice-Over, Music Composition",
    link: "https://youtu.be/luSXql0Mq78",
    images: [
      "/images/print-portfolio/terralux-print/Ecovillage.png",
      "/images/print-portfolio/terralux-print/WellnessProgram.jpeg",
      "/images/print-portfolio/terralux-print/membership-club-video.png",
      "/images/print-portfolio/terralux-print/spa_consult.png",
    ],
  },
];

export default function PrintPortfolio() {
  return (
    <>
      {/* Print-specific styles */}
      <style>{`
        @page {
          size: A4 portrait;
          margin: 0;
        }
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .page-break { break-before: page; }
        }
        @media screen {
          .page { box-shadow: 0 2px 16px rgba(0,0,0,0.12); margin: 24px auto; }
        }
      `}</style>

      {/* Download button — screen only */}
      <div className="no-print fixed top-4 right-4 z-50">
        <button
          onClick={() => window.print()}
          className="bg-black text-white font-mono text-[11px] uppercase tracking-wider px-5 py-3 hover:bg-gray-800 transition-colors cursor-pointer"
        >
          Download PDF
        </button>
      </div>

      {/* === COVER PAGE === */}
      <div className="page bg-white" style={{ width: "210mm", minHeight: "297mm", padding: "0", position: "relative", overflow: "hidden" }}>
        <div style={{ padding: "48mm 20mm 20mm 20mm", height: "297mm", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          {/* Top section */}
          <div>
            <p className="font-mono text-[9px] text-gray-400 uppercase tracking-[0.25em] mb-6">
              [ Selected Works ]
            </p>
            <h1 className="text-[52px] font-black uppercase tracking-tight leading-[0.95] mb-8">
              Atlas<br />Talisman
            </h1>
            <div className="w-16 h-[2px] bg-black mb-8" />
            <p className="text-[15px] text-gray-600 leading-[1.7] max-w-[75%]">
              Creative Director specialising in interactive systems that drive audience participation across digital platforms, physical activations, and immersive environments.
            </p>
          </div>

          {/* Bottom section */}
          <div>
            <div className="border-t border-black pt-6 space-y-3">
              <div className="flex gap-12">
                <div>
                  <p className="font-mono text-[8px] text-gray-400 uppercase tracking-[0.2em] mb-1">Location</p>
                  <p className="text-[12px] text-gray-800">Melbourne, AU</p>
                </div>
                <div>
                  <p className="font-mono text-[8px] text-gray-400 uppercase tracking-[0.2em] mb-1">Web</p>
                  <p className="text-[12px] text-gray-800">artdept.earth</p>
                </div>
                <div>
                  <p className="font-mono text-[8px] text-gray-400 uppercase tracking-[0.2em] mb-1">Year</p>
                  <p className="text-[12px] text-gray-800">2026</p>
                </div>
              </div>
              <p className="font-mono text-[8px] text-gray-300 uppercase tracking-[0.15em]">
                Art Dept Earth
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* === PROJECT PAGES === */}
      {PROJECTS.map((project, pi) => (
        <div
          key={pi}
          className="page bg-white page-break"
          style={{ width: "210mm", minHeight: "297mm", padding: "0", position: "relative" }}
        >
          <div style={{ padding: "16mm 20mm 16mm 20mm", minHeight: "297mm", display: "flex", flexDirection: "column" }}>
            {/* Project number + header */}
            <div className="mb-6">
              <div className="flex items-baseline justify-between mb-4">
                <p className="font-mono text-[9px] text-gray-400 uppercase tracking-[0.25em]">
                  [ {String(pi + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")} ]
                </p>
                <p className="font-mono text-[9px] text-gray-400 uppercase tracking-[0.15em]">
                  {project.year}
                </p>
              </div>
              <h2 className="text-[28px] font-black uppercase tracking-tight leading-[1.05] mb-1">
                {project.title}
              </h2>
              <p className="font-mono text-[10px] text-gray-500 tracking-wider">
                {project.role}
              </p>
            </div>

            {/* Hero image */}
            <div className="mb-5 border border-gray-200 overflow-hidden" style={{ maxHeight: "80mm" }}>
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
                style={{ maxHeight: "80mm" }}
              />
            </div>

            {/* Summary */}
            <div className="mb-5">
              <p className="text-[10.5px] text-gray-700 leading-[1.75]">
                {project.summary}
              </p>
            </div>

            {/* Two columns: Results + Skills */}
            <div className="grid grid-cols-2 gap-6 mb-5">
              <div>
                <p className="font-mono text-[8px] text-gray-400 uppercase tracking-[0.2em] mb-2 border-b border-gray-200 pb-1">
                  Key Results
                </p>
                <ul className="space-y-1.5">
                  {project.keyResults.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-[10px] text-gray-700 leading-[1.6]">
                      <span className="font-mono text-[8px] text-gray-400 mt-[2px] shrink-0">&#8594;</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[8px] text-gray-400 uppercase tracking-[0.2em] mb-2 border-b border-gray-200 pb-1">
                  Skills &amp; Tools
                </p>
                <p className="text-[10px] text-gray-700 leading-[1.7]">
                  {project.skills}
                </p>
                {project.link && (
                  <div className="mt-3">
                    <p className="font-mono text-[8px] text-gray-400 uppercase tracking-[0.2em] mb-1">Link</p>
                    <a href={project.link} className="text-[10px] text-black underline break-all">
                      {project.link}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Image grid — imageGroups (multi-row with different aspects) or single grid */}
            {(project as any).imageGroups ? (
              <div className="mt-auto pt-3 space-y-1">
                {(project as any).imageGroups.map((group: { aspect: string; cols: number; srcs: string[] }, gi: number) => (
                  <div
                    key={gi}
                    className="grid gap-[4px]"
                    style={{ gridTemplateColumns: `repeat(${group.cols}, 1fr)` }}
                  >
                    {group.srcs.map((src: string, i: number) => (
                      <div key={i} className={`${group.aspect} overflow-hidden bg-gray-100 border border-gray-200`}>
                        <img
                          src={src}
                          alt={`${project.title} ${gi}-${i}`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : project.images.length > 1 && (
              <div className="mt-auto pt-3">
                <div
                  className="grid gap-[4px]"
                  style={{
                    gridTemplateColumns: project.images.length - 1 <= 3
                      ? `repeat(${project.images.length - 1}, 1fr)`
                      : project.images.length - 1 <= 4
                      ? "repeat(4, 1fr)"
                      : "repeat(3, 1fr)",
                  }}
                >
                  {project.images.slice(1).map((src, i) => (
                    <div key={i} className={`${(project as any).gridAspect ?? "aspect-[4/3]"} overflow-hidden bg-gray-100 border border-gray-200`}>
                      <img
                        src={src}
                        alt={`${project.title} ${i + 2}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <p className="font-mono text-[7px] text-gray-300 uppercase tracking-[0.15em]">
                Atlas Talisman — artdept.earth
              </p>
              <p className="font-mono text-[7px] text-gray-300 uppercase tracking-[0.15em]">
                {pi + 2}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
