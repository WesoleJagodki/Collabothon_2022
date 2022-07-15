import { StyleSheet } from "react-native";

export const ticket_popup_style = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: "25%",
    margin: 20,
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
    marginTop: 10,
    alignContent: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: "#C3C3C3",
    borderWidth: 1,
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
  },
  textStyle: {
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
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
  modalPrice: {
    marginBottom: 15,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  ticketCount: {
    margin: 5,
  },
  ticketButton: {
    fontWeight: "bold",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#E7EAEE",
  },
});
