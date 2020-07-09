// 1 of 6 in Suggested Flow
// make sure to run "npm i" in the project terminal before starting

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App/App";
import reducers from "./reducers";

// 1.) Create a redux store
//        we do this by using our imported createStore function and passing in our combined reducers
//        assign this createStore(reducers) fxn to a constant variable of any name below



// 2.) Pass store to <App /> with <Provider></Provider> componenet
//      now wrap our <App /> component with our imported provider component
//      the provider component takes one required prop: "store"
//      after wrapping app with provider, pass provider the prop store={storeVariable}

ReactDOM.render(
    <App />
  ,
  document.querySelector("#root")
);

//  PLEASE NOTE
//
//  The starter version of this app will not work up until step 2 