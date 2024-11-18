import { useContext } from "react";
import { WeatherContext } from "../../context";
import { WidgetContainer } from "../../components/layout/";
import styles from "./SunWidget.module.scss";
import { SunPositionSVG } from "../../components/svg";
import {
  convertUnixTimeToLocal,
  getSunPosition,
  getLightDurationData,
} from "./utils";
import { NightDisplay } from "./components/NightDisplay";

function SunWidget() {
  const { weatherData, geoLocationData } = useContext(WeatherContext);
  const { sunrise, sunset } = weatherData?.sys || {};

  const percentDaylightRemaining =
    sunrise && sunset ? getSunPosition(sunrise, sunset) : undefined;

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

  const renderSunWidget = (
    <>
      {percentDaylightRemaining ? (
        <WidgetContainer customClasses={styles.sunWidgetContainer} title="Sun">
          <h3>Location: {geoLocationData?.zip}</h3>

          <div className={styles.sunPositionContainer}>
            <SunPositionSVG
              percentage={percentDaylightRemaining}
              customClasses={styles.sunArc}
            />
            {/* <SunPositionSVG percentage={50} customClasses={styles.sunArc} /> */}
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
            <div>
              {dayLengthInHours && (
                <>
                  <p>{dayLengthInHours} hours of daytime</p>
                  <p>{nightLengthInHours} hours of nighttime</p>
                </>
              )}
            </div>
          </div>
        </WidgetContainer>
      ) : (
        <NightDisplay sunriseTime={sunriseTime} sunsetTime={sunsetTime} />
      )}
    </>
  );

  return (
    <>
      {weatherData ? (
        renderSunWidget
      ) : (
        <WidgetContainer
          empty={true}
          customClasses={styles.sunWidgetContainerEmpty}
        ></WidgetContainer>
      )}
    </>
  );
}

export default SunWidget;
