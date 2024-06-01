import React, { useContext, useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../app/GlobalContext";
import { useInView } from "framer-motion";
import { Reveal } from "./utils/Reveal";
import { FaArrowRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { IoIosCodeWorking } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoJquery } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiMicrosoftsharepoint } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";

const About = () => {
  const ref = useRef();
  const { aboutRefSetter } = useGlobalContext();

  const isInView = useInView(ref);
  useEffect(() => {
    console.log(isInView);

    if (isInView) {
      aboutRefSetter(isInView);
    } else {
      aboutRefSetter(isInView);
    }
  }, [isInView]);
  return (
    <div ref={ref} id="about" className="  w-full bg-background">
      <div className="m-auto p-14 md:relative  z-10 sm:max-w-[1150px] h-full w-full bg-background ">
        <div className="flex gap-5 items-center mb-8">
          <Reveal>
            <h1 className=" sm:text-[4rem]   sm:ml-0 text-[2rem] pr-2 font-poppins font-black leading-none tracking-tighter text-text">
              About <span className="text-brand">.</span>
            </h1>
          </Reveal>
          <div className="flex-grow h-[1px] bg-opacity-30 bg-text"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="sm:w-[70%]">
            <Reveal>
              <p className="   sm:ml-0 font-poppins text-text font-extralight text-xl mb-5">
                Hey! I'm Kundan, and if you haven't guessed already, I'm a
                frontend web developer with a knack for creating visually
                stunning and highly functional web applications. I hail from
                Pune, where my journey in web development began two years ago.
              </p>
            </Reveal>
            <Reveal>
              <p className="   sm:ml-0 font-poppins text-text font-extralight text-xl mb-5">
                I specialize in HTML, CSS, and JavaScript, and I've built
                numerous projects using React. My toolbelt also includes CSS
                frameworks like SASS, Tailwind, Bootstrap, and Material UI,
                which help me craft beautiful, responsive designs. I'm
                well-versed in state management with Context API and Redux,
                ensuring smooth and efficient application performance.
              </p>
            </Reveal>
            <Reveal>
              <p className="   sm:ml-0 font-poppins text-text font-extralight text-xl mb-5">
                Currently, I work at New Era Tech, where I not only develop
                cutting-edge web applications but also engage with clients to
                understand their needs and deliver solutions that exceed their
                expectations. My role often involves collaborating with design
                teams to create seamless and visually appealing user
                experiences.
              </p>
            </Reveal>
            <Reveal>
              <p className="    sm:ml-0 font-poppins text-text font-extralight text-xl mb-5">
                When I'm not coding, you can find me exploring the latest design
                trends, playing chess. I'm always on the lookout for
                opportunities to merge my technical skills with my creative
                interests. If you have an exciting project or a position that
                could use my expertise, let's connect!
              </p>
            </Reveal>
            <Reveal>
              <div className="    sm:ml-0 w-full flex  gap-3 ">
                <p className="text-brand  font-poppins  font-extralight text-xl mb-5 flex items-center  gap-2">
                  My Links <FaArrowRight />
                </p>

                <a
                  href="https://www.linkedin.com/in/kundan-suthar-91a8717a/"
                  target="_blank"
                >
                  <FaLinkedin
                    size={22}
                    className="text-text opacity-50 font-medium hover:text-brand"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/kundan-suthar-91a8717a/"
                  target="_blank"
                >
                  <FaGithub
                    size={22}
                    className="text-text opacity-50 font-medium hover:text-brand"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/kundan-suthar-91a8717a/"
                  target="_blank"
                >
                  <AiFillTwitterCircle
                    size={25}
                    className="text-text opacity-50 font-medium hover:text-brand"
                  />
                </a>
              </div>
            </Reveal>
          </div>
          <div className="sm:w-[30%] flex flex-col ">
            <Reveal>
              <div className="mb-10">
                <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-text   flex items-center sm:ml-0 mb-6">
                  <IoIosCodeWorking size={35} className="mr-2 text-brand" />
                  Use at Work
                </h2>
                <div className="flex gap-2   flex-wrap  ">
                  <div className="bg-background-light text-sm sm:text-xl leading-4  rounded-full px-4 text-text py-1 flex items-center gap-2">
                    <FaReact /> React
                  </div>
                  <div className="bg-background-light text-sm sm:text-xl rounded-full px-4 text-text py-1 flex items-center content-center gap-2 ">
                    <TbBrandJavascript />
                    Javascript
                  </div>
                  <div className="bg-background-light  text-sm sm:text-xl rounded-full px-4 text-text py-1 flex items-center content-center gap-2 ">
                    <BiLogoJquery />
                    JQUERY
                  </div>
                  <div className="bg-background-light text-sm sm:text-xl rounded-full px-4 text-text py-1 flex items-center content-center gap-2 ">
                    <FaHtml5 />
                    HTML
                  </div>
                  <div className="bg-background-light  text-sm sm:text-xl rounded-full px-4 text-text py-1 flex items-center content-center gap-2 ">
                    <IoLogoCss3 />
                    CSS
                  </div>
                  <div className="bg-background-light  text-sm sm:text-xl rounded-full px-4 text-text py-1 flex items-center content-center gap-2 ">
                    <FaBootstrap />
                    Bootstrap
                  </div>
                  <div className="bg-background-light  text-sm sm:text-xl rounded-full px-4 text-text py-1 flex items-center content-center gap-2 ">
                    <SiMicrosoftsharepoint />
                    SharePoint
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-text    flex items-center   mb-6">
                  <IoIosCodeWorking size={35} className="mr-2 text-brand" />
                  Use for fun
                </h2>
                <div className="flex gap-2   flex-wrap  ">
                  <div className="bg-background-light   text-sm sm:text-xl leading-4  rounded-full px-4 text-text py-1 flex items-center gap-2">
                    <SiTypescript />
                    TypeScript
                  </div>
                  <div className="bg-background-light  text-sm sm:text-xl rounded-full px-4 text-text py-1 flex items-center content-center gap-2 ">
                    <SiRedux /> Redux
                  </div>
                  <div className="bg-background-light  text-sm sm:text-xl rounded-full px-4 text-text py-1 flex items-center content-center gap-2 ">
                    <SiFramer /> Framer-motion
                  </div>
                  <div className="bg-background-light  text-sm sm:text-xl rounded-full px-4 text-text py-1 flex items-center content-center gap-2 ">
                    <RiTailwindCssFill /> Tailwind CSS
                  </div>
                  <div className="bg-background-light  text-sm sm:text-xl rounded-full px-4 text-text py-1 flex items-center content-center gap-2 ">
                    <SiMui /> MUI
                  </div>
                  <div className="bg-background-light  text-sm sm:text-xl rounded-full px-4 text-text py-1 flex items-center content-center gap-2 ">
                    <BsFiletypeScss /> SCSS
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
