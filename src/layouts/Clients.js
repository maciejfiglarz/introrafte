import React from "react";
import Swiper from "react-id-swiper";

import orange from "./../img/clients/orange.png";
import aluform from "./../img/clients/aluform.png";
import goldenmed from "./../img/clients/goldenmed.png";
import kappa from "./../img/clients/kappa.png";
import lidl from "./../img/clients/lidl.png";

import image1 from "./../img/clients/1.png";
import image2 from "./../img/clients/2.png";
import image3 from "./../img/clients/3.png";
import image4 from "./../img/clients/4.png";

import image6 from "./../img/clients/6.png";
import image7 from "./../img/clients/aggaz.png";
import image8 from "./../img/clients/kik.png";
import image9 from "./../img/clients/spolem.png";

import image10 from "./../img/clients/9.png";
import image11 from "./../img/clients/10.png";

import image12 from "./../img/clients/12.png";


import zaufali from "./../img/zaufali_nam.svg";

const Clients = () => {
  const params = {
    spaceBetween: 30,
    slidesPerView: 3,

    autoplay: {
      delay: 1500,
      // disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next-uniq",
      prevEl: ".swiper-button-prev-uniq",
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };
  return (
    <div className="clients container">
      <h1 className="clients__title"><img src={zaufali} /></h1>
      <div className="clients__items">
        <Swiper {...params}>
          <div className="clients__item">
            <img src={orange} />
          </div>
          <div className="clients__item">
            <img src={aluform} />
          </div>
          <div className="clients__item">
            <img src={goldenmed} />
          </div>
          <div className="clients__item">
            <img src={kappa} />
          </div>
          <div className="clients__item">
            <img src={lidl} />
          </div>
          <div className="clients__item">
            <img src={image1} />
          </div>
          <div className="clients__item">
            <img src={image2} />
          </div>
          <div className="clients__item">
            <img src={image3} />
          </div>
          <div className="clients__item">
            <img src={image4} />
          </div>
          <div className="clients__item">
            <img src={image6} />
          </div>
          <div className="clients__item">
            <img src={image7} />
          </div>
          <div className="clients__item">
            <img src={image8} />
          </div>
          <div className="clients__item">
            <img src={image9} />
          </div>
          <div className="clients__item">
            <img src={image10} />
          </div>
          <div className="clients__item">
            <img src={image11} />
          </div>
          <div className="clients__item">
            <img src={image12} />
          </div>
        </Swiper>
        {/* <div className="swiper-button-next-uniq">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="30"
            viewBox="0 0 20 30"
          >
            <polygon
              fill="#000"
              points="20 15 4.228 0 0 3.626 11.954 15 0 26.374 4.228 30"
              transform="rotate(0 10 15)"
            ></polygon>
          </svg>
        </div>
        <div className="swiper-button-prev-uniq">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="30"
            viewBox="0 0 20 30"
          >
            <polygon
              fill="#000"
              points="20 15 4.228 0 0 3.626 11.954 15 0 26.374 4.228 30"
              transform="rotate(180 10 15)"
            ></polygon>
          </svg>
        </div> */}
      </div>
    </div>
  );
};
export default Clients;
