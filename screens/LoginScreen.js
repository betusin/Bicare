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
import {TouchableOpacity} from "react-native";
import { useFonts } from 'expo-font';
import SignupScreen from "./SignupScreen";

export default function LoginScreen({ navigation }) {
  const [usernameText, setTextUsername] = useState("");
  const [passwordText, setTextPassword] = useState("");

  const [fontsLoaded] = useFonts({
    'Roboto': require('./../assets/fonts/Roboto-Regular.ttf'),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ladida}>
        <Text style={styles.title}>BICARE</Text>
        <Text style={styles.subtitle}>Barter your bike repair anywhere</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="  Enter your Username"
            onChangeText={(newText) => setTextUsername(newText)}
            value={usernameText}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="  Enter your Password"
            onChangeText={(newText) => setTextPassword(newText)}
            value={passwordText}
          />
		  <View style={styles.space}> </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Login Button pressed")}
          >
			<Text
		  		style={styles.buttonText}
		  	> 
		  	Login </Text>
		  </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SignupScreen")}
		  >
		  	<Text> Sign up </Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 42,
    fontFamily: "Roboto",
  },
  button: {
    alignItems: "center",
	borderRadius: 5,
    backgroundColor: "#F5D466",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "5%",
    shadowColor: "#000",
    shadowOffset: {
     	width: 0,
     	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
	width: 100,
	height: 30, 

  },
  buttontext: {
	fontFamily: "Roboto",
  }, 
  text: {
    flex: 0.1,
    color: "white",
    fontSize: 26,
    fontWeight: "300",
    alignItems: "center",
    justifyContent: "center", 
    fontFamily: "Roboto",
  },

  subtitle: {
	flex: 0.2,
    color: "white",
    fontSize: 26,
    fontWeight: "300",
    alignItems: "center",
    justifyContent: "center", 
    fontFamily: "Roboto",
  },
  ladida: {
    //backgroundImage: "linear-gradient(#751A33, #B34233)",
    backgroundSize: "cover",
    height: "80%",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(#751A33, #B34233)",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    //flex: 0.1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "5%",
    shadowColor: "#000",
    shadowOffset: {
     	width: 0,
     	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
	height: 25,
	width: 200,
  },
  inputWrapper: {
    //flex: 0.1,
    //backgroundColor: "red",
    alignItems: "center",
    
    //justifyContent: "center",
  },
  space: {
	//backgroundColor: "white",
    width: 100, // or whatever size  you need
    height: 75, 
  },
});
