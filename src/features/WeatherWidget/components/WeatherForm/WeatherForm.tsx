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
    <form>
      <label>Zipcode:</label>
      <input value={zipCode} onChange={onZipCodeChange} type="text"></input>
      <button type="submit" onClick={onFindWeatherClick}>
        Submit
      </button>
    </form>
  );
}

export default WeatherForm;
