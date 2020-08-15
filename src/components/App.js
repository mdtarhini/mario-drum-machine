import React from "react";

import DrumMachine from "./DrumMachine";
import Display from "./Display";
import Recorder from "./Recorder";
import "./App.css";
const App = () => {
  return (
    <div className="container-fluid  d-flex" style={{ height: "100vh" }}>
      <div className="m-auto p-auto main">
        <Display />
        <DrumMachine />
      </div>
    </div>
  );
};

export default App;
