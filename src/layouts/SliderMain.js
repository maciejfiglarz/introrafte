import React from "react";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import bg1 from "./../img/bg1.png";
import bg2 from "./../img/bg2.png";

const content = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: bg1,
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png",
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: bg2,
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png",
  }
];

const SliderMain = () => {
  return (
    <div className="slider-main">
      <Slider touchDisabled={true} infinite={true} autoplay={1500}>
        {content.map((item, index) => (
          <div
            key={index}
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="slider-main__content">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button className="slider-main__button">{item.button}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderMain;
