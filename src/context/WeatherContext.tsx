import { createContext, useState } from "react";
import { WeatherData, GeoLocationData } from "../types/weatherDataTypes";

interface ActionsContextType {
  findWeather: ((zipCode: string) => Promise<void>) | null;
}

interface WeatherContextValue {
  weatherData: WeatherData | null;
  geoLocationData: GeoLocationData | null;
  actions: ActionsContextType;
}

const defaultContextValue: WeatherContextValue = {
  weatherData: null,
  geoLocationData: null,
  actions: {
    findWeather: null,
  },
};

const WeatherContext = createContext<WeatherContextValue>(defaultContextValue);

interface WeatherProviderProps {
  children: React.ReactNode;
}

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [geoLocationData, setGeoLocationData] =
    useState<GeoLocationData | null>(null);

  const apiKey = "922176d7fe6aa80866789eaaf2e9d26d";

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

  const findWeather = async (zipCode: string) => {
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
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        geoLocationData,
        actions: {
          findWeather: findWeather,
        },
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
