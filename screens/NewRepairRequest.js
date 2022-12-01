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
import DropDownPicker from 'react-native-dropdown-picker';

export default function NewRepairRequest({ navigation }){

    const [description, onChangeText] = React.useState("Useless Text");
    const [amount, onChangeNumber] = React.useState(null);
    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Flat Tire', value: 'flattire'},
      {label: 'Detached Chain', value: 'chain'},
      {label: 'Other Issue', value: 'other'}

    ]);


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.title}>BICARE</Text>
                <Text style={styles.subtitle}>Barter your bike repair anywhere</Text>
                <Text style={styles.header}>New Repair Request</Text>
                <View style={styles.inputWrapper}>
                    <Text style={styles.fieldTitle}>Problem</Text>
                    <DropDownPicker
                      open={open}
                      value={value}
                      items={items}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                    />
                    <Text style={styles.fieldTitle}>Price</Text>
                    <View style={styles.amountView}>
                      <Text style={styles.euroSign}>€</Text>
                      <TextInput
                          style={styles.amountInput}
                          placeholder="10"
                          onChangeText={onChangeNumber}
                          keyboardType="numeric"
                      />
                    </View>

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
                    <TouchableOpacity style={styles.button} onPress={() => navigation.toggleDrawer()}>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    title: {
      color: "#F5D466",
      fontWeight: "bold",
      fontSize: 42,
      fontFamily: "Roboto",
  
    },
    header: {
      paddingTop: 10,
      textTransform: "uppercase",
      color: "white",
      fontSize: 20,
      textDecorationLine: "underline",
      fontWeight: "bold",
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
        alignSelf: "center",
        //marginTop: 5,
        //marginBottom: "5%",
        shadowColor: "#000",
        shadowOffset: {
             width: 0,
             height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        flexGrow: 8,
        height: 30,
        maxWidth: 100,
        paddingLeft: 5,
        keyboardType: "number-pad",
      },
    euroSign: {
      color: "white",
      //flex: 2,
      alignSelf: "center",
      fontSize: 20,
      paddingRight: 5,
    },
    amountView: {
      flexDirection: "row",
      display: "flex",
      alignSelf: "flex-start"
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
        width: "100%",
        textAlign: 'left',
        textAlignVertical: 'top',
        paddingTop: 5,
        paddingHorizontal: 10,
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
        color: "white",
        fontSize: 14,
        fontWeight: "300",
        alignSelf: "flex-start",
        fontFamily: "Roboto",
      },
    subtitle: {
      //flex: 0.2,
      color: "#F5D466",
      fontSize: 26,
      fontWeight: "300",
      fontFamily: "Roboto",
      textAlign: "center"
    },
    view: {
      //backgroundImage: "linear-gradient(#751A33, #B34233)",
      backgroundSize: "cover",
      height: "80%",
      width: "80%",
      alignItems: "center",
    },
    container: {
      flex: 1,
      backgroundColor: "#27241A", //TODO: temporary, remove
      backgroundImage: "linear-gradient(#751A33, #B34233)",
      alignItems: "center",
      justifyContent: "center",
    },
    inputWrapper: {
        alignItems: "center",
        gap: "5px",
        flexDirection: "column",
        flex: 1,
        alignSelf: "stretch"
    },
    space: {
      //backgroundColor: "white",
      width: 100, // or whatever size  you need
      height: 75, 
    },

  });