import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from "react";
import {Image, TouchableOpacity} from "react-native";
import { useFonts } from 'expo-font';
import page from '../styles'
import { auth } from '../src/firebase';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [passwordText, setTextPassword] = useState("");

  const [fontsLoaded] = useFonts({
    'Roboto': require('./../assets/fonts/Roboto-Regular.ttf'),
  });


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Navigation")
      }
    })

    return unsubscribe
  }, [])

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, passwordText)
      .then(userCredentials => {
        const user = userCredentials.user;
        window.alert('Logged in with:' + user.email);
        navigation.navigate("Navigation")
      })
      .catch(error => alert(error.message))
  }

  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Reset password email sent. Check your inbox.")
      })
      .catch((error) => {
        alert(error.message)
      });
  }

return (
  <LinearGradient colors={['#751A33', '#B34233']} style={{flex:1}} locations={[0.0, 1.0]}>
    <SafeAreaView style={page.containerNoBackground}>
      <View style={page.ladida}>
        <Image
          style={page.tinyLogo}
          source={require('../img/logoWhiteTrial2.png')}
        />
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
            secureTextEntry={true}
            placeholder="Enter your Password"
            onChangeText={(newText) => setTextPassword(newText)}
            value={passwordText}
          />
        </View>
        <View style={page.buttonWrapper}>
          <TouchableOpacity
            style={page.button}
            onPress={handleLogin}
          >
            <Text
                style={page.buttonText}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={page.button}
            onPress={resetPassword}
          >
            <Text
                style={page.buttonText}
            >
              Forgot Password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={page.button}
            onPress={() => navigation.navigate("SignupScreen")}
          >
            <Text
              style={page.buttonText}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  </LinearGradient>
);
}
