/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  StatusBar,
  Text,
} from "react-native";

import {Colors} from "react-native/Libraries/NewAppScreen";
import {TouchableOpacity} from "react-native-gesture-handler";
import Toolbar from "../components/Toolbar";
import styles from "../styles/style";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import Card from "../components/UI/Card";
import HeaderButton from "../components/UI/HeaderButton";
import Color from "../constants/Colors";
const Dashboard = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Color.red} />
      <Toolbar
        name={"Dashboard"}
        openDrawer={() => {
          props.navigation.openDrawer();
        }}
      />
      <SafeAreaView style={styles.maincontainer}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <TouchableOpacity
              style={style.order_card}
              onPress={() => props.navigation.navigate("Upcoming Order")}>
              <Image
                style={style.gallary}
                source={require("../assets/icons/calender.png")}
              />
              <Text style={style.order_card_title}>Upcoming order</Text>
              <Text style={style.order_card_quantity}>20</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.order_card}
              onPress={() => props.navigation.navigate("Pending Order")}>
              <Image
                style={style.gallary}
                source={require("../assets/icons/calender.png")}
              />
              <Text style={style.order_card_title}>Pending Order</Text>
              <Text style={[style.order_card_quantity, style.pending_order]}>
                500
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.order_card}
              onPress={() => props.navigation.navigate("Cancelled Order")}>
              <Image
                style={style.gallary}
                source={require("../assets/icons/calender.png")}
              />
              <Text style={style.order_card_title}>Cancelled Order</Text>
              <Text style={[style.order_card_quantity, style.cancel_order]}>
                20
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.order_card}
              onPress={() => props.navigation.navigate("Delivered Order")}>
              <Image
                style={style.gallary}
                source={require("../assets/icons/calender.png")}
              />
              <Text style={style.order_card_title}>Delivered Orde</Text>
              <Text style={style.order_card_quantity}>112</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.order_card}
              onPress={() => props.navigation.navigate("My Earning")}>
              <Image
                style={style.gallary}
                source={require("../assets/icons/calender.png")}
              />
              <Text style={style.order_card_title}>My Earning</Text>
              <Text style={[style.order_card_quantity, style.earning]}>
                ₹ 2000
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.order_card}
              onPress={() => props.navigation.navigate("Profile")}>
              <Image
                style={style.gallary}
                source={require("../assets/icons/calender.png")}
              />
              <Text style={style.order_card_title}>Profile</Text>
              <Text style={[style.order_card_quantity, style.earning]}>
                ₹ 2000
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.order_card}
              onPress={() => props.navigation.navigate("Track Address")}>
              <Image
                style={style.gallary}
                source={require("../assets/icons/calender.png")}
              />
              <Text style={style.order_card_title}>Track Address</Text>
              <Text style={[style.order_card_quantity, style.earning]}>
                ₹ 2000
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

Dashboard.navigationOptions = (navData) => {
  return {
    headerTitle: "Deshbood",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Image
          style={{
            width: "100%",
            height: 100,
            marginTop: 10,
            resizeMode: "stretch",
          }}
          source={require("../assets/icons/5.png")}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Image
          style={{
            width: "100%",
            height: 100,
            marginTop: 10,
            resizeMode: "stretch",
          }}
          source={require("../assets/icons/5.png")}
        />
      </HeaderButtons>
    ),
  };
};

const style = StyleSheet.create({
  order_card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 16,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    marginBottom: 16,
  },
  gallary: {
    width: 40,
    height: 40,
  },
  order_card_title: {
    fontSize: 16,
  },
  order_card_quantity: {
    borderWidth: 2,
    borderColor: "#c1272d",
    paddingHorizontal: 18,
    paddingVertical: 5,
    borderRadius: 4,
    fontSize: 20,
    fontWeight: "bold",
    color: "#4BB543",
  },
  pending_order: {
    color: "#FFCC00",
  },
  cancel_order: {
    backgroundColor: "#c1272d",
    color: "#fff",
    borderRadius: 4,
  },
  earning: {
    paddingHorizontal: 14,
  },
});

export default Dashboard;
