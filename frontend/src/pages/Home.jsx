import React from "react";
import Hero from "../components/home/Hero";
import PromoBanner from "../components/home/PromoBanner";
import Services from "../components/home/Services";
import CalculatorSection from "../components/home/CalculatorSection";
import Process from "../components/home/Process";
import InvestmentOptions from "../components/home/InvestmentOptions";
import Goals from "../components/home/Goals";
import Insights from "../components/home/Insights";
import CtaSection from "../components/CtaSection";

const Home = () => {
  return (
    <>
      <Hero />
      <PromoBanner />
      <Services />
      <CalculatorSection />
      <Process />
      <InvestmentOptions />
      <Goals />
      <Insights />
      <CtaSection />
    </>
  );
};

export default Home;
