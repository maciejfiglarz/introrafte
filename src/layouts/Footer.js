import React from "react";


const Footer = () => {
  const data = [
    {
      title: "SPECJALISTYCZNE NA WYMIAR",
      data: [
        "Tabliczki BHP",
        "Wdrażanie HSP",
        "Ciągi komunikacyjne w firmach",
        "Oznakowanie wysokościowe",
        "Oznakowanie magazynów",
        "Innowacyjne pomysły",
        "Tablice magnetyczne - suchościeralne na wymiar",
        "Kieszenie PCV",
      ],
    },
    {
      title: "OUTDOR",
      data: [
        "Kampannie Reklamowe obsługi kompleksowe",
        "Reklama mobilna",
        "Witryny",
        "Oklejanie aut",
        "Kasetony",
        "Litery 3D",
        "Banery reklamowe",
        "Szyldy",
        "Tabliczki",
        "Zdobienie okien,szyb i balkonów",
      ],
    },
    {
      title: "INDOR",
      data: [
        "roll-up",
        "Drukarnia",
        "Systemy wystawiennicze",
        "Wyroby z plexi PCV i PCW",
        "Ramki OWZ",
        "Phototapety",
      ],
    },
    {
      title: "USŁUGI REKLAMOWE",
      data: [
        "Kompleksowa obsługa kampanni rekamowych",
        "Kampannie na otwarcia",
        "Kolportaż ulotek",
        "DRUK Wielkoformatowy",
        "Poligrafia",
        "Montaże reklam",
        "Wyklejanie billboardów",
      ],
    },
    {
      title: "PROJEKTOWANIE GRAFICZNE",
      data: [
        "Identyfikacja wizualna firmy",
        "loga",
        "poligrafia",
        "banery",
        "plakaty",
      ],
    },
  ];
  return (
    <>
      <section className="footer" id="offer">
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
            </div>
          </div>
        </div>

        {/* <div className="footer__bar">
        <p>Wszelkie Prawa Zastrzeżone. Intro Rafter &copy; 2020</p>
      </div> */}
      </section>
    </>
  );
};

export default Footer;
