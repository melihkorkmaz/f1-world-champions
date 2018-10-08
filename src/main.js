import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import App from "./App";
import "./assets/scss/style.scss";

import store from "./configureStore";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
