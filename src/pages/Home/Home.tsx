import styles from "./Home.module.scss";
import { AboutMe } from "../../features";
import deskImg from "../../assets/landing-desk.jpeg";
import { Projects } from "../Projects";

import { Link } from "react-scroll";

function Home() {
  return (
    <main className={styles.homeContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.sectionTitle}>
          Hello, I'm Emily Scott a front-end engineer and design enthusiast.
        </h2>
      </div>

      <div className={styles.introSectionContainer}>
        <div className={styles.introContent}>
          <p className={styles.introText}>
            I'm passionate about creating exceptional web experiences that are
            not only visually appealing but also intuitive and well-engineered.
            I'm an experienced engineer excited for the next adventure. Explore{" "}
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
              className={styles.link}
            >
              my work
            </Link>
            , learn more{" "}
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className={styles.link}
            >
              about me
            </Link>
            , and{" "}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className={styles.link}
            >
              reach out
            </Link>{" "}
            if you're interested in working together!
          </p>
          <img src={deskImg} className={styles.desk} alt="macbook on desk" />
        </div>
      </div>

      <Projects />
      <AboutMe />
      <section id="contact" className={styles.contactSection}>
        <h2>Contact</h2>
      </section>
    </main>
  );
}

export default Home;
