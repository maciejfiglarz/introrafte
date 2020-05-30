import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import photo1 from "./../img/print.jpg";
import photo2 from "./../img/portfolio/print2.jpg";
import photo3 from "./../img/portfolio/print3.jpg";
import photo4 from "./../img/portfolio/print4.jpg";

const images = [
  { source: photo1 },
  { source: photo2 },
  { source: photo3 },
  { source: photo4 },
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
        <div className="portfolio">
          <div className="portfolio__container container">
            <div className="portfolio__title">OSTATNIE REALIZACJE</div>
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
