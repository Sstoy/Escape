import './slider.css'
import src from './1.jpeg'
import src1 from './2.jpeg'
import src2 from './3.jpeg'
import src3 from './4.jpeg'
import src4 from './5.jpeg'
import src5 from './6.jpeg'
import src6 from './7.jpeg'
import src7 from './8.jpeg'

function Slider(props) {
  return (
    <>
      <ul className="slider">
        <li>
          <input type="radio" id="slide1" name="slide" checked />
          <label htmlFor="slide1"></label>
          <img src={src} alt="Panel 1" />
        </li>
        <li>
          <input type="radio" id="slide2" name="slide" />
          <label htmlFor="slide2"></label>
          <img src={src1} alt="Panel 2" />
        </li>
        <li>
          <input type="radio" id="slide3" name="slide" />
          <label htmlFor="slide3"></label>
          <img src={src2} alt="Panel 3" />
        </li>
        <li>
          <input type="radio" id="slide4" name="slide" />
          <label htmlFor="slide4"></label>
          <img src={src3} alt="Panel 4" />
        </li>
      </ul>
    </>

  );
}

export default Slider;
