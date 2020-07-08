import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App/App";
import reducers from "./reducers";

const store = createStore(reducers);
// a second arg to createStore is for applying middleware
// most commonly that arg is redux-thunk to enable async capabillities

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
