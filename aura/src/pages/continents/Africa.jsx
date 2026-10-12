import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../../css/regions.css';

// Morocco
import marrakech from '../../assets/Marrakech.jpg';
import casablanca from '../../assets/Casablanca.jpg';
import fez from '../../assets/Fez.jpg';
import chefchaouen from '../../assets/Chefchaouen.jpg';

// South Africa
import capeTown from '../../assets/Cape Town.jpg';
import johannesburg from '../../assets/Johannesburg.jpg';
import krugerNationalPark from '../../assets/Kruger National Park.jpg';
import stellenbosch from '../../assets/Stellenbosch.jpg';

// Egypt
import cairo from '../../assets/Cairo.jpg';
import luxor from '../../assets/Luxor.jpg';
import aswan from '../../assets/Aswan.jpg';
import sharmElSheikh from '../../assets/Sharm El Sheikh.jpg';

// Tanzania
import serengeti from '../../assets/Serengeti.jpg';
import zanzibar from '../../assets/Zanzibar.jpg';
import kilimanjaro from '../../assets/Kilimanjaro.jpg';
import ngorongoro from '../../assets/Ngorongoro.jpg';

// Kenya
import nairobi from '../../assets/Nairobi.jpg';
import maasaiMara from '../../assets/Maasai Mara.jpg';
import mombasa from '../../assets/Mombasa.jpg';
import amboseli from '../../assets/Amboseli.jpg';

function Africa() {
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
      name: "Morocco",
      spots: [
        {
          id: "marrakech",
          name: "Marrakech",
          description: "Bustling souks, vibrant medinas, and desert charm.",
          rating: 4.7,
          reviews: "1,876",
          image: marrakech
        },
        {
          id: "casablanca",
          name: "Casablanca",
          description: "Modern coastal city with grand Moorish architecture.",
          rating: 4.4,
          reviews: "987",
          image: casablanca
        },
        {
          id: "fez",
          name: "Fez",
          description: "Ancient medina and the world's oldest university.",
          rating: 4.6,
          reviews: "1,098",
          image: fez
        },
        {
          id: "chefchaouen",
          name: "Chefchaouen",
          description: "The magical blue city nestled in the Rif Mountains.",
          rating: 4.8,
          reviews: "1,234",
          image: chefchaouen
        }
      ]
    },
    {
      name: "South Africa",
      spots: [
        {
          id: "cape-town",
          name: "Cape Town",
          description: "Table Mountain views, vineyards, and coastal beauty.",
          rating: 4.8,
          reviews: "2,145",
          image: capeTown
        },
        {
          id: "johannesburg",
          name: "Johannesburg",
          description: "Vibrant culture, history, and urban energy.",
          rating: 4.4,
          reviews: "987",
          image: johannesburg
        },
        {
          id: "kruger-national-park",
          name: "Kruger National Park",
          description: "World-renowned safari with the Big Five.",
          rating: 4.9,
          reviews: "1,654",
          image: krugerNationalPark
        },
        {
          id: "stellenbosch",
          name: "Stellenbosch",
          description: "Historic wine country surrounded by mountains.",
          rating: 4.7,
          reviews: "876",
          image: stellenbosch
        }
      ]
    },
    {
      name: "Egypt",
      spots: [
        {
          id: "cairo",
          name: "Cairo",
          description: "Ancient pyramids meet a sprawling, lively capital.",
          rating: 4.6,
          reviews: "1,987",
          image: cairo
        },
        {
          id: "luxor",
          name: "Luxor",
          description: "Open-air museum of temples and pharaonic tombs.",
          rating: 4.8,
          reviews: "1,321",
          image: luxor
        },
        {
          id: "aswan",
          name: "Aswan",
          description: "Nile River views and timeless Nubian culture.",
          rating: 4.7,
          reviews: "876",
          image: aswan
        },
        {
          id: "sharm-el-sheikh",
          name: "Sharm El Sheikh",
          description: "Red Sea diving and pristine coral reefs.",
          rating: 4.6,
          reviews: "1,432",
          image: sharmElSheikh
        }
      ]
    },
    {
      name: "Tanzania",
      spots: [
        {
          id: "serengeti",
          name: "Serengeti",
          description: "Endless plains famous for the Great Migration.",
          rating: 4.9,
          reviews: "1,765",
          image: serengeti
        },
        {
          id: "zanzibar",
          name: "Zanzibar",
          description: "Spice island beaches with turquoise waters.",
          rating: 4.8,
          reviews: "1,543",
          image: zanzibar
        },
        {
          id: "kilimanjaro",
          name: "Kilimanjaro",
          description: "Africa's tallest peak and a bucket-list trek.",
          rating: 4.8,
          reviews: "1,098",
          image: kilimanjaro
        },
        {
          id: "ngorongoro",
          name: "Ngorongoro",
          description: "A volcanic crater teeming with incredible wildlife.",
          rating: 4.9,
          reviews: "987",
          image: ngorongoro
        }
      ]
    },
    {
      name: "Kenya",
      spots: [
        {
          id: "nairobi",
          name: "Nairobi",
          description: "Urban energy bordering wild savanna landscapes.",
          rating: 4.4,
          reviews: "876",
          image: nairobi
        },
        {
          id: "maasai-mara",
          name: "Maasai Mara",
          description: "Iconic safari destination and Maasai culture.",
          rating: 4.9,
          reviews: "1,654",
          image: maasaiMara
        },
        {
          id: "mombasa",
          name: "Mombasa",
          description: "Swahili coast beaches and historic Old Town.",
          rating: 4.6,
          reviews: "987",
          image: mombasa
        },
        {
          id: "amboseli",
          name: "Amboseli",
          description: "Elephant herds framed by Mount Kilimanjaro.",
          rating: 4.8,
          reviews: "765",
          image: amboseli
        }
      ]
    }
  ];

  return (
    <section className="destinations-page">
      <div className="destinations-container">

        {/* Page Header */}
        <div className="continent-header">
          <h1 className="page-title">Africa</h1>
          <p className="continent-intro">
            Discover the best destinations across Africa — from ancient wonders to untamed wilderness.
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
          <Link to="/destinations/asia" className="nav-btn prev">
            ← Asia
          </Link>

          <Link to="/destinations/oceania" className="nav-btn next">
            Next: Oceania →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Africa;