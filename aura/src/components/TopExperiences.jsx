// Explore page
import { Star, MapPin } from 'lucide-react';
import '../css/topexperiences.css';
import scubadiving from '../assets/scubadiving.jpg';
import hotairballoon from '../assets/hotairballoon.jpg';
import safari from '../assets/safari.jpg';
import  nothern from '../assets/nothern.jpg';

function TopExperiences() {
  const experiences = [
    {
      title: 'Scuba Diving in Maldives',
      location: 'Maldives',
      rating: '4.8',
      reviews: '1.2k',
      image: scubadiving,
    },
    {
      title: 'Hot Air Balloon in Cappadocia',
      location: 'Turkey',
      rating: '4.7',
      reviews: '980',
      image: hotairballoon,
    },
    {
      title: 'Safari Adventure in Kenya',
      location: 'Kenya',
      rating: '4.9',
      reviews: '1.5k',
      image: safari,
    },
    {
      title: 'Northern Lights in Iceland',
      location: 'Iceland',
      rating: '4.8',
      reviews: '1.1k',
      image: nothern,
    },
  ];

  return (
    <section className="top-experiences">
      <div className="top-experiences-container">
        <div className="section-header">
          <h2>Top experiences</h2>
          <a href="#" className="view-all">
            View all experiences →
          </a>
        </div>

        <div className="experiences-grid">
          {experiences.map((exp) => (
            <div className="experience-card" key={exp.title}>
              <div className="experience-image">
                <img src={exp.image} alt={exp.title} />
              </div>
              <div className="experience-content">
                <h3>{exp.title}</h3>
                <div className="experience-location">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
                <div className="experience-rating">
                  <Star size={14} fill="#f59e0b" color="#f59e0b" />
                  <span>
                    {exp.rating} ({exp.reviews})
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

export default TopExperiences;