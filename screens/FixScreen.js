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
import {Image, TouchableOpacity} from "react-native";


export default function FixScreen({ navigation }){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
            <Image
        		style={page.tinyLogo}
        		source={require('../img/logoWhiteTrial2.png')}
      		/>
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
