import { useState } from "react";
import Home from "./Pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="">
      <Routes>
        {" "}
        <Route path="/Nika" element={<Home />} />
        <Route path="/Nika/Project" element={<Project />} />
        <Route path="/Nika/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
