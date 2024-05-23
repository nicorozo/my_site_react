import Nabvar from "../components/navbar/Nabvar";
import Logo from "../components/navbar/Logo";
import Hero from "../components/Hero/Hero";
import { FaArrowCircleRight } from "react-icons/fa";
import AutoplayCarousel from "../components/Carousel/AutoplayCarousel";
import Process from "../components/Process/Process";
import HalfAction from "../components/HalfAction/HalfAction";
import Billboard from "../components/Billboard/Billboard";

import "./App.css";
import Footer from "../components/Footer/Footer";
import Services from "../components/Services/Services";
import NavbarMenu from "../components/navbar/NavbarMenu";
import NavbarButton from "../components/navbar/NavbarButton";
import Modal from "../utils/Modal/Modal";
import { useState } from "react";

function App() {
  const [isModal, setIsModal] = useState(false);
  const [introWordIndex, setIntroWordIndex] = useState(0);
  const [introWordClass, setIntroWordClass] = useState("");

  const activateModal = () => {
    setIsModal(!isModal);
    console.log("isModal", isModal);
  };

  const introWordsArray = [
    "your business",
    "your products",
    "your ideas",
    "your projects",
    "you",
  ];
  setTimeout(function () {
    setIntroWordClass("");
    if (introWordIndex === 4) {
      setIntroWordIndex(0);
    } else setIntroWordIndex(introWordIndex + 1);
    setIntroWordClass("active");
  }, 3000);

  return (
    <div className="app">
      <div className="hero-background home">
        <video src="Background.mp4" autoPlay muted loop></video>
      </div>
      <Nabvar>
        <Logo />
        <NavbarMenu />
        <NavbarButton handleMenuOpen={activateModal} isModal={isModal} />
      </Nabvar>
      <Hero>
        <div className="hero-text-div">
          <h1>
            The best Web Solutions for <br /> {/* still to fix animation */}
            <span className={`hero-text-changing-word ${introWordClass}`}>
              {introWordsArray[introWordIndex]}
            </span>
          </h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p> */}
          <div className="hero-action-div">
            <button className="hero-btn blue">
              Button <FaArrowCircleRight />
            </button>
            <button className="hero-btn">Button</button>
          </div>
        </div>
      </Hero>
      <h2 className="h2-light">Used by the world's most average companies</h2>
      <AutoplayCarousel></AutoplayCarousel>
      <div className="process-headline-container">
        <h2 className="process-h2">Process</h2>
        <p className="process-sub-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          fuga distinctio molestias laboriosam cum esse!
        </p>
      </div>
      <Process />
      <div className="spacer"></div>
      <HalfAction />
      <div className="spacer"></div>
      <Services />
      <div className="spacer"></div>
      <Billboard />
      <div className="spacer"></div>
      <Footer />
      {isModal && <Modal />}
    </div>
  );
}

export default App;
