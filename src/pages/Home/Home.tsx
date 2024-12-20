import styles from "./Home.module.scss";
import { Widgets } from "../../features";

function Home() {
  return (
    <>
      <main className={styles.homeContainer}>
        <Widgets />
      </main>
    </>
  );
}

export default Home;
