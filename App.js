import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-web";
import React, { useState } from "react";
//import "typeface-roboto";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import Maps from "./screens/Maps";
// import TestLocation from "./screens/TestLocation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Maps"
          component={Maps}
          options={{ headerShown: false }}
        ></Stack.Screen>
        {/* <Stack.Screen
          name="TestLocation"
          component={TestLocation}
          options={{ headerShown: false }}
        ></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 42,
    fontFamily: "Roboto",
  },
  text: {
    color: "white",
    fontSize: 26,
    fontWeight: "300",
    fontFamily: "Roboto",
  },
  ladida: {
    backgroundImage: "linear-gradient(#751A33, #B34233)",
    backgroundSize: "cover",
    height: "100%",
  },
  container: {
    flex: 0.3,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 0.3,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "5%",
  },
  inputWrapper: {
    //flex: 0.3,
    //backgroundColor: "white",
    alignItems: "center",

    //justifyContent: "center",
  },
  space: {
    width: 20, // or whatever size  you need
    height: 40,
  },
});
