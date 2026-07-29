import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type Project } from "../data/portfolio";

type Media =
  | { kind: "image"; src: string }
  | { kind: "video"; src: string };

function mediaOf(p: Project): Media[] {
  const items: Media[] = [{ kind: "image", src: p.cover }, ...p.gallery.map((src) => ({ kind: "image" as const, src }))];
  if (p.video) items.push({ kind: "video", src: p.video });
  return items;
}

function Lightbox({
  project,
  index,
  onClose,
  onNav,
}: {
  project: Project;
  index: number;
  onClose: () => void;
  onNav: (dir: 1 | -1) => void;
}) {
  const items = mediaOf(project);
  const item = items[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNav]);

  return (
    <motion.div
      className="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="lightbox-content"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="lightbox-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        {items.length > 1 && (
          <>
            <button className="lightbox-nav prev" onClick={() => onNav(-1)} aria-label="Previous">
              ‹
            </button>
            <button className="lightbox-nav next" onClick={() => onNav(1)} aria-label="Next">
              ›
            </button>
          </>
        )}
        {item.kind === "image" ? (
          <img src={item.src} alt={`${project.name} screenshot ${index + 1}`} loading="lazy" decoding="async" />
        ) : (
          <video
            src={item.src}
            poster={project.cover}
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          />
        )}
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState<number | null>(null);
  const items = mediaOf(project);

  const nav = useCallback(
    (dir: 1 | -1) => setOpen((cur) => (cur === null ? cur : (cur + dir + items.length) % items.length)),
    [items.length],
  );

  return (
    <motion.article
      className="project-card"
      style={{ "--pa": project.accent } as React.CSSProperties}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: (index % 2) * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="project-media" onClick={() => setOpen(0)}>
        <img src={project.cover} alt={project.name} loading="lazy" decoding="async" />
        {project.video && (
          <span
            className="play-badge"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(items.length - 1);
            }}
          >
            ▶ Watch Demo
          </span>
        )}
      </div>
      <div className="project-body">
        <h3 className="project-name">
          <span className="dot" />
          {project.name}
        </h3>
        <div className="project-tagline">{project.tagline}</div>
        <p className="project-desc">{project.description}</p>
        <ul className="project-highlights">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <div className="project-stack">
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <div className="project-gallery">
          {items.map((m, i) =>
            m.kind === "image" ? (
              <button className="thumb" key={m.src} onClick={() => setOpen(i)} aria-label={`Open screenshot ${i + 1}`}>
                <img src={m.src} alt="" loading="lazy" decoding="async" />
              </button>
            ) : (
              <button className="thumb video-thumb" key={m.src} onClick={() => setOpen(i)} aria-label="Play demo video">
                ▶
              </button>
            ),
          )}
        </div>
      </div>
      <AnimatePresence>
        {open !== null && (
          <Lightbox project={project} index={open} onClose={() => setOpen(null)} onNav={nav} />
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">
            Featured <span className="grad">Projects</span>
          </h2>
        </motion.div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
