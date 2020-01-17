import React from "react";
import { Text, View, Image } from "react-native";
import DeleteButton from "../../assets/DeleteButton";
import Button from "../Button";

import styles from "./styles";

export default function Todo({ todo }) {
  const { completed, createdAt, name, picture, id } = todo;

  const deleteContact = id => {
    console.tron.log({ id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.online} />
      <Image source={{ uri: picture }} style={styles.picture} />
      <View style={styles.details}>
        <Text style={styles.todoText}>{name}</Text>
        <Text style={[styles.todoText, { color: "#818993" }]}>{createdAt}</Text>
      </View>
      <Button style={styles.delete} onPress={() => deleteContact(id)}>
        <DeleteButton />
      </Button>
    </View>
  );
}
