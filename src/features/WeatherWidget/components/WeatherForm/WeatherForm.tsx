import { useState, useContext } from "react";
import styles from "./WeatherForm.module.scss";
import { Input, ArrowForwardSVG } from "../../../../components/";
import { motion } from "framer-motion";
import { isValidZipCode } from "../../utils";
import { WeatherContext } from "../../../../context";
import { IconButton } from "../../../../components/ui/Button";

function WeatherForm() {
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");
  const { actions } = useContext(WeatherContext);
  const findWeather = actions?.findWeather ? actions.findWeather : null;

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value);
  };

  const handleFindWeatherClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (zipCode && isValidZipCode(zipCode)) {
      setError("");
      findWeather && findWeather(zipCode);
      setZipCode("");
    } else {
      setError("Please enter a valid 5-digit ZIP code.");
    }
  };

  return (
    <form className={styles.formContainer}>
      <Input
        label="ZIP Code"
        type="text"
        value={zipCode}
        onChange={handleZipCodeChange}
        hint="Find local weather by entering your ZIP code."
        error={error}
        customInputClasses={styles.zipCodeInput}
        customLabelClasses={styles.zipCodeLabel}
      />
      {/* <motion.button
        type="submit"
        onClick={handleFindWeatherClick}
        className={styles.zipCodeButton}
        whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowForwardSVG customClasses={styles.arrowForwardSvg} />
      </motion.button> */}
      <IconButton
        onClick={handleFindWeatherClick}
        customClasses={styles.zipCodeButton}
      >
        <ArrowForwardSVG customClasses={styles.arrowForwardSvg} />
      </IconButton>
    </form>
  );
}

export default WeatherForm;
