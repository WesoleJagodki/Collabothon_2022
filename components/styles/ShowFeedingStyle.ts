import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  view: {
    marginTop: 10,
  },
  container: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
  },
  text: {
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 22,
    top: "2%",
  },
  text2: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "bold",
    color: "green",
    top: "10%",
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
  vstack1: {
    marginLeft: 30,
  },
  img: {
    width: "100%",
    marginTop: 15,
    marginBottom: 15,
    display: "flex",
    alignItems: "center",
  },
  divider: {
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    width: "100%",
    marginTop: 25,
    marginBottom: 25,
  },
  picture1: {
    width: 30,
    height: 30,
  },
});
