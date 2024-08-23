import React from "react";
import AQI from "./AQI";
import SunRise from "./SunRise";
import ExtraDetails from "./ExtraDetails";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineLineStyle } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { useWeatherContext } from "../context/context";

const TodayHighlight = () => {
  const { currentTemp, getTemp, unit } = useWeatherContext();
  const humidity = currentTemp?.main?.humidity;
  const pressure = currentTemp?.main?.pressure;
  const visibility = (currentTemp?.visibility / 1000).toFixed(2);
  const feels_like = currentTemp?.main?.feels_like;
  return (
    <div className="bg-gray rounded-2xl p-5">
      <p>Todays Highlight</p>
      <div className="grid grid-cols-2 gap-5">
        <AQI />
        <SunRise />
      </div>
      <div className="mt-5 grid grid-cols-4 gap-5 lg:grid-cols-2 sm:grid-cols-1">
        <ExtraDetails
          text={"Humidity"}
          value={humidity}
          measurement={"%"}
          img={<WiHumidity size={40} />}
        />
        <ExtraDetails
          text={"Pressure"}
          value={pressure}
          measurement={"hPa"}
          img={<MdOutlineLineStyle size={40} />}
        />
        <ExtraDetails
          text={"Visibility"}
          value={visibility}
          measurement={"km"}
          img={<IoEyeOutline size={40} />}
        />
        <ExtraDetails
          text={"Feels Like"}
          value={getTemp(feels_like)?.toFixed(2)}
          measurement={unit === "celcius" ? "oC" : "oF"}
          img={<LiaTemperatureHighSolid size={40} />}
        />
      </div>
    </div>
  );
};

export default TodayHighlight;
