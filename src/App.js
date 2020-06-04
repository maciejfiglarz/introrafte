import React from "react";
import Header from "./layouts/Header";

import Portfolio from "./layouts/Portfolio";
import SliderMain from "./layouts/SliderMain";
import Slider from "./layouts/Slider";
import Footer from "./layouts/Footer";
import FooterBar from "./layouts/FooterBar";
import Contact from "./layouts/Contact";
import Ads from "./layouts/Ads";
import Clients from "./layouts/Clients";
import About from "./layouts/About";

import "./styles/App.scss";
import "./styles/abstracts/_variables.scss";
import "./styles/abstracts/_mixins.scss";

function App() {
  return (
    <>
      <Header />
      {/* <SliderMain /> */}
      <Slider />
      <About />
      <Ads />
      <Portfolio />
      <Clients />
      <Footer />
      <Contact />
      <FooterBar />
    </>
  );
}

export default App;
