import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

export default function CepResult({ data }) {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>CEP: {data.cep}</Text>
      <Text style={styles.resultText}>Logradouro: {data.logradouro}</Text>
      <Text style={styles.resultText}>Bairro: {data.bairro}</Text>
      <Text style={styles.resultText}>Cidade: {data.localidade}</Text>
      <Text style={styles.resultText}>Estado: {data.uf}</Text>
    </View>
  );
}
