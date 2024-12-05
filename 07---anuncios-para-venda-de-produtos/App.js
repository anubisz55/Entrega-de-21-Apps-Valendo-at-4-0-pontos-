import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Anuncios from './src/anuncios/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Anuncios">
        <Stack.Screen 
          name="Anuncios" 
          component={Anuncios} 
          options={{ title: 'Anúncios de Cosméticos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
