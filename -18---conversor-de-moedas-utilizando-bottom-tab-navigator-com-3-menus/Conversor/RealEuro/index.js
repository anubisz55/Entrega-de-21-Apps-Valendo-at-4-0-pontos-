import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function RealEuro() {
  const [real, setReal] = useState('');
  const [euro, setEuro] = useState(null);

  const converter = () => {
    const valorEmEuro = parseFloat(real) / 5.5; 
    setEuro(valorEmEuro.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor Real para Euro</Text>
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
      {euro && (
        <Text style={styles.result}>
          Valor em Euros: €{euro}
        </Text>
      )}
    </View>
  );
}