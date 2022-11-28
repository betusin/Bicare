'use strict';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    title: {
      color: "white",
      fontWeight: "bold",
      fontSize: 42,
      fontFamily: "Roboto",
      textAlign: 'center', 
  
    },
    button: {
      alignItems: "center",
      borderRadius: 5,
      backgroundColor: "#F5D466",
      justifyContent: "center",
      marginVertical: "5%",
      shadowColor: "#000",
      shadowOffset: {
           width: 1,
           height: 3,
      },
      shadowOpacity: 0.50,
      shadowRadius: 4,
  
      elevation: 5,
      width: 150,
      height: 50, 
    },
    buttonText: {
      fontFamily: "Roboto",
      fontSize: 20,
      fontWeight: "bold",
      textAlignt: "center",
      justifyContent: "center",
      alignItems: "center",
    }, 
    text: {
      color: "white",
      fontSize: 26,
      fontWeight: "300",
      alignItems: "center",
      fontFamily: "Roboto",
      textAlign: "center", 
    },
    subtitle: {
      color: "white",
      fontSize: 26,
      fontWeight: "300",
      fontFamily: "Roboto",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    ladida: {
      height: "80%",
      alignItems: "center",
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      backgroundColor: "white",
      fontSize: 21,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      marginVertical: "3%",
      marginHorizontal:"3%",
      shadowColor: "#000",
      shadowOffset: {
           width: 0,
           height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius: 5,
      height: 50,
      width: 260,
    },
    inputWrapper: {
      flexDirection: 'column',
      flex: 0.5,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonWrapper: {
      flexDirection: 'column', 
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    space: {
      width: 100, 
      height: 75, 
    },
  });
  