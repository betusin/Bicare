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
//import "typeface-roboto";
import SignupScreen from "./SignupScreen";

export default function LoginScreen({ navigation }) {
  const [usernameText, setTextUsername] = useState("");
  const [passwordText, setTextPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ladida}>
        <Text style={styles.title}>BICARE</Text>
        <Text style={styles.text}>Barter your bike repair anywhere</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter your Username"
            onChangeText={(newText) => setTextUsername(newText)}
            value={usernameText}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Enter your Password"
            onChangeText={(newText) => setTextPassword(newText)}
            value={passwordText}
          />
          <Button
            style={styles.input}
            title="Login"
            onPress={() => navigation.navigate("Maps")}
          />
          <View style={styles.space}></View>
          <Button
            style={styles.input}
            title="Sign up"
            onPress={() => navigation.navigate("SignupScreen")}
          />
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
    //fontFamily: "Roboto",
  },
  text: {
    color: "white",
    fontSize: 26,
    fontWeight: "300",
    alignItems: "center",
    //fontFamily: "Roboto",
  },
  ladida: {
    //backgroundImage: "linear-gradient(#751A33, #B34233)",
    backgroundSize: "cover",
    height: "100%",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    //flex: 0.3,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "5%",
  },
  inputWrapper: {
    //flex: 0.3,
    //backgroundColor: "red",
    alignItems: "center",

    //justifyContent: "center",
  },
  space: {
    width: 20, // or whatever size  you need
    height: 40,
  },
});
