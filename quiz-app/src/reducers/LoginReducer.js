const INITIAL_STATE = {
  email: "",
};
export function QuizReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        email: action.email,
      };
    default:
      return state;
  }
}
