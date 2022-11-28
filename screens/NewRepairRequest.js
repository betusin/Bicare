import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import {TouchableOpacity} from "react-native";
import { useFonts } from 'expo-font';

export default function NewRepairRequest({ navigation }){

    const [description, onChangeText] = React.useState("Useless Text");
    const [amount, onChangeNumber] = React.useState(null);
    

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.title}>BICARE</Text>
                <Text style={styles.subtitle}>Barter your bike repair anywhere</Text>
                <View style={styles.inputWrapper}>
                    <Text style={styles.fieldTitle}>Problem</Text>
                    <Text style={styles.fieldTitle}>Price</Text>
                    <TextInput
                        style={styles.amountInput}
                        placeholder="10"
                        onChangeText={onChangeNumber}
                        keyboardType="numeric"
                    />
                    <Text style={styles.fieldTitle}>Description</Text>
                    <TextInput
                        style={styles.descriptionInput}
                        placeholder="Describe the issue"
                        onChangeText={onChangeText}
                        multiline
                        numberOfLines={4}
                    />
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text>
                            Create repair request
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
      color: "white",
      fontWeight: "bold",
      fontSize: 42,
      fontFamily: "Roboto",
  
    },
    button: {
      alignItems: "center",
      borderRadius: 5,
      backgroundColor: "#F5D466",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: "5%",
      shadowColor: "#000",
      shadowOffset: {
           width: 1,
           height: 3,
      },
      shadowOpacity: 0.50,
      shadowRadius: 4,
  
      elevation: 5,
      width: 150,
      height: 50, 
    },
    buttonText: {
      fontFamily: "Roboto",
      fontSize: 20,
      fontWeight: "bold",
    },
    amountInput: {
        backgroundColor: "white",
        fontSize: 18,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: "5%",
        shadowColor: "#000",
        shadowOffset: {
             width: 0,
             height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        height: 30,
        width: "80%",
      },
    descriptionInput: {
        //flex: 0.1,
        backgroundColor: "white",
        fontSize: 18,
        marginTop: 5,
        marginBottom: "5%",
        shadowColor: "#000",
        shadowOffset: {
             width: 0,
             height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        height: 180,
        width: 250,
      },
    text: {
      flex: 0.1,
      color: "white",
      fontSize: 26,
      fontWeight: "300",
      alignItems: "center",
      justifyContent: "center", 
      fontFamily: "Roboto",
    },
    fieldTitle: {
        color: "black",
        fontSize: 14,
        fontWeight: "300",
        alignSelf: "flex-start",
        fontFamily: "Roboto",
      },
    subtitle: {
      //flex: 0.2,
      color: "white",
      fontSize: 26,
      fontWeight: "300",
      fontFamily: "Roboto",
    },
    view: {
      //backgroundImage: "linear-gradient(#751A33, #B34233)",
      backgroundSize: "cover",
      height: "80%",
      alignItems: "center",
    },
    container: {
      flex: 1,
      backgroundImage: "linear-gradient(#751A33, #B34233)",
      alignItems: "center",
      justifyContent: "center",
    },
    inputWrapper: {
        alignItems: "center",
        gap: "5px",
        flexDirection: "column",
        flex: 1,
    },
    space: {
      //backgroundColor: "white",
      width: 100, // or whatever size  you need
      height: 75, 
    },

  });