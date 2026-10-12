// AboutHero.jsx
import '../css/abouthero.css';

function AboutHero() {
  const scrollToOurStory = () => {
    const section = document.getElementById('our-story');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="about-hero">
      <div className="about-hero-overlay">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>
            We're here to make travel simple, meaningful, and
            <br />
            unforgettable. Your journey is our passion.
          </p>
          <button className="about-hero-btn" onClick={scrollToOurStory}>
            Our story
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;