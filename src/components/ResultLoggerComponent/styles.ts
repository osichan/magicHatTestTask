import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  topViews: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 20,
  },
  viewBox: {
    width: 90,
    height: 90,
    backgroundColor: "#4280A4",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#424242",
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  boxNumber: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
  },
  boxText: {
    marginTop: 5,
    textAlign: "center",
    fontWeight: "400",
    fontSize: 16,
  },
});

export default styles;
