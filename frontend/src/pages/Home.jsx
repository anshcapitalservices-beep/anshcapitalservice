import React from "react";
import Hero from "../components/home/Hero";
import PromoBanner from "../components/home/PromoBanner";
import Services from "../components/home/Services";
import Process from "../components/home/Process";
import InvestmentOptions from "../components/home/InvestmentOptions";
import Goals from "../components/home/Goals";
import StatsSection from "../components/home/StatsSection";
import Testimonials from "../components/home/Testimonials";
import Insights from "../components/home/Insights";

const Home = () => {
  return (
    <>
      <Hero />
      <PromoBanner />
      <Services />
      <Process />
      <InvestmentOptions />
      <Goals />
      <StatsSection />
      <Testimonials />
      <Insights />
    </>
  );
};

export default Home;
