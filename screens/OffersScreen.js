import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import { useFonts } from 'expo-font';
import DropDownPicker from 'react-native-dropdown-picker';
import page from '../styles'

export default function OffersScreen({ navigation }){

    return(
        <SafeAreaView style={page.container}>
            <View style={page.view}>
                <Image
                    style={page.tinyLogo}
                    source={require('../img/logoWhiteTrial2.png')}
                />                
                <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
                <Text style={page.header}>Offers screen</Text>

            </View>
        </SafeAreaView>
    );
}