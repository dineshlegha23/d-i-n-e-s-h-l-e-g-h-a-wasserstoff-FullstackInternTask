import React from "react";
import dotenv from "dotenv";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="px-6 max-w-8xl mb-5 md:px-2">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
