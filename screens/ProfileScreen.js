//Work in Progress
import {
    Text,
    View,
    SafeAreaView,
  } from "react-native";
import React, { useState } from "react";
import {styles} from './NewRepairRequest'
import {Image, TouchableOpacity} from "react-native";
import { auth } from '../src/firebase';

export default function ProfileScreen({ navigation }){

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.navigate("LoginScreen")
            })
            .catch(error => alert(error.message))
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
            <Image
        		style={page.tinyLogo}
        		source={require('../img/logoWhiteTrial2.png')}
      		/>
                <Text style={styles.subtitle}>Barter your bike repair anywhere</Text>
                <Text style={styles.header}>Profile</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignOut}
                >
                    <Text style={styles.buttonText}> 
                        Logout 
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}