import React, { Component } from "react";

import aboutimg from "../img/about.svg";
import AtutContent from "../components/AtutContent";
// import Background from "../img/19366.jpg";
import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import img6 from "../img/6.png";
import img7 from "../img/7.png";
import img8 from "../img/8.png";

import title from "./../img/about_last.svg";

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
    // const el = this.myRef.current.querySelector(".about-img");
    // let listener = this.myRef.current.querySelector(".listener");
    // listener.addEventListener("mousemove", (e) => {
    //   el.style.backgroundPositionX = -e.offsetX / 100 + "px";
    //   el.style.backgroundPositionY = -e.offsetY / 100 + "px";
    // });
  }

  render() {
    return (
      <div
        onClick={this.handleScroll}
        ref={this.myRef}
        id="about"
        className="about"
        onMouseMove={this.animationFigures.bind(this)}
        id="about"
      >
        <div className="about-box-1">
          <h1 className="clients__title">
            <img src={title} />
          </h1>
          <span>
            <p>
              O nas - Jesteśmy młodą, dynamicznie rozwijającą się firmą powstałą
              w 2008 roku. Kilka lat pracy w dziedzinie reklamy
              wielkoformatowej, reklamy mobilnej czy poligrafii, pozwoliło nam
              zdobyć doświadczenie oraz poznać rynek usług reklamowych.
            </p>
            
            <p>
              Dziękujemy za odwiedzenie naszej strony internetowej. Jako
              nowoczesna firma chcemy dać Państwu możliwość pozostania w
              kontakcie z nami oraz z naszą ofertą. Nowy system zarządzania
              treścią pozwoli nam na regularne aktualizacje naszego serwisu.
              Świadczymy kompleksowe usługi reklamowe, od projektu po montaż
              materiałów reklamowych. W chwili obecnej świadczymy usługi z
              zakresu poligrafii, szeroko rozumianej reklamy wizualnej,
              projektowania graficznego oraz fotografii reklamowej i
              okolicznościowej. Priorytetem dla nas jest najwyższa jakość
              naszych usług i zadowolenie Klientów. Jeśli są Państwo
              zainteresowani naszą ofertą zapraszamy do współpracy.
            </p>
            <p>
              Opracowując system pracy wyszliśmy naprzeciw Państwa oczekiwaniom.
              <br></br>
              <br></br>
              <ul className="footer-content__box-list">
                <li className="about__list-item">
                  Ustalamy terminy i miejsca spotkań dostosowane do Państwa
                  potrzeb i wymagań.
                </li>
                <li className="about__list-item">
                  Oferujemy szybkie oraz odroczone w czasie terminy realizacji.
                </li>
                <li className="about__list-item">
                  Proponowane przez nas ceny są jedne z najlepszych na rynku.
                </li>
              </ul>
            </p>
          </span>
        </div>
        <div className="about-box-2">
          <div className="about-bullet">
            <div className="about-txt-1">
              <AtutContent
                img={img1}
                style={this.style}
                text="Wykonujemy kompleksową obsługe POMIAR-DORADZTWO-RÓŻNE WARIANTY CENOWE-DOJAZD NA MIEJSCE DO KLIENTA"
              />
              <AtutContent
                style={this.style}
                img={img2}
                text="Kompleksowa obsługa PROJEKT-WYDRUK-MONTAŻ"
              />
              <AtutContent
                style={this.style}
                img={img3}
                text="Indywidualne podejście do klienta"
              />
              <AtutContent
                style={this.style}
                img={img4}
                text="Własne mobile reklamowe do wynajęcia"
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
                  text="12 Lat doświadczenia i ciągłego doskonalenia w branży"
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

        {/* <div className="listener"></div> */}
        {/* <div className="about-img"></div> */}
      </div>
    );
  }
}

export default About;
