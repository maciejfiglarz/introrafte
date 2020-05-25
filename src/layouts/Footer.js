import React from "react";

const Footer = () => {
  const data = [
    {
      title: "Strony internetowe",
      data: [
        "Strony i serwisy WWW",
        "Sklepy Internetowe",
        "Systemy i aplikacje",
        "Domeny i hostingi",
      ],
    },
    {
      title: "Reklamy",
      data: [
        "Reklama zewnętrzna",
        "Oznakowanie budynków",
        "Reklama na pojazdach",
        "Tablice do wynajęcia",
      ],
    },
    {
      title: "Identyfikacja wizualna",
      data: [
        "Projektowanie graficzne",
        "Drukarnia",
        "Gadżety reklamowe",
        "Systemy wystawiennicze",
        "Fotografia reklamowa",
      ],
    },
  ];
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-content__container container">
          <div className="footer-content__box-wrap">
            {data.map((item) => {
              const { title, data } = item;
              return (
                <div key={title} className="footer-content__box">
                  <div className="footer-content__box-title">{title}</div>
                  <ul className="footer-content__box-list">
                    {data.map((value) => (
                      <li key={value} className="footer-content__box-item">
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            <div className="footer-content__box footer-content__info">
              <div className="footer-content__info-phone">tel. 795 633 929</div>
              <div className="footer-content__info-address">
                <div className="footer-content__info-address--bold">
                YStudio
                </div>
                <div>ul. Przemysłowa 24</div>
                <div>39-300 Mielec</div>
              </div>
              <div className="footer-content__info-mail"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bar">
        <p>Wszelkie Prawa Zastrzeżone. Intro Rafter &copy; 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
