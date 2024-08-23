import React from "react";

const AQIFlexCol = ({ type, value }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-white/50 text-xs">{type}</p>
      <p className="text-2xl">{value}</p>
    </div>
  );
};

export default AQIFlexCol;
