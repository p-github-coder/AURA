// discover page
import { Clock } from 'lucide-react';
import '../css/featuredstories.css';
import poland from '../assets/poland.jpg';
import backpack from '../assets/backpack.jpg';
import pink from '../assets/pink.jpg';

function FeaturedStories() {
  const stories = [
    {
      tag: 'GUIDE',
      title: '10 Stunning Coastal Towns You Need to Visit',
      excerpt: 'Breathtaking towns with views, culture and unforgettable charm.',
      readTime: '5 min read',
      image: poland,
    },
    {
      tag: 'TIPS',
      title: 'Solo Travel Tips for First Timers',
      excerpt: 'Everything you need to know for a safe and rewarding trip.',
      readTime: '6 min read',
      image: backpack,
    },
    {
      tag: 'INSPIRATION',
      title: 'Bucket List Destinations for 2025',
      excerpt: 'The most breathtaking places to visit this year.',
      readTime: '4 min read',
      image: pink,
    },
  ];

  return (
    <section className="featured-stories">
      <div className="featured-stories-container">
        <div className="section-header">
          <h2>Featured stories</h2>
          <a href="#" className="view-all">
            View all stories →
          </a>
        </div>

        <div className="stories-grid">
          {stories.map((story) => (
            <article className="story-card" key={story.title}>
              <div className="story-image">
                <img src={story.image} alt={story.title} />
                <span className="story-tag">{story.tag}</span>
              </div>
              <div className="story-content">
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
                <div className="story-meta">
                  <Clock size={14} />
                  <span>{story.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedStories;