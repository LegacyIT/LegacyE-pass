import React from "react";
import ReactDOM from "react-dom";
import "animate.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App style={{ zIndex: "1" }} />
  </React.StrictMode>,
  document.getElementById("root")
);
