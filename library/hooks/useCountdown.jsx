import { useEffect, useRef, useState } from 'react';
import { calcInitialTime, formatTimeStr, formatTimeVal } from '../utils/countdown';

/**
 * @param {Number} userTimeInput
 * @returns {Object}
 */

function useCountdown(userTimeInput) {
  const [timer, setTimer] = useState(() => calcInitialTime(userTimeInput));
  const intervalIdRef = useRef(null);

  useEffect(() => {
    intervalIdRef.current = setInterval(runTimer, 1000)

    return () => clearInterval(intervalIdRef.current);
  }, [])


  function runTimer () {
    // setter fn has access to most updated state
    setTimer(prevTimer => {
        if(prevTimer - 1000 <= 0){
            clearInterval(intervalIdRef.current);
            return 0;
        }

        return prevTimer - 1000;
    })
  }

  const timerValue = formatTimeVal(timer);
  const timerString = formatTimeStr(timerValue);

  return {timerValue, timerString}
}

export default useCountdown;
