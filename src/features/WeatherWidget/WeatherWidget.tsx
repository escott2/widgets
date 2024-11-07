import { useContext } from "react";
import styles from "./WeatherWidget.module.scss";
import { WeatherDisplay } from "./components";
import { WidgetContainer } from "../../components/layout";
import { WeatherContext } from "../../context";

function WeatherWidget() {
  const { weatherData } = useContext(WeatherContext);

  return (
    <>
      {weatherData ? (
        <WidgetContainer
          customClasses={styles.weatherWidgetContainer}
          title="Weather"
        >
          <WeatherDisplay />
        </WidgetContainer>
      ) : (
        <WidgetContainer empty={true}></WidgetContainer>
      )}
    </>
  );
}

export default WeatherWidget;
