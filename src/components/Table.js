import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

import photo1 from "./../img/panels/1.jpeg";
import photo2 from "./../img/panels/2.jpeg";
import photo3 from "./../img/panels/3.jpeg";
import photo4 from "./../img/panels/4.jpeg";

const images = [
  { source: photo1 },
  { source: photo2 },
  { source: photo3 },
  { source: photo4 },
];

class Tables extends React.Component {
  state = {
    modalIsOpen: false,
    selectedIndex: 1,
    isTable: this.props.isTable,
    setIsTable: this.props.setIsTable,
  };

  onClickTableClose = () => {
    this.setState((state) => ({ modalIsOpen: this.state.setIsTable(!this.state.isTable) }));
  };

  componentDidUpdate(prevProps) {
    if (prevProps.isTable !== this.props.isTable) {
      this.setState({ isTable: this.props.isTable });
    }
  }

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
    console.log("renderTable", this.state.isTable);
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
        <div className={`table  ${this.state.isTable ? "table--visible" : ""}`}>
          <div className="table__inner container">
            <div onClick={this.onClickTableClose} className="table__close">
              <i className="fas fa-times"></i>
            </div>
            <div className="table__content" id="style-2">
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

// const Tables = ({ isTable, setIsTable }) => {
//   const onClickTableClose = () => {
//     setIsTable(!isTable);
//   };
//   return (
//     <div className={`table ${isTable ? "table--visible" : ""}`}>
//       <div className="table__inner container">
//         <div onClick={onClickTableClose} className="table__close">
//           <i className="fas fa-times"></i>
//         </div>
//         <div className="table__content" id="style-2">
//           What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
//           and typesetting industry. Lorem Ipsum has been the industry's standard
//           dummy text ever since the 1500s, when an unknown printer took a galley
//           of type and scrambled it to make a type specimen book. It has survived
//           not only five centuries, but also the leap into electronic
//           typesetting, remaining essentially unchanged. It was popularised in
//           the 1960s with the release of Letraset sheets containing Lorem Ipsum
//           passages, and more recently with desktop publishing software like
//           Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
//           It is a long established fact that a reader will be distracted by the
//           readable content of a page when looking at its layout. The point of
//           using Lorem Ipsum is that it has a more-or-less normal distribution of
//           letters, as opposed to using 'Content here, content here', making it
//           look like readable English.
//           <br></br>
//           <br></br> Many desktop publishing packages and web page editors now
//           use Lorem Ipsum as their default model text, and a search for 'lorem
//           ipsum' will uncover many web sites still in their infancy. Various
//           versions have evolved over the years, sometimes by accident, sometimes
//           on purpose (injected humour and the like). Where does it come from?
//           Contrary to popular belief, Lorem Ipsum is not simply random text. It
//           has roots in a piece of classical Latin literature from 45 BC, making
//           it over 2000 years old. Richard McClintock, a Latin professor at
//           Hampden-Sydney College in Virginia, looked up one of the more obscure
//           Latin words, consectetur, from a Lorem Ipsum passage, and going
//           through the cites of the word in classical literature, discovered the
//           undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
//           1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
//           Evil) by Cicero, written in 45 BC.
//           <br></br> <br></br> This book is a treatise on the theory of ethics,
//           very popular during the Renaissance. The first line of Lorem Ipsum,
//           "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
//           The standard chunk of Lorem Ipsum used since the 1500s is reproduced
//           below for those interested. Sections 1.10.32 and 1.10.33 from "de
//           Finibus Bonorum et Malorum" by Cicero are also reproduced in their
//           exact original form, accompanied by English versions from the 1914
//           translation by H. Rackham. What is Lorem Ipsum? Lorem Ipsum is simply
//           dummy text of the printing and typesetting industry. Lorem Ipsum has
//           been the industry's standard dummy text ever since the 1500s, when an
//           unknown printer took a galley of type and scrambled it to make a type
//           specimen book. It has survived not only five centuries, but also the
//           leap into electronic typesetting, remaining essentially unchanged. It
//           was popularised in the 1960s with the release of Letraset sheets
//           containing Lorem Ipsum passages, and more recently with desktop
//           publishing software like Aldus PageMaker including versions of Lorem
//           Ipsum. Why do we use it? It is a long established fact that a reader
//           will be distracted by the readable content of a page when looking at
//           its layout. The point of using Lorem Ipsum is that it has a
//           more-or-less normal distribution of letters, as opposed to using
//           'Content here, content here', making it look like readable English.
//           <br></br>
//           <br></br> Many desktop publishing packages and web page editors now
//           use Lorem Ipsum as their default model text, and a search for 'lorem
//           ipsum' will uncover many web sites still in their infancy. Various
//           versions have evolved over the years, sometimes by accident, sometimes
//           on purpose (injected humour and the like). Where does it come from?
//           Contrary to popular belief, Lorem Ipsum is not simply random text. It
//           has roots in a piece of classical Latin literature from 45 BC, making
//           it over 2000 years old. Richard McClintock, a Latin professor at
//           Hampden-Sydney College in Virginia, looked up one of the more obscure
//           Latin words, consectetur, from a Lorem Ipsum passage, and going
//           through the cites of the word in classical literature, discovered the
//           undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
//           1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
//           Evil) by Cicero, written in 45 BC.
//           <br></br> <br></br> This book is a treatise on the theory of ethics,
//           very popular during the Renaissance. The first line of Lorem Ipsum,
//           "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
//           The standard chunk of Lorem Ipsum used since the 1500s is reproduced
//           below for those interested. Sections 1.10.32 and 1.10.33 from "de
//           Finibus Bonorum et Malorum" by Cicero are also reproduced in their
//           exact original form, accompanied by English versions from the 1914
//           translation by H. Rackham. What is Lorem Ipsum? Lorem Ipsum is simply
//           dummy text of the printing and typesetting industry. Lorem Ipsum has
//           been the industry's standard dummy text ever since the 1500s, when an
//           unknown printer took a galley of type and scrambled it to make a type
//           specimen book. It has survived not only five centuries, but also the
//           leap into electronic typesetting, remaining essentially unchanged. It
//           was popularised in the 1960s with the release of Letraset sheets
//           containing Lorem Ipsum passages, and more recently with desktop
//           publishing software like Aldus PageMaker including versions of Lorem
//           Ipsum. Why do we use it? It is a long established fact that a reader
//           will be distracted by the readable content of a page when looking at
//           its layout. The point of using Lorem Ipsum is that it has a
//           more-or-less normal distribution of letters, as opposed to using
//           'Content here, content here', making it look like readable English.
//           <br></br>
//           <br></br> Many desktop publishing packages and web page editors now
//           use Lorem Ipsum as their default model text, and a search for 'lorem
//           ipsum' will uncover many web sites still in their infancy. Various
//           versions have evolved over the years, sometimes by accident, sometimes
//           on purpose (injected humour and the like). Where does it come from?
//           Contrary to popular belief, Lorem Ipsum is not simply random text. It
//           has roots in a piece of classical Latin literature from 45 BC, making
//           it over 2000 years old. Richard McClintock, a Latin professor at
//           Hampden-Sydney College in Virginia, looked up one of the more obscure
//           Latin words, consectetur, from a Lorem Ipsum passage, and going
//           through the cites of the word in classical literature, discovered the
//           undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
//           1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
//           Evil) by Cicero, written in 45 BC.
//           <br></br> <br></br> This book is a treatise on the theory of ethics,
//           very popular during the Renaissance. The first line of Lorem Ipsum,
//           "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
//           The standard chunk of Lorem Ipsum used since the 1500s is reproduced
//           below for those interested. Sections 1.10.32 and 1.10.33 from "de
//           Finibus Bonorum et Malorum" by Cicero are also reproduced in their
//           exact original form, accompanied by English versions from the 1914
//           translation by H. Rackham.
//         </div>
//       </div>
//     </div>
//   );
// };

export default Tables;
