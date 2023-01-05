import {
    Text,
    View,
    SafeAreaView,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import page from '../styles';
import {Image, TouchableOpacity} from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../src/firebase";
import Toast from "react-native-toast-message";


export default function MakeOfferScreen({ route, navigation }){
    const requestData = route.params.request;
    const user = auth.currentUser;
    const [priceOffer, setPriceOffer] = useState(requestData.amount.toString());
    const [eta, setEta] = useState("40");

    const createOffer = () => {
        const offerData = {
            fixer: user.uid,
            offered_price: +priceOffer,
            eta: +eta,
        }

        addDoc(collection(db, "repair_request", requestData.id, "offers"), offerData)
        .then(() => {
            Toast.show({
                type: 'success',
                text1: "Offer created successfully",
                text2: `Offer created with estimated time ${eta} minutes and price ${priceOffer}€`,
            });
            navigation.navigate("FixerWaiting", {request: requestData, offer: offerData})
        })
        .catch((error) => Toast.show({
            type: 'error',
            text1: error.message,
        }))
    }

    return(
        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} enabled   keyboardVerticalOffset={0}>
        <ScrollView behavior="padding" style={page.scrollContainer} contentContainerStyle={page.scrollContainerContent}>
            <View style={page.scrollView}>
            <Image
                style={page.tinyLogo}
                source={require('../img/logoWhiteTrial2.png')}
            />
                <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
                <Text style={page.header}>Make an offer</Text>

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
                </View>

                <View style={page.inputWrapper}>
                    <Text style={page.fieldTitle}>Enter your price offer (€)</Text>
                    <TextInput
                        style={page.input}
                        defaultValue={priceOffer}
                        keyboardType="numeric"
                        onChangeText={(newText) => setPriceOffer(newText)}
                        value={priceOffer}
                    />
                    <Text style={page.fieldTitle}>Enter your estimated time in minutes</Text>
                    <TextInput
                        style={page.input}
                        keyboardType="numeric"
                        defaultValue={eta}
                        onChangeText={(newText) => setEta(newText)}
                        value={eta}
                    />
                </View>

                <TouchableOpacity
                    style={page.buttonProfile}
                    onPress={() => createOffer()}
                >
                    <Text
                        style={page.buttonTextSmall}
                    >
                        Make offer
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={page.buttonProfile}
                    onPress={() => navigation.navigate("MapFixer")}
                >
                    <Text
                        style={page.buttonTextSmall}
                    >
                        Back
                    </Text>
                </TouchableOpacity>
                </View>
        </ScrollView>
        </KeyboardAvoidingView>
    );
}
