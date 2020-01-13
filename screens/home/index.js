import React from "react";
import { Text, View } from "react-native";
import BackButton from "../../components/BackButton";
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.headerText}>My awesome todo list</Text>
      </View>
      <View style={styles.body}></View>
    </View>
  );
}
