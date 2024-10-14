import { WeatherData } from "../../types/WeatherWidgetTypes";

interface WeatherDisplayProps {
  weatherData: WeatherData;
  zipCode: string;
}

function WeatherDisplay({ weatherData, zipCode }: WeatherDisplayProps) {
  return (
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
  );
}

export default WeatherDisplay;
