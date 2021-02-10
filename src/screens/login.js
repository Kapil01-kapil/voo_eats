/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useReducer, useCallback} from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Alert,
  View,
  StatusBar,
  Text,
  TextInput,
  Button,
  PushNotification,
} from "react-native";

import firebase from "@react-native-firebase/app";
import {TouchableOpacity} from "react-native-gesture-handler";
import styles from "../styles/style";
import Input from "../components/UI/Input";
import Colors from "../constants/Colors";
import {useDispatch} from "react-redux";
import * as authActions from "../store/actions/auth";
import {connect} from "react-redux";
import {fetchLogin} from "../store/actions/auth";
const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";
import axios from "axios";
import Toast from "react-native-simple-toast";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};
const Login = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      username: "",
      password: "",
    },
    inputValidities: {
      username: false,
      password: false,
    },
    formIsValid: false,
  });
  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", error, [{text: "Okay"}]);
      console.log(error);
    }
  }, [error]);

  const authHandler = async () => {
    let action;
    action = authActions.login(
      formState.inputValues.username,
      formState.inputValues.password,
    );

    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      console.log("gf");
      props.navigation.navigate("Dreawer");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState],
  );

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.red} />
      <SafeAreaView style={styles.maincontainer}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={login.loginText}>Sign In</Text>

            <View>
              <Input
                id="username"
                label="Email ID"
                keyboardType="email-address"
                placeholder="info@vooeats.com"
                required
                email
                autoCapitalize="none"
                errorText="Please enter a valid email address."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
            </View>
            <View>
              <Input
                id="password"
                label="Password"
                keyboardType="default"
                secureTextEntry
                placeholder="**********"
                required
                minLength={5}
                autoCapitalize="none"
                errorText="Please enter a valid password."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
            </View>
            <TouchableOpacity>
              <Text style={login.forgot}>Forgot Password ?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={authHandler}
              style={{
                backgroundColor: "#c1272d",
                borderRadius: 4,
                marginTop: 30,
              }}>
              <Text style={login.signin}>sign in</Text>
            </TouchableOpacity>

            <Text style={login.or}>or</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: "10%",
              }}>
              <Text>Not yet a member,</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("register")}>
                <Text style={{color: "#c1272d"}}> Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const login = StyleSheet.create({
  loginText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: "10%",
  },
  forgot: {
    textAlign: "right",
    fontWeight: "bold",
    marginTop: 10,
  },
  signin: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    padding: 10,
    fontSize: 18,
    textTransform: "capitalize",
  },
  or: {
    fontSize: 30,
    color: "#aaa",
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Login;
