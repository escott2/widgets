interface SunStatusProps {
  percentDaylightRemaining: number | null | undefined;
}

function SunStatus({ percentDaylightRemaining }: SunStatusProps) {
  const isBeforeSunrise =
    percentDaylightRemaining && percentDaylightRemaining > 100;
  const isSunUp = percentDaylightRemaining && percentDaylightRemaining <= 100;

  return (
    <p>
      {isBeforeSunrise
        ? "The sun has not risen yet."
        : isSunUp
        ? `The sun is up - ${percentDaylightRemaining}% daylight remains`
        : "The sun has set for the day."}
    </p>
  );
}

export default SunStatus;
