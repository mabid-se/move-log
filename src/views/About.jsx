import React from "react";
import MainNavbar from "../components/navbar/MainNavbar";
import MainFooter from "../components/footer/MainFooter";
import HeroSection from "../components/herosection/HeroSection";
import heroBg from "../assets/images/about-logistics.png";
import { myTheme } from "../theme";

const About = () => {
  return (
    <>
      <MainNavbar />
      <HeroSection
        contHeight="65vh"
        bgImg={heroBg}
        bgOverlay="linear-gradient(90deg, #032D5F 0%, rgba(9, 18, 66, 0.20) 100%)"
        highlightedText="about us"
        headingText="about our logictics"
      />
      <h1>About Us</h1>
      <h1>About Us</h1>
      <h1>About Us</h1>
      <h1>About Us</h1>
      <MainFooter />
    </>
  );
};

export default About;
