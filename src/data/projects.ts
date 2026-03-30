export type ProjectMedia =
  | { type: "youtube"; videoId: string }
  | { type: "video-grid"; clips: string[]; thumbnail?: string }
  | { type: "slideshow"; images: string[] }
  | { type: "iframe"; url: string };

export interface Project {
  id: string;
  title: string;
  role: string;
  gridVideo?: string;
  coinImage: string; // circular cutout PNG for the rotating coin in the grid
  year: string;
  system: string;
  mechanic: string;
  interaction: string[];
  outcome: string[];
  build: string[];
  link?: string;
  image?: string;
  media?: ProjectMedia;
  color: string;
  tier: "hero" | "supporting";
}

export const projects: Project[] = [
  // ── 01 ──
  {
    id: "dosomething",
    title: "dosomething.art",
    role: "Creator / Creative Director / System Designer",
    year: "2025–Present",
    system:
      "Designed and built a public participation platform that converts intention into visible action, allowing individuals to log real-world behaviours into a shared, community-driven system.",
    mechanic:
      "Users submit simple real-world actions (social, creative, restorative), which are published to a public feed where others can witness, validate, and build momentum through shared participation.",
    interaction: [
      "Users browse a live feed of actions taken by others",
      "Submit their own actions through a lightweight input flow",
      "Engage with and validate others' contributions",
      "Experience their behaviour as part of a visible collective system",
    ],
    outcome: [
      "Deployed a functional participation system with real user submissions",
      "Demonstrated a working feedback loop between individual action and public visibility",
      "Validated a simple interaction model for translating real-world behaviour into a shared digital system",
    ],
    build: [
      "Designed system architecture, interaction flows, and UX",
      "Built and deployed a working web application using modern tooling",
      "Integrated real-time content submission and display",
    ],
    link: "https://www.dosomething.art",
    media: { type: "iframe", url: "https://www.dosomething.art" },
    coinImage: "/images/coins/coin-dosomething.png",
    color: "#4ECDC4",
    tier: "hero",
  },
  // ── 02 ──
  {
    id: "allens",
    title: "Allen's Lollies National Tour",
    role: "Creative Director / Experience Designer",
    year: "2014",
    system:
      "Designed a national interactive activation system that converted passive audiences into active participants through playful street-level engagement mechanics.",
    mechanic:
      "Members of the public were invited into interactive play spaces — dancing, sharing balloons with strangers, exchanging hi-fives, receiving flowers — each interaction captured and measured as a brand engagement.",
    interaction: [
      "Street-level activations across Australia and New Zealand",
      "Interactive play spaces inviting spontaneous public participation",
      "Multiple engagement mechanics testing what makes people smile",
      "Real-time participation capture and measurement",
    ],
    outcome: [
      "Generated 900,000+ brand interactions across the national tour",
      "Validated multiple engagement mechanics at scale",
      "Delivered measurable consumer response metrics for Nestlé",
    ],
    build: [
      "Designed participation mechanics and activation formats",
      "Managed creative production across multiple tour locations",
      "Developed measurement framework for interaction quality",
    ],
    media: { type: "youtube", videoId: "A9Wpkzn7PMI" },
    coinImage: "/images/coins/coins-allens.png",
    color: "#FF6B6B",
    tier: "hero",
  },
  // ── 03 ──
  {
    id: "ocm",
    title: "OnChain Monkey / Metaplanet",
    role: "Art Director / Creative Manager",
    year: "2022–2023",
    system:
      "Art directed a series of digital collectibles and gamified community engagement mechanics for a Tokyo-based NFT project, bridging physical gallery experiences with blockchain-native digital ownership.",
    mechanic:
      "Community members collected and revealed digital art assets through gamified reveal sequences, each collectible functioning as both an art object and a participation token within the broader ecosystem.",
    interaction: [
      "Gamified reveal sequences for digital collectibles",
      "Community engagement through collectible mechanics",
      "Physical gallery to digital ownership bridging",
      "Cross-platform participation across social and blockchain",
    ],
    outcome: [
      "Delivered multiple collectible series with active community participation",
      "Transitioned the UltraSuperNew gallery in Tokyo from analogue art to immersive new media",
      "Designed a digital art marketplace and minting platform",
    ],
    build: [
      "Art directed all visual assets and motion design",
      "Designed tokenomics and community engagement mechanics",
      "Managed marketing, communications, and community growth",
    ],
    media: {
      type: "video-grid",
      clips: [
        "/videos/ocm/gacha-mint.mp4",
        "/videos/ocm/spraycan-alien.mp4",
        "/videos/ocm/carriage_crown.mp4",
        "/videos/ocm/spraygun_teaser.mp4",
      ],
      thumbnail: "/images/ocm/thumbnail.png",
    },
    coinImage: "/images/coins/coins-ocm.png",
    color: "#FF9A76",
    tier: "hero",
  },
  // ── 04 ──
  {
    id: "spatial",
    title: "The Spatial Network",
    role: "Chief Growth Officer / UX Lead",
    year: "2024–Present",
    system:
      "Designed the user experience for a geospatial content management system that connects digital content to real-world locations, structuring how people interact with environments and data.",
    mechanic:
      "Users pin digital content to physical coordinates, creating a spatial layer of information that others can discover and interact with through location-aware interfaces.",
    interaction: [
      "Location-based content discovery and creation",
      "Geospatial mapping of digital content to physical spaces",
      "Spatial interface for navigating place-based information",
      "Real-world to digital content bridging",
    ],
    outcome: [
      "Deployed a functional geospatial CMS used for real-world adventure mapping",
      "Established interaction patterns for spatial content management",
      "Designed AI framework for correlating project data across spatial contexts",
    ],
    build: [
      "Led UX and interaction design for the full platform",
      "Liaised between creative vision and development team",
      "Researched and developed AI integration strategy",
    ],
    link: "https://www.thespatialnetwork.net",
    media: { type: "iframe", url: "https://www.thespatialnetwork.net" },
    coinImage: "/images/coins/coin-tsn.png",
    color: "#845EC2",
    tier: "hero",
  },
  // ── 05 ──
  {
    id: "smarties",
    title: "8 Colours of Fun — Smarties",
    role: "Creative Lead / Campaign Collaborator",
    year: "2015",
    system:
      "Collaborated with JWT Australia to design a multi-week participatory campaign pairing artists with children to explore colour, producing a campaign visual identity built entirely from genuine creative collaboration.",
    mechanic:
      "Each week, children were paired with artists to explore a specific colour from the Smarties range through their own creative lens — producing artwork that formed the campaign's visual identity and brought Nestlé's colour world to life through real participation.",
    interaction: [
      "Children and artists paired across a multi-week structured journey",
      "Each partnership centred on a specific colour from the Smarties range",
      "Collaborative artwork creation guided by artist mentorship",
      "Campaign visual identity built from genuine participant outcomes",
    ],
    outcome: [
      "Delivered a campaign rooted in authentic child creativity and artistic collaboration",
      "Produced a rich visual library of colour-themed artworks for Nestlé / JWT Australia",
      "Demonstrated a participatory model for brand campaigns built on real community involvement",
    ],
    build: [
      "Developed the multi-week participation journey structure with JWT Australia",
      "Curated artist and child pairings to maximise creative output",
      "Creative direction across documentation, output, and campaign integration",
    ],
    media: { type: "youtube", videoId: "uwja5f70_QI" },
    coinImage: "/images/coins/coin-smarties.png",
    color: "#F7B731",
    tier: "supporting",
  },
  // ── 06 ──
  {
    id: "hotel-royal-oak",
    title: "Hotel Royal Oak — Metaplanet",
    role: "Creative Manager",
    year: "2022–2023",
    system:
      "Led creative direction to transform Hotel Royal Oak in Tokyo into a digital gallery space for Metaplanet — designing a multimedia hub with an LED screen shell and interactive media atrium in collaboration with Shigeru Ban Architects.",
    mechanic:
      "The hotel's physical spaces were reimagined as a living media environment: an LED facade system and interactive atrium designed to host new media art, digital exhibitions, and immersive brand experiences — with a more recent pivot planning to transform the property into a Bitcoin Hotel.",
    interaction: [
      "LED screen shell programming for building-scale visual display",
      "Interactive media atrium for immersive in-space experiences",
      "New media art and digital exhibition programming",
      "Physical architecture repurposed as public digital gallery space",
    ],
    outcome: [
      "Designed a multimedia hub in collaboration with Shigeru Ban Architects",
      "Established the framework for Hotel Royal Oak as a digital art destination",
      "Positioned Metaplanet at the intersection of art, architecture, and technology",
    ],
    build: [
      "Creative direction and concept development for the multimedia hub",
      "Collaborated with Shigeru Ban Architects on spatial design and LED integration",
      "Managed creative production across media systems and exhibition programming",
    ],
    media: {
      type: "slideshow",
      images: [
        "/images/Shigeru-Ban/Shigeru-Ban-001-Overall-Concept.png",
        "/images/Shigeru-Ban/Shigeru-Ban-002-Exterior-Facade-Concept.png",
        "/images/Shigeru-Ban/Shigeru-Ban-003-South-Facade-Design.png",
        "/images/Shigeru-Ban/Shigeru-Ban-004-North-Facade-Design.png",
        "/images/Shigeru-Ban/Shigeru-Ban-005-West-Facade-Design.png",
        "/images/Shigeru-Ban/Shigeru-Ban-006-Atrium-Concept.png",
        "/images/Shigeru-Ban/Shigeru-Ban-007-Event-Space.png",
        "/images/Shigeru-Ban/Shigeru-Ban-008-Projection-Wall.png",
        "/images/Shigeru-Ban/Shigeru-Ban-009-Floor-Planning.png",
        "/images/Shigeru-Ban/Shigeru-Ban-010-Floor-Planning.png",
      ],
    },
    coinImage: "/images/coins/coin-wentokyo.png",
    color: "#2C3E50",
    tier: "supporting",
  },
  // ── 07 ──
  {
    id: "terralux-memberships",
    title: "TerraLux Memberships",
    role: "Creative Director / AI Video Producer",
    year: "2024",
    system:
      "Produced an AI-generated promotional video for TerraLux membership tiers, combining AI video generation, AI-composed music, and voice-over narration into a cohesive brand film.",
    mechanic:
      "Leveraged generative AI tools for video synthesis and music composition, layered with original voice-over narration to demonstrate how AI-assisted production can deliver polished brand content at speed.",
    interaction: [
      "AI-generated video sequences and visual storytelling",
      "AI-composed soundtrack tailored to brand tone",
      "Voice-over narration scripting and recording",
      "End-to-end AI-assisted production pipeline",
    ],
    outcome: [
      "Delivered a polished membership promo video using AI-first production",
      "Demonstrated viable AI video + music pipeline for brand content",
      "Showcased creative direction skills applied to emerging AI tools",
    ],
    build: [
      "Directed AI video generation and prompt engineering",
      "Composed soundtrack using AI music generation tools",
      "Wrote and recorded voice-over narration",
    ],
    media: { type: "youtube", videoId: "luSXql0Mq78" },
    coinImage: "/images/coins/coin-terralux.png",
    color: "#56CCF2",
    tier: "supporting",
  },
  // ── 08 ──
  {
    id: "people-soup",
    title: "People Soup Comedy Trailer",
    role: "Animator / Motion Graphics Designer",
    year: "2023",
    system:
      "Designed and animated a comedy trailer combining character animation with motion graphics, demonstrating storytelling through movement, timing, and visual humour.",
    mechanic:
      "Used animation and motion design to establish comedic tone and narrative hook, crafting a trailer that communicates genre, pace, and personality through visual rhythm and graphic transitions.",
    interaction: [
      "Character animation and comedic timing",
      "Motion graphics design and visual transitions",
      "Narrative trailer structure and pacing",
      "Brand tone establishment through animation style",
    ],
    outcome: [
      "Delivered a polished comedy trailer with strong visual identity",
      "Demonstrated animation and motion graphics proficiency",
      "Showcased ability to communicate tone and narrative through motion",
    ],
    build: [
      "Designed and animated all motion graphics sequences",
      "Directed visual pacing and comedic timing",
      "Managed end-to-end trailer production",
    ],
    media: { type: "youtube", videoId: "n2Va5uaWEIM" },
    coinImage: "/images/coins/coin-soop.png",
    color: "#F2994A",
    tier: "supporting",
  },
  // ── 09 ──
  {
    id: "tourism-australia",
    title: "Tourism Australia",
    role: "Creative Director / Video Producer",
    year: "2015",
    system:
      "Directed a promotional video campaign showcasing Australian tourism experiences, combining location cinematography with narrative storytelling to drive destination engagement.",
    mechanic:
      "Produced video content designed to inspire travel intent through aspirational storytelling, capturing iconic Australian landscapes and experiences in a format optimised for digital distribution.",
    interaction: [
      "Aspirational destination storytelling through video",
      "Location scouting and cinematography direction",
      "Digital-first content strategy for tourism marketing",
      "Cross-platform video distribution and engagement",
    ],
    outcome: [
      "Delivered a polished promotional video for Tourism Australia",
      "Demonstrated ability to direct large-scale location shoots",
      "Produced content optimised for digital engagement metrics",
    ],
    build: [
      "Creative direction of the full video production",
      "Managed location shoots and post-production",
      "Directed narrative structure and visual storytelling",
    ],
    media: { type: "youtube", videoId: "l0cG-uib2-Y" },
    coinImage: "/images/coins/coin-bechanged.png",
    color: "#2D9CDB",
    tier: "supporting",
  },
  // ── 10 ──
  {
    id: "newkind",
    title: "Newkind Festival ARG",
    role: "Co-Founder / Creative Director",
    year: "2016–2017",
    system:
      "Co-founded a festival and designed an alternate reality game that gamified attendee participation across workshops, talks, and site experiences using physical-digital hybrid mechanics.",
    mechanic:
      "Attendees tapped RFID tags at workshops and experiences to level up their character, creating cross-event engagement loops that incentivised exploration and participation across the full programme.",
    interaction: [
      "RFID tag scanning at workshops and activations",
      "Character progression system tied to real-world participation",
      "Cross-workshop engagement loops encouraging exploration",
      "Physical-digital hybrid game layer over a live festival",
    ],
    outcome: [
      "Delivered a 100% solar-powered, zero-waste festival",
      "Demonstrated a working RFID-based participation system at event scale",
      "Created cross-programme engagement that increased workshop attendance",
    ],
    build: [
      "Designed the ARG system, character progression, and RFID integration",
      "Art directed all festival branding and motion design",
      "Managed full event production, site mapping, and staff recruitment",
    ],
    media: { type: "youtube", videoId: "rwQBafXnO4Q" },
    coinImage: "/images/coins/coin-newkind.png",
    color: "#FFE66D",
    tier: "hero",
  },
  // ── 11 ──
  {
    id: "graphic-assets",
    title: "Graphic Design & Generative Art",
    role: "Designer / Creative Technologist",
    year: "2010–Present",
    system:
      "A curated gallery of graphic design work spanning Photoshop, Illustrator, InDesign, and procedural image generation using the Processing framework — showcasing range across manual and computational design.",
    mechanic:
      "Combines traditional graphic design craft with generative computational approaches, demonstrating fluency across industry-standard tools and creative coding for procedural visual output.",
    interaction: [
      "Brand identity and print design (Photoshop, Illustrator, InDesign)",
      "Procedural image generation using Processing framework",
      "Computational design and generative visual systems",
      "Cross-medium visual design from print to screen to code",
    ],
    outcome: [
      "Built a diverse portfolio spanning traditional and computational design",
      "Demonstrated fluency across Adobe Creative Suite and creative coding",
      "Produced generative art systems with unique procedural aesthetics",
    ],
    build: [
      "Graphic design across Photoshop, Illustrator, and InDesign",
      "Creative coding with Processing for generative visuals",
      "Art direction for brand, print, and digital outputs",
    ],
    media: {
      type: "slideshow",
      images: [
        "/images/Gallery/Danger-DaVinci-poster001.png",
        "/images/Gallery/DirectingCandyRoyalle.jpg",
        "/images/Gallery/GWB_Podcast_Square.jpg",
        "/images/Gallery/HonestBody-poster.png",
        "/images/Gallery/HowToDestroy.jpg",
        "/images/Gallery/MaskDesign.jpg",
        "/images/Gallery/MedicalIcons.jpg",
        "/images/Gallery/SeaHorscopus.jpg",
        "/images/Gallery/TheBiographer-Poster.png",
        "/images/Gallery/Upstream.jpg",
        "/images/Gallery/ZebraDesign.jpg",
        "/images/Gallery/seabutterflyBCcolour.jpg",
        "/images/Gallery/theCloud.jpg",
      ],
    },
    coinImage: "/images/coins/coin-gallery.png",
    color: "#BB6BD9",
    tier: "supporting",
  },
  // ── 12 ──
  {
    id: "from-nothing",
    title: "From Nothing Webseries",
    role: "Creator / Director / Producer",
    year: "2018",
    system:
      "Created and directed a webseries exploring creative process and making, produced end-to-end from concept through scripting, filming, editing, and digital distribution.",
    mechanic:
      "Each episode followed a structured format blending documentary storytelling with creative experimentation, designed for short-form digital consumption and audience engagement across social platforms.",
    interaction: [
      "Episodic storytelling designed for web distribution",
      "Documentary-style creative process exploration",
      "Short-form content optimised for social engagement",
      "End-to-end production from concept to distribution",
    ],
    outcome: [
      "Produced and released a complete multi-episode webseries",
      "Demonstrated end-to-end video production capability",
      "Built an audience through consistent episodic content",
    ],
    build: [
      "Created series concept, format, and episode structure",
      "Directed filming, edited, and managed post-production",
      "Managed digital distribution and audience engagement",
    ],
    media: { type: "youtube", videoId: "wOdK15JIkwE" },
    coinImage: "/images/coins/coin-fromnothing.png",
    color: "#27AE60",
    tier: "supporting",
  },
];
