import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function RealBitcoin() {
  const [real, setReal] = useState('');
  const [bitcoin, setBitcoin] = useState(null);

  const converter = () => {
    const valorEmBitcoin = parseFloat(real) / 150000; 
    setBitcoin(valorEmBitcoin.toFixed(6));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor Real para Bitcoin</Text>
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
      {bitcoin && (
        <Text style={styles.result}>
          Valor em Bitcoins: ₿{bitcoin}
        </Text>
      )}
    </View>
  );
}