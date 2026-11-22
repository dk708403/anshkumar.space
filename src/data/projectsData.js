export const projectsData = [
  // 1. Live Projects Group
  {
    id: "xsayra",
    slug: "xsayra",
    title: "XSAYRA",
    category: "AI Agents",
    type: "live",
    shortDescription: "AI Voice Agents, Automation & Custom Software solutions built to help companies automate operations and scale efficiently.",
    description: "XSAYRA is a digital solutions studio focused on AI voice agents, workflow automation, and custom business systems. Built to help companies automate operations, capture leads, and scale efficiently.",
    techStack: ["AI Agents", "OpenAI", "FastAPI", "Supabase", "Automation", "APIs"],
    stat: "Live Site",
    date: "2026",
    role: "Founder / Lead Developer",
    liveLink: "https://xsayra.com",
    liveLinkText: "Live Site",
    metrics: {
      automation: "100% automated qualify",
      voiceCall: "Real-time calls",
      scalability: "API integrations"
    },
    challenges: [
      "Stitching synchronous workflow states across multi-agent AI environments.",
      "Reducing pipeline execution delays when triggering third-party webhooks.",
      "Ensuring conversational fluidity in voice agent receptionist flows."
    ],
    solutions: [
      "Established custom queueing architectures in Supabase to sync lead routing states.",
      "Designed webhooks using FastAPI backend async workers to process notifications concurrently.",
      "Stitched voice channels directly to database actions for immediate state lookups."
    ],
    architecture: [
      { step: "Client Ingestion", description: "Inbound requests route to the FastAPI endpoint." },
      { step: "AI Core Processing", description: "OpenAI models parse intents and trigger automated n8n pipeline actions." },
      { step: "Operations Dashboard", description: "State updates persist in Supabase and sync with client CRMs." }
    ]
  },
  {
    id: "freshco-mushroom",
    slug: "freshco-mushroom",
    title: "Freshco Mushroom",
    category: "Web Design",
    type: "live",
    shortDescription: "Developed the online presence for an agriculture brand, showcasing products, operations, and brand identity.",
    description: "Developed the online presence for a mushroom farming business, showcasing products, operations, and brand identity through a modern, responsive website experience designed to establish direct-to-business credibility.",
    techStack: ["Branding", "Web Design", "Business Presence", "React", "CSS Grid"],
    stat: "Live Site",
    date: "2025",
    role: "Front-End Designer",
    liveLink: "https://freshcomushroom.com",
    liveLinkText: "Live Site",
    metrics: {
      aesthetics: "Modern visual grid",
      credibility: "Interactive farm tour",
      speed: "Lighthouse Score 100"
    },
    challenges: [
      "Creating a clean visual language representing organic farming without looking corporate.",
      "Developing high-fidelity image displays that render quickly on weak mobile connections.",
      "Structuring navigation to support client reviews and crop updates."
    ],
    solutions: [
      "Designed custom SVG assets and picked a warm earth-inspired color palette.",
      "Compressed agricultural media structures and utilized lazy-loading triggers.",
      "Developed a single-page scrolling structure optimized for mobile viewports."
    ],
    architecture: [
      { step: "Static Delivery", description: "Vite delivers optimized responsive HTML/CSS pages." },
      { step: "Direct Contact", description: "Direct communication hooks route corporate buyers to catalog downloads." }
    ]
  },
  {
    id: "kaushik-traders",
    slug: "kaushik-traders",
    title: "Kaushik Traders",
    category: "Business Website",
    type: "live",
    shortDescription: "Designed and launched a business website providing a secure online identity for trading operations, improving credibility.",
    description: "Designed and launched a business website providing a secure online identity for trading operations, improving credibility, search index ranking, and digital accessibility for wholesale buyers.",
    techStack: ["Website Development", "UI Design", "Business Presence", "CSS Variables", "SEO"],
    stat: "Live Site",
    date: "2025",
    role: "Lead Developer",
    liveLink: "https://www.kaushiktraders.store",
    liveLinkText: "Live Site",
    metrics: {
      accessibility: "Improved buyer reach",
      identity: "Digital trust factor",
      loading: "0.5s Page Paint"
    },
    challenges: [
      "Displaying diverse trading catalog items without visual clutter.",
      "Ensuring search engine indexing for local trade queries.",
      "Creating a highly readable typography hierarchy."
    ],
    solutions: [
      "Designed modular cards with subtle hover glows to categorize services.",
      "Implemented semantic HTML structures and meta tags optimizing search indexing.",
      "Selected Satoshi and Inter fonts to enforce text clarity."
    ],
    architecture: [
      { step: "Browse Trade", description: "Buyers browse trading catalog categories on a clean layout." },
      { step: "Inquiry Submission", description: "Direct trading contact forms dispatch client requirements to corporate emails." }
    ]
  },
  {
    id: "otool",
    slug: "otool",
    title: "OTool",
    category: "Web Applications",
    type: "live",
    shortDescription: "A collection of useful web-based tools built to simplify everyday digital tasks in a single streamlined platform.",
    description: "OTool is an all-in-one utility platform that combines multiple digital toolsets—like text formatting, coordinate conversion, and asset encoders—into a single, clean, streamlined workspace.",
    techStack: ["Productivity Tools", "Web Applications", "React", "Framer Motion", "CSS Variables"],
    stat: "Live Site",
    date: "2025",
    role: "Full-Stack Developer",
    liveLink: "https://otool.online",
    liveLinkText: "Live Site",
    metrics: {
      speed: "Instant calculations",
      toolsCount: "Multiple tools in one",
      design: "Minimal tool drawer"
    },
    challenges: [
      "Preventing browser lag when executing text manipulation tools in real-time.",
      "Designing a unified interface for tools with different inputs and outputs.",
      "Enabling quick transitions between text formatting, encoders, and other tools."
    ],
    solutions: [
      "Utilized optimized JavaScript micro-tasks and local browser calculations.",
      "Created a grid-based side drawer navigation enabling easy tool switching.",
      "Used React memoization to prevent rendering delays during rapid keystrokes."
    ],
    architecture: [
      { step: "Select Tool", description: "Users choose text formatting, conversion, or encoding tools from the hub." },
      { step: "Client Computation", description: "Computations execute locally in the client browser for instant output." }
    ]
  },

  // 2. Experimental / Agent Projects Group
  {
    id: "real-estate-agent",
    slug: "real-estate-agent",
    title: "Real Estate AI Agent",
    category: "AI Agents",
    type: "experimental",
    shortDescription: "Qualifies leads, answers property inquiries, schedules visits, and automates follow-ups.",
    description: "An intelligent assistant capable of qualifying leads, scheduling site visits, answering property queries, and automating follow-ups inside CRM databases.",
    techStack: ["Lead Qualification", "Calendar Booking", "CRM Integration", "Voice & Chat Support"],
    stat: "Demo Agent",
    date: "2026",
    role: "AI Architect",
    liveLink: "/projects/real-estate-agent",
    liveLinkText: "Read Case Study",
    metrics: {
      leads: "Automated qualification",
      booking: "Calendar integrations",
      interaction: "Voice & Chat support"
    },
    challenges: [
      "Parsing unstructured buyer requirements (budget, locations) during live conversations.",
      "Syncing availability slots across multiple calendar networks dynamically.",
      "Structuring CRM fields to score leads based on intent details."
    ],
    solutions: [
      "Employed OpenAI function calling parameters to extract structured data mid-dialogue.",
      "Developed n8n background lookups to verify realtor calendar blocks.",
      "Established automated Supabase databases scoring targets on budget thresholds."
    ],
    architecture: [
      { step: "Query Received", description: "Customer submits query via chat interface or phone link." },
      { step: "Entity Extraction", description: "OpenAI triggers tool calls to extract budget, location, and dates." },
      { step: "CRM Pipeline Update", description: "FastAPI triggers webhooks to route lead scores directly to CRM." }
    ]
  },
  {
    id: "ai-receptionist",
    slug: "ai-receptionist",
    title: "AI Receptionist",
    category: "AI Agents",
    type: "experimental",
    shortDescription: "Handles incoming customer requests, books appointments, and provides instant responses.",
    description: "A conversational voice agent designed for clinics, agencies, and service businesses to handle inbound calls, qualify inquiries, and handle appointment schedules.",
    techStack: ["24/7 Availability", "FAQ Handling", "Appointment Scheduling", "Multilingual Support"],
    stat: "Voice Demo",
    date: "2026",
    role: "Voice Developer",
    liveLink: "/contact",
    liveLinkText: "View Demo",
    metrics: {
      telephony: "Twilio integrations",
      latency: "Under 1s voice replies",
      languages: "Multi-language support"
    },
    challenges: [
      "Speech-to-text transcription accuracy under telephone line noise conditions.",
      "Gracefully halting audio dispatch when users interrupt the receptionist mid-sentence.",
      "Coordinating appointment slot updates instantly during high-volume call traffic."
    ],
    solutions: [
      "Utilized Retell AI WebSocket streaming to parse vocal frequencies.",
      "Built async generator interruption overrides inside a FastAPI coordinator.",
      "Implemented lightweight transactional lockups in Supabase during booking."
    ],
    architecture: [
      { step: "Inbound Call", description: "Caller dials phone line routed by Twilio to Retell AI stream." },
      { step: "Llm Coordinator", description: "OpenAI receives live transcript, looks up clinic calendar, and returns replies." },
      { step: "Tts Dispatch", description: "Audio streams back to the telephone WebSocket dynamically." }
    ]
  },
  {
    id: "sales-automation-agent",
    slug: "sales-automation-agent",
    title: "Sales Automation Agent",
    category: "Automation",
    type: "experimental",
    shortDescription: "Engages prospects, follows up automatically, and streamlines outreach workflows.",
    description: "An AI-powered assistant that automates lead engagement, follow-up sequences, and customer communication workflows for automated prospect conversion.",
    techStack: ["Lead Capture", "Automated Follow-ups", "Email Sequences", "Analytics"],
    stat: "Outreach Bot",
    date: "2025",
    role: "Automation Engineer",
    liveLink: "/blog",
    liveLinkText: "Technical Blog",
    metrics: {
      outreach: "Automated sequence logic",
      enrichment: "API profile scraping",
      analytics: "Sequence tracking dashboard"
    },
    challenges: [
      "Bypassing cold email spam thresholds during mass automated dispatch.",
      "Scraping prospect profiles dynamically from public search engines without rate limits.",
      "Displaying real-time email click telemetry in a minimal React chart."
    ],
    solutions: [
      "Programmed staggered send schedules and random text variations.",
      "Wired n8n flows connecting external lead databases.",
      "Crafted custom SVG open-rate telemetry charts optimized for React renders."
    ],
    architecture: [
      { step: "Prospect Import", description: "Raw lead lists are uploaded to Supabase database tables." },
      { step: "Profile Enrichment", description: "n8n fetches public profiles and scores buying intent." },
      { step: "Sequence Execution", description: "Staggered campaigns dispatch follow-ups via email APIs." }
    ]
  },
  {
    id: "customer-support-agent",
    slug: "customer-support-agent",
    title: "Customer Support Agent",
    category: "AI Agents",
    type: "experimental",
    shortDescription: "Provides instant assistance, answers common questions, and escalates complex issues.",
    description: "Provides instant customer support service, answers common questions, looks up context, and routes complex inquiries to humans when needed.",
    techStack: ["Knowledge Base Integration", "Ticket Routing", "Conversation Memory", "Human Handoff"],
    stat: "Demo Support",
    date: "2025",
    role: "AI Developer",
    liveLink: "/projects/customer-support-agent",
    liveLinkText: "Architecture",
    metrics: {
      accuracy: "Knowledge base lookups",
      logic: "Context retrieval loops",
      escalate: "Human ticket routing"
    },
    challenges: [
      "Hallucination mitigation when answering technical customer questions.",
      "Recognizing emotional escalation indicators to trigger human routing.",
      "Syncing conversation logs securely across session storage parameters."
    ],
    solutions: [
      "Configured cosine similarity Vector embeddings to lock prompt context to documentation.",
      "Built natural language sentiment analyzers triggering webhook handoffs on anger scores.",
      "Implemented JWT session encryption to secure customer dialogue history."
    ],
    architecture: [
      { step: "User Query", description: "User enters support ticket request on client website." },
      { step: "Vector Search", description: "Searches vectorized databases and feeds contexts to OpenAI." },
      { step: "Handoff Gate", description: "Resolves tickets directly or opens Slack channels for human agent replies." }
    ]
  },
  {
    id: "workflow-automation-engine",
    slug: "workflow-automation-engine",
    title: "Workflow Automation Engine",
    category: "Automation",
    type: "experimental",
    shortDescription: "Connects APIs, databases, and business processes into automated pipelines.",
    description: "A background automation system connecting APIs, databases, webhooks, and business processes to eliminate manual business overhead.",
    techStack: ["Webhooks", "Supabase Integration", "n8n Workflows", "Background Tasks"],
    stat: "Core Backend",
    date: "2025",
    role: "Back-End Engineer",
    liveLink: "/projects/workflow-automation-engine",
    liveLinkText: "Documentation",
    metrics: {
      pipeline: "n8n automation flows",
      storage: "Supabase DB schemas",
      gateway: "FastAPI webhook routes"
    },
    challenges: [
      "Handling dynamic JSON schemas coming from varying API endpoints.",
      "Guaranteeing error fallback and retry operations during third-party service downtime.",
      "Scaling webhook throughput to fit lightweight server execution limits."
    ],
    solutions: [
      "Developed custom JavaScript code nodes inside n8n to parse nested JSON elements.",
      "Configured error-catch routing triggers that send immediate alert logs to Discord/Slack.",
      "Built database pooling buffers using Supabase connection pools to throttle traffic."
    ],
    architecture: [
      { step: "Webhook Fire", description: "External platforms fire webhook payload into n8n gateway." },
      { step: "State Analysis", description: "FastAPI script parses details and checks database availability." },
      { step: "Operation Done", description: "Target CRM database receives parameter sync in under 200ms." }
    ]
  }
];
