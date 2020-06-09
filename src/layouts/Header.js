import React, { Component, useState } from "react";
import logo from "./../img/logo.png";
import MenuResponsive from "./../components/MenuResponsive";
import Table from "./../components/Table";

import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuResponsive, setIsMenuResponsive] = useState("");
  const [isTable, setIsTable] = useState(false);

  const onClickMenuResponsive = (e) => {
    setIsMenuResponsive(!isMenuResponsive);
  };

  const onClickTable = () => {
  
    setIsTable(!isTable);
  };

  return (
    <>
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
              <a className="header__menu-item" href="#offer">
                Oferta
              </a>
            </li>
            <li>
              <div onClick={onClickTable} className="header__menu-item">
                Tablice specjalistyczne
              </div>
            </li>
            <li>
              <a className="header__menu-item" href="#collaboration">
                Współpraca
              </a>
            </li>
            <li>
              <a className="header__menu-item" href="#portfolio">
                Realizacje
              </a>
            </li>
            <li>
              <a className="header__menu-item" href="#contact">
                Kontakt
              </a>
            </li>
          </ul>
          <div
            onClick={onClickMenuResponsive}
            className="menu-responsive__init"
          >
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </header>
      <MenuResponsive
        isMenuResponsive={isMenuResponsive}
        setIsMenuResponsive={setIsMenuResponsive}
      />
      <Table isTable={isTable} setIsTable={setIsTable} />
    </>
  );
};

export default Header;
