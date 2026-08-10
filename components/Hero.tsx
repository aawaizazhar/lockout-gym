import BrutalButton from "./BrutalButton";
import PlatformStatus from "./PlatformStatus";
import Reveal from "./Reveal";
import TextStagger from "./TextStagger";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-left">
        <Reveal delay={0}>
          <div className="hero-meta">
            <div className="left">
              <span>PITTSBURGH · STRIP DISTRICT</span>
              <span>[4127 SMALLMAN ST]</span>
              <span>EST. 2019</span>
            </div>
            <div className="right">
              <span>ISSUE Nº <b>06 / 2026</b></span>
              <span>ROSTER CAP <b>100 LIFTERS</b></span>
              <span className="seats-tag">SEATS OPEN <b className="seats-num">07</b></span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="hero-title">
            <span className="line">
              <TextStagger text="THE BAR" as="span" delay={0.1} staggerDelay={0.06} />
            </span>
            <span className="line">
              <TextStagger text="DOESN'T" as="span" delay={0.2} staggerDelay={0.06} />{" "}
              <span className="italic-serif">care</span>
            </span>
            <span className="line">
              <span className="hit">
                <TextStagger text="HOW YOU FEEL." as="span" delay={0.3} staggerDelay={0.06} />
              </span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="hero-sub">
            A coach-run barbell club for lifters who want to get <em>actually stronger</em>, not just look busy on Instagram.
            Twelve-week blocks. Eight lifters per coach. Zero contracts.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="hero-ctas">
            <BrutalButton href="#cta" variant="primary" arrow>
              Apply for Intro Week
            </BrutalButton>
            <BrutalButton href="#manifesto" variant="ghost">
              Read the manifesto
            </BrutalButton>
          </div>
        </Reveal>
      </div>

      <PlatformStatus />
    </section>
  );
}