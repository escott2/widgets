import { useContext } from "react";
import styles from "./Home.module.scss";
import { AboutMe, WeatherWidget, SunWidget } from "../../features";
import { WeatherContext } from "../../context";
import ScrollVideo from "../../features/ScrollVideo/ScrollVideo";

function Home() {
  const { weatherData } = useContext(WeatherContext);

  return (
    <main className={styles.homeContainer}>
      <div className={styles.landingContainer}>
        <h1 className={styles.homeHeading}>
          I'm Emily, an experienced front-end engineer.
        </h1>
        <div className={styles.introContainer}>
          <p className={styles.introText}>
            I'm passionate about creating exceptional web experiences that are
            not only visually appealing but also intuitive and well-engineered.
            My creative mindset and unwavering commitment to learning new
            technologies drive me to continuously elevate my craft. Explore my
            portfolio to see my work and learn more about my skills. I'm glad
            you're here and I hope you enjoy the experience!
          </p>
          <ScrollVideo customClasses={styles.scrollVideo} />
        </div>
      </div>

      <section className={styles.widgetsContainer}>
        <WeatherWidget />
        {weatherData && <SunWidget />}
        {weatherData && <SunWidget />}
        {weatherData && <SunWidget />}
        {weatherData && <SunWidget />}
      </section>
      <AboutMe />
    </main>
  );
}

export default Home;
