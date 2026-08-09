"use client";

import Reveal from "./Reveal";
import TextStagger from "./TextStagger";

interface CriteriaItem {
  id: string;
  label: string;
  title: string;
  text: string;
}

const criteriaList: CriteriaItem[] = [
  {
    id: "01",
    label: "INTENT & COACHABILITY",
    title: "NO STRENGTH MINIMUM. 100% COACHABILITY.",
    text: "We do not filter by squat total, we filter by intent. Whether you squat 135 or 650 lbs, you must accept technical instruction, adhere to programmed velocity protocols, and respect platform rotation."
  },
  {
    id: "02",
    label: "FIXED PLATFORM BLOCKS",
    title: "RESERVED RACK. ZERO WAITING.",
    text: "You train within your assigned window (Morning, Midday, or Evening) to guarantee a 1:4 athlete-to-coach ratio. Chronic unexcused absenteeism forfeits your rack block to the waitlist."
  },
  {
    id: "03",
    label: "CLOSED FACILITY PROTOCOL",
    title: "ZERO DROP-INS. ZERO GUEST PASSES.",
    text: "LOCKOUT operates as a closed private training hall. We do not offer day passes, open-gym access, or guest allowances. Every lifter on the floor is a vetted member."
  },
  {
    id: "04",
    label: "EQUIPMENT & SANCTUARY",
    title: "RESPECT THE ELEIKO BARS.",
    text: "Banging calibrated steel plates is encouraged; abusing competition bars, leaving unstripped platforms, or filming with intrusive tripods is strictly grounds for roster removal."
  },
  {
    id: "05",
    label: "TERMS OF ADMISSION",
    title: "MONTH-TO-MONTH. 14-DAY NOTICE.",
    text: "No 12-month lock-in contracts. To pause or cancel, provide written notice 14 days prior to your billing date. Relinquished slots immediately revert to the application pool."
  }
];

export default function AdmissionCriteria() {
  return (
    <section className="admission-section" id="admission" aria-label="Before you apply criteria">
      <div className="wrap">
        <div className="admission-head">
          <div className="admission-head-left">
            <Reveal variant="left" delay={0}>
              <div className="section-num">CRITERIA / BEFORE YOU APPLY</div>
            </Reveal>
            <TextStagger text="ADMISSION PROTOCOL." as="h2" delay={0.1} staggerDelay={0.05} />
            <Reveal variant="left" delay={0.2}>
              <p className="admission-sub">
                Review our non-negotiable floor rules and roster terms before submitting your assessment form below.
              </p>
            </Reveal>
          </div>
          <Reveal variant="right" delay={0.15}>
            <div className="admission-badge-box">
              <span className="admission-badge-title">ROSTER CAPACITY</span>
              <span className="admission-badge-stat">100 / 100</span>
              <span className="admission-badge-sub">STRICT HARD CAP</span>
            </div>
          </Reveal>
        </div>

        <div className="admission-grid">
          {criteriaList.map((item, idx) => (
            <Reveal key={item.id} variant="up" delay={0.08 * idx}>
              <div className="admission-card">
                <div className="admission-card-head">
                  <span className="admission-num">RULE //{item.id}</span>
                  <span className="admission-tag">{item.label}</span>
                </div>
                <h3 className="admission-title">{item.title}</h3>
                <p className="admission-text">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
