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
  CheckBox
} from "react-native";
import React, { useState } from "react";
import { useFonts } from 'expo-font';
import DropDownPicker from 'react-native-dropdown-picker';
import page from '../styles'



export default function OffersScreen({ navigation }){

    const data = [
        { id: 1, distance: 'distance',  ETA: 'eta', price: 'price', isChecked: false },
        { id: 2, distance: 'distance', ETA: 'eta', price: 'price',  isChecked: false },
        { id: 3, distance: 'distance',  ETA: 'eta', price: 'price', isChecked: false },
        { id: 4, distance: 'distance', ETA: 'eta', price: 'price',  isChecked: false },
        { id: 5, distance: 'distance',  ETA: 'eta', price: 'price', isChecked: false },
        { id: 6, distance: 'distance',  ETA: 'eta', price: 'price', isChecked: false },
        { id: 7, distance: 'distance',ETA: 'eta', price: 'price',  isChecked: false },
      ];
      const [state, setState] = useState({products: data});
    // this.state = {
    //     products: data,
    // };
    
    const handleChange = (id) => {
        let temp = state.products.map((product) => {
          if (id === product.id) {
            return { ...product, isChecked: !product.isChecked };
          }
          return product;
        });
        setState({
          products: temp,
        });
    };

    const [amount, onChangeNumber] = React.useState(null);

    const renderFlatList = (renderData) => {
        return (
          <FlatList
            data={renderData}
            renderItem={({ item }) => (
              <Card style={{ margin: 5 }}>
                <View style={page.card}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'center',
                    }}>
                    <CheckBox
                      value={item.isChecked}
                      onChange={() => {
                        handleChange(item.id);
                      }}
                    />
                    <View style={page.cardText}>
                      <Text>{item.distance}</Text>
                      <Text>{item.ETA}</Text>
                      <Text>{item.price}</Text>
                    </View>
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
                <View style={page.inputWrapper}>
                <Text style={page.fieldTitle}>Initial price</Text>
                <View style={page.initialPrice}>
                      <Text style={page.euroSign}>€</Text>
                      <TextInput
                          style={page.amountInput}
                          placeholder="10"
                          onChangeText={onChangeNumber}
                          keyboardType="numeric"
                      />
                </View>
                <View style={{ flex: 1}}>
                    {renderFlatList(state.products)}
                </View>
                </View>
                <TouchableOpacity
                        style={page.button}
                        /* onPress={() => navigation.navigate("Offers screen")} */
                    >
                        <Text>
                            Choose offer
                        </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}