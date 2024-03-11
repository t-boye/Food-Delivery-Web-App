import React from "react";
import Navigation from "../Components/Contact-Components/Navigation";
import Hero from "../Components/Contact-Components/Hero";
import ContactServices from "../Components/Contact-Components/ContactServices";
import ContactForm from "../Components/Contact-Components/ContactForm";

export default function ContactUs() {
  return (
    <div>
      <Navigation />
      <Hero />
      <ContactServices />
      <ContactForm />
    </div>
  );
}
