// plan page
import { Clock, Users } from 'lucide-react';
import '../css/populartrip.css';
import greek from '../assets/greek.jpg';
import swiss from '../assets/swiss.jpg';
import japan from '../assets/japan.jpg';
import maldives from '../assets/maldives.jpg';


function PopularTrip() {
  const trips = [
    {
      days: '7 DAYS',
      title: 'Greek Islands Escape',
      location: 'Santorini, Mykonos & More',
      price: 'From $1,299',
      people: '2-4 people',
      image: greek,
    },
    {
      days: '10 DAYS',
      title: 'Swiss Alps Adventure',
      location: 'Zurich, Interlaken & Zermatt',
      price: 'From $1,899',
      people: '2-6 people',
      image: swiss,
    },
    {
      days: '9 DAYS',
      title: 'Japan Cultural Journey',
      location: 'Tokyo, Kyoto & Osaka',
      price: 'From $1,599',
      people: '1-4 people',
      image: japan,
    },
    {
      days: '6 DAYS',
      title: 'Maldives Getaway',
      location: 'Relax in Paradise',
      price: 'From $2,299',
      people: '2 people',
      image: maldives,
    },
  ];

  return (
    <section className="popular-trip">
      <div className="popular-trip-container">
        <div className="section-header">
          <h2>Popular trip ideas</h2>
          <a href="#" className="view-all">
            View all itineraries →
          </a>
        </div>

        <div className="trips-grid">
          {trips.map((trip) => (
            <div className="trip-card" key={trip.title}>
              <div className="trip-image">
                <img src={trip.image} alt={trip.title} />
                <span className="trip-days">{trip.days}</span>
              </div>
              <div className="trip-content">
                <h3>{trip.title}</h3>
                <p>{trip.location}</p>
                <div className="trip-meta">
                  <span>
                    <Clock size={14} /> {trip.price}
                  </span>
                  <span>
                    <Users size={14} /> {trip.people}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularTrip;