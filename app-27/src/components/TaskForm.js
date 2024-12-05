import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from '../styles/styles';

export default function TaskForm({ onSubmit, selectedTask, onCancel }) {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
    } else {
      setTitle('');
    }
  }, [selectedTask]);

  const handleSubmit = () => {
    if (title.trim()) {
      const taskData = { title };
      if (selectedTask) taskData.id = selectedTask.id;
      onSubmit(taskData);
      setTitle('');
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Título da Tarefa"
        value={title}
        onChangeText={setTitle}
      />
      <Button title={selectedTask ? "Atualizar" : "Adicionar"} onPress={handleSubmit} />
      {selectedTask && <Button title="Cancelar" onPress={onCancel} color="red" />}
    </View>
  );
}
