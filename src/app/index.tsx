import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./containers/App";
import "./assets/favicon.ico";

const container = document.getElementById("app");

hydrateRoot(
  container,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
