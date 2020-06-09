import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

import photo1 from "./../img/panels/1.jpeg";
import photo2 from "./../img/panels/2.jpeg";
import photo3 from "./../img/panels/3.jpeg";
import photo4 from "./../img/panels/4.jpeg";
import title from "./../img/tablice.svg";

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
    this.setState((state) => ({
      modalIsOpen: this.state.setIsTable(!this.state.isTable),
    }));
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
              <h1 className="clients__title">
                <img src={title} />
              </h1>
              Tablice są prototypami robionymi na potrzeby doskonalenia i
              usprawnienia produkcji oraz bezpieczeństwa i higieny pracy.
              Przepisy BHP nakazują, by we wszystkich miejscach i obiektach, w
              których przebywają ludzie, znalazły się stosowne znaki i
              instrukcje, które ostrzegą przed niebezpieczeństwem lub
              poinformują, jak postępować w razie zagrożenia zdrowia lub życia.
              U nas zamówią Państwo nie tylko profesjonalne instrukcje BHP, ale
              i doskonale je uzupełniające znaki nakazu – piktogramy z kategorii
              bezpieczeństwo i higiena pracy. Sprzedajemy profesjonalnie
              zaprojektowane, czytelne, dostępne w różnych wymiarach i drukowane
              na folii lub PCV znaki. Doskonale sprawdzają się one w różnych
              typach obiektów, halach, magazynach, fabrykach czy nawet na
              placach budowy.
              <div className="table__portfolio">
                <div
                  onClick={this.handleClick}
                  style={this.getStyle(photo1)}
                  data-index={0}
                  className="table__portfolio-item"
                ></div>
                <div
                  onClick={this.handleClick}
                  style={this.getStyle(photo2)}
                  className="table__portfolio-item"
                  data-index={1}
                ></div>
                <div
                  onClick={this.handleClick}
                  style={this.getStyle(photo4)}
                  className="table__portfolio-item"
                  data-index={3}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Tables;
