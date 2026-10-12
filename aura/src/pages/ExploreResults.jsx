import { useSearchParams, Link } from 'react-router-dom';
import { destinationDetails } from '../data/destinationDetails';
import '../css/exploreresults.css';

function ExploreResults() {
  const [searchParams] = useSearchParams();
  const country = searchParams.get('country');
  const category = searchParams.get('category');

  const results = [];

  Object.entries(destinationDetails).forEach(([id, dest]) => {
    // If a country is provided, filter by it. If not, show all countries.
    if (country && dest.country.toLowerCase() !== country.toLowerCase()) {
      return;
    }

    if (Array.isArray(dest[category])) {
      dest[category].forEach((item) => {
        results.push({
          ...item,
          place: dest.name,       // e.g. Santorini, Athens, Tokyo...
          placeId: id,
          country: dest.country,
        });
      });
    }
  });

  const categoryTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : '';

  // Only category is required now
  if (!category) {
    return (
      <div className="explore-page">
        <div className="explore-header">
          <h1>No category selected</h1>
          <Link to="/explore" className="back-link">
            ← Back to Explore
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="explore-page">
      <div className="explore-header">
        <h1>
          {categoryTitle}
          {country ? ` in ${country}` : ' around the world'}
        </h1>
        <p>
          {results.length} result{results.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {results.length === 0 ? (
        <p className="no-results">
          No {category} found{country ? ` in ${country}` : ''} yet.
        </p>
      ) : (
        <div className="explore-grid">
          {results.map((item, index) => (
            <div className="explore-card" key={index}>
              {item.image && (
                <div className="explore-card-image">
                  <img src={item.image} alt={item.name} />
                  <span className="place-badge">{item.place}</span>
                </div>
              )}

              <div className="explore-card-content">
                <h3>{item.name}</h3>
                <p>{item.description || item.note}</p>

                {item.type && (
                  <p className="hotel-meta">
                    {item.type} · {item.price}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="explore-back">
        <Link to="/explore" className="back-link">
          ← Back to Explore
        </Link>
      </div>
    </div>
  );
}

export default ExploreResults;