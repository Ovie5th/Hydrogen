import './card.css'

const Card = ({ imageUrl, amount, description }) => {
  return (
    <div className = "single-card">
      <div className = "card-image">
        {imageUrl}
      </div>
      <div>
        <p>{amount}</p>
        <p className ="description">{description}</p>
      </div>
    </div>
  );
};

export default Card