import React from "react";

const ExtraDetails = ({ text, value, img, measurement }) => {
  return (
    <div className="bg-black/40 p-3 rounded-xl">
      <p className="text-white/50 text-sm">{text}</p>
      <div className="flex justify-between items-center  mt-2">
        {img}
        <div className="text-3xl flex items-end">
          <p>{value}</p>
          <div className="text-lg">
            {measurement === "oC" ? (
              <p className="text-sm inline-block">
                <sup className="-top-3">O</sup>C
              </p>
            ) : (
              <p>{measurement}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraDetails;
