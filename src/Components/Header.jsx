import React from "react";
import { Link as SLink } from "react-scroll";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header class="flex justify-between items-center px-16 h-[112px] bg-n_black text-n_white  border-b-2 border-n_hr sticky  z-50 top-0">
      <div class="flex-shrink-0">
        <Link to="/Nika/">
          {" "}
          <img className="w-32" src="Logos\NP.png" alt="NP" />{" "}
        </Link>
      </div>
      <nav class="flex-1 flex justify-center space-x-4 gap-5">
        <SLink
          to="home"
          class="text-lg cursor-pointer"
          smooth={true}
          duration={500}
        >
          Home
        </SLink>
        <SLink
          to="About"
          smooth={true}
          duration={500}
          class="text-lg cursor-pointer"
        >
          About
        </SLink>
        <SLink
          to="Projects"
          smooth={true}
          duration={500}
          class="text-lg cursor-pointer"
        >
          Projects
        </SLink>
        <a href="#contact" class="text-lg cursor-pointer">
          Resume
        </a>
      </nav>
      <div class="flex-shrink-0 flex space-x-4">
        <a href="#Linkedin">
          <img src=" Logos\LI-Default.png" alt="" />
        </a>
        <a href="#Dribble" class="text-lg">
          <img src=" Logos\Dr-Default.png" alt="" />{" "}
        </a>
        <Link
          to="/Nika/Contact"
          className="bg-n_green rounded-lg px-4 py-3 text-n_black font-semibold"
        >
          contact me
        </Link>
      </div>
    </header>
  );
}

export default Header;
