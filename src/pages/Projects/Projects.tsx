import { useState } from "react";
import {
  WeatherWidget,
  SunWidget,
  ClockWidget,
  ChatWidget,
} from "../../features";
import WelcomeWidget from "../../features/WelcomeWidget/WelcomeWidget";
import { WidgetsForm } from "../../features/WidgetsForm";
import { PomodoroWidget } from "../../features/PomodoroWidget";
import styles from "./Projects.module.scss";

function Projects() {
  const [name, setName] = useState("");

  const saveUsername = (name: string) => {
    setName(name);
  };

  return (
    <section
      className={`${styles.widgetsContainer} ${styles.sectionContainer}`}
      id="projects"
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
  );
}

export default Projects;
