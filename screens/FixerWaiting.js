import {
    Text,
    View,
    SafeAreaView,
  } from "react-native";
  import React, { useState } from "react";
  import page from '../styles';
  import {Image, TouchableOpacity} from "react-native";


  export default function FixerWaiting({ route, navigation }){
    const requestData = route.params.request;
    const offerData = route.params.offer;

    const repairDone = () => {
        alert("TODO: set request to done")
    }

    return(
        <SafeAreaView style={page.container}>
            <View style={page.view}>
            <Image
                style={page.tinyLogo}
                source={require('../img/logoWhiteTrial2.png')}
            />
                <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
                <Text style={page.header}>Confirm your repair</Text>

                <Text style={page.fieldTitle}>Wait for client to confirm your offer</Text>

                <View style={page.profileColumn}>
                    <View style={[page.profileRows]}>
                        <Text style={[page.profileField,page.profileFieldTitle]}>Problem:</Text>
                        <Text style={[page.profileField,page.profileFieldValue]}>{requestData.problem}</Text>
                    </View>
                    <View style={[page.profileRows]}>
                        <Text style={[page.profileField,page.profileFieldTitle]}>Description:</Text>
                        <Text style={[page.profileField,page.profileFieldValue]}>{requestData.description}</Text>
                    </View>
                    <View style={[page.profileRows]}>
                        <Text style={[page.profileField,page.profileFieldTitle]}>Initial Price:</Text>
                        <Text style={[page.profileField,page.profileFieldValue]}>{requestData.amount}</Text>
                    </View>
                    <View style={[page.profileRows]}>
                        <Text style={[page.profileField,page.profileFieldTitle]}>Offered Price:</Text>
                        <Text style={[page.profileField,page.profileFieldValue]}>{offerData.offered_price}</Text>
                    </View>
                </View>


                <TouchableOpacity
                    style={page.buttonProfile}
                    onPress={() => repairDone()}
                >
                    <Text
                        style={page.buttonTextSmall}
                    >
                        Repair done
                    </Text>

                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
  }