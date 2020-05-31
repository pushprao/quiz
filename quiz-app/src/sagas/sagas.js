import { call, put, takeLatest } from "redux-saga/effects";
import * as Api from "../apis/Api";

function* fetchQuestions(action) {
  try {
    yield put({ type: "FETCH_ONGOING" });
    const data = yield call(Api.fetchQuestions);
    yield put({
      type: "FETCH_QUIZ_LIST_SUCCEED",
      data,
    });
  } catch (e) {
    yield put({ type: "FETCH_QUIZ_LIST_FAILED", message: e.message });
  }
}

function* quizSaga() {
  yield takeLatest("FETCH_QUIZ_LIST", fetchQuestions);
}

export default quizSaga;
