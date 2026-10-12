import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/search.css';

function Search() {
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  // Only countries that exist in your destinationDetails
  const countries = [
    "Greece",
    "Italy",
    "France",
    "Spain",
    "Portugal",
    "Croatia",
    "Japan",
    "Thailand",
    "Indonesia",
    "Vietnam",
    "South Korea",
    "India",
    "United States",
    "Canada",
    "Mexico",
    "Brazil",
    "Peru",
    "Argentina",
    "Tanzania",
    "South Africa",
    "Egypt",
    "Morocco",
    "Kenya",
    "Australia",
    "New Zealand",
    "Fiji",
    "French Polynesia",
    "United Arab Emirates",
    "Turkey",
    "Jordan",
    "Oman"
  ];

  // Categories that match your destinationDetails structure
  const categories = [
    { value: "beaches", label: "Beaches" },
    { value: "nature", label: "Nature" },
    { value: "culture", label: "Culture" },
    { value: "adventure", label: "Adventure" },
    { value: "food", label: "Food" },
    { value: "hotels", label: "Hotels" }
  ];

  const handleExplore = () => {
    if (!country || !category) {
      alert("Please select both a country and a category");
      return;
    }

    // Navigate to explore page with query parameters
    navigate(`/explore-results?country=${encodeURIComponent(country)}&category=${category}`);
  };

  return (
    <section className="entire">
      <div className="section">
        <div className="searchsection">
          <h1>Where will you explore?</h1>
          <p>Discover places around the world</p>

          <div className="dropdown">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select a country</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>

            <button onClick={handleExplore}>Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;