// Explore page
import { Link } from 'react-router-dom';
import '../css/popularregions.css';

import tower from '../assets/tower.jpg';
import japan from '../assets/japan.jpg';
import forest from '../assets/forest.jpg';
import mountain2 from '../assets/mountain2.jpg';

function PopularRegions() {
  const regions = [
    {
      name: 'Europe',
      destinations: '42 destinations',
      image: tower,
    },
    {
      name: 'Asia',
      destinations: '35 destinations',
      image: japan,
    },
    {
      name: 'Africa',
      destinations: '28 destinations',
      image: forest,
    },
    {
      name: 'Americas',
      destinations: '31 destinations',
      image: mountain2,
    },
  ];

  return (
    <section className="popular-regions">
      <div className="popular-regions-container">
        <div className="section-header">
          <h2>Popular regions</h2>
          <Link className="view-all" to="/destinations">
  View all regions →
</Link>
        </div>

        <div className="regions-grid">
          {regions.map((region) => (
            <div className="region-card" key={region.name}>
              <img src={region.image} alt={region.name} />
              <div className="region-info">
                <h3>{region.name}</h3>
                <span>{region.destinations}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularRegions;