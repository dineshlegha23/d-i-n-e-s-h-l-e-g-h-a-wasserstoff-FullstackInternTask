import React from "react";

const HourlyForecast = ({ timezone, date, temp, img, rotation, speed }) => {
  date = new Date(timezone + date * 1000);

  function convertHours(hour) {
    if (hour === 0) {
      return `${12} AM`;
    }
    if (hour >= 12) {
      if (hour == 12) {
        return `${12} PM`;
      }
      return `${Math.abs(12 - hour)} PM`;
    }
    if (hour < 12) {
      return `${hour} AM`;
    }
  }
  const hours = convertHours(date.getUTCHours());

  return (
    <div className="rounded-xl flex flex-col gap-3 min-w-28">
      <div className="flex flex-col bg-gray py-2 px-4 rounded-xl items-center">
        <p>{hours}</p>
        <img
          className="w-14 py-1"
          src={`/images/weather_icons/${img}.png`}
          alt="cloud logo"
        />
        <p className="text-white/80">
          {temp.toFixed(1)}
          <sup>o</sup>
        </p>
      </div>
      <div className="flex flex-col bg-gray py-2 px-5 rounded-xl items-center">
        <p>{hours}</p>
        <img
          style={{ transform: `rotate(${rotation - 180}deg)` }}
          src={`/images/weather_icons/direction.png`}
          alt="wind direction logo"
        />
        <p className="text-white/80">
          <span className="mr-1">{speed}</span>km/h
        </p>
      </div>
    </div>
  );
};

export default HourlyForecast;
