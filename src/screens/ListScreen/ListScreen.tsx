import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, TextInput } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ListScreenComponent from "../../components/ListScreenComponent/ListScreenComponent";
import ResultLoggerComponent from "../../components/ResultLoggerComponent/ResultLoggerComponent";
import { getCharactersAsync } from "../../utils/helpers/characterAsync";
import CharacterQuesType from "../../utils/types/CharacterQuesType";
import styles from "./styles";
import useResults from "../../utils/hooks/useResults";

const ListScreen = () => {
  const [allQuesCharacters, setAllQuesCharacters] = useState<
    CharacterQuesType[]
  >([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { tries } = useResults();

  useFocusEffect(
    React.useCallback(() => {
      const getCharactersQues = async () => {
        const characters = await getCharactersAsync();
        setAllQuesCharacters(characters);
      };
      getCharactersQues();
    }, [tries])
  );

  return (
    <View style={styles.container}>
      <ResultLoggerComponent />

      <TextInput
        style={styles.searchInput}
        placeholder="Search by name..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        style={{ width: "100%" }}
        data={allQuesCharacters}
        renderItem={({ item }) => (
          <ListScreenComponent
            characterQuess={item}
            searchQuery={searchQuery}
          />
        )}
      />
    </View>
  );
};

export default ListScreen;
