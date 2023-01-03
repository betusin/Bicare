import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import page from "../styles";
import { useState, useEffect } from "react";
import { collection, getDocs, getDoc, doc, get } from "firebase/firestore";
import { db } from "../src/firebase";

export default function RepairDoneScreen({ navigation }) {
  const [distance, setDistance] = useState(10000);
  const [repairOrderNo, setrepairOrderNo] = useState(0);
  const [location, setLocation] = useState({});
  const repairRequestsRef = collection(db, "repair_request");
  const repairRequestDocRef = doc(db, "bicare-f1e12/repair_request/");
  const [repairRequests, setRepairRequests] = useState([]);

  return (
    <SafeAreaView style={page.container}>
      <View style={page.view}>
        <Image
          style={page.tinyLogo}
          source={require("../img/logoWhiteTrial2.png")}
        />
        <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
        <Text style={page.header}>Repair Done</Text>
        <Text style={page.subtitle}>Repair Order: #{repairOrderNo}</Text>
        <Text style={page.text}>Completed successfully</Text>
        <TouchableOpacity style={page.button} onPress={() => alert("ToDo")}>
          <Text>Order details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={page.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
