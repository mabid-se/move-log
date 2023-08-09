import React from "react";
import MainNavbar from "../components/navbar/MainNavbar";
import MainFooter from "../components/footer/MainFooter";
import HeroSection from "../components/herosection/HeroSection";
import heroBg from "../assets/images/logistic-services.png";

const Services = () => {
  return (
    <>
      <MainNavbar />
      <HeroSection
        contHeight="65vh"
        bgImg={heroBg}
        bgOverlay="linear-gradient(90deg, #032D5F 0%, rgba(9, 18, 66, 0.20) 100%)"
        highlightedText="services"
        headingText="our logictics services"
      />
      <h1>our logictics services</h1>
      <h1>our logictics services</h1>
      <h1>our logictics services</h1>
      <h1>our logictics services</h1>
      <h1>our logictics services</h1>

      <MainFooter />
    </>
  );
};

export default Services;
