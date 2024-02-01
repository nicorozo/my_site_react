import Nabvar from './components/navbar/Nabvar'
import { Hero } from './components/Hero/Hero'
import AutoplayCarousel from './components/Carousel/AutoplayCarousel'
import { FaElementor,FaWordpressSimple,FaCss3Alt,FaReact } from "react-icons/fa";

import './App.css'

function App() {

  return (
    <div className='app'>
    <Nabvar/>
    <Hero/>
    <h2 className='h2-light'>Used by the world's most average companies</h2>
    <AutoplayCarousel></AutoplayCarousel>
    </div>
  )
}

export default App
