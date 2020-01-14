import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

export default function Todo({ todo }) {
  console.log(todo);

  const { completed, createdAt, name, picture } = todo;

  return (
    <View style={styles.container}>
      <Image source={{ uri: picture }} style={styles.picture} />
      <View style={styles.details}>
        <Text style={styles.todoText}>{name}</Text>
        <Text style={[styles.todoText, { color: "#818993" }]}>{createdAt}</Text>
      </View>
    </View>
  );
}
