"use client";

function QRPattern({ page = 1 }: { page?: 1 | 2 }) {
  return (
    <img
      src={`/images/qr-pattern-page${page}.png`}
      alt=""
      style={{ display: "block", width: "100%", height: "auto", imageRendering: "pixelated" }}
      draggable={false}
    />
  );
}

export default function CV() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=JetBrains+Mono:wght@400;500&display=swap');
        @page { size: A4 portrait; margin: 0; }
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .page-break { break-before: page; }
        }
        @media screen {
          .page { box-shadow: 0 2px 20px rgba(0,0,0,0.10); margin: 24px auto; }
          body { background: #f0f0f0; }
        }
        * { font-family: 'Inter', system-ui, sans-serif; box-sizing: border-box; }
        .mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      {/* Download button */}
      <div className="no-print fixed top-4 right-4 z-50">
        <button
          onClick={() => window.print()}
          style={{ background: "#000", color: "#fff", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", padding: "10px 20px", border: "none", cursor: "pointer" }}
        >
          Download PDF
        </button>
      </div>

      {/* ── PAGE 1 ── */}
      <div className="page bg-white" style={{ width: "210mm", minHeight: "297mm", padding: "14mm 16mm 12mm 16mm", position: "relative" }}>

        {/* Header */}
        <div style={{ borderBottom: "2px solid #000", paddingBottom: "8mm", marginBottom: "7mm" }}>
          <h1 style={{ fontSize: "44px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: "3mm" }}>
            Atlas Talisman
          </h1>
          <p style={{ fontSize: "13px", fontWeight: 500, color: "#333", marginBottom: "2.5mm" }}>
            Creative Director / Interactive Systems Designer
          </p>
          <p className="mono" style={{ fontSize: "9px", color: "#888", letterSpacing: "0.05em" }}>
            Melbourne, Australia&nbsp;&nbsp;·&nbsp;&nbsp;atlastalisman@gmail.com&nbsp;&nbsp;·&nbsp;&nbsp;+61 493 091 039&nbsp;&nbsp;·&nbsp;&nbsp;artdept.earth
          </p>
        </div>

        {/* Positioning */}
        <div style={{ marginBottom: "6mm" }}>
          <p className="mono" style={{ fontSize: "8px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#888", borderBottom: "1px solid #000", paddingBottom: "2mm", marginBottom: "3mm" }}>
            [ Positioning ]
          </p>
          <p style={{ fontSize: "10.5px", lineHeight: 1.75, color: "#222" }}>
            Creative Director specialising in interactive systems that drive audience participation across digital platforms, physical activations, and immersive environments. 20+ years designing engagement mechanics, gamification systems, and experiential campaigns for brands, communities, and cultural organisations.
          </p>
        </div>

        {/* Selected Work */}
        <div style={{ marginBottom: "6mm" }}>
          <p className="mono" style={{ fontSize: "8px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#888", borderBottom: "1px solid #000", paddingBottom: "2mm", marginBottom: "4mm" }}>
            [ Selected Work ]
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "4mm" }}>
            {[
              {
                org: "Tourism Australia",
                role: "Writer",
                desc: "Worked on the messaging and ad for the Tourism Australia 'Be Changed' campaign, including writing the script and voicing the narration for the cinematic short.",
              },
              {
                org: "Allen's Lollies National Tour",
                role: "Experience Designer — Nestlé",
                desc: "Co-designed a national interactive activation system that converted passive audiences into active participants through playful street-level engagement mechanics. 900,000+ brand interactions across Australia and New Zealand.",
              },
              {
                org: "Newkind Festival",
                role: "Co-Founder",
                desc: "Co-founded a festival and designed an alternate reality game using NFC-based leveling systems. Attendees tapped tags at workshops to progress their character, creating cross-event engagement loops. 100% solar-powered, zero-waste event.",
              },
              {
                org: "The Spatial Network — TerraLux",
                role: "UX Lead / Systems Designer",
                desc: "Designed the interaction model for navigating location-based data and structuring content across spatial environments.",
              },
              {
                org: "dosomething.art",
                role: "Creator / System Designer",
                desc: "Designed and built a public participation platform where users submit real-world actions to a shared feed, creating a visible feedback loop between individual behaviour and collective momentum. Self-initiated, self-built, deployed and live.",
              },
              {
                org: "Metaplanet",
                role: "Art Director / Creative Manager",
                desc: "Art directed gamified digital collectibles and community engagement mechanics. Transitioned the UltraSuperNew gallery from analogue art to immersive new media with blockchain integration.",
              },
              {
                org: "Open World Theatre",
                role: "Founder / Director",
                desc: "Founded an embodiment practice bridging immersive theatre, experiential dining, and new media. Opened a Human Interaction Lab with 100+ active participants. Received arts grant for transmedia event at Legs On The Wall.",
              },
            ].map((item, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "38% 1fr", gap: "4mm", alignItems: "start" }}>
                <div>
                  <p style={{ fontSize: "10.5px", fontWeight: 700, lineHeight: 1.3, marginBottom: "0.5mm" }}>{item.org}</p>
                  <p className="mono" style={{ fontSize: "8px", color: "#888", letterSpacing: "0.03em" }}>{item.role}</p>
                </div>
                <p style={{ fontSize: "9.5px", lineHeight: 1.65, color: "#333" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* QR Pattern + Footer — Page 1 */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <QRPattern page={1} />
          <div style={{ padding: "3mm 16mm", borderTop: "1px solid #e0e0e0", display: "flex", justifyContent: "space-between", background: "#fff" }}>
            <p className="mono" style={{ fontSize: "7px", color: "#ccc", textTransform: "uppercase", letterSpacing: "0.15em" }}>
              Atlas Talisman
            </p>
            <p className="mono" style={{ fontSize: "7px", color: "#ccc", textTransform: "uppercase", letterSpacing: "0.15em" }}>
              artdept.earth
            </p>
          </div>
        </div>
      </div>

      {/* ── PAGE 2 ── */}
      <div className="page bg-white page-break" style={{ width: "210mm", minHeight: "297mm", padding: "14mm 16mm 12mm 16mm", position: "relative" }}>

        {/* Employment */}
        <div style={{ marginBottom: "7mm" }}>
          <p className="mono" style={{ fontSize: "8px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#888", borderBottom: "1px solid #000", paddingBottom: "2mm", marginBottom: "4mm" }}>
            [ Employment ]
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "4mm" }}>
            {[
              {
                title: "Systems Designer / Marketing & Brand Strategy",
                dates: "Sep 2024 – Present",
                org: "TerraLux",
                desc: "Systems design, UX and interaction design, dev team liaison, R&D, staff training.",
              },
              {
                title: "Creative Manager / Product Lead",
                dates: "Jan 2022 – May 2023",
                org: "Web3 & Digital Collectibles — Metaplanet, MMXX, SyncDAO",
                desc: "Art direction, tokenomics, gamification, community engagement, and UX across three organisations.",
              },
              {
                title: "Experience Designer",
                dates: "Jan 2021 – Dec 2021",
                org: "Loving Eats",
                desc: "UX, branding, gamification and app design for a food technology platform.",
              },
              {
                title: "Game Designer",
                dates: "Mar 2020 – Dec 2021",
                org: "CivilX",
                desc: "Game design, storytelling, world/level design, team management, pitch documents.",
              },
              {
                title: "Co-Founder",
                dates: "Aug 2016 – Aug 2017",
                org: "Newkind Festival / Trampoline Projects",
                desc: "Co-directed festival. ARG design, brand development, marketing, event production.",
              },
              {
                title: "Creative Director",
                dates: "Feb 2013 – Mar 2015",
                org: "Penguin Wolf",
                desc: "Art directed app development and websites. Pioneered medical information app for Sydney Children's Hospital.",
              },
              {
                title: "Consultant — Independent",
                dates: "2005 – Present",
                org: "Nestlé, Microsoft, CBA, KPMG, Arup, Tourism Australia",
                desc: "Designed customer journeys, participation systems, and experiential campaigns for major clients.",
              },
            ].map((item, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "55% 1fr", gap: "4mm", alignItems: "start" }}>
                <div>
                  <p style={{ fontSize: "10.5px", fontWeight: 700, lineHeight: 1.3, marginBottom: "0.5mm" }}>{item.title}</p>
                  <p className="mono" style={{ fontSize: "8px", color: "#888", letterSpacing: "0.03em" }}>{item.org}</p>
                </div>
                <div>
                  <p className="mono" style={{ fontSize: "8.5px", color: "#555", letterSpacing: "0.02em", marginBottom: "1mm" }}>{item.dates}</p>
                  <p style={{ fontSize: "9.5px", lineHeight: 1.6, color: "#333" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div style={{ marginBottom: "7mm" }}>
          <p className="mono" style={{ fontSize: "8px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#888", borderBottom: "1px solid #000", paddingBottom: "2mm", marginBottom: "3mm" }}>
            [ Prototyping &amp; Interactive Systems ]
          </p>
          <p className="mono" style={{ fontSize: "9px", lineHeight: 1.8, color: "#333", letterSpacing: "0.02em" }}>
            Adobe Creative Suite · Figma · Unity · Unreal Engine · Maya / Blender · React / Next.js · Three.js / R3F · Vercel · Supabase · AI-assisted workflows
          </p>
        </div>

        {/* Education */}
        <div style={{ marginBottom: "7mm" }}>
          <p className="mono" style={{ fontSize: "8px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#888", borderBottom: "1px solid #000", paddingBottom: "2mm", marginBottom: "3mm" }}>
            [ Education ]
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5mm" }}>
            <div style={{ display: "grid", gridTemplateColumns: "60% 1fr" }}>
              <p style={{ fontSize: "10px", fontWeight: 700 }}>Bachelor of Applied Design (Communication)</p>
              <p className="mono" style={{ fontSize: "8.5px", color: "#888" }}>Billy Blue College of Design · 2008–2012</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "60% 1fr" }}>
              <p style={{ fontSize: "10px", fontWeight: 700 }}>Advanced Diploma of Professional Game Development</p>
              <p className="mono" style={{ fontSize: "8.5px", color: "#888" }}>Academy of Interactive Entertainment · 2011–2012</p>
            </div>
            <div>
              <p className="mono" style={{ fontSize: "8px", color: "#aaa" }}>
                Additional: Interaction Design &amp; Electronic Art (Masters, partial) · Games Programming / C++ (BSE, partial)
              </p>
            </div>
          </div>
        </div>

        {/* Noteworthy */}
        <div style={{ marginBottom: "10mm" }}>
          <p className="mono" style={{ fontSize: "8px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#888", borderBottom: "1px solid #000", paddingBottom: "2mm", marginBottom: "3mm" }}>
            [ Noteworthy ]
          </p>
          <p style={{ fontSize: "9.5px", lineHeight: 1.75, color: "#333" }}>
            National Poetry Slam Champion (2005) · Published Writer &amp; Performance Poet · Keynote Speaker at Young Minds Conference (2013) · ISEA 2013 Hackathon Organiser · Web3 / Metaverse Educator &amp; Mentor · Questing (without money) across Australia and North America as game theory social experiment.
          </p>
        </div>

        {/* QR Pattern + Footer */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <QRPattern page={2} />
          <div style={{ padding: "3mm 16mm", borderTop: "1px solid #e0e0e0", display: "flex", justifyContent: "space-between", background: "#fff" }}>
            <p className="mono" style={{ fontSize: "7px", color: "#ccc", textTransform: "uppercase", letterSpacing: "0.15em" }}>
              Atlas Talisman
            </p>
            <p className="mono" style={{ fontSize: "7px", color: "#ccc", textTransform: "uppercase", letterSpacing: "0.15em" }}>
              artdept.earth
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
