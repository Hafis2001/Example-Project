/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import Home from "./Screens/Home";
import AddItem from "./Screens/AddItem";
import List from "./Screens/List";
import Login from "./Screens/Login";
import MobileLogin from "./Screens/MobileLogin";



const Stack=createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>

<Stack.Screen
name="MobileLogin"
component={MobileLogin}/>

        {/* <Stack.Screen
        name="Login"
        component={Login}/> */}
        <Stack.Screen
        name="Home"
        component={Home}/>
        <Stack.Screen
        name="AddItem"
        component={AddItem}/>
        <Stack.Screen
        name="List"
        component={List}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default App;
