import { combineReducers } from "redux";
import { QuizReducer } from "./QuizReducer";
import { LoginReducer } from "./LoginReducer";

export default combineReducers({ quiz: QuizReducer, login: LoginReducer });
