// Home Page
import '../css/destinationcard.css';

function DestinationCard({
  name,
  country,
  image,
  description,
  rating,
  reviews
}) {
  return (
    <div className="destination_card">

      <div className="card_image">
        <img src={image} alt={name} />
        <span className="country_tag">{country}</span>
      </div>

      <div className="card_content">
        <h3>{name}</h3>

        <p>{description}</p>

        <div className="rating">
          <span className="stars">★</span>
          <span className="number">{rating}</span>
          <span className="reviews">({reviews})</span>
        </div>
      </div>

    </div>
  );
}

export default DestinationCard;