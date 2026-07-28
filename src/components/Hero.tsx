import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { profile, stats, projects } from "../data/portfolio";

const float = (delay = 0, distance = 8, duration = 7) => ({
  animate: {
    y: [0, -distance, 0],
    transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const },
  },
});

const socials = [
  {
    label: "GitHub",
    href: profile.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.91c.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.53-1.32-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.13v3.16c0 .3.2.67.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5A2.49 2.49 0 1 1 5 8.48a2.49 2.49 0 0 1-.02-4.98ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.02c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V21h-3.85V9.75Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.73 2.64 4.19 3.7.59.26 1.04.41 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
      </svg>
    ),
  },
];

const statIcons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /></svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" /></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m8 6-6 6 6 6M16 6l6 6-6 6" /></svg>,
];

const particles = [
  { x: "8%", y: "22%", d: 0 },
  { x: "88%", y: "30%", d: 0.8 },
  { x: "16%", y: "68%", d: 1.6 },
  { x: "80%", y: "74%", d: 2.4 },
  { x: "50%", y: "12%", d: 3.2 },
  { x: "26%", y: "44%", d: 4 },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [avatarOk, setAvatarOk] = useState(true);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 20 });
  const sy = useSpring(my, { stiffness: 55, damping: 20 });

  const avatarX = useTransform(sx, [-1, 1], [-16, 16]);
  const avatarY = useTransform(sy, [-1, 1], [-10, 10]);
  const cardX = useTransform(sx, [-1, 1], [9, -9]);
  const cardY = useTransform(sy, [-1, 1], [6, -6]);

  const onMouseMove = (e: React.MouseEvent) => {
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
                    {s.icon}
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
              <motion.div
                className="orbit orbit-a"
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="orbit orbit-b"
                animate={{ rotate: -360 }}
                transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
              />

              {particles.map((p) => (
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

              <motion.div className="glass-card fc-exp" {...float(0.9, 6, 7)}>
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
                <span className="chip" title="React / React Native" style={{ color: "#61dafb" }}>⚛</span>
                <span className="chip" title="Python & FastAPI" style={{ color: "#6ee7b7" }}>Py</span>
                <span className="chip" title="Laravel / PHP" style={{ color: "#f87171" }}>La</span>
                <span className="chip" title="TypeScript" style={{ color: "#4cc9f0" }}>TS</span>
                <span className="chip" title="Next.js" style={{ color: "#e5e3ee" }}>N</span>
                <span className="chip dots">···</span>
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
                  <img src={featured.cover} alt={featured.name} loading="lazy" />
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
