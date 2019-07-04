import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// *Routes
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./shared/routes/AppRoutes.routes";

ReactDOM.render(
  <Router>
    <AppRouter />
  </Router>,
  document.getElementById("root")
);
