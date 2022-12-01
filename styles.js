'use strict';
import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

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
      marginVertical: "3%",
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
    buttonProfile: {
      alignItems: "center",
      borderRadius: 5,
      backgroundColor: "#F5D466",
      justifyContent: "center",
      marginVertical: "3%",
      shadowColor: "#000",
      shadowOffset: {
           width: 1,
           height: 3,
      },
      shadowOpacity: 0.50,
      shadowRadius: 4,
  
      elevation: 5,
      width: 225,
      height: 45, 
    },
    buttonText: {
      fontFamily: "Roboto",
      fontSize: 20,
      fontWeight: "bold",
      textAlignt: "center",
      justifyContent: "center",
      alignItems: "center",
    }, 
    buttonTextSmall: {
      color: "Black",
      fontFamily: "Roboto",
      fontSize: 16,
      textAlignt: "center",
      textTransform: "uppercase",
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
    containerNoBackground: {
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
      alignItems: "center",
      justifyContent: "center",
	  height: 350,
    },
    buttonWrapper: {
      flexDirection: 'column', 
      alignItems: "center",
      justifyContent: "center",
	  height: 70,
    },
    space: {
      width: 100, 
      height: 75, 
    },
    title: {
      color: "#F5D466",
      fontWeight: "bold",
      fontSize: 42,
      fontFamily: "Roboto",
  
    },
    amountInput: {
        backgroundColor: "white",
        fontSize: 18,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        //marginTop: 5,
        //marginBottom: "5%",
        shadowColor: "#000",
        shadowOffset: {
             width: 0,
             height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        flexGrow: 8,
        height: 30,
        maxWidth: 100,
        paddingLeft: 5,
        keyboardType: "number-pad",
      },
    euroSign: {
      color: "white",
      //flex: 2,
      alignSelf: "center",
      fontSize: 20,
      paddingRight: 5,
    },
    amountView: {
      flexDirection: "row",
      display: "flex",
      alignSelf: "flex-start"
    },
    descriptionInput: {
        //flex: 0.1,
        backgroundColor: "white",
        fontSize: 18,
        marginTop: 5,
        marginBottom: "5%",
        shadowColor: "#000",
        shadowOffset: {
             width: 0,
             height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        height: 180,
        width: "100%",
        textAlign: 'left',
        textAlignVertical: 'top',
        paddingTop: 5,
        paddingHorizontal: 10,
      },
    fieldTitle: {
        color: "white",
        fontSize: 14,
        fontWeight: "300",
        alignSelf: "flex-start",
        fontFamily: "Roboto",
      },
    view: {
      backgroundSize: "cover",
      height: "80%",
      width: "80%",
      alignItems: "center",
    },
    container: {
      flex: 1,
      backgroundColor: "#242424",
      alignItems: "center",
      justifyContent: "center",
    },
    inputWrapper: {
        alignItems: "center",
        gap: "5px",
        flexDirection: "column",
        flex: 1,
        alignSelf: "stretch"
    },
    space: {
      //backgroundColor: "white",
      width: 100, // or whatever size  you need
      height: 75, 
    },
    profileColumn: {
        paddingVertical: 20,
        flexDirection: "column",
        width: "120%"
    },
    profileRows: {
      flexDirection: "row",
    },
    profileField: {
      fontFamily: "Roboto",
      fontSize: 16,
      paddingRight: 5
    },
    profileFieldTitle: {
      textAlign: "right",
      flex: 0.4,
      fontWeight: "bold",
      color: "#F5D466",
    },
    profileFieldValue: {
      flex: 0.6,
      color: "white",
    },
  });
  
