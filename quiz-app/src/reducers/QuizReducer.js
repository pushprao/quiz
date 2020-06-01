const INITIAL_STATE = {
  questions: [],
  answers: [],
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
    case "UPDATE_ANSWERS":
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.answer.questionId]: action.answer.option,
        },
      };
    case "UPDATE_SCORE":
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
