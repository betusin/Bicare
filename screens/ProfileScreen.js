//Work in Progress
import {
    Text,
    View,
    SafeAreaView,
  } from "react-native";
import React, { useState } from "react";
import page from '../styles'
import {styles} from './NewRepairRequest'
import {Image, TouchableOpacity} from "react-native";
import { auth } from '../src/firebase';
import { sendEmailVerification } from "firebase/auth";
import { getUserData } from "../src/db/user"

//Placeholders for design, these need to be pulled from the db
const name = "Jesse Ravensbergen"
const phone = "06-12345678"
const jobs_made = 8;
const balance = 4.52;

export default function ProfileScreen({ navigation }){
    const [ userData, setUserData ] = useState({
        username: "",
    });
    const user = auth.currentUser;

    getUserData(user.uid)
    .then((data) => {
        console.log(data.data)
        setUserData(data);
    })
    .catch(error => alert(error))

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.navigate("LoginScreen")
            })
            .catch(error => alert(error.message))
    }

    const verifyAccount = () => {
        sendEmailVerification(user)
        .then(() => {
            alert("Email verification send!")
        })
        .catch(error => alert(error.message));
    }

    return(
        <SafeAreaView style={page.container}>
            <View style={page.view}>
            <Image
        		style={page.tinyLogo}
        		source={require('../img/logoWhiteTrial2.png')}
      		  />
                <Text style={page.title}>Profile</Text>


                <View style={page.profileColumn}>
                    <View style={[page.profileRows]}>
                        <Text style={[page.profileField,page.profileFieldTitle]}>Username:</Text>
                        <Text style={[page.profileField,page.profileFieldValue]}>{userData.username}</Text>
                    </View>
                    <View style={[page.profileRows]}>
                        <Text style={[page.profileField,page.profileFieldTitle]}>Email Address:</Text>
                        <Text style={[page.profileField,page.profileFieldValue]}>{user.email}</Text>
                    </View>
                    <View style={[page.profileRows]}>
                        <Text style={[page.profileField,page.profileFieldTitle]}>Email verified:</Text>
                        <Text style={[page.profileField,page.profileFieldValue]}>{user.emailVerified ? "yes" : "no"}</Text>
                    </View>
                    <View style={[page.profileRows]}>
                        <Text style={[page.profileField,page.profileFieldTitle]}>Phone Number:</Text>
                        <Text style={[page.profileField,page.profileFieldValue]}>{phone}</Text>
                    </View>
                    <View style={[page.profileRows, {marginTop: 20}]}>
                        <Text style={[page.profileField,page.profileFieldTitle]}>Balance:</Text>
                        <Text style={[page.profileField,page.profileFieldValue]}>€ {balance}</Text>
                    </View>
                    <View style={[page.profileRows]}>
                        <Text style={[page.profileField,page.profileFieldTitle]}>Jobs Offered:</Text>
                        <Text style={[page.profileField,page.profileFieldValue]}>{jobs_made}</Text>
                    </View>
                </View>


                {!user.isEmailVerified &&
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
                <TouchableOpacity
                    style={page.buttonProfile}
                    onPress={() => navigation.navigate("LoginScreen")}
                >
                    <Text style={page.buttonTextSmall}>
                        Register as Fixer                    
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={page.buttonProfile}
                    onPress={handleSignOut}
                >
                    <Text style={page.buttonTextSmall}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}