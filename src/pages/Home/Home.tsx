import { useState } from "react";
import styles from "./Home.module.scss";
import {
  AboutMe,
  WeatherWidget,
  SunWidget,
  ClockWidget,
  ChatWidget,
} from "../../features";
import ScrollVideo from "../../features/ScrollVideo/ScrollVideo";
import WelcomeWidget from "../../features/WelcomeWidget/WelcomeWidget";
import { WidgetsForm } from "../../features/WidgetsForm";
import { PomodoroWidget } from "../../features/PomodoroWidget";
function Home() {
  const [name, setName] = useState("");

  const saveUsername = (name: string) => {
    setName(name);
  };

  return (
    <main className={styles.homeContainer}>
      <div className={styles.landingContainer}>
        <div className={styles.introContainer}>
          <h1 className={styles.homeHeading}>
            I'm Emily, an experienced front-end engineer.
          </h1>
          <p className={styles.introText}>
            I'm passionate about creating exceptional web experiences that are
            not only visually appealing but also intuitive and well-engineered.
            My creative mindset and unwavering commitment to learning new
            technologies drive me to continuously elevate my craft. Explore my
            portfolio to see my work and learn more about my skills. I'm glad
            you're here and I hope you enjoy the experience!
          </p>
        </div>
        <ScrollVideo customClasses={styles.scrollVideo} />
      </div>

      <h2>Projects</h2>

      <section className={styles.widgetsContainer}>
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
