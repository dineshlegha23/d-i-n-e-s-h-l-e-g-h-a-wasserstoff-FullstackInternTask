import React from "react";
import CurrentTemp from "./CurrentTemp";
import Forecast from "./Forecast";
const LeftPanel = () => {
  return (
    <div className="flex flex-col">
      <CurrentTemp />
      <p className="my-5">5 Days Forecast</p>
      <Forecast />
    </div>
  );
};

export default LeftPanel;
