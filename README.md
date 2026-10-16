# 👋 Hi, I'm Mohamed Mahmoud

### Technical Lead & Senior Software Engineer · Cairo, Egypt

**Senior Software Engineer & Technical Lead** with **7+ years** across backend, web and mobile, with Laravel as my core stack. At Tripklik I lead engineering and take part in the architecture of a travel booking platform serving **1M+ users a month** (FastAPI, Laravel, Next.js, React Native).

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

- **Technical Leadership:** Lead engineering on a travel booking platform serving 1M+ users a month and 5,000+ searches and orders: architecture, code review and release decisions across backend, web and mobile.
- **Concurrent Search Architecture:** Took part in designing concurrent search across all suppliers (Amadeus, Hotelbeds, Flyadeal) with background workers and queues; clients poll for results as suppliers respond, and circuit breakers isolate failing suppliers so the search returns what arrived.
- **Search & API Performance:** Hotel and flight results about 4× faster after indexing, polling and queue-based processing; API request/response about 5× faster after moving the Python search service from SQLAlchemy-based JSON to a Rust-based serializer.
- **Hotel Mapping:** Worked on the Central Station service that maps every hotel across all providers to a single record, so results from different suppliers merge and match quickly.
- **Order State Machine:** Moved order handling onto an explicit state machine and shipped B2B order operations end to end: void, refunds, PNR import, hold orders, invoices, balances and top-ups.
- **Laravel Booking & Finance Core:** Built eSIM, baggage protection and blind-choice fares behind feature flags and fixed markup calculations; worked on multi-currency conversion, agency wallets on ACID MySQL ledgers and a payment-gateway factory.
- **Multi-Tenant Scalability:** One codebase serves the consumer site, the agency portal and several brands, so onboarding a new agency or brand is configuration rather than new code.
- **Authentication & Permissions:** End-to-end auth across API and web: OTP sign-in, role-based permissions enforced in the API and at the edge, and scoped short-lived tokens for links from AI assistants.
- **AI Integration:** Built an MCP server connecting the booking engine to Claude and ChatGPT, and worked on a WhatsApp integration with Claude so agencies can continue a booking from chat.
- **Mobile Multi-Branding:** Led the React Native 0.85 + Expo SDK 56 modernization of the multi-brand apps (Destinia, Tripklik) with EAS multi-brand builds and per-brand runtime configuration.

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
