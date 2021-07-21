import React from "react";
import ReactDOM from "react-dom";
import { BrowserRoute as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

// You'll need to wrap <App /> for routing to work
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
