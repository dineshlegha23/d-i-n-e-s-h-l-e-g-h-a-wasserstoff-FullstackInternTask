import React from "react";
import HourlyForecast from "./HourlyForecast";
import { CiCloud } from "react-icons/ci";
import { useWeatherContext } from "../context/context";

const TodayAt = () => {
  const { forecast, getTemp } = useWeatherContext();
  const timezone = forecast?.city?.timezone;
  const list = forecast?.list.slice(0, 8);

  return (
    <div className="my-5">
      <p>Today at</p>
      <div className="flex gap-5 mt-5 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-w-[850px]">
        {list?.map((data) => (
          <HourlyForecast
            key={data.dt}
            date={data.dt}
            timezone={timezone}
            temp={getTemp(data.main.temp)}
            img={data.weather[0].icon}
            rotation={data.wind.deg}
            speed={data.wind.speed}
          />
        ))}
      </div>
    </div>
  );
};

export default TodayAt;
