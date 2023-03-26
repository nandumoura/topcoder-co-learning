// Action Types
const LOGIN_SUCCESS = "my-app/auth/LOGIN_SUCCESS";
const LOGOUT_SUCCESS = "my-app/auth/LOGOUT_SUCCESS";

// Reducer
const initialState = {
  isAuthenticated: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

// Action Creators
export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}
