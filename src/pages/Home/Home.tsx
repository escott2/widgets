import styles from "./Home.module.scss";
import { AboutMe, WeatherWidget } from "../../features";

function Home() {
  return (
    <main className={styles.homeContainer}>
      <h1 className={styles.homeHeading}>
        I'm Emily, an experienced front-end developer.
      </h1>
      <AboutMe />
      <WeatherWidget />
    </main>
  );
}

export default Home;
