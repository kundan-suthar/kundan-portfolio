import React from "react";
import ListItem from "./ListItem";
import { useGlobalContext } from "../app/GlobalContext";
import { motion } from "framer-motion";

const Leftnav = () => {
  const { aboutRef, contactIsInView, projectsIsInView, expIsInView } =
    useGlobalContext();
  // Define animation variants for the container and list items
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2, // Stagger the animation of child elements
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      className="top-0 left-0 gap-2 fixed bg-background-dark w-[60px] h-screen  flex flex-col items-center px-5 "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-center h-2"></div>{" "}
      {/* Top Spacer */}
      <span className="relative text-text font-poppins font-black bg-background w-11 h-11 flex items-center justify-center text-md leading-none rounded-sm mb-5">
        K<span className="text-brand">.</span>
      </span>
      <motion.ul className="flex flex-col z-20 ">
        <motion.div variants={itemVariants}>
          <ListItem
            itemName={"About"}
            currenIsInView={aboutRef}
            targetId="about"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ListItem
            itemName={"Projects"}
            currenIsInView={projectsIsInView}
            targetId="project"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ListItem
            itemName={"Exp."}
            currenIsInView={expIsInView}
            targetId="Exp"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ListItem
            itemName={"Contact"}
            currenIsInView={contactIsInView}
            targetId="contact"
          />
        </motion.div>
      </motion.ul>
    </motion.div>
  );
};

export default Leftnav;
