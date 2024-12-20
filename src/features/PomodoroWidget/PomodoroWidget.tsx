import styles from "./PomodoroWidget.module.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PlaySVG, PauseSVG, ClearSVG, WidgetContainer } from "../../components";
import { IconButton } from "../../components/ui/Button";

const PomodoroWidget = () => {
  const focusTotalSeconds = 1500;
  const breakTotalSeconds = 300;

  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1500);
  const [minutes, setMinutes] = useState("25");
  const [seconds, setSeconds] = useState("00");
  const [isFocusMode, setIsFocusMode] = useState(true);
  const percentRemaining = isFocusMode
    ? timeRemaining / focusTotalSeconds
    : timeRemaining / breakTotalSeconds;
  const timeHasElapsed = percentRemaining < 1;
  let intervalId: NodeJS.Timeout;

  const stopTimer = () => {
    clearInterval(intervalId);
    setTimerIsRunning(false);
  };

  const startTimer = () => {
    setTimerIsRunning(true);
  };

  const clearTimer = () => {
    if (isFocusMode) {
      setFocusTimer();
    } else {
      setBreakTimer();
    }
  };

  const setFocusTimer = () => {
    stopTimer();
    setTimeRemaining(focusTotalSeconds);
    setMinutes("25");
    setSeconds("00");
    setIsFocusMode(true);
  };

  const setBreakTimer = () => {
    stopTimer();
    setTimeRemaining(breakTotalSeconds);
    setMinutes("05");
    setSeconds("00");
    setIsFocusMode(false);
  };

  const setMinutesAndSeconds = (timeRemaining: number) => {
    const newMinutes = Math.floor(timeRemaining / 60)
      .toString()
      .padStart(2, "0");
    const newSeconds = (timeRemaining % 60).toString().padStart(2, "0");
    setMinutes(newMinutes);
    setSeconds(newSeconds);
  };

  const countDown = (timeRemaining: number) => {
    if (timeRemaining > 0) {
      const newTimeRemaining = timeRemaining - 1;
      setTimeRemaining(newTimeRemaining);
      setMinutesAndSeconds(newTimeRemaining);
    } else {
      clearInterval(intervalId);
      setTimerIsRunning(false);
    }
  };

  useEffect(() => {
    if (timerIsRunning === true) {
      intervalId = setInterval(() => countDown(timeRemaining), 1000);
    }
    return () => clearInterval(intervalId);
  }, [timeRemaining, timerIsRunning]);

  const circleVariants = {
    initial: {
      pathLength: 2,
    },
    animate: {
      pathLength: percentRemaining,
      transition: { duration: 0, delay: 0 },
    },
  };

  return (
    <WidgetContainer
      customClasses={styles.pomodoroWidgetContainer}
      title="Pomodoro"
    >
      <div className={styles.timerControlsContainer}>
        {timeHasElapsed && (
          <IconButton onClick={clearTimer} customClasses={styles.clearButton}>
            <ClearSVG customClasses={styles.controlSVG} />
          </IconButton>
        )}
      </div>
      <div className={styles.timerContainer}>
        <svg width="200" height="200">
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke="#223945"
            strokeWidth="30"
            fill="none"
          />
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            {...(isFocusMode ? { stroke: "#c8e1ea" } : { stroke: "#ffffff" })}
            strokeWidth="24"
            fill="none"
            variants={circleVariants}
            initial="initial"
            animate={timerIsRunning || timeHasElapsed ? "animate" : "initial"}
          />
        </svg>
        <div className={styles.timerInfoAndControls}>
          <div className={styles.timeContainer}>
            {minutes}:{seconds}
          </div>
          <div className={styles.controlButtonsContainer}>
            {timerIsRunning && timeRemaining > 0 ? (
              <IconButton onClick={stopTimer} customClasses={styles.stopButton}>
                <PauseSVG customClasses={styles.controlSVG} />
              </IconButton>
            ) : (
              timeRemaining > 0 && (
                <IconButton
                  onClick={startTimer}
                  customClasses={styles.playButton}
                >
                  <PlaySVG customClasses={styles.controlSVG} />
                </IconButton>
              )
            )}
          </div>
        </div>
      </div>

      <div className={styles.timerType}>
        <button
          onClick={setFocusTimer}
          className={`${styles.timerTypeButton} ${styles.focusButton}`}
        >
          Focus
        </button>
        <button
          onClick={setBreakTimer}
          className={`${styles.timerTypeButton} ${styles.breakButton}`}
        >
          Break
        </button>
      </div>
    </WidgetContainer>
  );
};
export default PomodoroWidget;
