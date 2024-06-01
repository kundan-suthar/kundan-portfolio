import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

const Header = () => {
  // Define animation variants for the container and list items
  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2, // Stagger the animation of child elements
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0  flex h-20 justify-between px-9  w-[calc(100%-60px)] left-[60px] items-center  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-20"
    >
      <motion.ul className="flex gap-6 left-14 items-center">
        <motion.li variants={itemVariants}>
          <a
            href="https://www.linkedin.com/in/kundan-suthar-91a8717a/"
            target="_blank"
          >
            <FaLinkedin
              size={22}
              className="text-text opacity-50 font-medium hover:text-brand"
            />
          </a>
        </motion.li>
        <motion.li variants={itemVariants}>
          <a href="https://github.com/kk240" target="_blank">
            <FaGithub
              size={22}
              className="text-text opacity-50 font-medium hover:text-brand"
            />
          </a>
        </motion.li>
        <motion.li variants={itemVariants}>
          <a href="https://x.com/kundanss22" target="_blank">
            <AiFillTwitterCircle
              size={25}
              className="text-text opacity-50 font-medium hover:text-brand"
            />
          </a>
        </motion.li>
      </motion.ul>
      <motion.button
        className="h-11 px-4 cursor-pointer  border border-solid border-brand text-brand text-[18px] rounded-md"
        whileHover={{
          backgroundColor: "#0aff9d",
          color: "#080808",
          transition: { duration: 0.5 },
        }}
      >
        My resume
      </motion.button>
    </motion.div>
  );
};

export default Header;
