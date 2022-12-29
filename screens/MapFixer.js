import MapView, { Marker, PROVIDER_GOOGLE, Callout } from "react-native-maps";
import { StyleSheet, View, Dimensions, Text, Image } from "react-native";
import { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "../environments";
import * as Location from "expo-location";
import React from "react";
import page from "../styles";
import { db } from "../src/firebase";
import { collection, getDocs } from "firebase/firestore";
import { getDistance, getPreciseDistance } from "geolib";

export default function MapFixer({ navigation }) {
  const [location, setLocation] = useState({});
  const [repairRequests, setRepairRequests] = useState([]);
  const [renderRequests, setRenderRequests] = useState(false);
  const [fixerRender, setFixerRender] = useState(false);
  const [activeFixers, setActiveFixers] = useState([]);
  const fixersRef = collection(db, "active_fixers");
  const repairRequestsRef = collection(db, "repair_request");

  async function getRepairRequests() {
    const querySnapshot = await getDocs(repairRequestsRef);
    querySnapshot.forEach((doc) => {
      repairRequests.push({
        id: doc.id,
        amount: doc.data().amount,
        latitude: doc.data().location.latitude,
        longitude: doc.data().location.longitude,
        createdAt: doc.data().opening_hours,
        description: doc.data().description,
        problem: doc.data().problem,
        phoneNumber: doc.data().phone_number,
        request: doc.data().requester,
      });
    });
    setRepairRequests(repairRequests);
    setRenderRequests(true);
  }

  async function getFixersData() {
    const querySnapshot = await getDocs(fixersRef);
    querySnapshot.forEach((doc) => {
      activeFixers.push({
        id: doc.id,
        latitude: doc.data().location.latitude,
        longitude: doc.data().location.longitude,
        username: doc.data().username,
      });
    });
    setActiveFixers(activeFixers);
    setFixerRender(true);
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      // Gets the location from expo
      try {
        let location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
          enableHighAccuracy: true,
          timeInterval: 5,
        });
        setLocation(location);
        getRepairRequests();
        getFixersData();
        if (this.map != undefined) {
          this.map.animateToRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            longitudeDelta: 0.075,
            latitudeDelta: 0.05,
          });
        }
      } catch (error) {
        console.log(error + "error");
      }
    })();
  }, []);

  return (
    <View style={page.bigMap}>
      <MapView
        ref={(ref) => (this.map = ref)}
        style={page.bigMap}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
      >
        {repairRequests.map((val, index) => {
          if (renderRequests) {
            return (
              <Marker
                coordinate={{
                  latitude: val.latitude,
                  longitude: val.longitude,
                }}
                key={index}
              >
                <Image
                  style={page.logoMaps}
                  source={require("../img/bicare-bike-marker.png")}
                />
                <Callout
                  tooltip
                  onPress={() =>
                    calculateDistance(
                      location.coords.latitude,
                      location.coords.longitude,
                      val.latitude,
                      val.longitude
                    )
                  }
                >
                  <View>
                    <View style={page.callout}>
                      <Text style={page.titleCalloutMaker}>I need help!</Text>
                      <Text style={page.subtitleCalloutMaker}>Problem:</Text>
                      <Text> {String(val.problem)}</Text>
                      <Text style={page.subtitleCalloutMaker}>Amount:</Text>
                      <Text>{String(" " + val.amount) + "€"}</Text>
                      <Text style={page.subtitleCalloutMaker}>
                        Description:
                      </Text>
                      <Text> {String(val.description)}</Text>
                    </View>
                  </View>
                </Callout>
              </Marker>
            );
          }
        })}
        {activeFixers.map((val, index) => {
          if (fixerRender) {
            return (
              <Marker
                coordinate={{
                  latitude: val.latitude,
                  longitude: val.longitude,
                }}
                key={index}
              >
                <Image
                  style={page.fixerLogoMaps}
                  source={require("../img/bicare-fixer-marker.png")}
                />
                <Callout tooltip onPress={() => alert("Clicked")}>
                  <View>
                    <View style={page.callout}>
                      <Text style={page.subtitleCalloutMaker}>Fixer:</Text>
                      <Text>{val.username}</Text>
                    </View>
                  </View>
                </Callout>
              </Marker>
            );
          }
        })}
      </MapView>
    </View>
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
  alert(`Distance\n\n${dis} Meter\nOR\n${dis / 1000} KM`);
};
