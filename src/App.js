import React from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Carousel />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
