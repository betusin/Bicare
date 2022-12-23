import MapView, { Marker, PROVIDER_GOOGLE, Callout } from "react-native-maps";
import { StyleSheet, View, Dimensions, Text, Image } from "react-native";
import { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "../environments";
import * as Location from "expo-location";
import React from "react";
import page from "../styles";
import { db } from "../src/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function MapClient({ navigation }) {
  const [location, setLocation] = useState({});
  const [bikeShops, setBikeShops] = useState([]);
  const bikeShopsRef = collection(db, "bike_shops");
  const [render, setRender] = useState(false);
  const [fixerRender, setFixerRender] = useState(false);
  const [activeFixers, setActiveFixers] = useState([]);
  const fixersRef = collection(db, "active_fixers");

  async function getBikeShopData() {
    const querySnapshot = await getDocs(bikeShopsRef);
    querySnapshot.forEach((doc) => {
      bikeShops.push({
        id: doc.id,
        title: doc.data().title,
        latitude: doc.data().location.latitude,
        longitude: doc.data().location.longitude,
        openingHours: doc.data().opening_hours,
        phoneNumber: doc.data().phone_number,
      });
    });
    setBikeShops(bikeShops);
    setRender(true);
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
        getBikeShopData();
        getFixersData();
        console.log(location + "location useeffect");
        console.log(render);
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
        {bikeShops.map((val, index) => {
          if (render) {
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
                  source={require("../img/bicare-store-marker.png")}
                />
                <Callout tooltip onPress={() => alert("Clicked")}>
                  <View>
                    <View style={styles.callout}>
                      <Text style={page.titleCalloutMaker}>
                        {String(val.title)}
                      </Text>
                      <Text>
                        Opening hours:{"\n"}
                        {String(val.openingHours)}
                      </Text>
                      <Text>
                        Phone number:{"\n"}
                        {String(val.phoneNumber)}
                      </Text>
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
                //title={val.title}
                //description={val.description}
                //onCalloutPress={() => alert("Clicked")}
              >
                <Image
                  style={page.fixerLogoMaps}
                  source={require("../img/bicare-fixer-marker.png")}
                />
                <Callout
                  tooltip
                  onPress={() => navigation.navigate("MapFixer")}
                >
                  <View>
                    <View style={styles.callout}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  callout: {
    backgroundColor: "white",
    borderRadius: "5",
    width: Dimensions.get("window").width * 0.5,
  },
});
