import React from "react";

function Header() {
  return (
    <header class="flex justify-between items-center px-16 h-[112px] bg-n_black text-n_white border-b border-n_grey">
      <div class="flex-shrink-0">
        <img className="w-32" src="public\Logos\NP.png" alt="" />{" "}
      </div>
      <nav class="flex-1 flex justify-center space-x-4 gap-5">
        <a href="#home" class="text-lg">
          Home
        </a>
        <a href="#about" class="text-lg">
          About
        </a>
        <a href="#services" class="text-lg">
          Services
        </a>
        <a href="#contact" class="text-lg">
          Contact
        </a>
      </nav>
      <div class="flex-shrink-0 flex space-x-4">
        <a href="#Linkedin">
          <img src="public\Logos\LI-Default.png" alt="" />
        </a>
        <a href="#Dribble" class="text-lg">
          <img src="public\Logos\Dr-Default.png" alt="" />{" "}
        </a>
        <button className="bg-n_green rounded-lg px-4 py-3 text-n_black font-semibold">
          contact me
        </button>
      </div>
    </header>
  );
}

export default Header;
