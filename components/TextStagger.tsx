"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

interface TextStaggerProps {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  mode?: "words" | "chars";
}

export default function TextStagger({
  text,
  as: Component = "h2",
  className = "",
  delay = 0,
  staggerDelay = 0.04,
  mode = "words",
}: TextStaggerProps) {
  const ref = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsRevealed(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < (window.innerHeight || 800) + 100) {
      setIsRevealed(true);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0,
        rootMargin: "100px 0px 100px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  const items = mode === "chars" ? text.split("") : text.split(" ");

  return (
    <Component ref={ref as any} className={`stagger-text ${className}`}>
      {items.map((item, idx) => {
        const itemDelay = (delay + idx * staggerDelay).toFixed(3);
        const isSpace = item === " ";
        return (
          <span
            key={idx}
            className={mode === "chars" ? "stagger-char-wrap" : "stagger-word-wrap"}
          >
            <span
              className={`stagger-inner ${isRevealed ? "is-revealed" : ""}`}
              style={{ "--stagger-delay": `${itemDelay}s` } as any}
            >
              {isSpace ? "\u00A0" : item}
            </span>
          </span>
        );
      })}
    </Component>
  );
}
