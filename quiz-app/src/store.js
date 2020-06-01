import { applyMiddleware, compose, createStore } from "redux";
import { logger } from "redux-logger";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import quizSaga from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware, logger);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(middleware));
sagaMiddleware.run(quizSaga);
