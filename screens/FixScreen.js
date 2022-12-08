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
import page from '../styles';
import {Image, TouchableOpacity} from "react-native";


export default function FixScreen({ navigation }){
    return(
        <SafeAreaView style={page.container}>
            <View style={page.view}>
            <Image
        		style={page.tinyLogo}
        		source={require('../img/logoWhiteTrial2.png')}
      		/>
                <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
                <Text style={page.header}>Fixer screen</Text>
                <TouchableOpacity
                    style={page.buttonProfile}
                    onPress={() => navigation.navigate("Change Status to client")}
                >
                    <Text
						style={page.buttonTextSmall}
	    			>
						Change Status 
                    </Text>
				
                </TouchableOpacity>
            	
			</View>
        </SafeAreaView>
    );
}
