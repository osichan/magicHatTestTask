import React from "react";
import { Text, View } from "react-native";
import useResults from "../../utils/hooks/useResults";
import styles from "./styles";

const ResultLoggerComponent = () => {
  const { tries, fails, succeeded } = useResults();

  return (
    <View style={styles.topViews}>
      <View style={styles.viewBox}>
        <Text style={styles.boxNumber}>{tries}</Text>
        <Text style={styles.boxText}>Total</Text>
      </View>
      <View style={[styles.viewBox, { backgroundColor: "#784542" }]}>
        <Text style={styles.boxNumber}>{fails}</Text>
        <Text style={styles.boxText}>Failed</Text>
      </View>
      <View style={[styles.viewBox, { backgroundColor: "#487842" }]}>
        <Text style={styles.boxNumber}>{succeeded}</Text>
        <Text style={styles.boxText}>Succeeded</Text>
      </View>
    </View>
  );
};

export default ResultLoggerComponent;
