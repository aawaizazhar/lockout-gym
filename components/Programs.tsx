"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const programs = [
  {
    load: "25",
    sub: "LB · FOUNDATIONS",
    cardClass: "p-card",
    tagClass: "p-card-tag label-tag",
    tag: "ENTRY",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80",
    alt: "Lifter practicing hinge mechanics with a light barbell.",
    title: "First year under the bar.",
    desc: "For beginners — or lifters coming back. We pattern the squat, hinge, press, and pull in that order. The weight doesn't move until the position earns it.",
    specs: [["2×", "PER WEEK"], ["60", "MIN / SESSION"], ["6", "MAX PER COACH"]],
  },
  {
    load: "35",
    sub: "LB · BUILD",
    cardClass: "p-card p-card--flag",
    tagClass: "p-card-tag label-tag label-tag--blood",
    tag: "FLAGSHIP",
    img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80",
    alt: "Loaded plates along a concrete gym wall.",
    title: "The backbone of the gym.",
    desc: "Twelve-week blocks, every set logged, bar weight that moves on a schedule — not a mood. Most lifters live here for years and keep setting PRs.",
    specs: [["3×", "PER WEEK"], ["75", "MIN / SESSION"], ["8", "MAX PER COACH"]],
  },
  {
    load: "45",
    sub: "LB · PERFORM",
    cardClass: "p-card p-card--iron",
    tagClass: "p-card-tag label-tag label-tag--caution",
    tag: "ADVANCED",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=80",
    alt: "Heavy barbell on a competition platform.",
    title: "Chasing a total.",
    desc: "Individual percentages. Video review on the competition lifts. Block plans built around a platform date, not a calendar month.",
    specs: [["4×", "PER WEEK"], ["90", "MIN / SESSION"], ["1:1", "PROGRAMMING"]],
  },
  {
    load: "55",
    sub: "LB · MEET TEAM",
    cardClass: "p-card p-card--blood",
    tagClass: "p-card-tag label-tag label-tag--caution",
    tag: "BY TRYOUT",
    img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1000&q=80",
    alt: "Lifter locking out a heavy barbell on platform.",
    title: "Tryout only.",
    desc: "Peaking cycles, attempt selection, a handler on every lift — and a coach who has stood exactly where you're trying to stand.",
    specs: [["5–6×", "PER WEEK"], ["PEAK", "CYCLES"], ["2×", "TRYOUTS / YR"]],
  },
];

export default function Programs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = containerRef.current;
    const t = trackRef.current;
    if (!c || !t) return;

    const onScroll = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (window.innerWidth < 768) {
        t.style.transform = "";
        return;
      }
      const rect = c.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      const parent = t.parentElement;
      if (!parent) return;
      const max = t.scrollWidth - parent.clientWidth;
      t.style.transform = `translateX(${-progress * max}px)`;
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
    <section className="programs" id="programs" aria-label="Training programs">
      <div ref={containerRef} className="programs-container">
        <div className="programs-sticky">
          <div className="programs-header">
            <div>
              <div className="section-num">SEC. 03 — THE METHOD</div>
              <h2>
                FOUR TRACKS.
                <br />
                <span className="italic-serif">One bar.</span>
              </h2>
            </div>
            <div className="meta">
              ORDERED BY <b>WEEKLY COMMITMENT</b>.
              <br />
              Everyone starts with a movement assessment.
              <br />
              You move up when the lifts say so.
            </div>
          </div>
          <div className="programs-track-wrap">
            <div ref={trackRef} className="programs-track" id="programsTrack">
              {programs.map((p) => (
                <article key={p.load} className={p.cardClass}>
                  <span className={p.tagClass}>{p.tag}</span>
                  <div className="p-card-img">
                    <Image
                      src={p.img}
                      alt={p.alt}
                      fill
                      sizes="(max-width:768px) 85vw, 520px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-card-body">
                    <div className="p-load">
                      LOAD {p.load}
                      <small>{p.sub}</small>
                    </div>
                    <h3>{p.title}</h3>
                    <p className="p-card-desc">{p.desc}</p>
                    <div className="p-card-spec">
                      {p.specs.map(([val, label]) => (
                        <div key={label}>
                          <b>{val}</b>
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}