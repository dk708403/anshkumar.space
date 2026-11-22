export const personalInfo = {
  name: "Ansh Kumar",
  title: "AI Builder & Digital Product Developer",
  tagline: "I BUILD AI-POWERED PRODUCTS & DIGITAL EXPERIENCES.",
  taglineHighlight: "DIGITAL EXPERIENCES.",
  badge: "Hi, I'm Ansh Kumar",
  shortBio: "A builder, problem-solver and technology enthusiast, exploring practical AI solutions, web products and automations for real-world businesses.",
  location: "Delhi NCR, India",
  portrait: "/ansh-hero.jpg",
  topbarAvatar: "/ansh-topbar.jpg",
  email: "hello@anshkumar.space",
  backupEmail: "anshkumar590423@gmail.com",
  website: "anshkumar.space",
  websiteUrl: "https://anshkumar.space",
  socials: {
    github: "https://github.com/ADIT787563",
    linkedin: "https://www.linkedin.com/in/ansh-kumar-b07630319/",
    instagram: "https://www.instagram.com/adityax269",
    twitter: "https://x.com/a2maxadi"
  }
};

// Verified Highlights (No fictional project counts)
export const heroHighlights = [
  {
    title: "Focus Discipline",
    value: "AI & Automation",
    subtitle: "Voice Agents, n8n & API Workflows"
  },
  {
    title: "Engineering Stack",
    value: "Full-Stack Web",
    subtitle: "React, Next.js, Python & FastAPI"
  },
  {
    title: "Current Status",
    value: "Building in Public",
    subtitle: "Iterating on Ideas, Prototypes & Code"
  }
];

// Honest, Editable Work Sections: Currently Building, Experiments & Prototypes, Learning & Exploration
export const exploratoryWork = {
  currentlyBuilding: [
    {
      id: "voice-agent-framework",
      title: "Conversational Voice Agent Prototype",
      tagline: "Low-latency telephony and calendar booking concept",
      description: "Developing an experimental voice agent using Twilio phone bridges, audio streaming, and OpenAI function calling to test how naturally an AI can handle customer inquiries and schedule appointment slots.",
      status: "In Active Development",
      phase: "WIP",
      tags: ["Twilio", "Retell AI", "OpenAI APIs", "FastAPI", "WebSockets"],
      focusArea: "Speech Telephony & Latency Reduction",
      notes: "Testing audio pipeline response times under real telephone network conditions."
    },
    {
      id: "digital-utilities-hub",
      title: "Client-Side Digital Utilities Hub",
      tagline: "Fast, privacy-first browser tools without server overhead",
      description: "Designing a modular collection of everyday productivity tools — formatters, converters, text transformers, and encoding helpers — executing entirely inside the browser runtime for instant results.",
      status: "Prototyping UI & Logic",
      phase: "WIP",
      tags: ["React", "TypeScript", "Tailwind CSS", "Web Workers"],
      focusArea: "Client-side Performance & Modular Architecture",
      notes: "Building the core tool registry so additional converters can be added in isolated components."
    }
  ],
  experiments: [
    {
      id: "webhook-event-router",
      title: "Event-Driven Webhook Router",
      tagline: "Automated API bridge connecting databases and external apps",
      description: "A sandbox architecture using FastAPI and n8n to ingest third-party webhook payloads, validate dynamic JSON schemas, and trigger automated downstream actions with logging.",
      status: "Functional Prototype",
      phase: "Prototype",
      tags: ["n8n", "FastAPI", "Supabase", "Webhooks", "JSON"],
      focusArea: "Event Reliability & Retry Handlers",
      notes: "Experimenting with error fallback routing to alert on failed payload deliveries."
    },
    {
      id: "vector-knowledge-retrieval",
      title: "Context-Aware Knowledge Assistant",
      tagline: "Grounding LLM dialogue on custom documentation",
      description: "Testing vector similarity search algorithms with OpenAI text embeddings to answer queries strictly based on provided reference documents, minimizing hallucinations.",
      status: "Experimental Spike",
      phase: "Lab Spike",
      tags: ["Vector Embeddings", "OpenAI", "Python", "FastAPI"],
      focusArea: "Prompt Guardrails & Cosine Similarity",
      notes: "Testing retrieval accuracy when document chunks contain structured tables."
    }
  ],
  exploration: [
    {
      id: "streaming-audio-protocols",
      title: "Bidirectional Audio & WebSocket Pipelines",
      tagline: "Researching real-time streaming architectures",
      description: "Studying how WebSockets and asynchronous generator streams can maintain sub-800ms conversational loops between user speech, transcription models, and text-to-speech engines.",
      status: "Active Research",
      phase: "Research",
      tags: ["WebSockets", "AsyncIO", "Audio Buffering", "Python"],
      focusArea: "Turn-taking & Voice Interruption Handling",
      notes: "Reading protocol documentation on graceful audio halts when a caller interrupts."
    },
    {
      id: "micro-saas-architecture",
      title: "Scalable Full-Stack Web Architecture",
      tagline: "Clean component models and state management",
      description: "Refining full-stack fundamentals using Next.js server components, database indexing in PostgreSQL, and clean separation between business logic and presentation.",
      status: "Hands-on Practice",
      phase: "Practice",
      tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "Clean Code"],
      focusArea: "Maintainable Component Systems",
      notes: "Focusing on predictable project structures ready for shipping standalone tools."
    }
  ]
};

export const skillsData = {
  aiAutomation: {
    category: "AI & Automation",
    description: "Building autonomous agents and dependable background automation workflows.",
    skills: [
      { name: "AI Voice Agents", desc: "Low-latency telephony bots with Twilio and Retell AI" },
      { name: "Workflow Automation", desc: "Event-driven workflows with n8n and background workers" },
      { name: "AI Integrations", desc: "OpenAI function calling, tool use, and structured outputs" }
    ]
  },
  development: {
    category: "Development",
    description: "Robust full-stack code written with clean architecture and modern standards.",
    skills: [
      { name: "Python", desc: "Async scripting, data extraction, automation, and backend logic" },
      { name: "FastAPI", desc: "High-performance async APIs, WebSockets, and webhook gateways" },
      { name: "Next.js", desc: "Modern server-rendered React applications with optimal SEO" },
      { name: "React", desc: "Interactive, component-driven client applications and state management" },
      { name: "Tailwind CSS", desc: "Clean utility styling, responsive layouts, and design tokens" }
    ]
  },
  toolsPlatforms: {
    category: "Tools & Platforms",
    description: "The infrastructure, cloud services, and developer tooling backing every build.",
    skills: [
      { name: "Supabase", desc: "PostgreSQL databases, row-level security, auth, and real-time sync" },
      { name: "Twilio", desc: "Programmable voice, SMS dispatch, and call session routing" },
      { name: "OpenAI APIs", desc: "GPT models, real-time embeddings, and tool orchestration" },
      { name: "GitHub", desc: "Version control, collaborative workflows, and deployment pipelines" }
    ]
  }
};

export const journeyMilestones = [
  {
    phase: "01",
    year: "2024",
    stage: "Learning & Experimentation",
    summary: "Started programming out of curiosity with Python, writing scripts to automate routine desktop tasks, folder management, and file processing.",
    details: "Discovered the leverage of code executing repetitive actions. Learned core programming fundamentals, data structures, and terminal automation."
  },
  {
    phase: "02",
    year: "2025",
    stage: "Web Development & Frontend Foundations",
    summary: "Dove into modern frontend engineering, building responsive web layouts, exploring component architectures, and understanding browser runtimes.",
    details: "Mastered React, Tailwind CSS, and API integrations. Focused on high contrast typography, accessible UI patterns, and clean code."
  },
  {
    phase: "03",
    year: "2025",
    stage: "Exploration & Archived Ventures",
    summary: "Explored building client automation workflows and early AI voice agent ideas, learning valuable lessons on system reliability and product design.",
    details: "Experimented with voice bots and webhook handlers, setting the foundation for disciplined product engineering."
  },
  {
    phase: "04",
    year: "2026",
    stage: "AI Agents & Advanced Automation",
    summary: "Currently focused on low-latency conversational agents with Twilio, event-driven n8n workflows, and OpenAI tool integrations.",
    details: "Developing real-time bidirectional WebSocket prototypes, structured database lookups via FastAPI, and self-executing automation pipelines."
  },
  {
    phase: "05",
    year: "Future",
    stage: "Independent Products & Scalable Systems",
    summary: "Aiming to build and ship self-contained software solutions and automation tools that eliminate operational friction.",
    details: "Continuing to build in public, iterate on honest feedback, and ship tools with genuine utility."
  }
];
