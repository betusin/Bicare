import { StatusBar } from "expo-status-bar";
import { Card } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Location from "expo-location";

import { db } from "../src/firebase";
import CheckBox from "expo-checkbox";
import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import DropDownPicker from "react-native-dropdown-picker";
import page from "../styles";
import {
  useCollectionData,
  useCollection,
} from "react-firebase-hooks/firestore";
import {
  collection,
  getDocs,
  setDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { getDistance } from "geolib";
import Toast from "react-native-toast-message";

export default function OffersScreen({ navigation, route }) {
  const { request, requestID } = route.params;
  console.log("request ID:", requestID);
  const [location, setLocation] = useState({});

  const offersRef = collection(db, "repair_request", requestID, "offers");
  const [docs, loading, error] = useCollectionData(offersRef);

  const [state, setState] = useState({ products: [] });
  const [docsColl] = useCollection(offersRef);

  if (docsColl) {
    state.products = [];
    docsColl.forEach((doc) => {
      state.products.push({
        id: doc.id,
        eta: doc.data().eta,
        fixer: doc.data().fixer,
        fixerLocation: doc.data().fixerLocation,
        offered_price: doc.data().offered_price,
        isChecked: false,
      });
    });
  }

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
        Toast.show({
          type: 'error',
          text1: error.message,
        });
      }
    })();
  }, []);

  const handleChange = (id) => {
    let temp = state.products.map((product) => {
      if (id == product.id) {
        return (product.isChecked = true);
      }
      return product;
    });
    setState({
      products: temp,
    });
  };
  function handlePress(id) {
    Alert.alert(
      "Repair Offer",
      "Do you want to accept this offer?",
      [
        {
          text: "Yes",
          onPress: () => {
            updateDoc(doc(db, "repair_request", requestID, "offers", id), {
              status: "accepted",
            });
            let fixerID = "";
            state.products.map((product) => {
              if (product.id != id) {
                updateDoc(
                  doc(db, "repair_request", requestID, "offers", product.id),
                  {
                    status: "rejected",
                  }
                );
              } else {
                fixerID = product.fixer;
              }
            });
            navigation.navigate("ClientWaitingScreen", {
              requestID: requestID,
              offers: state.products,
              offerID: id,
              fixerID: fixerID,
            });
            state.products = [];
          },
        },
        {
          text: "No",
          onPress: () => {
            updateDoc(doc(db, "repair_request", requestID, "offers", id), {
              status: "rejected",
            });
          },
        },
      ],
      { cancelable: false }
    );
  }

  const renderFlatList = (renderData) => {
    return (
      <FlatList
        data={renderData}
        renderItem={({ item }) => (
          (item.isChecked = false),
          (
            <TouchableOpacity onPress={() => handlePress(item.id)}>
              <Card style={{ margin: 5, backgroundColor: "#F5D466" }}>
                <View style={page.card}>
                  <View
                    style={{
                      flexDirection: "row",
                      flex: 1,
                      justifyContent: "center",
                    }}
                  >
                    <View style={page.cardText}>
                      <View style={[page.profileRows]}>
                        <Text style={[page.profileField, page.cardFieldTitle]}>
                          Distance:
                        </Text>
                        <Text style={[page.profileField, page.cardFieldValue]}>
                          {getDistance(
                            {
                              latitude: location.coords.latitude,
                              longitude: location.coords.longitude,
                            },
                            {
                              latitude: item.fixerLocation.latitude,
                              longitude: item.fixerLocation.longitude,
                            }
                          ) * 0.001}{" "}
                          km
                        </Text>
                      </View>
                      <View style={[page.profileRows]}>
                        <Text style={[page.profileField, page.cardFieldTitle]}>
                          ETA:
                        </Text>
                        <Text style={[page.profileField, page.cardFieldValue]}>
                          {item.eta} minutes
                        </Text>
                      </View>
                      <View style={[page.profileRows]}>
                        <Text style={[page.profileField, page.cardFieldTitle]}>
                          Price:
                        </Text>
                        <Text style={[page.profileField, page.cardFieldValue]}>
                          {item.offered_price} €
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          )
        )}
      />
    );
  };

  return (
    <SafeAreaView style={page.container}>
      <View style={page.view}>
        <Image
          style={page.tinyLogo}
          source={require("../img/logoWhiteTrial2.png")}
        />
        <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
        <Text style={page.header}>Offers screen</Text>
        <View style={page.inputWrapper}>
          <View style={page.initialPrice}>
            <Text style={page.euroSign}>Initial price €</Text>
            <TextInput
              value={String(request.amount)}
              style={page.amountInput}
              placeholder="10"
              editable={false}
            />
          </View>
          <View style={{ flex: 1 }}>{renderFlatList(state.products)}</View>
        </View>
        {state.products.length == 0 ? (
          <Text style={page.euroSign}>Waiting for offers...</Text>
        ) : (
          <View></View>
        )}
      </View>
    </SafeAreaView>
  );
}
