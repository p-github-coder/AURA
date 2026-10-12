import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../../css/regions.css';

// Australia
import sydney from '../../assets/Sydney.jpg';
import melbourne from '../../assets/Melbourne.jpg';
import greatBarrierReef from '../../assets/Great Barrier Reef.jpg';
import uluru from '../../assets/Uluru.jpg';

// New Zealand
import queenstown from '../../assets/queenstowm.jpg';
import auckland from '../../assets/Auckland.jpg';
import rotorua from '../../assets/Rotorua.jpg';
import milfordSound from '../../assets/Milford Sound.jpg';

// Fiji
import nadi from '../../assets/nadi.jpg';
import denarau from '../../assets/Denarau.jpg';
import yasawaIslands from '../../assets/Yasawa Islands.jpg';
import coralCoast from '../../assets/Coral Coast.jpg';

// French Polynesia
import boraBora from '../../assets/Bora Bora.jpg';
import tahiti from '../../assets/Tahiti.jpg';
import moorea from '../../assets/Moorea.jpg';
import rangiroa from '../../assets/Rangiroa.jpg';

function Oceania() {

  // Get country from the URL
  const [searchParams] = useSearchParams();
  const countryFromSearch = searchParams.get('country');

  // Automatically scroll to the selected country
  useEffect(() => {
    if (countryFromSearch) {
      const element = document.getElementById(
        countryFromSearch.toLowerCase()
      );

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 300);
      }
    }
  }, [countryFromSearch]);

  const countries = [
    {
      name: "Australia",
      spots: [
        {
          id: "sydney",
          name: "Sydney",
          description: "Iconic harbor, opera house, and vibrant city beaches.",
          rating: 4.8,
          reviews: "2,134",
          image: sydney
        },
        {
          id: "melbourne",
          name: "Melbourne",
          description: "Coffee culture, laneways, and creative energy.",
          rating: 4.7,
          reviews: "1,654",
          image: melbourne
        },
        {
          id: "great-barrier-reef",
          name: "Great Barrier Reef",
          description: "World's largest coral reef system, teeming with life.",
          rating: 4.9,
          reviews: "1,876",
          image: greatBarrierReef
        },
        {
          id: "uluru",
          name: "Uluru",
          description: "Sacred red monolith rising from the outback.",
          rating: 4.8,
          reviews: "1,432",
          image: uluru
        }
      ]
    },
    {
      name: "New Zealand",
      spots: [
        {
          id: "queenstown",
          name: "Queenstown",
          description: "Adventure capital surrounded by dramatic mountains.",
          rating: 4.9,
          reviews: "1,543",
          image: queenstown
        },
        {
          id: "auckland",
          name: "Auckland",
          description: "City of sails set between two stunning harbors.",
          rating: 4.6,
          reviews: "1,098",
          image: auckland
        },
        {
          id: "rotorua",
          name: "Rotorua",
          description: "Geothermal wonders and rich Maori culture.",
          rating: 4.7,
          reviews: "987",
          image: rotorua
        },
        {
          id: "milford-sound",
          name: "Milford Sound",
          description: "Breathtaking fiord framed by towering cliffs.",
          rating: 4.9,
          reviews: "1,321",
          image: milfordSound
        }
      ]
    },
    {
      name: "Fiji",
      spots: [
        {
          id: "nadi",
          name: "Nadi",
          description: "Gateway to Fiji with vibrant markets and culture.",
          rating: 4.5,
          reviews: "765",
          image: nadi
        },
        {
          id: "denarau",
          name: "Denarau",
          description: "Resort island paradise with golden beaches.",
          rating: 4.7,
          reviews: "1,098",
          image: denarau
        },
        {
          id: "yasawa-islands",
          name: "Yasawa Islands",
          description: "Remote turquoise lagoons and untouched beauty.",
          rating: 4.9,
          reviews: "876",
          image: yasawaIslands
        },
        {
          id: "coral-coast",
          name: "Coral Coast",
          description: "Palm-fringed beaches and vibrant coral reefs.",
          rating: 4.6,
          reviews: "654",
          image: coralCoast
        }
      ]
    },
    {
      name: "French Polynesia",
      spots: [
        {
          id: "bora-bora",
          name: "Bora Bora",
          description: "Overwater bungalows over impossibly blue lagoons.",
          rating: 4.9,
          reviews: "1,765",
          image: boraBora
        },
        {
          id: "tahiti",
          name: "Tahiti",
          description: "Lush volcanic island with black sand beaches.",
          rating: 4.7,
          reviews: "987",
          image: tahiti
        },
        {
          id: "moorea",
          name: "Moorea",
          description: "Dramatic peaks and vibrant coral gardens.",
          rating: 4.8,
          reviews: "876",
          image: moorea
        },
        {
          id: "rangiroa",
          name: "Rangiroa",
          description: "World-class diving in a vast coral atoll.",
          rating: 4.8,
          reviews: "654",
          image: rangiroa
        }
      ]
    }
  ];

  return (
    <section className="destinations-page">
      <div className="destinations-container">

        {/* Page Header */}
        <div className="continent-header">
          {/* <Link to="/destinations" className="back-link">
            ← All Destinations
          </Link> */}

          <h1 className="page-title">Oceania</h1>

          <p className="continent-intro">
            Discover the best destinations across Oceania — from coral reefs to island paradises.
          </p>
        </div>

        {/* Countries & Spots */}
        {countries.map((country) => (
          <div
            key={country.name}
            id={country.name.toLowerCase()}
            className="country-block"
          >
            <h2 className="country-title">
              {country.name}
            </h2>

            <div className="spots-grid">
              {country.spots.map((spot) => (
                <Link
                  to={`/destinations/${spot.id}`}
                  key={spot.id}
                  className="destination-card"
                >
                  <div className="card-image">
                    <img
                      src={spot.image}
                      alt={spot.name}
                    />

                    <span className="country-badge">
                      {country.name.toUpperCase()}
                    </span>
                  </div>

                  <div className="card-content">
                    <h3>{spot.name}</h3>

                    <p>{spot.description}</p>

                    <div className="rating">
                      <span className="star">★</span>

                      <span>{spot.rating}</span>

                      <span className="reviews">
                        ({spot.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Navigation to next continent */}
        <div className="continent-navigation">

          <Link
            to="/destinations/africa"
            className="nav-btn prev"
          >
            ← Africa
          </Link>

          <Link
            to="/destinations/middleeast"
            className="nav-btn next"
          >
            Next: Middle East →
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Oceania;