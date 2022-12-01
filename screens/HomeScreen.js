<<<<<<< HEAD
//Work In Progress

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import {styles} from './NewRepairRequest'
import {TouchableOpacity} from "react-native";


export default function HomeScreen({ navigation }){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.title}>BICARE</Text>
                <Text style={styles.subtitle}>Barter your bike repair anywhere</Text>
                <Text style={styles.header}>Home Screen</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("New Repair Request")}
                >
                    <Text> 
                        New Repair Request 
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
=======
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../src/firebase';

export default function HomeScreen({ navigation }) {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("LoginScreen")
        console.log("signed out")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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
    container: {
      flex: 1,
      backgroundImage: "linear-gradient(#751A33, #B34233)",
      alignItems: "center",
      justifyContent: "center",
    },
});
  
>>>>>>> Draft: HomeScreen to be able to navigate after loging
