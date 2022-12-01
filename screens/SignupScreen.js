import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import page from '../styles'
import {TouchableOpacity} from "react-native"; 
import { LinearGradient } from 'expo-linear-gradient';
import { auth } from '../src/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupScreen({ navigation }) {
  const [phoneNumberText, setTextPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [usernameText, setTextUsername] = useState("");
  const [passwordText, setTextPassword] = useState("");
  const [repasswordText, setTextRePassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Navigation")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, passwordText)
      .then(userCredentials => {
        const user = userCredentials.user;
        window.alert('Successfully signed up with email ' + email)
        navigation.navigate("Navigation")
      })
      .catch(error => alert(error.message))
  }

  return (
    <LinearGradient colors={['#751A33', '#B34233']} style={{flex:1}} locations={[0.0, 1.0]}>
    <SafeAreaView style={page.container}>
      <View style={page.ladida}>
        <Text style={page.title}>BICARE</Text>
        <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
        <View style={page.inputWrapper}>
          <TextInput
            style={page.input}
            placeholder="Enter your Email"
            onChangeText={(newText) => setEmail(newText)}
            value={email}
          />
          <TextInput
            style={page.input}
            placeholder="Enter your Phone number"
            onChangeText={(newText) => setTextPhoneNumber(newText)}
            value={phoneNumberText}
          />
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
          <TextInput
            style={page.input}
            secureTextEntry={true}
            placeholder="Re-enter your Password"
            onChangeText={(newText) => setTextRePassword(newText)}
            value={repasswordText}
          />
        </View>
        <View style={page.buttonWrapper}>
          <TouchableOpacity
            style={page.button}
            onPress={handleSignUp}
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
