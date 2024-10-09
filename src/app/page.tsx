import Image from "next/image";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import TestimonialSection from "./sections/TestimonialSection";
import FeesAndCharges from "./sections/FeesAndCharges";
import InMediaSection from "./sections/InMediaSection ";
import Footer from "./sections/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services/>
      <TestimonialSection/>
      <InMediaSection/>
      <FeesAndCharges />
      <Footer/>
    </>
  );
}
