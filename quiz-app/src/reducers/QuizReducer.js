const INITIAL_STATE = {
  questions: [],
  error: null,
  loading: false,
};
export function QuizReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_QUIZ_LIST_SUCCEED":
      return {
        ...state,
        questions: action.data.quizList,
        user: action.data.author,
        error: null,
        loading: false,
      };
    case "FETCH_QUIZ_LIST_FAILED":
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case "FETCH_ONGOING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
