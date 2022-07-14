import { StyleSheet } from "react-native";

export const info_screen_style = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  listHeader: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 22,
    marginLeft: 33,
  },
  listElement: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    marginLeft: 32,
    marginRight: 29,
    textDecorationLine: "underline",
  },
  divider: {
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    width: "100%",
    marginTop: 25,
    marginBottom: 25,
  },
});
