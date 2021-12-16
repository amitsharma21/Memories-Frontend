import * as actionTypes from "../constants/actionTypes";

export default (state = { authData: null }, action) => {
  switch (action.type) {
    case actionTypes.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case actionTypes.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
