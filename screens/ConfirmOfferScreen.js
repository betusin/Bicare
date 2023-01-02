import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    SafeAreaView,
  } from "react-native";
  import React, { useState } from "react";
  import page from '../styles';
  import {Image, TouchableOpacity} from "react-native";
  
  
  export default function ConfirmOfferScreen({ navigation }){
    const [offer, setOffer] = useState("");
    const [estimation, setEstimation] = useState("");
      return(
          <SafeAreaView style={page.container}>
              <View style={page.view}>
              <Image
                  style={page.tinyLogo}
                  source={require('../img/logoWhiteTrial2.png')}
                />
                    <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
                    <Text style={page.header}>Confirm your offer</Text>
                    <View style={page.inputWrapper}>
                    <TextInput
                      style={page.input}
                      placeholder="Price offer"
                      onChangeText={(newText) => setOffer(newText)}
                      value={offer}
                    />
                    <TextInput
                      style={page.input}
                      secureTextEntry={true}
                      placeholder="Time estimation in minutes"
                      onChangeText={(newText) => setEstimation(newText)}
                      value={estimation}
                    />
                    </View>

                  <TouchableOpacity
                      style={page.buttonProfile}
                  >
                      <Text
                          style={page.buttonTextSmall}
                      >
                          Confirm offer
                      </Text>
                  
                  </TouchableOpacity>

                  <TouchableOpacity
                      style={page.buttonProfile}
                  >
                      <Text
                          style={page.buttonTextSmall}
                      >
                          Back
                      </Text>
                  
                  </TouchableOpacity>
                  
              </View>
          </SafeAreaView>
      );
  }
  