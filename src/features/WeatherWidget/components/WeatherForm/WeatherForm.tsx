import styles from "./WeatherForm.module.scss";
import { Input, ArrowForwardSVG } from "../../../../components/";
import { motion } from "framer-motion";

interface WeatherFormProps {
  zipCode: string;
  onZipCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  onFindWeatherClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
}

function WeatherForm({
  zipCode,
  onZipCodeChange,
  error,
  onFindWeatherClick,
}: WeatherFormProps) {
  return (
    <form className={styles.formContainer}>
      <Input
        label="ZIP Code"
        type="text"
        value={zipCode}
        onChange={onZipCodeChange}
        hint="Find local weather by entering your ZIP code."
        error={error}
        customInputClasses={styles.zipCodeInput}
        customLabelClasses={styles.zipCodeLabel}
      />
      <motion.button
        type="submit"
        onClick={onFindWeatherClick}
        className={styles.zipCodeButton}
        whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowForwardSVG customClasses={styles.arrowForwardSvg} />
      </motion.button>
    </form>
  );
}

export default WeatherForm;
