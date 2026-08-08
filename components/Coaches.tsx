import Reveal from "./Reveal";
import Image from "next/image";

export default function Coaches() {
  return (
    <section className="coaches" id="coaches" aria-label="Coaches">
      <div className="wrap">
        <div className="coaches-head">
          <div>
            <Reveal>
              <div className="section-num">SEC. 04 — THE COACHES</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>
                COACHES
                <br />
                WHO COUNT
                <br />
                <span className="italic-serif">every rep.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p>
              Small groups only work if the coach actually <em>coaches</em>. Ours still compete, write their own sessions, and show up when you&apos;re on the platform. No clipboard warriors.
            </p>
          </Reveal>
        </div>

        <div className="dossier">
          {/* Coach 1 */}
          <Reveal>
            <div className="dossier-row">
              <div className="d-photo d-photo--huge">
                <div className="d-number">01</div>
                <div className="photo-brutal">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80"
                    alt="Dana Whitfield, owner and head coach."
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="d-info">
                <div className="d-role">OWNER · HEAD COACH</div>
                <h3 className="d-name">
                  DANA
                  <br />
                  WHITFIELD
                  <span className="d-name-italic">writes every block that leaves this building.</span>
                </h3>
                <p className="d-bio">
                  USAPL national-qualifying lifter at 72kg, eleven years coaching barbell athletes. She personally signs off on every lifter&apos;s first platform total.
                </p>
                <div className="d-specs">
                  <div className="d-spec">
                    <b>11Y</b>TENURE
                  </div>
                  <div className="d-spec">
                    <b>72KG</b>WEIGHT CLASS
                  </div>
                  <div className="d-spec">
                    <b>USAPL</b>L2 · CSCS
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Coach 2 (flipped) */}
          <Reveal>
            <div className="dossier-row dossier-row--flip">
              <div className="d-info">
                <div className="d-role">COMPETITION LEAD</div>
                <h3 className="d-name">
                  TERRENCE
                  <br />
                  VAUGHN
                  <span className="d-name-italic">fourteen years as a referee, 40+ meets handled.</span>
                </h3>
                <p className="d-bio">
                  Runs the Meet Team, picks your attempts, and decides when you&apos;re ready for LOAD 55. Has stood behind more platforms than most lifters have stood on.
                </p>
                <div className="d-specs">
                  <div className="d-spec">
                    <b>14Y</b>REFEREE
                  </div>
                  <div className="d-spec">
                    <b>40+</b>MEETS HANDLED
                  </div>
                  <div className="d-spec">
                    <b>USAPL</b>CERTIFIED
                  </div>
                </div>
              </div>
              <div className="d-photo">
                <div className="d-number d-number--iron">02</div>
                <div className="photo-brutal">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80"
                    alt="Terrence Vaughn, competition lead."
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Coach 3 */}
          <Reveal>
            <div className="dossier-row">
              <div className="d-photo">
                <div className="d-number d-number--blood">03</div>
                <div className="photo-brutal">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
                    alt="Priya Raman, foundations lead."
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="d-info">
                <div className="d-role">FOUNDATIONS LEAD</div>
                <h3 className="d-name">
                  PRIYA
                  <br />
                  RAMAN
                  <span className="d-name-italic">four years in physio before the platform.</span>
                </h3>
                <p className="d-bio">
                  Owns the six-person cap in Foundations. Nothing loads until the position is right — and she&apos;ll make you earn every pound on the bar.
                </p>
                <div className="d-specs">
                  <div className="d-spec">
                    <b>9Y</b>COACHING
                  </div>
                  <div className="d-spec">
                    <b>FRC</b>MOBILITY
                  </div>
                  <div className="d-spec">
                    <b>USAW</b>L1
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}