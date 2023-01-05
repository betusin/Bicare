import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  Accuracy,
} from "expo-location";
import DropDownPicker from "react-native-dropdown-picker";
import page from "../styles";
import { addDoc, collection, GeoPoint, Timestamp } from "firebase/firestore";
import { db, auth } from "../src/firebase";
import * as Location from "expo-location";
import { doc, getDoc } from "firebase/firestore";

export default function NewRepairRequest({ navigation }) {
  const [description, onChangeText] = React.useState("Useless Text");
  const [amount, onChangeNumber] = React.useState(10);
  const [location, setLocation] = useState({});

  // const [description, onChangeText] = React.useState("Useless Text");
  // const [amount, onChangeNumber] = React.useState(10);
  // const [location, setLocation] = useState({});

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Flat Tire", value: "flattire" },
    { label: "Detached Chain", value: "chain" },
    { label: "Other Issue", value: "other" },
  ]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      // Gets the location from expo
      try {
        let location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
          enableHighAccuracy: true,
          timeInterval: 5,
        });
        setLocation(location);
      } catch (error) {
        console.log(error + "error");
      }
    })();
  }, []);

  const createRepairRequest = () => {
    var selectedItem = items.filter((item) => item.value == value)[0];
    console.log(selectedItem);
    if (
      selectedItem == undefined &&
      description.length != 0 &&
      amount.length != 0
    ) {
      alert("All fields must be filled in");
      return;
    }
    const user = auth.currentUser;
    console.log(selectedItem);
    const data = {
      problem: selectedItem.label,
      description: description,
      amount: Number(amount),
      requester: user.uid,
      location: new GeoPoint(
        location.coords.latitude,
        location.coords.longitude
      ),
      createdAt: Timestamp.fromDate(new Date()),
    };
    addDoc(collection(db, "repair_request"), data)
      .then((docRef) => {
        alert("Repair successfully requested!");
        navigation.navigate("Offers screen", {
          request: data,
        });
      })
      .catch((error) => alert(error.message));
  };

  // useEffect(() => {
  //     (async () => {
  //         let { status } = await requestForegroundPermissionsAsync();
  //         if (status !== "granted") {
  //         return;
  //         }
  //         // Gets the current location from expo
  //         try {
  //         let location = await getCurrentPositionAsync({
  //             accuracy: Accuracy.Balanced,
  //             enableHighAccuracy: true,
  //             timeInterval: 5,
  //         });
  //         setLocation(location);
  //         } catch (error) {
  //         alert(error);
  //         }
  //     })();
  // }, []);

  // const createRepairRequest = () => {
  //     const user = auth.currentUser;
  //     var selectedItem = items.filter((item) => item.value == value)[0];
  //     const data = {
  //         problem: selectedItem.label,
  //         description: description,
  //         amount: Number(amount),
  //         requester: user.uid,
  //         location: new GeoPoint(location.coords.latitude, location.coords.longitude),
  //         createdAt: Timestamp.fromDate(new Date()),
  //    };

  // addDoc(collection(db, "repair_request"), data)
  //   .then((docRef) => {
  //     alert("Repair successfully requested!");
  //   })
  //   .catch((error) => alert(error.message));

  //         //navigation.navigate("Offers screen");
  //}

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
      enabled
      keyboardVerticalOffset={0}
    >
      <ScrollView
        behavior="padding"
        style={page.scrollContainer}
        contentContainerStyle={page.scrollContainerContent}
      >
        <View style={page.scrollView}>
          <Image
            style={page.tinyLogo}
            source={require("../img/logoWhiteTrial2.png")}
          />
          <Text style={page.header}>New Repair Request</Text>
          <View style={page.inputWrapper}>
            <Text style={page.fieldTitle}>Problem</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
            <Text style={page.fieldTitle}>Price</Text>
            <View style={page.amountView}>
              <Text style={page.euroSign}>€</Text>
              <TextInput
                style={page.amountInput}
                placeholder="10"
                onChangeText={onChangeNumber}
                keyboardType="numeric"
              />
            </View>

            <Text style={page.fieldTitle}>Description</Text>
            <TextInput
              style={page.descriptionInput}
              placeholder="Describe the issue"
              onChangeText={onChangeText}
              multiline
              numberOfLines={4}
            />
            <TouchableOpacity style={page.button} onPress={createRepairRequest}>
              <Text>Create repair request</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
