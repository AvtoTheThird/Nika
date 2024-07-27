import React from "react";
import Header from "../Components/Header";
import { Link, useLocation } from "react-router-dom";

function Project() {
  const location = useLocation();
  // const id = location.state.id;
  const project = location.state.project;
  console.log(project);
  return (
    <>
      <Header />
      <div className="flex  bg-n_black justify-center py-10">
        <div className=" flex   gap-10 items-start  bg-n_black w-[1060px]">
          <div className="flex flex-col">
            <span className="text-2xl text-n_white font-bold pb-5">
              {project.name}
            </span>
            {project.imgs?.map((img) => {
              return <img src={`ProjectFotos/${img}`} alt="" srcset="" />;
            })}
          </div>

          <div className="flex flex-col gap-5 w-[500px]">
            <span className="pt-10 text-xl text-n_white">
              Project Overview:
            </span>
            {project.bulletpoints?.map((b) => {
              let string = b.split(":");
              return (
                <span>
                  <span className="text-n_grey font-bold">{string[0]}:</span>
                  <span className="text-n_grey ">{string[1]}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
