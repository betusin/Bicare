//Work in Progress
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    SafeAreaView,
  } from "react-native";
import React, { useState } from "react";
import page from '../styles'
import {TouchableOpacity} from "react-native";

var balance = 4.52;

export default function ProfileScreen({ navigation }){


    function increaseBalance(amount) {
        balance = balance + amount;
        setBalanceText(balance);
    }

    const [balanceText, setBalanceText] = useState(balance);

    return(
        <SafeAreaView style={page.container}>
            <View style={page.view}>
                <Text style={page.title}>Profile</Text>
                <Text style={page.subtitle}>Payment Details</Text>

                <View style={[styles.row, {marginTop: 20}]}>
                    <Text style={[page.profileField,page.profileFieldTitle]}>Current Balance:</Text>
                    <Text style={[page.profileField,page.profileFieldValue,{flex: 0.2}]}>€ {balanceText}</Text>
                </View>

                <View style={page.profileColumn}>
                    <Text style={styles.subheader}>Increase Balance</Text>
                    <View style={styles.rowFlex}>
                        <TouchableOpacity
                            style={styles.buttonSmall}
                            onPress={() => increaseBalance(5)}
                        >
                            <Text style={page.buttonTextSmall}>
                                €5                   
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonSmall}
                            onPress={() => increaseBalance(10)}
                        >
                            <Text style={page.buttonTextSmall}>
                                €10                   
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowFlex}>
                        <TouchableOpacity
                            style={styles.buttonSmall}
                            onPress={() => increaseBalance(15)}
                        >
                            <Text style={page.buttonTextSmall}>
                                €15                   
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonSmall}
                            onPress={() => increaseBalance(20)}
                        >
                            <Text style={page.buttonTextSmall}>
                                €20                   
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "center",
        width: "120%",
      },
    rowFlex: {
        flexDirection: "row",
        justifyContent: "center",
        gap: "50px",
      },
    subheader: {
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
    },
    buttonSmall: {
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#F5D466",
        justifyContent: "center",
        marginVertical: "3%",
        shadowColor: "#000",
        shadowOffset: {
             width: 1,
             height: 3,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4,
    
        elevation: 5,
        width: 80,
        height: 30, 
        marginHorizontal: 5,
      },
})