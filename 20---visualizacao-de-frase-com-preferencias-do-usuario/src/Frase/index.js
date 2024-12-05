import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function Frase({ isDia, isPequeno }) {
  return (
    <View style={[styles.fraseContainer, { backgroundColor: isDia ? '#ffe4e1' : '#ff69b4' }]}>
      <Text style={[styles.fraseTexto, { fontSize: isPequeno ? 16 : 24 }]}>
        "A vingança nunca é plena, mata a alma e envenena." (Seu Madruga)
      </Text>
    </View>
  );
}