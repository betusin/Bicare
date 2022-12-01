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
import {styles} from './NewRepairRequest';
import page from '../styles';
import {TouchableOpacity} from "react-native";


export default function HomeScreen({ navigation }){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <Text style={page.title}>BICARE</Text>
                <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
                <Text style={page.header}>Home Screen</Text>
                <TouchableOpacity
                    style={page.bigButton}
                    onPress={() => navigation.navigate("New Repair Request")}
                >
                    <Text
						style={page.buttonText}
	    			> 
                        New Repair Request 
                    </Text>
                </TouchableOpacity>
            	
                <TouchableOpacity
                    style={page.bigButton}
                    onPress={() => navigation.navigate("Change Status to fixer")}
                >
                    <Text
						style={page.buttonText}
	    			>
						Change Status 
                    </Text>
				
                </TouchableOpacity>
			</View>
        </SafeAreaView>
    );
}