import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import React, { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import page from '../styles'

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
        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} enabled   keyboardVerticalOffset={0}>
        <ScrollView behavior="padding" style={page.scrollContainer} contentContainerStyle={page.scrollContainerContent}>
            <View style={page.scrollView}>
                <Image
                    style={page.tinyLogo}
                    source={require('../img/logoWhiteTrial2.png')}
                />                
                <Text style={page.header}>New Repair Request</Text>
                <View style={page.inputWrapper}>
                    <Text style={page.fieldTitle}>Problem</Text>
                    <DropDownPicker
                      open={open}
                      value={value}
                      items={items}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                    />
                    <Text style={page.fieldTitle}>Price</Text>
                    <View style={page.amountView}>
                      <Text style={page.euroSign}>€</Text>
                      <TextInput
                          style={page.amountInput}
                          placeholder="10"
                          onChangeText={onChangeNumber}
                          keyboardType="numeric"
                      />
                    </View>

                    <Text style={page.fieldTitle}>Description</Text>
                    <TextInput
                        style={page.descriptionInput}
                        placeholder="Describe the issue"
                        onChangeText={onChangeText}
                        multiline
                        numberOfLines={4}
                    />
                    <TouchableOpacity
                        style={page.button}
                    >
                        <Text>
                            Create repair request
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text>
                            Create repair request
                </Text>
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
    );
}