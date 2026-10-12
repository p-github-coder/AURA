// discover page
import { Map, Lightbulb, Camera, Wallet, Calendar } from 'lucide-react';
import '../css/travelguides.css';

function TravelGuides() {
  const guides = [
    {
      icon: Map,
      title: 'Destination Guides',
      desc: 'In-depth guides to help you explore the best of every place.',
    },
    {
      icon: Lightbulb,
      title: 'Travel Tips',
      desc: 'Expert tips to travel smarter, safer and cheaper.',
    },
    {
      icon: Camera,
      title: 'Photo Spots',
      desc: 'Discover the most photogenic places around the world.',
    },
    {
      icon: Wallet,
      title: 'Budget Travel',
      desc: 'Tips and ideas to travel more for less money.',
    },
    {
      icon: Calendar,
      title: 'Best Time to Go',
      desc: 'Find out the best time to visit your dream destinations.',
    },
  ];

  return (
    <section className="travel-guides">
      <div className="travel-guides-container">
        <div className="section-header">
          <h2>Travel guides</h2>
          <a href="#" className="view-all">
            View all guides →
          </a>
        </div>

        <div className="guides-grid">
          {guides.map((guide) => (
            <div className="guide-card" key={guide.title}>
              <div className="guide-icon">
                <guide.icon size={22} strokeWidth={1.75} />
              </div>
              <h3>{guide.title}</h3>
              <p>{guide.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelGuides;