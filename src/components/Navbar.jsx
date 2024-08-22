import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useWeatherContext } from "../context/context";

const Navbar = () => {
  const { city, setCity, cities, setCities, setCoordinates, setSelectedCity } =
    useWeatherContext();
  const [touched, setTouched] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.API_KEY}`
    );
    const data = await response.json();
    setCities(data);
  };

  useEffect(() => {
    if (city.length != 0) {
      const time = setTimeout(() => {
        fetchData();
      }, 300);
      return () => clearTimeout(time);
    }
  }, [city]);

  return (
    // Desktop View
    <nav className="flex justify-between items-center py-5 mx-auto max-w-7xl">
      <i className="w-48">
        <img src={"/images/logo.png"} alt="logo" />
      </i>
      <div onFocus={() => setTouched(true)} className="relative md:hidden">
        {touched && (
          <div
            onClick={() => setTouched(false)}
            className="fixed top-0 left-0 w-screen h-screen"
          ></div>
        )}
        <IoSearchOutline className="absolute top-[10px] ml-2" size={20} />
        <input
          className="md:hidden pl-10 py-[8px] bg-gray text-white outline-none w-[350px] px-2 rounded-full md:w-auto focus:rounded-none focus:rounded-t-[18px]"
          placeholder="Enter city name..."
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        //displaying all cities
        {touched && cities && (
          <ul className="absolute shadow-[0px_10px_20px_black] z-10 w-full flex flex-col bg-gray rounded-b-xl border-t-[1px] border-white/50">
            {cities.map((city, index) => (
              <li
                onClick={(e) => {
                  setCoordinates({ lat: city.lat, lon: city.lon });
                  setSelectedCity(`${city.name}, ${city.country}`);
                  setCity(city.name + " " + city.country);
                  setTouched(false);
                }}
                key={index}
                className="px-3 py-3 hover:bg-black/40 hover:cursor-pointer"
              >
                <div className="flex gap-3 items-center">
                  <FaLocationDot size={20} color="gray" />
                  <div>
                    <p>{city.name}</p>
                    <p className="text-white/50 leading-4">
                      {city.state} {city.country}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      // For Mobile Devices
      <div className="hidden md:flex md:gap-5">
        <IoSearchOutline
          onClick={() => setMobileSearch(true)}
          size={20}
          className="bg-gray rounded-full p-3 w-12 h-12 cursor-pointer"
        />
        <div className="flex items-center relative gap-3 bg-[#B5A1D9] rounded-full py-[6px] px-3 cursor-pointer md:p-1">
          <FaLocationCrosshairs className="md:p-2 w-10 h-10" />
        </div>
      </div>
      {mobileSearch && (
        <div className="animate-[bounced_0.5s] bg-black/100 fixed z-10 top-0 left-0 w-screen h-screen">
          <div className="flex items-start mt-1 justify-center">
            <button
              className="py-3 px-5 bg-gray rounded-full mr-2 ml-1 cursor-pointer"
              onClick={() => setMobileSearch(false)}
            >
              &lt;
            </button>
            <div className="animate-[bounced_0.5s] flex flex-col w-[90%] mr-16">
              <input
                className={`pl-9 py-[10px] bg-gray text-white outline-none w-full px-2 rounded-full  ${
                  (touched || cities.length > 0) &&
                  "rounded-none rounded-t-[18px]"
                }`}
                placeholder="Enter city name..."
                type="text"
                value={city}
                onFocus={() => setTouched(true)}
                onBlur={() => setTouched(false)}
                onChange={(e) => setCity(e.target.value)}
              />
              {cities && (
                <ul
                  className={`w-full ${
                    touched &&
                    cities.length > 0 &&
                    "shadow-[0px_10px_20px_black]"
                  } z-10  flex flex-col bg-gray rounded-b-xl  ${
                    touched && cities.length > 0 ? "border-t-[1px]" : ""
                  } border-white/50`}
                >
                  // displaying all cities
                  {cities.map((city, index) => (
                    <li
                      onClick={(e) => {
                        setCoordinates({ lat: city.lat, lon: city.lon });
                        setSelectedCity(`${city.name}, ${city.country}`);
                        setCity(city.name + " " + city.country);
                        setMobileSearch(false);
                      }}
                      key={index}
                      className="px-3 py-3 hover:bg-black/40 hover:cursor-pointer"
                    >
                      <div className="flex gap-3 items-center">
                        <FaLocationDot size={20} color="gray" />
                        <div>
                          <p>{city.name}</p>
                          <p className="text-white/50 leading-4">
                            {city.state} {city.country}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center relative gap-3 bg-[#B5A1D9] hover:bg-gray transition-all rounded-full py-[6px] px-3 cursor-pointer md:hidden">
        <FaLocationCrosshairs className="relative md:p-1 w-6 h-6" />
        <button>Current Location</button>
      </div>
    </nav>
  );
};

export default Navbar;
