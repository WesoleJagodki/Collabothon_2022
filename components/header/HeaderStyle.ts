import { Dimensions, StyleSheet } from "react-native";
const screen_width = Dimensions.get("window").width;
const screen_height = Dimensions.get("window").height;

export const header_style = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    backgroundColor: "#5E9D75",
    top: 0,
    left: -0.5 * screen_width,
    height: 0.1 * screen_height,
    width: screen_width,
    justifyContent: "flex-end",
  },
});
