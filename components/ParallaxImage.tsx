"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

type ParallaxImageProps = {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
  /** How far the image drifts, as a fraction of its height. Keep ≤ 0.25. */
  travel?: number;
  className?: string;
};

/**
 * Full-bleed background image that drifts slower than the page as it scrolls
 * through the viewport, creating a parallax depth effect. The image is scaled
 * up slightly so the drift never reveals an edge, and motion is bounded and
 * rAF-throttled. Respects prefers-reduced-motion.
 */
export default function ParallaxImage({
  src,
  alt,
  priority = false,
  travel = 0.26,
  className = "",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the section is just below the viewport, 1 when just above it
      const progress = (vh - rect.top) / (vh + rect.height);
      const clamped = Math.min(1, Math.max(0, progress));
      const distance = rect.height * travel;
      setOffset((clamped - 0.5) * distance);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [travel]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0"
        style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: "transform" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          placeholder="blur"
          sizes="100vw"
          className="scale-[1.35] object-cover"
        />
      </div>
    </div>
  );
}
