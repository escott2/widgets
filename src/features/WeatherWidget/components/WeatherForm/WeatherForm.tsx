import styles from "./WeatherForm.module.scss";
import { Input } from "../../../../components/ui";

interface WeatherFormProps {
  zipCode: string;
  onZipCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFindWeatherClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
}

function WeatherForm({
  zipCode,
  onZipCodeChange,
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
      />
      <button
        type="submit"
        onClick={onFindWeatherClick}
        className={styles.zipCodeButton}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFF"
          aria-label="Next"
          className={styles.arrowForwardSvg}
        >
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        </svg>
      </button>
    </form>
  );
}

export default WeatherForm;
