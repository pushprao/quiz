import { combineReducers } from "redux";
import { QuizReducer } from "./QuizReducers";

export default combineReducers({ quiz: QuizReducer });
