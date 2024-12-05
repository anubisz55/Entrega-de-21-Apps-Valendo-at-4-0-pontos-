import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../styles/styles'; 

export default function SearchInput({ devLogin, setDevLogin, onSearch }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Digite o login do GitHub..."
        value={devLogin}
        onChangeText={setDevLogin}
      />

      <Button title="Buscar" onPress={onSearch} color="#007bff" />
    </View>
  );
}
