// plan page
import { MapPin, Calendar, Users } from 'lucide-react';
import '../css/startplanning.css';

function StartPlanning() {
  return (
    <section className="start-planning">
      <div className="start-planning-card">
        <h2>Start planning your next adventure</h2>

        <div className="planning-form">
          <div className="form-group">
            <label>Where are you going?</label>
            <div className="input-wrapper">
              <MapPin size={18} />
              <input type="text" placeholder="Search destination" />
            </div>
          </div>

          <div className="form-group">
            <label>When?</label>
            <div className="input-wrapper">
              <Calendar size={18} />
              <input type="text" placeholder="Select dates" />
            </div>
          </div>

          <div className="form-group">
            <label>Travelers</label>
            <div className="input-wrapper">
              <Users size={18} />
              <input type="text" placeholder="Add travelers" />
            </div>
          </div>

          <button className="start-btn">Start planning</button>
        </div>
      </div>
    </section>
  );
}

export default StartPlanning;