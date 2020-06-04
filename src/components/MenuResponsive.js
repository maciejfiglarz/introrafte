import React, { Component, useState } from "react";
import Logo from "../img/logo.png";
import Table from "./../components/Table";

const MenuResponsive = ({ isMenuResponsive, setIsMenuResponsive }) => {
  const [isTable, setIsTable] = useState("");
  const onClickClose = (e) => {
    setIsMenuResponsive(!isMenuResponsive);
  };

  const onClickTable = () => {
    setIsTable(!isTable);
    onClickClose();
  };

  return (
    <>
      <div
        className={`menu-responsive ${
          isMenuResponsive ? "menu-responsive--visible" : ""
        }`}
      >
        <div onClick={onClickClose} className="menu-responsive__close">
          <i className="fas fa-times"></i>
        </div>
        <div className="menu-responsive__logo">
          <img className="menu-responsive__logo-img" src={Logo} />
        </div>
        <ul className="menu-responsive__list">
          <li>
            <a
              className="menu-responsive__list-item"
              onClick={onClickClose}
              href="#about"
            >
              O nas
            </a>
          </li>
          <li>
            <a
              className="menu-responsive__list-item"
              onClick={onClickClose}
              href="#offer"
            >
              Oferta
            </a>
          </li>
          <li>
            <a
              className="menu-responsive__list-item"
              onClick={onClickTable}
              href="#offer"
            >
              Tablice specjalistyczne
            </a>
          </li>
          <li>
            <a
              className="menu-responsive__list-item"
              onClick={onClickClose}
              href="#collaboration"
            >
              Współpraca
            </a>
          </li>
          <li>
            <a
              className="menu-responsive__list-item"
              onClick={onClickClose}
              href="#portfolio"
            >
              Realizacje
            </a>
          </li>
    
       
          <li>
            <a
              className="menu-responsive__list-item"
              onClick={onClickClose}
              href="#contact"
            >
              Kontakt
            </a>
          </li>
        </ul>
      </div>
      <Table isTable={isTable} setIsTable={setIsTable} />
    </>
  );
};

export default MenuResponsive;
