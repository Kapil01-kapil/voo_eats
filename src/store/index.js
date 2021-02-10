import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-community/async-storage";
import {persistStore, persistReducer} from "redux-persist";
import {createLogger} from "redux-logger";
import apiReducer from "../store/reducers/Profile";
import auth from "../store/reducers/auth";
import AllOrder from "./reducers/all_order";
import MyProfile from "./reducers/MyProfile";
const appReducers = combineReducers({
  auth: auth,
  apiReducer: apiReducer,
  AllOrder: AllOrder,
  MyProfile: MyProfile,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = (state, action) => appReducers(state, action);
const persistedReducer = persistReducer(persistConfig, rootReducer);
const logger = createLogger();

let middleware = [];
middleware = [...middleware, thunk, logger];

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middleware)),
);
export const persistor = persistStore(store);
export default persistor;
