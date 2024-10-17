import { useState } from "react";
import styles from "./WeatherWidget.module.scss";
import { GeoLocationData, WeatherData } from "./types/WeatherWidgetTypes";
import { WeatherForm, WeatherDisplay } from "./components";
import { isValidZipCode } from "./utils";

function WeatherWidget() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [geoLocationData, setGeoLocationData] =
    useState<GeoLocationData | null>(null);
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");

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
    if (zipCode && isValidZipCode(zipCode)) {
      setError("");
      try {
        const geoData = await getGeoLocationData(zipCode);
        if (geoData) {
          setGeoLocationData(geoData);
          const { lat, lon } = geoData;
          const weatherData = await getWeatherData(lat, lon);
          setWeatherData(weatherData);
        }
        setZipCode("");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      setError("Please enter a valid 5-digit ZIP code.");
    }
  };

  return (
    <div className={styles.weatherContainer}>
      <h2 className={styles.title}>Weather</h2>
      <WeatherForm
        zipCode={zipCode}
        onZipCodeChange={handleZipCodeChange}
        onFindWeatherClick={handleFindWeatherClick}
        error={error}
      />
      {weatherData && geoLocationData?.zip && (
        <WeatherDisplay
          weatherData={weatherData}
          locationZipCode={geoLocationData.zip}
        />
      )}
    </div>
  );
}

export default WeatherWidget;
