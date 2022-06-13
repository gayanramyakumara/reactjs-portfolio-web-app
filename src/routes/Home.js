import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { HeroImg } from "../components/heroImages/HeroImg";
import { Footer } from "../components/footer/Footer";
import { Work } from "../components/work/Work";
export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work/>
      <Footer />
    </div>
  );
};
 
