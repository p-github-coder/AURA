// plan page
import { Route, RefreshCw, CalendarCheck, Headphones } from 'lucide-react';
import '../css/planbelow.css';

function PlanBelow() {
  const items = [
    {
      icon: Route,
      title: 'Personalized Itineraries',
      desc: 'Plans tailored to your interests and budget.',
    },
    {
      icon: RefreshCw,
      title: 'Real-time Updates',
      desc: 'Get updates on flights, weather and more.',
    },
    {
      icon: CalendarCheck,
      title: 'Easy Booking',
      desc: 'Book everything in one secure place.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      desc: "We're here to help, anytime, anywhere.",
    },
  ];

  return (
    <section className="plan-below">
      <div className="plan-below-container">
        {items.map((item) => (
          <div className="below-card" key={item.title}>
            <div className="below-icon">
              <item.icon size={22} strokeWidth={1.75} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlanBelow;