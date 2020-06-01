const INITIAL_STATE = {
  questions: [],
  error: null,
  loading: false,
  quizCompleted: false,
  score: 0,
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
    case "CORRECT_ANSWER":
      return {
        ...state,
        score: state.score + 1,
      };
    case "QUIZ_COMPLETED":
      return {
        ...state,
        quizCompleted: true,
      };
    default:
      return state;
  }
}
