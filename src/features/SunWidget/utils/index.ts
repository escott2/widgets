const convertUnixTimeToLocal = (timeInUTC: number): string => {
  const milliseconds = timeInUTC * 1000;
  const date = new Date(milliseconds);
  const formattedTime = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  return formattedTime;
};

interface LightDuration {
  dayLengthInHours: number;
  nightLengthInHours: number;
}

const getLightDurationData = (
  sunriseEpoch: number,
  sunsetEpoch: number
): LightDuration => {
  const SECONDS_IN_HOUR = 3600;
  const lengthInSeconds = sunsetEpoch - sunriseEpoch;
  const dayLengthInHours = parseFloat(
    (lengthInSeconds / SECONDS_IN_HOUR).toFixed(1)
  );
  const nightLengthInHours = 24 - dayLengthInHours;

  return { dayLengthInHours, nightLengthInHours };
};

const getSunPosition = (sunriseEpoch: number, sunsetEpoch: number) => {
  const rangeInMilliseconds = (sunsetEpoch - sunriseEpoch) * 1000;
  const currentEpochInMilliseconds = new Date().getTime();
  // const currentEpochInMilliseconds = new Date(
  //   "November 2, 24 25:00:00"
  // ).getTime();

  const sunRemainingInMilliseconds =
    sunsetEpoch * 1000 - currentEpochInMilliseconds;

  if (sunRemainingInMilliseconds >= 0) {
    const percentageRemaining = Math.floor(
      (sunRemainingInMilliseconds / rangeInMilliseconds) * 100
    );
    console.log(percentageRemaining);
    return percentageRemaining;
  } else {
    return null;
  }
};

export { convertUnixTimeToLocal, getSunPosition, getLightDurationData };
