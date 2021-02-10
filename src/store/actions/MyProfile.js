import {api_url} from "../../apiEndPoints/Api";
import axios from "axios";
export const FETCH_DATA = "fetch_data";
import AsyncStorage from "@react-native-community/async-storage";
export const AUTHENTICATE = "AUTHENTICATE";
function retrieveItem(key) {
  try {
    let retrievedItem = AsyncStorage.getItem(key);
    return retrievedItem;
  } catch (error) {
    console.log(error.message);
  }
  return;
}
let get = retrieveItem("user_id");
let restaurant = retrieveItem("restaurant_id");
export const fetchProducts = (userId) => {
  // const get = AsyncStorage.getItem('user_id');
  console.log("vcget", get._W);
  let body = {
    driver_id: userId,
  };
  return async (dispatch) => {
    // any async code you want!

    try {
      const data = await axios.post(`${api_url}driverprofile`, body);
      console.log("jhdgfg", body, "data", data.data.data);

      if (!data.status) {
        throw new Error("Something went wrong!");
      }

      const resData = await data.data.data;
      const driver = await data.data.data.driver;
      const loadedProducts = [];

      console.log("resData", resData);
      console.log("loadedProducts", resData);
      console.log("restaurant_id", driver);
      // const restaurant_id = AsyncStorage.setItem(
      //   'restaurant_id',
      //   JSON.stringify(data.data.data.vendor.id),
      // );
      // console('hshshs---------->', restaurant_id);
      dispatch({
        type: FETCH_DATA,
        kapil: "ramram",
        profile: resData,
        driver: driver,

        // userProducts: loadedProducts.filter((prod) => prod.id === body),
      });
      // const restaurant_id = await AsyncStorage.setItem(
      //   "restaurant_id",
      //   JSON.stringify(data.data.data.vendor.id),
      // );
      // console.log("restaurant_idhj", restaurant_id);
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

// export const Editprofile = (name, gender, image) => {

//   console.log(body);
//   return async (dispatch) => {
//     console.log(data);

//     const {data} = await axios
//       .post(``, body, {
//         headers: {
//           "Content-Type": "application/json",
//           // "Content-Type": "multipart/form-data"
//         },
//       })
//       .then((response) => {
//         let resData = response.data;
//         console.log(resData);
//         if (!resData.status) {
//           const errorId = data.error.message;
//           let message = "Something went wrong!";
//           if (errorId === "EMAIL_NOT_FOUND") {
//             message = "This email could not be found!";
//           } else if (errorId === "INVALID_PASSWORD") {
//             message = "This password is not valid!";
//           }
//           throw new Error(message);
//         }
//       });
//     console.log("thest-------->", data);
//   };
// };

export const Editprofile = (name, gender, image) => {
  let getimage = File;
  getimage = image;
  let body = new FormData();
  body.append("driver_id", "126");
  body.append("name", name);
  body.append("gender", gender);
  body.append("profile_image", getimage);
  body.append("image", getimage);

  // let body = {
  //   driver_id: 64,
  //   name: name,
  //   gender: gender,
  //   image: image,
  // };
  console.log(body);
  return async (dispatch) => {
    const {data} = await axios.post(
      `http://zooneto.in/vooeat/api/auth/driver-update-profile`,
      body,
      {
        headers: {
          // "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
          // "Content-Length": "268",
          //   "Content-Length": "multipart/form-data"
        },
      },
    );
    console.log(body);
    if (!data.status) {
      const errorId = data.error.message;
      let message = "Something went wrong!";
      if (errorId === "EMAIL_NOT_FOUND") {
        message = "This email could not be found!";
      } else if (errorId === "INVALID_PASSWORD") {
        message = "This password is not valid!";
      }
      throw new Error(message);
    }

    console.log(data);
    console.log(data);
    // dispatch(authenticate(resData.localId, resData.idToken));
    // const expirationDate = new Date(
    //   new Date().getTime() + parseInt(data.expiresIn) * 1000
    // );
  };
};
