import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App/App";
import reducers from "./reducers";

const store = createStore(reducers);
// Our redux store is what holds all of our "state" information seperated into "x" amount of reducers
//    Think of the store like a library, and the reducers as the books

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);


//    ----HIGHLIGHTS----
//    (LINE 9) Here we initialize our redux store through createStore and pass through
//        our reducers, reducers are the pockets we create to hold specified groups of state
//    
//    (LINE 14) We then pass our initialized store to our most outer component (app) with the <Provider>
//        imported from react-redux, (react-redux is a library to integrate the two together
//        as redux is a standalone multi-purpose framework)
//        By doing so, <App> and all of its children componenets are allowed to connect to the store
//
//
//
//    ----EXTRA----
//    A second arg to createStore can be used to apply middleware
//    most commonly that arg is redux-thunk to enable async capabillities
//    this is useful when asking redux to wait for an api response
//      ---> import thunk from "redux-thunk";
//      ....
//      ---> createStore(reducers, applyMiddleware(thunk))