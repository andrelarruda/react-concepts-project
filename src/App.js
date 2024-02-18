import Accordion from "./components/accordion";
import './App.css';
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion /> */}

      {/* Random colour component */}
      {/* <RandomColor /> */}

      {/* Star rating component */}
      {/* <StarRating /> */}

      {/* Image Slider component */}
      <ImageSlider
        url={'https://picsum.photos/v2/list'}
        limit={'5'} />
    </div>
  );
}

export default App;
