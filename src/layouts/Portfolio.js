import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

import photo1 from "./../img/portfolio/1.jpg";
import photo2 from "./../img/portfolio/2.jpg";
import photo3 from "./../img/portfolio/3.jpg";
import photo4 from "./../img/portfolio/4.jpg";

import photo5 from "./../img/portfolio/5.jpg";
import photo6 from "./../img/portfolio/6.jpg";
import photo7 from "./../img/portfolio/7.jpg";
import photo8 from "./../img/portfolio/8.jpg";

import photo9 from "./../img/portfolio/9.jpg";
import photo10 from "./../img/portfolio/10.jpg";
import photo11 from "./../img/portfolio/11.jpg";
import photo12 from "./../img/portfolio/12.jpg";

import photo13 from "./../img/portfolio/13.jpg";
import photo14 from "./../img/portfolio/14.jpg";
import photo15 from "./../img/portfolio/15.jpg";
import photo16 from "./../img/portfolio/16.jpg";

import realizacje from "./../img/ostatnie_realizacje.svg";


const images = [
  { source: photo1 },
  { source: photo2 },
  { source: photo3 },
  { source: photo4 },
  { source: photo5 },
  { source: photo6 },
  { source: photo7 },
  { source: photo8 },
  { source: photo9 },
  { source: photo10 },
  { source: photo11 },
  { source: photo12 },
  { source: photo13 },
  { source: photo14 },
  { source: photo15 },
  { source: photo16 },
];

class Portfolio extends React.Component {
  state = { modalIsOpen: false, selectedIndex: 1 };
  getStyle = (linkPhoto) => {
    return {
      backgroundImage: `url('${linkPhoto}')`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
    };
  };
  toggleModal = () => {
    this.setState((state) => ({ modalIsOpen: !state.modalIsOpen }));
  };

  handleClick = (e) => {
    const currentIndex = e.target.dataset.index;
    this.setState((state) => ({
      modalIsOpen: !state.modalIsOpen,
      selectedIndex: currentIndex,
    }));
  };

  render() {
    const { modalIsOpen } = this.state;

    return (
      <>
        <ModalGateway>
          {modalIsOpen ? (
            <Modal onClose={this.toggleModal}>
              <Carousel
                currentIndex={this.state.selectedIndex}
                views={images}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        <div className="portfolio" id="portfolio">
          <div className="portfolio__container container">
            <div className="clients__title">
              <img src={realizacje} />
            </div>
            <div className="portfolio__item-wrap">
              <div
                onClick={this.handleClick}
                style={this.getStyle(photo1)}
                data-index={0}
                className="portfolio__item"
              ></div>
              <div
                onClick={this.handleClick}
                style={this.getStyle(photo2)}
                className="portfolio__item"
                data-index={1}
              ></div>
              <div
                onClick={this.handleClick}
                style={this.getStyle(photo3)}
                className="portfolio__item"
                data-index={2}
              ></div>
              <div
                onClick={this.handleClick}
                style={this.getStyle(photo4)}
                className="portfolio__item"
                data-index={3}
              ></div>
              <div
                onClick={this.handleClick}
                style={this.getStyle(photo5)}
                data-index={4}
                className="portfolio__item"
              ></div>
              <div
                onClick={this.handleClick}
                style={this.getStyle(photo6)}
                className="portfolio__item"
                data-index={5}
              ></div>
              <div
                onClick={this.handleClick}
                style={this.getStyle(photo7)}
                className="portfolio__item"
                data-index={6}
              ></div>
              <div
                onClick={this.handleClick}
                style={this.getStyle(photo8)}
                className="portfolio__item"
                data-index={7}
              ></div>
              <div
                onClick={this.handleClick}
                style={this.getStyle(photo9)}
                className="portfolio__item"
                data-index={8}
              ></div>
              <div
                onClick={this.handleClick}
                style={this.getStyle(photo10)}
                className="portfolio__item"
                data-index={9}
              ></div>
              <div
                onClick={this.handleClick}
                style={this.getStyle(photo11)}
                className="portfolio__item"
                data-index={10}
              ></div>

              <div
                onClick={this.handleClick}
                style={this.getStyle(photo12)}
                className="portfolio__item"
                data-index={11}
              ></div>
              <div
                onClick={this.handleClick}
                style={this.getStyle(photo13)}
                className="portfolio__item"
                data-index={12}
              ></div>
              <div
                onClick={this.handleClick}
                style={this.getStyle(photo14)}
                className="portfolio__item"
                data-index={13}
              ></div>
              <div
                onClick={this.handleClick}
                style={this.getStyle(photo15)}
                className="portfolio__item"
                data-index={14}
              ></div>
              <div
                onClick={this.handleClick}
                style={this.getStyle(photo16)}
                className="portfolio__item"
                data-index={15}
              ></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;

// import React from "react";
// import photo from "./../img/print.jpg";
// import Lightbox from 'react-lightbox-component';

// const getStyle = (linkPhoto) => {
//   return {
//     backgroundImage: `url('${linkPhoto}')`,
//     backgroundSize: "cover",
//     backgroundPosition: "center center",
//   };
// };

// const Portfolio = () => {
//   return (
//     <>
//       <div className="portfolio">
//         <div className="portfolio__container container">
//           <div className="portfolio__title">OSTATNIE REALIZACJE</div>
//           <div className="portfolio__item-wrap">
//             {/* {images.map((photo) => ( */}
//             <div style={getStyle(photo)} className="portfolio__item"></div>
//             <div style={getStyle(photo)} className="portfolio__item"></div>
//             <div style={getStyle(photo)} className="portfolio__item"></div>
//             <div style={getStyle(photo)} className="portfolio__item"></div>

//             <div style={getStyle(photo)} className="portfolio__item"></div>
//             <div style={getStyle(photo)} className="portfolio__item"></div>
//             <div style={getStyle(photo)} className="portfolio__item"></div>
//             <div style={getStyle(photo)} className="portfolio__item"></div>

//             {/* ))} */}
//           </div>
//         </div>
//       </div>
//       <Lightbox
//         images={[
//           {
//             src: photo,
//             title: "image title",
//             description: "image description",
//           },
//         ]}
//         renderImageFunc={(idx, image, toggleLightbox, width, height) => {
//           return (
//             <img
//               key={idx}
//               src={image.src}
//               className="img-circle"
//               style={{ width: width, height: height }}
//               onClick={toggleLightbox.bind(null, idx)}
//             />
//           );
//         }}
//       />
//     </>
//   );
// };

// export default Portfolio;
