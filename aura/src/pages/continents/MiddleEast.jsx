import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../../css/regions.css';

// United Arab Emirates
import dubai from '../../assets/Dubai.jpg';
import abuDhabi from '../../assets/Abu Dhabi.jpg';
import sharjah from '../../assets/Sharjah.jpg';
import rasAlKhaimah from '../../assets/Ras Al Khaimah.jpg';

// Turkey
import istanbul from '../../assets/Istanbul.jpg';
import cappadocia from '../../assets/Cappadocia.jpg';
import antalya from '../../assets/Antalya.jpg';
import pamukkale from '../../assets/Pamukkale.jpg';

// Jordan
import petra from '../../assets/Petra.jpg';
import amman from '../../assets/Amman.jpg';
import wadiRum from '../../assets/Wadi Rum.jpg';
import deadSea from '../../assets/Dead Sea.jpg';

// Oman
import muscat from '../../assets/Muscat.jpg';
import salalah from '../../assets/Salalah.jpg';
import nizwa from '../../assets/Nizwa.jpg';
import wahibaSands from '../../assets/Wahiba Sands.jpg';

function MiddleEast() {
  const [searchParams] = useSearchParams();
  const countryFromSearch = searchParams.get('country');

  useEffect(() => {
    if (countryFromSearch) {
      const element = document.getElementById(countryFromSearch.toLowerCase());
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, [countryFromSearch]);

  const countries = [
    {
      name: "United Arab Emirates",
      spots: [
        {
          id: "dubai",
          name: "Dubai",
          description: "Futuristic skyline, luxury shopping, and desert adventures.",
          rating: 4.8,
          reviews: "2,345",
          image: dubai
        },
        {
          id: "abu-dhabi",
          name: "Abu Dhabi",
          description: "Grand mosques, cultural landmarks, and coastal elegance.",
          rating: 4.7,
          reviews: "1,543",
          image: abuDhabi
        },
        {
          id: "sharjah",
          name: "Sharjah",
          description: "Cultural capital with museums and traditional souks.",
          rating: 4.5,
          reviews: "876",
          image: sharjah
        },
        {
          id: "ras-al-khaimah",
          name: "Ras Al Khaimah",
          description: "Rugged mountains meet pristine desert coastline.",
          rating: 4.6,
          reviews: "654",
          image: rasAlKhaimah
        }
      ]
    },
    {
      name: "Turkey",
      spots: [
        {
          id: "istanbul",
          name: "Istanbul",
          description: "Where East meets West, rich in history and culture.",
          rating: 4.8,
          reviews: "2,134",
          image: istanbul
        },
        {
          id: "cappadocia",
          name: "Cappadocia",
          description: "Surreal landscapes and unforgettable hot air balloon rides.",
          rating: 4.9,
          reviews: "1,876",
          image: cappadocia
        },
        {
          id: "antalya",
          name: "Antalya",
          description: "Turquoise coastline and ancient Roman ruins.",
          rating: 4.6,
          reviews: "1,234",
          image: antalya
        },
        {
          id: "pamukkale",
          name: "Pamukkale",
          description: "Dazzling white travertine terraces and thermal pools.",
          rating: 4.7,
          reviews: "987",
          image: pamukkale
        }
      ]
    },
    {
      name: "Jordan",
      spots: [
        {
          id: "petra",
          name: "Petra",
          description: "Ancient rose-red city carved into desert cliffs.",
          rating: 4.9,
          reviews: "1,987",
          image: petra
        },
        {
          id: "amman",
          name: "Amman",
          description: "Modern capital layered over ancient Roman ruins.",
          rating: 4.5,
          reviews: "876",
          image: amman
        },
        {
          id: "wadi-rum",
          name: "Wadi Rum",
          description: "Otherworldly desert valley of red sand and towering cliffs.",
          rating: 4.9,
          reviews: "1,321",
          image: wadiRum
        },
        {
          id: "dead-sea",
          name: "Dead Sea",
          description: "Float in the mineral-rich waters of the lowest point on Earth.",
          rating: 4.7,
          reviews: "1,098",
          image: deadSea
        }
      ]
    },
    {
      name: "Oman",
      spots: [
        {
          id: "muscat",
          name: "Muscat",
          description: "Whitewashed architecture set against rugged mountains.",
          rating: 4.7,
          reviews: "987",
          image: muscat
        },
        {
          id: "salalah",
          name: "Salalah",
          description: "Lush greenery and monsoon-fed waterfalls.",
          rating: 4.6,
          reviews: "654",
          image: salalah
        },
        {
          id: "nizwa",
          name: "Nizwa",
          description: "Ancient fort city famous for its traditional souk.",
          rating: 4.6,
          reviews: "543",
          image: nizwa
        },
        {
          id: "wahiba-sands",
          name: "Wahiba Sands",
          description: "Vast golden dunes and authentic Bedouin desert camps.",
          rating: 4.8,
          reviews: "765",
          image: wahibaSands
        }
      ]
    }
  ];

  return (
    <section className="destinations-page">
      <div className="destinations-container">

        {/* Page Header */}
        <div className="continent-header">
          <h1 className="page-title">Middle East</h1>
          <p className="continent-intro">
            Discover the best destinations across the Middle East — from ancient wonders to modern marvels.
          </p>
        </div>

        {/* Countries & Spots */}
        {countries.map((country) => (
          <div
            key={country.name}
            id={country.name.toLowerCase()}   // ← important for scrolling
            className="country-block"
          >
            <h2 className="country-title">{country.name}</h2>

            <div className="spots-grid">
              {country.spots.map((spot) => (
                <Link
                  to={`/destinations/${spot.id}`}
                  key={spot.id}
                  className="destination-card"
                >
                  <div className="card-image">
                    <img src={spot.image} alt={spot.name} />
                    <span className="country-badge">{country.name.toUpperCase()}</span>
                  </div>

                  <div className="card-content">
                    <h3>{spot.name}</h3>
                    <p>{spot.description}</p>
                    <div className="rating">
                      <span className="star">★</span>
                      <span>{spot.rating}</span>
                      <span className="reviews">({spot.reviews} reviews)</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Navigation */}
        <div className="continent-navigation">
          <Link to="/destinations/oceania" className="nav-btn prev">
            ← Oceania
          </Link>

          <Link to="/destinations" className="nav-btn next">
            ← Back to All Destinations
          </Link>
        </div>

      </div>
    </section>
  );
}

export default MiddleEast;