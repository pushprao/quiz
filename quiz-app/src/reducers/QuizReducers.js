const INITIAL_STATE = {
  questions: [],
};
export const QuizReducer = (state = INITIAL_STATE, action) => {
  console.log(
    "recieved action:" + action.type + " with payload:" + action.data
  );
  switch (action.type) {
    case "FETCH_QUIZ_LIST":
      return {
        ...state,
        questions: action.data,
      };
    default:
      return state;
  }
};
