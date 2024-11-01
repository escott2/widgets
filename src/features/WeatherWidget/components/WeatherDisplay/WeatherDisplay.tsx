import { useContext } from "react";
import { WeatherContext } from "../../../../context";
import styles from "./WeatherDisplay.module.scss";

function WeatherDisplay() {
  const { weatherData, geoLocationData } = useContext(WeatherContext);
  const iconURL = `https://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@2x.png`;

  const temperature =
    weatherData?.main?.temp !== undefined
      ? Math.round(weatherData.main.temp)
      : null;

  const feelsLike =
    weatherData?.main?.feels_like !== undefined
      ? Math.round(weatherData.main.feels_like)
      : null;

  const humidity =
    weatherData?.main?.humidity !== undefined
      ? Math.round(weatherData?.main?.humidity)
      : null;

  const windSpeed =
    weatherData?.wind?.speed !== undefined
      ? Math.round(weatherData?.wind?.speed)
      : null;

  return (
    <>
      {weatherData && geoLocationData && (
        <div className={styles.weatherDisplayContainer}>
          <h3>
            {weatherData?.name}, {weatherData?.sys?.country} -{" "}
            {geoLocationData?.zip}
          </h3>
          <div className={styles.primaryWeatherContainer}>
            <div className={styles.temperatureContainer}>
              {temperature}&deg;F
            </div>
            <img
              className={styles.icon}
              src={iconURL}
              alt={`${weatherData?.weather?.[0]?.description} icon`}
            />
          </div>
          <div className={styles.secondaryWeatherContainer}>
            <div className={styles.feelsLikeContainer}>
              <h4 className={styles.feelsLikeHeading}>Feels like:</h4>
              {feelsLike}&deg;F
            </div>

            <div className={styles.humidityContainer}>
              <h4 className={styles.humidityHeading}>Humidity:</h4>
              <p>{humidity}%</p>
            </div>
            <div className={styles.windContainer}>
              <h4 className={styles.windHeading}>Wind:</h4>
              <p>{windSpeed} mph</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WeatherDisplay;
