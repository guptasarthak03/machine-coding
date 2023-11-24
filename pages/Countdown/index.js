import React from 'react';
import useCountdown from '../../library/hooks/useCountdown';

function Countdown() {
  const timeInput = {
    hours: 0,
    minutes: 125,
    seconds: 10,
  };

  const { timerString } = useCountdown(timeInput);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <h1>{timerString} </h1>
    </div>
  );
}

export default Countdown;
