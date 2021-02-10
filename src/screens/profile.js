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
  ActivityIndicator,
  View,
  Image,
  Alert,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Text,
} from "react-native";
import {connect} from "react-redux";
import Toast from "react-native-simple-toast";
import {Colors} from "react-native/Libraries/NewAppScreen";
import Color from "../constants/Colors";
import styles from "../styles/style";
import Input from "../components/UI/Input";
import PostApi from "../apiEndPoints/PostApi";
import {api_url} from "../apiEndPoints/Api";
const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import * as productsActions from "../store/actions/MyProfile";

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
const Profile = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isState, setState] = useState(false);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const Profiles = useSelector((state) => state.MyProfile.profile);
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  const loadProducts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(productsActions.fetchProducts(userId));
      console.log("product", "hjgkj", Profile);
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    console.log("kapil", "kapil", Profile);
    setIsLoading(true);
    loadProducts().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadProducts]);

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

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (!isLoading && Profiles.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No products found. Maybe start adding some!</Text>
      </View>
    );
  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Color.red} />
      <SafeAreaView style={styles.maincontainer}>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Text
                style={{color: Color.red, fontSize: 24, fontWeight: "bold"}}>
                {Profiles.name}
              </Text>
              <View
                style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{color: Color.red, fontSize: 16}}>
                  {Profiles.email}
                </Text>
                <Text
                  style={{color: "black", fontSize: 16}}
                  onPress={() => {
                    props.navigation.navigate("EditProfile");
                  }}>
                  Edit
                </Text>
              </View>
            </View>

            <View style={profile.profile_card}>
              <View style={profile.spacing}>
                <Text style={{fontSize: 16}}>Full Name</Text>

                <Text style={{color: Color.red, fontSize: 16}}>
                  {Profiles.name}
                </Text>
              </View>
              <View style={profile.spacing}>
                <Text style={{fontSize: 16}}>Email</Text>
                <Text style={{color: Color.red, fontSize: 16}}>
                  {Profiles.email}
                </Text>
              </View>
              <View style={profile.spacing}>
                <Text style={{fontSize: 16}}>Gender</Text>
                {Profiles.driver.gender === null ? (
                  <Text style={{color: Color.red, fontSize: 16}}>undefine</Text>
                ) : (
                  <Text style={{color: Color.red, fontSize: 16}}>
                    {Profiles.driver.gender}
                  </Text>
                )}
              </View>
              <View style={profile.spacing}>
                <Text style={{fontSize: 16}}>Licence No.</Text>
                <Text style={{color: Color.red, fontSize: 16}}>
                  {Profiles.driver.licence_no}
                </Text>
              </View>
              <View style={profile.spacing}>
                <Text style={{fontSize: 16}}>Vehicle No.</Text>
                <Text style={{color: Color.red, fontSize: 16}}>
                  {Profiles.driver.vehicle_no}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const profile = StyleSheet.create({
  profile_card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 30,
    borderRadius: 14,
  },
  spacing: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
});
const mapDispatchToProps = (dispatch) => ({
  PostApi: (url) => dispatch(PostApi(url)),
});

const mapStateToProps = (state) => ({
  data: state.apiReducer.data,
  error: state.apiReducer.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
