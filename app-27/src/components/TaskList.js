import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import styles from '../styles/styles';

export default function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.taskItem}>
          <Text style={styles.taskTitle}>{item.title}</Text>
          <Button title="Editar" onPress={() => onEdit(item)} />
          <Button title="Excluir" onPress={() => onDelete(item.id)} color="red" />
        </View>
      )}
    />
  );
}
