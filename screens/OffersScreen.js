import { StatusBar } from "expo-status-bar";
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
  CheckBox
} from "react-native";
import React, { useState } from "react";
import { useFonts } from 'expo-font';
import DropDownPicker from 'react-native-dropdown-picker';
import page from '../styles'



export default function OffersScreen({ navigation }){

    const data = [
        { id: 1, txt: 'first check', isChecked: false },
        { id: 2, txt: 'second check', isChecked: false },
        { id: 3, txt: 'third check', isChecked: false },
        { id: 4, txt: 'fourth check', isChecked: false },
        { id: 5, txt: 'fifth check', isChecked: false },
        { id: 6, txt: 'sixth check', isChecked: false },
        { id: 7, txt: 'seventh check', isChecked: false },
      ];

    this.state = {
        products: data,
    };
    
    handleChange = (id) => {
        let temp = this.state.products.map((product) => {
          if (id === product.id) {
            return { ...product, isChecked: !product.isChecked };
          }
          return product;
        });
        this.setState({
          products: temp,
        });
    };

    renderFlatList = (renderData) => {
        return (
          <FlatList
            data={renderData}
            renderItem={({ item }) => (
              <Card style={{ margin: 5 }}>
                <View style={styles.card}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'space-between',
                    }}>
                    <CheckBox
                      value={item.isChecked}
                      onChange={() => {
                        this.handleChange(item.id);
                      }}
                    />
                    <Text>{item.txt}</Text>
                  </View>
                </View>
              </Card>
            )}
          />
        );
      };

    return(
        <SafeAreaView style={page.container}>
            <View style={page.view}>
                <Image
                    style={page.tinyLogo}
                    source={require('../img/logoWhiteTrial2.png')}
                />                
                <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
                <Text style={page.header}>Offers screen</Text>
                <View style={{ flex: 1 }}>
                    {this.renderFlatList(this.state.products)}
                </View>
            </View>
        </SafeAreaView>
    );
}