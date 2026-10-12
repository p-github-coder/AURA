import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../../css/regions.css';

// Japan
import tokyo from '../../assets/Tokyo2.jpg';
import kyoto from '../../assets/kyoto.jpg';
import osaka from '../../assets/Osaka.jpg';
import hokkaido from '../../assets/Hokkaido.jpg';

// Thailand
import bangkok from '../../assets/Bangkok.jpg';
import chiangMai from '../../assets/Chiang Mai.jpg';
import phuket from '../../assets/Phuket.jpg';
import krabi from '../../assets/Krabi.jpg';

// Indonesia
import bali from '../../assets/Bali.jpg';
import jakarta from '../../assets/Jakarta.jpg';
import yogyakarta from '../../assets/Yogyakarta.jpg';
import komodoIsland from '../../assets/Komodo Island.jpg';

// Vietnam
import hanoi from '../../assets/Hanoi.jpg';
import hoChiMinhCity from '../../assets/Ho Chi Minh City.jpg';
import haLongBay from '../../assets/Ha Long Bay.jpg';
import daNang from '../../assets/Da Nang.jpg';

// South Korea
import seoul from '../../assets/Seoul.jpg';
import busan from '../../assets/Busan.jpg';
import jejuIsland from '../../assets/Jeju Island.jpg';
import gyeongju from '../../assets/Gyeongju.jpg';

// India
import newDelhi from '../../assets/New Delhi.jpg';
import jaipur from '../../assets/Jaipur.jpg';
import goa from '../../assets/Goa.jpg';
import kerala from '../../assets/Kerala.jpg';

function Asia() {
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
      name: "Japan",
      spots: [
        {
          id: "tokyo",
          name: "Tokyo",
          description: "Neon-lit streets, ancient temples, and cutting-edge culture.",
          rating: 4.8,
          reviews: "2,456",
          image: tokyo
        },
        {
          id: "kyoto",
          name: "Kyoto",
          description: "Timeless temples, serene gardens, and geisha traditions.",
          rating: 4.9,
          reviews: "1,876",
          image: kyoto
        },
        {
          id: "osaka",
          name: "Osaka",
          description: "Vibrant street food scene and lively nightlife.",
          rating: 4.6,
          reviews: "1,432",
          image: osaka
        },
        {
          id: "hokkaido",
          name: "Hokkaido",
          description: "Snowy landscapes, hot springs, and fresh seafood.",
          rating: 4.8,
          reviews: "1,098",
          image: hokkaido
        }
      ]
    },
    {
      name: "Thailand",
      spots: [
        {
          id: "bangkok",
          name: "Bangkok",
          description: "Bustling markets, ornate temples, and vibrant street life.",
          rating: 4.6,
          reviews: "2,134",
          image: bangkok
        },
        {
          id: "chiang-mai",
          name: "Chiang Mai",
          description: "Mountain temples, elephant sanctuaries, and old-world charm.",
          rating: 4.7,
          reviews: "1,543",
          image: chiangMai
        },
        {
          id: "phuket",
          name: "Phuket",
          description: "Tropical beaches and lively island nightlife.",
          rating: 4.5,
          reviews: "1,876",
          image: phuket
        },
        {
          id: "krabi",
          name: "Krabi",
          description: "Dramatic limestone cliffs and crystal-clear lagoons.",
          rating: 4.8,
          reviews: "1,234",
          image: krabi
        }
      ]
    },
    {
      name: "Indonesia",
      spots: [
        {
          id: "bali",
          name: "Bali",
          description: "Lush rice terraces, spiritual temples, and stunning beaches.",
          rating: 4.8,
          reviews: "2,543",
          image: bali
        },
        {
          id: "jakarta",
          name: "Jakarta",
          description: "Dynamic capital blending modern life and rich heritage.",
          rating: 4.4,
          reviews: "987",
          image: jakarta
        },
        {
          id: "yogyakarta",
          name: "Yogyakarta",
          description: "Ancient temples and the heart of Javanese culture.",
          rating: 4.7,
          reviews: "1,098",
          image: yogyakarta
        },
        {
          id: "komodo-island",
          name: "Komodo Island",
          description: "Home to the legendary Komodo dragon and pink beaches.",
          rating: 4.9,
          reviews: "876",
          image: komodoIsland
        }
      ]
    },
    {
      name: "Vietnam",
      spots: [
        {
          id: "hanoi",
          name: "Hanoi",
          description: "Charming Old Quarter and centuries of rich history.",
          rating: 4.6,
          reviews: "1,432",
          image: hanoi
        },
        {
          id: "ho-chi-minh-city",
          name: "Ho Chi Minh City",
          description: "Fast-paced energy blending history and modern life.",
          rating: 4.5,
          reviews: "1,321",
          image: hoChiMinhCity
        },
        {
          id: "ha-long-bay",
          name: "Ha Long Bay",
          description: "Emerald waters dotted with dramatic limestone islands.",
          rating: 4.9,
          reviews: "1,765",
          image: haLongBay
        },
        {
          id: "da-nang",
          name: "Da Nang",
          description: "Golden beaches and the iconic Golden Bridge nearby.",
          rating: 4.7,
          reviews: "987",
          image: daNang
        }
      ]
    },
    {
      name: "South Korea",
      spots: [
        {
          id: "seoul",
          name: "Seoul",
          description: "Futuristic skyline meets centuries-old royal palaces.",
          rating: 4.7,
          reviews: "1,987",
          image: seoul
        },
        {
          id: "busan",
          name: "Busan",
          description: "Coastal city with beaches, temples, and fresh seafood.",
          rating: 4.6,
          reviews: "1,234",
          image: busan
        },
        {
          id: "jeju-island",
          name: "Jeju Island",
          description: "Volcanic landscapes, waterfalls, and lush nature trails.",
          rating: 4.8,
          reviews: "1,432",
          image: jejuIsland
        },
        {
          id: "gyeongju",
          name: "Gyeongju",
          description: "Open-air museum of ancient Silla dynasty treasures.",
          rating: 4.6,
          reviews: "654",
          image: gyeongju
        }
      ]
    },
    {
      name: "India",
      spots: [
        {
          id: "new-delhi",
          name: "New Delhi",
          description: "Historic monuments and vibrant, chaotic city energy.",
          rating: 4.4,
          reviews: "1,543",
          image: newDelhi
        },
        {
          id: "jaipur",
          name: "Jaipur",
          description: "The Pink City, rich with palaces and vibrant bazaars.",
          rating: 4.7,
          reviews: "1,321",
          image: jaipur
        },
        {
          id: "goa",
          name: "Goa",
          description: "Golden beaches, Portuguese heritage, and laid-back vibes.",
          rating: 4.6,
          reviews: "1,876",
          image: goa
        },
        {
          id: "kerala",
          name: "Kerala",
          description: "Tranquil backwaters and lush tropical scenery.",
          rating: 4.8,
          reviews: "1,098",
          image: kerala
        }
      ]
    }
  ];

  return (
    <section className="destinations-page">
      <div className="destinations-container">

        {/* Page Header */}
        <div className="continent-header">
          <h1 className="page-title">Asia</h1>
          <p className="continent-intro">
            Discover the best destinations across Asia — from ancient temples to tropical islands.
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

        {/* Navigation to next continent */}
        <div className="continent-navigation">
          <Link to="/destinations/americas" className="nav-btn prev">
            ← Americas
          </Link>

          <Link to="/destinations/africa" className="nav-btn next">
            Next: Africa →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Asia;