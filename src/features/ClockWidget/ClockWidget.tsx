import { useState, useEffect } from "react";
import { WidgetContainer } from "../../components/layout";
import styles from "./ClockWidget.module.scss";

function ClockWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <WidgetContainer title="Time" customClasses={styles.clockWidgetContainer}>
      <p className={styles.clock}>{formattedTime}</p>
    </WidgetContainer>
  );
}

export default ClockWidget;
