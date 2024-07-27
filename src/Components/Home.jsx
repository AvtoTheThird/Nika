import React from "react";

function Home() {
  return (
    <div className="flex bg-n_black justify-center py-10">
      <div className=" flex justify-between gap-10 items-center w-[1060px] bg-n_black">
        <img src="public\Logos\tvitnika.png" alt="" />
        <div className="text-n_white w-[531px]">
          <span className="font-bold text-2xl">
            Hi, I'm Nika Pataridze, a UI/UX Designer.
          </span>
          <br />
          <span className="text-n_grey text-lg ">
            I'm currently building my portfolio and honing my skills in creating
            user-friendly digital experiences. I focus on crafting intuitive and
            visually appealing designs that prioritize user needs.{" "}
          </span>
          <br />
          <span className="flex gap-1 text-n_grey text-lg py-2">
            <img
              className="w-[24px] h-[24px]"
              src="public\Logos\distance.png"
              alt=""
            />
            Based in Tbilisi, Georgia
          </span>
          <div className="flex gap-5 py-5 justify-between">
            <div>
              <span className="text-n_white text-lg font-bold">
                reach me at
              </span>
              <br />
              <u>nikapataridze15@gmail.com</u>
            </div>
            <button className="flex text-n_black justify-center items-center w-[183px] bg-n_green rounded-md">
              View my resume <img src="public\Logos\arrow_outward.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
