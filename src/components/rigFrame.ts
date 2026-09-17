/** scroll distance over which he swaps from standing in the hero to hanging */
export const HOOK_UP = 260;
/** He shrinks once he is on the rope, so he reads as a companion rather than
 *  a billboard sitting on top of the content — and smaller again on a phone,
 *  where the viewport is narrow and he has far less room to spare. */
export const HANG_SCALE = 0.52;
export const HANG_SCALE_NARROW = 0.34;
/** how far below the viewport top he hangs once he is on the rope */
const HANG_TOP = 24;
const HANG_BOTTOM_GAP = 40;

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

/** Where the character sits inside each artwork file, as fractions of the
 *  image. The anchor is the black VISOR, not the hoodie: outstretched arms
 *  make the hoodie box 45% wider in the swinging pose, but the visor is the
 *  same object at the same aspect in both, so pinning the poses to it keeps
 *  his head still through the crossfade.
 *  Regenerate with `python3 scripts/mascot-metrics.py public/avatar*.{webp,png}`. */
export type Pose = {
  src: string;
  /** same render, different bulb — swapped in for the light theme */
  srcLight?: string;
  nw: number;
  nh: number;
  /** visor width, and its centre — the figure's origin sits on that centre */
  vw: number;
  vcx: number;
  vcy: number;
  /** how far below the visor centre his soles reach, as a fraction of nh */
  foot: number;
  /** Size correction. The two artworks were drawn at different camera
   *  distances: the hood is 1.19x the visor when he is standing but 1.69x
   *  when he is swinging. Matching visors alone therefore balloons his BODY
   *  by ~40% mid-crossfade, so the swing pose is scaled down to put the two
   *  silhouettes on top of each other. Tuned by eye against the rest pose. */
  fit: number;
};

export const REST: Pose = {
  src: "avatar.webp",
  nw: 860,
  nh: 1290,
  vw: 0.5163,
  vcx: 0.5372,
  vcy: 0.3023,
  foot: 0.5822,
  fit: 1,
};

/** The two swing artworks are the same render with a warm vs a blue bulb;
 *  their visor and hand positions agree to within 0.4%, so they share one
 *  set of metrics and the theme just swaps which file is shown. */
export const SWING: Pose = {
  src: "avatar-swing-lamp.webp",
  srcLight: "avatar-swing-lamp-light.webp",
  nw: 842,
  nh: 1264,
  vw: 0.4323,
  vcx: 0.5582,
  vcy: 0.3165,
  foot: 0.6028,
  fit: 0.75,
};

/** The bulb, and the raised fist the rope is tied to — both as fractions of
 *  the swing image. This artwork carries no rope of its own, so the whole
 *  strand is drawn: from the top of the page down into his hand.
 *  ROPE_W is its thickness, also as a fraction of the image width. */
export const BULB = { x: 0.162, y: 0.466 };
export const ROPE_GRIP = { x: 0.896, y: 0.188 };
export const ROPE_W = 0.022;

export type RigInput = {
  scrollY: number;
  scrollable: number;
  vh: number;
  /** hero resting spot, in DOCUMENT coords, so deep links still resolve it */
  homeX: number;
  homeDocY: number;
  /** px from the figure origin (his visor) up to the top of his hood */
  headUp: number;
  /** px from the figure origin down to his soles */
  footDrop: number;
  px: number;
  sway: number;
  /** HANG_SCALE, or HANG_SCALE_NARROW on a phone */
  hangScale: number;
};

/** Where the mascot should be this frame.
 *  `t` blends the hero pose into the rope pose; `p` rides him down the page.
 *  The hanging position is pure viewport space on purpose — blending toward a
 *  scroll-relative homeY instead drags him off the top of the screen once the
 *  hero has scrolled away. */
export function rigFrame(i: RigInput) {
  const p = clamp01(i.scrollY / i.scrollable);
  const t = clamp01(i.scrollY / HOOK_UP);
  const k = lerp(1, i.hangScale, t);
  const homeY = i.homeDocY - i.scrollY;
  const hangY = lerp(
    i.headUp * k + HANG_TOP,
    i.vh - i.footDrop * k - HANG_BOTTOM_GAP,
    p,
  );
  return {
    p,
    t,
    /** figure scale — full size in the hero, shrunk once he is on the rope */
    k,
    x: i.homeX + t * (i.sway + (i.px - i.homeX) * 0.05),
    y: lerp(homeY, hangY, t),
  };
}

/** Lay an artwork file out so its visor centre lands on the figure's origin,
 *  scaled so the visor renders `visorPx` wide in every pose. */
export function poseBox(pose: Pose, visorPx: number) {
  const width = (visorPx / pose.vw) * pose.fit;
  const height = (width * pose.nh) / pose.nw;
  return {
    width,
    height,
    left: -pose.vcx * width,
    top: -pose.vcy * height,
    headUp: pose.vcy * height,
    footDrop: pose.foot * height,
  };
}
