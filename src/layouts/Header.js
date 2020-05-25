import React, { Component } from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <ul className="header__menu">
          <li className="header__menu-item">O nas</li>
          <li className="header__menu-item">Oferta</li>
          <li className="header__menu-item">Współpraca</li>
          <li className="header__menu-item">Kontakt</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
