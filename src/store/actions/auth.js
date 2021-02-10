import React, {useState, useEffect, useReducer, useCallback} from "react";
import axios from "axios";
import {api_url} from "../../apiEndPoints/Api";
import AsyncStorage from "@react-native-community/async-storage";
export const FETCH_DATA = "fetch_data";
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
let UserId = retrieveItem("userData");
let restaurant = retrieveItem("restaurant_id");
export const authenticate = (userId, token) => {
  return {type: AUTHENTICATE, userId: userId, token: token};
};

export const login = (username, password) => {
  let body = {
    username: username,
    password: password,
    islogin: "email",
  };
  return async (dispatch) => {
    const {data} = await axios.post(`${api_url}login`, body);
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
    console.log("resData", data);
    dispatch(authenticate(data.user_id, data.token));
    console.log("dispatch", dispatch(authenticate(data.user_id, data.token)));
    // const expirationDate = new Date(
    //   new Date().getTime() + parseInt(data.expiresIn) * 1000,
    // );
    saveDataToStorage(data.token, data.user_id);
    console.log(data.token, data.user_id);
    console.log(data.user_id);

    // dispatch(authenticate(resData.localId, resData.idToken));
    // const expirationDate = new Date(
    //   new Date().getTime() + parseInt(data.expiresIn) * 1000
    // );

    const kapil = await AsyncStorage.setItem(
      "user_id",
      JSON.stringify(data.user_id),
    );
    console.log(
      "kapil",
      AsyncStorage.setItem("user", JSON.stringify(data.user_id)),
      kapil,
    );
    console.log("datUset", data.user_id);
    const get = await AsyncStorage.getItem("user_id");
    console.log("getItem", get);
  };
};

const saveDataToStorage = (token, userId) => {
  AsyncStorage.setItem("userData", userId);

  console.log("AsyncStorage", AsyncStorage.setItem("userData", userId));
};
export const driverRegistration = (
  name,
  email,
  mobile_no,
  password,
  licence_no,
  vehicle_no,
  vehicle_image,
  licence_image,
) => {
  let body = {
    name: name,
    email: email,
    mobile_no: mobile_no,
    licence_no: licence_no,
    vehicle_no: vehicle_no,
    vehicle_image: vehicle_image,
    licence_image: licence_image,
    password: password,
  };
  return async (dispatch) => {
    debugger;
    console.log(body);

    const {data} = await axios
      .post(`http://zooneto.in/vooeat/api/auth/driveregistration`, body, {
        headers: {
          "Content-Type": "application/json",
          // "Content-Type": "multipart/form-data"
        },
      })
      .then(
        (response) => {
          let resData = response.data;
          console.log(resData);
          if (resData.status != 200) {
            const errorId = data.error.message;
            let message = "Something went wrong!";
            if (errorId === "EMAIL_NOT_FOUND") {
              message = "This email could not be found!";
            } else if (errorId === "INVALID_PASSWORD") {
              message = "This password is not valid!";
            }
            throw new Error(message);
          } else {
            AsyncStorage.setItem("user_id", resData.user_id);
            props.navigation.navigate("login");
          }
        },
        (error) => {
          console.log(error);
        },
      );
    console.log("thest-------->", data);

    // if (data.status != 200 ) {
    //   const errorId = data.error.message;
    //   let message = 'Something went wrong!';
    //   if (errorId === 'EMAIL_NOT_FOUND') {
    //     message = 'This email could not be found!';
    //   } else if (errorId === 'INVALID_PASSWORD') {
    //     message = 'This password is not valid!';
    //   }
    //   throw new Error(message);
    // }
    // AsyncStorage.setItem("user_id", data.User_Id);
    // console.log(AsyncStorage.setItem("user_id", data.User_Id));
    //get id
    // AsyncStorage.getItem("user_id")
    // console.log(AsyncStorage.getItem("user_id"));
  };
};
export const fetchProducts = () => {
  // const get = AsyncStorage.getItem('user_id');
  // console.log("vcget", get._W);
  let body = {
    driver_id: "64",
  };
  return async (dispatch) => {
    // any async code you want!

    try {
      const data = await axios.post(`${api_url}driverprofile`, body);
      console.log("jhdgfg", body, "data", data.data);

      if (!data.status) {
        throw new Error("Something went wrong!");
      }

      const resData = await data.data;
      const vendor = await data.data.driver;
      const loadedProducts = [];

      console.log("resData", resData);
      console.log("loadedProducts", resData);
      console.log("restaurant_id", data.data.driver.id);
      // const restaurant_id = AsyncStorage.setItem(
      //   'restaurant_id',
      //   JSON.stringify(data.data.data.vendor.id),
      // );
      // console('hshshs---------->', restaurant_id);
      dispatch({
        type: FETCH_DATA,
        kapil: "ramram",
        profile: resData,
        vendor: vendor,

        // userProducts: loadedProducts.filter((prod) => prod.id === body),
      });
      const restaurant_id = await AsyncStorage.setItem(
        "restaurant_id",
        JSON.stringify(data.data.data.vendor.id),
      );
      console.log("restaurant_idhj", restaurant_id);
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};
