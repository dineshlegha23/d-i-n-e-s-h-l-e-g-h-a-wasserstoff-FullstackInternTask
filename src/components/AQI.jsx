import React, { useEffect, useState } from "react";
import { MdOutlineAir } from "react-icons/md";
import AQIFlexCol from "./AQIFlexCol";
import { useWeatherContext } from "../context/context";

const AQI = () => {
  const { coordinates } = useWeatherContext();
  const { lat, lon } = coordinates;
  const [aqi, setAqi] = useState("");
  const [aqiData, setAqiData] = useState([]);
  const aqiText = {
    1: { text: "Good", color: "bg-green-600" },
    2: { text: "Fair", color: "bg-yellow-700" },
    3: { text: "Moderate", color: "bg-orange-400" },
    4: { text: "Poor", color: "bg-orange-700" },
    5: { text: "Very Poor", color: "bg-red-700" },
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&units=metric&appid=1fd671326afdca28081228497ae0615f`
    );
    const data = await response.json();
    setAqi(data.list[0].main.aqi);
    setAqiData(data.list[0].components);
  };

  useEffect(() => {
    fetchData();
  }, [coordinates]);

  return (
    <div className="bg-black/40 py-3 px-4 rounded-2xl mt-3 md:col-span-2">
      <div className="flex justify-between text-sm">
        <p className="text-white/50">Air Quality Index</p>
        <span className={`${aqiText[aqi]?.color} py-[1px] px-4 rounded-full`}>
          {aqiText[aqi]?.text}
        </span>
      </div>
      <div className="flex items-center gap-5">
        <MdOutlineAir size={40} className="xs:hidden" />
        <div className="flex items-center justify-between gap-5 mt-5 flex-wrap w-full">
          <AQIFlexCol type={"PM25"} value={aqiData?.pm2_5} />
          <AQIFlexCol type={"SO2"} value={aqiData?.so2} />
          <AQIFlexCol type={"NO2"} value={aqiData?.no2} />
          <AQIFlexCol type={"O3"} value={aqiData?.o3} />
        </div>
      </div>
    </div>
  );
};

export default AQI;
