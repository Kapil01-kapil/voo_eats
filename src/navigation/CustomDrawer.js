//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Color from '../constants/Colors';
const CustomDrawer = props => {
  const proileImage = 'https://aboutreact.com/wp-content/uploads/2018/07/sample_img.png';

 const items = [
    {
      navOptionThumb: 'camera',
      navOptionName: 'My Profile',
      screenToNavigate: 'Profile',
    },
    {
      navOptionThumb: 'image',
      navOptionName: 'Dashboard',
      screenToNavigate: 'StackDreaewerScreen',
    },
    {
      navOptionThumb: 'build',
      navOptionName: 'Upcoming Order',
      screenToNavigate: 'Upcoming',
    },
    {
      navOptionThumb: 'build',
      navOptionName: 'Pending Order',
      screenToNavigate: 'Pending',
    },
    {
      navOptionThumb: 'build',
      navOptionName: 'Cancelled Order',
      screenToNavigate: 'Cancelled',
    },
    {
      navOptionThumb: 'build',
      navOptionName: 'Delivered Order',
      screenToNavigate: 'Delivered',
    },
    {
      navOptionThumb: 'build',
      navOptionName: 'My Earning',
      screenToNavigate: 'Earning',
    },
  ];
  return (
    <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <Image
          source={ require('../assets/icons/logo.png')}
          style={styles.sideMenuProfileIcon}
        />
        {/*Divider between Top Image and Sidebar Option*/}
  
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {items.map((item, key) => (
            <View
              style={{
                borderColor:Color.red,
                borderWidth:1,
                alignItems: 'center',
                paddingBottom: 10,
                paddingTop:10,
                backgroundColor: global.currentScreenIndex === key ? '#ffffff' : '#ffffff',
              }}
              key={key}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === key ? 'black' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
             
              </View>
             
             
            </View>
          ))}
        </View>
      </View>
  )
}

export default CustomDrawer




const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    

  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: '100%',
    height: 100,
    borderColor:Color.red,
    borderWidth:1,
  },
});