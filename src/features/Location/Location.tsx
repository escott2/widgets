import { useContext } from "react";
import { WeatherContext } from "../../context";
import styles from "./Location.module.scss";

function Location() {
  const { geoLocationData } = useContext(WeatherContext);

  return (
    <div className={styles.locationContainer}>
      <h3>Location:</h3>
      <p>{geoLocationData?.zip}</p>
    </div>
  );
}

export default Location;
