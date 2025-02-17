import React from "react";
import projects from "../Projects.json";
import { Link } from "react-router-dom";

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
                  ? "flex lg:flex-row flex-col justify-between    lg:w-[1060px] "
                  : "flex lg:flex-row flex-col justify-between   lg:w-[1060px] border-b-2 border-n_hr py-8"
              }
            >
              <img
                className="lg:w-[400px] w-[95vw] lg:h-[300px]"
                src={`ProjectThumbnails/${project.img}`}
                alt=""
              />
              <div className=" lg:w-[422px] w-[95vw] flex flex-col ">
                <span className="text-n_white text-xl font-bold">
                  {project.name}
                </span>
                <br />
                <span className="text-n_grey text-lg">
                  {project.description}
                </span>
                <br />
                <button className="bg-n_green w-[100%] py-3 text-center rounded-lg flex items-center justify-center  ">
                  <Link to="/Nika/Project" state={{ project }}>
                    See Details
                  </Link>
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
