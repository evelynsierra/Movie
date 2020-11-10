import {StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator} from
'@react-navigation/material-bottom-tabs'; 
import {MaterialCommunityIcons} from '@expo/vector-icons';


//Screens
import Home from './Screens/Home'
import Profile from './Screens/Profile'
import Recents from './Screens/Recents'


const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator
      initialRoute="Home"
      activeColor="#02ad94"
      inactiveColor="#dedede"
      style ={{backgroundColor: '#000'}}
      barStyle = {{backgroundColor: '#0f0f0f', padding : 4}}
      >
        <Tab.Screen 
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={28} />
            ),
          }}
           />
        <Tab.Screen 
          name = "Profile" 
          component = {Profile}
          options ={{
            tabBarLabel: '',
            tabBarIcon : ({color}) => (
              <MaterialCommunityIcons 
              name = 'account' color = {color} size = {28}/>
            )
          }}
          />
        <Tab.Screen name = "Recents" component = {Recents}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;