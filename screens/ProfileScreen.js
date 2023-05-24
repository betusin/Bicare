//Work in Progress
import {
    Text,
    View,
    ScrollView,
    KeyboardAvoidingView
} from "react-native";
import React from "react";
import page from '../styles'
import { Image, TouchableOpacity } from "react-native";
import { db, auth } from '../src/firebase';
import { sendEmailVerification } from "firebase/auth";
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { doc, setDoc } from "firebase/firestore";
import Toast from "react-native-toast-message";

//Placeholders for design, these need to be pulled from the db
const jobs_made = 8;

export default function ProfileScreen({ navigation }) {
    const user = auth.currentUser;
    const docRef = doc(db, "users", user.uid);
    const [userData, loading, error] = useDocumentData(docRef);

    if (error) {
        Toast.show({
            type: 'error',
            text1: JSON.stringify(error),
        });
    }

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                Toast.show({
                    type: 'success',
                    text1: 'Successfully logged out!',
                    text2: `Hope to see you soon ${userData.username}!`
                });
                navigation.navigate("LoginScreen")
            })
            .catch(error => Toast.show({
                type: 'error',
                text1: error.message,
            }))
    }

    const verifyAccount = () => {
        sendEmailVerification(user)
            .then(() => {
                Toast.show({
                    type: 'success',
                    text1: 'Verification email was sent',
                    text2: `Check your inbox of email ${user.email}.`
                });
            })
            .catch(error => Toast.show({
                type: 'error',
                text1: error.message,
            }));
    }

    const registerAsFixer = () => {
        if (!user.emailVerified) {
            Toast.show({
                type: 'error',
                text1: "Account not verified!",
                text2: "Please verify your account before registering as a fixer.",
            });
            return;
        }
        setDoc(docRef, { isFixer: true }, { merge: true })
            .then(() => {
                Toast.show({
                    type: 'success',
                    text1: "Successfully registered as fixer!",
                    text2: "Congratulations! Now you can offer a repair for repair requests.",
                });
            })
            .catch((error) => {
                Toast.show({
                    type: 'error',
                    text1: error.message,
                });
            });
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} enabled keyboardVerticalOffset={0}>
            <ScrollView behavior="padding" style={page.scrollContainer} contentContainerStyle={page.scrollContainerContent}>
                <View style={page.scrollView}>
                    <Image
                        style={page.tinyLogo}
                        source={require('../img/logoWhiteTrial2.png')}
                    />
                    <Text style={page.title}>Profile</Text>


                    <View style={page.profileColumn}>
                        <View style={[page.profileRows]}>
                            <Text style={[page.profileField, page.profileFieldTitle]}>Username:</Text>
                            <Text style={[page.profileField, page.profileFieldValue]}>
                                {userData && userData.username}
                                {loading && "Loading..."}
                            </Text>
                        </View>
                        <View style={[page.profileRows]}>
                            <Text style={[page.profileField, page.profileFieldTitle]}>Email Address:</Text>
                            <Text style={[page.profileField, page.profileFieldValue]}>{user.email}</Text>
                        </View>
                        <View style={[page.profileRows]}>
                            <Text style={[page.profileField, page.profileFieldTitle]}>Email verified:</Text>
                            <Text style={[page.profileField, page.profileFieldValue]}>{user.emailVerified ? "yes" : "no"}</Text>
                        </View>
                        <View style={[page.profileRows, { marginTop: 20 }]}>
                            <Text style={[page.profileField, page.profileFieldTitle]}>Balance:</Text>
                            <Text style={[page.profileField, page.profileFieldValue]}>€&nbsp;
                                {userData && (userData.balance ? userData.balance : 0)}
                                {loading && "Loading..."}
                            </Text>
                        </View>
                        <View style={[page.profileRows]}>
                            <Text style={[page.profileField, page.profileFieldTitle]}>Jobs Offered:</Text>
                            <Text style={[page.profileField, page.profileFieldValue]}>{jobs_made}</Text>
                        </View>
                    </View>


                    {!user.emailVerified &&
                        <TouchableOpacity
                            style={page.buttonProfile}
                            onPress={verifyAccount}
                        >
                            <Text style={page.buttonTextSmall}>
                                Verify Account
                            </Text>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity
                        style={page.buttonProfile}
                        onPress={() => navigation.navigate("ChangePassword")}
                    >
                        <Text style={page.buttonTextSmall}>
                            Change Password
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={page.buttonProfile}
                        onPress={() => navigation.navigate("PaymentInfo")}
                    >
                        <Text style={page.buttonTextSmall}>
                            View Payment Info
                        </Text>
                    </TouchableOpacity>
                    {userData && !userData.isFixer &&
                        <TouchableOpacity
                            style={page.buttonProfile}
                            onPress={registerAsFixer}
                        >
                            <Text style={page.buttonTextSmall}>
                                Register as Fixer
                            </Text>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity
                        style={page.buttonProfile}
                        onPress={handleSignOut}
                    >
                        <Text style={page.buttonTextSmall}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}