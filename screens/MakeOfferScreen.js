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
  
  
  export default function MakeOfferScreen({ navigation }){
      return(
          <SafeAreaView style={page.container}>
              <View style={page.view}>
              <Image
                  style={page.tinyLogo}
                  source={require('../img/logoWhiteTrial2.png')}
                />
                  <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
                  <Text style={page.header}>Make an offer</Text>
                  <TouchableOpacity
                      style={page.buttonProfile}
                  >
                      <Text
                          style={page.buttonTextSmall}
                      >
                          Make offer
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
  