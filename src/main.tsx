import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const base_url = import.meta.env.BASE_URL;

const base_url_bare = import.meta.env.VITE_BASE_URL;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={base_url}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
