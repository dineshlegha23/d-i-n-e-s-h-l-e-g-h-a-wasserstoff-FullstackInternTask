import React from "react";

const SunriseSetFlex = ({ img, type, value }) => {
  return (
    <div className="flex gap-5 items-center mt-5">
      {img}
      <div className="flex flex-col">
        <p className="text-white/50 text-sm">{type}</p>
        <p className="text-2xl">{value}</p>
      </div>
    </div>
  );
};

export default SunriseSetFlex;
