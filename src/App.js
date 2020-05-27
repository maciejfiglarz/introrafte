import React from "react";
import Header from "./layouts/Header";

import Portfolio from "./layouts/Portfolio";
import SliderMain from "./layouts/SliderMain";
import Footer from "./layouts/Footer";
import Contact from "./layouts/Contact";
import Ads from "./layouts/Ads";
import Clients from "./layouts/Clients";

import "./styles/App.scss";
import "./styles/abstracts/_variables.scss";
import "./styles/abstracts/_mixins.scss";

function App() {
  return (
    <>
      <Header />
      <SliderMain />
      <Ads/>
      <Portfolio />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
