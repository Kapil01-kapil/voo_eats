import React, {useState, useEffect, useReducer, useCallback} from "react";
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  ActivityIndicator,
  Text,
  CheckBox,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import {RadioButton} from "react-native-paper";
import ImagePicker from "react-native-image-picker";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import Icon from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-community/async-storage";
import {useSelector, useDispatch} from "react-redux";
import HeaderButton from "../components/UI/HeaderButton";
import {Avatar} from "react-native-elements";
import Input from "../components/UI/Input";
import Card from "../components/UI/Card";
import Colors from "../constants/Colors";
import * as MyProfile from "../store/actions/MyProfile";
import * as productsActions from "../store/actions/MyProfile";
const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";
const STORAGE_KEY = "@save_age";
async function retrieveItem(key) {
  try {
    let retrievedItem = await AsyncStorage.getItem(key);
    return retrievedItem;
  } catch (error) {
    console.log(error.message);
  }
  return;
}
let mobile = retrieveItem(STORAGE_KEY);
let UserId = retrieveItem("id_customer");
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

const AuthScreen = (props) => {
  const [isSelected, setSelection] = useState(false);
  const [icon, setIcon] = useState("md-pencil-sharp");
  const [isEditable, setisEditable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [value, setValue] = useState("male");
  const [imageSource, setImageSource] = useState(null);
  const Profiles = useSelector((state) => state.MyProfile.profile);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      name: Profiles.name,
    },
    inputValidities: {
      name: false,
    },
    formIsValid: false,
  });
  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", error, [{text: "Okay"}]);
    }
  }, [error]);

  function selectImage() {
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
        // ADD THIS
        setImageSource(response);
      }
    });
  }
  const authHandler = async () => {
    let action;
    let image = File;

    image = imageSource.fileName;
    console.log(imageSource.fileName);

    action = MyProfile.Editprofile(formState.inputValues.name, value, image);
    // name, email, mobile_no, password, licence_no, vehicle_no, vehicle_image, licence_image
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      props.navigation.navigate("Profile");
      console.log("gf");
      //props.navigation.navigate("login");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  /* changeIcon = async () => {
    icon !== 'md-brush'
      ? (seIcon('md-pencil-sharp'), isEditable(false))
      : (seIcon('md-checkmark-outline'), isEditable(true));
  };*/
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
  // if (isLoading) {
  //   return (
  //     <View style={styles.centered}>
  //       <ActivityIndicator size="large" color={Colors.primary} />
  //     </View>
  //   );
  // }

  // if (!isLoading && Profiles.length === 0) {
  //   return (
  //     <View style={styles.centered}>
  //       <Text>No products found. Maybe start adding some!</Text>
  //     </View>
  //   );
  // }
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={10} style={styles.screen}>
      <View style={styles.gradient}>
        <Card style={styles.authContainer}>
          <ScrollView>
            <View style={styles.logo}>
              <View>
                {imageSource === null ? (
                  <Avatar
                    rounded
                    size="xlarge"
                    resizeMode="contain"
                    source={{
                      uri:
                        "http://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg",
                    }}
                  />
                ) : (
                  <Avatar
                    rounded
                    size="xlarge"
                    resizeMode="contain"
                    source={{uri: imageSource.uri}}
                    resizeMode="contain"
                  />
                )}

                <TouchableOpacity
                  onPress={selectImage}
                  style={{
                    position: "absolute",
                    right: 0,
                    borderRadius: 50,
                    width: 50,
                    height: 50,
                    shadowRadius: 8,
                    elevation: 5,
                    backgroundColor: "#FFF",
                    borderColor: "white",
                    shadowColor: "black",
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                  }}>
                  <Icon name="camera" size={25} color={Colors.red} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{marginTop: 10, fontSize: 20}}>Basic Info</Text>
            <View>
              <Input
                id="name"
                label="Full Name"
                required
                placeholder="Kapil Vidua"
                autoCapitalize="none"
                onInputChange={inputChangeHandler}
                initialValue={Profiles.name}
              />
              <Input
                id="Email"
                label="Email"
                required
                editable={false}
                selectTextOnFocus={false}
                autoCapitalize="none"
                onInputChange={inputChangeHandler}
                initialValue={Profiles.email}
              />
              <Input
                id="Mobile"
                label="Mobile"
                required
                editable={false}
                selectTextOnFocus={false}
                autoCapitalize="none"
                onInputChange={inputChangeHandler}
                initialValue={Profiles.driver.mobile_no}
              />
              <RadioButton.Group
                onValueChange={(value) => setValue(value)}
                value={value}>
                <View style={{flexDirection: "row", marginTop: 10}}>
                  <View style={{flexDirection: "row", marginRight: 10}}>
                    <Text style={{marginTop: 5}}>Male</Text>
                    <RadioButton
                      color={Colors.red}
                      uncheckedColor={Colors.red}
                      value="male"
                    />
                  </View>
                  <View style={{flexDirection: "row"}}>
                    <Text style={{marginTop: 5}}>Female</Text>
                    <RadioButton
                      color={Colors.red}
                      uncheckedColor={Colors.red}
                      value="female"
                    />
                  </View>
                </View>
              </RadioButton.Group>
            </View>
          </ScrollView>
        </Card>
        <TouchableOpacity
          onPress={authHandler}
          style={{
            width: "90%",
            height: "8%",
            backgroundColor: Colors.red,
            justifyContent: "center",
            marginTop: 20,
            borderRadius: 10,
            alignItems: "center",
          }}>
          <Text style={{color: "white", fontSize: 15, fontWeight: "bold"}}>
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

AuthScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Profile",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName={
            Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
          }
          iconSize={30}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  gradient: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
  },
  authContainer: {
    width: "90%",
    maxWidth: 400,
    maxHeight: "100%",
    padding: 20,
    marginTop: 10,
  },

  buttonContainer: {
    marginTop: 10,
    alignItems: "flex-end",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    color: Colors.light_gray,
    fontSize: 13,
  },
  headerStyle: {
    resizeMode: "cover",
    width: 150,
    height: 150,
  },
  containerSideMenu: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    textAlign: "center",
  },
});
export default AuthScreen;
