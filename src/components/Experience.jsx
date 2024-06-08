import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../app/GlobalContext";
import { Reveal } from "./utils/Reveal";
import experiences from "../data/experiences";
import ExperinceCard from "./ExperinceCard";

const Experience = () => {
  const ref = useRef();
  const isInview = useInView(ref);
  const { expIsInViewSetter } = useGlobalContext();
  useEffect(() => {
    if (isInview) {
      expIsInViewSetter(isInview);
    } else {
      expIsInViewSetter(isInview);
    }
  }, [isInview]);
  return (
    <div ref={ref} id="Exp" className="h-screen w-full bg-background">
      <div className="m-auto p-7 md:relative  z-10 sm:max-w-[1150px] h-full w-full bg-background ">
        <div className="flex gap-5 items-center mb-8">
          <Reveal>
            <h1 className=" sm:text-[4rem] sm:ml-0 text-[2rem] pr-2 font-poppins font-black   tracking-tighter text-text">
              Experience <span className="text-brand">.</span>
            </h1>
          </Reveal>
          <div className="flex-grow h-[1px] bg-opacity-30 bg-text"></div>
        </div>
        {/* <div className="px-5 grid gap-8 grid-cols-1 md:grid-cols-2 ">
          {projects.map((project) => {
            return <Card project={project} />;
          })}
        </div> */}
        {experiences.map((exp, i) => {
          return <ExperinceCard key={i} exp={exp} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
