export default function Portfolio() {
  const projects = [
    {
      title: "RUFC Winter Cup",
      category: "Football Tournament",
      stats: "2-Day Event • 200+ Players",
      img: "https://media.licdn.com/dms/image/v2/D5622AQFkiH79U1_BoQ/feedshare-shrink_800/B56ZuccZoHG4Ag-/0/1767856251213?e=1778716800&v=beta&t=kcH6Aaw5Xt8hCerr4whr1C7OK4FZOuKoDX8crdau5Yc"
    },
    {
      title: "UDAAN Sports Day",
      category: "NGO Community Event",
      stats: "150+ Participants • Kids Engagement",
      img: "https://media.licdn.com/dms/image/v2/D5622AQFOLPLepqPCIQ/feedshare-shrink_800/B56ZvLIToDIQAg-/0/1768639511303?e=1778716800&v=beta&t=J4_l3UVG_dxTN-dJWqelbRuZpfKYVod9_4fVgyWQuEY"
    },
    {
      title: "Corporate Sports League",
      category: "Corporate Event",
      stats: "Multi-Team • Full Logistics",
      img: "/assets/portfolio/corporate.jpg"
    },
    {
      title: "UNLOX Partnership",
      category: "Brand Collaboration",
      stats: "Sports + Learning Initiative",
      img: "https://media.licdn.com/dms/image/v2/D5622AQG83dMeCHgYgg/feedshare-shrink_800/B56Zud.KVLJUAg-/0/1767881878209?e=1778716800&v=beta&t=73yyW8mrPf15IStilsW97lZSxx9cRANseGG4NepK5bQ"
    },
    {
      title: "LaunchED Global",
      category: "Career + Sports Ecosystem",
      stats: "Youth Development Program",
      img: "https://media.licdn.com/dms/image/v2/D5622AQF-WbjxjYebqw/feedshare-shrink_2048_1536/B56ZslzKDQGsA4-/0/1765865739905?e=1778716800&v=beta&t=kZNMhCZnm2MUNv-C8MQJ9hq-4Ocw5hxj0FWwZe4vTiE"
    },
    /*{
      title: "College Sports Fest",
      category: "University Event",
      stats: "400+ Students • 6 Sports",
      img: "/assets/portfolio/college.jpg"
    }*/
  ];

  return (
    <section className="portfolio" id="portfolio">

      <div className="portfolio-header">
        <div className="section-label">Our Work</div>
        <h2 className="section-title">
          Events That<br />Define Us.
        </h2>
      </div>

      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <div className="portfolio-card" key={i}>
            <img src={p.img} alt={p.title} />

            <div className="portfolio-overlay">
              <h3>{p.title}</h3>
              <p>{p.category}</p>
              <span>{p.stats}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}