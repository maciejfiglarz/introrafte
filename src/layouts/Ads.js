import React from "react";
import Swiper from "react-id-swiper";

import print2 from "./../img/portfolio/print2.jpg";
import print3 from "./../img/portfolio/print3.jpg";

const Ads = () => {
  return (
    <>
      <div className="ads ads--first">
        <div className="ads__container container">
          <div className="ads__content">
            <div className="ads__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <button className="button-primary button-primary--bright button-primary--center">
              Przeczytaj więcej
            </button>
          </div>
          <div className="ads__image">
            <img src={print2} />
          </div>
        </div>
      </div>

      <div className="ads ads--second">
        <div className="ads__container container">
          <div className="ads__content">
            <div className="ads__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <button className="button-primary button-primary--bright button-primary--center">
              Przeczytaj więcej
            </button>
          </div>
          <div className="ads__image">
            <img src={print2} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Ads;
