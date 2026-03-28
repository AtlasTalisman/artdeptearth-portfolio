export interface Project {
  id: string;
  title: string;
  role: string;
  year: string;
  system: string;
  mechanic: string;
  interaction: string[];
  outcome: string[];
  build: string[];
  link?: string;
  image?: string;
  color: string;
  tier: "hero" | "supporting";
}

export const projects: Project[] = [
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
    color: "#4ECDC4",
    tier: "hero",
  },
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
    color: "#FF6B6B",
    tier: "hero",
  },
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
    color: "#FFE66D",
    tier: "hero",
  },
  {
    id: "terralux",
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
    color: "#845EC2",
    tier: "hero",
  },
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
    color: "#FF9A76",
    tier: "supporting",
  },
  {
    id: "theatre",
    title: "Open World Theatre",
    role: "Director / Creator",
    year: "2016–Present",
    system:
      "Founded a practice bridging live theatre, immersive dining, and new media to create participatory performance experiences where audiences shape the narrative through their presence and choices.",
    mechanic:
      "Audiences enter designed environments where sensory cues, spatial navigation, and interaction prompts replace traditional spectatorship with active participation in unfolding experiences.",
    interaction: [
      "Immersive dining events and sensory art experiences",
      "Somatic performance training with 100+ participants",
      "Cross-medium experiential design (theatre, dining, digital)",
      "Transmedia event development (grant-funded at Legs On The Wall)",
    ],
    outcome: [
      "Opened a Human Interaction Lab with 100+ active participants",
      "Received arts grant for transmedia event bridging live theatre and new media",
      "Established an ongoing practice in experiential and participatory design",
    ],
    build: [
      "Creative direction of stage productions, public art, and festivals",
      "Designed somatic and communication training curricula",
      "Produced cross-medium sensory experiences",
    ],
    link: "https://www.openworldtheatre.com",
    color: "#C9B1FF",
    tier: "supporting",
  },
];
