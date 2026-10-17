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
  email: "mohamedjs408@gmail.com",
  phone: "+20 111 231 0567",
  location: "Cairo, Egypt",
  github: "https://github.com/mohamedjs",
  linkedin: "https://www.linkedin.com/in/mohamed-mahmoud-19ab47122",
  avatar: `${BASE}avatar.webp`,
  resume: `${BASE}mohamed-mahmoud-cv.pdf`,
  summary:
    "Technical Lead behind a travel booking platform serving 1M+ users a month. Laravel at the core; I design and build across backend, web and mobile, from architecture to release.",
};

export const stats = [
  { value: "1M+", label: "Monthly Users" },
  { value: "5,000+", label: "Searches & Orders" },
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
    role: "Technical Lead (since Oct 2024) · Senior Software Engineer",
    company: "Tripklik",
    location: "Riyadh, KSA (Remote)",
    period: "Oct 2021 — Present",
    current: true,
    bullets: [
      {
        title: "Technical Leadership",
        body: "Lead engineering on a travel booking platform serving 1M+ users a month and 5,000+ searches and orders: architecture, code review and release decisions across backend, web and mobile.",
      },
      {
        title: "Concurrent Search Architecture",
        body: "Took part in designing concurrent search across all suppliers (Amadeus, Hotelbeds, Flyadeal) with background workers and queues; clients poll for results as suppliers respond, and circuit breakers isolate failing suppliers so the search returns what arrived.",
      },
      {
        title: "Search & API Performance",
        body: "Hotel and flight results about 4× faster after indexing, polling and queue-based processing; API request/response about 5× faster after moving the Python search service from SQLAlchemy-based JSON to a Rust-based serializer.",
      },
      {
        title: "Hotel Mapping",
        body: "Worked on the Central Station service that maps every hotel across all providers to a single record, so results from different suppliers merge and match quickly.",
      },
      {
        title: "Order State Machine",
        body: "Moved order handling onto an explicit state machine and shipped B2B order operations end to end: void, refunds, PNR import, hold orders, invoices, balances and top-ups.",
      },
      {
        title: "Laravel Booking & Finance Core",
        body: "Built eSIM, baggage protection and blind-choice fares behind feature flags and fixed markup calculations; worked on multi-currency conversion, agency wallets on ACID MySQL ledgers and a payment-gateway factory.",
      },
      {
        title: "Multi-Tenant Scalability",
        body: "One codebase serves the consumer site, the agency portal and several brands, so onboarding a new agency or brand is configuration rather than new code.",
      },
      {
        title: "Authentication & Permissions",
        body: "End-to-end auth across API and web: OTP sign-in, role-based permissions enforced in the API and at the edge, and scoped short-lived tokens for links from AI assistants.",
      },
      {
        title: "AI Integration",
        body: "Built an MCP server connecting the booking engine to Claude and ChatGPT, and worked on a WhatsApp integration with Claude so agencies can continue a booking from chat.",
      },
      {
        title: "Mobile Multi-Branding",
        body: "Led the React Native 0.85 + Expo SDK 56 modernization of the multi-brand apps (Destinia, Tripklik) with EAS multi-brand builds and per-brand runtime configuration.",
      },
    ],
    tags: ["FastAPI", "Laravel", "Next.js", "React Native", "Redis", "MySQL", "Meilisearch", "Docker", "Vercel"],
  },
  {
    role: "Senior Software Engineer",
    company: "Ivas",
    location: "Cairo, Egypt",
    period: "Feb 2019 — Jun 2021",
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
    period: "Jun 2018 — Dec 2018",
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
  {
    slug: "destinia",
    name: "Destinia Mobile",
    tagline: "White-Label Travel & Flight Booking App",
    description:
      "A high-performance React Native mobile travel application engineered for flight, hotel, and holiday reservations with real-time flight search, localized currency selection, and seamless booking flows.",
    highlights: [
      "White-label React Native app architecture with dynamic runtime branding injections",
      "Real-time high-concurrency flight and hotel booking search integration",
      "Multi-currency B2B & B2C wallet management and localized payment gateways",
      "Smooth mobile UX with interactive itinerary selection and instant e-ticket generation",
    ],
    stack: ["React Native", "Expo", "TypeScript", "FastAPI", "Redux Toolkit", "Laravel"],
    cover: `${BASE}projects/destinia/destinia-cover.png`,
    gallery: [
      `${BASE}projects/destinia/destinia-2.png`,
      `${BASE}projects/destinia/destinia-3.png`,
      `${BASE}projects/destinia/destinia-4.png`,
      `${BASE}projects/destinia/destinia-5.png`,
      `${BASE}projects/destinia/destinia-6.png`,
    ],
    video: `${BASE}projects/destinia/destinia-demo.mp4`,
    accent: "#3b82f6",
  },
  {
    slug: "mazaya",
    name: "Mazaya Travel & Rewards",
    tagline: "Mobile Travel Deals & Package Booking",
    description:
      "A modern React Native mobile app engineered for travel deals, exclusive partner rewards, and hotel/flight package bookings with instant discount redemptions and real-time order tracking.",
    highlights: [
      "Custom travel package builder & exclusive member rewards engine",
      "Interactive search with filters for flights, hotels, and holiday activities",
      "Push notifications & real-time trip status updates",
      "Optimized mobile UI/UX with intuitive checkout and digital voucher storage",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "REST APIs", "Node.js"],
    cover: `${BASE}projects/mazaya/mazaya-cover.png`,
    gallery: [
      `${BASE}projects/mazaya/mazaya-2.png`,
      `${BASE}projects/mazaya/mazaya-3.png`,
      `${BASE}projects/mazaya/mazaya-4.png`,
      `${BASE}projects/mazaya/mazaya-5.png`,
    ],
    video: `${BASE}projects/mazaya/mazaya-demo.mp4`,
    accent: "#10b981",
  },
];
