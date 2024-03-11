import "./ServicesCard.css";

const ServicesCard = ({ setImage, classImage, children }) => {
  return (
    <div className="services-card-container">
      <img className={classImage} src={setImage} alt={setImage} />
      {children}
    </div>
  );
};

export default ServicesCard;
