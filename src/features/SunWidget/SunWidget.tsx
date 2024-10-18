import { useContext } from "react";
import { WeatherContext } from "../../context";
import { WidgetContainer } from "../../components/layout/";
import styles from "./SunWidget.module.scss";

function SunWidget() {
  const { weatherData } = useContext(WeatherContext);
  return (
    <WidgetContainer customClasses={styles.sunWidgetContainer} title="Sun">
      <div className={styles.sunInfoContainer}>
        <div className={styles.sunriseContainer}>
          <h4>Sunrise</h4>
          <p>{weatherData?.sys?.sunrise}</p>
        </div>
        <div className={styles.sunriseContainer}>
          <h4>Sunset</h4>
          <p>{weatherData?.sys?.sunset}</p>
        </div>
      </div>
    </WidgetContainer>
  );
}

export default SunWidget;
