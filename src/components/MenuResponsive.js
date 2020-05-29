import React, { Component } from "react";
import Logo from "../img/logo.png";

const MenuResponsive = ({ isMenuResponsive, setIsMenuResponsive }) => {
  const onClickClose = (e) => {
    setIsMenuResponsive(!isMenuResponsive);
  };

  return (
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
          <a className="menu-responsive__list-item" onClick={onClickClose} href="#about">
            Kim jesteśmy?
          </a>
        </li>
        <li>
          <a className="menu-responsive__list-item" onClick={onClickClose} href="#offer">
            Oferta
          </a>
        </li>
        <li>
          <a className="menu-responsive__list-item" onClick={onClickClose} href="#portfolio">
            Realizacje
          </a>
        </li>
        <li>
          <a className="menu-responsive__list-item" onClick={onClickClose} href="#contact">
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuResponsive;
