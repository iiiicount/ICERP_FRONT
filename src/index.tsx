import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import "./assets/css/reset.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
