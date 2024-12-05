// src/Conversor.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import styles, { pickerSelectStyles } from './styles';

export default function Conversor() {
  const [valor, setValor] = useState('');
  const [moedaDe, setMoedaDe] = useState('BRL');
  const [moedaPara, setMoedaPara] = useState('USD');
  const [resultado, setResultado] = useState('');

  const moedas = [
    { label: 'Real (BRL)', value: 'BRL' },
    { label: 'Dólar (USD)', value: 'USD' },
    { label: 'Euro (EUR)', value: 'EUR' },
    { label: 'Bitcoin (BTC)', value: 'BTC' }
  ];

  const converterMoeda = async () => {
    try {
      const response = await fetch(
        `https://economia.awesomeapi.com.br/json/last/${moedaDe}-${moedaPara}`
      );
      const data = await response.json();
      const taxa = data[`${moedaDe}${moedaPara}`].ask;
      const valorConvertido = (parseFloat(valor) * parseFloat(taxa)).toFixed(2);
      setResultado(`${valorConvertido} ${moedaPara}`);
    } catch (error) {
      setResultado('Erro na conversão');
    }
  };

  return (
    <LinearGradient
      colors={['#2E86C1', '#3498DB', '#85C1E9']}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.titulo}>Conversor de Moedas</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Digite o valor"
          placeholderTextColor="#666"
          keyboardType="numeric"
          value={valor}
          onChangeText={setValor}
        />

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>De:</Text>
          <RNPickerSelect
            style={pickerSelectStyles}
            value={moedaDe}
            onValueChange={setMoedaDe}
            items={moedas}
          />

          <Text style={styles.label}>Para:</Text>
          <RNPickerSelect
            style={pickerSelectStyles}
            value={moedaPara}
            onValueChange={setMoedaPara}
            items={moedas}
          />
        </View>

        <TouchableOpacity style={styles.botao} onPress={converterMoeda}>
          <Text style={styles.textoBotao}>Converter</Text>
        </TouchableOpacity>

        <Text style={styles.resultado}>{resultado}</Text>
      </View>
    </LinearGradient>
  );
}