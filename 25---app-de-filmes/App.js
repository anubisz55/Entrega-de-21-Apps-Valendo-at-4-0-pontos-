import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieListScreen from './src/screens/MovieListScreen';
import MovieDetailScreen from './src/screens/MovieDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MovieList">
        <Stack.Screen name="MovieList" component={MovieListScreen} options={{ title: 'App de Filmes' }} />
        <Stack.Screen name="MovieDetail" component={MovieDetailScreen} options={{ title: 'Sinopse' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
