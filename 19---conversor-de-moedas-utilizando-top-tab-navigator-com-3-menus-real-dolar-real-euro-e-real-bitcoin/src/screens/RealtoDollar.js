import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const RealToDollar = () => {
  const [real, setReal] = useState('');
  const [dollar, setDollar] = useState(null);

  const convertRealToDollar = async () => {
    if (real) {
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/BRL`);
        const rate = response.data.rates.USD;
        const result = parseFloat(real) * rate;
        setDollar(result);
      } catch (error) {
        console.error('Erro ao obter a taxa de câmbio:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor: Real para Dólar</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor em Reais"
        keyboardType="numeric"
        value={real}
        onChangeText={setReal}
      />
      <Button title="Converter" onPress={convertRealToDollar} />
      {dollar !== null && (
        <Text style={styles.result}>
          Valor em Dólar: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dollar)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F4F4F',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#7FFF00',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#7FFF00',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingLeft: 10,
    color: '#fff',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: '#FFFF00',
  },
});

export default RealToDollar;
