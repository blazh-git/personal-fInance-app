import React, { Component, Fragment } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "../scss/_variables.scss"
import "../scss/main.scss"
import "../scss/_reset.scss"
import "../scss/_fonts.scss"

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App/>);