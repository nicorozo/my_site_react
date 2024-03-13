import Logo from "../components/navbar/Logo";
import Nabvar from "../components/navbar/Nabvar";
import "./App.css";
import "./App.css";

const ServicesPage = () => {
  return (
    <div className="app">
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
    </div>
  );
};

export default ServicesPage;
