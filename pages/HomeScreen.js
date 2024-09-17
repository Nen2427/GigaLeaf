 // Import React and Component
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainBody}>
      <ImageBackground
                  source={require("../image/bg.png")}
                  style={{
                      alignItems: 'center',
                      marginTop: 1,
                      marginHorizontal: 25,
                      marginBottom: 1,
                      padding: 15,
                      flex: 0.9
                  }}
                  imageStyle={{
                      borderRadius: 12
                  }}
              > 
               <View
                style={{
                    flexDirection: 'row',
                    marginTop: 40,
                    marginBottom: 10,
                    paddingHorizontal: 12,
                    alignItems: 'center',
                }}>
            <Image style={styles.headImage}
                  source={require("../image/gigaleaf.png")}/>
                  </View>
            <View
                  style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      marginBottom: 10,
                      paddingHorizontal: 12,
                      alignItems: 'center',
                  }}>
              

            </View>
            <Text style={styles.headText}>
              Hello! {"\n"}Welcome to GigaLeaf!
            </Text>
            <Text
              style={styles.titleText}>
              About the Project:
            </Text>
            <View
                  style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      marginBottom: 10,
                      paddingHorizontal: 12,
                      alignItems: 'center'
                  }}
              >
              <Text style={styles.text}>
              This project is a detection system for a rice plant leaf using a UAV to minimize the time needed and manual effort for field surveys. 
              The project enhances the farmer's performance and productivity while reducing the farmer's manual 
              judgment and time spent on each rice plant during the activity.
              </Text>
            </View>
                {/* <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={()=> navigation.navigate("UploadScreen")}
                >
                  <Text style={styles.buttonTextStyle}>
                    UPLOAD
                  </Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={()=> navigation.navigate("InformationScreen")}
                >
                  <Text style={styles.buttonTextStyle}>
                    DISEASE INFORMATION
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={()=> navigation.navigate("AboutScreen")}
                >
                  <Text style={styles.buttonTextStyle}>
                    ABOUT US
                  </Text>
                </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );

};
 
export default HomeScreen;
 
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: "#F5DEB3",
    
  },
  buttonStyle: {
    minWidth: 250,
    minHeight: 50,
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "#FF0000",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  text: {
    fontSize: 15,
    color:  "black",
    textAlign: 'justify',
    alignItems: "center",
    justifyContent: "center",
  },
  headText:{
    fontSize: 26, 
    fontWeight: 'bold',
     color:'#fffacd'
  },
  titleText: {
    fontSize: 20, 
    //lemonchiffon 
    color:'#fffacd', 
    textAlign:'center'
  },
  subText:{
    fontsize: 15,
    fontweight: "bold",
    color: 'black',
  },
  buttonView:{
    alignContent: 'center'
  },
  headImage:{
    width: "100%",
    height: 100,
    resizeMode: "contain",
    margin: 1,
    borderRadius: 40,
    borderWidth: 1,
    alignItems: 'center'
  },
});
