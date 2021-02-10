import axios from "axios";
import {fetchData, fetchSuccess, fetchError} from "../store/actions/Profile";
import AsyncStorage from "@react-native-community/async-storage";
const STORAGE_KEY = "user_id";

function retrieveItem(key) {
  try {
    let retrievedItem = AsyncStorage.getItem(key);
    return retrievedItem;
  } catch (error) {
    console.log(error.message);
  }
  return;
}
let UserId = retrieveItem("user_id");
const actionCreator = (url) => (dispatch) => {
  return new Promise(() => {
    let data = new FormData();
    data.append("driver_id", "126");
    console.log(UserId._W);
    axios
      .post(url, data)
      .then((response) => {
        dispatch(fetchSuccess(response.data.data.driver));
      })
      .catch((error) => {
        dispatch(fetchError(error));
      });
  });
};

export default actionCreator;
