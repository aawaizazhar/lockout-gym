import BrutalButton from "./BrutalButton";
import PlatformStatus from "./PlatformStatus";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-left">
        <div className="hero-meta">
          <div className="left">
            <span>PITTSBURGH · STRIP DISTRICT</span>
            <span>[4127 SMALLMAN ST]</span>
            <span>EST. 2019</span>
          </div>
          <div className="right">
            <span>ISSUE Nº <b>06 / 2026</b></span>
            <span>ROSTER CAP <b>180 LIFTERS</b></span>
            <span>SEATS OPEN <b>07</b></span>
          </div>
        </div>

        <h1 className="hero-title">
          <span className="line">THE BAR</span>
          <span className="line">
            DOESN&apos;T <span className="italic-serif">care</span>
          </span>
          <span className="line">
            <span className="hit">HOW YOU FEEL.</span>
          </span>
        </h1>

        <p className="hero-sub">
          A coach-run barbell club for lifters who want to get <em>actually stronger</em>, not just look busy on Instagram.
          Twelve-week blocks. Eight lifters per coach. Zero contracts.
        </p>

        <div className="hero-ctas">
          <BrutalButton href="#cta" variant="primary" arrow>
            Apply for Intro Week
          </BrutalButton>
          <BrutalButton href="#manifesto" variant="ghost">
            Read the manifesto
          </BrutalButton>
        </div>
      </div>

      <PlatformStatus />
    </section>
  );
}