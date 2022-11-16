import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
   const [currCardIdx, setCurrCardIdx] = useState(0);
   const [arrowShow, setArrowShow] = useState(
     { leftArrow: "hidden", rightArrow: "visible" }
   );

   const leftStyle = {
     visibility: arrowShow.leftArrow
   }
   const rightStyle = {
     visibility: arrowShow.rightArrow
   }

   console.log(currCardIdx, arrowShow)

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1 and changes arrow state
  function goForward() {
    if (currCardIdx === 0) {
      setArrowShow({ leftArrow: "visible", rightArrow: "visible" });
    }
    if (currCardIdx === 1) {
      setArrowShow({ leftArrow: "visible", rightArrow: "hidden" });
    }
    setCurrCardIdx(currCardIdx + 1);
  }

  //Decrements currCardIdx state by 1 and changes arrow state
   function goBackward() {
    if (currCardIdx === 2) {
      setArrowShow({ leftArrow: "visible", rightArrow: "visible" });
    }
    if (currCardIdx === 1) {
      setArrowShow({ leftArrow: "hidden", rightArrow: "visible" });
    }
    setCurrCardIdx(currCardIdx - 1);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className="bi bi-arrow-left-circle"
          style={leftStyle}
          onClick={goBackward}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className="bi bi-arrow-right-circle"
          style={rightStyle}
          onClick={goForward}
        />
      </div>
    </div>
  );
}

export default Carousel;
