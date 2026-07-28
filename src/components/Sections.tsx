import { motion } from "framer-motion";
import { skillGroups, experiences, education, profile } from "../data/portfolio";

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1] as const },
};

function SectionHeader({ label, title }: { label: string; title: React.ReactNode }) {
  return (
    <motion.div className="section-header" {...reveal}>
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeader label="Expertise" title={<>Technical <span className="grad">Skills</span></>} />
        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <motion.div
              className="skill-card"
              key={g.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: (i % 3) * 0.08 }}
            >
              <h3>{g.title}</h3>
              <div className="skill-tags">
                {g.skills.map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeader label="Career" title={<>Professional <span className="grad">Experience</span></>} />
        <div className="timeline">
          {experiences.map((e) => (
            <motion.article className="exp-card" key={e.company + e.period} {...reveal}>
              <div className="exp-top">
                <div>
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company">
                    {e.company} — {e.location}
                  </div>
                </div>
                <div className="exp-meta">
                  {e.current && <span className="badge">Current</span>}
                  <br />
                  {e.period}
                </div>
              </div>
              <ul className="exp-bullets">
                {e.bullets.map((b) => (
                  <li key={b.title}>
                    <strong>{b.title}:</strong> {b.body}
                  </li>
                ))}
              </ul>
              <div className="exp-tags">
                {e.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeader label="Background" title={<>Education & <span className="grad">Foundations</span></>} />
        <motion.div className="edu-card" {...reveal}>
          <div>
            <h3>{education.degree}</h3>
            <div className="school">
              {education.school} — {education.location}
            </div>
            <p className="project">{education.project}</p>
          </div>
          <div className="period">{education.period}</div>
        </motion.div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div className="contact-wrap" {...reveal}>
          <span className="section-label">Get in touch</span>
          <h2 className="section-title">
            Let's build something <span className="grad">great</span> together.
          </h2>
          <p>
            I'm always open to discussing new projects, architecture challenges, or leadership
            opportunities. Whether you have a question or just want to say hi — my inbox is open.
          </p>
          <div className="contact-actions">
            <a className="btn-primary" href={`mailto:${profile.email}`}>
              Say Hello
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a className="btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
            <a className="btn-ghost" href={profile.resume} target="_blank" rel="noreferrer">
              Download Résumé
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name} — Crafted with React & Framer Motion
        </span>
        <span>{profile.location} · Open to remote opportunities</span>
      </div>
    </footer>
  );
}
