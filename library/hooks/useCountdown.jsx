import { useEffect, useRef, useState } from 'react';
import { calcInitialTime, formatTimeStr, formatTimeVal } from '../utils/countdown';

/**
 * @param {Number} userTimeInput
 * @returns {Object}
 */

function useCountdown(userTimeInput) {
  const [timer, setTimer] = useState(() => calcInitialTime(userTimeInput));
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(reduceTimer, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  function reduceTimer() {
    // setter function
    setTimer(prevTimer => {
      if (prevTimer - 1000 <= 0) {
        clearInterval(intervalRef.current);
        return 0;
      }

      return prevTimer - 1000;
    });
  }

  const timerValue = formatTimeVal(timer); // millsec => hours, minutes & sec
  const timerString = formatTimeStr(timerValue); // "hh:mm:ss format"

  return {timerValue, timerString}; 
}

export default useCountdown;
