import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { requestToGetSingleCharacterById } from "../../services/api/PersonApi";
import {
  DETAILS_SCREEN_NAME,
  HOME_SCREEN_NAME,
} from "../../utils/constants/navigationNames";
import CharacterQuesType from "../../utils/types/CharacterQuesType";
import CharacterType from "../../utils/types/CharacterType";
import styles from "./styles";
import {
  DetailsScreenParamListBase,
  HomeScreenParamListBase,
} from "../../navigation/navigation";

interface ListScreenComponentProps {
  characterQuess: CharacterQuesType;
  searchQuery: string;
}

const ListScreenComponent = ({
  characterQuess,
  searchQuery,
}: ListScreenComponentProps) => {
  const [characterInfo, setCharacterInfo] = useState<CharacterType | null>(
    null
  );
  const navigation =
    useNavigation<
      NavigationProp<DetailsScreenParamListBase & HomeScreenParamListBase>
    >();

  useEffect(() => {
    const getCharacterInfo = async () => {
      const data = (await requestToGetSingleCharacterById(
        characterQuess.characterId
      )) as CharacterType;
      if (data) {
        setCharacterInfo(data);
      }
    };
    getCharacterInfo();
  }, []);

  if (!characterInfo) {
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.loadingText}>Loading ...</Text>
      </View>
    );
  } else if (
    !characterInfo.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  ) {
    return;
  }

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate(DETAILS_SCREEN_NAME, {
          characterInfo: characterInfo,
          isSucceeded: characterQuess.isSucceeded,
        })
      }
    >
      <View style={styles.imageContainer}>
        {characterInfo.image ? (
          <Image
            source={{ uri: characterInfo.image }}
            style={styles.characterImage}
            resizeMode="contain"
          />
        ) : (
          <View style={styles.imageContainer}>
            <Text>{"No Foto"}</Text>
          </View>
        )}
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoTextContainer}>
          <Text style={styles.characterName}>{characterInfo.name}</Text>
          <Text style={styles.statText}>Tries: {characterQuess.tries}</Text>
        </View>
        <View style={styles.successIcon}>
          {characterQuess.isSucceeded ? (
            <>
              <View style={styles.successIconImage} />
              <Image
                source={require("../../assets/SucceededIcon.png")}
                style={styles.successIconImage}
              />
            </>
          ) : (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(HOME_SCREEN_NAME, {
                    characterQues: characterQuess,
                  })
                }
              >
                <Image
                  source={require("../../assets/RetryIcon.png")}
                  style={styles.successIconImage}
                />
              </TouchableOpacity>
              <Image
                source={require("../../assets/FailedIcon.png")}
                style={styles.successIconImage}
              />
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListScreenComponent;
