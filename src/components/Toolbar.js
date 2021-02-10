import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  Image,
  Button,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

const Toolbar = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.toolbar}>
      <TouchableOpacity 
      onPress={props.openDrawer} 
      style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '15%',
          resizeMode:'contain',
          height: 35,
        }}>
      <Image
        source={require('../assets/icons/menu.png')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
         
          resizeMode:'contain',
          height: 35,
        }}
        
      />
      </TouchableOpacity>
     
      
<Text style={{ justifyContent: 'center',
          alignItems: 'center',
          width: '60%',
textAlign:'center',
padding:8,
fontSize:18,
fontWeight:'bold',
          height: 40,}}>
              {props.name}

</Text>
<Image
        source={require('../assets/icons/profile.png')}
        style={{
        
        
          resizeMode:'contain',
          width: '15%',
          height: 40,
        }}
      />
      <TouchableOpacity onPress={props.onSelect} useForeground>
     
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: 'white',
    padding: 10,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  toolbarButton: {
    width: 50,
    color: '#fff',
    textAlign: 'center',
  },
  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
  },
});



export default (Toolbar);
