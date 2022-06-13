import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { HeroImg2 } from "../components/heroImages/HeroImg2";
import { PriceCardList } from "../components/priceCards/PriceCardList";
import { Work } from "../components/work/Work";

export const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Some Of My Recent Works." />
      <PriceCardList />
      <Work />
      <Footer />
    </div>
  );
};

