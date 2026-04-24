export default function Services() {
  const services = [
    {
      num: "01",
      icon: "🏆",
      title: "Event Management",
      desc: "End-to-end tournament and event execution. Fixtures, ground ops, referees, crowd control — we own every detail.",
      tag: "Zero-chaos execution →"
    },
    {
      num: "02",
      icon: "🚛",
      title: "Logistics & Operations",
      desc: "Equipment sourcing, venue setup, AV systems, transportation, and vendor coordination.",
      tag: "Everything in place, on time →"
    },
    {
      num: "03",
      icon: "📣",
      title: "Event Marketing",
      desc: "Social media coverage, promo graphics, fan engagement, and digital campaigns.",
      tag: "Buzz before, during & after →"
    },
    {
      num: "04",
      icon: "🏃",
      title: "Athlete Management",
      desc: "Player registrations, team liaisoning, accommodation, and logistics.",
      tag: "Athletes focused, not stressed →"
    },
    {
      num: "05",
      icon: "🎯",
      title: "Brand Activation",
      desc: "On-site branding, sponsor placements, VIP zones, and sponsor visibility.",
      tag: "Sponsors get seen →"
    },
    {
      num: "06",
      icon: "🤝",
      title: "Consulting & Outsourcing",
      desc: "We deploy trained ground staff and take full execution ownership.",
      tag: "Expert ops without overhead →"
    }
  ];

  return (
    <section className="services" id="services">
      
      {/* HEADER */}
      <div className="services-header">
        <div>
          <div className="section-label">What We Do</div>
          <h2 className="section-title">
            Six Pillars.<br />Zero Chaos.
          </h2>
        </div>

        <a href="https://wa.me/918957239847" className="btn-primary">
          Get a Custom Quote
        </a>
      </div>

      {/* GRID */}
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card reveal" key={i}>
            <div className="service-num">{s.num}</div>
            <div className="service-icon">{s.icon}</div>
            <div className="service-title">{s.title}</div>
            <div className="service-desc">{s.desc}</div>
            <div className="service-tag">{s.tag}</div>
          </div>
        ))}
      </div>

    </section>
  );
}