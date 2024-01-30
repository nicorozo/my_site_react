import './Hero.css'
import { FaArrowCircleRight } from "react-icons/fa";


export const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero_left">
            <h1>From creatives to creatives</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
            <div className="hero_action-div">
                <button className="hero_btn blue">
                    Button <FaArrowCircleRight />
                </button>
                <button className="hero_btn">Button</button>
            </div>
        </div>
        <div className="hero_right">
            <img src="./hero.png" alt="hero-image" />
        </div>
    </section>
  )
}
