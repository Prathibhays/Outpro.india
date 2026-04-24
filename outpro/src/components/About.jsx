export default function About() {
  return (
    <section className="about" id="about">

      {/* LEFT SIDE */}
      <div className="about-left reveal">
        <div className="section-label">Who We Are</div>

        <h2 className="section-title">
          Born From<br />
          <em>Athletes.</em><br />
          Built for<br />
          Organizers.
        </h2>

        <p className="about-desc">
          We started as a community of athletes and event organizers in Jaipur. 
          What we lacked — we built. Today, Outpro.India is a full-fledged sports & 
          adventure event management company that blends precision, creativity, 
          and passion to deliver unforgettable experiences.
        </p>

        <div className="about-tags">
          <span className="about-tag">Football</span>
          <span className="about-tag">E-Sports</span>
          <span className="about-tag">Cricket</span>
          <span className="about-tag">Corporate Sports</span>
          <span className="about-tag">Adventure</span>
          <span className="about-tag">College Fests</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="about-right reveal">

        <div className="about-card">
          <div className="about-card-title">Our Mission</div>
          <div className="about-card-text">
            Every sporting moment deserves world-class execution. We take ownership 
            from concept to final whistle — so you never have to worry about what 
            happens behind the scenes.
          </div>
        </div>

        <div className="about-card">
          <div className="about-card-title">Our Promise</div>
          <div className="about-card-text">
            Same-day response. Transparent pricing — no surprises. On-time execution, 
            always. Starting at just ₹1,099, we build a plan around your budget.
          </div>
        </div>

        <div className="about-card">
          <div className="about-card-title">Our Reach</div>
          <div className="about-card-text">
            Based in Jaipur, serving Pan-India. From grassroots tournaments to 
            corporate leagues and adventure challenges.
          </div>
        </div>

      </div>

    </section>
  );
}