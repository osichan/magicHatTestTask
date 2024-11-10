import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import CharacterType from "../../utils/types/CharacterType";
import styles from "./styles";

interface DetailsScreenProps {
  route: RouteProp<
    Record<string, { characterInfo: CharacterType; isSucceeded: boolean }>,
    string
  >;
}

const DetailsScreen = ({
  route: {
    params: { characterInfo, isSucceeded },
  },
}: DetailsScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {characterInfo.image ? (
          <Image
            source={{ uri: characterInfo.image }}
            style={styles.characterImage}
          />
        ) : (
          <View style={styles.imageContainer}>
            <Text style={styles.imageContainerText}>{"No foto (("}</Text>
          </View>
        )}
      </View>

      <View style={styles.infoContainer}>
        {isSucceeded ? (
          <>
            <Text style={styles.infoText}>
              Species: {characterInfo.species}
            </Text>
            <Text style={styles.infoText}>Gender: {characterInfo.gender}</Text>
            <Text style={styles.infoText}>House: {characterInfo.house}</Text>
            <Text style={styles.infoText}>
              Date of Birth: {characterInfo.dateOfBirth || "Unknown"}
            </Text>
            <Text style={styles.infoText}>
              Wand: {characterInfo.wand.wood}, {characterInfo.wand.core}
            </Text>
            <Text style={styles.infoText}>
              Patronus: {characterInfo.patronus}
            </Text>
            <Text style={styles.infoText}>Actor: {characterInfo.actor}</Text>
            <Text style={styles.infoText}>
              Alive: {characterInfo.alive ? "Yes" : "No"}
            </Text>
          </>
        ) : (
          <Image
            source={require("../../assets/AccessDenied.webp")}
            style={{ height: 100, width: "100%" }}
          />
        )}
      </View>
    </View>
  );
};

export default DetailsScreen;
