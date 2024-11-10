import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#3c4544",
  },
  characterName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#ccc",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 25,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#b8b8b8",
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBlock: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
    width: "100%",
  },
  button: {
    width: 140,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    elevation: 3,
    paddingTop: 10,
  },
  gryffindorButton: {
    backgroundColor: "#7B4747",
  },
  slytherinButton: {
    backgroundColor: "#457345",
  },
  hufflepuffButton: {
    backgroundColor: "#B89736",
  },
  ravenclawButton: {
    backgroundColor: "#446A8D",
  },
  bottomButton: {
    width: 280,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    elevation: 3,
  },
  notInHomeButton: {
    backgroundColor: "#6C6C6C",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
  houseImage: {
    width: 50,
    height: 55,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
});

export default styles;
