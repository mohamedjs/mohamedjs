import { useEffect, useRef, useState } from "react";
import {
  BULB,
  HANG_SCALE,
  HANG_SCALE_NARROW,
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

/** Touch devices have no cursor to aim the lamp at, so the beam and the spark
 *  are dropped there — they would just sit frozen wherever the last tap was,
 *  and the blurred cone is the most expensive thing the rig paints. */
const IS_TOUCH =
  typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

/** Width, not pointer type: a narrow viewport is what makes him too big. */
const isNarrow = () => innerWidth < 768;

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
  /** The two swing artworks are ~250K that nothing needs until the first
   *  scroll, and mounting them up front makes them race the preloaded hero
   *  image for bandwidth — which is exactly the wrong trade on a phone.
   *  They mount on idle, or on the first scroll, whichever lands first. */
  const [armed, setArmed] = useState(false);
  const remeasure = useRef<() => void>(() => {});

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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
    let hangScale = HANG_SCALE;

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
      hangScale = isNarrow() ? HANG_SCALE_NARROW : HANG_SCALE;
    };
    remeasure.current = () => {
      measure();
      wake();
    };
    measure();
    document.documentElement.classList.add("mascot-rig-on");
    if (IS_TOUCH) document.documentElement.classList.add("mascot-touch");

    let raf = 0;
    let flash = 0;
    let settled = 0;
    const tgt = { px: innerWidth * 0.5, py: innerHeight * 0.5 };
    const cur = { x: homeX, y: homeDocY, px: tgt.px, py: tgt.py };

    /** The loop parks itself once everything has come to rest, so a phone is
     *  not running a rAF forever behind a static page. Anything that can move
     *  him has to wake it — scroll, pointer, resize, AND the section observer,
     *  which fires the lamp flash without a scroll event of its own. */
    function wake() {
      settled = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    }

    const onMove = (e: PointerEvent) => {
      tgt.px = e.clientX;
      tgt.py = e.clientY;
      wake();
    };
    const onScroll = () => {
      setArmed(true);
      wake();
    };
    const onResize = () => {
      measure();
      wake();
    };
    addEventListener("pointermove", onMove, { passive: true });
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onResize);

    // mount the swing artwork once the page has settled, if a scroll has not
    // already asked for it — well clear of the hero image's own load
    const idle = window.setTimeout(() => setArmed(true), 1800);

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
        wake();
        clearTimeout(litTimer);
        litTimer = window.setTimeout(() => lit?.classList.remove("lamp-lit"), 1200);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => observer.observe(el));

    // --- render loop ------------------------------------------------------
    function tick() {
      raf = 0;
      const figEl = figRef.current;
      if (!figEl) return;

      const f = rigFrame({
        scrollY,
        scrollable: Math.max(1, document.documentElement.scrollHeight - innerHeight),
        vh: innerHeight,
        homeX,
        homeDocY,
        headUp,
        footDrop,
        px: tgt.px,
        hangScale,
        // He only sways once he is actually on the rope — and never on touch,
        // where an endless sine would keep the loop awake for no benefit.
        sway: IS_TOUCH ? 0 : Math.sin(performance.now() / 1500) * 10,
      });

      cur.x += (f.x - cur.x) * 0.09;
      cur.y += (f.y - cur.y) * 0.12;
      cur.px += (tgt.px - cur.px) * 0.16;
      cur.py += (tgt.py - cur.py) * 0.16;
      flash *= 0.95;

      figEl.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0) scale(${f.k})`;
      // Hold the resting pose until the themed swing artwork has actually
      // decoded, or a slow connection shows him fading out into nothing.
      const swung =
        document.documentElement.dataset.theme === "light" ? swingLightRef : swingRef;
      const t = swung.current?.complete && swung.current.naturalWidth ? f.t : 0;
      // CSS turns this into the crossfade AND picks the themed swing artwork
      figEl.style.setProperty("--pose-t", String(t));

      // the whole strand is ours to draw: anchored off the top of the page,
      // running down into his raised fist
      const ex = cur.x + grip.x * f.k;
      const ey = cur.y + grip.y * f.k;
      const rope = ropeRef.current;
      if (rope) {
        rope.setAttribute("d", `M ${ex + 70 * f.k} -24 Q ${ex + 46 * f.k} ${ey * 0.5} ${ex} ${ey}`);
        rope.setAttribute("stroke-width", String(ropeW * f.k));
        rope.style.opacity = String(t);
      }

      // the bulb throws light at wherever the cursor is
      const bx = cur.x + bulb.x * f.k;
      const by = cur.y + bulb.y * f.k;
      const lampOn = t * (0.72 + flash * 0.28);

      if (!IS_TOUCH) {
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
        if (coneRef.current) coneRef.current.style.opacity = String(lampOn * 0.8);
        glowRef.current?.setAttribute("cx", String(cur.px));
        glowRef.current?.setAttribute("cy", String(cur.py));
        if (glowRef.current) glowRef.current.style.opacity = String(lampOn);
      }

      poolRef.current?.setAttribute("cx", String(bx));
      poolRef.current?.setAttribute("cy", String(by));
      poolRef.current?.setAttribute("r", String(210 + flash * 150));
      if (poolRef.current) poolRef.current.style.opacity = String(lampOn);

      const moving =
        Math.abs(f.x - cur.x) > 0.05 ||
        Math.abs(f.y - cur.y) > 0.05 ||
        Math.abs(tgt.px - cur.px) > 0.05 ||
        Math.abs(tgt.py - cur.py) > 0.05 ||
        flash > 0.01;
      settled = moving ? 0 : settled + 1;
      if (settled < 4) raf = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(litTimer);
      clearTimeout(idle);
      observer.disconnect();
      removeEventListener("pointermove", onMove);
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onResize);
      lit?.classList.remove("lamp-lit");
      document.documentElement.classList.remove("mascot-rig-on", "mascot-touch");
    };
  }, []);

  // the swing artwork only exists once armed, so it needs sizing then
  useEffect(() => {
    if (armed) remeasure.current();
  }, [armed]);

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
        {hasSwing && armed && (
          <>
            <img
              ref={swingRef}
              className="mc-pose mc-swing"
              src={url(SWING.src)}
              alt=""
              fetchPriority="low"
              decoding="async"
              onLoad={() => remeasure.current()}
              onError={() => setHasSwing(false)}
            />
            <img
              ref={swingLightRef}
              className="mc-pose mc-swing-light"
              src={url(SWING.srcLight ?? SWING.src)}
              alt=""
              fetchPriority="low"
              decoding="async"
              onLoad={() => remeasure.current()}
            />
          </>
        )}
      </div>
    </div>
  );
}
