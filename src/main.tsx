import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebSocketComponent from "./WebSocketComponent .tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WebSocketComponent />
  </React.StrictMode>
);
