import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "../src/pages/Home";
import Container1 from "../src/components/Project/container1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);
