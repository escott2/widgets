const convertUnixTimeToLocal = (timeInUTC: number): string => {
  const milliseconds = timeInUTC * 1000;
  const date = new Date(milliseconds);
  const formattedTime = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  return formattedTime;
};

export { convertUnixTimeToLocal };
