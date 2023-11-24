export const calcInitialTime = input => {
  // returns time in milliseconds
  const { hours, minutes, seconds } = input;

  const initialseconds = seconds * 1000;
  const initialMinutes = minutes * 60 * 1000;
  const initialHours = hours * 60 * 60 * 1000;

  return initialHours + initialMinutes + initialseconds;
};

export const formatTimeVal = (input) => {
  // original input is in milliseconds
  const seconds = Math.floor((input / 1000) % 60);
  const minutes = Math.floor((input / (60 * 1000)) % 60);
  const hours = Math.floor(input / (60 * 60 * 1000));

  return { hours, minutes, seconds };
}

export const formatTimeStr = (timeVal) => {
  const { hours, minutes, seconds } = timeVal;

  const strHr = hours <= 9 ? `0${hours}` : hours;
  const strMin = minutes <= 9 ? `0${minutes}` : minutes;
  const strSec = seconds <= 9 ? `0${seconds}` : seconds;

  return `${strHr}:${strMin}:${strSec}`;
}
