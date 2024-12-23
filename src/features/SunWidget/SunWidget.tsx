import { useContext } from "react";
import { WeatherContext } from "../../context";
import { Loader, WidgetContainer } from "../../components";
import styles from "./SunWidget.module.scss";
import { SunPositionSVG } from "../../components/svg";
import { convertUnixTimeToLocal, getSunPercentRemaining } from "./utils";
import { Location } from "../common";
import { SunStatus } from "./components/SunStatus";

function SunWidget() {
  const { weatherData, isFetching, isWeatherFetchError } =
    useContext(WeatherContext);
  const { sunrise, sunset } = weatherData?.sys || {};

  const percentDaylightRemaining =
    sunrise && sunset ? getSunPercentRemaining(sunrise, sunset) : undefined;

  const sunriseTime =
    weatherData?.sys?.sunrise !== undefined &&
    convertUnixTimeToLocal(weatherData.sys.sunrise);

  const sunsetTime =
    weatherData?.sys?.sunset !== undefined &&
    convertUnixTimeToLocal(weatherData.sys.sunset);

  return (
    <>
      <WidgetContainer customClasses={styles.sunWidgetContainer} title="Sun">
        {isFetching && <Loader />}
        <div aria-busy={isFetching}>
          {!isFetching && weatherData && (
            <>
              <Location />
              <div className={styles.sunPositionContainer}>
                <SunPositionSVG
                  percentDaylightRemaining={percentDaylightRemaining}
                />
              </div>

              <div className={styles.sunInfoContainer}>
                <div className={styles.sunTimeContainer}>
                  <div className={styles.sunriseContainer}>
                    <h4>Sunrise</h4>
                    {sunriseTime ? <p>{sunriseTime}</p> : <p>N/A</p>}
                  </div>
                  <div className={styles.sunsetContainer}>
                    <h4>Sunset</h4>
                    {sunsetTime ? <p>{sunsetTime}</p> : <p>N/A</p>}
                  </div>
                </div>
                <SunStatus
                  percentDaylightRemaining={percentDaylightRemaining}
                />
              </div>
            </>
          )}
          {!isFetching && !weatherData && (
            <p className={styles.noDataMessage}>
              {isWeatherFetchError
                ? "An error occurred while fetching sun data."
                : "Enter your ZIP code in the form above for local sun information."}
            </p>
          )}
        </div>
      </WidgetContainer>
    </>
  );
}

export default SunWidget;
