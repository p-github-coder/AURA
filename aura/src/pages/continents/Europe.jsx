import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../../css/regions.css';

// ==================== GREECE ====================
import santorini from '../../assets/santorini.jpg';
import mykonos from '../../assets/mykonos.jpg';
import athens from '../../assets/athens.jpg';
import crete from '../../assets/crete.jpg';

// ==================== ITALY ====================
import rome from '../../assets/rome.jpg';
import amalfiCoast from '../../assets/amalfi.jpg';
import florence from '../../assets/florence.jpg';
import venice from '../../assets/venice.jpg';

// ==================== FRANCE ====================
import paris from '../../assets/tower.jpg';
import nice from '../../assets/nice.jpg';
import provence from '../../assets/provence.jpg';
import bordeaux from '../../assets/bordeaux.jpg';

// ==================== SPAIN ====================
import barcelona from '../../assets/barcelona.jpg';
import madrid from '../../assets/madrid.jpg';
import seville from '../../assets/sevielle.jpg';
import mallorca from '../../assets/mallorca.jpg';

// ==================== PORTUGAL ====================
import lisbon from '../../assets/libson.jpg';
import porto from '../../assets/porto.jpg';
import algarve from '../../assets/algarve.jpg';
import madeira from '../../assets/madeira.jpg';

// ==================== CROATIA ====================
import dubrovnik from '../../assets/dubrovnik.jpg';
import split from '../../assets/split.jpg';
import hvar from '../../assets/hvar.jpg';
import zagreb from '../../assets/zagreb.jpg';


function Europe() {
  const [searchParams] = useSearchParams();

  const countryFromSearch = searchParams.get('country');

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

    // ==================== GREECE ====================
    {
      name: "Greece",
      spots: [
        {
          id: "santorini",
          name: "Santorini",
          description: "Iconic sunsets, whitewashed villages, and crystal-clear waters.",
          rating: 4.8,
          reviews: "1,246",
          image: santorini
        },
        {
          id: "mykonos",
          name: "Mykonos",
          description: "Vibrant nightlife, golden beaches, and beautiful Cycladic charm.",
          rating: 4.7,
          reviews: "1,105",
          image: mykonos
        },
        {
          id: "athens",
          name: "Athens",
          description: "Ancient history, iconic landmarks, and vibrant Greek culture.",
          rating: 4.6,
          reviews: "982",
          image: athens
        },
        {
          id: "crete",
          name: "Crete",
          description: "Rugged coastlines, historic sites, and charming island villages.",
          rating: 4.7,
          reviews: "1,018",
          image: crete
        }
      ]
    },


    // ==================== ITALY ====================
    {
      name: "Italy",
      spots: [
        {
          id: "rome",
          name: "Rome",
          description: "Ancient ruins, magnificent architecture, and timeless Italian culture.",
          rating: 4.8,
          reviews: "2,145",
          image: rome
        },
        {
          id: "amalfi-coast",
          name: "Amalfi Coast",
          description: "Dramatic cliffs, colorful villages, and breathtaking Mediterranean views.",
          rating: 4.9,
          reviews: "1,876",
          image: amalfiCoast
        },
        {
          id: "florence",
          name: "Florence",
          description: "Renaissance art, beautiful architecture, and rich cultural heritage.",
          rating: 4.7,
          reviews: "1,432",
          image: florence
        },
        {
          id: "venice",
          name: "Venice",
          description: "Romantic canals, historic streets, and unforgettable Venetian charm.",
          rating: 4.8,
          reviews: "1,765",
          image: venice
        }
      ]
    },


    // ==================== FRANCE ====================
    {
      name: "France",
      spots: [
        {
          id: "paris",
          name: "Paris",
          description: "Iconic landmarks, beautiful boulevards, art, and timeless elegance.",
          rating: 4.8,
          reviews: "2,567",
          image: paris
        },
        {
          id: "nice",
          name: "Nice",
          description: "Sunny Mediterranean beaches, colorful streets, and coastal beauty.",
          rating: 4.7,
          reviews: "1,234",
          image: nice
        },
        {
          id: "provence",
          name: "Provence",
          description: "Lavender fields, charming villages, and peaceful countryside landscapes.",
          rating: 4.8,
          reviews: "987",
          image: provence
        },
        {
          id: "bordeaux",
          name: "Bordeaux",
          description: "Elegant architecture, riverside views, and rich French heritage.",
          rating: 4.6,
          reviews: "765",
          image: bordeaux
        }
      ]
    },


    // ==================== SPAIN ====================
    {
      name: "Spain",
      spots: [
        {
          id: "barcelona",
          name: "Barcelona",
          description: "Bold architecture, Mediterranean beaches, and lively city culture.",
          rating: 4.8,
          reviews: "2,134",
          image: barcelona
        },
        {
          id: "madrid",
          name: "Madrid",
          description: "Grand boulevards, world-class art, and vibrant Spanish nightlife.",
          rating: 4.7,
          reviews: "1,543",
          image: madrid
        },
        {
          id: "seville",
          name: "Seville",
          description: "Historic plazas, beautiful palaces, and authentic Andalusian charm.",
          rating: 4.8,
          reviews: "1,102",
          image: seville
        },
        {
          id: "mallorca",
          name: "Mallorca",
          description: "Turquoise coves, mountain landscapes, and relaxing island escapes.",
          rating: 4.7,
          reviews: "1,321",
          image: mallorca
        }
      ]
    },


    // ==================== PORTUGAL ====================
    {
      name: "Portugal",
      spots: [
        {
          id: "lisbon",
          name: "Lisbon",
          description: "Colorful streets, historic neighborhoods, and beautiful riverside views.",
          rating: 4.8,
          reviews: "1,876",
          image: lisbon
        },
        {
          id: "porto",
          name: "Porto",
          description: "Riverside charm, historic architecture, and traditional Portuguese culture.",
          rating: 4.7,
          reviews: "1,234",
          image: porto
        },
        {
          id: "algarve",
          name: "Algarve",
          description: "Golden cliffs, hidden beaches, and stunning Atlantic coastline.",
          rating: 4.9,
          reviews: "1,543",
          image: algarve
        },
        {
          id: "madeira",
          name: "Madeira",
          description: "Dramatic mountains, lush landscapes, and spectacular ocean views.",
          rating: 4.8,
          reviews: "987",
          image: madeira
        }
      ]
    },


    // ==================== CROATIA ====================
    {
      name: "Croatia",
      spots: [
        {
          id: "dubrovnik",
          name: "Dubrovnik",
          description: "Historic stone walls, Adriatic views, and beautiful old-world charm.",
          rating: 4.9,
          reviews: "1,765",
          image: dubrovnik
        },
        {
          id: "split",
          name: "Split",
          description: "Ancient Roman history, coastal scenery, and lively waterfront streets.",
          rating: 4.7,
          reviews: "1,123",
          image: split
        },
        {
          id: "hvar",
          name: "Hvar",
          description: "Sunny beaches, crystal-clear waters, and beautiful island landscapes.",
          rating: 4.8,
          reviews: "1,345",
          image: hvar
        },
        {
          id: "zagreb",
          name: "Zagreb",
          description: "Historic squares, charming streets, and Croatia's vibrant capital culture.",
          rating: 4.6,
          reviews: "876",
          image: zagreb
        }
      ]
    }

  ];


  return (
    <section className="destinations-page">
      <div className="destinations-container">

        {/* Page Header */}
        <div className="continent-header">
          <h1 className="page-title">Europe</h1>

          <p className="continent-intro">
            Discover unforgettable destinations across Europe — from historic cities to stunning coastlines and charming escapes.
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


        {/* Navigation */}
        <div className="continent-navigation">

          <Link
            to="/destinations/africa"
            className="nav-btn prev"
          >
            ← Africa
          </Link>

          <Link
            to="/destinations/asia"
            className="nav-btn next"
          >
            Next: Asia →
          </Link>

        </div>

      </div>
    </section>
  );
}


export default Europe;