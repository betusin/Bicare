import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import page from '../styles'
import {TouchableOpacity} from "react-native"; 
import { LinearGradient } from 'expo-linear-gradient';
export default function SignupScreen(navigation) {
  const [phoneNumberText, setTextPhoneNumber] = useState("");
  const [usernameText, setTextUsername] = useState("");
  const [passwordText, setTextPassword] = useState("");
  const [repasswordText, setTextRePassword] = useState("");

  return (
    <LinearGradient colors={['#751A33', '#B34233']} style={{flex:1}} locations={[0.0, 1.0]}>
    <SafeAreaView style={page.container}>
      <View style={page.ladida}>
        <Text style={page.title}>BICARE</Text>
        <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
        <View style={page.inputWrapper}>
          <TextInput
            style={page.input}
            placeholder="Enter your Phone number"
            onChangeText={(newText) => setTextUsername(newText)}
            value={usernameText}
          />
          <TextInput
            style={page.input}
            secureTextEntry={true}
            placeholder="Enter your Username"
            onChangeText={(newText) => setTextPassword(newText)}
            value={passwordText}
          />
          <TextInput
            style={page.input}
            placeholder="Enter your Password"
            onChangeText={(newText) => setTextUsername(newText)}
            value={usernameText}
          />
          <TextInput
            style={page.input}
            secureTextEntry={true}
            placeholder="Re-enter your Password"
            onChangeText={(newText) => setTextPassword(newText)}
            value={passwordText}
          />
        </View>
        <View style={page.buttonWrapper}>
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
