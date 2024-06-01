import React from "react";
import { Reveal } from "./utils/Reveal";

const ExperinceCard = ({ exp }) => {
  return (
    <div className=" sm:max-w-[1000px] mx-auto mb-8">
      <div className="flex justify-between mb-4">
        <Reveal>
          <span className="text-text text-xl font-bold">{exp.employer}</span>
        </Reveal>
        <Reveal>
          <span className="text-text  text-lg font-mediums ">
            {exp.duration}
          </span>
        </Reveal>
      </div>
      <div className="flex justify-between mb-4">
        <Reveal>
          <span className="text-brand text-xl font-bold">{exp.jobRole}</span>
        </Reveal>
        <Reveal>
          <span className="text-text  text-lg font-mediums ">{exp.place}</span>
        </Reveal>
      </div>
      <Reveal>
        <p className="text-xl font-light text-text mb-4 ">{exp.jobDesc}</p>
      </Reveal>
      <Reveal>
        <div
          className="flex gap-2      
          sm:ml-0  flex-wrap  mb-4"
        >
          {exp.skills.map((skill) => {
            return (
              <div className="bg-background-light  text-xl leading-4  rounded-full px-4 text-text py-1 flex items-center gap-2">
                {skill}
              </div>
            );
          })}
        </div>
      </Reveal>
      <div className="flex-grow h-[1px] bg-opacity-30 bg-text"></div>
    </div>
  );
};

export default ExperinceCard;
