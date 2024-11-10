import React from "react";
import { SafeAreaView } from "react-native";
import AppContainer from "./src/navigation/navigation";
import { ResultsProvider } from "./src/utils/hooks/useResults";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ResultsProvider>
        <AppContainer />
      </ResultsProvider>
    </SafeAreaView>
  );
};

export default App;
