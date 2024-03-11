import "./ServicesCardText.css";

const ServicesCardText = ({ tagline, headline, text, color }) => {
  return (
    <div className={`services-card-text-container ${color}`}>
      <h4>{tagline}</h4>
      <h3>{headline}</h3>
      <p>{text}</p>
      <button className={`services-card-text-button ${color}`}>Button</button>
    </div>
  );
};

export default ServicesCardText;
