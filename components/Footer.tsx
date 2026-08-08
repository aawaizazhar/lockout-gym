import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="logo" href="#top">
              <span className="logo-block" aria-hidden="true">L</span>
              <span>LOCKOUT</span>
            </Link>
            <p>Coach-run barbell club in the Strip District, Pittsburgh. Eight lifters per coach. Chalk on the house.</p>
          </div>

          <div className="footer-col">
            <h3>HOURS</h3>
            <ul>
              <li>MON–FRI · 05:00–21:00</li>
              <li>SAT · 08:00–14:00</li>
              <li>SUN · 09:00–13:00</li>
              <li>(SUN: OPEN GYM)</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>CONTACT</h3>
            <ul>
              <li>[4127 SMALLMAN ST]</li>
              <li>[PITTSBURGH, PA 15201]</li>
              <li>[(412) 555-0148]</li>
              <li>[HELLO@LOCKOUT.CLUB]</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>ELSEWHERE</h3>
            <ul>
              <li>
                <a href="#">INSTAGRAM ↗</a>
              </li>
              <li>
                <a href="#">YOUTUBE ↗</a>
              </li>
              <li>
                <a href="#">STRAVA ↗</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} LOCKOUT STRENGTH CLUB</div>
          <div className="center">NO EXCUSES</div>
          <div className="right">ISSUE Nº 06 · PRINTED IN PGH</div>
        </div>
      </div>
    </footer>
  );
}