import React from "react";
let skills = [
  "Figma",
  "UI Design",
  "Auto-Layout",
  "UX Design",
  "Wireframing",
  "Prototyping",
  "Design Thinking",
  "UX Resarch",
  "Problem Solving",
];
function About() {
  return (
    <div className="flex bg-n_black justify-center pb-10">
      <div className="flex justify-between  items-center w-[1060px]">
        <span className="text-n_grey w-[530px] text-lg">
          Hello! I'm Nika Pataridze, a passionate UI/UX Designer with a focus on
          creating engaging and user-friendly digital experiences. I recently
          completed a UI/UX design course at COLAB Academy and also earned a
          certificate from IBM in Enterprise Design Thinking Practitioner. My
          journey in design has been driven by a love for solving problems and
          crafting intuitive, aesthetically pleasing interfaces.
        </span>
        <div className="text-n_green flex flex-wrap w-[400px] ">
          {skills.map((skill) => {
            return (
              <span className="border rounded-lg py-1 px-2 m-1 mb-3 border-n_dark_grey">
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
