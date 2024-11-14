import styles from "./PomodoroWidget.module.scss";
import { WidgetContainer } from "../../components/layout";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PrimaryButton } from "../../components";

const PomodoroWidget = () => {
  const timerLength = 1800000;
  // const timerLength = 40000;

  const [timeRemaining, setTimeRemaining] = useState(timerLength);
  // const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const percentRemaining = timeRemaining / timerLength;

  let intervalId: number;

  const countDown = (timeRemaining: number) => {
    if (timeRemaining > 0) {
      const newTimeRemaining = timeRemaining - 1000;
      setTimeRemaining(newTimeRemaining);
      const hours = Math.floor(newTimeRemaining / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((newTimeRemaining / (1000 * 60)) % 60)
        .toString()
        .padStart(2, "0");
      const seconds = Math.floor((newTimeRemaining / 1000) % 60)
        .toString()
        .padStart(2, "0");
      // setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    } else {
      clearInterval(intervalId);
    }
  };

  useEffect(() => {
    intervalId = setInterval(() => countDown(timeRemaining), 1000);
    return () => clearInterval(intervalId);
  }, [timeRemaining]);

  const circleVariants = {
    initial: {
      pathLength: 0,
    },
    animate: {
      pathLength: percentRemaining,
    },
  };

  return (
    <WidgetContainer
      customClasses={styles.pomodoroWidgetContainer}
      title="Pomodoro"
    >
      <div className={styles.timerContainer}>
        <svg width="200" height="200">
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="#223945"
            strokeWidth="20"
            fill="none"
          />
          <motion.circle
            cx="100"
            cy="100"
            r="90"
            stroke="#c8e1ea"
            strokeWidth="10"
            fill="none"
            variants={circleVariants}
            initial="initial"
            animate="animate"
          />
        </svg>
        <div className={styles.timeContainer}>
          {minutes}:{seconds}
        </div>
      </div>
      <div className={styles.goalContainer}>
        <h3 className={styles.goalHeading}>Goal</h3>
        <p>Solve bug</p>
      </div>
      <PrimaryButton>pause</PrimaryButton>
      <PrimaryButton>reset</PrimaryButton>
    </WidgetContainer>
  );
};
export default PomodoroWidget;
