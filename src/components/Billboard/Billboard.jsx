import './Billboard.css'
import CircleText from './CircleText'
import PictureBillboard from './PictureBillboard'

const Billboard = () => {
  return (
    <div className='billboard-container'>
        <div className="billboard-upper-div">
            <div className="billboard-wheel-container">
                <CircleText
                text={'React text for Circle * React text for Circle *'}
                />
                <span>About Us</span>
            </div>
            <div className="billboard-text">
                <h3>Short heading goes here</h3>
                <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
            </div>
        </div>
        <div className="billboard-lower-div">
            <PictureBillboard pic="pictures/pic1.png"/>
            <PictureBillboard pic="pictures/pic2.png"/>
            <PictureBillboard pic="pictures/pic3.png"/>
        </div>
    </div>
  )
}

export default Billboard