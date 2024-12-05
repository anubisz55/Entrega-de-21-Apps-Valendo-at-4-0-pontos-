import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import MovieCard from '../components/MovieCard'; 
import { styles } from '../styles/styles'; 

export default function MovieListScreen({ navigation }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://sujeitoprogramador.com/r-api/?api=filmes');
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieCard 
            movie={item} 
            onPress={() => navigation.navigate('MovieDetail', { movie: item })}
          />
        )}
      />
    </View>
  );
}
