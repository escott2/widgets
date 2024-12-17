import React, { useState, useRef, useEffect } from "react";
import styles from "./CursorEffect.module.scss";
import { motion } from "framer-motion";

interface MousePosition {
  x: number;
  y: number;
}

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });

    console.log("moving");
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "smooth",
        duration: 0,
      },
      // backgroundColor: "#000000",
    },
  };

  return (
    <>
      <motion.div
        className={styles.cursor}
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
    </>
  );
};

// export default CursorEffect;
