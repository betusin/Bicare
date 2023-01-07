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
import {
  collection,
  getDocs,
  getDoc,
  doc,
  get,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../src/firebase";
import { CurrentRenderContext } from "@react-navigation/native";

export default function ClientWaitingScreen({ navigation, route }) {
  const [distance, setDistance] = useState(10000);
  const [repairOrderNo, setrepairOrderNo] = useState(0);
  const [repairRequests, setRepairRequests] = useState([]);
  const [currentRR, setCurrentRR] = useState({});

  const [location, setLocation] = useState({});
  const requestID = route.params.requestID;
  const offers = route.params.offers;

  function handlePress() {
    Alert.alert(
      "Repair order",
      "Is the repair done?",
      [
        {
          text: "Yes",
          onPress: () => {
            // remove all offers
            offers.map((product) => {
              deleteDoc(
                doc(db, "repair_request", requestID, "offers", product.id)
              );
            });
            // delete request
            deleteDoc(doc(db, "repair_request", requestID));
            navigation.navigate("RepairDoneScreen", { requestID: requestID });
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
      setrepairOrderNo(currentRR.amount);
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
        <Text style={page.text}> Repair order : #{String(requestID)}</Text>
        {/* <Text style={page.text}>The fixer is approximately:</Text>
        <Text style={page.text}> {distance} meters away</Text> */}
        <TouchableOpacity style={page.button} onPress={handlePress}>
          <Text>Repair is done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
