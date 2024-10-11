import { useState } from "react";
import styles from "./WeatherWidget.module.scss";
import { GeoLocationData, WeatherData } from "./interfaces";

function WeatherWidget() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [geoLocationData, setGeoLocationData] =
    useState<GeoLocationData | null>(null);
  const [zipCode, setZipCode] = useState("");

  const apiKey = "922176d7fe6aa80866789eaaf2e9d26d";

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value);
  };

  async function getJSON<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json as T;
    } catch (error) {
      throw error;
    }
  }

  const getGeoLocationData = async (zipCode: string) => {
    const geoURL = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${apiKey}`;
    const geoLocationJSON = await getJSON<GeoLocationData>(geoURL);
    return geoLocationJSON;
  };

  const getWeatherData = async (lat: number, lon: number) => {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    const weatherJSON = await getJSON<WeatherData>(weatherURL);
    return weatherJSON;
  };

  const handleFindWeatherClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (zipCode) {
      try {
        const geoData = await getGeoLocationData(zipCode);
        if (geoData) {
          setGeoLocationData(geoData);
          const { lat, lon } = geoData;
          const weatherData = await getWeatherData(lat, lon);
          setWeatherData(weatherData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <div className={styles.weatherContainer}>
      <h2>Weather</h2>
      <form>
        <label>Zipcode:</label>
        <input
          value={zipCode}
          onChange={handleZipCodeChange}
          type="text"
        ></input>
        <button type="submit" onClick={handleFindWeatherClick}>
          Submit
        </button>
      </form>
      <div>
        {weatherData && <h3>Weather for {zipCode}</h3>}

        <div>
          <h4>Temperature:</h4>
          {weatherData?.main?.temp && Math.round(weatherData.main.temp)}&deg;F
        </div>
        <div>
          <h4>Feels like:</h4>
          {weatherData?.main?.feels_like &&
            Math.round(weatherData.main.feels_like)}
          &deg;F
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget;
