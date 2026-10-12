// Explore page
import { Link } from 'react-router-dom';
import {
  Umbrella,
  Landmark,
  PersonStanding,
  Utensils,
  Leaf,
  Hotel,
} from 'lucide-react';
import '../css/browsecategory.css';

function BrowseCategory() {
  const categories = [
    { name: 'Beaches', value: 'beaches', icon: Umbrella },
    { name: 'Culture', value: 'culture', icon: Landmark },
    { name: 'Adventure', value: 'adventure', icon: PersonStanding },
    { name: 'Food', value: 'food', icon: Utensils },
    { name: 'Nature', value: 'nature', icon: Leaf },
    { name: 'Hotels', value: 'hotels', icon: Hotel },
  ];

  return (
    <section className="browse-category">
      <div className="browse-category-container">
        <h2>Browse by category</h2>

        <div className="category-grid">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/explore-results?category=${cat.value}`}
              className="category-item"
            >
              <div className="category-icon">
                <cat.icon size={22} strokeWidth={1.75} />
              </div>
              <span>{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrowseCategory;