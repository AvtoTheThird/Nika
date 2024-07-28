import React from "react";
import { Link as SLink } from "react-scroll";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to shrink header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);
  return (
    <header class="flex justify-between items-center px-8 lg:px-16 h-[112px] bg-n_black text-n_white z-50 border-b-2 border-n_hr sticky   top-0 ">
      <div class="flex-shrink-0 ">
        <Link to="/Nika/">
          <img className="w-24 lg:w-32" src="Logos\NP.png" alt="NP" />{" "}
        </Link>
      </div>
      <nav class="flex-1 flex justify-center space-x-4 gap-5">
        <SLink
          to="home"
          class="text-lg cursor-pointer lg:block hidden"
          smooth={true}
          duration={500}
        >
          Home
        </SLink>
        <SLink
          to="About"
          smooth={true}
          duration={500}
          class="text-lg cursor-pointer lg:block hidden"
        >
          About
        </SLink>
        <SLink
          to="Projects"
          smooth={true}
          duration={500}
          class="text-lg cursor-pointer lg:block hidden"
        >
          Projects
        </SLink>
        <a
          href="/Nika/Resume.pdf"
          className="text-lg cursor-pointer lg:block hidden"
          target="_blank"
        >
          Resume
        </a>
      </nav>
      <div class="flex-shrink-0 lg:flex space-x-4  hidden">
        <a
          href="https://www.linkedin.com/in/nikoloz-pataridze-043a2a237/"
          target="_blank"
        >
          <img
            src=" Logos\LI-Default.png"
            className="hover:opacity-75 lg:block hidden"
            alt=""
          />
        </a>
        <a
          href="https://dribbble.com/BaLErion21"
          class="text-lg"
          target="_blank"
        >
          <img
            className="hover:opacity-75 lg:block hidden"
            src=" Logos\Dr-Default.png"
            alt=""
          />{" "}
        </a>
        <Link
          to="/Nika/Contact"
          className="bg-n_green rounded-lg px-4 py-3 text-n_black font-semibold"
        >
          contact me
        </Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <>
          <div className="flex z-20 w-full justify-between fixed inset-0 px-8 pt-6 h-[50px]">
            <Link to="/Nika/">
              <img className="w-24 lg:w-32" src="Logos\NP.png" alt="NP" />{" "}
            </Link>{" "}
            <img
              src="Logos\x.png"
              className="w-[35px] h-[30px] z-20"
              alt=""
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />{" "}
          </div>

          <div className="md:hidden bg-n_black  fixed inset-0  z-10 flex flex-col items-center justify-center">
            <nav className="px-2 pt-2 pb-4 space-y-1 flex flex-col gap-3 items-center justify-center">
              <SLink
                to="home"
                class="block text-lg cursor-pointer "
                smooth={true}
                duration={500}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Home
              </SLink>
              <SLink
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                to="About"
                smooth={true}
                duration={500}
                class="block text-lg cursor-pointer "
              >
                About
              </SLink>
              <SLink
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                to="Projects"
                smooth={true}
                duration={500}
                class="block text-lg cursor-pointer"
              >
                Projects
              </SLink>
              <a
                href="/Nika/Resume.pdf"
                className="block text-lg cursor-pointer"
                target="_blank"
              >
                Resume
              </a>
              <Link
                to="/Nika/Contact"
                className="bg-n_green rounded-lg px-10 py-3 text-n_black font-semibold"
              >
                contact me
              </Link>
              <div class="flex-shrink-0 flex  space-x-4  ">
                <a
                  href="https://www.linkedin.com/in/nikoloz-pataridze-043a2a237/"
                  target="_blank"
                >
                  <img
                    src=" Logos\LI-Default.png"
                    className="hover:opacity-75 lg:block "
                    alt=""
                  />
                </a>
                <a
                  href="https://dribbble.com/BaLErion21"
                  class="text-lg"
                  target="_blank"
                >
                  <img
                    className="hover:opacity-75 lg:block "
                    src=" Logos\Dr-Default.png"
                    alt=""
                  />{" "}
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
