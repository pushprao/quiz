import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import quizSaga from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware, logger);

export default createStore(rootReducer, middleware);
sagaMiddleware.run(quizSaga);
