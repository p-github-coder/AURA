// OurStory.jsx
import '../css/ourstory.css';
import mountain from '../assets/mountain.jpg';

function OurStory() {
  return (
    <section id="our-story" className="our-story">
      <div className="our-story-container">
        <div className="our-story-text">
          <span className="section-label">Our story</span>

          <h2>
            Making every journey
            <br />
            extraordinary
          </h2>

          <p>
            Aura was born from a love for exploration and the belief that
            travel should be accessible, seamless, and inspiring for everyone.
            We combine smart planning tools with handpicked experiences
            to help you discover the world with confidence.
          </p>
        </div>

        <div className="our-story-image">
          <img
            src={mountain}
            alt="Traveler looking at mountains"
          />
        </div>
      </div>
    </section>
  );
}

export default OurStory;