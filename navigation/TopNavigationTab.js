import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import BlastLog from '../pages/BlastLog';
import BrownSpotLog from '../pages/BrownSpotLog';
import BlightLog from '../pages/BlightLog';
import LogScreen from '../pages/LogScreen';

function TopNavigationTab(){
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: '#b3caf5',
            tabBarStyle:{
              backgroundColor: '#F5DEB3',
            },
            tabBarLabelStyle:{
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 'bold'
            },
            tabBarIndicatorStyle:{
              borderBottomColor: '#87B56A',
              borderBottomWidth: 2,
            }
          }}>
            <Tab.Screen name={"Main Logs"} component={LogScreen}
                options={{
                    tabBarLabel: 'Main Logs'
                }}
            />
            <Tab.Screen name={'Brown Spot'} component={BrownSpotLog}
                options={{
                    tabBarLabel: 'Brown Spot'
                }}
            />
            <Tab.Screen name={"Leaf Blight"} component={BlightLog}
                options={{
                    tabBarLabel: 'Leaf Blight'
                }}
            />
            <Tab.Screen name={"Leaf Blast"} component={BlastLog}
                options={{
                    tabBarLabel: 'Leaf Blast'
                }}
            />
        </Tab.Navigator>
    );
}

export default TopNavigationTab;