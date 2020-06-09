import React from "react";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import bg1 from "./../img/bg1.png";
import bg2 from "./../img/bg2.jpg";

const content = [
  {
    title: "",
    description:
      "Zakres usług naszej drukarni obejmuje projekty graficzne, przygotowanie do druku, druk offsetowy oraz sitodruk oraz prace wykończeniowe co oznacza, że na miejscu jesteśmy w stanie zaoferować kompleksową obsługę z zakresu poligrafi.  Skraca to czas produkcji, a nam  pozwala na utrzymywanie najlepszych dla naszych klientów cen. Jednakże priorytetem dla nas jest jakość oraz zadowolenie klienta. Dbamy aby nasz zespół praz sprzęt były w stanie sprostać wymaganiom stawianym przez Klientów.",
    image: bg2,
    userProfile: "https://i.imgur.com/JSW6mEk.png",
  },
  {
    title: "",
    description:
      "Tablice są prototypami robionymi na potrzeby doskonalenia i usprawnienia produkcji oraz bezpieczeństwa i higieny pracy. Przepisy BHP nakazują, by we wszystkich miejscach i obiektach, w których przebywają ludzie, znalazły się stosowne znaki i instrukcje, które ostrzegą przed niebezpieczeństwem lub poinformują, jak postępować w razie zagrożenia zdrowia lub życia. U nas zamówią Państwo nie tylko profesjonalne instrukcje BHP, ale i doskonale je uzupełniające znaki nakazu – piktogramy z kategorii bezpieczeństwo i higiena pracy. Sprzedajemy profesjonalnie zaprojektowane, czytelne, dostępne w różnych wymiarach i drukowane na folii lub PCV znaki. Doskonale sprawdzają się one w różnych typach obiektów, halach, magazynach, fabrykach czy nawet na placach budowy.",
    button: "Discover",
    image: bg1,
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
              {/* <button className="slider-main__button">{item.button}</button> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderMain;
