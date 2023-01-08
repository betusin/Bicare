import {
    Text,
    View,
    SafeAreaView,
  } from "react-native";
  import React, { useState } from "react";
  import page from '../styles';
  import {Image, TouchableOpacity} from "react-native";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { db } from "../src/firebase";
import { doc } from "firebase/firestore";


  export default function FixerWaiting({ route, navigation }){
    const requestData = route.params.request;
    const offerData = route.params.offer;

    const docRef = doc(db, "repair_request", requestData.id, "offers", offerData.id);
    const [fetchedOfferData, loading, error] = useDocumentData(docRef);

    const repairDone = () => {
        navigation.navigate('FixerRepairDone', {offerData: offerData});
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

                { fetchedOfferData && fetchedOfferData.status == null &&
                    <Text style={page.fieldTitle}>{"\n"}Wait for client to confirm your offer</Text>
                }

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

                { fetchedOfferData && (fetchedOfferData.status == 'accepted') &&
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
                }

                { fetchedOfferData && (fetchedOfferData.status == 'rejected') &&
                    <><Text style={page.fieldTitle}>We are sorry to say that client rejected your offer.</Text>

                    <TouchableOpacity
                        style={page.buttonProfile}
                        onPress={() => navigation.navigate("Change Status to fixer")}
                    >
                        <Text
                            style={page.buttonTextSmall}
                        >
                            Find new repair requests
                        </Text>

                    </TouchableOpacity></>

                }

            </View>
        </SafeAreaView>
    );
  }