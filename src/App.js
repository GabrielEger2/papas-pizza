import React from "react";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Carousel />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
