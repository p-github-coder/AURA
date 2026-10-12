import { Map, CalendarDays, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../css/planwithease.css';

function PlanWithEase() {
  return (
    <section className="plan-section">
      <div className="plan-container">
        {/* Left intro */}
        <div className="plan-intro">
          <span className="plan-label">Plan with ease</span>

          <h2>
            Everything you need
            <br />
            for the perfect trip
          </h2>

          <p>
            Plan, book and manage your trips
            <br />
            all in one place. Your adventure
            <br />
            starts here.
          </p>

          <Link to="/plan" className="plan-button">
            Start planning
          </Link>
        </div>

        {/* Right features */}
        <div className="plan-features">
          <div className="plan-feature">
            <div className="feature-icon">
              <Map size={24} strokeWidth={1.75} />
            </div>
            <h3>Smart Planning</h3>
            <p>
              Plan your itinerary
              <br />
              with smart recommendations
              <br />
              and real-time insights.
            </p>
          </div>

          <div className="plan-feature">
            <div className="feature-icon">
              <CalendarDays size={24} strokeWidth={1.75} />
            </div>
            <h3>Book Easily</h3>
            <p>
              Book flights, stays and
              <br />
              experiences in just a
              <br />
              few clicks.
            </p>
          </div>

          <div className="plan-feature">
            <div className="feature-icon">
              <Heart size={24} strokeWidth={1.75} />
            </div>
            <h3>Save Favorites</h3>
            <p>
              Save places you love
              <br />
              and build your own
              <br />
              travel wishlist.
            </p>
          </div>

          <div className="plan-feature">
            <div className="feature-icon">
              <Shield size={24} strokeWidth={1.75} />
            </div>
            <h3>Travel with Confidence</h3>
            <p>
              24/7 support and flexible
              <br />
              options for worry-free
              <br />
              adventures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanWithEase;