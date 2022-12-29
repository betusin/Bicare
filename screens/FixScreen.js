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
import MapFixer from "./MapFixer";

export default function FixScreen({ navigation }) {
  return (
    <SafeAreaView style={page.container}>
      <View style={page.view}>
        <Image
          style={page.tinyLogo}
          source={require("../img/logoWhiteTrial2.png")}
        />
        <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
        <Text style={page.header}>Fixer screen</Text>
        <View style={page.buttonWrapper}>
          <TouchableOpacity
            style={page.smallMap}
            onPress={() => navigation.navigate("MapFixer")}
          >
            <View style={page.bigMap} pointerEvents="none">
              <MapFixer></MapFixer>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={page.buttonProfile}
            onPress={() => navigation.navigate("Change Status to client")}
          >
            <Text style={page.buttonTextSmall}>Change Status</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
