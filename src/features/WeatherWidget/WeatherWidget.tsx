import styles from "./WeatherWidget.module.scss";
import { WeatherForm, WeatherDisplay } from "./components";

function WeatherWidget() {
  return (
    <div className={styles.weatherContainer}>
      <h2 className={styles.title}>Weather</h2>
      <WeatherForm />
      <WeatherDisplay />
    </div>
  );
}

export default WeatherWidget;
