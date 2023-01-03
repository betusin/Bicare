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
import { CurrentRenderContext } from "@react-navigation/native";

export default function ClientWaitingScreen({ navigation }) {
  const [distance, setDistance] = useState(10000);
  const [repairOrderNo, setrepairOrderNo] = useState(0);
  const [repairRequests, setRepairRequests] = useState([]);
  const [currentRR, setCurrentRR] = useState({});

  const [location, setLocation] = useState({});

  // TODO wait for confirmation from both fixer and client
  function handlePress() {
    Alert.alert(
      "Repair order",
      "Is the repair done?",
      [
        {
          text: "Yes",
          onPress: () => {
            console.log("Yes pressed");
            navigation.navigate("RepairDoneScreen"); // ToDo navigate to barter screen
          },
        },
        {
          text: "Not yet",
          onPress: () => {
            console.log("Not yet Pressed");
          },
        },
      ],
      { cancelable: false }
    );
  }
  const calculateDistance = (
    originLat,
    originLong,
    destinationLat,
    destinationLong
  ) => {
    var dis = getDistance(
      { latitude: originLat, longitude: originLong },
      { latitude: destinationLat, longitude: destinationLong }
    );
    return dis;
  };

  // TODO GET THE SPECIFIC REPAIR REQUEST
  // AND BASED ON THIS GET THE LOCATION OF CLIENT AND FIXER AND CALCULATE DISTANCE AND DISPLAY DISTANCE
  useEffect(() => {
    (async () => {
      // Fetch all repair requests into repairRequests
      const colRef = collection(db, "repair_request");
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setRepairRequests(docs);
      // Print all
      repairRequests.forEach((item) => {
        console.log(item);
        if (item.id == "GA14xCURgCozKtXKcHGI") {
          console.log("found");
          setCurrentRR(item);
        }
      });
      setrepairOrderNo(currentRR.amount); // TODO CHANGE
      // const tempDist = calculateDistance(currentRR.location.latitude, )
      // setDistance()
      // TODO Calculate distance when this is possible with location data in RR from ficer and client.
    })();
  }, []);

  return (
    <SafeAreaView style={page.container}>
      <View style={page.view}>
        <Image
          style={page.tinyLogo}
          source={require("../img/logoWhiteTrial2.png")}
        />
        <Text style={page.subtitle}>Barter your bike repair anywhere</Text>
        <Text style={page.header}>Waiting Screen</Text>
        <Text style={page.subtitle}>A fixer is on the way!</Text>
        <Text style={page.text}> Repair order : #{repairOrderNo}</Text>
        <Text style={page.text}>The fixer is approximately:</Text>
        <Text style={page.text}> {distance} meters away</Text>
        <TouchableOpacity style={page.button} onPress={handlePress}>
          <Text>Repair is done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
