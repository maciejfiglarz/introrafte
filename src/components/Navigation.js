import React, { Component } from "react";
import Logo from "../img/logo.svg";
import { useTranslation } from "react-i18next";

const Navigation = ({ handleMenuResponsive,isMenuResponsive}) => {
  const { t, i18n } = useTranslation();
  const onClickMenuResponsive = (e)=>{
    handleMenuResponsive(!isMenuResponsive);
  }
  return (
    <div className="nav">
      <div className="logo">
        <img id="logo-main" src={Logo} alt="" />
        <div className="menu">
          <ul className="menu-list">
            <li>
              <a href="#about">{t("Kim jesteśmy?")}</a>
            </li>
            <li>
              <a href="#offer">{t("Oferta")}</a>
            </li>
            <li>
              <a href="#portfolio">{t("Realizacje")}</a>
            </li>
            <li>
              <a href="#contact">{t("Kontakt")}</a>
            </li>
          </ul>
        </div>
        <div
          onClick={onClickMenuResponsive}
          className="menu-responsive__init"
        >
          <i className="fas fa-bars"></i>
        </div>

        <div className="languages">
          <div className="lang">
            <a href="index.html">
              <img src="img/polska.png" alt="" srcset="" />
            </a>
          </div>
          <div className="lang">
            <img src="img/anglia.png" alt="" srcset="" />
          </div>
          <div className="lang">
            <a href="bg.html">
              <img src="img/bulgaria.png" alt="" srcset="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
