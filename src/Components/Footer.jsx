import React from "react";

function Footer() {
  return (
    <div className="flex  bg-n_black justify-center py-10 border-t-2 border-n_hr">
      <div className=" lg:flex justify-between gap-10 items-start w-full bg-n_black px-28">
        <div className="flex justify-center gap-4">
          <a
            href="https://dribbble.com/BaLErion21"
            class="text-lg"
            target="_blank"
          >
            <img
              className="hover:opacity-75"
              src=" Logos\Dr-Default.png"
              alt=""
            />{" "}
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/nikoloz-pataridze-043a2a237/"
            target="_blank"
          >
            <img
              src=" Logos\LI-Default.png"
              className="hover:opacity-75"
              alt=""
            />
          </a>{" "}
          <a href="mailto:nikapataridze15@gmail.com" target="_blank">
            <img src=" Logos\M.png" className="hover:opacity-75" alt="" />
          </a>{" "}
        </div>
        <span className="text-lg text-n_white whitespace-nowrap text-center">
          created by nika pataridze
        </span>
      </div>
    </div>
  );
}

export default Footer;
