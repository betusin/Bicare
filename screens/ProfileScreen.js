//Work in Progress
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    SafeAreaView,
  } from "react-native";
import React, { useState } from "react";
import page from '../styles'
import {TouchableOpacity} from "react-native";


//Placeholders for design, these need to be pulled from the db
const name = "John Doe"
const phone = "06-12345678"
const email = "john.doe@email.com"
const jobs_made = 8;

export default function ProfileScreen({ navigation }){
    return(
        <SafeAreaView style={page.container}>
            <View style={page.view}>
                <Text style={page.title}>BICARE</Text>
                <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
                <Text style={page.header}>Profile</Text>
                <TouchableOpacity
                    style={page.button}
                    onPress={() => navigation.navigate("LoginScreen")}
                >
                    <Text style={page.buttonText}> 
                        Logout 
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}