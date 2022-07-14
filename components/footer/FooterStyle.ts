import {Dimensions, StyleSheet} from "react-native";
const screen_width = Dimensions.get('window').width;

export const footer_style = StyleSheet.create({
    container: {
        position: "absolute",
        flex: 1,
        backgroundColor: "#5E9D75",
        bottom: 0,
        left: -0.5*screen_width,
        height: "7%",
        width: screen_width,
        justifyContent: "center",
        alignItems: "center"
    },
    picture: {
        height: 35,
        width: 35,
    },
});
