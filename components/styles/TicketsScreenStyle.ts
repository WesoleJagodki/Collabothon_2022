import { StyleSheet } from "react-native";

export const tickets_screen_style = StyleSheet.create({
    text1: {
        fontWeight: "normal",
        fontSize: 34,
        alignContent: "center",
    },
    picture1: {
        width: 30,
        height: 30,
    },
    picture2: {
        width: 150,
        height: 150
    },
    hstack1: {
        alignSelf: "flex-start",
        backgroundColor: "red",
        width: "100%",
        padding: "10%"
    },
    hstack2: {
        backgroundColor: "purple",
        justifyContent: "space-between",
        width: "100%",
        padding: "10%"
    },
    vstack1: {
        flex: 5,
        backgroundColor: "green",
        width: "100%"
    },
    vstack2: {
        marginLeft: 30
    }
});
