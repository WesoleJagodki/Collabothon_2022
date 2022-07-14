import { StyleSheet } from "react-native";

export const message_popup_style = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      flex: 0.12,
      minWidth: 200,
      backgroundColor: "#F5F5F5",
      borderRadius: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      flex: 1,
      marginTop: 5,
      minWidth: 200,
      alignContent: 'center',
      justifyContent: "center",
      borderStyle: "solid",
      borderColor: "#C3C3C3",
      borderWidth: 1,
      backgroundColor: "#F5F5F5",
      borderRadius: 12,
    },
    textStyle: {
      textAlign: "center",
    },
    modalHeader: {
      marginBottom: 15,
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    modalDescription: {
      marginBottom: 15,
      fontWeight: "bold",
      textAlign: "center",
    },
  });