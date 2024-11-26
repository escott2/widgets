import { useContext } from "react";
import { WeatherContext } from "../../context";
import { Loader, WidgetContainer } from "../../components";
import styles from "./SunWidget.module.scss";
import { SunPositionSVG } from "../../components/svg";
import {
  convertUnixTimeToLocal,
  getSunPercentRemaining,
  getLightDurationData,
} from "./utils";
import { Location } from "../Location";
import { SunStatus } from "./components/SunStatus";

function SunWidget() {
  const { weatherData, isFetching } = useContext(WeatherContext);
  const { sunrise, sunset } = weatherData?.sys || {};

  const percentDaylightRemaining =
    sunrise && sunset ? getSunPercentRemaining(sunrise, sunset) : undefined;

  interface LightDuration {
    dayLengthInHours: number;
    nightLengthInHours: number;
  }

  const lightDuration: LightDuration | undefined =
    sunrise && sunset ? getLightDurationData(sunrise, sunset) : undefined;
  const { dayLengthInHours, nightLengthInHours } = lightDuration || {
    dayLengthInHours: 0,
    nightLengthInHours: 0,
  };

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
        {!isFetching && weatherData && (
          <>
            <Location />
            <div className={styles.sunInfoContainer}>
              <SunStatus percentDaylightRemaining={percentDaylightRemaining} />

              {dayLengthInHours && nightLengthInHours && (
                <div className={styles.hoursInfo}>
                  <h4>Total light:</h4> <p>{dayLengthInHours} hours</p>
                  <h4>Total dark:</h4>
                  <p>{nightLengthInHours} hours</p>
                </div>
              )}
            </div>
            <div className={styles.sunPositionContainer}>
              <SunPositionSVG
                percentDaylightRemaining={percentDaylightRemaining}
              />
              {/* <SunPositionSVG percentDaylightRemaining={50} /> */}
            </div>
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
          </>
        )}
      </WidgetContainer>
    </>
  );
}

export default SunWidget;
