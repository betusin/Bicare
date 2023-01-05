//Work In Progress

import {
  Text,
  View,
  SafeAreaView,
  Switch
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import page from "../styles";
import { Image, TouchableOpacity } from "react-native";
import MapFixer from "./MapFixer";
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { doc, setDoc, GeoPoint, deleteDoc } from "@firebase/firestore";
import { auth, db } from '../src/firebase';

export default function FixScreen({ navigation }) {
  const user = auth.currentUser;
  const docRef = doc(db, "users", user.uid);
  const [userData, loading, error] = useDocumentData(docRef);
  const [isEnabled, setIsEnabled] = useState(false);
  const [location, setLocation] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      // Gets the current location from expo
      try {
        let location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
          enableHighAccuracy: true,
          timeInterval: 5,
        });
        setLocation(location);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);

    if (isEnabled) {
      const geoPoint = new GeoPoint(location.coords.latitude, location.coords.longitude)
      setDoc(doc(db, "active_fixers", user.uid), {
        location: geoPoint,
        username: userData.username,
      })
      .then(() => {
      })
      .catch((error) => {
        alert(error.message);
      })
    } else {
      deleteDoc(doc(db, "active_fixers", user.uid));
    }

    setDoc(docRef, { isAvailable: isEnabled }, { merge: true })
      .then(() => {
        alert("Successfully changed availability!");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

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
          { userData &&
            <View style={[page.profileRows]}>
              <Text style={[page.profileField,page.profileFieldValue]}>Change availability</Text>
              <Switch
                trackColor={{ false: "#767577", true: "white" }}
                thumbColor={userData.isAvailable ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#F5D466"
                onValueChange={toggleSwitch}
                value={userData.isAvailable}
              />
            </View>
          }
        </View>
      </View>
    </SafeAreaView>
  );
}
