"use client";

import { FormEvent, useState, ChangeEvent } from "react";
import Reveal from "./Reveal";
import TextStagger from "./TextStagger";

interface FormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  total: string;
  slot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  experience?: string;
  total?: string;
  slot?: string;
}

export default function CtaFinal() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    experience: "",
    total: "",
    slot: "Morning (6 AM - 8:30 AM)",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};

    if (!data.name.trim()) {
      errs.name = "FULL NAME IS REQUIRED";
    } else if (data.name.trim().length < 2) {
      errs.name = "NAME MUST BE AT LEAST 2 CHARACTERS";
    } else if (!/^[a-zA-Z\s'-]+$/.test(data.name.trim())) {
      errs.name = "NAME MUST CONTAIN ONLY LETTERS";
    }

    if (!data.email.trim()) {
      errs.email = "EMAIL ADDRESS IS REQUIRED";
    } else if (!/^[^\s@]+@[^\s@]+\.com$/i.test(data.email.trim())) {
      errs.email = "EMAIL MUST CONTAIN '@' AND END WITH '.COM'";
    }

    if (!data.phone.trim()) {
      errs.phone = "PHONE NUMBER IS REQUIRED";
    } else if (!/^(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(data.phone.trim())) {
      errs.phone = "ENTER A VALID PHONE NUMBER (E.G. 555-019-2834)";
    }

    if (!data.experience) {
      errs.experience = "PLEASE SELECT YOUR EXPERIENCE LEVEL";
    }

    if (!data.total.trim()) {
      errs.total = "SBD ESTIMATE / TOTAL IS REQUIRED";
    }

    if (!data.slot) {
      errs.slot = "SELECT A PREFERRED TRAINING BLOCK";
    }

    return errs;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    if (hasAttemptedSubmit) {
      const currentErrors = validate(updated);
      setErrors(currentErrors);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <section className="cta-final" id="apply" aria-label="Apply for assessment">
      <div className="wrap">
        <div className="cta-grid">
          <div>
            <Reveal variant="left" delay={0.1}>
              <div className="section-num" style={{ color: "var(--caution)" }}>
                SEC. 06 / APPLICATION
              </div>
            </Reveal>
            <TextStagger text="EARN YOUR" as="h2" delay={0.1} staggerDelay={0.06} />
            <Reveal variant="left" delay={0.2}>
              <h2 style={{ marginTop: "-8px" }}>
                <span className="italic-serif">spot on the</span><br />
                <span className="underline-hit">PLATFORM.</span>
              </h2>
              <p className="cta-final-sub">
                We review every application within 24 hours. If we have a rack open that fits your schedule, we&apos;ll invite you in for a 60-minute movement assessment.
              </p>
            </Reveal>
            <div className="cta-meta">
              <div>
                <b>24 HRS</b> RESPONSE TIME
              </div>
              <div>
                <b>60 MIN</b> ASSESSMENT
              </div>
              <div>
                <b>NO</b> HARD SELL
              </div>
            </div>
          </div>

          <form className="application-form" onSubmit={handleSubmit} noValidate>
            <Reveal delay={0.2}>
              <div className="af-head">
                <h3>ASSESSMENT FORM</h3>
                <div className="af-num">NO. 2024-B</div>
              </div>
            </Reveal>

            {submitted ? (
              <Reveal delay={0.3}>
                <div style={{ padding: "20px 0", font: "700 14px/1.6 var(--mono)" }}>
                  APPLICATION RECEIVED. WE WILL BE IN TOUCH WITHIN 24 HOURS.
                </div>
              </Reveal>
            ) : (
              <>
                {hasAttemptedSubmit && Object.keys(errors).length > 0 && (
                  <div className="af-error-summary" role="alert">
                    <span className="af-error-badge">ATTENTION</span>
                    <span>PLEASE CORRECT THE {Object.keys(errors).length} HIGHLIGHTED FIELD(S) BELOW</span>
                  </div>
                )}

                <Reveal delay={0.3} className={`af-field ${errors.name ? "has-error" : ""}`}>
                  <div>
                    <label htmlFor="name">FULL NAME *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="MARCUS AURELIUS"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <div className="af-error-msg" role="alert">
                        <span aria-hidden="true">✖</span> {errors.name}
                      </div>
                    )}
                  </div>
                </Reveal>

                <Reveal delay={0.4} className={`af-field ${errors.email ? "has-error" : ""}`}>
                  <div>
                    <label htmlFor="email">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="MARCUS@ROME.COM"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <div className="af-error-msg" role="alert">
                        <span aria-hidden="true">✖</span> {errors.email}
                      </div>
                    )}
                  </div>
                </Reveal>

                <Reveal delay={0.45} className={`af-field ${errors.phone ? "has-error" : ""}`}>
                  <div>
                    <label htmlFor="phone">PHONE NUMBER *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 019-2834"
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <div className="af-error-msg" role="alert">
                        <span aria-hidden="true">✖</span> {errors.phone}
                      </div>
                    )}
                  </div>
                </Reveal>

                <Reveal delay={0.5} className={`af-field ${errors.experience ? "has-error" : ""}`}>
                  <div>
                    <label htmlFor="experience">EXPERIENCE LEVEL *</label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      aria-invalid={!!errors.experience}
                    >
                      <option value="">SELECT EXPERIENCE LEVEL...</option>
                      <option value="Novice (0-1 Yrs)">NOVICE (0 - 1 YEARS BARBELL)</option>
                      <option value="Intermediate (1-3 Yrs)">INTERMEDIATE (1 - 3 YEARS)</option>
                      <option value="Advanced / Competitor (3+ Yrs)">ADVANCED / COMPETITOR (3+ YEARS)</option>
                    </select>
                    {errors.experience && (
                      <div className="af-error-msg" role="alert">
                        <span aria-hidden="true">✖</span> {errors.experience}
                      </div>
                    )}
                  </div>
                </Reveal>

                <Reveal delay={0.55} className={`af-field ${errors.total ? "has-error" : ""}`}>
                  <div>
                    <label htmlFor="total">CURRENT SQUAT / BENCH / DEADLIFT TOTAL (APPROX) *</label>
                    <input
                      type="text"
                      id="total"
                      name="total"
                      value={formData.total}
                      onChange={handleChange}
                      placeholder="E.G. 850 LBS OR 'NEW TO BARBELL'"
                      aria-invalid={!!errors.total}
                    />
                    {errors.total && (
                      <div className="af-error-msg" role="alert">
                        <span aria-hidden="true">✖</span> {errors.total}
                      </div>
                    )}
                  </div>
                </Reveal>

                <Reveal delay={0.6} className={`af-field ${errors.slot ? "has-error" : ""}`}>
                  <div>
                    <label htmlFor="slot">PREFERRED TRAINING BLOCK *</label>
                    <select
                      id="slot"
                      name="slot"
                      value={formData.slot}
                      onChange={handleChange}
                      aria-invalid={!!errors.slot}
                    >
                      <option value="Morning (6 AM - 8:30 AM)">MORNING (6:00 AM - 8:30 AM)</option>
                      <option value="Midday (11:00 AM - 1:30 PM)">MIDDAY (11:00 AM - 1:30 PM)</option>
                      <option value="Evening (5:00 PM - 8:00 PM)">EVENING (5:00 PM - 8:00 PM)</option>
                    </select>
                    {errors.slot && (
                      <div className="af-error-msg" role="alert">
                        <span aria-hidden="true">✖</span> {errors.slot}
                      </div>
                    )}
                  </div>
                </Reveal>

                <Reveal delay={0.7}>
                  <button type="submit" className="btn btn--iron btn--block">
                    SUBMIT APPLICATION <span className="ar">→</span>
                  </button>
                </Reveal>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
