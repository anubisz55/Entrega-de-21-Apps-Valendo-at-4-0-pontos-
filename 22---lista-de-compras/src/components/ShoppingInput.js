import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../styles/styles'; 

export default function ShoppingInput({ newItem, setNewItem, onSave, onCancel }) {
  
  return (
    <View style={styles.inputContainer}>
      
      <TextInput
        placeholder="Mercadoria"
        value={newItem.name}
        onChangeText={(text) => setNewItem({ ...newItem, name: text })}
        style={styles.input}
      />

      <TextInput
        placeholder="Quantidade"
        value={newItem.quantity}
        onChangeText={(text) => setNewItem({ ...newItem, quantity: text })}
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button title="Cancelar" onPress={onCancel} color="#6c757d" />
        <Button title="Salvar" onPress={onSave} color="#007bff" />
      </View>

    </View>
  );
}
