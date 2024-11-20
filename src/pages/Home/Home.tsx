import { useState } from "react";
import styles from "./Home.module.scss";
import {
  AboutMe,
  WeatherWidget,
  SunWidget,
  ClockWidget,
  ChatWidget,
} from "../../features";
import WelcomeWidget from "../../features/WelcomeWidget/WelcomeWidget";
import { WidgetsForm } from "../../features/WidgetsForm";
import { PomodoroWidget } from "../../features/PomodoroWidget";
import { motion } from "framer-motion";
import { IconButton } from "../../components/ui/Button";
import deskImg from "../../assets/landing-desk.jpeg";

function Home() {
  const [name, setName] = useState("");

  const saveUsername = (name: string) => {
    setName(name);
  };

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
            <a>my work</a>, learn more <a>about me</a>, and <a>reach out</a> if
            you're interested in working together!
          </p>
          <img src={deskImg} className={styles.desk} alt="macbook on desk" />
        </div>
      </div>

      <section
        className={`${styles.widgetsContainer} ${styles.sectionContainer}`}
      >
        <h2 className={styles.sectionTitle}>Projects</h2>

        <h3 className={styles.widgetsTitle}>Widgets</h3>

        <div className={styles.widgetsGrid}>
          <WidgetsForm />
          <WelcomeWidget name={name} />
          <SunWidget />
          <ClockWidget />
          <ChatWidget saveUsername={saveUsername} />
          <WeatherWidget />
          <PomodoroWidget />
        </div>
      </section>
      <AboutMe />
      <h2>Contact</h2>
    </main>
  );
}

export default Home;
