import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import '../css/explorehero.css';

function ExploreHero() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // All countries we support in Aura + which continent page they belong to
  const countryMap = {
    greece: '/destinations/europe',
    italy: '/destinations/europe',
    france: '/destinations/europe',
    spain: '/destinations/europe',
    portugal: '/destinations/europe',
    croatia: '/destinations/europe',

    japan: '/destinations/asia',
    thailand: '/destinations/asia',
    indonesia: '/destinations/asia',
    vietnam: '/destinations/asia',
    'south korea': '/destinations/asia',
    india: '/destinations/asia',

    'united states': '/destinations/americas',
    usa: '/destinations/americas',
    canada: '/destinations/americas',
    mexico: '/destinations/americas',
    brazil: '/destinations/americas',
    peru: '/destinations/americas',
    argentina: '/destinations/americas',

    tanzania: '/destinations/africa',
    'south africa': '/destinations/africa',
    egypt: '/destinations/africa',
    morocco: '/destinations/africa',
    kenya: '/destinations/africa',

    australia: '/destinations/oceania',
    'new zealand': '/destinations/oceania',
    fiji: '/destinations/oceania',
    'french polynesia': '/destinations/oceania',

    'united arab emirates': '/destinations/middleeast',
    uae: '/destinations/middleeast',
    turkey: '/destinations/middleeast',
    jordan: '/destinations/middleeast',
    oman: '/destinations/middleeast',
  };

  // Specific destinations → go directly to their detail page
  const destinationMap = {
    santorini: '/destinations/santorini',
    mykonos: '/destinations/mykonos',
    athens: '/destinations/athens',
    crete: '/destinations/crete',
    rome: '/destinations/rome',
    'amalfi coast': '/destinations/amalfi-coast',
    florence: '/destinations/florence',
    venice: '/destinations/venice',
    paris: '/destinations/paris',
    nice: '/destinations/nice',
    provence: '/destinations/provence',
    bordeaux: '/destinations/bordeaux',
    barcelona: '/destinations/barcelona',
    madrid: '/destinations/madrid',
    seville: '/destinations/seville',
    mallorca: '/destinations/mallorca',
    lisbon: '/destinations/lisbon',
    porto: '/destinations/porto',
    algarve: '/destinations/algarve',
    madeira: '/destinations/madeira',
    dubrovnik: '/destinations/dubrovnik',
    split: '/destinations/split',
    hvar: '/destinations/hvar',
    zagreb: '/destinations/zagreb',
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) return;

    // 1. Check if it's a specific destination (e.g. "athens", "santorini")
    if (destinationMap[searchTerm]) {
      navigate(destinationMap[searchTerm]);
      return;
    }

    // 2. Check if it's a country (e.g. "greece", "italy")
    if (countryMap[searchTerm]) {
      // Go to the continent page and pass the country name so we can scroll to it
      navigate(`${countryMap[searchTerm]}?country=${encodeURIComponent(searchTerm)}`);
      return;
    }

    // 3. No match
    alert('Sorry, we don’t have that destination yet. Try Greece, Italy, Athens, Santorini, etc.');
  };

  return (
    <section className="explore-hero">
      <div className="explore-hero-overlay">
        <div className="explore-hero-content">
          <h1>Explore the world</h1>
          <p>
            Discover breathtaking destinations and
            <br />
            unique experiences just for you.
          </p>

          <form className="explore-search" onSubmit={handleSearch}>
            <div className="search-input-wrapper">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <button type="submit" className="search-btn">
              <Search size={16} />
              <span>Search</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ExploreHero;