import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import {TouchableOpacity} from "react-native";
import page from '../styles';
import {
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider,
} from 'firebase/auth';
import { auth } from "../src/firebase";

export default function LoginScreen({ navigation }) {
    const [oldPasswordText, setOldPasswordText] = useState("");
    const [newPasswordText, setNewPasswordText] = useState("");
    const [reenterPasswordText, setReenterPasswordText] = useState("");

    const changePassword = async () => {
        if (newPasswordText != reenterPasswordText) {
            alert("New password and reentered are not matching!")
            return;
        }

        const credential = EmailAuthProvider.credential(
            auth.currentUser.email,
            oldPasswordText
        );
        reauthenticateWithCredential(auth.currentUser, credential)
            .then(() => {
                updatePassword(auth.currentUser, newPasswordText)
                    .then(() => {
                        alert("Password changed successfully");
                        navigation.navigate("Profile");
                    })
                    .catch(error => alert(error.message))
            })
            .catch(error => alert(error.message))
    }

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
                onPress={changePassword}
            >
                <Text style={page.buttonTextSmall} >
                Change Password
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={page.buttonProfile}
                onPress={() => navigation.navigate("Profile")}
                >
                <Text style={page.buttonTextSmall}>
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