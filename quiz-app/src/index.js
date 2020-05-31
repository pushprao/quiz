import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import QuizApp from "./QuizApp";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { QuizReducer } from "./reducers/QuizReducers";

const reducers = combineReducers({ quiz: QuizReducer });

//logger middleware
const logger = (store) => (next) => (action) => {
  console.log("action fired ", action);
  next(action);
};

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log("store changed ", store.getState());
});

// test actions
// store.dispatch({
//   type: "FETCH_QUIZ_LIST",
//   data: ["aaa", "bbb"],
// });

ReactDOM.render(
  <React.StrictMode>
    <QuizApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
