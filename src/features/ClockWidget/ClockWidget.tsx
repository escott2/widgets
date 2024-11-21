import { useState, useEffect } from "react";
import { WidgetContainer } from "../../components/layout";
import styles from "./ClockWidget.module.scss";

function ClockWidget() {
  const currentDate = new Date();
  const [time, setTime] = useState(currentDate);

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

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <WidgetContainer customClasses={styles.clockWidgetContainer} title="Clock">
      <p className={styles.clock}>{formattedTime}</p>
      <p className={styles.date}>{formattedDate}</p>
    </WidgetContainer>
  );
}

export default ClockWidget;
