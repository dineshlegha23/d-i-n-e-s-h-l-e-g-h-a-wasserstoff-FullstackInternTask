import React, { useEffect, useState } from "react";
import SingleDayForecast from "./SingleDayForecast";
import { useWeatherContext } from "../context/context";

const Forecast = () => {
  const weekDayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const { coordinates, forecast, setForecast, getTemp } = useWeatherContext();
  const { lat, lon } = coordinates;
  const hours = [];

  async function fetchData() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await response.json();
    setForecast(data);
  }

  useEffect(() => {
    fetchData();
  }, [coordinates]);

  // hourly forecast
  for (let i = 5; i < 40; i += 8) {
    hours.push({
      temp: forecast?.list[i]?.main?.temp,
      date: forecast?.list[i]?.dt,
      icon: forecast?.list[i]?.weather[0]?.icon,
    });
  }

  return (
    <div className="bg-gray rounded-2xl p-5">
      <div className="flex flex-col gap-5">
        {hours.map((item, index) => {
          const date = new Date(19800 + item.date * 1000);
          return (
            <SingleDayForecast
              key={index}
              temp={getTemp(item?.temp?.toFixed(0))}
              date={`${date.getUTCDate()} ${monthNames[date.getUTCMonth()]}`}
              day={weekDayNames[date.getUTCDay()]}
              img={`/images/weather_icons/${item?.icon}.png`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
