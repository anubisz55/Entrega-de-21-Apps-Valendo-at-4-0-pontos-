import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import DevProfile from '../components/DevProfile';
import SearchInput from '../components/SearchInput'; 
import { styles } from '../styles/styles'; 

export default function ProfileScreen() {
  const [devLogin, setDevLogin] = useState('');
  const [devData, setDevData] = useState(null);

  const fetchDevData = async () => {
    if (!devLogin) {
      Alert.alert('Erro', 'Por favor, insira um login válido.');
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${devLogin}`);
      const data = await response.json();
      if (data.message === 'Not Found') {
        Alert.alert('Erro', 'Usuário não encontrado.');
        setDevData(null);
      } else {
        setDevData(data);
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao buscar o perfil.');
      console.error(error);
      setDevData(null);
    }
  };

  return (
    <View style={styles.container}>
      <SearchInput devLogin={devLogin} setDevLogin={setDevLogin} onSearch={fetchDevData} />

      {devData && <DevProfile data={devData} />}
    </View>
  );
}
