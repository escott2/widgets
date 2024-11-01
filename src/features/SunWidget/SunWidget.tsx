import { useContext } from "react";
import { WeatherContext } from "../../context";
import { WidgetContainer } from "../../components/layout/";
import styles from "./SunWidget.module.scss";
import { SunHorizonSVG, SunPositionSVG } from "../../components/svg";
import { convertUnixTimeToLocal, getSunPosition } from "./utils";
import { NightDisplay } from "./components/NightDisplay";

function SunWidget() {
  const { weatherData } = useContext(WeatherContext);
  const percentDaylightRemaining =
    weatherData?.sys?.sunrise &&
    weatherData?.sys?.sunset &&
    getSunPosition(weatherData.sys.sunrise, weatherData.sys.sunset);

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
          <div className={styles.sunPositionContainer}>
            {/* <SunPositionSVG
              percentage={percentDaylightRemaining}
              customClasses={styles.sunArc}
            /> */}
            <SunPositionSVG percentage={50} customClasses={styles.sunArc} />
          </div>
          <div className={styles.sunInfoContainer}>
            <div className={styles.sunIconContainer}>
              {/* <SunHorizonSVG customClasses={styles.sunHorizonIcon} />
              <SunHorizonSVG customClasses={styles.sunHorizonIcon} /> */}
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
