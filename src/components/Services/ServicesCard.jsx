import "./ServicesCard.css";

const ServicesCard = ({ image }) => {
  return (
    <div className="services-card-container">
      <img src={image} alt={image} />
      <div className="services-card-text-container">
        <h4>Tagline</h4>
        <h3>Medium length section heading goes here</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <button className="services-card-button">Button</button>
      </div>
    </div>
  );
};

export default ServicesCard;
