// import { WeatherData } from "../../types/WeatherWidgetTypes";

// interface SunWidgetProps {
//   weatherData: WeatherData;
// }

function SunWidget() {
  return (
    <div>
      <h1>Sun</h1>
      <h4>Sunrise</h4>
      {/* <p>{weatherData?.sys?.sunrise}</p> */}
      <p>7:32 AM</p>
      <h4>Sunset</h4>
      {/* <p>{weatherData?.sys?.sunset}</p> */}
      <p>6:26 PM</p>
    </div>
  );
}

export default SunWidget;
