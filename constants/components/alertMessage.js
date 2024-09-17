import {React,useState} from "react";
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Flatlist,
    TouchableOpacity,
    FlatList,
    Button,
    Alert,
  } from "react-native";

  const alertMessage = () =>{
    const blastAlert = () =>
    Alert.alert(
      "Leaf Blast Detected!",
      "There is a Leaf Blast in the Leaf! Do you want to proceed to recommendation?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => navigation.navigate('BlastScreen')
      }
      ]
    );

  const blightAlert = () =>
    Alert.alert(
      "Leaf Blight Detected!",
      "There is a Leaf Blight in the Leaf! Do you want to proceed to recommendation?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => navigation.navigate('BlightScreen') }
      ]
    );
  const brownAlert = () =>
    Alert.alert(
      "Brown Spot Detected!",
      "There is a Brown Spot in the Leaf! Do you want to proceed to recommendation?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => navigation.navigate('BrownSpotScreen') }
      ]
    );
    const alertMessage =(Result) =>{
      if (Result == 'Brownspot')
      {
        return brownAlert();
      }
      if (Result =='Blast')
      {
       return blastAlert();
      }
      if (Result == 'Blight')
      {
        return blightAlert();
      }
      else{
        return Alert.alert('This Leaf is Healthy');
      }
    }
    
    const getdisease = (d)=>{
      if (d =='Brownspot'){
        return 1;
      }
      if (d =='Blast'){
        return 2;
      }
      if (d =='Blight'){
        return 3;
      }
      if (d =='Healthy'){
        return 4;
      }
    }
  
    const getStatus = (s)=>{
      if (s == '1')
      {
        return 5
      }
      if (s == '0')
      {
        return 6
      }
    }
  }
export default alertMessage;