import React, { useState, useRef, useEffect } from "react";
import styles from "./CursorEffect.module.scss";
import { motion } from "framer-motion";

interface MousePosition {
  x: number;
  y: number;
}

interface CursorEffectProps {
  targetDivRef: React.RefObject<HTMLDivElement>;
}

const CursorEffect = ({ targetDivRef }: CursorEffectProps) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  console.log(mousePosition.y);

  const [cursorVariant, setCursorVariant] = useState("default");

  const handleMouseMove = (event: MouseEvent) => {
    if (
      targetDivRef.current &&
      targetDivRef.current.contains(event.target as Node)
    ) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
    console.log("moving");
  };

  useEffect(() => {
    if (targetDivRef.current) {
      targetDivRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (targetDivRef.current) {
        targetDivRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [targetDivRef]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "smooth",
        duration: 0,
      },
    },
  };

  return (
    <>
      <motion.div
        className={styles.cursor}
        variants={variants}
        animate="default"
        style={{
          mixBlendMode: "difference",
        }}
      ></motion.div>
    </>
  );
};

export default CursorEffect;
