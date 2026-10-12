// discover page
import '../css/inspiration.css';
import bookcam2 from '../assets/bookcam2.png';

function Inspiration() {
  return (
    <section className="inspiration">
      <div className="inspiration-container">

        {/* Left side */}
        <div className="inspiration-left">
          <img 
            src={bookcam2} 
            alt="Travel journal and camera" 
            className="inspiration-img"
          />

          <div className="inspiration-text">
            <h2>
              Get travel inspiration
              <br />
              delivered to your inbox
            </h2>
            <p>
              Stories, guides and exclusive tips
              <br />
              to fuel your next adventure.
            </p>
          </div>
        </div>

        {/* Right side - Form */}
        <form className="inspiration-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>

      </div>
    </section>
  );
}

export default Inspiration;