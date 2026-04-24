import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardsSection from "./components/CardsSection";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import About from "./components/About";
import Process from "./components/Process"; 
import Testimonials from "./components/Testimonials";
import  CTA  from "./components/CTA";





export default function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
  <>
    <Navbar
      scrolled={scrolled}
      activeNav={activeNav}
      setActiveNav={setActiveNav}
    />

    <section id="home">
      <Hero />
    </section>

    <section id="about">
      <About />
    </section>

    <section id="services">
      <CardsSection />
    </section>

    <section id="portfolio">
      <Portfolio />
    </section>


    <section id="process">
      <Process />
    </section>

    <section id="testimonials">
      <Testimonials />
    </section>

    <section id="contact">
      <CTA />
    </section>
    <section id="footer">
      <Footer />
    </section>
  </>
);
}
