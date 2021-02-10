import {AUTHENTICATE, FETCH_DATA} from "../actions/auth";

const initialState = {
  userId: null,
  token: null,
  profile: [],
};

export default (state = initialState, action) => {
  console.log("profile", action.profile);
  switch (action.type) {
    case AUTHENTICATE:
      return {
        userId: action.userId,
        token: action.token,
      };
    case FETCH_DATA:
      return {
        profile: action.profile,
      };
    default:
      return state;
  }
  c;
};
