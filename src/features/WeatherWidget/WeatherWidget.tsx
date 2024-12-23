import { useContext } from "react";
import styles from "./WeatherWidget.module.scss";
import { WeatherDisplay } from "./components";
import { Loader, WidgetContainer } from "../../components";
import { WeatherContext } from "../../context";
import { Location } from "../common";

function WeatherWidget() {
  const { weatherData, isFetching, isWeatherFetchError } =
    useContext(WeatherContext);

  return (
    <>
      <WidgetContainer
        customClasses={styles.weatherWidgetContainer}
        title="Weather"
      >
        {isFetching && <Loader />}

        <div aria-busy={isFetching}>
          {!isFetching && weatherData && (
            <>
              <Location />
              <WeatherDisplay />
            </>
          )}
          {!isFetching && !weatherData && (
            <p className={styles.noDataMessage}>
              {isWeatherFetchError
                ? "An error occurred while fetching weather data."
                : "Enter your ZIP code in the form above for local weather information."}
            </p>
          )}
        </div>
      </WidgetContainer>
    </>
  );
}

export default WeatherWidget;
