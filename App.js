import { StatusBar } from "expo-status-bar";
import React from "react";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import MapClient from "./screens/MapClient";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { useFonts } from "expo-font";
import Navigation from "./screens/Navigation";
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
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
            name="MapClient"
            component={MapClient}
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
      <Toast />
    </>
  );
}
