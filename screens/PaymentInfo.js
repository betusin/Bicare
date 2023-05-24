//Work in Progress
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import page from '../styles'
import { TouchableOpacity } from "react-native";
import { auth, db } from "../src/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import Toast from 'react-native-toast-message';

export default function ProfileScreen({ navigation }) {


  function increaseBalance(amount) {
    const balance = userData.balance ? userData.balance : 0;
    setDoc(docRef, { balance: balance + amount }, { merge: true })
      .then(() => {
        Toast.show({
          type: 'success',
          text1: "Increased balance successfully!",
        });
      })
      .catch((error) => {
        Toast.show({
          type: 'error',
          text1: error.message,
        });
      });
  }

  const user = auth.currentUser;
  const docRef = doc(db, "users", user.uid);
  const [userData, loading, error] = useDocumentData(docRef);

  return (
    <SafeAreaView style={page.container}>
      <View style={page.view}>
        <Text style={page.title}>Profile</Text>
        <Text style={page.subtitle}>Payment Details</Text>

        <View style={[styles.row, { marginTop: 20 }]}>
          <Text style={[page.profileField, page.profileFieldTitle]}>Current Balance:</Text>
          <Text style={[page.profileField, page.profileFieldValue, { flex: 0.2 }]}>€&nbsp;
            {userData && (userData.balance ? userData.balance : 0)}
            {loading && "Loading..."}
          </Text>
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