import React from "react";
import Hero from "./components/Hero";        // <-- import Hero
import AboutUs from "./components/AboutUs";
import AboutTeam from "./components/AboutTeam";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutUs />

      {/* About Team Section */}
      <AboutTeam />

      {/* Services Section */}
      <Services />

      {/* Portfolio / Videos Section */}
      <Portfolio />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default App;
