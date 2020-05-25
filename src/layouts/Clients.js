import React from "react";
import Swiper from "react-id-swiper";

import first from "./../img/bulgaria.png";

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
      <h1 className="clients__title">ZAUFALI NAM</h1>
      <div className="clients__items">
        <Swiper {...params}>
          <div>
            <img src={first} />
          </div>
          <div>
            <img src={first} />
          </div>
          <div>
            <img src={first} />
          </div>
          <div>
            <img src={first} />
          </div>
          <div>
            <img src={first} />
          </div>
          <div>
            <img src={first} />
          </div>

          <div>
            <img src={first} />
          </div>
        </Swiper>
        <div class="swiper-button-next-uniq">
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
        <div class="swiper-button-prev-uniq">
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
        </div>
      </div>
    </div>
  );
};
export default Clients;
