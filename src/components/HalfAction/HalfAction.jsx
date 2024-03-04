import './HalfAction.css'
const HalfAction = () => {
  return (
    <div className='half-container'>
        <video src="IntroTest.mp4" autoPlay loop muted className='half-video'>
        </video>
        <div className="half-text-div">
            <h3>Medium length heading goes here</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <div className="half-buttons-div">
                <button className="half-button action">Action</button>
                <button className="half-button info">More Info</button>
            </div>
        </div>
    </div>
  )
}

export default HalfAction