import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import SignupScreen from "./screens/SignupScreen";
import Navigation from "./screens/Navigation"

const Stack = createStackNavigator();


export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='LoginScreen'
          screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,	}}
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
            name="Navigation"
            component={Navigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer> 
  );
}
