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
  import {styles} from './NewRepairRequest'
  import {TouchableOpacity} from "react-native";


export default function ProfileScreen({ navigation }){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.title}>BICARE</Text>
                <Text style={styles.subtitle}>Barter your bike repair anywhere</Text>
                <Text style={styles.header}>Profile</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("LoginScreen")}
                >
                    <Text style={styles.buttonText}> 
                        Logout 
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}