import styles from "./Home.module.scss";
import { AboutMe, WeatherWidget, SunWidget } from "../../features";

function Home() {
  return (
    <main className={styles.homeContainer}>
      <h1 className={styles.homeHeading}>
        I'm Emily, an experienced front-end developer.
      </h1>
      <ul className={styles.keyPointsList}>
        <li>
          I love coding and my curiosity motivates me to learn continuosly.
        </li>
        <li>
          I am a specialist in front-end development, but I enjoy understanding
          the bigger picture and I dabble in the backend.
        </li>
        <li>
          {" "}
          I have three years of professional experience at HealthTrio by mPulse.
        </li>
        <li>
          {" "}
          My coding expertise is in writing React, TypeScript, JavaScript, CSS,
          HTML
        </li>
        <li>I've worked on many agile projects with multi-functional teams.</li>
      </ul>

      <section className={styles.widgetContainer}>
        <WeatherWidget />
        <SunWidget />
      </section>
      <AboutMe />
    </main>
  );
}

export default Home;
