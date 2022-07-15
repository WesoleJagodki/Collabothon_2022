import { Dimensions, StyleSheet } from "react-native";
const screen_width = Dimensions.get("window").width;

export const header_style = StyleSheet.create({
  container: {
    // position: "absolute",
    // flex: 1,
    top: 0,
    // left: -0.5 * screen_width,
    height: 50,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    width: screen_width,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  text: {
    textAlign: "center",
    color: "#000000",
    fontSize: 24,
  },
  textcenter: {
    textAlign: "center",
    color: "#000000",
    fontSize: 24,
    left: "50%",
  },
  account: {
    height: 30,
    width: 30,
  },
  button1: {
    position: "absolute",
    backgroundColor: 0,
    right: 340,
    top: "0%",
  },
  button2: {
    backgroundColor: 0,
    right: 10
  },
});
