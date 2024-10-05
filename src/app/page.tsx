import Image from "next/image";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import TestimonialSection from "./sections/TestimonialSection";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services/>
      <TestimonialSection/>
    </>
  );
}
