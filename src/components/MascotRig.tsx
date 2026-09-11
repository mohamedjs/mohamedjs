import { useEffect, useRef, useState } from "react";
import {
  BULB,
  REST,
  ROPE_GRIP,
  ROPE_W,
  SWING,
  poseBox,
  rigFrame,
} from "./rigFrame";

/** Same list + observer config as Nav, so the lamp always lights the
 *  section the nav is highlighting. */
const SECTIONS = ["#home", "#skills", "#experience", "#projects", "#education", "#contact"];

const url = (src: string) => `${import.meta.env.BASE_URL}${src}`;

export default function MascotRig() {
  const figRef = useRef<HTMLDivElement>(null);
  const restRef = useRef<HTMLImageElement>(null);
  const swingRef = useRef<HTMLImageElement>(null);
  const swingLightRef = useRef<HTMLImageElement>(null);
  const ropeRef = useRef<SVGPathElement>(null);
  const coneRef = useRef<SVGPathElement>(null);
  const poolRef = useRef<SVGCircleElement>(null);
  const coneGradRef = useRef<SVGLinearGradientElement>(null);
  const coneGradLightRef = useRef<SVGLinearGradientElement>(null);
  const glowRef = useRef<SVGCircleElement>(null);
  /** if the swinging artwork is missing, keep the resting pose rather than
   *  leaving a hole where the character should be */
  const [hasSwing, setHasSwing] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(max-width: 860px), (prefers-reduced-motion: reduce)").matches) return;

    const stage = document.querySelector<HTMLElement>(".avatar-media");
    const fig = figRef.current;
    if (!stage || !fig) return;

    /** Home is measured in DOCUMENT coords so a deep link (#projects) still
     *  resolves the hero position. `.avatar-stage` carries a live pointer
     *  spring and `.avatar-media` a float loop, so use the untransformed
     *  offset box rather than the animated rect. */
    let homeX = 0;
    let homeDocY = 0;
    let headUp = 0;
    let footDrop = 0;
    let bulb = { x: 0, y: 0 };
    let grip = { x: 0, y: 0 };
    let ropeW = 3;

    const measure = () => {
      let el: HTMLElement | null = stage;
      let left = 0;
      let top = 0;
      while (el) {
        left += el.offsetLeft;
        top += el.offsetTop;
        el = el.offsetParent as HTMLElement | null;
      }

      // reproduce the bitmap's own layout: object-fit:contain, bottom-centred
      const bw = stage.offsetWidth;
      const bh = stage.offsetHeight;
      const fit = Math.min(bw / REST.nw, bh / REST.nh);
      const dw = REST.nw * fit;
      const dh = REST.nh * fit;

      // his visor is exactly this wide on screen today; both poses get sized
      // to match it, which is what keeps his head still through the crossfade
      const visorPx = dw * REST.vw;
      homeX = left + (bw - dw) / 2 + dw * REST.vcx;
      homeDocY = top + (bh - dh) + dh * REST.vcy;

      const r = poseBox(REST, visorPx);
      const w = poseBox(SWING, visorPx);
      for (const [img, b] of [
        [restRef.current, r],
        [swingRef.current, w],
        [swingLightRef.current, w],
      ] as const) {
        if (!img) continue;
        img.style.width = `${b.width}px`;
        img.style.height = `${b.height}px`;
        img.style.left = `${b.left}px`;
        img.style.top = `${b.top}px`;
      }

      // keep whichever pose reaches furthest on screen
      headUp = Math.max(r.headUp, w.headUp);
      footDrop = Math.max(r.footDrop, w.footDrop);
      bulb = { x: w.left + BULB.x * w.width, y: w.top + BULB.y * w.height };
      grip = { x: w.left + ROPE_GRIP.x * w.width, y: w.top + ROPE_GRIP.y * w.height };
      ropeW = w.width * ROPE_W;
    };
    measure();
    document.documentElement.classList.add("mascot-rig-on");

    let raf = 0;
    let flash = 0;
    const tgt = { px: innerWidth * 0.5, py: innerHeight * 0.5 };
    const cur = { x: homeX, y: homeDocY, px: tgt.px, py: tgt.py };

    const onMove = (e: PointerEvent) => {
      tgt.px = e.clientX;
      tgt.py = e.clientY;
    };
    addEventListener("pointermove", onMove, { passive: true });
    addEventListener("resize", measure);

    // --- active section -> lamp sweep ------------------------------------
    let lit: Element | null = null;
    let litTimer = 0;
    const els = SECTIONS.map((s) => document.querySelector(s)).filter(
      (el): el is Element => Boolean(el),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible || visible.target === lit) return;
        lit?.classList.remove("lamp-lit");
        lit = visible.target;
        lit.classList.add("lamp-lit");
        flash = 1;
        clearTimeout(litTimer);
        litTimer = window.setTimeout(() => lit?.classList.remove("lamp-lit"), 1200);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => observer.observe(el));

    // --- render loop ------------------------------------------------------
    const tick = () => {
      raf = requestAnimationFrame(tick);

      const f = rigFrame({
        scrollY,
        scrollable: Math.max(1, document.documentElement.scrollHeight - innerHeight),
        vh: innerHeight,
        homeX,
        homeDocY,
        headUp,
        footDrop,
        px: tgt.px,
        // he only sways once he is actually on the rope
        sway: Math.sin(performance.now() / 1500) * 10,
      });

      cur.x += (f.x - cur.x) * 0.09;
      cur.y += (f.y - cur.y) * 0.12;
      cur.px += (tgt.px - cur.px) * 0.16;
      cur.py += (tgt.py - cur.py) * 0.16;
      flash *= 0.95;

      fig.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0) scale(${f.k})`;
      // CSS turns this into the crossfade AND picks the themed swing artwork
      fig.style.setProperty("--pose-t", String(f.t));

      // the whole strand is ours to draw: anchored off the top of the page,
      // running down into his raised fist
      const ex = cur.x + grip.x * f.k;
      const ey = cur.y + grip.y * f.k;
      const rope = ropeRef.current;
      if (rope) {
        rope.setAttribute("d", `M ${ex + 70 * f.k} -24 Q ${ex + 46 * f.k} ${ey * 0.5} ${ex} ${ey}`);
        rope.setAttribute("stroke-width", String(ropeW * f.k));
        rope.style.opacity = String(f.t);
      }

      // the bulb throws light at wherever the cursor is
      const bx = cur.x + bulb.x * f.k;
      const by = cur.y + bulb.y * f.k;
      const dx = cur.px - bx;
      const dy = cur.py - by;
      const dist = Math.hypot(dx, dy) || 1;
      const spread = 22 + dist * 0.26;
      const nx = (-dy / dist) * spread;
      const ny = (dx / dist) * spread;
      coneRef.current?.setAttribute(
        "d",
        `M ${bx} ${by} L ${cur.px + nx} ${cur.py + ny} L ${cur.px - nx} ${cur.py - ny} Z`,
      );
      // both themed cone gradients track the beam; CSS picks which one paints
      for (const cg of [coneGradRef.current, coneGradLightRef.current]) {
        if (!cg) continue;
        cg.setAttribute("x1", String(bx));
        cg.setAttribute("y1", String(by));
        cg.setAttribute("x2", String(cur.px));
        cg.setAttribute("y2", String(cur.py));
      }

      const lampOn = f.t * (0.72 + flash * 0.28);
      if (coneRef.current) coneRef.current.style.opacity = String(lampOn * 0.8);
      poolRef.current?.setAttribute("cx", String(bx));
      poolRef.current?.setAttribute("cy", String(by));
      poolRef.current?.setAttribute("r", String(210 + flash * 150));
      if (poolRef.current) poolRef.current.style.opacity = String(lampOn);
      glowRef.current?.setAttribute("cx", String(cur.px));
      glowRef.current?.setAttribute("cy", String(cur.py));
      if (glowRef.current) glowRef.current.style.opacity = String(lampOn);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(litTimer);
      observer.disconnect();
      removeEventListener("pointermove", onMove);
      removeEventListener("resize", measure);
      lit?.classList.remove("lamp-lit");
      document.documentElement.classList.remove("mascot-rig-on");
    };
  }, []);

  return (
    <div className="mascot-layer" aria-hidden>
      <svg className="mascot-fx" width="100%" height="100%" focusable="false">
        <defs>
          <radialGradient id="poolWarm">
            <stop offset="0%" stopColor="#ffd489" stopOpacity="0.44" />
            <stop offset="42%" stopColor="#ffb347" stopOpacity="0.17" />
            <stop offset="100%" stopColor="#ffb347" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="poolCool">
            <stop offset="0%" stopColor="#3d86ff" stopOpacity="0.34" />
            <stop offset="42%" stopColor="#2f6fe0" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#2f6fe0" stopOpacity="0" />
          </radialGradient>
          {/* userSpaceOnUse so the beam fades ALONG itself — an
              objectBoundingBox gradient fades down the page instead, which
              leaves the far end of the cone a flat opaque wedge */}
          <linearGradient id="coneWarm" ref={coneGradRef} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff0cd" stopOpacity="0.62" />
            <stop offset="55%" stopColor="#ffc978" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ffb347" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="coneCool" ref={coneGradLightRef} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6aa6ff" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#3d86ff" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#2f6fe0" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path ref={coneRef} className="bulb-cone" d="M 0 0" />
        <circle ref={poolRef} className="bulb-pool" r="170" />
        <circle ref={glowRef} className="bulb-spark" r="5" />
        <path ref={ropeRef} className="rope" d="M 0 0" />
      </svg>

      <div className="mascot-figure" ref={figRef}>
        <img ref={restRef} className="mc-pose mc-rest" src={url(REST.src)} alt="" />
        {hasSwing && (
          <>
            <img
              ref={swingRef}
              className="mc-pose mc-swing"
              src={url(SWING.src)}
              alt=""
              onError={() => setHasSwing(false)}
            />
            <img
              ref={swingLightRef}
              className="mc-pose mc-swing-light"
              src={url(SWING.srcLight ?? SWING.src)}
              alt=""
            />
          </>
        )}
      </div>
    </div>
  );
}
