import React, { Component } from "react";
import Logo from "../img/logo.svg";
import { useTranslation } from "react-i18next";

const MenuResponsive = ({ isMenuResponsive, handleMenuResponsive }) => {
  const { t, i18n } = useTranslation();
  const onClickClose = (e) => {
    handleMenuResponsive(!isMenuResponsive);
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
          <a onClick={onClickClose} href="#about">{t("Kim jesteśmy?")}</a>
        </li>
        <li>
          <a onClick={onClickClose} href="#offer">{t("Oferta")}</a>
        </li>
        <li>
          <a onClick={onClickClose} href="#portfolio">{t("Realizacje")}</a>
        </li>
        <li>
          <a onClick={onClickClose} href="#contact">{t("Kontakt")}</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuResponsive;
