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


export default function FixScreen({ navigation }){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <Text style={page.title}>BICARE</Text>
                <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
                <Text style={page.header}>Fixer screen</Text>
                <TouchableOpacity
                    style={page.bigButton}
                    onPress={() => navigation.navigate("Change Status to client")}
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
