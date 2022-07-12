import {StyleSheet} from "react-native";

export const global = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(160, 213, 255)",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 50 as number,
        fontFamily: "Roboto, sans-serif",
        color: "rgb(65, 65, 65)",
    },
});
