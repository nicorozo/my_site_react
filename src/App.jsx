import Nabvar from './components/navbar/Nabvar'
import { Hero } from './components/Hero/Hero'
import AutoplayCarousel from './components/Carousel/AutoplayCarousel'
import Process from './components/Process/Process'
import HalfAction from './components/HalfAction/HalfAction'
import Billboard from './components/Billboard/Billboard'

import './App.css'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='app'>
      <Nabvar/>
      <Hero/>
      <h2 className='h2-light'>Used by the world's most average companies</h2>
      <AutoplayCarousel></AutoplayCarousel>
      <Process/>
      <div className="spacer"></div>
      <HalfAction/>
      <div className="spacer"></div>
      <Billboard/>
      <div className="spacer"></div>
      <Footer/>
    </div>
  )
}

export default App
