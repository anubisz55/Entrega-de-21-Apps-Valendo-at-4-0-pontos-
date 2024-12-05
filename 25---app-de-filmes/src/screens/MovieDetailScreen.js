import React from 'react';
import { View, Text, ScrollView } from 'react-native'; 
import { styles } from '../styles/styles';

export default function MovieDetailScreen({ route }) {
  const { movie } = route.params; 

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.movieTitle}>{movie.nome} - Sinopse</Text>
      <Text style={styles.movieSynopsis}>{movie.sinopse}</Text>
    </ScrollView>
  );
}
