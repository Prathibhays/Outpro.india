export default function Process() {
  const steps = [
    {
      num: "Step 01",
      title: "Tell Us What You Need",
      desc: "Share your event idea, date, location, and budget."
    },
    {
      num: "Step 02",
      title: "We Build Your Plan",
      desc: "Same-day custom proposal with transparent pricing."
    },
    {
      num: "Step 03",
      title: "We Execute Everything",
      desc: "From setup to final whistle, we handle everything."
    },
    {
      num: "Step 04",
      title: "You Celebrate",
      desc: "Post-event report, media assets, and full debrief."
    }
  ];

  return (
    <section className="process" id="process">

      <div className="reveal">
        <div className="section-label">How It Works</div>
        <h2 className="section-title">
          From Call to<br />Final Whistle.
        </h2>
      </div>

      <div className="process-steps">
        {steps.map((step, i) => (
          <div className="process-step reveal" key={i}>
            <div className="step-dot"></div>
            <div className="step-num">{step.num}</div>
            <div className="step-title">{step.title}</div>
            <div className="step-desc">{step.desc}</div>
          </div>
        ))}
      </div>

    </section>
  );
}