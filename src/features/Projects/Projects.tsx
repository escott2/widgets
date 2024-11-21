import { useState } from "react";
import { WeatherWidget, SunWidget, ClockWidget, ChatWidget } from "..";
import WelcomeWidget from "../WelcomeWidget/WelcomeWidget";
import { WidgetsForm } from "../WidgetsForm";
import { PomodoroWidget } from "../PomodoroWidget";
import styles from "./Projects.module.scss";
import { Element } from "react-scroll";

function Projects() {
  const [name, setName] = useState("");

  const saveUsername = (name: string) => {
    setName(name);
  };

  return (
    <section className={styles.sectionContainer}>
      <Element name="projects">
        <h2 className={styles.sectionTitle}>Projects</h2>

        <section className={styles.projectSection}>
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
        <section className={styles.projectSection}></section>
      </Element>
    </section>
  );
}

export default Projects;
