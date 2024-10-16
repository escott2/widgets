import { motion } from "framer-motion";
import styles from "./AboutMe.module.scss";

function AboutMe() {
  return (
    <section className={styles.aboutMeContainer}>
      <h2>About Me</h2>
      {/* <motion.div
        className={styles.testMotionDiv}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "0%"],
        }}
      /> */}
    </section>
  );
}

export default AboutMe;
