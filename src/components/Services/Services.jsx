import "./Services.css";
import ServicesCard from "./ServicesCard";
import ServicesCardText from "./ServicesCardText";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-inner-container">
        <div className="services-heading">
          <h3>Services</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </div>
        <div className="services-content-container">
          {/* 
                FIRST COLUMN
            */}
          <div className="services-column">
            <ServicesCard setImage={"card-picture1.jpg"} classImage={"first"}>
              <ServicesCardText
                color={"yellow"}
                tagline={"(Wolno)"}
                headline={"Web Development"}
                text={
                  "E-commerce Websites, Business Websites, Blogs, Portfolio Websites, Educational Websites, Landing Pages"
                }
              ></ServicesCardText>
            </ServicesCard>
            {/* 
            white div now 
            */}
            <ServicesCardText
              color={"white"}
              tagline={"(Wolno - Poland)"}
              headline={"Photography"}
              text={
                "Advertising Photography, Product Photography, Architectural Photography, Product Photography, Food Photography"
              }
            ></ServicesCardText>
          </div>
          {/* 
            SECOND COLUMN
          */}
          <div className="services-column">
            <div className="services-column-div mobile">
              <ServicesCardText
                color={"white"}
                tagline={"(Wolno)"}
                headline={"Content Creation"}
                text={"sometext"}
              ></ServicesCardText>
              <ServicesCardText
                color={"white"}
                tagline={"(Wolno)"}
                headline={"SEO"}
                text={"sometext"}
              ></ServicesCardText>
            </div>
            <ServicesCard setImage={"card-picture2.jpg"} classImage={"first"}>
              <ServicesCardText
                color={"yellow"}
                tagline={"(Wolno)"}
                headline={"Design"}
                text={
                  "intuitive navigation and visual appeal, Selecting colors that reflect brand identity, engage users, and enhance the overall design "
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
