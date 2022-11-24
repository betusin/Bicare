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
export default function LoginScreen({ navigation }) {
  const [usernameText, setTextUsername] = useState("");
  const [passwordText, setTextPassword] = useState("");

  const [fontsLoaded] = useFonts({
    'Roboto': require('./../assets/fonts/Roboto-Regular.ttf'),
  });

  return (
	<LinearGradient colors={['#751A33', '#B34233']} style={{flex:1}} locations={[0.0, 1.0]}>
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Navigation")}
          >
			<Text
		  		style={styles.buttonText}
		  	> 
		  		Login 
		  	</Text>
		  </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SignupScreen")}
		  >
		  	<Text
		  		style={styles.buttonText}
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
     	width: 1,
     	height: 3,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4,

    elevation: 5,
	width: 150,
	height: 50, 
  },
  buttonText: {
	fontFamily: "Roboto",
	fontSize: 20,
	fontWeight: "bold",
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
	//flex: 0.2,
    color: "white",
    fontSize: 26,
    fontWeight: "300",
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
    //backgroundImage: "linear-gradient(#751A33, #B34233)",
	//backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    //flex: 0.1,
    backgroundColor: "white",
	fontSize: 18,
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
	height: 30,
	width: 250,
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
