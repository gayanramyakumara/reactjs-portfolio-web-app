import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { HeroImg2 } from "../components/heroImages/HeroImg2";
 import { ContactForm } from "../components/contact/ContactForm";


export const Contact = () => {
  
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="You can contact me via email." />
      <ContactForm />
      <Footer />
    </div>
  );
};

