export default function Testimonials() {
  const testimonials = [
    {
      text: "Outpro handled our corporate football league end-to-end. From venue coordination to live scoring, they were always two steps ahead.",
      author: "Rajat Sharma",
      role: "HR Head · Tech Corp, Jaipur"
    },
    {
      text: "We outsourced our college sports fest to Outpro and it was the best decision we made. 400+ students, 6 sports, 2 days — everything ran like clockwork.",
      author: "Priya Mehta",
      role: "Cultural Secretary · MNIT Jaipur"
    },
    {
      text: "Their brand activation work was spot on. Sambhav's team made sure our logo was visible everywhere.",
      author: "Anuj Kapoor",
      role: "Marketing Director · Ideal Multi Sports"
    }
  ];

  return (
    <section className="testimonials" id="testimonials">

      <div className="testimonials-header">
        <div>
          <div className="section-label">What Clients Say</div>
          <h2 className="section-title">
            Real Events.<br />Real Results.
          </h2>
        </div>
      </div>

      <div className="testi-grid">
        {testimonials.map((t, i) => (
          <div className="testi-card reveal" key={i}>
            <div className="testi-quote">"</div>
            <div className="testi-text">{t.text}</div>
            <div className="testi-author">{t.author}</div>
            <div className="testi-role">{t.role}</div>
          </div>
        ))}
      </div>

    </section>
  );
}