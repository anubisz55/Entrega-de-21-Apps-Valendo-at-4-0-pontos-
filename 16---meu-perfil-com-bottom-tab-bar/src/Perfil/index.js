import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './styles';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8mxb5rXCPp6XX-bKwFJfH0igkXLYoHuhmbw&s' }} 
        style={styles.image}
      />
      <Text style={styles.name}>Nubia Abreu de Oliveira</Text>
      <Text style={styles.description}>Desenvolvedora Mobile | React Native</Text>
    </View>
  );
}