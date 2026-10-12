// discover page
import '../css/discoverhero.css';

function DiscoverHero() {
  return (
    <section className="discover-hero">
      <div className="discover-hero-overlay">
        <div className="discover-hero-content">
          <h1>
            Discover
            <br />
            inspiration
          </h1>
          <p>
            Travel stories, guides and tips to
            <br />
            inspire your next adventure.
          </p>
          <button className="discover-hero-btn">Start discovering</button>
        </div>
      </div>
    </section>
  );
}

export default DiscoverHero;