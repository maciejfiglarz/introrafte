import React from "react";

import "react-animated-slider/build/horizontal.css";
import bcg from "./../img/bcg1.png";
import bcg_bottom from "./../img/bcg1_bottom.svg";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__bottom"></div>
      <div className="container">
        <div className="slider__content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
               <button className="button-primary button-primary--right">
              Przeczytaj więcej
            </button>
        </div>
        
      </div>
    </div>
  );
};

export default Slider;
