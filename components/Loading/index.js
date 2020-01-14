import React from "react";
import { ActivityIndicator, View } from "react-native";
import styles from "./styles";

export default Loading = () => {
  return (
    <View style={styles}>
      <ActivityIndicator size="large" color="#2ad2fc" />
    </View>
  );
};
