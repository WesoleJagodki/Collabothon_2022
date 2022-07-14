import { Dimensions, StyleSheet } from "react-native";
const screen_width = Dimensions.get("window").width;
const screen_height = Dimensions.get("window").height;

export const header_style = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    backgroundColor: "blue",
    top: 0,
    left: -0.5 * screen_width,
    height: 0.1 * screen_height,
    width: screen_width,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    color: "#000000",
    fontSize: 24,
  },
  picture: {
    position: "absolute",
    height: 30,
    width: 30,
    top: 2,
    right: 180
  },
  account: {
    position: "absolute",
    height: 40,
    width: 40,
    left: 70,
    bottom: 0
  },
  button: {
    backgroundColor: "0"
  }
});
