// About page
import { Heart, Compass, Shield, Globe } from 'lucide-react';
import '../css/auravalue.css';
function AuraValue() {
  return (
    <section className="aura-value">
      <div className="aura-value-container">
        <span className="section-label1">What we value</span>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <Heart size={24} strokeWidth={1.75} />
            </div>
            <h3>Customer First</h3>
            <p>
              Your happiness is our
              <br />
              priority at every step
              <br />
              of your journey.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Compass size={24} strokeWidth={1.75} />
            </div>
            <h3>Curated Experiences</h3>
            <p>
              We handpick the best
              <br />
              places and experiences
              <br />
              worth your time.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Shield size={24} strokeWidth={1.75} />
            </div>
            <h3>Trust & Safety</h3>
            <p>
              We're committed to your
              <br />
              safety, privacy and peace
              <br />
              of mind.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Globe size={24} strokeWidth={1.75} />
            </div>
            <h3>Sustainable Travel</h3>
            <p>
              We promote responsible
              <br />
              travel that respects cultures
              <br />
              and the planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuraValue;