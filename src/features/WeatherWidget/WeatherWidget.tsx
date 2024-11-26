import { useContext } from "react";
import styles from "./WeatherWidget.module.scss";
import { WeatherDisplay } from "./components";
import { Loader, WidgetContainer } from "../../components";
import { WeatherContext } from "../../context";
import { Location } from "../Location";

function WeatherWidget() {
  const { weatherData, isFetching } = useContext(WeatherContext);

  return (
    <>
      <WidgetContainer
        customClasses={styles.weatherWidgetContainer}
        title="Weather"
      >
        {isFetching && <Loader />}
        {!isFetching && weatherData && (
          <>
            <Location />
            <WeatherDisplay />
          </>
        )}
      </WidgetContainer>
    </>
  );
}

export default WeatherWidget;
