import '../css/footer.css';

function Footer({ variant = "default" }) {
  return (
    <footer className={`footer ${variant === "blue" ? "footer-blue" : ""}`}>

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h3 className="footer-logo">AURA</h3>

          <p>
            Find somewhere worth remembering.
            <br />
            Your journey, your story.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">

          {/* Explore */}
          <div className="footer-column">
            <h4>Explore</h4>
            <ul>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Experiences</a></li>
              <li><a href="#">Travel Guides</a></li>
              <li><a href="#">Trip Planner</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-column">
            <h4>Follow Us</h4>

            <div className="social-icons">
              {/* Instagram */}
              <a href="#" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.7.3-1 1-1z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a href="#" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.39L6.46 22H3.35l7.24-8.28L2.8 2h6.41l4.43 5.86L18.9 2zm-1.1 17.9h1.73L8.35 4H6.49L17.8 19.9z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a href="#" aria-label="Pinterest">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.67 7.88 6.44 9.29-.09-.79-.17-2.01.04-2.87.18-.78 1.18-5.01 1.18-5.01s-.3-.6-.3-1.49c0-1.4.81-2.44 1.82-2.44.86 0 1.27.64 1.27 1.41 0 .86-.55 2.14-.83 3.33-.24.99.5 1.8 1.48 1.8 1.78 0 3.15-1.88 3.15-4.58 0-2.4-1.72-4.07-4.18-4.07-2.85 0-4.52 2.13-4.52 4.34 0 .86.33 1.78.74 2.28.08.1.09.18.07.28l-.28 1.13c-.04.18-.15.22-.34.13-1.28-.6-2.08-2.48-2.08-3.99 0-3.25 2.36-6.23 6.81-6.23 3.58 0 6.36 2.55 6.36 5.96 0 3.55-2.24 6.41-5.35 6.41-1.04 0-2.03-.54-2.37-1.18l-.64 2.45c-.23.9-.86 2.02-1.28 2.71 1.02.3 2.1.46 3.22.46 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2026 AURA. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;