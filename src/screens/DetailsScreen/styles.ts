import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#3c4544",
  },
  imageContainer: {
    flex: 2,
    height: 200,
    marginRight: 16,
    alignContent: "center",
  },
  imageContainerText: {
    textAlign: "center",
    marginTop: 30,
    color: "#ccc",
    fontSize: 18,
  },
  characterImage: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#b8b8b8",
  },
  infoContainer: {
    flex: 3,
    padding: 10,
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 18,
    color: "#ccc",
    marginBottom: 8,
  },
  buttonBlock: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  accessDeniedImage: {
    height: 100,
    width: "100%",
    marginTop: 20,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#fff",
    marginBottom: 4,
  },
});

export default styles;
