"use client";
import React, { useEffect, useState } from "react";
import "../styles/live-timer.css";

const LiveTimer = () => {
  const [time, setTime] = useState<Date | null>(null);
  const [flip, setFlip] = useState({
    hours: false,
    minutes: false,
    seconds: false,
  });

  useEffect(() => {
    setTime(new Date());

    const intervalId = setInterval(() => {
      const newTime = new Date();
      setTime(newTime);
      setFlip({
        hours: newTime.getHours() !== time?.getHours(),
        minutes: newTime.getMinutes() !== time?.getMinutes(),
        seconds: newTime.getSeconds() !== time?.getSeconds(),
      });

      setTimeout(
        () => setFlip({ hours: false, minutes: false, seconds: false }),
        1000
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, [time]);

  if (!time) {
    return null; // or a loading spinner
  }

  const formatTimeParts = (date: Date) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayName = days[date.getDay()];
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // the hour '0' should be '12'
    return {
      dayName,
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
      ampm,
    };
  };

  const { dayName, hours, minutes, seconds, ampm } = formatTimeParts(time);

  return (
    <div className="flex items-center gap-2 text-base font-medium *:py-1 *:px-2 *:rounded-lg *:border *:border-primary/20 [&_>_*:hover]:border-primary/40 [&_>_*:hover]:bg-primary/5 *:cursor-pointer">
      <span>{dayName}</span>
      <span className="bg-primary/10">
        <span className={`inline-block ${flip.hours ? "flip" : ""}`}>
          {hours}
        </span>
      </span>
      <span className="bg-primary/10">
        <span className={`inline-block ${flip.minutes ? "flip" : ""}`}>
          {minutes}
        </span>
      </span>
      <span className="bg-primary/10">
        <span className={`inline-block ${flip.seconds ? "flip" : ""}`}>
          {seconds}
        </span>
      </span>
      <span>{ampm}</span>
    </div>
  );
};

export default LiveTimer;
