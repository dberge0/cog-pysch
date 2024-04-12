import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    // Exit early when we reach 0
    if (timeLeft === 0) return;

    // Save intervalId to clear the interval when the
    // component re-renders or unmounts
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // Clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // Add timeLeft as a dependency to reset the interval
  }, [timeLeft]);

  return (
    <div className="fixed top-0 right-0 m-4 z-1">
      <div className="text-right">
        <span className="text-lg font-semibold text-black">
          {timeLeft} seconds
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
