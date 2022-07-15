import { StyleSheet } from "react-native";

export const quest_inside_screen_style = StyleSheet.create({
    hstack: {
        position: "absolute",
        top: "15%"
    },
    text1: {
        position: "absolute",
        top: "25%",
        fontWeight: "bold",
        fontSize: 24,
    },
    picture: {
        width: 180,
        height: 129,
        borderRadius: 10,
    },
    badge: {
        width: "47%",
        backgroundColor: "white",
    },
    text2: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 5
    },
    text3: {
        fontSize: 15,
        textAlign: "center",
        marginBottom: 5
    },
    text4: {
        fontSize: 10,
        height: 12,
        width: "100%",
        color: "white"
    },
    test: {
        position: "absolute",
        bottom: "6%"
    },
    view1: {
        flexDirection: "row",
        width: "96%",
        alignSelf: "center",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        marginTop: 25
    },
    view2: {
        flexDirection: "row",
        justifyContent: "center"
    },
    button1: {
        width: "50%",
        height: "10%",
        borderRadius: 5,
        alignSelf: "center"
    }
});
