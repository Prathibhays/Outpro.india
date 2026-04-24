export default function Footer() {
  return (
    <footer>

      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-brand">
          <a href="#home" className="logo">
            OUT<span>PRO</span>.INDIA
          </a>

          <p className="footer-tagline">
            Sports & Adventure Event Management. Born in Jaipur. Built to deliver extraordinary sporting experiences across India.
          </p>

          <div className="footer-social">
            <a href="https://wa.me/918957239847" className="social-btn">W</a>
            <a href="https://www.instagram.com/outpro.india/" className="social-btn">IG</a>
            <a href="https://in.linkedin.com/company/outpro-india" className="social-btn">Li</a>
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <div className="footer-col-title">Navigate</div>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#process">How It Works</a></li>
            <li><a href="#testimonials">Client Stories</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            <li><a href="#services">Event Management</a></li>
            <li><a href="#services">Logistics & Ops</a></li>
            <li><a href="#services">Event Marketing</a></li>
            <li><a href="#services">Athlete Management</a></li>
            <li><a href="#services">Brand Activation</a></li>
            <li><a href="#services">Consulting</a></li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-copy">
          © 2026 Outpro.India · All rights reserved
        </div>
        <div className="footer-location">
          Jaipur, Rajasthan · Est. 2025 🇮🇳
        </div>
      </div>

    </footer>
  );
}