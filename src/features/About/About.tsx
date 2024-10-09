import { motion } from "framer-motion";
import styles from "./About.module.scss";

function About() {
  return (
    <div>
      <motion.div
        className={styles.testMotionDiv}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "0%"],
        }}
      />
    </div>
  );
}

export default About;
