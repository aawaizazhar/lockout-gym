"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bar.current;
    if (!el) return;

    let maxScroll = 1;
    let ticking = false;

    const measureMaxScroll = () => {
      const h = document.documentElement;
      const b = document.body;
      const scrollHeight = Math.max(h.scrollHeight, b.scrollHeight);
      const clientHeight = h.clientHeight;
      maxScroll = Math.max(1, scrollHeight - clientHeight);
    };

    const update = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
      el.style.removeProperty("transform");
      el.style.transform = "none";
      el.style.width = `${(progress * 100).toFixed(2)}%`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    measureMaxScroll();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measureMaxScroll);

    const resizeObserver = new ResizeObserver(() => {
      measureMaxScroll();
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    });
    resizeObserver.observe(document.documentElement);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measureMaxScroll);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={bar}
      className="scroll-progress"
      id="scrollProgress"
      aria-hidden="true"
    />
  );
}
