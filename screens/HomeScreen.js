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
import {TouchableOpacity} from "react-native";
import page from '../styles'

export default function HomeScreen({ navigation }){
    return(
        <SafeAreaView style={page.container}>
            <View style={page.view}>
                <Text style={page.title}>BICARE</Text>
                <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
                <Text style={page.header}>Home Screen</Text>
                <TouchableOpacity
                    style={page.button}
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