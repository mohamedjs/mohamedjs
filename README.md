# 👋 Hi, I'm Mohamed Mahmoud

### Technical Lead & Senior Software Engineer · Cairo, Egypt

**Technical Lead & full-stack engineer** with **7+ years** across web, backend and mobile. At Tripklik I lead engineering and take part in the architecture of a travel booking platform serving **1M+ users a month** (FastAPI, Laravel, Next.js, React Native).

🌐 **Live Portfolio → [mohamedjs.github.io/mohamedjs](https://mohamedjs.github.io/mohamedjs/)**

---

## � At a Glance

| | |
|---|---|
| 👥 **1M+** Monthly Users Served | 💼 **7+** Years Experience |
| 🌍 **4** Countries Served (🇪🇬 🇸🇦 🇦🇪 🇰🇼) | 🧩 **8+** Design Patterns in production |

---

## 🛠️ Technical Skills

**Backend & APIs**
`Python` `FastAPI` `PHP` `Laravel 8+` `Node.js` `REST APIs`

**System Architecture**
`Polyglot Microservices` `Multi-Tenant SaaS` `B2B/B2C Systems` `Event-Driven Architecture (EDA)`

**Design Patterns**
`Factory` `Circuit Breaker` `Unified Schema` `Adapter` `Strategy` `Facade` `Decorator` `Builder`

**Frontend**
`Next.js` `React.js` `Redux` `RTK Query` `Vercel Edge Middleware`

**Mobile**
`React Native` `Expo` `EAS Deployment` `White-Label Builds`

**Databases & State**
`MySQL (ACID)` `Redis (State Machines)` `Meilisearch (Inverted Index)` `MongoDB`

**Infrastructure**
`Docker` `AWS / S3` `Nginx` `Cloudflare` `CI/CD Pipelines`

**AI & Automation**
`n8n Workflows` `AI Agents` `Evolution API (WhatsApp)` `Telegram Bots` `Meta Graph API` `OpenAI`

---

## 🚀 Featured Projects

### ✈️ Tripklik — Enterprise Travel Booking Ecosystem
A polyglot distributed travel platform: high-concurrency flight/hotel aggregation in FastAPI, transactional booking and B2B financial ledgers in Laravel, multi-brand Next.js frontends, and white-labeled React Native apps.
- Factory-pattern provider engine unifying **Amadeus, Hotelbeds & Flyadeal**
- Circuit breakers + adaptive throttling for supplier resilience
- Multi-currency B2B ledgers on ACID-compliant MySQL
- Meilisearch autocomplete served via direct Nginx routing

`FastAPI` `Laravel` `Next.js` `React Native` `Redis` `MySQL` `Meilisearch`

### 🛒 7alm Store — AI-Powered Arabic E-Commerce Platform
A production-ready, Arabic-first e-commerce platform with high-conversion landing funnels, a bilingual RTL/LTR admin dashboard, tiered quantity pricing, and an n8n-orchestrated WhatsApp AI agent.
- Dynamic RTL product landing pages with SEO metadata
- Order lifecycle driven by a formal **state machine**
- Shipping provider **factory** (Bosta, ABS, Mylerz) with webhooks
- AI WhatsApp agent + campaign image generation via n8n

`Next.js 16` `TypeScript` `Supabase` `RTK Query` `n8n` `Evolution API`

### 🤖 Automation Workflows — n8n AI Agents
A suite of production n8n workflows connecting AI agents with business tools, running autonomously.
- **FB & Instagram agent** — answers DMs and auto-replies to comments with context-aware responses
- **WhatsApp automation** via Evolution API — inbound AI handling, outbound CRM sends, order-status notifications
- **Telegram voice/text bot** — transcribes briefs, researches campaign content, and publishes posts
- **Google Calendar pipeline** — validates, schedules and confirms meetings hands-free
- **Notion task automation** — generates structured tasks from templates on incoming events

`n8n` `Evolution API` `OpenAI` `Telegram Bot API` `Meta Graph API` `Notion API` `Google Calendar API`

### 🍽️ Ratatouille — Restaurant & Food Experience Platform
Media-driven menu browsing, end-to-end ordering flow, and an admin back-office for content and operations.

`React` `Node.js` `REST APIs` `MySQL`

### 🔍 Missing Children Finder — Face Recognition Platform
Helps locate missing children using facial recognition, matching reported sightings against a central database and notifying families in real time.

`Python` `Flask` `OpenCV` `Firebase`

---

## 💼 Professional Experience

### Technical Lead *(Oct 2024 – Present)* & Senior Software Engineer *(Oct 2022 – Oct 2024)*
**Tripklik** — Riyadh, KSA (Remote)

- **Technical Leadership:** Lead engineering on a platform serving 1M+ users a month and 5,000+ searches and orders: architecture, code review and release decisions.
- **Platform Architecture:** Take part in architecture and design patterns across the FastAPI supplier-integration layer (Amadeus, Hotelbeds, Flyadeal) and the Laravel booking and B2B finance core.
- **Design Reviews:** Took part in the design of supplier resilience (circuit breakers, adaptive throttling, backoff), multi-currency B2B wallets on ACID ledgers, and event-driven queues.
- **B2B Order Operations:** Shipped void, refunds, PNR import, hold orders, invoices and role-based permissions.
- **Next.js Multi-Tenant Frontend:** Spearheaded a decoupled multi-brand architecture on Vercel with Edge Middleware for subdomain routing and environment-driven S3 CSS asset injection.
- **High-Speed Autocomplete:** Integrated Meilisearch as an inverted index service via direct Nginx routing.
- **Mobile Multi-Branding (Destinia, Tripklik):** Developed a React Native architecture with runtime environment injections for white-labeled builds from a singular codebase.

### Senior Software Engineer
**Ivas** — Cairo, Egypt · *Feb 2019 – May 2022*

- **Enterprise Telecom Integrations:** Directed core backend development for large-scale Ringback Tone delivery networks across major GCC telecom operators (KSA, UAE, Kuwait).
- **Architecture Evolution:** Shifted production backends from MVC monoliths to clean layered architectures using Laravel and MongoDB.
- **Team Mentorship:** Led backend squads in adopting best practices for API security, performance profiling, and maintainable code delivery.

### Back-End Developer
**Grand** — Cairo, Egypt · *Jun 2018 – Oct 2018*

- Developed RESTful APIs serving mobile and web applications with a focus on performance and security.
- Collaborated with frontend teams to define API contracts and ensure optimal data flow.

### Full-Stack Developer
**LoadServ for Integrated Business Solutions** — Cairo, Egypt · *Jan 2018 – May 2018*

- Contributed to team projects using modern web technologies and best practices.
- Solved complex technical challenges across both frontend and backend.

---

## 🎓 Education

**B.Sc. Computer Science** — Helwan University, Cairo, Egypt · *2014 – 2018*
Graduation Project: Face Recognition child search platform built with Python, Flask, OpenCV and Firebase.

---

## 🧑‍� About This Portfolio

This site is built with **React 18 + TypeScript + Vite + Framer Motion** and deployed to GitHub Pages via GitHub Actions.

```bash
npm install     # install dependencies
npm run dev     # local dev server
npm run build   # type-check + production build to dist/
npm run preview # preview the production build
```

**Deployment:** pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. The Vite `base` is set to `/mohamedjs/` to match the repository path.

**Project structure**

```
src/
├── components/     # Nav, Hero, Projects, Sections
├── data/portfolio.ts   # single source of truth for all content
└── index.css       # design tokens + all styling
public/
├── avatar.png      # hero avatar
├── mohamed-mahmoud-cv.pdf
└── projects/<slug>/    # screenshots + demo videos
```

To update content, edit `src/data/portfolio.ts` — no component changes required.

---

## 📫 Let's Connect

- 🌐 **Portfolio:** [mohamedjs.github.io/mohamedjs](https://mohamedjs.github.io/mohamedjs/)
- 💼 **LinkedIn:** [mohamed-mahmoud-19ab47122](https://www.linkedin.com/in/mohamed-mahmoud-19ab47122/)
- 📧 **Email:** [mohamedjs408@gmail.com](mailto:mohamedjs408@gmail.com)
- 📱 **Phone / WhatsApp:** [+20 111 231 0567](https://wa.me/201112310567)
- 📍 **Location:** Cairo, Egypt — open to remote opportunities

---

*Always open to collaboration, code reviews, and exciting new challenges!*
