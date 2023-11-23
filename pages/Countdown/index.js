import React, { useEffect, useRef, useState } from 'react';

function Countdown() {
  const timeInput = {
    hours: 0,
    minutes: 125,
    seconds: 10,
  };

  const [timer, setTimer] = useState(() => calcInitialTime());
  const intervalRef = useRef(null);

  function calcInitialTime() {
    const { hours, minutes, seconds } = timeInput;

    // outcome in milliseconds
    const initialseconds = seconds * 1000;
    const initialMinutes = minutes * 60 * 1000;
    const initialHours = hours * 60 * 60 * 1000;

    return initialHours + initialMinutes + initialseconds;
  }

  /** 
   * Concept: Cleanup function runs on unmount or when dependency array changes & it re-runs.
   * Case: Don't forget to put run clearInterval on reaching timer value 0 (otherwise clearInterval will run indefinitely)
   *
   * Case: BruteForce => Using useEffect dependency array to update timer value (replacing new setInterval & clearing the one before)
   *    - useEffect will run 1 extra time
   *    - setInterval will run 1 extra time
   *    - pass clearInterval in useEffect cleanup to remove previous setInterval & in setInterval final condition to stop interval
   *
   * Case: setting up setInterval once, using setter function to get updated state value instead
   *    - useEffect and setInterval do not run 1 extra time here.
   *    - no need to pass clearInterval in cleanup function here.
   */

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

  function formatTime () {
    // original timer is in milliseconds
    const seconds = Math.floor((timer / 1000) % 60);
    const minutes = Math.floor((timer / (60 * 1000)) % 60);
    const hours = Math.floor(timer / (60 * 60 * 1000))

    const strHr = hours <= 9 ? `0${hours}` : hours;
    const strMin = minutes <= 9 ? `0${minutes}` : minutes;
    const strSec = seconds <= 9 ? `0${seconds}` : seconds;

    return `${strHr}:${strMin}:${strSec}`
  }

  useEffect(() => {
    intervalRef.current = setInterval(reduceTimer, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <h1>{formatTime()} </h1>
    </div>
  );
}

export default Countdown;
