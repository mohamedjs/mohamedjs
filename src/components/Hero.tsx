import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { profile, stats, projects } from "../data/portfolio";
import Icon, { type IconName } from "./Icon";

/** True on touch-primary devices (phones/tablets). Checked once at module load. */
const IS_MOBILE =
  typeof window !== "undefined" &&
  (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);

const float = (delay = 0, distance = 8, duration = 7) =>
  IS_MOBILE
    ? {} // no infinite float on mobile
    : {
        animate: {
          y: [0, -distance, 0],
          transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const },
        },
      };

const socials: { label: string; href: string; icon: IconName }[] = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "gmail" },
  { label: "WhatsApp", href: `https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`, icon: "whatsapp" },
];

const techChips: { name: IconName; title: string }[] = [
  { name: "react", title: "React / React Native" },
  { name: "python", title: "Python & FastAPI" },
  { name: "laravel", title: "Laravel / PHP" },
  { name: "typescript", title: "TypeScript" },
  { name: "nextdotjs", title: "Next.js" },
  { name: "nodedotjs", title: "Node.js" },
  { name: "redux", title: "Redux / RTK Query" },
  { name: "docker", title: "Docker" },
  { name: "supabase", title: "Supabase" },
  { name: "n8n", title: "n8n" },
];

const statIcons = [
  // Users Served — users/people
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  // Orders / Day — shopping bag
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" /></svg>,
  // Years Experience — clock
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
  // Countries Served — globe
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" /></svg>,
];

const particles = [
  { x: "8%", y: "22%", d: 0 },
  { x: "88%", y: "30%", d: 0.8 },
  { x: "50%", y: "12%", d: 3.2 },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [avatarOk, setAvatarOk] = useState(true);
  const reducedMotion = useReducedMotion();
  const skipAnimations = IS_MOBILE || reducedMotion;

  // Enable smooth scrolling after first paint (avoids Safari blocking initial render)
  useEffect(() => {
    requestAnimationFrame(() => document.documentElement.classList.add("smooth-scroll"));
  }, []);

  // Parallax mouse tracking — only on desktop (mobile has no mouse & springs waste GPU)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 20 });
  const sy = useSpring(my, { stiffness: 55, damping: 20 });

  const avatarX = useTransform(sx, [-1, 1], IS_MOBILE ? [0, 0] : [-16, 16]);
  const avatarY = useTransform(sy, [-1, 1], IS_MOBILE ? [0, 0] : [-10, 10]);
  const cardX = useTransform(sx, [-1, 1], IS_MOBILE ? [0, 0] : [9, -9]);
  const cardY = useTransform(sy, [-1, 1], IS_MOBILE ? [0, 0] : [6, -6]);

  const onMouseMove = IS_MOBILE
    ? undefined
    : (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
        my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
      };

  const featured = projects.find((p) => p.slug === "7alm") ?? projects[0];

  return (
    <section className="hero" id="home" ref={ref} onMouseMove={onMouseMove}>
      <div className="container">
        <div className="hero-grid">
          {/* ── Left: copy ─────────────────────────── */}
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p className="hero-eyebrow">
              <span className="wave">👋</span> Hi, I'm Mohamed
            </p>
            <h1>
              I build digital
              <br />
              <span className="grad">experiences</span>
              <br />
              people love.
            </h1>
            <p className="hero-summary">
              Technical Lead &amp; automation lover.
              <br />
              I architect fast, fault-tolerant backends
              <br />
              and beautiful web applications.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="#projects">
                View My Work
                <span className="btn-arrow">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
              <a className="btn-ghost" href={profile.resume} target="_blank" rel="noreferrer">
                <span className="play">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 4v16l13-8z" />
                  </svg>
                </span>
                View Résumé
              </a>
            </div>
            <div className="hero-socials">
              <span className="label">
                <span className="tick" /> Find me on <span className="tick" />
              </span>
              <div className="social-row">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    className="social-btn"
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={s.label}
                    title={s.label}
                  >
                    <Icon name={s.icon} size={19} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Center: avatar ─────────────────────── */}
          <motion.div
            className="hero-avatar"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <motion.div className="avatar-stage" style={{ x: avatarX, y: avatarY }}>
              <div className="stage-glow" />
              {!skipAnimations && (
                <motion.div
                  className="orbit orbit-a"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                />
              )}
              {!skipAnimations && (
                <motion.div
                  className="orbit orbit-b"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
                />
              )}

              {!skipAnimations && particles.map((p) => (
                <motion.span
                  key={p.x + p.y}
                  className="particle"
                  style={{ left: p.x, top: p.y }}
                  animate={{ y: [0, -18, 0], opacity: [0.25, 1, 0.25] }}
                  transition={{ duration: 5, delay: p.d, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}

              <motion.div className="avatar-media" {...float(0, 12, 8)}>
                {avatarOk ? (
                  <img src={profile.avatar} alt={profile.name} onError={() => setAvatarOk(false)} />
                ) : (
                  <div className="avatar-fallback">
                    <span>MJ</span>
                  </div>
                )}
              </motion.div>

              <div className="podium">
                <span className="podium-ring" />
                <span className="podium-core" />
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: floating cards ──────────────── */}
          <motion.div
            className="hero-cards"
            style={{ x: cardX, y: cardY }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="cards-row">
              <motion.div className="glass-card fc-whatido" {...float(0.4, 7, 6.5)}>
                <div className="fc-head">
                  <span className="fc-dot" />
                  What I Do
                </div>
                <span className="fc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
                  </svg>
                </span>
                <p>I build web apps, automate workflows and create amazing digital products.</p>
                <a className="fc-link" href="#skills">
                  See Skills
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </motion.div>

              <motion.div className="glass-card fc-exp" {...float(0.4, 7, 6.5)}>
                <div className="fc-head">
                  <span className="fc-mini">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </span>
                  Experience
                </div>
                <div className="exp-figure">
                  <span className="big">7+</span>
                  <span className="small">
                    Years
                    <br />
                    Working
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div className="glass-card fc-stack" {...float(1.4, 8, 7.5)}>
              <div className="fc-head">
                <span className="fc-mini">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </span>
                Tech Stack
              </div>
              <div className="chips">
                {techChips.map((t) => (
                  <span className="chip" key={t.name} title={t.title}>
                    <Icon name={t.name} size={20} />
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div className="glass-card fc-featured" {...float(1.9, 7, 8)}>
              <div className="fc-head">
                <span className="fc-mini">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                  </svg>
                </span>
                Featured Project
              </div>
              <div className="feat-body">
                <div className="feat-text">
                  <strong>{featured.name}</strong>
                  <p>{featured.tagline}</p>
                  <a className="fc-link" href="#projects">
                    View Project
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
                <div className="feat-shot">
                  <img src={featured.cover} alt={featured.name} loading="lazy" decoding="async" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats bar ────────────────────────────── */}
        <motion.div
          className="stats-bar"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {stats.map((s, i) => (
            <div className="stat" key={s.label}>
              <span className="icon">{statIcons[i % statIcons.length]}</span>
              <div className="num">{s.value}</div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
