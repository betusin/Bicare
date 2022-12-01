import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from "react";
import {TouchableOpacity} from "react-native";            
import { useFonts } from 'expo-font';
import SignupScreen from "./SignupScreen";
import page from '../styles'

export default function LoginScreen({ navigation }) {
  const [usernameText, setTextUsername] = useState("");
  const [passwordText, setTextPassword] = useState("");

  const [fontsLoaded] = useFonts({
    'Roboto': require('./../assets/fonts/Roboto-Regular.ttf'),
  });


  return (
	<LinearGradient colors={['#751A33', '#B34233']} style={{flex:1}} locations={[0.0, 1.0]}>
    <SafeAreaView style={page.containerNoBackground}>
      <View style={page.ladida}>
        <Text style={page.title}>BICARE</Text>
        <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
        <View style={page.inputWrapper}>
          <TextInput
            style={page.input}
            placeholder="Enter your Username"
            onChangeText={(newText) => setTextUsername(newText)}
            value={usernameText}
          />
          <TextInput
            style={page.input}
            secureTextEntry={true}
            placeholder="Enter your Password"
            onChangeText={(newText) => setTextPassword(newText)}
            value={passwordText}
          />
        </View>
        <View style={page.buttonWrapper}>
          <TouchableOpacity
            style={page.button}
            onPress={() => navigation.navigate("Navigation")}
          >
          <Text
              style={page.buttonText}
            > 
              Login 
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={page.button}
            onPress={() => navigation.navigate("SignupScreen")}
		      >
          <Text
            style={page.buttonText}
          > 
            Sign up 
          </Text>
            </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView> 
	</LinearGradient>
  );
}
