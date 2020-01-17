import React, { useContext, useEffect } from "react";
import { View, FlatList } from "react-native";
import { StoreContext } from "../../store";
import AppLoading from "../../components/Loading";
import getTodos from "../../store/actions";
import Todo from "../../components/Todo";

export default function TodoList() {
  const [store, dispatch] = useContext(StoreContext);

  useEffect(() => {
    getTodos()(dispatch);
  }, []);

  return !store.isLoading ? (
    <View style={styles.todoList}>
      <FlatList
        data={store.todos}
        renderItem={({ item }) => <Todo todo={item} />}
        keyExtractor={todo => todo.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      />
    </View>
  ) : (
    <AppLoading />
  );
}
