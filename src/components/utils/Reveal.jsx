import { easeIn, motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const slideControl = useAnimation();
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    // console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
      slideControl.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.9, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: {
            left: 0,
          },
          visible: {
            left: "100%",
          },
        }}
        initial="hidden"
        animate={slideControl}
        transition={{ duration: 0.9, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#0aff9d",
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
};
