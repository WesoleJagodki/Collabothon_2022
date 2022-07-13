import {StyleSheet} from "react-native";

export const loading_screen = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    picture1: {
        position: "absolute",
        right: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
    },
    picture2: {
        position: "absolute",
        width: "100%",
        height: "10%",
        top: "71%"
    },
    gradient: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(11,74,138,100)",
    },
    button: {
        position: "absolute",
        top: "85%",
        width: "87%",
        height: "7%",
        borderRadius: 20,

    },
    text: {
        fontWeight: "bold",
        fontSize: 15
    }
});
