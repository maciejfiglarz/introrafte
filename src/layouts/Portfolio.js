import React from "react";
import photo from "./../img/print.jpg";
import Lightbox from 'react-lightbox-component';

const getStyle = (linkPhoto) => {
  return {
    backgroundImage: `url('${linkPhoto}')`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
};

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <div className="portfolio__container container">
          <div className="portfolio__title">OSTATNIE REALIZACJE</div>
          <div className="portfolio__item-wrap">
            {/* {images.map((photo) => ( */}
            <div style={getStyle(photo)} className="portfolio__item"></div>
            <div style={getStyle(photo)} className="portfolio__item"></div>
            <div style={getStyle(photo)} className="portfolio__item"></div>
            <div style={getStyle(photo)} className="portfolio__item"></div>

            <div style={getStyle(photo)} className="portfolio__item"></div>
            <div style={getStyle(photo)} className="portfolio__item"></div>
            <div style={getStyle(photo)} className="portfolio__item"></div>
            <div style={getStyle(photo)} className="portfolio__item"></div>

            {/* ))} */}
          </div>
        </div>
      </div>
      {/* <Lightbox
        images={[
          {
            src: photo,
            title: "image title",
            description: "image description",
          },
        ]}
        renderImageFunc={(idx, image, toggleLightbox, width, height) => {
          return (
            <img
              key={idx}
              src={image.src}
              className="img-circle"
              style={{ width: width, height: height }}
              onClick={toggleLightbox.bind(null, idx)}
            />
          );
        }}
      /> */}
    </>
  );
};

export default Portfolio;
