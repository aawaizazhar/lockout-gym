"use client";

import type { FormEvent } from "react";
import BrutalButton from "./BrutalButton";

export default function CtaFinal() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Application submitted. We'll reach out within 24 hours.");
  };

  return (
    <section className="cta-final" id="cta" aria-label="Apply for intro week">
      <div className="wrap">
        <div className="cta-grid">
          <div>
            <div className="section-num">SEC. 06 — THE DOOR</div>
            <h2>
              FIRST WEEK
              <br />
              IS <span className="italic-serif">free.</span>
              <br />
              <span className="underline-hit">AFTER THAT,</span>
              <br />
              YOU EARN IT.
            </h2>
            <p className="cta-final-sub">
              We&apos;ll watch you move, put you in the right track, and load the bar together. If it&apos;s not for you, no hard feelings — keep the chalk.
            </p>
            <div className="cta-meta">
              <div>
                <b>ROSTER</b>180 LIFTERS MAX
              </div>
              <div>
                <b>OPEN</b>07 SPOTS THIS MONTH
              </div>
              <div>
                <b>HOURS</b>5A–9P · 7 DAYS
              </div>
            </div>
          </div>

          <form className="application-form" onSubmit={onSubmit}>
            <div className="af-head">
              <h3>
                APPLICATION
                <br />
                FORM 01
              </h3>
              <div className="af-num">
                REF #LSC-2026
                <br />
                REV 04.2
              </div>
            </div>
            <div className="af-field">
              <label htmlFor="af-name">FULL NAME</label>
              <input type="text" id="af-name" placeholder="[Your name]" required />
            </div>
            <div className="af-field">
              <label htmlFor="af-email">EMAIL</label>
              <input type="email" id="af-email" placeholder="[you@domain.com]" required />
            </div>
            <div className="af-field">
              <label htmlFor="af-track">TRACK OF INTEREST</label>
              <select id="af-track">
                <option>LOAD 25 · Foundations</option>
                <option>LOAD 35 · Build (Recommended)</option>
                <option>LOAD 45 · Perform</option>
                <option>LOAD 55 · Meet Team (tryout required)</option>
              </select>
            </div>
            <div className="af-field">
              <label htmlFor="af-history">TRAINING HISTORY</label>
              <input type="text" id="af-history" placeholder="[Years training / current total / goals]" />
            </div>
            <BrutalButton type="submit" variant="primary" block arrow>
              SUBMIT APPLICATION
            </BrutalButton>
          </form>
        </div>
      </div>
    </section>
  );
}