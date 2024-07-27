import { useState } from "react";
import Home from "./Pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Project from "./Pages/Project";

function App() {
  return (
    <div className="">
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
