"use client";
import Countdown from "react-countdown";

const CountdownTimer = ({ date }) => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="countdown-timer">
        <span>{hours} hours</span> <span>{minutes} minutes</span>{" "}
        <span>{seconds} seconds</span> left
      </div>
    );
  };

  return <Countdown date={date} renderer={renderer} />;
};

export default CountdownTimer;
