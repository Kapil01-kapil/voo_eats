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

import styles from "../styles/style";
import Color from "../constants/Colors";

const Earning = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Color.red} />
      <SafeAreaView style={styles.maincontainer}>
        <ScrollView>
          <View style={styles.container}>
            <View style={earning.earning_card}>
              <View>
                <Image
                  style={earning.earn_img}
                  source={require("../assets/icons/earning.png")}
                />
              </View>
              <View style={{marginLeft: 16}}>
                <Text
                  style={{color: "#4BB543", fontWeight: "bold", fontSize: 24}}>
                  ₹ 2,000
                </Text>
                <Text style={{fontSize: 18, fontWeight: "500"}}>
                  Total Earning
                </Text>
              </View>
            </View>

            <View>
              <Text style={{marginTop: 30, fontWeight: "bold", fontSize: 18}}>
                Earning History
              </Text>

              <View style={earning.his_card}>
                <View>
                  <Text style={earning.name}>Sumit Aryan</Text>
                  <Text style={earning.contact}>
                    Contact No. - <Text style={earning.name}> 8882137914</Text>
                  </Text>
                  <Text>
                    Item - <Text> Grilled Chicken</Text>
                  </Text>
                </View>
                <Text style={earning.sin_earn}>₹ 200</Text>
              </View>

              <View style={earning.his_card}>
                <View>
                  <Text style={earning.name}>Sumit Aryan</Text>
                  <Text style={earning.contact}>
                    Contact No. - <Text style={earning.name}> 8882137914</Text>
                  </Text>
                  <Text>
                    Item - <Text> Grilled Chicken</Text>
                  </Text>
                </View>
                <Text style={earning.sin_earn}>₹ 200</Text>
              </View>

              <View style={earning.his_card}>
                <View>
                  <Text style={earning.name}>Sumit Aryan</Text>
                  <Text style={earning.contact}>
                    Contact No. - <Text style={earning.name}> 8882137914</Text>
                  </Text>
                  <Text>
                    Item - <Text> Grilled Chicken</Text>
                  </Text>
                </View>
                <Text style={earning.sin_earn}>₹ 200</Text>
              </View>

              <View style={earning.his_card}>
                <View>
                  <Text style={earning.name}>Sumit Aryan</Text>
                  <Text style={earning.contact}>
                    Contact No. - <Text style={earning.name}> 8882137914</Text>
                  </Text>
                  <Text>
                    Item - <Text> Grilled Chicken</Text>
                  </Text>
                </View>
                <Text style={earning.sin_earn}>₹ 200</Text>
              </View>

              <View style={earning.his_card}>
                <View>
                  <Text style={earning.name}>Sumit Aryan</Text>
                  <Text style={earning.contact}>
                    Contact No. - <Text style={earning.name}> 8882137914</Text>
                  </Text>
                  <Text>
                    Item - <Text> Grilled Chicken</Text>
                  </Text>
                </View>
                <Text style={earning.sin_earn}>₹ 200</Text>
              </View>

              <View style={earning.his_card}>
                <View>
                  <Text style={earning.name}>Sumit Aryan</Text>
                  <Text style={earning.contact}>
                    Contact No. - <Text style={earning.name}> 8882137914</Text>
                  </Text>
                  <Text>
                    Item - <Text> Grilled Chicken</Text>
                  </Text>
                </View>
                <Text style={earning.sin_earn}>₹ 200</Text>
              </View>

              <View style={earning.his_card}>
                <View>
                  <Text style={earning.name}>Sumit Aryan</Text>
                  <Text style={earning.contact}>
                    Contact No. - <Text style={earning.name}> 8882137914</Text>
                  </Text>
                  <Text>
                    Item - <Text> Grilled Chicken</Text>
                  </Text>
                </View>
                <Text style={earning.sin_earn}>₹ 200</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const earning = StyleSheet.create({
  earning_card: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#eee",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    alignItems: "center",
  },
  earn_img: {
    width: 80,
    height: 80,
  },
  his_card: {
    flexDirection: "row",
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
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
  },
  contact: {
    marginVertical: 2,
  },
  sin_earn: {
    color: "#4BB543",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Earning;
