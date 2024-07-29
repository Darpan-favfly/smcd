"use client";
import Countdown from "react-countdown";

const CountdownTimer = ({ date }) => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="countdown-timer">
        <span>
          {days > 0 && `${days} days`} {hours > 0 && `${hours} hours`}{" "}
          {minutes > 0 && `${minutes} minutes`}{" "}
          {seconds > 0 && `${seconds} seconds`} left
        </span>
      </div>
    );
  };

  return <Countdown date={date} renderer={renderer} />;
};

export default CountdownTimer;
