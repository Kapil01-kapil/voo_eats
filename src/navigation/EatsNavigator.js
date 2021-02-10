/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  StatusBar,
  StyleSheet,
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
  YellowBox,
  Dimensions,
} from "react-native";
import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Color from "../constants/Colors";
import Home from "../screens/home";
import Login from "../screens/login";
import Register from "../screens/register";
import Dashboard from "../screens/dashboard";
import Upcoming from "../screens/upcoming";
import Pending from "../screens/pending_order";
import Cancelled from "../screens/cancelled_order";
import Delivered from "../screens/delivered_order";
import Earning from "../screens/earning";
import Profile from "../screens/profile";
import Track from "../screens/track";
import CustomerDrawer from "./CustomDrawer";
import EditProfile from "../screens/EditProfile";
const ScreenWidth = Dimensions.get("window").width;
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Color.red : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Color.red,
};
const StackDreaewer = createStackNavigator();
const StackDreaewerScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Stack.Navigator initialRouteName="dashboard">
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Upcoming Order"
          component={Upcoming}
          options={defaultNavOptions}
        />
        <Stack.Screen
          name="Pending Order"
          component={Pending}
          options={defaultNavOptions}
        />
        <Stack.Screen
          name="Cancelled Order"
          component={Cancelled}
          options={defaultNavOptions}
        />
        <Stack.Screen
          name="Delivered Order"
          component={Delivered}
          options={defaultNavOptions}
        />
        <Stack.Screen
          name="My Earning"
          component={Earning}
          options={defaultNavOptions}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={defaultNavOptions}
        />
        <Stack.Screen
          name="Track Address"
          component={Track}
          options={defaultNavOptions}
        />
      </Stack.Navigator>
    </>
  );
};
const EatsNavigatorScreen = createStackNavigator();
const EatsNavigator = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <EatsNavigatorScreen.Navigator initialRouteName="Home">
        <EatsNavigatorScreen.Screen
          name="Home"
          component={Home}
          options={{title: "Welcome", headerShown: false}}
        />
        <EatsNavigatorScreen.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <EatsNavigatorScreen.Screen
          name="register"
          component={Register}
          options={{headerShown: false}}
        />
        <EatsNavigatorScreen.Screen
          name="dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <EatsNavigatorScreen.Screen
          name="Upcoming Order"
          component={Upcoming}
          options={defaultNavOptions}
        />
        <EatsNavigatorScreen.Screen
          name="Pending Order"
          component={Pending}
          options={defaultNavOptions}
        />
        <EatsNavigatorScreen.Screen
          name="Cancelled Order"
          component={Cancelled}
          options={defaultNavOptions}
        />
        <EatsNavigatorScreen.Screen
          name="Delivered Order"
          component={Delivered}
          options={defaultNavOptions}
        />
        <EatsNavigatorScreen.Screen
          name="My Earning"
          component={Earning}
          options={defaultNavOptions}
        />
        <EatsNavigatorScreen.Screen
          name="Profile"
          component={Profile}
          options={defaultNavOptions}
        />
        <EatsNavigatorScreen.Screen
          name="Track Address"
          component={Track}
          options={defaultNavOptions}
        />

        <EatsNavigatorScreen.Screen
          name="EditProfile"
          component={EditProfile}
          options={defaultNavOptions}
        />
      </EatsNavigatorScreen.Navigator>
    </>
  );
};
function Dreawer() {
  return (
    <Drawer.Navigator
      initialRouteName="StackDreaewerScreen"
      drawerContent={CustomerDrawer}
      drawerStyle={{width: ScreenWidth / 1.6, shadowColor: "black"}}>
      <Drawer.Screen name="Profile" component={Profile} />

      <Drawer.Screen
        name="StackDreaewerScreen"
        component={StackDreaewerScreen}
      />
      <Drawer.Screen
        options={defaultNavOptions}
        name="Upcoming"
        component={Upcoming}
        options={defaultNavOptions}
      />
      <Drawer.Screen
        options={defaultNavOptions}
        name="Pending"
        component={Pending}
      />
      <Drawer.Screen
        name="Cancelled"
        options={defaultNavOptions}
        component={Cancelled}
      />
      <Drawer.Screen
        name="Delivered"
        options={defaultNavOptions}
        component={Delivered}
      />
      <Drawer.Screen
        name="Earning"
        options={defaultNavOptions}
        component={Earning}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="EatsNavigator"
            component={EatsNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Dreawer"
            component={Dreawer}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
