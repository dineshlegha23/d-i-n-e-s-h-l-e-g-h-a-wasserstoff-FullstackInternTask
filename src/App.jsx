import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="px-6 max-w-8xl mb-5">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
