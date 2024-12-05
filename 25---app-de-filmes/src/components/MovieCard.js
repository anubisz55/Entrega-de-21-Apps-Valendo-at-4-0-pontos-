import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles'; 
export default function MovieCard({ movie, onPress }) {
  return (
    <View style={styles.movieCard}>
      <Text style={styles.movieTitle}>{movie.nome}</Text>

      <Image source={{ uri: movie.foto }} style={styles.movieImage} />

      <TouchableOpacity style={styles.moreButton} onPress={onPress}>
        <Text style={styles.moreButtonText}>Leia mais</Text>
      </TouchableOpacity>
    </View>
  );
}
