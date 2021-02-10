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
  TouchableOpacity,
  Alert,
  View,
  StatusBar,
  Image,
  Text,
  TextInput,
  Button,
} from "react-native";
import styles from "../styles/style";
import Toast from "react-native-simple-toast";
import Input from "../components/UI/Input";
import Color from "../constants/Colors";
import {useDispatch} from "react-redux";
import * as authActions from "../store/actions/auth";
// import { connect } from "react-redux";
// import { fetchLogin } from '../store/actions/auth';
// import { clearLoginErrorMessage } from '../store/actions/clearErrorMessageAction';
// import axios from 'axios';
import ImagePicker from "react-native-image-picker";
// import DocumentPicker from 'react-native-document-picker';
// import api_url from '../apiEndPoints/Api'

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

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

const register = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isSignup, setIsSignup] = useState(false);
  const [isvehicle_image, setVehicle_image] = useState(null);
  const [islicence_no, setLicence_no] = useState(null);
  const [isShowImage, setShowImage] = useState(null);
  const [isShowvehicleImage, setShowvehicleImage] = useState(null);
  let [singleFile, setSingleFile] = useState(null);
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      name: "",
      email: "",
      password: "",
      mobile_no: "",
      licence_no: "",
      vehicle_no: "",
      vehicle_image: File,
      licence_image: File,
    },
    inputValidities: {
      email: false,
      password: false,
      mobile_no: false,
      licence_no: false,
      vehicle_no: false,
      name: false,
      vehicle_image: false,
      licence_image: false,
    },
    formIsValid: false,
  });

  function licence_image() {
    let options = {
      title: "You can choose one image",
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      mediaType: "photo",
      storageOptions: {
        skipBackup: false,
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        setLicence_no(response);
        setShowImage(response.uri);
      }
      // if (response.didCancel) {
      //   console.log('User cancelled photo picker');
      //   Alert.alert('You did not select any image');
      // } else if (response.error) {
      //   console.log('ImagePicker Error: ', response.error);
      // } else if (response.customButton) {
      //   console.log('User tapped custom button: ', response.customButton);
      // } else {
      //   //let source = {uri: response.fileName};
      //   if (response.uri) {
      //     setLicence_no(response);
      //   }
      //   // ADD THIS

      // }
    });
  }

  function vehicleImg_Upload() {
    let options = {
      title: "You can choose one image",
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      mediaType: "photo",
      storageOptions: {
        skipBackup: false,
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        setVehicle_image(response);
        setShowvehicleImage(response.uri);
      }
      // if (response.didCancel) {
      //   console.log('User cancelled photo picker');
      //   Alert.alert('You did not select any image');
      // } else if (response.error) {
      //   console.log('ImagePicker Error: ', response.error);
      // } else if (response.customButton) {
      //   console.log('User tapped custom button: ', response.customButton);
      // } else {
      //   debugger
      //   // let source = {uri: response.fileName};
      //   let imageData = response.fileName
      //   // ADD THIS
      //   setVehicle_image(imageData);
      // }
    });
  }

  // useEffect(() => {
  //   if (error) {
  //     console.log('An Error Occurred!', error, [{ text: 'Okay' }]);
  //     Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
  //   }
  // }, [error]);

  // const authHandler = async () => {
  //   let action;
  //   action = authActions.register(

  //   );

  //   setError(null);
  //   setIsLoading(true);
  //   try {
  //     await dispatch(action);
  //     console.log("gf");
  //   } catch (err) {
  //     setError(err.message);
  //     setIsLoading(false);
  //   }
  // };

  // const saveData = () => {

  //   let reg = /^[0]?[789]\d{9}$/;
  //   if (reg.test(formState.inputValues.mobile_no) == '') {
  //     setError(null);
  //     setIsLoading(true);
  //   } else if (formState.inputValues.email == '') {

  //     setError(null);
  //     setIsLoading(true);
  //   }
  //   else if (formState.inputValues.name == '') {

  //     setError(null);
  //     setIsLoading(true);
  //   }
  //   else if (formState.inputValues.vehicle_no == '') {

  //     setError(null);
  //     setIsLoading(true);
  //   }
  //   else if (formState.inputValues.licence_no == '') {

  //     setError(null);
  //     setIsLoading(true);
  //   }
  //   else if (formState.inputValues.password == '') {

  //     setError(null);
  //     setIsLoading(true);
  //   }
  //   else {
  //     registerCall();
  //   }
  // };

  // let selectFile = async () => {
  //   //Opening Document Picker to select one file
  //   try {
  //     const res = await DocumentPicker.pick({
  //       //Provide which type of file you want user to pick
  //       type: [DocumentPicker.types.allFiles],
  //       //There can me more options as well
  //       // DocumentPicker.types.allFiles
  //       // DocumentPicker.types.images
  //       // DocumentPicker.types.plainText
  //       // DocumentPicker.types.audio
  //       // DocumentPicker.types.pdf
  //     });
  //     //Printing the log realted to the file
  //     console.log('res : ' + JSON.stringify(res));
  //     //Setting the state to show single file attributes
  //     setSingleFile(res);
  //   } catch (err) {
  //     setSingleFile(null);
  //     //Handling any exception (If any)
  //     if (DocumentPicker.isCancel(err)) {
  //       //If user canceled the document selection
  //       alert('Canceled from single doc picker');
  //     } else {
  //       //For Unknown Error
  //       alert('Unknown Error: ' + JSON.stringify(err));
  //       throw err;
  //     }
  //   }
  // };

  // const registerCall = () => {
  //   debugger
  //   let licenceImage = File
  //   let vehicleImage = File
  //   licenceImage = islicence_no.fileName
  //   vehicleImage = islicence_no.fileName

  //   let data = {
  //     name: 'rajnikantlodhi',
  //     email: 'rajnikantlodhi7@gmail.com',
  //     mobile_no: '8630787536',
  //     licence_no: '800602210',
  //     vehicle_no: '800602210',
  //     password: 'rajni@143',
  //     licence_image: licenceImage,
  //     vehicle_image: vehicleImage,
  //   }
  //   axios.post(api_url + 'driveregistration', data, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       // "Content-Type": "multipart/form-data"
  //     }
  //   })
  //     .then(function (responseData) {
  //       console.log(JSON.stringify(responseData.data));
  //       if (responseData.status === 200) {
  //         this.props.navigation.navigate('login');
  //         this.props.saveUser(responseData.data);
  //         Toast.show(responseData.message);
  //       } else {
  //         console.log(JSON.stringify(responseData));
  //         Toast.show('Authorization failed');
  //       }

  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       Toast.show('result:' + error);
  //     });

  // }

  const authHandler = async () => {
    let action;
    let licenceImage = File;
    let vehicleImage = File;
    licenceImage = islicence_no.fileName;
    vehicleImage = islicence_no.fileName;
    action = authActions.driverRegistration(
      formState.inputValues.name,
      formState.inputValues.email,
      formState.inputValues.mobile_no,
      formState.inputValues.password,
      formState.inputValues.licence_no,
      formState.inputValues.vehicle_no,

      licenceImage,
      vehicleImage,
    );
    // name, email, mobile_no, password, licence_no, vehicle_no, vehicle_image, licence_image
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      console.log("gf");
      props.navigation.navigate("login");
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
  //   if (props.userInfo) {
  //   props.navigation.navigate("OrderScreen")
  //   }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Color.red} />
      <SafeAreaView style={styles.maincontainer}>
        <View style={styles.container}>
          <Text style={login.loginText}>Register</Text>
          <ScrollView>
            <View>
              <Input
                id="name"
                label="Full name"
                keyboardType="email-address"
                placeholder="Abhishek Gautam"
                required
                autoCapitalize="none"
                errorText="Please enter a valid email address."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
            </View>
            <View>
              <Input
                id="email"
                label="Email Address"
                keyboardType="email-address"
                placeholder="Abhishek Gautam"
                required
                email
                placeholder="info@vooeats.com"
                autoCapitalize="none"
                errorText="Please enter a valid email address."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
            </View>
            <View>
              <Input
                id="mobile_no"
                label="Mobile No."
                keyboardType="number-pad"
                placeholder="9111121265"
                required
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
            <View>
              <Input
                id="licence_no"
                label="Licence No."
                keyboardType="number-pad"
                placeholder="YXZ!qwewrdf"
                required
                minLength={5}
                autoCapitalize="none"
                errorText="Please enter a valid password."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
            </View>
            <View>
              <Input
                id="vehicle_no"
                label="Vechicle No."
                keyboardType="number-pad"
                placeholder="YXZ!qwewrdf"
                required
                minLength={5}
                autoCapitalize="none"
                errorText="Please enter a valid password."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
            </View>

            <TouchableOpacity
              style={{marginTop: 10, borderRadius: 10}}
              onPress={licence_image}>
              <View style={{justifyContent: "space-between"}}>
                <Text>Upload Licence Image</Text>
                {islicence_no === null ? (
                  <Image
                    style={login.gallary}
                    source={require("../assets/icons/5.png")}
                  />
                ) : (
                  // <Text>Data</Text>
                  <Image style={login.gallary} source={{uri: isShowImage}} />
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 20, borderRadius: 10}}>
              <View style={{justifyContent: "space-between"}}>
                <Text>Upload Vehicle Image</Text>
                <TouchableOpacity onPress={vehicleImg_Upload}>
                  {isvehicle_image === null ? (
                    <Image
                      style={login.gallary}
                      source={require("../assets/icons/5.png")}
                    />
                  ) : (
                    <Image
                      style={login.gallary}
                      source={{uri: isShowvehicleImage}}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "#c1272d",
                borderRadius: 4,
                marginTop: 20,
              }}
              onPress={authHandler}>
              <Text style={login.signin}>Register</Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 20,
              }}>
              <Text>Already a member,</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Dreawer")}>
                <Text style={{color: "#c1272d"}}> Login</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default register;

const login = StyleSheet.create({
  loginText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },

  signin: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    padding: 10,
    fontSize: 24,
    textTransform: "capitalize",
  },
  gallary: {
    width: "100%",
    height: 180,
    marginTop: 10,
    resizeMode: "stretch",
  },
});
