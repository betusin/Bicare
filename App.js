import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-web";
import React, { useState } from "react";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import SignupScreen from "./screens/SignupScreen";
import { useFonts } from 'expo-font';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Navigation from "./screens/Navigation"
import NewRepairRequest from "./screens/NewRepairRequest";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { firebaseConfig } from './src/firebaseConfig';

const Stack = createStackNavigator();


export default function App() {

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const testData = getTestData(db);
  console.log("testData", testData);

  async function getTestData(db) {
    const testCollesction = collection(db, 'test');
    const testSnapshot = await getDocs(testCollesction);
    const testData = testSnapshot.docs.map(doc => doc.data());
    return testData;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
	screenOptions={{
		cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,	
	}}>

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
    </NavigationContainer> 
  );
}

export const styles = StyleSheet.create({
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
