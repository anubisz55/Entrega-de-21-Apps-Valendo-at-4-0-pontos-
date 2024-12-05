import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import CepResult from '../components/CepResult';
import CepInput from '../components/CepInput';
import { styles } from '../styles/styles'; 

export default function CepScreen() {
  const [cep, setCep] = useState('');
  const [cepData, setCepData] = useState(null);

  const fetchCepData = async () => {
    if (cep.length !== 8) {
      Alert.alert('Erro', 'Por favor, insira um CEP válido com 8 dígitos.');
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) {
        Alert.alert('Erro', 'CEP não encontrado.');
        setCepData(null);
      } else {
        setCepData(data);
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao buscar o CEP.');
      console.error(error);
      setCepData(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cep x Endereço</Text>

      <CepInput cep={cep} setCep={setCep} onSearch={fetchCepData} />

      {cepData && <CepResult data={cepData} />}
    </View>
  );
}
