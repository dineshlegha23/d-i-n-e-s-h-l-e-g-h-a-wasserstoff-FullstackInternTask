import React from "react";
import TodayHighlight from "./TodayHighlight";
import TodayAt from "./TodayAt";

const RightPanel = () => {
  return (
    <div className="overflow-hidden">
      <TodayHighlight />
      <TodayAt />
    </div>
  );
};

export default RightPanel;
