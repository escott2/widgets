import styles from "./Home.module.scss";
import { About, WeatherWidget } from "../../features";

function Home() {
  return (
    <main className={styles.homeContainer}>
      <h1 className={styles.homeHeading}>
        I'm Emily, an experienced front-end developer.
      </h1>
      <About />
      <WeatherWidget />
    </main>
  );
}

export default Home;
