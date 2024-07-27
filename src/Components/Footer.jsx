import React from "react";

function Footer() {
  return (
    <div className="flex  bg-n_black justify-center py-10 border-t-2 border-n_hr">
      <div className=" flex  justify-between gap-10 items-start w-full bg-n_black px-28">
        <div className="flex gap-4">
          <img src="\Logos\LI-Default.png" alt="" />
          <img src="\Logos\LI-Default.png" alt="" />
          <img src="\Logos\LI-Default.png" alt="" />
        </div>
        <span className="text-lg text-n_white">
          created by nikanor pataridze
        </span>
      </div>
    </div>
  );
}

export default Footer;
