import { useParams, Link } from 'react-router-dom';
import { destinationDetails } from '../data/destinationDetails';
import '../css/descriptions.css';

function Descriptions() {
  const { id } = useParams();
  const dest = destinationDetails[id];

  if (!dest) {
    return (
      <div className="desc-not-found">
        <h2>Destination not found</h2>
        <p>We couldn’t find details for this place yet.</p>
        <Link to="/alldestinations" className="back-btn">
          ← Back to all destinations
        </Link>
      </div>
    );
  }

  // Reusable Section component
  const Section = ({ id, title, items }) => {
    if (!items || items.length === 0) return null;

    return (
      <section id={id} className="desc-section">
        <div className="desc-section-header">
          <h2>{title}</h2>
        </div>

        <div className="desc-grid">
          {items.map((item, i) => (
            <div key={i} className="desc-card">
              {item.image && (
                <div className="desc-card-image">
                  <img src={item.image} alt={item.name} />
                </div>
              )}
              <div className="desc-card-content">
                <h3>{item.name}</h3>
                {item.type && (
                  <p className="hotel-meta">
                    {item.type} · {item.price}
                  </p>
                )}
                <p>{item.description || item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="descriptions-page">
      {/* ===== HERO ===== */}
      <section
        className="desc-hero"
        style={{
          backgroundImage: `url(${dest.heroImage})`,
        }}
      >
        <div className="desc-hero-content">
          <span className="desc-country">{dest.country}</span>
          <h1>{dest.name}</h1>
          <p className="desc-tagline">{dest.tagline}</p>

          <div className="desc-rating">
            <span className="star">★</span>
            <span>{dest.rating}</span>
            <span className="reviews">({dest.reviews} reviews)</span>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="desc-container">
        {/* Overview floating panel */}
        <div className="desc-panel">
          <section className="overview-section">
            <h2>Overview</h2>
            <p>{dest.overview}</p>
          </section>
        </div>

        {/* Sticky Section Navigation */}
        <nav className="section-nav">
          {dest.beaches?.length > 0 && <a href="#beaches">Beaches</a>}
          {dest.nature?.length > 0 && <a href="#nature">Nature</a>}
          {dest.culture?.length > 0 && <a href="#culture">Culture</a>}
          {dest.adventure?.length > 0 && <a href="#adventure">Adventure</a>}
          {dest.food?.length > 0 && <a href="#food">Food</a>}
          {dest.hotels?.length > 0 && <a href="#stay">Stay</a>}
        </nav>

        {/* Dynamic Sections */}
        <Section id="beaches" title="Beaches" items={dest.beaches} />
        <Section id="nature" title="Nature & Landscapes" items={dest.nature} />
        <Section id="culture" title="Cities & Culture" items={dest.culture} />
        <Section id="adventure" title="Adventures & Experiences" items={dest.adventure} />
        <Section id="food" title="Food & Dining" items={dest.food} />
        <Section id="stay" title="Where to Stay" items={dest.hotels} />

        {/* Back Button */}
        <div className="desc-back">
          <Link to="/alldestinations" className="back-btn">
            ← Back to all destinations
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Descriptions;