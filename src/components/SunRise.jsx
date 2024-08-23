import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import SunriseSetFlex from "./SunriseSetFlex";
import { useWeatherContext } from "../context/context";

const SunRise = () => {
  const { currentTemp } = useWeatherContext();
  let sunset = new Date(
    (currentTemp?.timezone + currentTemp?.sys?.sunset) * 1000
  );

  let sunrise = new Date(
    (currentTemp?.timezone + currentTemp?.sys?.sunrise) * 1000
  );

  return (
    <div className="bg-black/40 py-3 px-4 rounded-2xl mt-3 md:col-span-2 w-full">
      <p className="text-white/50 text-sm">Sunrise & Sunset</p>
      <div className="flex gap-5 justify-between flex-wrap md:justify-between">
        <SunriseSetFlex
          img={<IoSunnyOutline size={40} />}
          type={"Sunrise"}
          value={`${
            sunrise.getUTCHours() > 12
              ? Math.abs(12 - sunrise.getUTCHours())
              : sunrise.getUTCHours()
          }:${sunrise.getUTCMinutes()} AM`}
        />
        <SunriseSetFlex
          img={<FiMoon size={40} />}
          type={"Sunset"}
          value={`${
            sunset.getUTCHours() > 12
              ? Math.abs(12 - sunset.getUTCHours())
              : sunset.getUTCHours()
          }:${sunset.getUTCMinutes()} PM`}
        />
      </div>
    </div>
  );
};

export default SunRise;
