import { useContext, useState } from "react";
import styles from "./Home.module.scss";
import {
  AboutMe,
  WeatherWidget,
  SunWidget,
  ClockWidget,
  ChatWidget,
} from "../../features";
import { WeatherContext } from "../../context";
import ScrollVideo from "../../features/ScrollVideo/ScrollVideo";
import { WidgetContainer } from "../../components/layout";
import WelcomeWidget from "../../features/WelcomeWidget/WelcomeWidget";

function Home() {
  const { weatherData } = useContext(WeatherContext);
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
        <WeatherWidget />
        <WelcomeWidget name={name} />
        <ChatWidget saveUsername={saveUsername} />
        <SunWidget />
        <ClockWidget />
      </section>
      <AboutMe />
      <h2>Contact</h2>
    </main>
  );
}

export default Home;
