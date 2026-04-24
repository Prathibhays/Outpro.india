/*import { NAV_LINKS } from "../data/sportsData";

function OutproLogo() {
  return (
    <div className="logo">
      <div className="logo-mark">
        <div className="logo-slashes">
          <span className="slash s1" />
          <span className="slash s2" />
          <span className="slash s3" />
        </div>
        <div className="logo-text-group">
          <span className="logo-outpro">OUTPRO</span>
          <span className="logo-india">India</span>
        </div>
        <div className="logo-tagline">SPORTS AND MANAGEMENT · ESTD. 2025</div>
      </div>
    </div>
  );
}

export default function Navbar({ scrolled, activeNav, setActiveNav }) {
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : "top"}`}>
      <OutproLogo />

      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li
            key={link}
            className={activeNav === link ? "active" : ""}
            onClick={() => setActiveNav(link)}
          >
            {link}
          </li>
        ))}
      </ul>

      <div className="nav-btns">
        <button className="btn-ghost">Bets</button>
        <button className="btn-red">Sports Live</button>
      </div>
    </nav>
  );
}*/
function OutproLogo() {
  return (
    <div className="logo">
      <div className="logo-text-group">
        <span className="logo-outpro">OUTPRO</span>
        <span className="logo-india">India</span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Process", id: "process" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <nav className="navbar">
      <OutproLogo />

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.name}>
            <a href={`#${link.id}`}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}