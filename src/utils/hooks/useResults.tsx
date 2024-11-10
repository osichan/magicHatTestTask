import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getAsyncData } from "../AsyncStorage";
import { CHARACTER_LIST_KEY } from "../constants/asyncStorageKeys";
import CharacterQuesType from "../types/CharacterQuesType";

interface ResultsContextType {
  tries: number;
  fails: number;
  succeeded: number;
  incrementTries: () => void;
  incrementFails: () => void;
  incrementSucceeded: () => void;
  decrementFails: () => void;
  resetAll: () => void;
}

const ResultsContext = createContext<ResultsContextType | undefined>(undefined);

export const ResultsProvider = ({ children }: { children: ReactNode }) => {
  const [tries, setTries] = useState(0);
  const [fails, setFails] = useState(0);
  const [succeeded, setSucceeded] = useState(0);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const charactersQues = (await getAsyncData(
          CHARACTER_LIST_KEY
        )) as CharacterQuesType[];

        let failCount = 0;
        let successCount = 0;
        const totalTries = charactersQues ? charactersQues.length : 0;

        charactersQues?.forEach((character) => {
          if (character.isSucceeded) {
            successCount++;
          } else {
            failCount++;
          }
        });

        setTries(totalTries);
        setFails(failCount);
        setSucceeded(successCount);
      } catch (error) {
        console.error("Error loading stats from AsyncStorage", error);
      }
    };

    loadStats();
  }, []);

  const incrementTries = () => {
    setTries((prev) => prev + 1);
  };

  const incrementFails = () => {
    setFails((prev) => prev + 1);
  };

  const decrementFails = () => {
    setFails((prev) => prev - 1);
  };

  const incrementSucceeded = () => {
    setSucceeded((prev) => prev + 1);
  };

  const resetAll = () => {
    setTries(0);
    setFails(0);
    setSucceeded(0);
  };

  return (
    <ResultsContext.Provider
      value={{
        tries,
        fails,
        succeeded,
        incrementTries,
        incrementFails,
        incrementSucceeded,
        decrementFails,
        resetAll,
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
};

const useResults = () => {
  const context = useContext(ResultsContext);
  if (!context) {
    throw new Error("useResults must be used within a ResultsProvider");
  }
  return context;
};

export default useResults;
