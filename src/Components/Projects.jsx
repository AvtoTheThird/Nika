import React from "react";
import projects from "../Projects.json";
console.log(projects);
function Projects() {
  return (
    <div className="flex  bg-n_black justify-center py-10">
      <div className=" flex flex-col  gap-10 items-start  bg-n_black">
        {projects.map((project, index) => {
          return (
            <div
              className={
                index + 1 === projects.length
                  ? "flex justify-between w-[1060px] "
                  : "flex justify-between w-[1060px] border-b-2 border-n_hr py-8"
              }
            >
              <img
                className="w-[400px] h-[300px]"
                src={`ProjectFotos/${project.img}`}
                alt=""
              />
              <div className=" w-[422px] flex flex-col ">
                <span className="text-n_white text-xl font-bold">
                  {project.name}
                </span>
                <br />
                <span className="text-n_grey text-lg">
                  {project.description}
                </span>
                <br />
                <button className="bg-n_green w-[100%] py-3 text-center rounded-lg flex items-center justify-center  ">
                  See details
                  <img src=" Logos\arrow_forward_ios.png" alt="" />
                </button>
              </div>
            </div>
          );
        })}{" "}
        <hr />
      </div>
    </div>
  );
}

export default Projects;
