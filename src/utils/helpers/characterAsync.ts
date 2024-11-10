import { deleteAsyncData, getAsyncData, saveAsyncData } from "../AsyncStorage";
import { CHARACTER_LIST_KEY } from "../constants/asyncStorageKeys";
import CharacterQuesType from "../types/CharacterQuesType";

interface setCharacterAsyncProps {
  characterId: string;
  isSucceeded: boolean;
}

const setAllCharactersAsync = async (charactersData: CharacterQuesType[]) => {
  saveAsyncData(CHARACTER_LIST_KEY, charactersData);
};

const setNewCharacterAsync = async (characterData: CharacterQuesType) => {
  const allData = await getCharactersAsync();
  if (allData) {
    saveAsyncData(CHARACTER_LIST_KEY, [...allData, characterData]);
  } else {
    saveAsyncData(CHARACTER_LIST_KEY, [characterData]);
  }
};

const setCharacterAsync = async ({
  characterId,
  isSucceeded,
}: setCharacterAsyncProps) => {
  const allData = await getCharactersAsync();
  const updatedData = allData.map((character) => {
    if (character?.characterId === characterId) {
      if (isSucceeded) {
        return {
          ...character,
          isSucceeded: true,
          tries: character.tries + 1,
        };
      } else {
        return {
          ...character,
          fails: character.fails + 1,
          tries: character.tries + 1,
        };
      }
    }
    return character;
  });

  setAllCharactersAsync(updatedData);
};

const getCharactersAsync = async () => {
  return (await getAsyncData(CHARACTER_LIST_KEY)) as CharacterQuesType[];
};

const clearCharacterAsync = async () => {
  await deleteAsyncData(CHARACTER_LIST_KEY);
};

export {
  setAllCharactersAsync,
  setCharacterAsync,
  setNewCharacterAsync,
  getCharactersAsync,
  clearCharacterAsync,
};
