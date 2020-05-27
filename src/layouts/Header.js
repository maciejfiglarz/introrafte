import React, { Component } from "react";
import logo from "./../img/logo.png";
const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">
          <img src={logo} />
        </div>
        <ul className="header__menu">
          <li>
            <a className="header__menu-item" href="#about">
              O nas
            </a>
          </li>
          <li>
            <a className="header__menu-item" href="#offer">Oferta</a>
          </li>
          <li>
            <a className="header__menu-item" href="#collaboration">Współpraca</a>
          </li>
          <li>
            <a className="header__menu-item" href="#contact">Kontakt</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
