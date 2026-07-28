import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { profile, stats, projects } from "../data/portfolio";

const float = (delay = 0, distance = 8, duration = 7) => ({
  animate: {
    y: [0, -distance, 0],
    rotate: [0, 1.5, 0, -1.5, 0],
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
    label: "Phone",
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
];

const statIcons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5 3 21l4.5-1.5M14 4l6 6L8.5 21.5a2.1 2.1 0 0 1-3-3L17 7m-3-3 2.5-2.5a2.1 2.1 0 0 1 3 3L17 7m-3-3 3 3" /></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" /></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m8 6-6 6 6 6M16 6l6 6-6 6" /></svg>,
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [avatarOk, setAvatarOk] = useState(true);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  const avatarX = useTransform(sx, [-1, 1], [-12, 12]);
  const avatarY = useTransform(sy, [-1, 1], [-8, 8]);
  const cardX = useTransform(sx, [-1, 1], [10, -10]);
  const cardY = useTransform(sy, [-1, 1], [7, -7]);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  const featured = projects[0];

  return (
    <section className="hero" id="home" ref={ref} onMouseMove={onMouseMove}>
      <div className="container">
        <div className="hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p className="hero-eyebrow">
              <span className="dot" /> Hi, I'm Mohamed — available for opportunities
            </p>
            <h1>
              I build digital <span className="grad">experiences</span> people love.
            </h1>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions">
              <a className="btn-primary" href="#projects">
                View My Work
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a className="btn-ghost" href={profile.resume} target="_blank" rel="noreferrer">
                <span className="play">▸</span> View Résumé
              </a>
            </div>
            <div className="hero-socials">
              <span className="label">Find me on</span>
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
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <motion.div className="avatar-stage" style={{ x: avatarX, y: avatarY }}>
              <div className="avatar-glow" />
              <motion.div className="avatar-ring" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
              <motion.div className="avatar-ring-2" animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} />
              <motion.div className="avatar-frame" {...float(0, 10, 8)}>
                {avatarOk ? (
                  <img src={profile.avatar} alt={profile.name} onError={() => setAvatarOk(false)} />
                ) : (
                  <div className="avatar-fallback">
                    <span>MJ</span>
                  </div>
                )}
              </motion.div>
            </motion.div>

            <motion.div className="float-card fc-whatido" style={{ x: cardX, y: cardY }}>
              <motion.div {...float(0.6, 7, 6)}>
                <div className="fc-head">
                  <span className="fc-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 6-6 6 6 6M16 6l6 6-6 6" /></svg>
                  </span>
                  What I Do
                </div>
                <p>I architect backends, automate workflows and craft digital products end-to-end.</p>
                <a className="fc-link" href="#skills">
                  See Skills →
                </a>
              </motion.div>
            </motion.div>

            <motion.div className="float-card fc-experience" style={{ x: cardX, y: cardY }}>
              <motion.div {...float(1.1, 6, 6.5)}>
                <div className="big">7+</div>
                <div className="small">Years of Experience</div>
              </motion.div>
            </motion.div>

            <motion.div className="float-card fc-stack" style={{ x: cardX, y: cardY }}>
              <motion.div {...float(1.6, 8, 7.5)}>
                <div className="fc-head">
                  <span className="fc-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                  </span>
                  Tech Stack
                </div>
                <div className="chips">
                  <span className="chip" style={{ color: "#61dafb" }}>Re</span>
                  <span className="chip" style={{ color: "#6ee7b7" }}>Py</span>
                  <span className="chip" style={{ color: "#f472b6" }}>La</span>
                  <span className="chip" style={{ color: "#4cc9f0" }}>TS</span>
                  <span className="chip" style={{ color: "#9d97b8" }}>···</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="float-card fc-featured" style={{ x: cardX, y: cardY }}>
              <motion.div {...float(2.1, 7, 8.5)}>
                <div className="fc-head">
                  <span className="fc-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 9h18M9 21V9" /></svg>
                  </span>
                  Featured Project
                </div>
                <p>
                  <strong style={{ color: "var(--text)" }}>{featured.name}</strong> — {featured.tagline}
                </p>
                <img src={featured.cover} alt={featured.name} loading="lazy" />
                <a className="fc-link" href="#projects">
                  View Project →
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="stats-bar"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
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
