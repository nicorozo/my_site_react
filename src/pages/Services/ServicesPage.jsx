import Hero from "../../components/Hero/Hero";
import Logo from "../../components/navbar/Logo";
import Nabvar from "../../components/navbar/Nabvar";
import {
  ServicesCard,
  ServicesCardContent,
  ServicesCardHeading,
} from "./components/ServicesCards/ServicesCard";
import "../App.css";
import "./ServicesPage.css";
import {
  ArrowsModule,
  ArrowsSquare,
} from "./components/ServicesArrowsModule/ArrowsModule";
import Footer from "../../components/Footer/Footer";

const ServicesPage = () => {
  return (
    <div className="app">
      <div className="hero-background services"></div>
      <Nabvar>
        <Logo />
        <div className="navbar_menu">
          <a href="/about us" className="navbar_link">
            <span>Link 1</span>
          </a>
          <a href="/services" className="navbar_link">
            <span>Link 2</span>
          </a>
          <a href="/about us" className="navbar_link">
            <span>Link 3</span>
          </a>
          <a href="/services" className="navbar_link">
            <span>Link 4</span>
          </a>
          <button className="navbar_contact-btn secondary-btn">Contact</button>
        </div>
      </Nabvar>
      <Hero>
        <div className="hero-text-div services">
          <h1>From creatives to creatives</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.{" "}
          </p>
          <div className="spacer"></div>
          <div className="hero-action-div">
            <button className="hero-btn services">Button</button>
          </div>
        </div>
      </Hero>
      <ServicesCard>
        <ServicesCardHeading
          tagline={"headline"}
          headline={"Medium length section heading goes here"}
        />
        <ServicesCardContent>
          <p className="ser-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <ul className="ser-card-ul">
            <li className="ser-card-li">First item</li>
            <li className="ser-card-li">Second item</li>
            <li className="ser-card-li">Third item</li>
          </ul>
          <button className="ser-card-button">Button</button>
        </ServicesCardContent>
      </ServicesCard>
      <ServicesCard>
        <ServicesCardContent>
          <p className="ser-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <ul className="ser-card-ul">
            <li className="ser-card-li">First item</li>
            <li className="ser-card-li">Second item</li>
            <li className="ser-card-li">Third item</li>
          </ul>
          <button className="ser-card-button">Button</button>
        </ServicesCardContent>
        <ServicesCardHeading
          tagline={"headline"}
          headline={"Medium length section heading goes here"}
        />
      </ServicesCard>
      <ServicesCard>
        <ServicesCardHeading
          tagline={"headline"}
          headline={"Medium length section heading goes here"}
        />
        <ServicesCardContent>
          <p className="ser-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <ul className="ser-card-ul">
            <li className="ser-card-li">First item</li>
            <li className="ser-card-li">Second item</li>
            <li className="ser-card-li">Third item</li>
          </ul>
          <button className="ser-card-button">Button</button>
        </ServicesCardContent>
      </ServicesCard>
      <div className="ser-heading-div">
        <h3>Medium length section heading goes here</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>
      <ArrowsModule>
        <div className="ser-arrows-column">
          <ArrowsSquare
            headline={"Short heading goes here"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
            }
            icon={"vite.svg"}
          />
          <ArrowsSquare
            headline={"Short heading goes here"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
            }
            icon={"vite.svg"}
          />
        </div>
        {/* Arrows */}
        <div className="ser-arrows-colum">
          <img
            className="ser-arrows-img"
            src="arrows.png"
            alt="arrows picture"
          />
        </div>
        <div className="ser-arrows-column">
          <ArrowsSquare
            headline={"Short heading goes here"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
            }
            icon={"vite.svg"}
          />
          <ArrowsSquare
            headline={"Short heading goes here"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
            }
            icon={"vite.svg"}
          />
        </div>
      </ArrowsModule>
      <div className="spacer"></div>
      <Footer></Footer>
    </div>
  );
};

export default ServicesPage;
