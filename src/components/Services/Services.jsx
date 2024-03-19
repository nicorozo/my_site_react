import "./Services.css";
import ServicesCard from "./ServicesCard";
import ServicesCardText from "./ServicesCardText";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-inner-container">
        <div className="services-heading">
          <h3>Services</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="services-content-container">
          {/* 
                FIRST COLUMN
            */}
          <div className="services-column">
            <ServicesCard setImage={"card-picture1.jpg"} classImage={"first"}>
              <ServicesCardText
                color={"yellow"}
                tagline={"tagline"}
                headline={"headline"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                }
              ></ServicesCardText>
            </ServicesCard>
            {/* 
            white div now 
            */}
            <ServicesCardText
              color={"white"}
              tagline={"tagline"}
              headline={"headline"}
              text={"sometext"}
            ></ServicesCardText>
          </div>
          {/* 
            SECOND COLUMN
          */}
          <div className="services-column">
            <div className="services-column-div mobile">
              <ServicesCardText
                color={"white"}
                tagline={"tagline"}
                headline={"headline"}
                text={"sometext"}
              ></ServicesCardText>
              <ServicesCardText
                color={"white"}
                tagline={"tagline"}
                headline={"headline"}
                text={"sometext"}
              ></ServicesCardText>
            </div>
            <ServicesCard setImage={"card-picture2.jpg"} classImage={"first"}>
              <ServicesCardText
                color={"yellow"}
                tagline={"tagline 2"}
                headline={"headline 2"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                }
              ></ServicesCardText>
            </ServicesCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
