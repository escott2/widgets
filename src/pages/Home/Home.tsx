import styles from "./Home.module.scss";
import { Widgets } from "../../features";

function Home() {
  return (
    <>
      <main className={styles.homeContainer}>
        <h2 className={styles.pageTitle}>Widgets</h2>
        <Widgets />
      </main>
    </>
  );
}

export default Home;
