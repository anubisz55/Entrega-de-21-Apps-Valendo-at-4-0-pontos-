import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../styles/styles'; 

export default function CepInput({ cep, setCep, onSearch }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP..."
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
        maxLength={8} 
      />

    
      <Button title="Buscar" onPress={onSearch} color="#007bff" />
    </View>
  );
}
