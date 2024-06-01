import React from "react";
import { Reveal } from "./utils/Reveal";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      id="hero"
      className="m-auto px-14 pt-40 sm:p-14 md:relative  z-10 max-w-[1150px]  sm:h-screen  w-full bg-background grid place-content-center"
    >
      <div>
        <Reveal>
          <h1 className="sm:text-[6rem]    sm:ml-0 text-[3rem] font-poppins font-black leading-none tracking-tighter text-text">
            Hey, I'm Kundan <span className="text-brand">.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h1 className="sm:text-[3rem]   sm:ml-0 text-[2rem] mt-4 font-poppins font-normal   text-text">
            I'm a{" "}
            <span className="text-brand font-semibold">Fronend Developer</span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-text text-lg   sm:ml-0	  font-poppins  my-6">
            I've spent the last 2 years honing my skills as a frontend
            developer, specializing in React, to create sleek and responsive web
            applications. Let's connect and create something amazing together!
          </p>
        </Reveal>
        <Reveal>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70} // Adjust offset as needed
            className="text-decoration-none cursor-pointer"
          >
            <motion.a
              className="flex bg-brand    sm:ml-0 text-xl  px-[1rem]  py-[.5rem]  rounded-sm"
              whileHover={{ backgroundColor: "#07e68c" }}
            >
              Contact me
            </motion.a>
          </Link>
        </Reveal>
      </div>
    </div>
  );
};

export default Hero;
