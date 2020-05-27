import React, { Component } from "react";

import aboutimg from "../img/about.svg";
import AtutContent from "../components/AtutContent";
// import Background from "../img/19366.jpg";
import img1 from "../img/01.svg";
import img2 from "../img/02.svg";
import img3 from "../img/03.svg";
import img4 from "../img/04.svg";
import img5 from "../img/05.svg";
import img6 from "../img/06.svg";
import img7 from "../img/07.svg";
import img8 from "../img/08.svg";

import { useTranslation, Translation } from "react-i18next";

class About extends Component {
  state = {
    position: 0,
  };

  myRef = React.createRef();
  style = "atut";

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.setState({
        position: window.scrollY,
      });
      if (
        this.state.position >= this.myRef.current.getBoundingClientRect().top
      ) {
        this.style = "atut showUp";
      }
    });
  }

  animationFigures() {
    const el = this.myRef.current.querySelector(".about-img");
    let listener = this.myRef.current.querySelector(".listener");
    listener.addEventListener("mousemove", (e) => {
      el.style.backgroundPositionX = -e.offsetX / 100 + "px";
      el.style.backgroundPositionY = -e.offsetY / 100 + "px";
    });
  }

  render() {
    return (
      <div
        onClick={this.handleScroll}
        ref={this.myRef}
        id="about"
        className="about"
        onMouseMove={this.animationFigures.bind(this)}
      >
        <div className="about-box-1">
          <span>
            <img src={aboutimg} alt="" />
            <p>
              Naszą firmę tworzą ludzie kreatywni, zainteresowani otaczającym
              nas światem marketingu. Myślimy nieszablonowo i staramy się, żeby
              nasze projekty również takie pozostały. Projektujemy strony www,
              które są intuicyjne, proste w obsłudze oraz interaktywne.
              Tworzenie stron internetowych odbywa się u nas na podstawie
              gotowych oraz sprawdzonych modeli w przypadku większych serwisów
              lub na podstawie indywidualnych wytycznych otrzymanych od klienta.
              Każdy projekt jest inny i do każdego podchodzimy indywidualnie.
            </p>
          </span>
        </div>
        <div className="about-box-2">
          <div className="about-bullet">
            <div className="about-txt-1">
              <AtutContent
                img={img1}
                style={this.style}
                text="Działamy kreatywnie z pasją"
              />
              <AtutContent
                style={this.style}
                img={img2}
                text="Kompleksowa obsługa: projekt – wykonanie – wydruk"
              />
              <AtutContent
                style={this.style}
                img={img3}
                text="Indywidualne podejście do klienta"
              />
              <AtutContent
                style={this.style}
                img={img4}
                text="Doświadczenie w branży sceneograficznej"
              />
            </div>
            <div className="about-txt-2">
              <div className="about-txt-1">
                <AtutContent
                  style={this.style}
                  img={img5}
                  text="Wiedza, profesjonalizm, konsekwencja"
                />
                <AtutContent
                  style={this.style}
                  img={img6}
                  text="Szybkość realizowanych projektów"
                />
                <AtutContent
                  style={this.style}
                  img={img7}
                  text="10 lat doświadczenia w poligrafii"
                />
                <AtutContent
                  style={this.style}
                  img={img8}
                  text="Bezproblemowa i szybka komunikacja"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="listener"></div>
        <div className="about-img"></div>
      </div>
    );
  }
}

export default About;
