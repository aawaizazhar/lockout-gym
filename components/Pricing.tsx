import Reveal from "./Reveal";
import BrutalButton from "./BrutalButton";

export default function Pricing() {
  return (
    <section className="pricing" id="pricing" aria-label="Membership access">
      <div className="wrap">
        <div className="pricing-head">
          <div>
            <Reveal>
              <div className="section-num">SEC. 05 — ACCESS</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>
                THREE DOORS.
                <br />
                <span className="italic-serif">No contracts.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p>
              Month to month, priced like we mean it. If we&apos;re not making you stronger, you leave — that&apos;s the entire retention strategy.
            </p>
          </Reveal>
        </div>

        <div className="tiers">
          <Reveal>
            <article className="t-card">
              <div className="t-tier">
                OPEN
                <br />
                PLATFORM
                <small>THE BASE</small>
              </div>
              <div className="t-middle">
                <h3>Barbell access, no coaching.</h3>
                <ul className="t-features">
                  <li>All open hours access</li>
                  <li>Intro session + lift assessment</li>
                  <li>Chalk, belts, wraps supplied</li>
                  <li>Cancel any month</li>
                </ul>
              </div>
              <div className="t-price">
                <div className="amount">$89</div>
                <div className="per">/ MONTH</div>
                <BrutalButton href="#cta" variant="ghost" className="t-cta">
                  Request Access
                </BrutalButton>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="t-card t-card--flag">
              <span className="t-tag">MOST LIFTERS HERE</span>
              <div className="t-tier">
                BARBELL
                <br />
                CLUB
                <small>FLAGSHIP</small>
              </div>
              <div className="t-middle">
                <h3>Coached small-group sessions.</h3>
                <ul className="t-features">
                  <li>3 coached sessions / week (BUILD)</li>
                  <li>12-week programmed blocks</li>
                  <li>Every set logged & reviewed</li>
                  <li>Quarterly testing + progress report</li>
                  <li>Open platform between sessions</li>
                  <li>Everything in Open Platform</li>
                </ul>
              </div>
              <div className="t-price">
                <div className="amount">$159</div>
                <div className="per">/ MONTH</div>
                <BrutalButton href="#cta" variant="primary" arrow className="t-cta">
                  Apply Now
                </BrutalButton>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.2}>
            <article className="t-card t-card--top">
              <span className="t-tag">LIMITED SEATS</span>
              <div className="t-tier">
                FULL
                <br />
                COACHING
                <small>BY APPLICATION</small>
              </div>
              <div className="t-middle">
                <h3>1:1 programming + meet prep.</h3>
                <ul className="t-features">
                  <li>Unlimited coached sessions</li>
                  <li>Individual percentages</li>
                  <li>Monthly 1:1 with your coach</li>
                  <li>Meet prep + attempt selection</li>
                  <li>Priority Meet Team tryout placement</li>
                  <li>Everything in Barbell Club</li>
                </ul>
              </div>
              <div className="t-price">
                <div className="amount">$249</div>
                <div className="per">/ MONTH</div>
                <BrutalButton href="#cta" variant="iron" className="t-cta">
                  Request Interview
                </BrutalButton>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="pricing-note">CANCEL BY TELLING A COACH · NO FORMS · NO RETENTION CALL · NO FREEZE FEES</p>
        </Reveal>
      </div>
    </section>
  );
}