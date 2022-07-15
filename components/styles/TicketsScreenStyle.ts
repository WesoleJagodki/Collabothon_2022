import { StyleSheet } from "react-native";

export const tickets_screen_style = StyleSheet.create({
    text1: {
        fontSize: 15,
        width: 130,
        height: 35,
        textAlign: "center",
        fontWeight: "bold",
        // backgroundColor: "red"
    },
    text2: {
        fontSize: 14,
        textAlign: "center",
        // backgroundColor: "red"
    },
    picture1: {
        width: 30,
        height: 30,
    },
    picture2: {
        width: 130,
        height: 130,
        marginBottom: 7
    },
    vstack1: {
        marginLeft: 30
    },
    view1: {
        // backgroundColor: "blue",
        width: "80%",
        height: "70%"
    },
    view2: {
        flexDirection: "row",
        // backgroundColor: "red",
        justifyContent: "space-between",
    },
    view3: {
        // backgroundColor: "green",
        paddingVertical: 10
    }
});
