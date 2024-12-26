import { useState, useContext } from "react";
import styles from "./WidgetsForm.module.scss";
import { Input, ArrowForwardSVG } from "../../components";
import { motion } from "framer-motion";
import { isValidZipCode } from "./utils";
import { WeatherContext } from "../../context";

function WidgetsForm() {
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");
  const { actions, isWeatherFetchError } = useContext(WeatherContext);

  const { setIsWeatherFetchError } = actions;
  const findWeather = actions?.findWeather ? actions.findWeather : null;

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value);
  };

  const handleFindWeatherClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsWeatherFetchError(false);
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
      <div className={styles.zipInputContainer}>
        <Input
          label="ZIP Code"
          type="text"
          value={zipCode}
          onChange={handleZipCodeChange}
          hint="Enter your ZIP code to see local information."
          error={
            isWeatherFetchError
              ? "We couldn't find a location for that ZIP code. Please double-check the ZIP code and try again."
              : error
          }
          customInputClasses={styles.zipCodeInput}
          customLabelClasses={styles.zipCodeLabel}
        />
        <motion.button
          type="submit"
          aria-label="submit"
          onClick={handleFindWeatherClick}
          className={styles.zipCodeButton}
          whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowForwardSVG customClasses={styles.arrowForwardSvg} />
        </motion.button>
      </div>
    </form>
  );
}

export default WidgetsForm;
