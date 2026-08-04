export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  cover: string;
  gallery: string[];
  video?: string;
  accent: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: { title: string; body: string }[];
  tags: string[];
}

const BASE = import.meta.env.BASE_URL;

export const profile = {
  name: "Mohamed Mahmoud",
  role: "Technical Lead / Senior Software Engineer",
  email: "mohammed_hs55@yahoo.com",
  phone: "+20 111 231 0567",
  location: "Cairo, Egypt",
  github: "https://github.com/mohamedjs",
  linkedin: "https://www.linkedin.com/in/mohamed-mahmoud-19ab47122",
  avatar: `${BASE}avatar.webp`,
  resume: `${BASE}mohamed-mahmoud-cv.pdf`,
  summary:
    "Full-stack developer & architecture lover. I build fault-tolerant, polyglot microservices and multi-tenant SaaS platforms — modern, fast and beautiful web applications.",
};

export const stats = [
  { value: "5M+", label: "Users Served" },
  { value: "500+", label: "Orders / Day" },
  { value: "7+", label: "Years Experience" },
  { value: "4", label: "Countries Served" },
];

export const skillGroups = [
  {
    title: "Backend & APIs",
    skills: ["Python", "FastAPI", "PHP", "Laravel 8+", "Node.js", "REST APIs"],
  },
  {
    title: "System Architecture",
    skills: ["Polyglot Microservices", "Multi-Tenant SaaS", "B2B/B2C Systems", "Event-Driven Architecture"],
  },
  {
    title: "Design Patterns",
    skills: ["Factory", "Circuit Breaker", "Adapter", "Strategy", "Facade", "Decorator", "Builder"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React.js", "Redux", "RTK Query", "Vercel Edge Middleware"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo", "EAS Deployment", "White-Label Builds"],
  },
  {
    title: "Databases & State",
    skills: ["MySQL (ACID)", "Redis (State Machines)", "Meilisearch", "MongoDB"],
  },
  {
    title: "Infrastructure",
    skills: ["Docker", "AWS / S3", "Nginx", "Cloudflare", "CI/CD Pipelines"],
  },
  {
    title: "AI & Automation",
    skills: ["n8n Workflows", "AI Agents", "Evolution API (WhatsApp)", "Telegram Bots", "Meta Graph API", "OpenAI"],
  },
];

export const experiences: Experience[] = [
  {
    role: "Technical Lead & Senior Software Engineer",
    company: "Tripklik",
    location: "Riyadh, KSA (Remote)",
    period: "Oct 2022 — Present",
    current: true,
    bullets: [
      {
        title: "Polyglot Distributed Architecture",
        body: "Architected an enterprise-grade travel booking ecosystem — FastAPI for high-concurrency flight/hotel search aggregation, Laravel for transactional booking and B2B financial ledgers.",
      },
      {
        title: "FastAPI Aggregation & Flight Fulfillment",
        body: "Engineered the provider integration engine using Factory Pattern and Unified Schema Mapper to standardize payloads across Amadeus, Hotelbeds and Flyadeal.",
      },
      {
        title: "Enterprise API Resilience",
        body: "Built a resilience overlay with Circuit Breakers, provider-aware adaptive throttling, and exponential backoff to protect infrastructure from supplier downtimes.",
      },
      {
        title: "Financial Core & B2B Accounting",
        body: "Designed a multi-currency conversion engine (Supplier → Base → Client) with B2B Pocket Management on ACID-compliant MySQL ledgers and a Payment Gateway Factory (Stripe, PayPal, B2B wallets).",
      },
      {
        title: "State Management & EDA",
        body: "Implemented a shared Redis State Machine bridging Python microservices and the PHP booking engine, with event-driven background queues for cross-service auto-booking.",
      },
      {
        title: "Next.js Multi-Tenant Frontend",
        body: "Spearheaded a decoupled multi-brand architecture on Vercel — Edge Middleware for subdomain routing, environment-driven S3 CSS injection, and centralized Axios interceptors.",
      },
      {
        title: "Mobile Multi-Branding",
        body: "Developed a React Native architecture with runtime environment injections to ship distinct white-labeled apps (Distinia, Tripklik) from a singular codebase.",
      },
    ],
    tags: ["FastAPI", "Laravel", "Next.js", "React Native", "Redis", "MySQL", "Meilisearch", "Docker", "Vercel"],
  },
  {
    role: "Senior Software Engineer",
    company: "Ivas",
    location: "Cairo, Egypt",
    period: "Feb 2019 — May 2022",
    bullets: [
      {
        title: "Enterprise Telecom Integrations",
        body: "Directed core backend development and infrastructure for large-scale Ringback Tone delivery networks deployed across major GCC telecom operators (KSA, UAE, Kuwait).",
      },
      {
        title: "Architecture Evolution",
        body: "Shifted production backends from MVC monoliths to clean layered architectures using Laravel and MongoDB for seamless integration flows.",
      },
      {
        title: "Team Mentorship",
        body: "Led backend squads in adopting best practices for API security, performance profiling, and maintainable code delivery.",
      },
      {
        title: "Real-Time Chat Applications",
        body: "Developed scalable chat applications with real-time messaging using WebSockets and Redis pub/sub.",
      },
    ],
    tags: ["Laravel", "MongoDB", "WebSockets", "Redis", "Telecom APIs", "Nginx"],
  },
  {
    role: "Back-End Developer",
    company: "Grand",
    location: "Cairo, Egypt",
    period: "Jun 2018 — Oct 2018",
    bullets: [
      {
        title: "RESTful APIs",
        body: "Developed APIs serving mobile and web applications with focus on performance and security, defining contracts with frontend teams.",
      },
    ],
    tags: ["PHP", "REST APIs", "MySQL"],
  },
  {
    role: "Full-Stack Developer",
    company: "LoadServ",
    location: "Cairo, Egypt",
    period: "Jan 2018 — May 2018",
    bullets: [
      {
        title: "Team Delivery",
        body: "Contributed to team projects focusing on modern web technologies and best practices, solving complex challenges across frontend and backend.",
      },
      {
        title: "Code Reviews & Knowledge Sharing",
        body: "Participated in code reviews and knowledge sharing sessions to elevate team quality.",
      },
    ],
    tags: ["JavaScript", "PHP", "MySQL"],
  },
];

export const education = {
  degree: "B.Sc. Computer Science",
  school: "Helwan University",
  location: "Cairo, Egypt",
  period: "2014 — 2018",
  project:
    "Graduation Project: Face Recognition child search platform built with Python, Flask, OpenCV, and Firebase.",
};

export const projects: Project[] = [
  {
    slug: "tripklik",
    name: "Tripklik",
    tagline: "Enterprise Travel Booking Ecosystem",
    description:
      "A polyglot distributed travel platform — high-concurrency flight/hotel aggregation in FastAPI, transactional booking and B2B financial ledgers in Laravel, multi-brand Next.js frontends, and white-labeled React Native mobile apps.",
    highlights: [
      "Factory-pattern provider engine unifying Amadeus, Hotelbeds & Flyadeal",
      "Circuit breakers + adaptive throttling for supplier resilience",
      "Multi-currency B2B ledgers with ACID-compliant MySQL",
      "Meilisearch autocomplete served via direct Nginx routing",
    ],
    stack: ["FastAPI", "Laravel", "Next.js", "React Native", "Redis", "MySQL", "Meilisearch"],
    cover: `${BASE}projects/tripklik/tripklik-cover.webp`,
    gallery: [
      `${BASE}projects/tripklik/tripklik-2.webp`,
      `${BASE}projects/tripklik/tripklik-3.webp`,
    ],
    video: `${BASE}projects/tripklik/tripklik-demo.mp4`,
    accent: "#7c5cff",
  },
  {
    slug: "7alm",
    name: "7alm Store",
    tagline: "AI-Powered Arabic E-Commerce Platform",
    description:
      "A production-ready, Arabic-first e-commerce platform with high-conversion landing page funnels, a bilingual RTL/LTR admin dashboard, tiered quantity pricing, and an n8n-orchestrated WhatsApp AI agent for CRM and order notifications.",
    highlights: [
      "Dynamic RTL product landing pages with SEO metadata",
      "Order lifecycle driven by a formal state machine",
      "Shipping provider factory (Bosta, ABS, Mylerz) with webhooks",
      "AI WhatsApp agent + campaign image generation via n8n",
    ],
    stack: ["Next.js 16", "TypeScript", "Supabase", "RTK Query", "n8n", "Evolution API"],
    cover: `${BASE}projects/7alm/7alm-4.webp`,
    gallery: [
      `${BASE}projects/7alm/7alm-cover.webp`,
      `${BASE}projects/7alm/7alm-2.webp`,
      `${BASE}projects/7alm/7alm-3.webp`,
      `${BASE}projects/7alm/7alm-5.webp`,
      `${BASE}projects/7alm/7alm-6.webp`,
      `${BASE}projects/7alm/7alm-7.webp`,
      `${BASE}projects/7alm/7alm-8.webp`,
    ],
    video: `${BASE}projects/7alm/7alm-demo.mp4`,
    accent: "#4cc9f0",
  },
  {
    slug: "automation",
    name: "Automation Workflows",
    tagline: "n8n AI Agents & Business Automation",
    description:
      "A suite of production n8n workflows that connect AI agents with business tools — social media engagement, WhatsApp CRM, calendar scheduling, task management, and content publishing — all running autonomously.",
    highlights: [
      "FB & Instagram AI agent — answers DMs and auto-replies to comments with context-aware responses",
      "WhatsApp automation via Evolution API — inbound AI handling, outbound CRM sends, and order-status notifications",
      "Telegram voice/text bot — transcribes briefs, researches campaign content, and publishes posts automatically",
      "Google Calendar event-request pipeline — validates, schedules, and confirms meetings hands-free",
      "Notion task automation — generates structured tasks from templates triggered by incoming events",
    ],
    stack: ["n8n", "Evolution API", "OpenAI", "Telegram Bot API", "Meta Graph API", "Notion API", "Google Calendar API"],
    cover: `${BASE}projects/automation/automation-cover.webp`,
    gallery: [
      `${BASE}projects/automation/automation-whatsapp.webp`,
      `${BASE}projects/automation/automation-telegram.webp`,
      `${BASE}projects/automation/automation-calendar.webp`,
      `${BASE}projects/automation/automation-notion.webp`,
    ],
    accent: "#ff6d5a",
  },
  {
    slug: "ratatouille",
    name: "Ratatouille",
    tagline: "Movie Discovery & Entertainment Platform",
    description:
      "A feature-rich movie discovery and streaming platform offering interactive trailer previews, rich media showcases, dynamic catalog filtering, and movie details.",
    highlights: [
      "Media-rich movie catalog & trailer video playback",
      "Dynamic genre filtering and search indexing",
      "Interactive movie details, cast lists, and recommendations",
    ],
    stack: ["React", "Node.js", "REST APIs", "MySQL"],
    cover: `${BASE}projects/ratatouille/ratatouille-cover.webp`,
    gallery: [
      `${BASE}projects/ratatouille/ratatouille-2.webp`,
      `${BASE}projects/ratatouille/ratatouille-3.webp`,
    ],
    video: `${BASE}projects/ratatouille/ratatouille-demo.mp4`,
    accent: "#f72585",
  },
  {
    slug: "kidnap",
    name: "Missing Children Finder",
    tagline: "Face Recognition Child Search Platform",
    description:
      "A graduation-project-turned-platform that helps locate missing children using facial recognition — matching reported sightings against a central database and notifying families in real time.",
    highlights: [
      "Face recognition matching pipeline with OpenCV",
      "Real-time sighting reports and notifications",
      "Central case database with search & filtering",
    ],
    stack: ["Python", "Flask", "OpenCV", "Firebase"],
    cover: `${BASE}projects/kidnap/kidnap-cover.webp`,
    gallery: [
      `${BASE}projects/kidnap/kidnap-2.webp`,
      `${BASE}projects/kidnap/kidnap-3.webp`,
    ],
    video: `${BASE}projects/kidnap/kidnap-demo.mp4`,
    accent: "#ffd166",
  },
  {
    slug: "chat-app",
    name: "Pro Chat",
    tagline: "Full-Stack Real-Time Messaging Platform",
    description:
      "A modern, scalable chat application featuring real-time messaging, voice messages with waveform visualizer, media sharing, and WebRTC video/voice calls — built with Laravel, Next.js 15, Node.js sockets, MySQL, Redis, and Docker.",
    highlights: [
      "WebRTC video & voice calls with QuickBlox — full-screen call UI, mute, camera toggle, PiP self view",
      "Real-time messaging via WebSockets & Laravel Echo with unread counters and live presence dots",
      "Voice messages with inline Wavesurfer.js waveform visualizer",
      "Soft 3D / Neumorphic design system — 30/70 sidebar/chat split with mobile-responsive composer",
      "Dockerized full-stack: Nginx, PHP-FPM, Redis, MySQL, Node.js socket server",
    ],
    stack: ["Laravel", "Next.js 15", "Node.js", "WebRTC", "Redis", "MySQL", "Docker", "WebSockets"],
    cover: `${BASE}projects/chat-app/chat-2.png`,
    gallery: [
      `${BASE}projects/chat-app/chat-2.png`,
      `${BASE}projects/chat-app/chat-3.png`,
      `${BASE}projects/chat-app/chat-4.png`,
      `${BASE}projects/chat-app/chat-5.png`,
      `${BASE}projects/chat-app/chat-6.png`,
    ],
    video: `${BASE}projects/chat-app/chat-demo.mp4`,
    accent: "#06b6d4",
  },
];
