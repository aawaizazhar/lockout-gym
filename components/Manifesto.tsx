"use client";

import { useEffect, useRef, useState } from "react";

const lines = [
  "PAY $350/MO TO FIGHT TRIPODS & INFLUENCERS FOR A PLATFORM.",
  "COMPETE WITH 3,000 OVERBOOKED MEMBERS FOR ONE ELEIKO BAR.",
  "GET REPRIMANDED BY GYM MANAGERS FOR DROPPING HEAVY WEIGHTS.",
  "PAY $150/HR TO 'COACHES' WHO CAN'T AUDIT A 500LB SQUAT.",
];

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const motionHandler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", motionHandler);
    }

    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const containerTop = rect.top + (window.scrollY || window.pageYOffset || 0);
      const windowHeight = window.innerHeight;
      const height = el.offsetHeight;
      const scrollable = Math.max(1, height - windowHeight);
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const progress = Math.max(0, Math.min(1, (scrollY - containerTop) / scrollable));
      setScrollProgress(progress);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", motionHandler);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const activeStep = Math.min(4, Math.floor(scrollProgress * 5));
  const revealProgress = Math.max(0, Math.min(1, (scrollProgress - 0.8) / 0.2));

  return (
    <section className="manifesto" id="manifesto" aria-label="Manifesto">
      <div ref={containerRef} className="manifesto-container">
        <div className="manifesto-sticky">
          <div className="manifesto-inner">
            <div className="manifesto-header">
              <div className="manifesto-num">SEC. 02 / THE INDUSTRY</div>
              <div className="manifesto-eyebrow">WHAT WE&apos;RE AGAINST</div>
            </div>

            <div className="manifesto-list">
              {lines.map((text, idx) => {
                const lineStrikeProgress = Math.max(
                  0,
                  Math.min(1, (scrollProgress - idx * 0.2) / 0.2)
                );
                const isFullyStruck = lineStrikeProgress >= 1;
                const isBeingStruck = lineStrikeProgress > 0 && lineStrikeProgress < 1;
                const isCurrentActive = idx === activeStep;

                let lineClass = "manifesto-line block w-full";
                if (isFullyStruck) {
                  lineClass += " struck";
                } else if (isCurrentActive || isBeingStruck) {
                  lineClass += " active";
                }

                let textColor = "var(--bone)";
                if (isFullyStruck) {
                  textColor = "var(--concrete)";
                } else if (isBeingStruck || isCurrentActive) {
                  textColor = "var(--caution)";
                }

                return (
                  <div key={idx} className={lineClass} data-idx={idx}>
                    <span
                      className="manifesto-text"
                      style={{
                        color: textColor,
                        opacity: isFullyStruck ? 0.35 : 1,
                        ["--strike-width" as string]: `${(lineStrikeProgress * 100).toFixed(1)}%`,
                        transition: isReducedMotion ? "none" : "color 0.2s, opacity 0.2s",
                      }}
                    >
                      {text}
                    </span>
                  </div>
                );
              })}
              <div
                className={`manifesto-line reveal ${revealProgress > 0.05 ? "in" : ""}`}
                style={{
                  opacity: isReducedMotion ? 1 : revealProgress,
                  transition: isReducedMotion
                    ? "none"
                    : "opacity 0.3s ease-out",
                }}
                data-idx="4"
              >
                100 lifters. Guaranteed rack. Zero bullshit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


