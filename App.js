import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-web";
import React, { useState } from "react";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import Maps from "./screens/Maps";
// import TestLocation from "./screens/TestLocation";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Navigation from "./screens/Navigation";
import NewRepairRequest from "./screens/NewRepairRequest";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Maps"
          component={Maps}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
