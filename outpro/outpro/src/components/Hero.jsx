export default function Hero() {
  const stats = [
    { num: "50+", label: "Events Executed" },
    { num: "500+", label: "Athletes Managed" },
    { num: "100%", label: "On-Time Handoffs" }
  ];

  return (
    <section className="hero">

      {/* BACKGROUND */}
      <div className="hero-bg"></div>
      <div className="hero-gradient"></div>

      {/* CONTENT (LEFT) */}
      <div className="hero-content">
        <div className="hero-eyebrow">
          Jaipur, Rajasthan · Est. 2025
        </div>

        <h1 className="hero-title">
          YOU WANT <br />
          <span>THE EVENT.</span><br />
          NOT THE CHAOS.
        </h1>

        <p className="hero-sub">
          End-to-end sports & adventure event management. From concept to final whistle — we own every detail so you can focus on your game.
        </p>

        <div className="hero-actions">
          <a href="https://wa.me/918957239847" className="btn-primary">
            Plan Your Event →
          </a>
        </div>
      </div>

      {/* STATS (BOTTOM RIGHT) */}
      <div className="hero-stats">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

    </section>
  );
}

