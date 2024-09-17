import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
  } from "react-native";

const AboutScreen = ()=>{
    return(
        <SafeAreaView style={styles.mainbody}>
          <View style={{  alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.headImage}
                source={require("../image/gigaleaf.png")}/>
              <Text style={styles.headText}>
                ABOUT THE TEAM {"\n"}
              </Text>
              <Image  style={styles.profile}
                  source={require("../image/bindoy.png")}
                  />

              <Text style={styles.titleText}>
                Arland Bindoy{"\n"}
                System Administration
              </Text>
              <Image style={styles.profile}
                  source={require("../image/alcantara.png")}
              />
              <Text style={styles.titleText}>
                Vher Jann Alcantara{"\n"}
                System Administration
              </Text>
              <Image style={styles.profile}
                  source={require("../image/altz.png")}
                  />
              <Text style={styles.titleText}>
                Altz Kienn de Vera{"\n"}
                Railway Engineering
              </Text>
              <Image style={styles.profile}
                  source={require("../image/pablo.png")}/>
              <Text style={styles.titleText}>
                Nathaniel Kent Pablo{"\n"}
                Intelligent Systems
              </Text>
          </View>
        </SafeAreaView>
        
    );
};

export default AboutScreen;

const styles = StyleSheet.create({
  mainbody:{
    backgroundColor: "#F5DEB3",
    flex: 1,
  },
  headText:{
    fontSize: 20,
      fontWeight: "bold",
      color: 'black',
      alignItems: "center",
      justifyContent: "center",
  },
    text: {
      fontSize: 13,
      color:  "black",
      textAlign: 'justify',
      alignItems: "center",
      justifyContent: "center",
    },
    titleText: {
      fontSize: 15,
      fontWeight: "bold",
      color: 'black',
      alignItems: "center",
      justifyContent: "center",
    },
    subText:{
      fontsize: 15,
      fontweight: "bold",
      color: 'black',
    },
    profile: {
      height: 60,
      width: 60,
      backgroundColor: 'grey',
      borderRadius: 50,
      resizeMode: "contain",
    },
    headImage: {
      width: "40%",
      height: 150,
      resizeMode: "contain",
      margin: 1,
    }
  });