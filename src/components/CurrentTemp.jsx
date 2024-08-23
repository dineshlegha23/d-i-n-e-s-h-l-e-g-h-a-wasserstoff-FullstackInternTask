import React, { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { useWeatherContext } from "../context/context";

const CurrentTemp = () => {
  const {
    coordinates,
    currentTemp,
    setCurrentTemp,
    selectedCity,
    unit,
    getTemp,
  } = useWeatherContext();

  const [loading, setLoading] = useState(false);

  const { lat, lon } = coordinates;

  async function fetchData() {
    setLoading(true);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await response.json();
    setCurrentTemp(data);
    setLoading(false);
  }

  // setting current temp and date
  const tempDesc = currentTemp?.weather?.[0]?.description;
  let temp = currentTemp?.main?.temp;
  const icon = currentTemp?.weather?.[0]?.icon;
  const location = selectedCity === "" ? "Delhi, In" : selectedCity;
  const currentDate = new Date().toString().substring(0, 10).split(" ");
  const day = currentDate[0];
  const month = currentDate[1];
  const date = currentDate[2];

  // rounding off temp
  temp = String(temp).includes(".") ? temp.toFixed(1) : temp;

  // temp = String(temp).includes(".")
  //   ? String(temp).at(-1) === "0"
  //     ? temp.slice(0, -2)
  //     : temp
  //   : temp;

  // removing last 0 if there is any
  temp = String(temp).at(-1) === "0" ? temp.slice(0, -2) : temp;

  useEffect(() => {
    fetchData();
  }, [coordinates]);

  if (loading) {
    return (
      <div className="bg-black/80 grid place-items-center w-screen h-screen fixed z-10 top-0 left-0">
        <div className="h-20 w-20 animate-spin border-t-8 rounded-full border-white"></div>
      </div>
    );
  }

  return (
    <section>
      <div className="bg-gray rounded-2xl p-5">
        <div>
          <p>Now</p>
          <div className="flex justify-between items-center">
            <span className="text-6xl brightness-200">
              {temp && getTemp(temp)}
              <sup>o</sup>
              {unit === "celcius" ? "c" : "f"}
            </span>
            <i className="w-16 mx-5">
              <img src={`/images/weather_icons/${icon}.png`} alt="cloud logo" />
            </i>
          </div>
          <p className="my-2">
            {tempDesc
              ?.split(" ")
              .map((word) => word[0].toUpperCase() + word.substring(1))
              .join(" ")}
          </p>
          <hr className="text-white/50" />
          <div className="flex flex-col gap-2 mt-2 text-white/50">
            <div className="flex gap-2 items-center">
              <CiCalendar size={20} />
              <p>
                {day} {date}, {month}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FaLocationDot size={20} />
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentTemp;
