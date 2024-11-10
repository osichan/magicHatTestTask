import {
  NavigationProp,
  RouteProp,
  useFocusEffect,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";
import ResultLoggerComponent from "../../components/ResultLoggerComponent/ResultLoggerComponent";
import {
  requestToGetAllCharacters,
  requestToGetSingleCharacterById,
} from "../../services/api/PersonApi";
import { HOME_SCREEN_NAME } from "../../utils/constants/navigationNames";
import {
  setCharacterAsync,
  setNewCharacterAsync,
} from "../../utils/helpers/characterAsync";
import useResults from "../../utils/hooks/useResults";
import CharacterQuesType from "../../utils/types/CharacterQuesType";
import Character from "../../utils/types/CharacterType";
import styles from "./styles";

interface HomeScreenProps {
  route: RouteProp<
    Record<string, { characterQues?: CharacterQuesType }>,
    string
  >;
  navigation: NavigationProp<any>;
}

const HomeScreen = ({ route, navigation }: HomeScreenProps) => {
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
  const [character, setCharacter] = useState<Character | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { incrementTries, incrementFails, incrementSucceeded, decrementFails } =
    useResults();

  const getRandomCharacter = () => {
    if (allCharacters.length > 0) {
      const randomIndex = Math.floor(Math.random() * allCharacters?.length);
      setCharacter(allCharacters[randomIndex]);
    }
  };

  const handleAnswer = (
    choose: "Ravenclaw" | "Hufflepuff" | "Slytherin" | "Gryffindor" | ""
  ) => {
    if (character) {
      if (!route?.params?.characterQues) {
        setNewCharacterAsync({
          characterId: character.id,
          tries: 1,
          fails: choose === character?.house ? 0 : 1,
          isSucceeded: choose === character?.house,
        });
        if (choose === character?.house) {
          incrementSucceeded();
        } else {
          incrementFails();
        }
        incrementTries();

        getRandomCharacter();
      } else {
        setCharacterAsync({
          characterId: character.id,
          isSucceeded: choose === character?.house,
        });
        if (choose === character?.house) {
          decrementFails();
          incrementSucceeded();
        }

        navigation.navigate(HOME_SCREEN_NAME);
      }
    }
  };

  const refreshData = async () => {
    console.log("Refreshed");

    setIsRefreshing(true);

    const data = await requestToGetAllCharacters();
    if (data) {
      setAllCharacters(data);
      getRandomCharacter();
    }
    setIsRefreshing(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      const getAllCharacters = async () => {
        const data = await requestToGetAllCharacters();
        if (data) {
          setAllCharacters(data);
        }
      };

      const getSingleCharacters = async () => {
        const data = await requestToGetSingleCharacterById(
          // @ts-ignore it's impossible to characterQues be null
          route.params.characterQues?.characterId
        );

        if (data) {
          setCharacter(data);
        }
      };

      if (route?.params?.characterQues) {
        getSingleCharacters();
      } else {
        getAllCharacters();
      }
    }, [route?.params])
  );

  useEffect(() => {
    getRandomCharacter();
  }, [allCharacters]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      scrollEnabled={false}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={refreshData} />
      }
    >
      <ResultLoggerComponent />
      {character ? (
        <>
          <Text style={styles.characterName}>{character.name}</Text>

          {character.image ? (
            <Image
              source={{ uri: character.image }}
              style={styles.image}
              resizeMode="contain"
            />
          ) : (
            <View style={styles.image}>
              <Text>{"No Foto (("}</Text>
            </View>
          )}

          <View style={styles.buttonBlock}>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.gryffindorButton]}
                onPress={() => handleAnswer("Gryffindor")}
              >
                <Image
                  source={require("../../assets/GryffindorIcon.png")}
                  style={styles.houseImage}
                />
                <Text style={styles.buttonText}>Gryffindor</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.slytherinButton]}
                onPress={() => handleAnswer("Slytherin")}
              >
                <Image
                  source={require("../../assets/SlytherinIcon.png")}
                  style={styles.houseImage}
                />
                <Text style={styles.buttonText}>Slytherin</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.hufflepuffButton]}
                onPress={() => handleAnswer("Hufflepuff")}
              >
                <Image
                  source={require("../../assets/HufflepuffIcon.png")}
                  style={styles.houseImage}
                />
                <Text style={styles.buttonText}>Hufflepuff</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.ravenclawButton]}
                onPress={() => handleAnswer("Ravenclaw")}
              >
                <Image
                  source={require("../../assets/RavenclawIcon.png")}
                  style={styles.houseImage}
                />
                <Text style={styles.buttonText}>Ravenclaw</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.bottomButton, styles.notInHomeButton]}
                onPress={() => handleAnswer("")}
              >
                <Text style={styles.buttonText}>Not in home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default HomeScreen;
