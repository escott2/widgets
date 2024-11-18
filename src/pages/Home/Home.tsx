import { useState } from "react";
import styles from "./Home.module.scss";
import {
  AboutMe,
  WeatherWidget,
  SunWidget,
  ClockWidget,
  ChatWidget,
} from "../../features";
import WelcomeWidget from "../../features/WelcomeWidget/WelcomeWidget";
import { WidgetsForm } from "../../features/WidgetsForm";
import { PomodoroWidget } from "../../features/PomodoroWidget";
import { motion } from "framer-motion";
import { IconButton } from "../../components/ui/Button";

function Home() {
  const [name, setName] = useState("");
  const [displayGlanceInfo, setDisplayGlanceInfo] = useState(false);

  const saveUsername = (name: string) => {
    setName(name);
  };

  const lineVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2 },
    },
  };

  const handleExpandGlanceInfo = () => {
    setDisplayGlanceInfo(!displayGlanceInfo);
  };

  return (
    <main className={styles.homeContainer}>
      <div className={styles.landingContainer}>
        <div className={styles.introContainer}>
          <h1 className={styles.homeHeading}>
            Hello, I'm Emily Scott a front-end engineer and design enthusiast.
          </h1>
          <div className={styles.introInfoContainer}>
            <div className={styles.glanceInfoContainer}>
              <h3 className={styles.infoHeading}>
                I'm experienced, well-rounded, and skilled.
              </h3>
            </div>

            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <h4>Experienced</h4>
                With three years of professional front-end experience, I have a
                proven track record of delivering well-engineered features on
                time and maintaining large-scale codebases.
              </li>

              <li className={styles.infoItem}>
                <h4>Well-rounded</h4>When I'm not coding, I enjoy spending time
                outdoors, reading, exploring art and design, learning new
                things, and gardening.
              </li>

              <li className={styles.infoItem}>
                <h4>Skilled</h4>I enjoy spending time in nature, reading, art
                and design, learning new things, and gardening.
              </li>
            </ul>

            <h3 className={styles.infoHeading}>I'm on the market!</h3>

            <p className={styles.infoText}>
              Are you seeking a kind, encouraging, and passionate engineer to
              join your team? I'm available and seeking new opportunities.
              Please reach out if you believe I may be the right fit.
            </p>
          </div>

          {/* <svg viewBox="0 0 5 289" fill="none" className={styles.introLine}>
              <motion.path
                d="M2.5 2.5V144.5V286.5"
                stroke="black"
                stroke-width="5"
                stroke-linecap="round"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
              />
            </svg> */}
        </div>
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
