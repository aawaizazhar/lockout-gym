"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#programs", label: "Method" },
  { href: "#coaches", label: "Coaches" },
  { href: "#pricing", label: "Access" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={`nav site-header ${open ? "menu-open" : ""}`} id="siteHeader">
      <div className="wrap nav-inner">
        <Link href="#top" onClick={close} className="logo" aria-label="Lockout — home">
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
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={close}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="#cta" onClick={close} className="nav-cta">
            Apply for Intro Week
          </Link>
        </div>
      </div>
    </header>
  );
}