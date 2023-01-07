import { StatusBar } from "expo-status-bar";
import {Card} from "react-native-paper"
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

export default function OffersScreen({ navigation, route }) {
  const { request, requestID } = route.params;
  console.log("request ID:", requestID);

  const offersRef = collection(
    db,
    "repair_request",
    requestID,
    "offers"
  );
  const [docs, loading, error] = useCollectionData(offersRef);

  const [state, setState] = useState({ products: [] });
  const [docsColl] = useCollection(offersRef);

  if (docsColl) {
    state.products = [];
    docsColl.forEach((doc) => {
      state.products.push({
        id: doc.id,
        eta: doc.data().eta,
        fixer_id: doc.data().fixer_id,
        offered_price: doc.data().offered_price,
        isChecked: false,
      });
    });
  }

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
                fixerID = product.fixer_id;
              }
            });
            navigation.navigate("ClientWaitingScreen", {
              requestID: requestID,
              offers: state.products,
              offerID: id,
              fixerID: fixerID,
            });
          },
        },
        {
          text: "No",
          onPress: () => {
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
                    {/* <CheckBox
                    style={{
                      width: 30,
                      height: 30,
                      padding: 1,
                      alignSelf: "center",
                    }}
                    value={item.isChecked}
                    onValueChange={() => {
                      handleChange(item.id);
                    }}
                  /> */}
                    <View style={page.cardText}>
                      <View style={[page.profileRows]}>
                        <Text style={[page.profileField, page.cardFieldTitle]}>
                          Distance:
                        </Text>
                        <Text style={[page.profileField, page.cardFieldValue]}>
                          {item.distance} km
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
        {/* <TouchableOpacity
          style={page.button}
          onPress={() => navigation.navigate("Offers screen")} 
        >
          <Text>Choose offer</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}
