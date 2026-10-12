// Home Page
import '../css/stayintouch.css';
function StayInTouch() {
  return (
    <section className="stay-section">
      <div className="stay-container">

        {/* Left content */}
        <div className="stay-text">
          <h2>Let's stay in touch</h2>

          <p>
            Get travel inspiration and exclusive deals
            <br />
            straight to your inbox.
          </p>
        </div>

        {/* Email form */}
        <form className="stay-form">
          <input
            type="email"
            placeholder="Enter your email"
          />

          <button type="submit">
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
}

export default StayInTouch;