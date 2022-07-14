import {StyleSheet} from "react-native";

export const global_style = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
    },
    input: {
        flex: 1,
        backgroundColor: "#F6F6F6",
        color: "black",
        width: 300,
    },
    icon: {
        position: "absolute",
        backgroundColor: "#F6F6F6",
        color: "gray",
        top: "25%",
        right: "5%",
    }
});
