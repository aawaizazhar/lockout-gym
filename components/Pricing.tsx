import Reveal from "./Reveal";
import TextStagger from "./TextStagger";

export default function Pricing() {
  return (
    <section className="pricing" id="pricing" aria-label="Membership plans">
      <div className="wrap">
        <div className="pricing-head">
          <div>
            <Reveal variant="left" delay={0}>
              <div className="section-num">SEC. 05 / HIGH-TICKET MEMBERSHIP</div>
            </Reveal>
            <TextStagger text="VELVET ROPE." as="h2" delay={0.1} staggerDelay={0.06} />
            <Reveal variant="left" delay={0.2}>
              <h2 style={{ marginTop: "-8px" }}>
                <span className="italic-serif">Strictly capped at 100.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal variant="right" delay={0.15}>
            <div>
              <p>
                We capped total facility membership at 100 lifters. No open-gym drop-ins, no crowded platforms, zero waiting for equipment. Every tier guarantees assigned rack time, a 1:4 max athlete-to-coach ratio, bespoke programming, and private locker facilities.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="tiers">
          {/* Tier 1 */}
          <Reveal variant="up" delay={0.1}>
            <div className="t-card">
              <span className="t-tag">LIMITED: 3 SLOTS LEFT</span>
              <div className="t-tier">
                TIER 1
                <small>M/W/F · MORNING RACK SLOTS (6:00 – 8:30 AM)</small>
              </div>
              <div className="t-middle">
                <h3>Dawn Syndicate</h3>
                <ul className="t-features">
                  <li>3× weekly coached rack sessions (1:4 ratio)</li>
                  <li>Assigned Eleiko bar & platform per block</li>
                  <li>Monthly velocity-based program adjustments</li>
                  <li>Permanent private locker & keycard access</li>
                  <li>Full recovery suite (sauna & cold plunge)</li>
                </ul>
              </div>
              <div className="t-right">
                <div className="t-price">
                  <span className="amount">$580</span>
                  <span className="per">/ MONTH</span>
                </div>
                <div className="t-cta">
                  <a href="#apply" className="btn btn--primary">
                    APPLY NOW <span className="ar">→</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Tier 2 */}
          <Reveal variant="scale" delay={0.2}>
            <div className="t-card t-card--flag">
              <span className="t-tag t-tag--flag">
                <span className="t-tag-pulse" aria-hidden="true" />
                MOST POPULAR: 2 SLOTS LEFT
              </span>
              <div className="t-tier">
                TIER 2
                <small>4× WEEKLY · EVENING PRIME SLOTS (5:00 – 8:00 PM)</small>
              </div>
              <div className="t-middle">
                <h3>Prime Syndicate</h3>
                <ul className="t-features">
                  <li>4× weekly coached rack sessions (1:4 ratio)</li>
                  <li>Dedicated competition calibrated steel bar</li>
                  <li>Bi-weekly 1:1 video movement analysis</li>
                  <li>Full competition meet prep & platform handling</li>
                  <li>Executive locker, gear bay & recovery access</li>
                </ul>
              </div>
              <div className="t-right">
                <div className="t-price">
                  <span className="amount">$850</span>
                  <span className="per">/ MONTH</span>
                </div>
                <div className="t-cta">
                  <a href="#apply" className="btn btn--iron">
                    APPLY NOW <span className="ar">→</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Tier 3 */}
          <Reveal variant="up" delay={0.3}>
            <div className="t-card t-card--top">
              <span className="t-tag">WAITLIST ONLY: 0 SLOTS</span>
              <div className="t-tier">
                TIER 3
                <small>UNRESTRICTED PLATFORM + 1:1 COACHING</small>
              </div>
              <div className="t-middle">
                <h3>Black Tier Executive</h3>
                <ul className="t-features">
                  <li>Unlimited platform access + 2× 1:1 private sessions/mo</li>
                  <li>100% custom individual programming & load regulation</li>
                  <li>Dedicated personal competition rack & private storage bay</li>
                  <li>24/7 direct coach messaging & biomechanics audits</li>
                  <li>Complete contest handling, nutrition & recovery protocols</li>
                </ul>
              </div>
              <div className="t-right">
                <div className="t-price">
                  <span className="amount">$1,250</span>
                  <span className="per">/ MONTH</span>
                </div>
                <div className="t-cta">
                  <a href="#apply" className="btn btn--primary">
                    JOIN WAITLIST <span className="ar">→</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal variant="up" delay={0.35}>
          <div className="pricing-note">
            ALL MEMBERSHIPS REQUIRE A MANDATORY 60-MINUTE MOVEMENT ASSESSMENT & BIO-MECHANICAL EVALUATION ($150) PRIOR TO ADMISSION. NO EXCEPTIONS.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
