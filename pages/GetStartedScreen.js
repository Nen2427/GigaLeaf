import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
  } from "react-native";

const GetStartedScreen = ({navigation})=>{
    return(
        <SafeAreaView style={styles.mainBody}> 
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={styles.headImage}
                source={require("../image/gigaleaf.png")}/>
            <Image style={styles.subImage}
                source={require("../image/getstarted.png")}/>
            <Text style={styles.text}> 
                Ding-Dong! {"\n"} {"\t"} {"\t"}{"\t"}Leaf Disease is calling...
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={()=> navigation.navigate("MainLayout")}
            >
              <Text style={styles.buttonTextStyle}>
                GET STARTED
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        
    );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
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
    text:{
        fontSize: 20,
        color: "green",
        fontStyle: "italic",
    },
    mainBody: {
        flex: 1,
        backgroundColor: "#F5DEB3",
      },
    headImage: {
      width: "80%",
      height: "20%",
      resizeMode: "contain",
    },
    subImage: {
        width: "80%",
        height: "25%",
        resizeMode: "contain",
      }
  });