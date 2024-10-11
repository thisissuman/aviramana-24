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
      <section id="aboutus">
        <Hero />
      </section>
      <section id="programme">
        <Services />
      </section>
      <section id="inmedia">
        <InMediaSection />
      </section>
      <section id="testimonial">
        <TestimonialSection />
      </section>
      <section id="feescharges">
        <FeesAndCharges />
      </section>
      <Footer />
    </>
  );
}
