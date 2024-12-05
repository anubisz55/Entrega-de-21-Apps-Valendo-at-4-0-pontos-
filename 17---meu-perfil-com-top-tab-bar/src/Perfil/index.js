import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://link-da-sua-imagem.com/sua-imagem.jpg' }} 
        style={styles.image}
      />
      <Text style={styles.name}>Núbia Abreu de Oliveira</Text>
      <Text style={styles.description}>Desenvolvedora Mobile | React Native</Text>
    </View>
  );
}