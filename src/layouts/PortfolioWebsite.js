// eslint-disable-next-line

import React from "react";

import PortfolioChild from "../components/PortfolioChild";

import edugrupa from "../img/mocup/edugrupa.jpg";
import prius from "../img/mocup/prius.jpg";
import biota from "../img/mocup/biota.jpg";
import riss from "../img/mocup/riss.jpg";
import social from "../img/mocup/social.jpg";
import portfolio from "../img/portfolio.svg";
import travel from "../img/mocup/sos.jpg";

import title from "./../img/website.svg";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-website">
          <div className="clients__title">
              <img src={title} />
            </div>
      <div className="portfolio-container">
        <PortfolioChild
          link="http://www.edugrupa.pl"
          text="www.edugrupa.pl"
          img={edugrupa}
        />
        <PortfolioChild
          link="http://www.prius.com.pl"
          text="www.prius.com.pl"
          img={prius}
        />
        <PortfolioChild
          link="http://www.biotapharma.pl"
          text="www.biotapharma.pl"
          img={biota}
        />
        <PortfolioChild
          link="http://www.photoriss.com"
          text="www.photoriss.com"
          img={riss}
        />
        <PortfolioChild
          link="http://www.socialprintbg.com"
          text="www.socialprintbg.com"
          img={social}
        />
        <PortfolioChild
          link="http://www.sostravel.it"
          text="www.sostravel.it"
          img={travel}
        />
      </div>
    </div>
  );
};

export default Portfolio;
