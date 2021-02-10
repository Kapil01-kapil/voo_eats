/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  StatusBar,
  Text,
} from "react-native";
import {isEmpty} from "lodash";
import {useSelector, useDispatch} from "react-redux";
import {Colors} from "react-native/Libraries/NewAppScreen";
import Color from "../constants/Colors";
const Home = ({navigation}) => {
  const Token = useSelector((state) => state.auth.token);
  useEffect(() => {
    setTimeout(() => {
      if (isEmpty(Token)) {
        navigation.navigate("login");
      } else {
        navigation.navigate("Dreawer");
      }
    }, 5000);
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Color.red} />
      <SafeAreaView style={styles.maincontainer}>
        <View style={styles.logocenter}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/logo.png")}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  logocenter: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  tinyLogo: {
    width: 180,
    height: 117,
  },
  logocaption: {
    fontSize: 18,
    color: "#c91e06",
    fontWeight: "600",
  },
});

export default Home;
