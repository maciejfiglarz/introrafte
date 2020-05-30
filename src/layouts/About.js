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
      >
        <div className="about-box-1">
          <span>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
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
        {/* <div className="about-img"></div> */}
      </div>
    );
  }
}

export default About;
