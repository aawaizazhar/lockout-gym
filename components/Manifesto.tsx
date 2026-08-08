"use client";

import { useEffect, useRef, useState } from "react";

const lines = [
  "PAY $180/MO FOR A LOCKER YOU NEVER USE.",
  "WAIT TWENTY MINUTES FOR A SQUAT RACK.",
  "GUESS WHAT YOUR WORKOUT SHOULD BE.",
  "SIGN A TWELVE-MONTH CONTRACT.",
];

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      // Map 0 -> 1 progress to 0 -> 4 steps
      const currentStep = Math.min(4, Math.floor(progress * 4.5));
      setStep(currentStep);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="manifesto" id="manifesto" aria-label="Manifesto">
      <div ref={containerRef} className="manifesto-container">
        <div className="manifesto-sticky">
          <div className="manifesto-num">SEC. 02 — THE INDUSTRY</div>
          <div className="manifesto-eyebrow">WHAT WE&apos;RE AGAINST //</div>

          <div className="manifesto-list">
            {lines.map((text, idx) => {
              let lineClass = "manifesto-line";
              if (idx < step) {
                lineClass += " struck";
              } else if (idx === step) {
                lineClass += " active";
              }
              return (
                <div key={idx} className={lineClass} data-idx={idx}>
                  {text}
                </div>
              );
            })}
            <div
              className={`manifesto-line reveal ${step >= 4 ? "in" : ""}`}
              data-idx="4"
            >
              — We just build lifters.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}