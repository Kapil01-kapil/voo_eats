// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   Text,
//   StatusBar,
// } from 'react-native';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import Home from './src/screens/home';
// import Login from './src/screens/login';
// import Register from './src/screens/register';
// import Dashboard from './src/screens/dashboard';
// import Upcoming from './src/screens/upcoming';
// import Pending from './src/screens/pending_order';
// import Cancelled from './src/screens/cancelled_order';
// import Delivered from './src/screens/delivered_order';
// import Earning from './src/screens/earning';
// import Profile from './src/screens/profile';
// import Track from './src/screens/track'

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen
//             name="Home"
//             component={Home}
//             options={{ title: 'Welcome', headerShown: false }}
//           />
//           <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
//           <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
//           <Stack.Screen name="dashboard" component={Dashboard} />
//           <Stack.Screen name="Upcoming Order" component={Upcoming} />
//           <Stack.Screen name="Pending Order" component={Pending} />
//           <Stack.Screen name="Cancelled Order" component={Cancelled} />
//           <Stack.Screen name="Delivered Order" component={Delivered} />
//           <Stack.Screen name="My Earning" component={Earning} />
//           <Stack.Screen name="Profile" component={Profile} />
//           <Stack.Screen name="Track Address" component={Track} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// };

// export default App;\

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from "react";
import {Text, StatusBar} from "react-native";
import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Provider} from "react-redux";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {PersistGate} from "redux-persist/integration/react";
import ShopNavigator from "./src/navigation/EatsNavigator";
import {combineReducers} from "redux";
import ReduxThunk from "redux-thunk";

import authReducer from "./src/store/reducers/auth";
import profileReducer from "./src/store/reducers/Profile";

import {store, persistor} from "./src/store/index";
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ShopNavigator />
      </PersistGate>
    </Provider>
  );
};

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
});

export default App;
