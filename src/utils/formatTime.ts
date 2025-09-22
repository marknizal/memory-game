export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
};

export const formatTimeWords = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  if (mins > 0 && secs > 0) {
    return `${mins} ${mins === 1 ? "minute" : "minutes"} ${secs} ${
      secs === 1 ? "second" : "seconds"
    }`;
  } else if (mins > 0) {
    return `${mins} ${mins === 1 ? "minute" : "minutes"}`;
  } else {
    return `${secs} ${secs === 1 ? "second" : "seconds"}`;
  }
};
