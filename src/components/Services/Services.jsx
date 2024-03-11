import "./Services.css";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-inner-container">
        <div className="services-heading">
          <h3>Services</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="services-content-container">
          <div className="services-column">
            <ServicesCard setImage={"card-picture1.jpg"} />
          </div>
          <div className="services-column"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
