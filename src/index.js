import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";

import { App } from "./components/App";
import { AppProvider } from "./components/Context";

import "./index.scss";

const reactDom = document.getElementById("root");
const root = createRoot(reactDom);
root.render(
  <AppProvider>
    <Router>
      <App />
    </Router>
  </AppProvider>
);
