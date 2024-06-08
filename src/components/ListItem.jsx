import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useGlobalContext } from "../app/GlobalContext";
import { Link } from "react-scroll";

const ListItem = ({ itemName, currenIsInView, targetId }) => {
  const { aboutRef } = useGlobalContext();
  const mainControls = useAnimation();
  useEffect(() => {
    //console.log(currenIsInView);
    if (currenIsInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("initial");
    }
  }, [currenIsInView]);

  return (
    <Link
      to={targetId}
      spy={true}
      smooth={true}
      duration={500}
      offset={-70} // Adjust offset as needed
      className="text-decoration-none"
    >
      <motion.li
        style={{ writingMode: "vertical-lr" }}
        // className="w-[60px] py-2 font-poppins text-text  h-[100px] flex-shrink-0 font-light flex items-center justify-center opacity-50 border-r border-transparent transition-all duration-100   hover:bg-background hover:border-brand hover:opacity-100 hover:cursor-pointer"
        className="w-[60px] py-2 font-poppins text-text h-[100px] flex-shrink-0 font-light flex items-center justify-center  cursor-pointer opacity-50 "
        variants={{
          initial: {
            backgroundColor: "#080808",
            borderRight: "2px solid transparent",
            opacity: 0.5,
            transition: { duration: 0 },
          },
          visible: {
            backgroundColor: "#111",
            borderRight: "2px solid #0aff9d ",
            opacity: 1,
            transition: { duration: 0 },
          },
        }}
        animate={mainControls}
        whileHover={{
          backgroundColor: "#111",
          borderRight: "2px solid #0aff9d",
          opacity: 1,
          transition: { duration: 0 },
        }}
      >
        {itemName}
      </motion.li>
    </Link>
  );
};

export default ListItem;
