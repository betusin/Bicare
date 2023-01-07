import {
    Text,
    View,
    SafeAreaView,
} from "react-native";
import React from "react";
import page from '../styles';
import { Image, TouchableOpacity } from "react-native";

export default function FixerRepairDone({ route, navigation }) {
    const offerData = route.params.offerData;
    const five_percent = offerData.offered_price * 0.05;
    const you_earn = offerData.offered_price * 0.95;

    return (
        <SafeAreaView style={page.container}>
            <View style={page.view}>
                <Image
                    style={page.tinyLogo}
                    source={require('../img/logoWhiteTrial2.png')}
                />
                <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
                <Text style={page.header}>Repair done!</Text>

                <View style={page.profileColumn}>
                    <View style={[page.profileRows]}>
                        <Text style={[page.profileField, page.profileFieldTitle]}>Client paid:</Text>
                        <Text style={[page.profileField, page.profileFieldValue]}>{offerData.offered_price}</Text>
                    </View>
                    <View style={[page.profileRows]}>
                        <Text style={[page.profileField, page.profileFieldTitle]}>We take 5%:</Text>
                        <Text style={[page.profileField, page.profileFieldValue]}>{five_percent}</Text>
                    </View>
                    <View style={[page.profileRows]}>
                        <Text style={[page.profileField, page.profileFieldTitle]}>You earned:</Text>
                        <Text style={[page.profileField, page.profileFieldValue]}>{you_earn}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={page.buttonProfile}
                    onPress={() => navigation.navigate("Change Status to fixer")}
                >
                    <Text
                        style={page.buttonTextSmall}
                    >
                        Back Home
                    </Text>

                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}