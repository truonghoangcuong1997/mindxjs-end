import React from "react";
import About from "./component/Home/abouts";
import Categori from "./component/Home/categori";
import Discount from "./component/Home/discount";
import Brand from "./component/Home/brand";
import Contact from "./component/Home/contact";
import Client from "./component/Home/clien";
import InfotSection from "./component/Home/infoSection";
import { Element } from "react-scroll";
import ScrollToTop from "react-scroll-to-top";

const index = () => {
  return (
    <>
      <div className="App">
        <ScrollToTop smooth color="#6f00ff" />
      </div>

      <Element name="abouts" className="element">
        <About name={"abouts"} className={"abouts"}></About>
      </Element>

      <Categori></Categori>

      <Discount></Discount>

      <Element name="brand" className="element">
        <Brand></Brand>
      </Element>

      <Element name="contact" className="element">
        <Contact></Contact>
      </Element>

      <Client></Client>
    </>
  );
};

export default index;
