import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function RealDolar() {
  const [real, setReal] = useState('');
  const [dolar, setDolar] = useState(null);

  const converter = () => {
    const valorEmDolar = parseFloat(real) / 5.0; 
    setDolar(valorEmDolar.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor Real para Dólar</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor em Reais"
        keyboardType="numeric"
        value={real}
        onChangeText={(value) => setReal(value)}
      />
      <TouchableOpacity style={styles.button} onPress={converter}>
        <Text style={styles.buttonText}>Converter</Text>
      </TouchableOpacity>
      {dolar && (
        <Text style={styles.result}>
          Valor em Dólares: ${dolar}
        </Text>
      )}
    </View>
  );
}