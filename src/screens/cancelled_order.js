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
  View,
  Image,
  StatusBar,
  FlatList,
  Text,
  Alert,
  Modal,
  TouchableHighlight,
} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import upcoming from "../apiEndPoints/upcoming";
import {api_url} from "../apiEndPoints/Api";
const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";
import axios from "axios";
import {connect} from "react-redux";
import {Colors} from "react-native/Libraries/NewAppScreen";

import styles from "../styles/style";
import Color from "../constants/Colors";
import {useSelector, useDispatch} from "react-redux";
import * as AllOrderActions from "../store/actions/all_order";
const Upcoming = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const [switchValue, setSwitchValue] = useState(false);
  const [visible, setVisible] = useState(false);
  const AllOrder = useSelector((state) => state.AllOrder.AllOrder);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const loadProducts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(AllOrderActions.orderdetails(userId));
      console.log("name", AllOrder);
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    console.log("Earnings", AllOrder);
    setIsLoading(true);
    loadProducts().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadProducts]);

  const _renderData = ({item}) => {
    if (item.orderdetail.payment_status == "CANCELLED") {
      return (
        <View style={{marginBottom: 10}}>
          <TouchableOpacity
            style={styles.product_card}
            onPress={() => {
              setModalVisible(true);
            }}>
            <View style={styles.left}>
              <Image
                style={styles.food_img}
                source={{
                  uri: `http://zooneto.in/vooeat/public/images/${item.orderdetail.vendor.image}`,
                }}
              />
            </View>
            <View style={styles.middle}>
              <Text style={styles.food_name}>
                {item.orderdetail.vendor.restaurant_name}
              </Text>
              <Text style={styles.rest_name}>
                {item.orderdetail.vendor.restaurant_type}
              </Text>
              <View style={styles.line}></View>
              <Text style={styles.food_size}>Regular</Text>
              <Text style={styles.food_quantity}>
                {item.orderdetail.total_items}
              </Text>
            </View>
            <View style={styles.right}>
              <Text
                style={{
                  color: Color.red,

                  fontSize: 10,
                }}>
                {item.driver_order_status.name}
              </Text>
              <Text>
                Rs.{" "}
                <Text style={{color: "#4BB453", fontWeight: "bold"}}>
                  1000/-
                </Text>
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Color.red} />
      <SafeAreaView style={styles.maincontainer}>
        <ScrollView>
          <View style={styles.container}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TouchableHighlight
                    style={styles.cross_position}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}>
                    <Image
                      style={styles.cross}
                      source={require("../assets/icons/cross.png")}
                    />
                  </TouchableHighlight>
                  <Text style={styles.modalText}>Upcoming Order Details</Text>
                  <View>
                    <Text style={{fontWeight: "bold"}}>Contact Details</Text>
                    <Text style={styles.details}>Sumit Aryan</Text>
                    <Text style={styles.details}>Contact No. - 8882137914</Text>
                    <Text style={styles.details}>
                      Email Address - sumit.aryan@zooneto.com
                    </Text>
                  </View>

                  <View style={{marginTop: 10}}>
                    <Text style={{fontWeight: "bold"}}>Delivery Address</Text>
                    <View style={{flexDirection: "row", marginTop: 8}}>
                      <Image
                        style={styles.home}
                        source={require("../assets/icons/home.png")}
                      />
                      <Text style={{fontWeight: "bold"}}>Home</Text>
                    </View>
                    <Text style={styles.details}>
                      43-D San Franciso, Near Church
                    </Text>
                    <Text style={styles.details}>USA</Text>
                  </View>
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}>
                    <Text style={{fontWeight: "bold"}}>Track Address</Text>
                    <TouchableOpacity>
                      <Image
                        style={styles.side}
                        source={require("../assets/icons/side.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>

            <FlatList
              data={AllOrder}
              keyExtractor={(item) => item.id}
              renderItem={_renderData}
            />

            {/*                        

                        <TouchableOpacity style={styles.product_card} onPress={() => {
                            setModalVisible(true);
                        }}>
                            <View style={styles.left}>
                                <Image
                                    style={styles.food_img}
                                    source={require('../assets/food-item-img/food-4.png')}
                                />
                            </View>
                            <View style={styles.middle}>
                                <Text style={styles.food_name}>Grilled Chicken</Text>
                                <Text style={styles.rest_name}>By KFC</Text>
                                <View style={styles.line}></View>
                                <Text style={styles.food_size}>Regular</Text>
                                <Text style={styles.food_quantity}>1</Text>
                            </View>
                            <View style={styles.right}>
                                <Text style={{ color: '#4BB543', fontSize: 10 }}>Upcoming</Text>
                                <Text>Rs. <Text style={{ color: '#4BB453', fontWeight: 'bold' }}>1000/-</Text></Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.product_card} onPress={() => {
                            setModalVisible(true);
                        }}>
                            <View style={styles.left}>
                                <Image
                                    style={styles.food_img}
                                    source={require('../assets/food-item-img/food-4.png')}
                                />
                            </View>
                            <View style={styles.middle}>
                                <Text style={styles.food_name}>Grilled Chicken</Text>
                                <Text style={styles.rest_name}>By KFC</Text>
                                <View style={styles.line}></View>
                                <Text style={styles.food_size}>Regular</Text>
                                <Text style={styles.food_quantity}>1</Text>
                            </View>
                            <View style={styles.right}>
                                <Text style={{ color: '#4BB543', fontSize: 10 }}>Upcoming</Text>
                                <Text>Rs. <Text style={{ color: '#4BB453', fontWeight: 'bold' }}>1000/-</Text></Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.product_card} onPress={() => {
                            setModalVisible(true);
                        }}>
                            <View style={styles.left}>
                                <Image
                                    style={styles.food_img}
                                    source={require('../assets/food-item-img/food-4.png')}
                                />
                            </View>
                            <View style={styles.middle}>
                                <Text style={styles.food_name}>Grilled Chicken</Text>
                                <Text style={styles.rest_name}>By KFC</Text>
                                <View style={styles.line}></View>
                                <Text style={styles.food_size}>Regular</Text>
                                <Text style={styles.food_quantity}>1</Text>
                            </View>
                            <View style={styles.right}>
                                <Text style={{ color: '#4BB543', fontSize: 10 }}>Upcoming</Text>
                                <Text>Rs. <Text style={{ color: '#4BB453', fontWeight: 'bold' }}>1000/-</Text></Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.product_card} onPress={() => {
                            setModalVisible(true);
                        }}>
                            <View style={styles.left}>
                                <Image
                                    style={styles.food_img}
                                    source={require('../assets/food-item-img/food-4.png')}
                                />
                            </View>
                            <View style={styles.middle}>
                                <Text style={styles.food_name}>Grilled Chicken</Text>
                                <Text style={styles.rest_name}>By KFC</Text>
                                <View style={styles.line}></View>
                                <Text style={styles.food_size}>Regular</Text>
                                <Text style={styles.food_quantity}>1</Text>
                            </View>
                            <View style={styles.right}>
                                <Text style={{ color: '#4BB543', fontSize: 10 }}>Upcoming</Text>
                                <Text>Rs. <Text style={{ color: '#4BB453', fontWeight: 'bold' }}>1000/-</Text></Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.product_card} onPress={() => {
                            setModalVisible(true);
                        }}>
                            <View style={styles.left}>
                                <Image
                                    style={styles.food_img}
                                    source={require('../assets/food-item-img/food-4.png')}
                                />
                            </View>
                            <View style={styles.middle}>
                                <Text style={styles.food_name}>Grilled Chicken</Text>
                                <Text style={styles.rest_name}>By KFC</Text>
                                <View style={styles.line}></View>
                                <Text style={styles.food_size}>Regular</Text>
                                <Text style={styles.food_quantity}>1</Text>
                            </View>
                            <View style={styles.right}>
                                <Text style={{ color: '#4BB543', fontSize: 10 }}>Upcoming</Text>
                                <Text>Rs. <Text style={{ color: '#4BB453', fontWeight: 'bold' }}>1000/-</Text></Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.product_card} onPress={() => {
                            setModalVisible(true);
                        }}>
                            <View style={styles.left}>
                                <Image
                                    style={styles.food_img}
                                    source={require('../assets/food-item-img/food-4.png')}
                                />
                            </View>
                            <View style={styles.middle}>
                                <Text style={styles.food_name}>Grilled Chicken</Text>
                                <Text style={styles.rest_name}>By KFC</Text>
                                <View style={styles.line}></View>
                                <Text style={styles.food_size}>Regular</Text>
                                <Text style={styles.food_quantity}>1</Text>
                            </View>
                            <View style={styles.right}>
                                <Text style={{ color: '#4BB543', fontSize: 10 }}>Upcoming</Text>
                                <Text>Rs. <Text style={{ color: '#4BB453', fontWeight: 'bold' }}>1000/-</Text></Text>
                            </View>
                        </TouchableOpacity> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  upcoming: (url) => dispatch(upcoming(url)),
});

const mapStateToProps = (state) => ({
  data: state.apiReducer.data,
  error: state.apiReducer.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);
