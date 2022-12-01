import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import NewRepairRequest from './NewRepairRequest';
import ProfileScreen from './ProfileScreen';

const Drawer = createDrawerNavigator();

export default function Navigation() {
    return (
        <Drawer.Navigator 
            initialRouteName='Home'
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
                    width: 220
                }
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen 
                name="New Repair Request" 
                component={NewRepairRequest}
                options={{
                    drawerItemStyle: { display: "none"}
                }}
            />
            <Drawer.Screen name="Profile" component={ProfileScreen}/>

        </Drawer.Navigator>
    )
}