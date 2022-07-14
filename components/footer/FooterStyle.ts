import { Dimensions, StyleSheet } from "react-native";
const screen_width = Dimensions.get("window").width;
const screen_height = Dimensions.get("window").height;

export const footer_style = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    backgroundColor: "#5E9D75",
    bottom: 0,
    left: -0.5 * screen_width,
    height: 0.07 * screen_height,
    width: screen_width,
    justifyContent: "center",
    paddingLeft: "4%",
  },
  picture: {
    height: 30,
    width: 30,
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#C7986F",
  },
  text1: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    backgroundColor: "0",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
