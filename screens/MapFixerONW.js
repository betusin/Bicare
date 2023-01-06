import MapView, { Marker, PROVIDER_GOOGLE, Callout } from "react-native-maps";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  Text,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "../environments";
import * as Location from "expo-location";
import React from "react";
import page from "../styles";
import { db } from "../src/firebase";
import { collection, getDocs } from "firebase/firestore";
import { getDistance, getPreciseDistance } from "geolib";
import {
  useCollectionData,
  useCollection,
} from "react-firebase-hooks/firestore";

export default function MapFixerONW({ navigation }) {
  const [location, setLocation] = useState({});
  const offersRef = collection(
    db,
    "repair_request",
    "U7lXNmb71SpS1I3f0iXd",
    "offers"
  );
  //const repairRequestsRef = collection(db, "repair_request");
  const [docsOffers, loading, error] = useCollectionData(offersRef);
  const [docs] = useCollection(offersRef);
}

// useEffect(() => {
//   (async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== "granted") {
//       return;
//     }
//     // Gets the location from expo
//     try {
//       let location = await Location.getCurrentPositionAsync({
//         accuracy: Location.Accuracy.Balanced,
//         enableHighAccuracy: true,
//         timeInterval: 5,
//       });
//       setLocation(location);
//       if (this.map != undefined) {
//         this.map.animateToRegion({
//           latitude: location.coords.latitude,
//           longitude: location.coords.longitude,
//           longitudeDelta: 0.075,
//           latitudeDelta: 0.05,
//         });
//       }
//     } catch (error) {
//       console.log(error + "error");
//     }
//   })();
// }, []);
// return (
// //   <View style={page.bigMap}>
// //     <MapView
// //       ref={(ref) => (this.map = ref)}
// //       style={page.bigMap}
// //       provider={PROVIDER_GOOGLE}
// //       showsUserLocation={true}
// //     >
// //       <Marker
// //         coordinate={{
// //           latitude: 59.310616, // TODO CHANGE TO DYNAMIC VALUE OF CLIENT
// //           longitude: 18.200945, // TODO CHANGE TO DYNAMIC VALUE OF CLIENT
// //         }}
// //         //key={0}
// //       ></Marker>
// //     </MapView>
// //   </View>
// );
//}
// const calculateDistance = (
//   originLat,
//   originLong,
//   destinationLat,
//   destinationLong
// ) => {
//   var dis = getDistance(
//     { latitude: originLat, longitude: originLong },
//     { latitude: destinationLat, longitude: destinationLong }
//   );
//   alert(`Distance\n\n${dis} Meter\nOR\n${dis / 1000} KM`);
// };
