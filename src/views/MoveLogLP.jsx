import React from "react";
import MainNavbar from "../components/navbar/MainNavbar";
import MainFooter from "../components/footer/MainFooter";
import HeroSection from "../components/herosection/HeroSection";
import CargoSolutions from "../components/cargo-solutions/CargoSolutions";
import lpHeroBg from "../assets/images/aerial-view-container-cargo-ship-sea.png";
import WhyUs from "../components/why-us/WhyUs";

const MoveLogLP = () => {
  return (
    <>
      <MainNavbar />
      <HeroSection
        contHeight="100vh"
        bgImg={lpHeroBg}
        highlightedText="logistics & supply chain solutions"
        headingText="Your Gateway to any Destination in the World"
        descriptionText="In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus."
        btnText="explore more"
        btnLink="/about"
      />
      <CargoSolutions />
      <WhyUs />
      <br />
      <br />
      <br />
      <h1>MoveLog - Logistics on the go</h1>
      <h2>your all in one logistic solution</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at nemo
        ea cumque voluptatibus magni rerum. Labore officia fugiat error pariatur
        impedit iure nobis eum sint? Deserunt inventore architecto aperiam.
      </p>
      <br />
      <br />
      <br />
      <MainFooter />
    </>
  );
};

export default MoveLogLP;
