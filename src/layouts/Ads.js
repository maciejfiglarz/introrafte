import React from "react";
import Swiper from "react-id-swiper";

import aboutUs from "./../img/onas.png";
import title from "./../img/wspolpraca_last.svg";

const Ads = () => {
  return (
    <>
      {/* <div className="ads ads--first" id="offer">
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
      </div> */}

      <div className="ads ads--second" id="collaboration">
      <h1 className="clients__title">
        <img src={title} />
      </h1>
      <br></br>
        <div className="ads__container container">
          <div className="ads__content">
            <div className="ads__text">
              <h2 className="text__header">
                Oferta współpracy z agencjami reklamowymi oraz punktami ksero
              </h2>
              Zapraszamy do współpracy wszystkie firmy, które pośredniczą w
              realizacji zamówień poligraficznych do zapoznania się z naszą
              ofertą. Od samego początku współpracy oferujemy pośrednikom bardzo
              korzystne rabaty na cały nasz asortyment. Nasz zgrany zespół
              szybko dostosowuje się do zmiennych potrzeb klienta i pewnie
              realizuje postawione przed nim wyzwania. Sprawimy, iż Twój klient
              będzie w pełni usatysfakcjonowany otrzymanym produktem.
            </div>
          </div>
          <div className="ads__image">
            <img src={aboutUs} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Ads;
