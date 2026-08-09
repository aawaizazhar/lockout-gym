"use client";

import { useEffect, useRef } from "react";

const programs = [
  {
    id: "foundations",
    load: "25",
    sub: "LB · FOUNDATIONS",
    cardClass: "p-card",
    tagClass: "p-card-tag label-tag",
    tag: "ENTRY",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80",
    alt: "Lifter practicing hinge mechanics with a light barbell.",
    title: "First year under the bar.",
    desc: "For beginners — or lifters coming back. We pattern the squat, hinge, press, and pull in that order. The weight doesn't move until the position earns it.",
    specs: [
      ["2×", "PER WEEK"],
      ["60", "MIN / SESSION"],
      ["6", "MAX PER COACH"],
    ],
  },
  {
    id: "build",
    load: "35",
    sub: "LB · BUILD",
    cardClass: "p-card p-card--flag",
    tagClass: "p-card-tag label-tag label-tag--blood",
    tag: "FLAGSHIP",
    img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80",
    alt: "Loaded plates along a concrete gym wall.",
    title: "The backbone of the gym.",
    desc: "Twelve-week blocks, every set logged, bar weight that moves on a schedule — not a mood. Most lifters live here for years and keep setting PRs.",
    specs: [
      ["3×", "PER WEEK"],
      ["75", "MIN / SESSION"],
      ["8", "MAX PER COACH"],
    ],
  },
  {
    id: "perform",
    load: "45",
    sub: "LB · PERFORM",
    cardClass: "p-card p-card--iron",
    tagClass: "p-card-tag label-tag label-tag--caution",
    tag: "ADVANCED",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=80",
    alt: "Heavy barbell on a competition platform.",
    title: "Chasing a total.",
    desc: "Individual percentages. Video review on the competition lifts. Block plans built around a platform date, not a calendar month.",
    specs: [
      ["4×", "PER WEEK"],
      ["90", "MIN / SESSION"],
      ["1:1", "PROGRAMMING"],
    ],
  },
  {
    id: "meet-team",
    load: "55",
    sub: "LB · MEET TEAM",
    cardClass: "p-card p-card--blood",
    tagClass: "p-card-tag label-tag label-tag--caution",
    tag: "BY TRYOUT",
    img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1000&q=80",
    alt: "Lifter locking out a heavy barbell on platform.",
    title: "Tryout only.",
    desc: "Peaking cycles, attempt selection, a handler on every lift — and a coach who has stood exactly where you're trying to stand.",
    specs: [
      ["5–6×", "PER WEEK"],
      ["PEAK", "CYCLES"],
      ["2×", "TRYOUTS / YR"],
    ],
  },
];

import Reveal from "./Reveal";
import TextStagger from "./TextStagger";

export default function Programs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pContainer = containerRef.current;
    const pTrack = trackRef.current;
    if (!pContainer || !pTrack) return;

    let containerTop = 0;
    let navHeight = 76;
    let scrollable = 1;
    let maxTranslate = 0;
    let isMobile = false;
    let ticking = false;
    let isInView = false;

    const measureLayout = () => {
      const parent = pTrack.parentElement;
      if (!parent) return;

      isMobile = window.innerWidth <= 768;

      const navEl = document.querySelector(".nav");
      navHeight = navEl ? (navEl as HTMLElement).offsetHeight : 76;

      const rect = pContainer.getBoundingClientRect();
      containerTop = rect.top + (window.scrollY || window.pageYOffset || 0);

      const windowHeight = window.innerHeight;
      const height = pContainer.offsetHeight;
      scrollable = Math.max(1, height - (windowHeight - navHeight));

      const style = window.getComputedStyle(parent);

      if (isMobile) {
        const paddingTop = parseFloat(style.paddingTop) || 0;
        const paddingBottom = parseFloat(style.paddingBottom) || 0;
        const parentInnerHeight = parent.clientHeight - paddingTop - paddingBottom;
        maxTranslate = Math.max(0, pTrack.scrollHeight - parentInnerHeight);
      } else {
        const paddingLeft = parseFloat(style.paddingLeft) || 0;
        const paddingRight = parseFloat(style.paddingRight) || 0;
        const parentInnerWidth = parent.clientWidth - paddingLeft - paddingRight;
        maxTranslate = Math.max(0, pTrack.scrollWidth - parentInnerWidth);
      }
    };

    const updateTransform = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const progress = Math.max(0, Math.min(1, (scrollY - containerTop + navHeight) / scrollable));

      if (isMobile) {
        pTrack.style.transform = `translate3d(0, ${(-progress * maxTranslate).toFixed(2)}px, 0)`;
      } else {
        pTrack.style.transform = `translate3d(${(-progress * maxTranslate).toFixed(2)}px, 0, 0)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateTransform);
      }
    };

    const handleResizeOrLoad = () => {
      measureLayout();
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateTransform);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;
        if (isInView) {
          measureLayout();
          updateTransform();
        }
      },
      { rootMargin: "200px 0px 200px 0px" }
    );

    observer.observe(pContainer);
    measureLayout();
    updateTransform();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleResizeOrLoad);

    const resizeObserver = new ResizeObserver(() => {
      handleResizeOrLoad();
    });

    resizeObserver.observe(pContainer);
    resizeObserver.observe(pTrack);
    if (pTrack.parentElement) {
      resizeObserver.observe(pTrack.parentElement);
    }

    const images = pTrack.querySelectorAll("img");
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", handleResizeOrLoad);
      }
    });

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResizeOrLoad);
      images.forEach((img) => img.removeEventListener("load", handleResizeOrLoad));
    };
  }, []);

  return (
    <section className="programs" id="programs" aria-label="Training programs">
      <div ref={containerRef} className="programs-container">
        <div className="programs-sticky">
          <div className="programs-header">
            <div>
              <Reveal variant="left">
                <div className="section-num">SEC. 03 — THE METHOD</div>
              </Reveal>
              <TextStagger text="FOUR TRACKS." as="h2" delay={0.1} staggerDelay={0.05} />
              <Reveal variant="left" delay={0.2}>
                <h2 style={{ marginTop: "-8px" }}>
                  <span className="italic-serif">One bar.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal variant="right" delay={0.15}>
              <div className="meta">
                ORDERED BY <b>WEEKLY COMMITMENT</b>.<br />
                Everyone starts with a movement assessment.<br />
                You move up when the lifts say so.
              </div>
            </Reveal>
          </div>
          <div className="programs-track-wrap">
            <div ref={trackRef} className="programs-track" id="programsTrack">
              {programs.map((p) => (
                <article key={p.id} className={p.cardClass}>
                  <span className={p.tagClass}>{p.tag}</span>
                  <div className="p-card-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img loading="lazy" src={p.img} alt={p.alt} />
                  </div>
                  <div className="p-card-body">
                    <div className="p-load-header">
                      <span className="p-load-pill">LOAD {p.load}</span>
                      <span className="p-sub-text">{p.sub}</span>
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
