const items = ["No Contracts", "No Mirrors", "No Machines", "No Excuses", "Just The Bar"];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-group">
          {items.map((item) => (
            <span key={item}>
              {item}
              <span className="x">✕</span>
            </span>
          ))}
        </div>
        <div className="marquee-group">
          {items.map((item) => (
            <span key={`dup-${item}`}>
              {item}
              <span className="x">✕</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}