//Work In Progress

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import React from "react";
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
