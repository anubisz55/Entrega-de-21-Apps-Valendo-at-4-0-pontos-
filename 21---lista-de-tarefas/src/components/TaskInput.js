import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../styles/styles';

export default function TaskInput({ newTask, setNewTask, onSave, onCancel }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Nome da Tarefa"
        value={newTask}
        onChangeText={setNewTask}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button title="Cancelar" onPress={onCancel} color="#6c757d" />
        <Button title="Salvar" onPress={onSave} color="#007bff" />
      </View>
    </View>
  );
}
