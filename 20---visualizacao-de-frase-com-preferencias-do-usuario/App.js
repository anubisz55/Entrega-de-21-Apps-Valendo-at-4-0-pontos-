import React, { useState } from 'react';
import { View, Switch, Text, SafeAreaView } from 'react-native';
import Frase from './src/Frase'; // Importando o componente Frase
import styles from './src/Frase/styles';

export default function App() {
  const [isDia, setIsDia] = useState(true);
  const [isPequeno, setIsPequeno] = useState(true);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDia ? '#ffe4e1' : '#ff69b4' }]}>
      <View style={styles.switchContainer}>
        <Text>Dia</Text>
        <Switch value={isDia} onValueChange={setIsDia} />
        <Text>Pequeno</Text>
        <Switch value={isPequeno} onValueChange={setIsPequeno} />
      </View>
      <Frase isDia={isDia} isPequeno={isPequeno} />
    </SafeAreaView>
  );
}