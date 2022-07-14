import { Dimensions, StyleSheet } from "react-native";
const screen_width = Dimensions.get("window").width;
const screen_height = Dimensions.get("window").height;

export const header_style = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    top: 0,
    left: -0.5 * screen_width,
    height: 0.1 * screen_height,
    width: screen_width,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "#000000",
    fontSize: 24,
  },
  picture: {
    height: 30,
    width: 30,
  },
  account: {
    height: 40,
    width: 40,
  },
  button1: {
    position: "absolute",
    backgroundColor: 0,
    right: 170,
    top: "-25%",
  },
  button2: {
    position: "absolute",
    backgroundColor: 0,
    left: 160,
    top: "-60%",
  },
});
