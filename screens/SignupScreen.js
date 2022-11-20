import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-web";
import React, { useState } from "react";
import "typeface-roboto";

export default function SignupScreen() {
  const [phoneNumberText, setTextPhoneNumber] = useState("");
  const [usernameText, setTextUsername] = useState("");
  const [passwordText, setTextPassword] = useState("");
  const [repasswordText, setTextRePassword] = useState("");

  return (
    <View style={styles.ladida}>
      <View style={styles.container}>
        <Text style={styles.title}>BICARE</Text>
        <Text style={styles.text}>SIGN UP</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter your Phone number"
            onChangeText={(newText) => setTextPhoneNumber(newText)}
            value={phoneNumberText}
            on
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your Username"
            onChangeText={(newText) => setTextUsername(newText)}
            value={usernameText}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your Password"
            onChangeText={(newText) => setTextPassword(newText)}
            value={passwordText}
          />{" "}
          <TextInput
            style={styles.input}
            placeholder="Re-enter your Password"
            onChangeText={(newText) => setTextRePassword(newText)}
            value={repasswordText}
          />{" "}
          <View style={styles.space}></View>
          <Button
            style={styles.input}
            title="Sign up"
            onPress={() => navigation.navigate("SignupScreen")}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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