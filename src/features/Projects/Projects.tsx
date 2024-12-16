import { useState } from "react";
import { WeatherWidget, SunWidget, ClockWidget, ChatWidget } from "..";
import WelcomeWidget from "../WelcomeWidget/WelcomeWidget";
import { WidgetsForm } from "../WidgetsForm";
import { PomodoroWidget } from "../PomodoroWidget";
import styles from "./Projects.module.scss";
import { MainSectionContainer, MainSectionHeading } from "../../components";

function Projects() {
  const [name, setName] = useState("");

  const saveUsername = (name: string) => {
    setName(name);
  };

  return (
    <MainSectionContainer sectionName="projects">
      <MainSectionHeading sectionName="Projects" />

      <section className={styles.projectSection}>
        <h3 className={styles.widgetsTitle}>Widgets</h3>
        {/* <div className={styles.widgetsGrid}>
            <WidgetsForm />
            <WelcomeWidget name={name} />
            <SunWidget />
            <ClockWidget />
            <ChatWidget saveUsername={saveUsername} name={name} />
            <WeatherWidget />
            <PomodoroWidget />
          </div> */}
      </section>
      <section className={styles.projectSection}></section>
    </MainSectionContainer>
  );
}

export default Projects;
