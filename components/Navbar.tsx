"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#manifesto", label: "Manifesto", id: "manifesto" },
  { href: "#programs", label: "Method", id: "programs" },
  { href: "#coaches", label: "Coaches", id: "coaches" },
  { href: "#pricing", label: "Access", id: "pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  const close = () => setOpen(false);

  useEffect(() => {
    const sectionElements = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const sorted = visible.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );
          const targetId = sorted[0].target.id;
          setActiveId((prev) => (prev !== targetId ? targetId : prev));
        } else if (window.scrollY < 200) {
          setActiveId((prev) => (prev !== "" ? "" : prev));
        }
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0.3,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    let ticking = false;
    const handleScroll = () => {
      if (window.scrollY < 200) {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(() => {
            setActiveId((prev) => (prev !== "" ? "" : prev));
            ticking = false;
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`nav site-header ${open ? "menu-open" : ""}`} id="siteHeader">
      <div className="wrap nav-inner">
        <Link href="#top" onClick={close} className="logo" aria-label="Lockout - home">
          <span className="logo-block" aria-hidden="true">L</span>
          <span>LOCKOUT</span>
        </Link>

        <button
          className="nav-toggle"
          id="navToggle"
          aria-expanded={open}
          aria-controls="navMenu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "CLOSE" : "MENU"}
        </button>

        <div className="nav-menu" id="navMenu">
          <ul className="nav-links">
            {links.map((l) => {
              const isActive = activeId === l.id;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={close}
                    className={isActive ? "active" : ""}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="#apply" onClick={close} className="nav-cta">
            Apply for Intro Week <span className="ar">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}