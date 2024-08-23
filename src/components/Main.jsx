import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const Main = () => {
  return (
    <div className="flex gap-10 mt-8 justify-center [@media(max-width:550px)]:flex-col">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default Main;
