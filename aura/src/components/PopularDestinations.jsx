import { Link } from 'react-router-dom';
import DestinationCard from './DestinationCard';

import santorini from '../assets/santorini.jpg';
import rome from '../assets/rome.jpg';
import kyoto from '../assets/kyoto.jpg';
import amalfi from '../assets/amalfi.jpg';

function PopularDestinations() {
  const destinations = [
    {
      name: "Santorini",
      country: "Greece",
      image: santorini,
      description: "Iconic views, sunsets and whitewashed charm.",
      rating: "4.8",
      reviews: "2.4k"
    },
    {
      name: "Rome",
      country: "Italy",
      image: rome,
      description: "Ancient history, incredible architecture and culture.",
      rating: "4.7",
      reviews: "3.1k"
    },
    {
      name: "Kyoto",
      country: "Japan",
      image: kyoto,
      description: "Peaceful temples, gardens and traditional Japanese charm.",
      rating: "4.9",
      reviews: "2.8k"
    },
    {
      name: "Amalfi Coast",
      country: "Italy",
      image: amalfi,
      description: "Beautiful coastlines, colorful villages and sea views.",
      rating: "4.8",
      reviews: "2.1k"
    },
  ];

  return (
    <section className="destination">
      <div className="destination_header">
        <h1>Popular Destinations</h1>

   <Link to="/AllDestinations">
  View all destinations →
</Link>
      </div>

      <div className="destination_cards">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.name}
            name={destination.name}
            country={destination.country}
            image={destination.image}
            description={destination.description}
            rating={destination.rating}
            reviews={destination.reviews}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularDestinations;