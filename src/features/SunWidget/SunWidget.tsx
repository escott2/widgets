import { useContext } from "react";
import { WeatherContext } from "../../context";
import { WidgetContainer } from "../../components/layout/";
import styles from "./SunWidget.module.scss";
import { SunHorizonSVG, SunPositionSVG } from "../../components/svg";
import { convertUnixTimeToLocal } from "./utils";

function SunWidget() {
  const { weatherData } = useContext(WeatherContext);

  const getSunPosition = (sunriseEpoch: number, sunsetEpoch: number) => {
    const rangeInMilliseconds = (sunsetEpoch - sunriseEpoch) * 1000;
    const currentEpochInMilliseconds = new Date().getTime();
    const percentage = Math.floor(
      ((currentEpochInMilliseconds - sunriseEpoch * 1000) /
        rangeInMilliseconds) *
        100
    );
    console.log(percentage);
    return percentage;
  };

  const renderSunWidget = (
    <WidgetContainer customClasses={styles.sunWidgetContainer} title="Sun">
      <div className={styles.sunPositionContainer}>
        {/* <div className={styles.sunArc}></div> */}
        {weatherData?.sys?.sunrise && weatherData?.sys?.sunset && (
          // <SunPositionSVG
          //   percentage={getSunPosition(
          //     weatherData.sys.sunrise,
          //     weatherData.sys.sunset
          //   )}
          // />
          <SunPositionSVG percentage={360} />
        )}
      </div>

      <div className={styles.sunIconContainer}>
        <SunHorizonSVG customClasses={styles.sunHorizonIcon} />
        <SunHorizonSVG customClasses={styles.sunHorizonIcon} />
      </div>
      <div className={styles.sunInfoContainer}>
        <div className={styles.sunriseContainer}>
          <h4>Sunrise</h4>
          {weatherData?.sys?.sunrise && (
            <p>{convertUnixTimeToLocal(weatherData.sys.sunrise)}</p>
          )}
        </div>
        <div className={styles.sunsetContainer}>
          <h4>Sunset</h4>
          {weatherData?.sys?.sunset && (
            <p>{convertUnixTimeToLocal(weatherData.sys.sunset)}</p>
          )}
        </div>
      </div>
    </WidgetContainer>
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
