import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../../css/regions.css';

// United States
import newYork from '../../assets/New York2.jpg';
import losAngeles from '../../assets/Los Angeles.jpg';
import miami from '../../assets/Miami.jpg';
import grandCanyon from '../../assets/Grand Canyon.jpg';

// Mexico
import cancun from '../../assets/Cancun.jpg';
import mexicoCity from '../../assets/Mexico City.jpg';
import tulum from '../../assets/Tulum.jpg';
import guadalajara from '../../assets/Guadalajara.jpg';

// Brazil
import rioDeJaneiro from '../../assets/Rio de Janeiro.jpg';
import saoPaulo from '../../assets/Sao Paulo.jpg';
import salvador from '../../assets/Salvador.jpg';
import fernandoDeNoronha from '../../assets/Fernando de Noronha.jpg';

// Canada
import banff from '../../assets/Banff.jpg';
import vancouver from '../../assets/Vancouver.jpg';
import toronto from '../../assets/Toronto.jpg';
import quebecCity from '../../assets/Quebec City.jpg';

// Peru
import machuPicchu from '../../assets/Machu Picchu.jpg';
import cusco from '../../assets/Cusco.jpg';
import lima from '../../assets/Lima.jpg';
import sacredValley from '../../assets/Sacred Valley.jpg';

// Argentina
import buenosAires from '../../assets/Buenos Aires.jpg';
import patagonia from '../../assets/Patagonia.jpg';
import mendoza from '../../assets/Mendoza.jpg';
import iguazuFalls from '../../assets/Iguazu Falls.jpg';

function Americas() {
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
      name: "United States",
      spots: [
        {
          id: "new-york",
          name: "New York",
          description: "Iconic skyline, world-class culture, and nonstop energy.",
          rating: 4.7,
          reviews: "2,341",
          image: newYork
        },
        {
          id: "los-angeles",
          name: "Los Angeles",
          description: "Sunny beaches, Hollywood glamour, and endless entertainment.",
          rating: 4.5,
          reviews: "1,876",
          image: losAngeles
        },
        {
          id: "miami",
          name: "Miami",
          description: "Vibrant nightlife, art deco charm, and turquoise waters.",
          rating: 4.6,
          reviews: "1,542",
          image: miami
        },
        {
          id: "grand-canyon",
          name: "Grand Canyon",
          description: "Breathtaking natural wonder carved over millions of years.",
          rating: 4.9,
          reviews: "1,987",
          image: grandCanyon
        }
      ]
    },
    {
      name: "Mexico",
      spots: [
        {
          id: "cancun",
          name: "Cancún",
          description: "White-sand beaches and vibrant Caribbean waters.",
          rating: 4.7,
          reviews: "1,654",
          image: cancun
        },
        {
          id: "mexico-city",
          name: "Mexico City",
          description: "Rich history, world-class food, and vibrant culture.",
          rating: 4.6,
          reviews: "1,432",
          image: mexicoCity
        },
        {
          id: "tulum",
          name: "Tulum",
          description: "Ancient ruins overlooking pristine turquoise beaches.",
          rating: 4.8,
          reviews: "1,298",
          image: tulum
        },
        {
          id: "guadalajara",
          name: "Guadalajara",
          description: "Birthplace of mariachi and tequila, full of tradition.",
          rating: 4.5,
          reviews: "876",
          image: guadalajara
        }
      ]
    },
    {
      name: "Brazil",
      spots: [
        {
          id: "rio-de-janeiro",
          name: "Rio de Janeiro",
          description: "Iconic beaches, Christ the Redeemer, and Carnival spirit.",
          rating: 4.7,
          reviews: "1,765",
          image: rioDeJaneiro
        },
        {
          id: "sao-paulo",
          name: "São Paulo",
          description: "Bustling metropolis with incredible food and nightlife.",
          rating: 4.5,
          reviews: "1,321",
          image: saoPaulo
        },
        {
          id: "salvador",
          name: "Salvador",
          description: "Colorful colonial architecture and Afro-Brazilian culture.",
          rating: 4.6,
          reviews: "987",
          image: salvador
        },
        {
          id: "fernando-de-noronha",
          name: "Fernando de Noronha",
          description: "Untouched island paradise with crystal-clear waters.",
          rating: 4.9,
          reviews: "654",
          image: fernandoDeNoronha
        }
      ]
    },
    {
      name: "Canada",
      spots: [
        {
          id: "banff",
          name: "Banff",
          description: "Turquoise lakes surrounded by majestic Rocky Mountains.",
          rating: 4.9,
          reviews: "1,432",
          image: banff
        },
        {
          id: "vancouver",
          name: "Vancouver",
          description: "Coastal beauty meets vibrant, modern city life.",
          rating: 4.7,
          reviews: "1,298",
          image: vancouver
        },
        {
          id: "toronto",
          name: "Toronto",
          description: "Diverse culture, iconic skyline, and lakeside charm.",
          rating: 4.6,
          reviews: "1,543",
          image: toronto
        },
        {
          id: "quebec-city",
          name: "Quebec City",
          description: "Old-world European charm in the heart of Canada.",
          rating: 4.7,
          reviews: "876",
          image: quebecCity
        }
      ]
    },
    {
      name: "Peru",
      spots: [
        {
          id: "machu-picchu",
          name: "Machu Picchu",
          description: "Legendary Incan citadel high in the Andes Mountains.",
          rating: 4.9,
          reviews: "2,103",
          image: machuPicchu
        },
        {
          id: "cusco",
          name: "Cusco",
          description: "Ancient capital blending Incan and colonial history.",
          rating: 4.7,
          reviews: "1,234",
          image: cusco
        },
        {
          id: "lima",
          name: "Lima",
          description: "Coastal capital renowned for world-class cuisine.",
          rating: 4.5,
          reviews: "987",
          image: lima
        },
        {
          id: "sacred-valley",
          name: "Sacred Valley",
          description: "Stunning Andean landscapes and ancient ruins.",
          rating: 4.8,
          reviews: "765",
          image: sacredValley
        }
      ]
    },
    {
      name: "Argentina",
      spots: [
        {
          id: "buenos-aires",
          name: "Buenos Aires",
          description: "Passionate tango, grand architecture, and vibrant streets.",
          rating: 4.6,
          reviews: "1,321",
          image: buenosAires
        },
        {
          id: "patagonia",
          name: "Patagonia",
          description: "Dramatic glaciers, mountains, and untamed wilderness.",
          rating: 4.9,
          reviews: "1,098",
          image: patagonia
        },
        {
          id: "mendoza",
          name: "Mendoza",
          description: "World-class wine country nestled against the Andes.",
          rating: 4.7,
          reviews: "876",
          image: mendoza
        },
        {
          id: "iguazu-falls",
          name: "Iguazú Falls",
          description: "Spectacular waterfalls straddling the Argentina-Brazil border.",
          rating: 4.9,
          reviews: "1,456",
          image: iguazuFalls
        }
      ]
    }
  ];

  return (
    <section className="destinations-page">
      <div className="destinations-container">

        {/* Page Header */}
        <div className="continent-header">
          <h1 className="page-title">Americas</h1>
          <p className="continent-intro">
            Discover the best destinations across the Americas — from vibrant cities to natural wonders.
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
          <Link to="/destinations/europe" className="nav-btn prev">
            ← Europe
          </Link>

          <Link to="/destinations/asia" className="nav-btn next">
            Next: Asia →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Americas;