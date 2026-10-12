// plan page
import { Map, Settings, Heart, Share2 } from 'lucide-react';
import '../css/planhero.css';
import backpack from '../assets/backpack.jpg';

function PlanHero() {
  return (
    <section
      className="plan-hero"
      style={{
        backgroundImage: `url(${backpack})`,
      }}
    >
      <div className="plan-hero-container">

        {/* Left content */}
        <div className="plan-hero-content">

          <h1>
            Plan your trip,
            <br />
            your way
          </h1>

          <p>
            Create, organize and customize your
            <br />
            perfect trip in just a few steps.
          </p>

          <div className="plan-features">

            <div className="plan-feature">
              <div className="feature-icon">
                <Map size={20} />
              </div>

              <div>
                <h4>Create</h4>
                <span>Build your itinerary</span>
              </div>
            </div>

            <div className="plan-feature">
              <div className="feature-icon">
                <Settings size={20} />
              </div>

              <div>
                <h4>Customize</h4>
                <span>Make it yours</span>
              </div>
            </div>

            <div className="plan-feature">
              <div className="feature-icon">
                <Heart size={20} />
              </div>

              <div>
                <h4>Save</h4>
                <span>Keep everything in one place</span>
              </div>
            </div>

            <div className="plan-feature">
              <div className="feature-icon">
                <Share2 size={20} />
              </div>

              <div>
                <h4>Share</h4>
                <span>Share with friends and family</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PlanHero;