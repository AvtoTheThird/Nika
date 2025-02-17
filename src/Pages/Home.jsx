import { useState } from "react";
import Header from "../Components/Header";
import Home from "../Components/Home";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="" id="home">
      <Header />
      <div>
        <Home />
      </div>
      <div className="flex bg-n_black justify-center  pb-5 lg:scale-100 scale-y-105">
        <div className="flex justify-between  items-center w-[90vw] lg:w-[1060px]">
          <span className="text-n_white text-3xl font-bold">About me</span>
        </div>
      </div>

      <About />
      <div
        id="Projects"
        className="flex bg-n_black justify-center lg:scale-100 scale-y-105 z-0 pb-5"
      >
        <div className="flex justify-between  items-center w-[90vw] lg:w-[1060px]">
          <span className="text-n_white text-3xl font-bold">My Projects</span>
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
