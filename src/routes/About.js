import React from "react";
import { Navbar }   from "../components/navbar/Navbar";
import { Footer }   from "../components/footer/Footer";
import { HeroImg2 }   from "../components/heroImages/HeroImg2";
import { AboutContent } from "../components/about/AboutContent";

export const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="I'm a friendly Front End Developer." />
      <AboutContent/>
      <Footer />
    </div>
  );
};
