import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../app/GlobalContext";
import { Reveal } from "./utils/Reveal";
import Card from "./Card";
import projects from "../data/projects";

const Projects = () => {
  const ref = useRef();
  const isInview = useInView(ref);
  const { projectsIsInViewSetter } = useGlobalContext();
  useEffect(() => {
    if (isInview) {
      projectsIsInViewSetter(isInview);
    } else {
      projectsIsInViewSetter(isInview);
    }
  }, [isInview]);
  return (
    <div ref={ref} id="project" className="  w-full bg-background">
      <div className="m-auto p-7 sm:p-14 md:relative  z-10 sm:max-w-[1150px] h-full w-full bg-background ">
        <div className="flex gap-5 items-center mb-8">
          <div className="flex-grow h-[1px] bg-opacity-30 bg-text "></div>
          <Reveal>
            <h1 className=" sm:text-[4rem]   sm:ml-0 text-[2rem] pr-2 font-poppins font-black   tracking-tighter text-text">
              Projects <span className="text-brand">.</span>
            </h1>
          </Reveal>
        </div>
        <div className="sm:px-5 grid sm:gap-8 grid-cols-1 md:grid-cols-2 ">
          {projects.map((project, index) => {
            return <Card project={project} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
