import { useContext } from "react";
import styles from "./WeatherWidget.module.scss";
import { WeatherDisplay } from "./components";
import { Loader, WidgetContainer } from "../../components";
import { WeatherContext } from "../../context";
import { Location } from "../common";

function WeatherWidget() {
  const { weatherData, isFetching } = useContext(WeatherContext);

  return (
    <>
      <WidgetContainer
        customClasses={styles.weatherWidgetContainer}
        title="Weather"
      >
        {isFetching && <Loader />}
        {!isFetching && weatherData ? (
          <>
            <Location />
            <WeatherDisplay />
          </>
        ) : (
          <p className={styles.noDataMessage}>
            Enter your ZIP code in the form above for local weather information.
          </p>
        )}
      </WidgetContainer>
    </>
  );
}

export default WeatherWidget;
