/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../Componants/Navbar";
import Videodivcomp from "../Componants/Videodivcomp";
import Blackbox from "../Componants/Blackbox";
import Section4 from "../Componants/Section4";
import Section5 from "../Componants/Section5";
import Footer from "../Componants/Footer";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Videodivcomp />
      <Blackbox />
      <Section4 />
      <Section5 />
      <Footer/>
    </div>
  );
}

export default Home;