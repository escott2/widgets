import styles from "./Home.module.scss";
import { About } from "../../features";

function Home() {
  return (
    <main className={styles.homeContainer}>
      <h1 className={styles.homeHeading}>
        I'm Emily, an experienced front-end developer.
      </h1>
      <About />
    </main>
  );
}

export default Home;
