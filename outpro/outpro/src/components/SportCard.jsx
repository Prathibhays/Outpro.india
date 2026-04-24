export default function SportCard({ title, tag, img }) {
  return (
    <div className="sport-card">
      <img className="card-img" src={img} alt={title} />
      <div className="card-dark-overlay" />
      <div className="card-overlay" />
      <div className="card-content">
        <div className="card-badge">{tag}</div>
        <div className="card-title">{title}</div>
        <div className="card-stars">
          {[...Array(4)].map((_, i) => (
            <span className="star" key={i}>★</span>
          ))}
          <span className="star-empty">★</span>
        </div>
      </div>
    </div>
  );
}
