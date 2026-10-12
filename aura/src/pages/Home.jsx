import { Link } from 'react-router-dom';
import '../css/home.css';

function Home() {
  return (
    <section className="hero">
      <div className="page">
        <h1>
          Find somewhere
          <br />
          worth remembering
        </h1>
        <p>
          Discover remarkable places, unforgettable experiences, and <br /> destinations worth remembering
        </p>
        <Link to="/explore" className="button">
          Explore destinations
        </Link>
      </div>
    </section>
  );
}

export default Home;