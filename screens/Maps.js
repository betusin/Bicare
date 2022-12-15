import MapView, { Marker, PROVIDER_GOOGLE, Callout } from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  Button,
  Text,
  Image,
} from "react-native";
import { setState, useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "../environments";
import * as Location from "expo-location";
import React from "react";
import page from "../styles";

const { width, height } = Dimensions.get("window");

const fixerMarkers = [
  {
    latitude: 51.825084,
    longitude: 5.847807,
    title: "FLAT TIRE",
    description: "Optional description \n10€",
  },
  {
    latitude: 51.830483,
    longitude: 5.864397,
    title: "BROKEN FRONT LIGHT",
    description: "Optional description \n10€",
  },
];
const bikeShops = [
  {
    latitude: 51.833623,
    longitude: 5.863613,
    title: "Bike repairs Galgenveld",
    description:
      "Opening Hours:\n Monday - Saturday 10.00-18.00 \n +31 123 45 67 89",
  },
  {
    latitude: 51.826215,
    longitude: 5.869904,
    title: "Bike repairs Hoogeveld",
    description:
      "Opening Hours:\n Monday - Saturday 10.00-18.00 \n +31 123 45 67 89",
  },
  {
    latitude: 51.862381, //  51.862381, 5.866270
    longitude: 5.86627,
    title: "Bike repairs Lent",
    description:
      "Opening Hours:\n Monday - Saturday 10.00-18.00 \n +31 123 45 67 89",
  },
];

export default function Maps(navigation) {
  const [location, setLocation] = useState({});

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
        console.log(location);
        this.map.animateToRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          longitudeDelta: 0.075,
          latitudeDelta: 0.05,
        });
        console.log("DONE");
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        //onLayout={goToUserLocation}
        ref={(ref) => (this.map = ref)}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
      >
        {bikeShops.map((val, index) => {
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
              <Callout tooltip onPress={() => alert("Clicked")}>
                <View>
                  <View style={styles.callout}>
                    <Text>{val.title}</Text>
                    <Text>{val.description}</Text>
                  </View>
                </View>
              </Callout>
            </Marker>
          );
        })}
        {fixerMarkers.map((val, index) => {
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
                style={page.logoMaps}
                source={require("../img/logoWhiteTrial2.png")}
              />
              <Callout tooltip onPress={() => alert("Clicked")}>
                <View>
                  <View style={styles.callout}>
                    <Text>{val.title}</Text>
                    <Text>{val.description}</Text>
                  </View>
                </View>
              </Callout>
            </Marker>
          );
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  callout: {
    backgroundColor: "white",
    borderRadius: "5",
  },
});
