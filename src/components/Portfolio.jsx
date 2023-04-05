// import components
import Hero from "./Hero";
import Navbar from "../Layouts/Navbar";
import Skills from "./Skills";
import Service from "./Services";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Hireme from "./Hireme";
import Contact from "./Contact";
import Backtotopbutton from "./Backtotopbutton";
import DesignerProjects from "./DesignerProjects";

import { useRef } from "react";
import { useEffect, useState } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const topRef = useRef();
  const goToContactButtonRef = useRef();
  const heroRef = useRef(null);
  const navRef = useRef();

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
    const myHero = heroRef.current;
    if (myHero != null) {
      if (myHero.id == "home") navRef.current.style.display = "flex";
    } else {
      navRef.current.style.display = "hidden";
    }
  }, []);

  window.onload = function () {
    goToContactButtonRef.current.addEventListener("click", goToContact);
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topRef.current.style.display = "block";
      topRef.current.addEventListener("click", backToTop);
      navRef.current.style.display = "flex";
    } else {
      topRef.current.style.display = "none";
    }
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function goToContact() {
    window.location = "#contact";
  }

  return (
    <div className="">
      <Navbar navRef={navRef} />
      <Hero heroRef={heroRef} goToContactButtonRef={goToContactButtonRef} />
      <Skills />
      <Service />
      <Projects />
      <DesignerProjects />
      <Testimonials />
      <Hireme />
      <Contact />
      <Backtotopbutton topRef={topRef} />
    </div>
  );
};
export default Portfolio;
