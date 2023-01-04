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
  
  
  export default function ConfirmRepairDoneScreen({ navigation }){
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
                    <Text style={page.header}>Completed order</Text>


                    

                  <TouchableOpacity
                      style={page.buttonProfile}
                  >
                      <Text
                          style={page.buttonTextSmall}
                      >
                          Order details
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
  