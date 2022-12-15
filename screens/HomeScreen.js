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
import page from "../styles";
import { Image, TouchableOpacity } from "react-native";
import styles from "../styles";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={page.container}>
      <View style={page.view}>
        <Image
          style={page.tinyLogo}
          source={require("../img/logoWhiteTrial2.png")}
        />
        <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
        <Text style={page.header}>Home Screen</Text>
        <View style={page.buttonWrapper}>
          <TouchableOpacity
            style={page.buttonProfile}
            onPress={() => navigation.navigate("New Repair Request")}
          >
            <Text style={page.buttonTextSmall}>New Repair Request</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={page.buttonProfile}
            onPress={() => navigation.navigate("Change Status to fixer")}
          >
            <Text style={page.buttonTextSmall}>Change Status</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={page.buttonProfile}
            onPress={() => navigation.navigate("Maps")}
          ></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
