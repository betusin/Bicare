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
import page from '../styles'

export default function LoginScreen({ navigation }) {
    const [oldPasswordText, setOldPasswordText] = useState("");
    const [newPasswordText, setNewPasswordText] = useState("");
    const [reenterPasswordText, setReenterPasswordText] = useState("");
  
return (
    <SafeAreaView style={page.container}>
        <View style={page.ladida}>
            <Text style={page.title}>BICARE</Text>
            <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
            <View style={page.inputWrapper}>
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Enter your current password"
                onChangeText={(newText) => setOldPasswordText(newText)}
                value={oldPasswordText}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Enter a new password"
                onChangeText={(newText) => setNewPasswordText(newText)}
                value={newPasswordText}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Reenter the new password"
                onChangeText={(newText) => setReenterPasswordText(newText)}
                value={reenterPasswordText}
            />
            </View>
            <View style={page.buttonWrapper}>
            <TouchableOpacity
                style={page.buttonProfile}
                onPress={() => navigation.navigate("Profile")} //This needs to store the new password
            >
                <Text style={page.buttonText} >
                Change Password 
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={page.buttonProfile}
                onPress={() => navigation.navigate("Profile")}
                >
                <Text style={page.buttonText}> 
                Back to Profle
                </Text>
            </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView> 
)};

export const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        fontSize: 14,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left",
        paddingLeft: 5,
        marginVertical: "3%",
        marginHorizontal:"3%",
        shadowColor: "#000",
        shadowOffset: {
                width: 0,
                height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        height: 50,
        width: 260,
    },
})