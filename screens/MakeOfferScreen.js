import {
    Text,
    View,
    SafeAreaView,
    TextInput,
} from "react-native";
import React, { useState } from "react";
import page from '../styles';
import {Image, TouchableOpacity} from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../src/firebase";


export default function MakeOfferScreen({ route, navigation }){
    const user = auth.currentUser;
    const [priceOffer, setPriceOffer] = useState("8");
    const [eta, setEta] = useState("40");
    const requestData = route.params.request;

    const createOffer = () => {
        const offerData = {
            fixer: user.uid,
            offered_price: +priceOffer,
            eta: +eta,
        }

        addDoc(collection(db, "repair_request", requestData.id, "offers"), offerData)
        .then(() => {
            alert(`Offer created with estimated time - ${eta} and price - ${priceOffer}`)
        })
        .catch((error) => alert(error.message))
    }

    return(
        <SafeAreaView style={page.container}>
            <View style={page.view}>
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
        </SafeAreaView>
    );
}
