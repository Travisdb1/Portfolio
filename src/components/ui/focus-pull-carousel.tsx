"use client";

import * as React from "react";

export type LandPalette = "dawn" | "alpine" | "dusk" | "mist";

export type Slide = {
  image?: string;
  title?: string;
  caption?: string;
  alt?: string;
  palette?: LandPalette;
  seed?: number;
};

export type FocusPullCarouselProps = {
  slides?: Slide[];
  height?: number | string;
  cardWidth?: string;
  aspect?: string;
  blur?: number;
  autoplay?: number;
  background?: string;
  ink?: string;
  onChange?: (index: number) => void;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
};

const PALETTES = {
  dawn: {
    top: "#e7b7a5",
    bottom: "#f8e8d6",
    sun: "#fff4df",
    far: "#d2b2bb",
    near: "#3a2a3b",
    mist: "255,240,232",
  },
  alpine: {
    top: "#7ea5c8",
    bottom: "#e3ecf2",
    sun: "#ffffff",
    far: "#a9bfd0",
    near: "#1c3044",
    mist: "236,244,250",
  },
  dusk: {
    top: "#2a2450",
    bottom: "#ef8d60",
    sun: "#ffd9a6",
    far: "#93607c",
    near: "#18121f",
    mist: "255,196,160",
  },
  mist: {
    top: "#c4d0cb",
    bottom: "#eef1ec",
    sun: "#ffffff",
    far: "#aebcb5",
    near: "#2c3a33",
    mist: "246,248,245",
  },
};

const DEFAULT_SLIDES: Slide[] = [
  {
    title: "First Light",
    caption: "Haze lifting off the eastern ridges.",
    palette: "dawn",
    seed: 3,
  },
  {
    title: "High Pass",
    caption: "Cold air, clear to the far range.",
    palette: "alpine",
    seed: 8,
  },
  {
    title: "Ember Hour",
    caption: "The last of the sun on the valley floor.",
    palette: "dusk",
    seed: 14,
  },
  {
    title: "Still Valley",
    caption: "Morning mist that never quite lifts.",
    palette: "mist",
    seed: 21,
  },
  {
    title: "Rose Ridge",
    caption: "Five ridges, one long exhale.",
    palette: "dawn",
    seed: 34,
  },
  {
    title: "Blue Hour",
    caption: "Pines going dark against the snow.",
    palette: "alpine",
    seed: 55,
  },
];

export function focusOf(distance: number, blur: number) {
  const amount = Math.min(Math.abs(distance), 1);
  return {
    scale: 1 - 0.14 * amount,
    blur: Math.min(Math.abs(distance), 2) * blur,
    opacity: 1 - 0.5 * amount,
    saturate: 1 - 0.45 * amount,
  };
}

export function nearestIndex(centers: number[], center: number): number {
  let best = 0;
  for (let i = 1; i < centers.length; i++) {
    if (Math.abs(centers[i] - center) < Math.abs(centers[best] - center)) {
      best = i;
    }
  }
  return best;
}

export function wrap(index: number, length: number): number {
  return length ? ((index % length) + length) % length : 0;
}

export function pad2(number: number): string {
  return number < 10 ? `0${number}` : String(number);
}

function mulberry32(seed: number): () => number {
  let value = seed >>> 0;
  return () => {
    value = (value + 0x6d2b79f5) >>> 0;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

function hexRgb(hex: string): [number, number, number] {
  const value = Number.parseInt(hex.replace("#", ""), 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

function mixRgb(first: string, second: string, amount: number): string {
  const a = hexRgb(first);
  const b = hexRgb(second);
  return `rgb(${a.map((value, i) => Math.round(value + (b[i] - value) * amount)).join(",")})`;
}

function paintLandscape(
  seed: number,
  palette: LandPalette,
  width = 1600,
  height = 1000,
): string {
  if (typeof document === "undefined") return "";
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) return "";

  const colors = PALETTES[palette];
  const random = mulberry32(seed * 104729 + 7);
  const sky = context.createLinearGradient(0, 0, 0, height * 0.72);
  sky.addColorStop(0, colors.top);
  sky.addColorStop(1, colors.bottom);
  context.fillStyle = sky;
  context.fillRect(0, 0, width, height);

  const sunX = width * (0.22 + random() * 0.56);
  const sunY = height * (0.26 + random() * 0.16);
  const halo = context.createRadialGradient(
    sunX,
    sunY,
    0,
    sunX,
    sunY,
    width * 0.45,
  );
  halo.addColorStop(0, `rgba(${hexRgb(colors.sun).join(",")},.85)`);
  halo.addColorStop(0.08, `rgba(${hexRgb(colors.sun).join(",")},.55)`);
  halo.addColorStop(1, `rgba(${hexRgb(colors.sun).join(",")},0)`);
  context.fillStyle = halo;
  context.fillRect(0, 0, width, height);
  context.fillStyle = colors.sun;
  context.beginPath();
  context.arc(sunX, sunY, height * 0.045, 0, Math.PI * 2);
  context.fill();

  for (let layer = 0; layer < 5; layer++) {
    const depth = layer / 4;
    const base = height * (0.42 + depth * 0.4);
    const amplitude = height * (0.07 + depth * 0.1);
    const phases = [random(), random(), random(), random()].map(
      (value) => value * Math.PI * 2,
    );
    const frequencies = [
      1.3 + random(),
      3.1 + random() * 2,
      7 + random() * 4,
      17 + random() * 8,
    ];
    const ridge = (x: number) => {
      const position = x / width;
      return (
        base -
        amplitude *
          (0.55 * Math.sin(position * frequencies[0] + phases[0]) +
            0.28 * Math.sin(position * frequencies[1] + phases[1]) +
            0.12 * Math.abs(Math.sin(position * frequencies[2] + phases[2])) +
            0.05 * Math.sin(position * frequencies[3] + phases[3]))
      );
    };

    const mist = context.createLinearGradient(
      0,
      base - amplitude * 1.4,
      0,
      base + amplitude * 0.4,
    );
    mist.addColorStop(0, `rgba(${colors.mist},0)`);
    mist.addColorStop(1, `rgba(${colors.mist},${(0.55 - depth * 0.35).toFixed(2)})`);
    context.fillStyle = mist;
    context.fillRect(0, base - amplitude * 1.4, width, amplitude * 1.8);

    const body = context.createLinearGradient(0, base - amplitude, 0, height);
    body.addColorStop(0, mixRgb(colors.far, colors.near, Math.pow(depth, 1.3)));
    body.addColorStop(
      1,
      mixRgb(
        colors.far,
        colors.near,
        Math.min(1, Math.pow(depth, 1.3) + 0.18),
      ),
    );
    context.fillStyle = body;
    context.beginPath();
    context.moveTo(0, height);
    for (let x = 0; x <= width; x += 6) {
      context.lineTo(x, ridge(x));
    }
    context.lineTo(width, height);
    context.closePath();
    context.fill();

    if (layer >= 3) {
      context.fillStyle = mixRgb(
        colors.far,
        colors.near,
        Math.min(1, Math.pow(depth, 1.3) + 0.08),
      );
      for (let x = 0; x < width; x += 7 + random() * 9) {
        if (random() < 0.35) continue;
        const y = ridge(x) + 2;
        const treeHeight = height * (0.025 + random() * 0.035) * (0.6 + depth);
        const treeWidth = treeHeight * 0.32;
        context.beginPath();
        context.moveTo(x, y - treeHeight);
        context.lineTo(x + treeWidth, y);
        context.lineTo(x - treeWidth, y);
        context.closePath();
        context.fill();
      }
    }
  }

  const vignette = context.createRadialGradient(
    width / 2,
    height * 0.45,
    height * 0.3,
    width / 2,
    height / 2,
    width * 0.78,
  );
  vignette.addColorStop(0, "rgba(0,0,0,0)");
  vignette.addColorStop(1, "rgba(0,0,0,.32)");
  context.fillStyle = vignette;
  context.fillRect(0, 0, width, height);

  const grain = context.getImageData(0, 0, width, height);
  for (let i = 0; i < grain.data.length; i += 4) {
    const amount = (random() - 0.5) * 14;
    grain.data[i] += amount;
    grain.data[i + 1] += amount;
    grain.data[i + 2] += amount;
  }
  context.putImageData(grain, 0, 0);
  return canvas.toDataURL("image/jpeg", 0.88);
}

function useSlideImages(slides: Slide[]): string[] {
  const key = slides
    .map(
      (slide) =>
        slide.image || `${slide.palette || "dawn"}:${slide.seed ?? 1}`,
    )
    .join("|");
  const [painted, setPainted] = React.useState(() =>
    slides.map(() => ""),
  );

  React.useEffect(() => {
    setPainted(
      slides.map((slide, index) =>
        slide.image
          ? ""
          : paintLandscape(
              slide.seed ?? index + 1,
              slide.palette || "dawn",
            ),
      ),
    );
    // The string key tracks the slide image and painting inputs.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return slides.map((slide, index) => slide.image || painted[index] || "");
}

const carouselStyles = `
.fp-root{position:relative;width:100%;display:flex;flex-direction:column;justify-content:center;gap:clamp(18px,3.5vh,36px);overflow:hidden;background:var(--fp-bg);color:var(--fp-ink);outline:none}
.fp-root:focus-visible{box-shadow:inset 0 0 0 2px var(--fp-ink)}
.fp-track{display:flex;align-items:center;gap:clamp(12px,2vw,28px);overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;padding-inline:calc(50% - var(--fp-w) / 2);scrollbar-width:none;cursor:grab;touch-action:pan-x pan-y}
.fp-track::-webkit-scrollbar{display:none}
.fp-track[data-drag='1']{scroll-snap-type:none;cursor:grabbing}
.fp-card{flex:0 0 var(--fp-w);aspect-ratio:var(--fp-aspect);max-height:calc(var(--fp-h) * .68);scroll-snap-align:center;position:relative;border:0;padding:0;margin:0;background:transparent;cursor:inherit;will-change:transform,filter;transform-origin:center}
.fp-card img{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover;display:block;border-radius:var(--fp-radius);pointer-events:none}
.fp-meta{display:grid;grid-template-columns:1fr auto 1fr;align-items:end;gap:16px;padding-inline:clamp(20px,4vw,56px)}
.fp-cap{min-height:2.6em;overflow:hidden;padding-bottom:.2em}
.fp-cap>*{display:block;animation:fp-in .7s cubic-bezier(.2,.8,.2,1) both}
.fp-title{font:500 clamp(20px,2.6vw,30px)/1.1 ui-serif,Georgia,'Times New Roman',serif;letter-spacing:-.01em}
.fp-sub{margin-top:6px;font:400 13px/1.4 ui-sans-serif,system-ui,sans-serif;color:var(--fp-muted)}
.fp-count{font:500 12px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.14em;text-align:center;color:var(--fp-muted)}
.fp-count b{color:var(--fp-ink);font-weight:500}
.fp-nav{display:flex;justify-content:flex-end;gap:6px}
.fp-btn{appearance:none;border:1px solid var(--fp-line);background:transparent;color:inherit;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;cursor:pointer;transition:background .2s ease,color .2s ease}
.fp-btn:hover{background:var(--fp-ink);color:var(--fp-bg)}
.fp-btn:focus-visible{outline:2px solid var(--fp-ink);outline-offset:2px}
.fp-bar{height:1px;margin-inline:clamp(20px,4vw,56px);background:var(--fp-line);position:relative}
.fp-bar>i{position:absolute;inset:0 auto 0 0;width:100%;background:var(--fp-ink);transform-origin:left;transform:scaleX(var(--fp-p,0))}
.fp-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
@keyframes fp-in{from{transform:translateY(100%);opacity:0}to{transform:none;opacity:1}}
@media (max-width:640px){.fp-meta{grid-template-columns:1fr auto}.fp-count{display:none}}
@media (prefers-reduced-motion:reduce){.fp-cap>*{animation:none}.fp-track{scroll-behavior:auto}}
`;

type CarouselStyle = React.CSSProperties & {
  [key: `--fp-${string}`]: string | number;
};

export default function FocusPullCarousel({
  slides = DEFAULT_SLIDES,
  height = "100svh",
  cardWidth = "min(max(64vw, 290px), 920px)",
  aspect = "3 / 2",
  blur = 7,
  autoplay = 5000,
  background = "var(--color-background, #f4f1ea)",
  ink = "var(--color-foreground, #161513)",
  onChange,
  className,
  style,
  ariaLabel = "Image carousel",
}: FocusPullCarouselProps) {
  const count = slides.length;
  const sources = useSlideImages(slides);
  const [active, setActive] = React.useState(0);
  const [dragging, setDragging] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const barRef = React.useRef<HTMLDivElement>(null);
  const activeRef = React.useRef(0);
  const lastInteraction = React.useRef(0);
  const blurRef = React.useRef(blur);
  const justDragged = React.useRef(false);
  const drag = React.useRef<{
    x: number;
    left: number;
    moved: boolean;
  } | null>(null);
  blurRef.current = blur;

  const paint = React.useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    if (!cards.length) return;

    const center = track.scrollLeft + track.clientWidth / 2;
    const centers = cards.map((card) => card.offsetLeft + card.offsetWidth / 2);
    const width = cards[0].offsetWidth || 1;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    cards.forEach((card, index) => {
      const focus = focusOf(
        (centers[index] - center) / width,
        reducedMotion ? 0 : blurRef.current,
      );
      card.style.transform = `scale(${focus.scale.toFixed(4)})`;
      card.style.filter =
        focus.blur > 0.05
          ? `blur(${focus.blur.toFixed(2)}px) saturate(${focus.saturate.toFixed(3)})`
          : "none";
      card.style.opacity = focus.opacity.toFixed(3);
    });

    const maxScroll = track.scrollWidth - track.clientWidth;
    barRef.current?.style.setProperty(
      "--fp-p",
      maxScroll > 0 ? (track.scrollLeft / maxScroll).toFixed(4) : "0",
    );
    const nearest = nearestIndex(centers, center);
    if (nearest !== activeRef.current) {
      activeRef.current = nearest;
      setActive(nearest);
    }
  }, []);

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(() => {
          frame = 0;
          paint();
        });
      }
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    const observer = new ResizeObserver(onScroll);
    observer.observe(track);
    paint();

    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [paint, count]);

  React.useEffect(() => {
    onChange?.(active);
  }, [active, onChange]);

  const scrollToIndex = React.useCallback((index: number, smooth = true) => {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    track.scrollTo({
      left: card.offsetLeft + card.offsetWidth / 2 - track.clientWidth / 2,
      behavior: smooth && !reducedMotion ? "smooth" : "auto",
    });
  }, []);

  const step = (direction: number) => {
    lastInteraction.current = performance.now();
    scrollToIndex(wrap(activeRef.current + direction, count));
  };

  React.useEffect(() => {
    if (!autoplay || count < 2) return;

    const root = rootRef.current;
    let visible = true;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    if (root) observer.observe(root);

    const timer = window.setInterval(() => {
      if (
        !visible ||
        document.hidden ||
        performance.now() - lastInteraction.current < autoplay
      ) {
        return;
      }
      scrollToIndex(wrap(activeRef.current + 1, count));
    }, autoplay);

    return () => {
      window.clearInterval(timer);
      observer.disconnect();
    };
  }, [autoplay, count, scrollToIndex]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    lastInteraction.current = performance.now();
    const track = trackRef.current;
    if (event.pointerType !== "mouse" || event.button !== 0 || !track) return;
    drag.current = {
      x: event.clientX,
      left: track.scrollLeft,
      moved: false,
    };
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const currentDrag = drag.current;
    const track = trackRef.current;
    if (!currentDrag || !track) return;

    const delta = event.clientX - currentDrag.x;
    if (!currentDrag.moved && Math.abs(delta) > 4) {
      currentDrag.moved = true;
      setDragging(true);
      track.setPointerCapture(event.pointerId);
    }
    if (currentDrag.moved) track.scrollLeft = currentDrag.left - delta;
  };

  const onPointerUp = () => {
    const currentDrag = drag.current;
    drag.current = null;
    lastInteraction.current = performance.now();
    if (!currentDrag?.moved) return;

    justDragged.current = true;
    window.setTimeout(() => {
      justDragged.current = false;
    }, 0);
    setDragging(false);
    scrollToIndex(activeRef.current);
  };

  const onCardClick = (index: number) => (event: React.MouseEvent) => {
    if (justDragged.current) {
      event.preventDefault();
      return;
    }
    lastInteraction.current = performance.now();
    scrollToIndex(index);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") step(1);
    else if (event.key === "ArrowLeft") step(-1);
    else return;
    event.preventDefault();
  };

  const slide = slides[active] || {};
  const rootStyle: CarouselStyle = {
    height,
    "--fp-h": typeof height === "number" ? `${height}px` : height,
    "--fp-w": cardWidth,
    "--fp-aspect": aspect,
    "--fp-bg": background,
    "--fp-ink": ink,
    "--fp-muted": "color-mix(in srgb, var(--fp-ink) 55%, transparent)",
    "--fp-line": "color-mix(in srgb, var(--fp-ink) 18%, transparent)",
    "--fp-radius": "2px",
    ...style,
  };

  return (
    <div
      ref={rootRef}
      className={["fp-root", className].filter(Boolean).join(" ")}
      style={rootStyle}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <style>{carouselStyles}</style>
      <div
        ref={trackRef}
        className="fp-track"
        data-drag={dragging ? "1" : "0"}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onWheel={() => {
          lastInteraction.current = performance.now();
        }}
      >
        {slides.map((item, index) => (
          <button
            key={`${item.title || "slide"}-${index}`}
            type="button"
            className="fp-card"
            tabIndex={-1}
            aria-label={`Show ${item.title || `slide ${index + 1}`}`}
            aria-current={index === active ? "true" : undefined}
            onClick={onCardClick(index)}
          >
            {sources[index] ? (
              <img
                src={sources[index]}
                alt={item.alt || item.title || ""}
                draggable={false}
              />
            ) : null}
          </button>
        ))}
      </div>
      <div className="fp-meta">
        <div className="fp-cap" key={active} aria-hidden="true">
          {slide.title ? <span className="fp-title">{slide.title}</span> : null}
          {slide.caption ? <span className="fp-sub">{slide.caption}</span> : null}
        </div>
        <div className="fp-count" aria-hidden="true">
          <b>{pad2(active + 1)}</b> / {pad2(count)}
        </div>
        <div className="fp-nav">
          <button
            type="button"
            className="fp-btn"
            aria-label="Previous"
            onClick={() => step(-1)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
          <button
            type="button"
            className="fp-btn"
            aria-label="Next"
            onClick={() => step(1)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>
      </div>
      <div ref={barRef} className="fp-bar" aria-hidden="true">
        <i />
      </div>
      <div className="fp-sr" aria-live="polite">
        {`Slide ${active + 1} of ${count}${slide.title ? `: ${slide.title}` : ""}`}
      </div>
    </div>
  );
}
