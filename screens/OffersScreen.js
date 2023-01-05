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
} from "react-native";

import CheckBox from "expo-checkbox";
import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import DropDownPicker from "react-native-dropdown-picker";
import page from "../styles";

export default function OffersScreen({ navigation, route }) {
  const data = [
    {
      id: 1,
      distance: "distance",
      ETA: "eta",
      price: "price",
      isChecked: false,
    },
    {
      id: 2,
      distance: "distance",
      ETA: "eta",
      price: "price",
      isChecked: false,
    },
    {
      id: 3,
      distance: "distance",
      ETA: "eta",
      price: "price",
      isChecked: false,
    },
    {
      id: 4,
      distance: "distance",
      ETA: "eta",
      price: "price",
      isChecked: false,
    },
    {
      id: 5,
      distance: "distance",
      ETA: "eta",
      price: "price",
      isChecked: false,
    },
    {
      id: 6,
      distance: "distance",
      ETA: "eta",
      price: "price",
      isChecked: false,
    },
    {
      id: 7,
      distance: "distance",
      ETA: "eta",
      price: "price",
      isChecked: false,
    },
  ];
  const [state, setState] = useState({ products: data });
  const requestData = route.params.request;

  const handleChange = (id) => {
    let temp = state.products.map((product) => {
      if (id !== product.id) {
        return { ...product, isChecked: false };
      }
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    setState({
      products: temp,
    });
  };

  const renderFlatList = (renderData) => {
    return (
      <FlatList
        data={renderData}
        renderItem={({ item }) => (
          <Card style={{ margin: 5, backgroundColor: "#F5D466" }}>
            <View style={page.card}>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <CheckBox
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
                />
                <View style={page.cardText}>
                  <View style={[page.profileRows]}>
                    <Text style={[page.profileField, page.cardFieldTitle]}>
                      Distance:
                    </Text>
                    <Text style={[page.profileField, page.cardFieldValue]}>
                      {item.distance}
                    </Text>
                  </View>
                  <View style={[page.profileRows]}>
                    <Text style={[page.profileField, page.cardFieldTitle]}>
                      ETA:
                    </Text>
                    <Text style={[page.profileField, page.cardFieldValue]}>
                      {item.ETA}
                    </Text>
                  </View>
                  <View style={[page.profileRows]}>
                    <Text style={[page.profileField, page.cardFieldTitle]}>
                      Price:
                    </Text>
                    <Text style={[page.profileField, page.cardFieldValue]}>
                      {item.price}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Card>
        )}
      />
    );
  };

  useEffect(() => {
    (async () => {
      console.log(requestData);
    })();
  }, []);

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
              style={page.amountInput}
              placeholder="10"
              editable={false}
              value={String(requestData.amount)}
            />
          </View>
          <View style={{ flex: 1 }}>{renderFlatList(state.products)}</View>
        </View>
        <TouchableOpacity
          style={page.button}
          /* onPress={() => navigation.navigate("Offers screen")} */
        >
          <Text>Choose offer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
