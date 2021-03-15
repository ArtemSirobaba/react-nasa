import React from "react";
import Mars from "./images/mars.jpg";
import Home from "./components/Home";

const App = () => {
  return (
    <div
      className="h-screen font-mono"
      style={{
        backgroundImage: `url(${Mars})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Home />
    </div>
  );
};

export default App;
