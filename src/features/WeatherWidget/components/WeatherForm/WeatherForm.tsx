import styles from "./WeatherForm.module.scss";
import { Input, ArrowForwardSVG } from "../../../../components/";

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
      <button
        type="submit"
        onClick={onFindWeatherClick}
        className={styles.zipCodeButton}
      >
        <ArrowForwardSVG customClasses={styles.arrowForwardSvg} />
      </button>
    </form>
  );
}

export default WeatherForm;
