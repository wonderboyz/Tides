import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from './screens/home';
import CalScreen from './screens/calendar';
import Maps from './screens/maps'
import Weather from './screens/weather'


// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName="Home"
        
        screenOptions = {({route}) => ({
          tabBarIcon: ({focused, color, size}) =>{
            let iconName;
            if (route.name === "Home") {
              iconName = focused
              ? 'home'
              : 'home-outline'
            }
            else if (route.name === 'Calendar'){
              iconName = focused ? 'calendar' : 'calendar-outline'
            }
            else if (route.name === 'Weather'){
              iconName = focused ? 'thunderstorm' : 'thunderstorm-outline'
            }
            else if (route.name === 'Map'){
              iconName = focused ? 'navigate' : 'navigate-outline'
            }
            



            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        // tabBarOptions={{
        //   activeTintColor: 'blue',
        //   inactinveTintColor: 'gray',
        // }}
        >
          



          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Calendar" component={CalScreen} />
          <Tab.Screen name="Weather" component={Weather} />
          <Tab.Screen name="Map" component={Maps} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
