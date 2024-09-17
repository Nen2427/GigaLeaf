import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
// Screensw
import HomeScreen from '../pages/HomeScreen';
import InformationScreen from '../pages/InformationScreen';
import ProfileScreen from '../pages/ProfileScreen';
import LogScreen from '../pages/LogScreen';
import MapScreen from '../pages/MapScreen';
import TopNavigationTab from './TopNavigationTab';
//Screen names
const TabBar = "Logs"
const homeName = "Home";
const browseName = "Information";
const profileName = "Profile";
const logscreen = "Logs";
const mapsName = "Maps";

const Tab = createBottomTabNavigator();


function MainLayout() {
  return (
      <Tab.Navigator
        screenOptions={{
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: {
            height: 50,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: "#F5DEB3",
            position: 'absolute',
            borderTopWidth: 0,
        },
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} 
            options={{
              tabBarIcon:({focused}) =>
              (
                <View>
                  <Image
                    source = {require("../image/home.png")}
                    resizeMode = 'contain'
                    style={styles.iconsize}/>
                </View>
              ),
              headerStyle: {
                backgroundColor: '#F5DEB3', //Set Header color
              },
              headerTintColor: "black", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}/>
            <Tab.Screen name={TabBar} component={TopNavigationTab} 
                   options={{
                    tabBarIcon:({focused}) =>
                    (
                      <View>
                        <Image
                          source = {require("../image/logs.png")}
                          resizeMode = 'contain'
                          style={styles.iconsize}/>
                      </View>
                    ),
                    headerStyle: {
                      backgroundColor: '#F5DEB3', //Set Header color
                    },
                    headerTintColor: "black", //Set Header text color
                    headerTitleStyle: {
                      fontWeight: "bold", //Set Header text style
                    },
                  }}/>
        <Tab.Screen name={mapsName} component={MapScreen} 
                   options={{
                    tabBarIcon:({focused}) =>
                    (
                      <View>
                        <Image
                          source = {require("../image/map.png")}
                          resizeMode = 'contain'
                          style={styles.iconsize}/>
                      </View>
                    ),
                    headerStyle: {
                      backgroundColor: '#F5DEB3', //Set Header color
                    },
                    headerTintColor: 'black', //Set Header text color
                    headerTitleStyle: {
                      fontWeight: "bold", //Set Header text style
                    },
                  }}/>

        {/* <Tab.Screen name={profileName} component={ProfileScreen} 
                   options={{
                    tabBarIcon:({focused}) =>
                    (
                      <View>
                        <Image
                          source = {require("../image/profile.png")}
                          resizeMode = 'contain'
                          style={styles.iconsize}/>
                      </View>
                    ),
                    headerStyle: {
                      backgroundColor: '#F5DEB3', //Set Header color
                    },
                    headerTintColor: "black", //Set Header text color
                    headerTitleStyle: {
                      fontWeight: "bold", //Set Header text style
                    },
                  }}/> */}
      </Tab.Navigator>
  );
}

export default MainLayout;

const styles = StyleSheet.create({
  options:{
    headerStyle: {
      backgroundColor: "#FFFF00", //Set Header color
    },
    headerTintColor: "black", //Set Header text color
    headerTitleStyle: {
      fontWeight: "bold", //Set Header text style
    },
  },
  iconsize:{
    width: 25,
    height: 25,
  }
});