export default function Footer() {
  return (
    <footer className="site-footer" id="contact" aria-label="Site footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-block">L</span> LOCKOUT
            </a>
            <p>
              A private barbell club for lifters who take the work seriously. 120 total members. 8 competition platforms. Zero bullshit.
            </p>
          </div>

          <div className="footer-col">
            <h3>NAVIGATION</h3>
            <ul>
              <li>
                <a href="#manifesto">Manifesto</a>
              </li>
              <li>
                <a href="#programs">Programs</a>
              </li>
              <li>
                <a href="#coaches">Coaches</a>
              </li>
              <li>
                <a href="#pricing">Membership</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>LOCATION</h3>
            <ul>
              <li>412 IRON WORKS WAY</li>
              <li>SUITE 01, DOCK D</li>
              <li>CHICAGO, IL 60609</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>HOURS</h3>
            <ul>
              <li>M-F: 05:00 – 21:00</li>
              <li>SAT: 07:00 – 18:00</li>
              <li>SUN: CLOSED</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2024 LOCKOUT BARBELL CLUB</div>
          <div className="center">BUILT FOR THE PLATFORM</div>
          <div className="right">DESIGNED BY RAW STUDIO</div>
        </div>
      </div>
    </footer>
  );
}
