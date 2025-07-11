export const formReducer = (state, action) => {
  switch (action.type) {
    case "ERROR": {
      return { ...state, error: "Invalid" };
    }
    case "LOGOUT": {
      return { ...state, isLoggedIn: false, error: "" };
    }
    case "USERNAME": {
      return { ...state, name: action.payload };
    }
    case "EMAIL": {
      return { ...state, email: action.payload };
    }
    case "PASSWORD": {
      return { ...state, password: action.payload };
    }
    case "SUBMIT":
      return { ...state, isLoggedIn: true, name: "", email: "", password: "" };

    default:
      return state;
  }
};
