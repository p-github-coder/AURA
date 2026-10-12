import { Link } from 'react-router-dom';
import '../css/regions.css';

// Continent cover images
// import europeCover from '../assets/europe.jpg';
// import americasCover from '../assets/usa.jpg';
// import asiaCover from '../assets/asia.jpg';
// import africaCover from '../assets/africa.jpg';
// import oceaniaCover from '../assets/oceania.jpg';
// import middleEastCover from '../assets/middleeast.jpg';

import tower from '../assets/tower.jpg';
import japan from '../assets/japan.jpg';
import forest from '../assets/forest.jpg';
import mountain2 from '../assets/mountain2.jpg';
import sydney from '../assets/Sydney.jpg';
import dubai from '../assets/Dubai.jpg';
function Destinations() {
  const continents = [
    {
      name: "Europe",
      path: "/destinations/europe",
      description: "From the romantic streets of Paris to the sun-kissed islands of Greece.",
      image: tower,
      countries: "6 countries"
    },

     {
      name: "Asia",
      path: "/destinations/asia",
      description: "Ancient temples, bustling cities, and tropical paradises await.",
      image: japan,
      countries: "6 countries"
    },

    {
      name: "Africa",
      path: "/destinations/africa",
      description: "Safari adventures, rich culture, and breathtaking landscapes.",
      image: forest,
      countries: "5 countries"
    },

    {
      name: "Americas",
      path: "/destinations/americas",
      description: "Explore vibrant cities, stunning beaches, and natural wonders.",
      image: mountain2,
      countries: "6 countries"
    },
   
    
    {
      name: "Oceania",
      path: "/destinations/oceania",
      description: "Pristine beaches, unique wildlife, and island paradise.",
      image: sydney,
      countries: "4 countries"
    },
    {
      name: "Middle East",
      path: "/destinations/middleeast",
      description: "Ancient history, modern luxury, and desert wonders.",
      image: dubai,
      countries: "4 countries"
    }
  ];

  return (
    <section className="destinations-page">
      <div className="destinations-container">
        <div className="destinations-header">
          <h1>All Regions</h1>
          <p>Explore the world by continent. Discover amazing places worth remembering.</p>
        </div>

        <div className="continents-grid">
          {continents.map((continent) => (
            <Link 
              to={continent.path} 
              key={continent.name} 
              className="continent-card"
            >
              <div className="continent-image">
                <img src={continent.image} alt={continent.name} />
                <div className="continent-overlay">
                  <span className="country-count">{continent.countries}</span>
                </div>
              </div>

              <div className="continent-content">
                <h2>{continent.name}</h2>
                <p>{continent.description}</p>
                <span className="explore-link">Explore {continent.name} →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;