const INITIAL_STATE = {
  email: "",
  authenticated: false,
};
export function LoginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        email: action.email,
        authenticated: true,
      };
    default:
      return state;
  }
}
