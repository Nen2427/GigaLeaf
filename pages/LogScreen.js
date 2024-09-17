import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    View,
    Text,
    Alert,
    ToastAndroid,
    RefreshControl,
    ActivityIndicator,
  } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import ImageModal from 'react-native-image-modal';
import { Asyncstorage} from 'react-native';
import Clipboard from "@react-native-clipboard/clipboard";
import {BASE_URL} from "./config.js" 



const LogScreen = ({ navigation })=>{
    var APIURL = `${BASE_URL}/datetime.php`;
    const [refreshing, setRefreshing] = React.useState(false);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, [getDataList]);
    
    

    const getDataList = async () => {
      try {
        setLoading(true);
        const response = await fetch(APIURL,
        // https://giga.leaf.ap.ngrok.io/images/datetime.php
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        },2000);
        const dat = await response.json();
        setData(dat);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

  useEffect(() => {
    getDataList();
  }, []);

  const itemSeparator=()=>{
    return <View style={styles.separator}/>
  }

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
      if (Result == 'Healthy')
      {
        return Alert.alert('This Leaf is Healthy');
      }
      else{
        return Alert.alert('This is not a Rice Plant');
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
      if (d =='No detected disease' || 'Healthy'){
        return 4;
      }
      if (d = 'Others'){
        return 5;
      }
    }
  
    const getStatus = (s)=>{
      if (s == '1')
      {
        return '5'
      }
      if (s == '0')
      {
        return 6
      }
      if (s == '2'){
        return 'Invalid Image'
      }
    }

    const StatusValue = (Status)=>{
      if (Status =='1')
      {
        return <Text>Unhealthy</Text>
      }
      if (Status =='0')
      {
        return <Text>Healthy</Text>
      }
      if (Status == '2')
      {
        return <Text>Invalid Image</Text>
      }
    }

    const copyToClipboard = (GPS_data,ID) =>{
      const clipboard = Clipboard.setString(GPS_data)
      ToastAndroid.show('Copied GPS Location of ID:' + ID, ToastAndroid.SHORT)
    };

    const leafResult = ({item})=>(
      <View style={styles.itemList}>
        <View>
          <ImageModal
            resizeMode="contain"
            imageBackgroundColor="white"
            overlayBackgroundColor="black"
            source={{
              uri: item.Image_Loc
            }}
            style={styles.icon}
          />
        </View>
        <View style ={{flexDirection:'column',}}> 
          <Text style={styles.txtName}>ID:{item.ID}</Text>
          <Text style={styles.txtName}>Status:
            <Text style={[
                (getStatus(item.Status) == 5) ? styles.unhealthy : styles.healthy,
              ]}> {StatusValue(item.Status)}
              {/* {item.Status == 1 ? "Unhealthy": "Healthy"} */}
              </Text>
          </Text>
          <Text style={styles.txtName}>Result: 
              <Text style={[
                    (getdisease(item.Result) == 1) ? styles.brown : styles.disease, 
                    (getdisease(item.Result) == 2) ? styles.blast : styles.disease,
                    (getdisease(item.Result) == 3) ? styles.blight : styles.disease,
                    (getdisease(item.Result) == 4) ? styles.healthy : styles.disease,
                  ]}
                  onPress={()=>alertMessage(item.Result)}> {item.Result}</Text>
          </Text>
          <Text style={styles.txtName}>Date/Time:{"\n"}{item.Date} {item.Time}</Text>
          <Text style={styles.txtName}>GPS Location:</Text>
            <View style={{flexWrap: 'wrap'}}>
              <Text style={styles.txtGps} onPress={()=> copyToClipboard(item.GPS_data,item.ID)}> {item.GPS_data}  </Text>
            </View>
        </View>
    </View>
  )
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerBar}>
          <Text style={styles.txtBar}> CAPTURED IMAGES</Text>
        </View>
        <View>
          <Text style={styles.txtBar}>
            Item List
          </Text>
          {/* <TouchableOpacity onPress={()=>navigation.navigate("TopNavigationTab")}>
            <Text style={styles.txtClick}>Click Here ! {"\n"} To View Individual Disease Logs ! </Text>
            </TouchableOpacity> */}
        </View>
        <View style={{ padding: 10,  backgroundColor: "#F5DEB3", }}>
          {isLoading ? (
            <Text style={styles.loadingText}>Loading...</Text>
            ):(
            <FlatList
              data={data} 
              keyExtractor={({ ID }, index) => ID}
              renderItem={ leafResult}
              ItemSeparatorComponent = {itemSeparator}
              
              refreshControl={
                <RefreshControl 
                  refreshing={refreshing}
                  onRefresh={getDataList}/>
                }
                />
              )}
        </View>
        <View style={styles.barEnd}/>
    </SafeAreaView>
  );
};

export default LogScreen;

const styles = StyleSheet.create({
  unhealthy:{
    color: 'red'
  },
  brown:{
    color: 'brown'
  },
  blast:{
    color: 'orange'
  },
  blight:{
    color: '#ffd700'
  },
  healthy:{
    color: 'green'
  },
  disease:{
    color: 'red'
  },
  otherResults:{
    color: 'grey'
  },
  barEnd:{ 
    padding:1,
    height: 1,
    width: '100%',
    backgroundColor: "black"
  },
  NotRicePlant:{
    color: 'black'
  },
  separator:{
    height: 1,
    width: '100%',
    backgroundColor: "#CCC"
  },
  container:{
    backgroundColor: "#F5DEB3",
    flex: 1,
    padding: 5
  },
  headerBar: {
      padding:0.09,
      backgroundColor:"#e1e1e1",
  },
  txtBar:{
      fontsize: 50,
      fontWeight: "bold",
      color: 'black',
      textAlign:'center',
      padding:1,
      backgroundColor: "#F5DEB3",
  },
  txtHeader:{
      fontsize: 10 ,
      fontWeight: "bold",
      color: 'black',
      textAlign: 'center'
  },
  txtClick:{
    fontsize: 10 ,
    fontWeight: "bold",
    color: '#EC5800',
    textAlign: 'center'
  },
  itemList:{
      paddingVertical: 15,
      borderBottomColor: "#e2e2e",
      borderBottomWidth: 0.5,
      flexDirection: 'row',
  },
  txtName:{
      fontsize: 1,
      fontWeight: "bold",
      color: 'black',
      flexWrap: 'wrap'
  },
  txtGps:{
    flexWrap:'wrap',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 11,
  },
  icon:{
      width:160,
      height:160,
      margin:5,
      backgroundColor: "#e6e6e6"
  },
  emptyText:{
    alignContent: 'center'

  },
  loadingText: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'black'
  },
});
