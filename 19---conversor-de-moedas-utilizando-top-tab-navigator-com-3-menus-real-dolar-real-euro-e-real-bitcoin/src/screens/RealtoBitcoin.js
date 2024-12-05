import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const RealToBitcoin = () => {
  const [real, setReal] = useState('');
  const [bitcoin, setBitcoin] = useState(null);

  const convertRealToBitcoin = async () => {
    if (real) {
      try {
        const response = await axios.get(`https://api.coindesk.com/v1/bpi/currentprice/BRL.json`);
        const rate = response.data.bpi.BRL.rate_float;
        const result = parseFloat(real) / rate;
        setBitcoin(result);
      } catch (error) {
        console.error('Erro ao obter a taxa de câmbio do Bitcoin:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor: Real para Bitcoin</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor em Reais"
        keyboardType="numeric"
        value={real}
        onChangeText={setReal}
      />
      <Button title="Converter" onPress={convertRealToBitcoin} />
      {bitcoin !== null && (
        <Text style={styles.result}>
          Valor em Bitcoin: {bitcoin.toFixed(8)} BTC
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
    color: '#FF0000',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: '#FFFF00',
  },
});

export default RealToBitcoin;
