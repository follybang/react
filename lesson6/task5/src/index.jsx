import React from "react";
import ReactDOM from "react-dom";
import Auth from "./Auth.jsx";
import "./index.scss";

const rootEl = document.querySelector("#root");

ReactDOM.render(<Auth isLoggedIn={false} />, rootEl);
