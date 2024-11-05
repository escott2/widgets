import styles from "./WeatherWidget.module.scss";
import { WeatherForm, WeatherDisplay } from "./components";
import { WidgetContainer } from "../../components/layout";

function WeatherWidget() {
  return (
    <WidgetContainer
      customClasses={styles.weatherWidgetContainer}
      title="Weather"
    >
      {/* <WeatherForm /> */}
      <WeatherDisplay />
    </WidgetContainer>
  );
}

export default WeatherWidget;
