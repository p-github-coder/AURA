import { Link } from 'react-router-dom';
import '../css/mission.css';

function Mission() {
  return (
    <section className="mission">
      <div className="mission-container">
        <div className="mission-content">
          <h2>
            Let's create your next
            <br />
            unforgettable memory
          </h2>
          <p>
            Your adventure starts with a plan. We're here to help.
          </p>
          <Link to="/plan" className="mission-btn">
            Start planning
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Mission;