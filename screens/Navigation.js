import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import NewRepairRequest from "./NewRepairRequest";
import ProfileScreen from "./ProfileScreen";
import PaymentInfo from "./PaymentInfo";
import ChangePassword from "./ChangePassword";
import FixScreen from "./FixScreen";
import MapClient from "./MapClient";
import MapFixer from "./MapFixer";
import MakeOfferScreen from "./MakeOfferScreen";
import FixerWaiting from "./FixerWaiting";
import OffersScreen from "./OffersScreen";
import OfflineOrderScreen from "./OfflineOrderScreen";

const Drawer = createDrawerNavigator();

export default function Navigation({route}) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTransparent: true,
        headerTintColor: "#F5D466",
        headerStyle: {
          height: 80,
        },
        headerTitle: "",
        drawerType: "back",
        drawerActiveTintColor: "#F5D466",
        drawerInactiveTintColor: "white",
        drawerStyle: {
          backgroundColor: "#2F2F2F",
          width: 220,
        },
        swipeEdgeWidth: 250,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="MakeOfferScreen"
        component={MakeOfferScreen}
        initialParams={{ params: route.params }}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="FixerWaiting"
        component={FixerWaiting}
        initialParams={{ params: route.params }}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="New Repair Request"
        component={NewRepairRequest}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="PaymentInfo"
        component={PaymentInfo}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="Change Status to fixer"
        component={FixScreen}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="Change Status to client"
        component={HomeScreen}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="MapClient"
        component={MapClient}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="MapFixer"
        component={MapFixer}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen 
        name="Offers screen" 
        component={OffersScreen}
        options={{
            drawerItemStyle: { display: "none"}
        }}
      />
      <Drawer.Screen
				name="Offline Order Screen"
				component={OfflineOrderScreen}
				options={{
					drawerItemStyle: {display: "none"}
				}}
			/>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
