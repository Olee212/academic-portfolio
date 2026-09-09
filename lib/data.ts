/**
 * =====================================================================
 * SITE CONTENT / CONFIG
 * ---------------------------------------------------------------------
 * This is the single source of truth for all text content on the site.
 * Edit the objects below to add, remove, or update any section.
 * You should NOT need to touch the layout/component code to change copy.
 *
 * Quick map of what controls what:
 *   profile      -> Hero name, title, pitch, contact links, highlight badge
 *   about        -> About / Research Statement paragraphs
 *   handsync     -> The dedicated Startup (HandSync) section
 *   featured     -> Featured Research & Applied Project cards
 *   otherProjects-> The smaller "Other Projects" grid
 *   publications -> Conference Papers / Research Contributions
 *   experience   -> Vertical experience timeline entries
 *   education    -> Education entries
 *   awards       -> Awards & Recognition list
 *   skills       -> Technical + soft skills + instructor note
 *   references    -> Academic references
 *   navItems     -> Top navbar links (order + labels + anchor ids)
 * =====================================================================
 */

/* ------------------------------------------------------------------ */
/* PROFILE — Hero + contact                                            */
/* ------------------------------------------------------------------ */
export const profile = {
  name: "Ahnaf Rashid Olee",
  title:
    "EEE Graduate, BUET | Research Assistant & Junior Engineer | Aspiring PhD Candidate, Fall 2027",
  pitch:
    "Bridging device-physics and fabrication of 2D & wide-bandgap semiconductors with real-world embedded hardware and applied AI systems.",
  // Notable highlight shown as a badge near the top of the hero.
  highlight: "Two projects selected for BEAR Summit 2026",
  // Contact links — update hrefs freely. Leave a field empty ("") to hide it.
  contacts: {
    email: "ahnafolee18@gmail.com",
    phone: "+880 1XXX-XXXXXX", // TODO: replace with real phone
    linkedin: "https://www.linkedin.com/in/ahnaf-rashid-olee-6126a3163/",
  },
  // CV download button — drop your PDF into /public and update the path.
  cvUrl: "/cv-ahnaf-rashid-olee.pdf",
}

/* ------------------------------------------------------------------ */
/* ABOUT — Research statement                                          */
/* ------------------------------------------------------------------ */
export const about = {
  paragraphs: [
    "My undergraduate thesis develops a framework for engineering barrier-free ohmic contacts to two-dimensional semiconductors using metallic van der Waals electrodes. Using density functional theory (DFT), I investigate how contact geometry and electrode chemistry govern Schottky barrier formation, with the goal of optimizing electrical contacts for the next generation of atomically-thin transistors.",
    "Beyond the device level, I am drawn to human-aided devices and applied hardware–AI systems. I build working hardware prototypes end to end — embedded systems, sensors, actuators, and on-device intelligence.",
    "This dual footing motivates two parallel PhD tracks I am pursuing: (1) fabrication and characterization of 2D and wide-bandgap semiconductor devices, and (2) robotics and flexible/wearable sensors, where my hands-on hardware experience connects naturally to flexible electronics.",
  ],
  // Short pull-quote / research focus tags shown alongside the statement.
  focusAreas: [
    "2D & wide-bandgap semiconductors",
    "van der Waals contacts",
    "DFT contact optimization",
    "Flexible & wearable sensors",
    "Embedded systems",
    "Applied AI",
  ],
}

/* ------------------------------------------------------------------ */
/* HANDSYNC — Dedicated startup section                                */
/* ------------------------------------------------------------------ */
export const handsync = {
  label: "Founder, HandSync",
  wordmark: "HandSync",
  fullName: "HandsOnSync",
  tagline: "Privacy-first wearable that turns sign language into speech.",
  description:
    "HandSync is an AI-powered, privacy-first wearable that converts sign language into speech using a self-hosted, on-device large language model — no cloud, no data leaving the device. It runs offline, achieves under 97 ms per token, and is built on under $50 of hardware.",
  features: [
    "On-device LLM — under 97 ms per token",
    "Fully offline-capable, privacy-first",
    "Under $50 in hardware cost",
    "Supports ASL, BSL, ISL, BdSL and other mapped sign languages",
    "Native Android and iOS apps",
  ],
  grantNote:
    "Received a grant from the Research and Innovation Centre for Science and Engineering (RISE), BUET, for startup support.",
  url: "https://www.handsync.org/",
  image: "/images/handsync.png",
}

/* ------------------------------------------------------------------ */
/* FEATURED PROJECTS — Large research/applied project cards            */
/* ------------------------------------------------------------------ */
export const featured = [
  {
    title: "AI-Based Intelligent Traffic Signal Control System",
    subtitle: "70 Junctions, Dhaka City — Junior Engineer, BRTC (BUET)",
    description:
      "An intelligent, AI-driven adaptive traffic signal control system designed across 70 junctions in Dhaka. The system uses real-time data to dynamically time signals, reducing congestion and improving traffic flow at city scale.",
    tags: ["AI/ML", "Real-time Systems", "Computer Vision", "Civic Infrastructure"],
    outcome: "Deployed at 70 intersections — city-scale civic impact.",
    image: "/images/traffic.png",
  },
  {
    title: "Seismic Instrumentation Research",
    subtitle: "Research Assistant, BUET",
    description:
      "Research on instrumentation and sensor systems for seismic monitoring — including data acquisition, sensor calibration and deployment, and signal processing pipelines for reliable seismic measurement.",
    tags: ["Instrumentation", "Data Acquisition", "Signal Processing", "Sensor Calibration"],
    outcome: "Ongoing instrumentation and sensor-systems research.",
    image: "/images/seismic.png",
    url: "http://blcasn.tech/post/project-team-2026/",
  },
  {
    title: "AI-Driven Fabric Defect Detection",
    subtitle: "Smart Garments Manufacturing",
    description:
      "An AI vision system that detects fabric defects on production lines for smart garments manufacturing. The project was funded by Saturn Textiles, and an MoU was signed between IRAB, BUET and Saturn Textiles. Completed a proof of concept validated for industrial deployment, combining applied computer vision with manufacturing quality assurance.",
    tags: ["Computer Vision", "Deep Learning", "Manufacturing QA", "Edge Deployment"],
    outcome:
      "Funded by Saturn Textiles; MoU signed between IRAB, BUET and Saturn Textiles. Proof of concept validated for industrial deployment.",
    image: "/images/fabric-defect.png",
  },
]

/* ------------------------------------------------------------------ */
/* OTHER PROJECTS — Smaller project grid                               */
/* ------------------------------------------------------------------ */
export const otherProjects = [
  { title: "Electric Shock Detection Circuit", note: "SMD PCB design & assembly" },
  { title: "16-bit Binary Square Rooter", note: "VLSI design" },
  { title: "Low Noise RF Amplifier", note: "Designed in Cadence Virtuoso" },
  { title: "Resistor Value Detection", note: "MATLAB image processing" },
  { title: "240V/260V Step-Up Auto Transformer", note: "Power electronics" },
  { title: "Cosmic Catch", note: "Digital logic design project" },
  { title: "DC-AC / AC-DC Converter & Voltage Regulator", note: "Power electronics" },
  { title: "Solar Enhanced Seawater Desalination", note: "Renewable energy system" },
  { title: "Frequency Division Multiplexing", note: "Simulated in PSPICE" },
]

/* ------------------------------------------------------------------ */
/* PUBLICATIONS — Conference papers / research contributions           */
/* ------------------------------------------------------------------ */
export const publications = [
  {
    title:
      "PCB-LENSE: End-to-End PCB IC Marking Recognition and Datasheet-Link Generation",
  },
  {
    title:
      "Adaptive Receiver Alignment System for Underwater Visible Light Communication with Channel Performance Analysis in Different Aquatic Conditions",
  },
  {
    title:
      "An Autonomous Low-Cost Vision-Based Sorting System for IoT-Enabled Micro-Fulfillment",
  },
]

/* ------------------------------------------------------------------ */
/* EXPERIENCE — Vertical timeline (newest first)                       */
/* ------------------------------------------------------------------ */
export const experience = [
  {
    role: "Junior Engineer",
    org: "BRTC, BUET",
    period: "Aug 2026",
    detail:
      "AI-based intelligent traffic signal control system across 70 junctions in Dhaka City.",
  },
  {
    role: "Research Assistant",
    org: "BUET",
    period: "Jun 2026",
    detail: "Seismic instrumentation — data acquisition, sensor systems, and signal processing.",
  },
  {
    role: "Senior Coordinator — Electrical & Communication Subteam",
    org: "Team Interplanetar",
    period: "Apr 2024 – Jul 2025",
    detail:
      "Led electrical and communication subsystems for a competitive Mars rover team.",
  },
  {
    role: "Industrial Attachment",
    org: "Siliconova",
    period: "Nov 17–29, 2025",
    detail: "Hands-on semiconductor and electronics industry exposure.",
  },
]

/* ------------------------------------------------------------------ */
/* EDUCATION                                                           */
/* ------------------------------------------------------------------ */
export const education = [
  {
    degree: "BSc in Electrical & Electronic Engineering",
    org: "Bangladesh University of Engineering and Technology (BUET)",
    result: "CGPA 3.88",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    org: "2020",
    result: "GPA 5.0 — Talent Pool Scholarship",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    org: "2018",
    result: "GPA 5.0 — Talent Pool Scholarship",
  },
]

/* ------------------------------------------------------------------ */
/* AWARDS & RECOGNITION                                                */
/* ------------------------------------------------------------------ */
export const awards = [
  {
    title: "Two projects selected for BEAR Summit 2026",
    note: "Biotechnology, Electronics, Artificial Intelligence, and Robotics Summit",
    highlight: true,
  },
  {
    title: "RISE, BUET startup grant",
    note: "Received a grant from the Research and Innovation Centre for Science and Engineering (RISE), BUET, for startup support.",
  },
  { title: "Dean's Award", note: "For outstanding academic performance, BUET" },
  {
    title: "Invited — \u201CYouth, Start up and Promising Bangladesh\u201D",
    note: "By the ICT Division",
  },
  { title: "Specialized PCB Design Course", note: "BUET MARS ROVER TEAM" },
  {
    title: "Top 10 of 100+ teams — Renewable Energy-Based Idea Contest",
    note: "Organized by TIB",
  },
  { title: "Award recipient — Mathematics and Physics Olympiad", note: "" },
]

/* ------------------------------------------------------------------ */
/* SKILLS                                                              */
/* ------------------------------------------------------------------ */
export const skills = {
  technical: [
    "DFT Simulation (Quantum Espresso)",
    "DFT Simulation (Quantum ATK)",
    "PCB Design (Altium)",
    "MATLAB",
    "Cadence",
    "COMSOL Multiphysics",
    "Image Processing",
    "Raspberry Pi 4",
    "STM32",
  ],
  soft: [
    "Leadership & Coordination",
    "Team Collaboration",
    "Research & Analytical Thinking",
  ],
  instructorNote:
    "Workshop instructor — delivered 2 courses on microcontrollers/sensors and drone electronics for the BUET MARS ROVER TEAM.",
}

/* ------------------------------------------------------------------ */
/* REFERENCES                                                          */
/* ------------------------------------------------------------------ */
export const references = [
  { name: "Dr. Mahbub Alam", title: "Professor, EEE, BUET" },
  { name: "Dr. Hamidur Rahman", title: "Professor, EEE, BUET" },
]
export const referencesNote = "Contact details available on request."

/* ------------------------------------------------------------------ */
/* NAVIGATION — Top navbar links. `id` must match a section's id.      */
/* ------------------------------------------------------------------ */
export const navItems = [
  { label: "About", id: "about" },
  { label: "Startup", id: "startup" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Publications", id: "publications" },
  { label: "Awards", id: "awards" },
  { label: "Contact", id: "contact" },
]
