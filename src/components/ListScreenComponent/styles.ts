import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
  },
  loadingText: {
    fontSize: 18,
    color: "#666",
  },
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    borderRadius: 12,
    padding: 5,
    marginTop: 7,
    marginHorizontal: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: "hidden",
    marginRight: 16,
    alignContent: "center",
    justifyContent: "center",
  },
  characterImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
  },
  infoTextContainer: {
    flex: 1,
  },
  characterName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  statText: {
    fontSize: 14,
    color: "#555",
  },
  successIcon: {
    width: 70,
    height: 30,
    alignSelf: "center",
    flexDirection: "row",
  },
  successIconImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default styles;
