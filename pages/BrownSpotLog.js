import {SafeAreaView, StyleSheet,Text, View, TouchableOpacity, FlatList, ToastAndroid,Alert,RefreshControl,} from 'react-native';
import React, { useState, useEffect } from 'react';
import ImageModal from 'react-native-image-modal';
import Clipboard from "@react-native-clipboard/clipboard";
import {BASE_URL} from "./config.js" 

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const BrownSpotLog = ({navigation}) => {
  var APIURL = `${BASE_URL}/PHP/Brownspot.php`;
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(APIURL);
      const responseData = await response.json();
      setData(responseData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const groupDataByMonth = () => {
    const groupedData = {};

    data.forEach((item) => {
      const month = item.Date.slice(0, 7);

      if (groupedData[month]) {
        groupedData[month].push(item);
      } else {
        groupedData[month] = [item];
      }
    });

    return groupedData;
  };


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

    if (Result =='Brownspot')
    {
     return brownAlert();
    }
  }
  
  const getdisease = (d)=>{
    if (d =='Brownspot'){
      return 1;
    }
  }

  const getStatus = (s)=>{
    if (s == '1')
    {
      return 5
    }
  }
  const copyToClipboard = (GPS_data) =>{
    const clipboard = Clipboard.setString(GPS_data)
    ToastAndroid.show('Copied GPS Location \n' + GPS_data, ToastAndroid.LONG)
  };

  const RenderMonthItem = ({ item }) => {
    const [shouldShow,setShouldShow] = useState(true);

    const toggleCollapse =()=>{
      setShouldShow(!shouldShow);
    };
    return(
      <>
      <View style={styles.monthContainer}>
        <Text style={styles.monthTitle}>{item.month}</Text>
        <TouchableOpacity onPress={toggleCollapse}>
          <Text style={styles.txtName}> Hide/show</Text>
        </TouchableOpacity>
        {!shouldShow && (
        <View>
          {item.data.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
                <View>
                <ImageModal style = {styles.icon}
                    resizeMode="contain"
                    imageBackgroundColor="white"
                    overlayBackgroundColor="black"source = {{uri:item.Image_Loc}}/>
                </View>
                <View style ={{ flexWrap:'wrap'}}>
                    <Text style={styles.txtName}>ID: {item.ID}</Text>
                    <Text style={styles.txtName}> Status: 
                      <Text style={[(getStatus(item.Status) == 5) ? styles.unhealthy : styles.healthy,]}>
                        {item.Status == 1 ? "Unhealthy":"Healthy"}
                      </Text>
                    </Text>
                    <Text style={styles.txtName}> Result:
                      <Text style={[
                          (getdisease(item.Result) == 1) ? styles.brown : styles.disease,
                          ]} 
                          onPress={()=>alertMessage(item.Result)}> {item.Result}
                      </Text>
                    </Text>
                    <Text style={styles.txtName}>Date/Time: {"\n"}{item.Date} {item.Time}</Text>
                    <Text style={styles.txtName} >GPS Location:</Text>
                    <Text style={styles.txtGps} onPress={()=>copyToClipboard(item.GPS_data)}> {item.GPS_data}</Text>
                </View>
            </View>
          ))}
        </View>
      )}
    </View>
      </>  
  );
};

  const groupedData = groupDataByMonth();
  const monthData = Object.entries(groupedData).map(([month, data]) => ({
    month,
    data,
  }));

  const itemSeparator=()=>{
    return <View style={styles.separator}/>
  }
  
  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.headerBar}>
          <Text style={styles.txtBar}> BROWN SPOT LOGS</Text>
    </View>
    {loading ?(
      <Text style={styles.loadingText}>Loading...</Text>
    ):(
        <View style={{padding: 10,  backgroundColor: "#F5DEB3",}}>
            <FlatList
                data={monthData}
                keyExtractor={(item) => item.month}
                ItemSeparatorComponent={itemSeparator}
                renderItem={({ item }) => <RenderMonthItem item={item} />}
                refreshControl={
                  <RefreshControl 
                    refreshing={refreshing}
                    onRefresh={fetchData}/>
                  }
            />
        </View>
      )}
    </SafeAreaView>
  );
};

export default BrownSpotLog;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5DEB3'
  },
  loadingText: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'black'
  },
  monthContainer: {
    marginBottom: 1,
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 1,
    color:'black'
  },
  itemContainer: {
    paddingVertical: 15,
    borderBottomColor: "#e2e2e",
    borderBottomWidth: 0.5,
    flexDirection: 'row'
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
  },
  txtName:{
    fontsize: 16,
    fontWeight: "bold",
    color: 'black',
    textAlign:"left"
  },
  icon:{
    width:160,
    height:160,
    margin:1,
    backgroundColor: "#e6e6e6"
    },
    separator:{
    height: 1,
    width: '100%',
    backgroundColor: "#CCC"
    },
    unhealthy:{
        color: 'red'
    },
    healthy:{
        color: 'green'
    },
    disease:{
        color: 'red'
    },
    brown:{
        color:'brown'
    },
    txtGps:{
      flexWrap:'wrap',
      fontWeight: 'bold',
      color: 'black',
      fontSize: 11,
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
});
