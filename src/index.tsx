import React from "react";
import ReactDOM from "react-dom";
import DVRPlayer from "./DVR_App/DVRPlayer";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const baseUrl = "https://a-machinskiy.erlyvideo.ru";
const streamName = "test";

ReactDOM.render(
  <React.StrictMode>
    <DVRPlayer baseUrl={baseUrl} streamName={streamName} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
