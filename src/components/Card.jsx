import React from "react";
import Project1 from "../assets/movix.png";
import { motion } from "framer-motion";
import { Reveal } from "./utils/Reveal";

import { FaGithub } from "react-icons/fa6";
import { RiExternalLinkFill } from "react-icons/ri";

const Card = ({ project }) => {
  // const projectTechs = ["React", "Redux", "SCSS"];
  return (
    <div className="max-w-[500px] relative mb-12">
      <div className="relative bg-background-light cursor-pointer  mb-4 rounded-[0.8rem]   h-64 overflow-hidden">
        <motion.img
          src={project.imageUrl}
          alt=""
          className="w-full rounded-lg  absolute -bottom-10 mx-auto aspect-square sm:aspect-video    "
          initial={{ scale: 0.85 }}
          whileHover={{ scale: 0.95, rotate: "1.5deg" }}
        ></motion.img>
      </div>

      <div className="flex gap-5 items-center mb-4">
        <Reveal>
          <p className=" sm:text-[2rem]   sm:ml-0 text-[1rem] pr-2 font-poppins font-semibold   tracking-tighter text-text">
            {project.title}
          </p>
        </Reveal>

        <div className="flex-grow h-[1px] bg-opacity-30 bg-text"></div>

        <a href={project.gitUrl} target="_blank">
          <FaGithub size={30} className="text-text opacity-60" />
        </a>
        <a href={project.liveUrl} target="_blank">
          <RiExternalLinkFill size={30} className="text-text opacity-60" />
        </a>
      </div>
      <Reveal>
        <div className="mb-4">
          {project.projectTechs.map((tech, i) => (
            <span key={i} className="text-brand text-xl mr-2">
              {tech}
            </span>
          ))}
        </div>
      </Reveal>
      <Reveal>
        <div className="text-text text-lg">{project.description}</div>
      </Reveal>
    </div>
  );
};
export default Card;
