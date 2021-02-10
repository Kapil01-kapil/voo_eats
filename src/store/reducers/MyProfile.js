import {FETCH_DATA} from "../actions/MyProfile";
const initialState = {
  profile: [],
  driver: [],
};

export default function (state = initialState, action) {
  console.log(" action.profile", action.profile);
  switch (action.type) {
    case FETCH_DATA:
      return {
        profile: action.profile,
        driver: action.driver,
      };

    default:
      return state;
  }
}
