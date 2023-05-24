import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import React, { useState, useEffect } from "react";
import page from '../styles'
import { Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { auth, db } from '../src/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore';
import Toast from 'react-native-toast-message';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
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
    if (passwordText != repasswordText) {
      Toast.show({
        type: 'error',
        text1: "Passwords are not matching!",
      });
    } else {
      createUserWithEmailAndPassword(auth, email, passwordText)
        .then(userCredentials => {
          const user = userCredentials.user;
          sendEmailVerification(user)
            .catch(error => {
              Toast.show({
                type: 'error',
                text1: error.message,
              });
            });
          const userData = {
            username: username,
          }
          setDoc(doc(db, "users", user.uid), userData)
            .then(() => {
              Toast.show({
                type: 'success',
                text1: 'Successfully signed up!',
                text2: `You have signed up with email ${email}`
              });
              navigation.navigate("Navigation")
            })
            .catch(error => Toast.show({
              type: 'error',
              text1: error.message,
            }));
        })
        .catch(error => Toast.show({
          type: 'error',
          text1: error.message,
        }))
    }
  }

  return (
    <LinearGradient colors={['#751A33', '#B34233']} style={{ flex: 1 }} locations={[0.0, 1.0]}>
      <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} enabled keyboardVerticalOffset={0}>
        <ScrollView behavior="padding" style={page.scrollContainerNoBackground} contentContainerStyle={page.scrollContainerContent}>
          <View style={page.scrollView}>
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
                placeholder="Enter your Username"
                onChangeText={(newText) => setUsername(newText)}
                value={username}
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
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
