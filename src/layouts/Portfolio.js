import React from "react";
import photo from "./../img/print.jpg";

const getStyle = (linkPhoto) => {
  return {
    backgroundImage: `url('${linkPhoto}')`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
};

const Portfolio = () => {
  return (
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
  );
};

export default Portfolio;
